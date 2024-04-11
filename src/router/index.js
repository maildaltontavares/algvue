import {createRouter, createWebHistory} from "vue-router";
import LoginComponent from '@/views/LoginComponent.vue';
import HomeComponent from '@/views/HomeComponent.vue';
import Usuario from '@/views/UsuarioComponent.vue' ;
import UsuarioPesquisa from '@/views/UsuarioPesquisaComponent.vue';
import UsuarioLoginComponent from '@/views/UsuarioLoginComponent.vue'
import UsuarioLoginPesquisa  from '@/views/UsuarioLoginPesquisaComponent.vue'
import TrocarSenha from '@/views/TrocarSenhaComponent.vue'
import MovimentacaoEstoque from '@/views/MovimentacaoEstoqueComponent.vue'
import MovimentacaoEstoquePesquisa  from '@/views/MovimentacaoEstoquePesquisaComponent.vue'
import Mistura  from '@/views/MisturaComponent.vue'


import store from '@/store/index'
import axios from 'axios' 

const routes =  
    [
       
        {
            path: '/alg',
            component: LoginComponent  ,
        // meta fields são usados nas guardas de rotas
            meta: { requerAutorizacao: false, codigoPagina: 'pagLogin' }    ,        
            name:'login' 
            
        } , 
  
  
       {
            path: '/alg/home',
            component: HomeComponent,
            meta: { requerAutorizacao: false, codigoPagina: 'pagHome' }    ,
            name: 'home' ,
            children: [ 


                {
                    path: 'usuariologinpesquisa/:sistemaProps',
                    props: true,
                    component: UsuarioLoginPesquisa,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioLoginPesquisa' }    , 
                    name: 'usuariologinpesquisa' 
                      
                  },   
                   
  
                  {
                    path: 'usuariologin/:sistemaProps/:usuarioProps/:operacao',
                    props: true,
                    component: UsuarioLoginComponent,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioLogin' }    , 
                    name: 'usuarioLogin' 
                      
                  } ,



                {
                    path: 'usuario/:codigoProps/:operacao',            
                    props: true,      
                    component: Usuario,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagUsuario' }    , 
                    name: 'usuario' 
                      
                  }, 

                  {
                    path: 'usuariopesquisa',            
                    props: true,      
                    component: UsuarioPesquisa,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagUsuarioPesquisa' }    , 
                    name: 'usuariopesquisa' 
                      
                  }, 

                  {
                    path: 'trocarsenha/:sistemaProps/:usuarioProps',
                    props: true,
                    component: TrocarSenha,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagTrocarSenha' }    , 
                    name: 'trocarsenha' 
                      
                  },   
                   
  
                  {
                    path: 'movimentacaoestoque/:fornecedorProps/:notaFiscalProps/:operacao',
                    props: true,
                    component: MovimentacaoEstoque,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagMovimentacaoEstoque' }    , 
                    name: 'movimentacaoestoque' 
                      
                  }   
                  ,   
                   
  
                  {
                    path: 'movimentacaoestoquepesquisa',
                    props: true,
                    component: MovimentacaoEstoquePesquisa,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagMovimentacaoEstoquePesquisa' }    , 
                    name: 'movimentacaoestoquepesquisa' 
                      
                  }   ,   
                   
  
                  {
                    path: 'misturapadrao',
                    props: true,
                    component: Mistura,
                    meta: { requerAutorizacao: false, codigoPagina: 'pagMisturaPadrao' }    , 
                    name: 'misturapadrao' 
                      
                  }          

                ]
        }
         
    ]

const router = createRouter({
    history: createWebHistory(),
    base: process.env.VUE_APP_BASE_URL,
    routes
    })    


 
 

router.beforeEach(async (to ) => {
      // verificar se o usuario possui permissao de acesso à rota
      // to -> Para onde vai
      // from -> de onde vem
  

     //console.log('rotas')
      if (to.name != 'login' && store.state.usuarioSistema.codigo == '') {  
          return { name: 'login' }
      }
  
      if (to.name != 'login' && process.env.VUE_APP_SEGURANCA == 'S') {


        //console.log('url 33333')
        //console.log(store.state.permissoesUsuario.length)   
        //console.log(store.state.usuarioSistema.codigo)  

        //console.log(store.state.permissoesUsuario.length == 0 && store.state.usuarioSistema.codigo != '')  


       
          if (store.state.permissoesUsuario.length == 0 && store.state.usuarioSistema.codigo != '') {
              let url = `${process.env.VUE_APP_BASE_URL}/usuarioseg/permissao/${process.env.VUE_APP_SISTEMA}/${store.state.usuarioSistema.codigo}`;
              
              //console.log(url)
              //console.log(process.env.VUE_APP_TOKEN)   
              //console.log(store.state._token)  

              if(process.env.VUE_APP_TOKEN==false){

              
                    await axios.get(url, 

                     )
                        .then(response => {
                            store.state.permissoesUsuario = response.data
                      
                            //console.log(response.data)
                            //console.log(this.$store.state.permissoesUsuario);
                        })
                        .catch(error => {
                
                            console.log("Erro: ", error.response);
                            return { name: 'login' }
                        }
                        );

              }else{

                        //console.log('com token')
                        await axios.get(url , 
                          { headers: { 'Authorization': store.state._token} }
                          )
                        .then(response => {
                            store.state.permissoesUsuario = response.data
                      
                            //console.log(response.data)
                            //console.log(this.$store.state.permissoesUsuario);
                        })
                        .catch(error => {
                
                            console.log("Erro: ", error.response);
                            return { name: 'login' }
                        }
                        );


              }
          }
  
          if (to.name != 'login' && store.state.permissoesUsuario.length == 0) {
              alert("Usuário sem permissões ao sistema !")
              return false
          }
  
          if (to.meta.requerAutorizacao) {
  
              store.state.permissaoUsuario = store.state.permissoesUsuario.find(item => item.PAGINA_SIGLA.trim() === to.meta.codigoPagina.trim())
  
              if (to.name != 'login' && store.state.permissaoUsuario == undefined) {
                  alert("Usuário sem permissões na página: " + to.meta.codigoPagina.trim() + " !")
                  return false
              }
  
              //console.log('Permissao: ', store.state.permissaoUsuario, store.state.permissaoUsuario.ACESSO)
  
              if (to.name != 'login'
                  && store.state.permissoesUsuario.length > 0
                  && store.state.usuarioSistema.codigo != ''
                  && store.state.permissaoUsuario.ACESSO != 'S') {
                  alert("Acesso Não Autorizado!")
                  return false
              }
          }
  
      }
})
 

export default router