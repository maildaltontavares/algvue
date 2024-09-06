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
import AcessoBaixarMisturaPadrao from '@/views/AcessoBaixarMisturaComponent.vue'
import AcessoManutencaoMistura  from '@/views/AcessoManutencaoMisturaComponent.vue'
import Pilha  from '@/views/PilhaComponent.vue'
import AcessoUnirPilha  from '@/views/AcessoUnirPilhaComponent.vue'
import AcessoLocalizarPilha  from '@/views/AcessoLocalizarPilhaComponent.vue'
import ConsultaEstoque  from '@/views/ConsultaEstoqueComponent.vue'
import LocalizarPilha  from '@/views/LocalizarPilhaComponent.vue'
import TestesCQ  from '@/views/TestesCQComponent.vue'
import TestesCQPesquisa  from '@/views/TestesCQPesquisaComponent.vue'
import ProducaoAbertura  from '@/views/ProducaoAberturaComponent.vue'
import ProducaoAberturaPesquisa  from '@/views/ProducaoAberturaPesquisaComponent.vue'

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
                    path: 'misturapadrao/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: Mistura,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagMisturaPadrao' }    , 
                    name: 'misturapadrao' 
                      
                  }       ,   
                   

                  {
                    path: 'misturapadrao/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: Mistura,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagManterMisturaPadrao' }    , 
                    name: 'mantermisturapadrao' 
                      
                  }       ,     
                  
                  {
                    path: 'baixarmisturapadrao/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: AcessoBaixarMisturaPadrao,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagBaixarMisturaPadrao' }    , 
                    name: 'baixarmisturapadrao' 
                      
                  }       ,                    
  
                  {
    
                    path: 'acessomisturapadrao/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: AcessoManutencaoMistura,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagAcessoMisturaPadrao' }    , 
                    name: 'acessomisturapadrao' 
                      
                  },
                  {
                    path: 'manterapilha/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: Pilha,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagManterPilha' }    , 
                    name: 'manterpilha' 
                      
                  }  ,   
                  
                  {
                    path: 'acessounirpilha/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: AcessoUnirPilha,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagUnirPilha' }    , 
                    name: 'acessounirpilha' 
                      
                  }   
                  
                  ,   
                  
                  {
                    path: 'acessolocalizarpilha/:tituloProps/:labelPesquisarComposicaoProps/:acaoSelecionadaProps',
                    props: true,
                    component: AcessoLocalizarPilha,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagLocalizarPilha' }    , 
                    name: 'acessolocalizarpilha' 
                      
                  }     
                  
                  ,   
                  
                  {
                    path: 'consultaestoque',
                    props: false,
                    component: ConsultaEstoque,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagConsultaEstoque' }    , 
                    name: 'consultaestoque' 
                      
                  }    ,   
                  
                  {
                    path: 'localizarpilha',
                    props: false,
                    component: LocalizarPilha,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagLocalizarPilha' }    , 
                    name: 'localizarpilha' 
                      
                  } ,   
                  
                  {
                    path: 'testecq/:produtorProps/:loteProps/:itemProps/:operacao',
                    props: true,
                    component: TestesCQ,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagTesteCQ' }    , 
                    name: 'testecq' 
                      
                  }  ,   
                   
  
                  {
                    path: 'testecqpesquisa',
                    props: false,
                    component: TestesCQPesquisa,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagTesteCQPesquisa' }    , 
                    name: 'testecqpesquisa' 
                      
                  }  ,   
                   
  
                  {
                    path: 'producaoabertura/:misturaProps/:seqProps/:operacao', 
                    props: true,
                    component: ProducaoAbertura,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoAbertura' }    , 
                    name: 'producaoabertura' 
                      
                  }   ,   
                   
  
                  {
                    path: 'producaoaberturapesquisa',
                    props: true,
                    component: ProducaoAberturaPesquisa,
                    meta: { requerAutorizacao: true, codigoPagina: 'pagProducaoAberturaPesquisa' }    , 
                    name: 'producaoaberturapesquisa' 
                      
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