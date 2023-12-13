<template>

        <v-container>

            <div class="d-flex justify-content-center"  >  

                    <!--style="background-color:rgb(240, 237, 232); "  -->
                    <v-card rounded="lg" class=" elevation-12" 
                          
                        :style="{  minWidth:  this.$store.state.larguraCardPesq,
                                   height:  this.$store.state.alturaCardPesq }" 
                        
                        >  

                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                        
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Credenciais</b></p>                               
                            </div>
                        </div>    




                        <div class="flex-linha  " style="justify-content: center;width:100%; padding: 10px; margin-top:2%"> 
                    
                                            
                                <div class="row  espacoEntreComponentes  "  style="height:70px"  > 
                                    <div class=" text-start">
                                        <v-autocomplete
                                            label="Sistema"
                                            :items="sistema"  
                                            @blur="buscaByChave" 
                                            v-model="this.usuarioParams.idSistema"   
                                            item-title="nome" 
                                            item-value="id"  
                                            style="min-width: 300px;"  
                                            variant="outlined"
                                            bg-color="white"  
                                    
                                        ></v-autocomplete> 
                                    </div> 
                                </div>   


                                <div class="row   espacoEntreComponentes "   style=" height:70px"   > 
                                    <div class=" text-start">    

                                        <v-text-field
                                            v-model="this.usuarioParams.nomeUsuario" 
                                            label="Nome Usuario"
                                            hide-details="auto"                            
                                            id="nomeUsuario" 
                                            maxlength="80"                                        
                                            ref="nomeUsuario"      
                                            style="min-width: 300px;"  
                                            variant="outlined"
                                            bg-color="white"  
                                        ></v-text-field>
                                    </div>
                                </div>    

                                <div class="row   espacoEntreComponentes "   style=" height:70px"   > 
                                    <div class=" text-start">    

                                        <v-text-field
                                            v-model="this.usuarioParams.login" 
                                            label="Login"
                                            hide-details="auto"                            
                                            id="login" 
                                            maxlength="80"                                        
                                            ref="login"      
                                            style="min-width: 300px;"  
                                            variant="outlined"
                                            bg-color="white"  
                                        ></v-text-field>
                                    </div>
                                </div>   




                                


                             


                                <div class="row   espacoEntreComponentes "   style=" height:70px"   > 
                                    <div class=" text-start">    

                                        <v-btn @click="pesquisaDados" style="height:53px;width:200px;background-color:rgb(240, 237, 232);" >
        
                                            <v-icon left                                               
                                                color="primary"
                                                icon="mdi-card-search-outline"
                                                size="45"
                                            ></v-icon> 

                                            <span class="my-auto" style="margin-bottom:35px">Pesquisar</span> <!-- Texto centralizado -->

                                        </v-btn>  
                                    </div>
                                </div>     
 

                        </div>

                        <div class="container-fluid">
                            <table class="table table-sm table-striped tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                    <tr>
                                        <th class="col-1">SISTEMA</th> 
                                        <th class="col-1 text-start">USUARIO</th> 
                                        <th class="col-1 text-start">LOGIN</th> 
                                        <th class="col-1 text-start">OPER</th> 
                                        
                                            
                                    </tr>
                                </thead>   


                                <tbody>
                                        <template v-if="apiDisplayedDadosCRUD">
                                    
                                            <tr v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">  
                                            
                                                <td class="col-2 text-start">
                                                        {{i.sigla}} - {{ i.desc_sistema }}
                                                </td> 

                                                <td class="col-2 text-start">
                                                    {{ i.nome_usu }} (id:2{{ i.id_usu }} )
                                                </td> 
                                                
                                                <td class="col-2 text-start">
                                                        {{ i.login }}
                                                </td>                        
                            
                                        
                                                
                                                <th class="col-1">  
                                                        <v-btn  icon="mdi-pencil" text="Editar"  :to="{name:'usuarioLogin' , params : {sistemaProps :i.sistema , usuarioProps :i.id_usu  , operacao : 'A' }}" style="background-color:rgb(83, 138, 83);margin-right: 10px;margin-top:1px;height:30px;width:30px; ">  </v-btn>
                                                </th>  

                                                

                                                    
                                            </tr>
                                        </template> 

                                </tbody> 
                                
                            
                            </table> 

                            
                        </div>
                        
                        <div class="mt-4" v-if="exibePaginador">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm justify-content-center">
                                        <li class="page-item">
                                            <button type="button" class="page-link" v-if="page != 1" @click="page--"> Anterior </button>
                                        </li>
                                        <li class="page-item" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber">
                                            <button type="button" class="page-link" @click="page = pageNumber"> {{pageNumber}} </button>
                                        </li>
                                        <li class="page-item">
                                            <button type="button" class="page-link" v-if="page < pages.length" @click="page++"> Próxima </button>
                                        </li>
                                        </ul>
                                    </nav>
                        </div> 

                        

                        <div style="height:80px">   <!--   Libera espaco da barra de botoes no mobile-->
                        
                        </div>   
        

                    </v-card>

            </div>  

        </v-container>     


        <v-container> 
 
            <div class="d-flex justify-content-center" > 


                <MensagemMobile    v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "    class="rodape_mobile"
                style=" margin-bottom:60px"
                :mensagemSucessoProps="mensagemSucesso" 
                :mensagemErroProps="mensagemErro"
                :haErrosProps="haErros"
                :haSucessoProps= "haSucesso"
                />  

                <v-card rounded="lg" class=" elevation-12 rodape_crud2" 
                        style="position: fixed;background-color:rgb(173, 173, 187);"  :style="{marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
                                            width:  this.$store.state.configuracaoTela.tamanhoRodape,
                                            height:  this.$store.state.configuracaoTela.alturaRodape   }" > 
                        
                        
                        <div class=" d-flex justify-space-between ">  

                            <div class="col-9 "  >

                                <p v-if="msgProcessamento != ''" class=" mensagem mensagem_processando" style="font-size: 16px;">
                                    {{ msgProcessamento }}
                                </p>       

                                <p v-if="haErros && this.$store.state.tipoDispositivo == 'desktop'" class="mensagem mensagem_erro">
                                    {{ mensagemErro }}
                                </p>
                                <p v-if="haSucesso && this.$store.state.tipoDispositivo == 'desktop'"  class="mensagem mensagem_sucesso">
                                    {{ mensagemSucesso }}
                                </p>
                            </div> 

                        
                            <div class="col-3 div_rodape d-flex justify-content-end">
                                <v-btn   color="secondary"  class="botao_rodape"  style="width:180px;min-width: 180px;" @click="resetaCampos" accesskey="l"><u>L</u>impar pesquisa</v-btn>                                
                                <v-btn color="primary" class="botao_rodape"  style="margin-right: 5px;" accesskey="n" @click="NavegarParaInclusao"> <u>N</u>ovo </v-btn  >  
                           </div> 

                        </div>    
                </v-card>   
            </div>
        </v-container>     
    
    
</template>

<script> 

import ApiMixin from '@/mixins/ApiMixin' 
 import { mapState } from 'vuex'
import ApiMixinSEG from '@/mixins/ApiMixinSEG';

 export default {
        
        name: 'UsuarioLoginPesquisaComponent',
        mixins: [ApiMixin,ApiMixinSEG],


        props: {
             
            sistemaProps: {
            type : String,
            required: true,
            },            
        },  

        
        data: () => ({ 
            teste:'teste',
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,    
            exibePaginador:false,        
            resultPesquisaCRUD : [] ,
            resultadoPesquisa:[], 
            usuarioParams: { 
                idSistema:0   ,
                nomeUsuario:'',
                login:'' 

            },            
            usuario: [], 
            usuarioDao:{
                idSistema:0   ,
                nomeUsuario:'',
                login:''  
                
            },
            usuarioTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            }, 

            usuarioDesabilitado:false ,
            sistema :[],
            sistemaTemp:{    
                id: 0,
                sigla: '',
                nome: '',
                tipoLogin: '',
                tipoCodificacaoSenha: '' 
            }  
          
        }),
        computed: mapState(['usuarioSistema']),
        methods: { 
            NavegarParaInclusao( ){ 
                this.$router.push({name:'usuarioLogin' , params : {sistemaProps : '2' , usuarioProps: '0',operacao : 'I' }} )  
            },
            setaPesquisaCRUD(pCursor) {  

                  console.log('setaPesquisaCRUD') 
                  console.log(pCursor   ) 
                  this.resultPesquisaCRUD = pCursor     
                  
                      
            } ,
            resetaCampos() {  

                //console.log('Resetar');
                 
                this.usuarioParams.idSistema = 0 ;
                this.usuarioParams.nomeUsuario = '' ;
                this.usuarioParams.login = '' ; 

                this.resultPesquisaCRUD = [];
                this.exibePaginador = false;
                    

            }  ,   
             
              
        pesquisaDados(){    


            if( this.$store.state.tipoDispositivo == 'mobile'             ){
             this.$store.state.alturaCard = '2000px' 
           }       


            console.log('pesquisaDados')
            console.log(this.usuarioParams )

            let periodoPreenchido = true; 

            if (   (this.usuarioParams.idSistema == null || this.usuarioParams.idSistema == "" )
                && (this.usuarioParams.nomeUsuario == null || this.usuarioParams.nomeUsuario == "" )
                && (this.usuarioParams.login == null || this.usuarioParams.login == "" )
            ){
                this.apiDisplayMensagem('Informe pelo menos um parametro.')
                periodoPreenchido  = false;
             }    

            if(periodoPreenchido) {
                this.haErros = false
                this.exibePaginador = true;
                this.apiPesquisaCRUDByFilial('usuariologin','nomeUsuario',  this.usuarioParams )
            }
            
        },
        navegarParaLogin(){this.$router.push({name:'login'  })},  
        } , 
        async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            } 
           
            this.populaSistema(); 
            this.resetaCampos(); 

            if(this.$store.state.tipoDispositivo == 'tablet'              ){
             this.$store.state.alturaCard = '1200px' 
           }

           if( this.$store.state.tipoDispositivo == 'mobile'             ){
             this.$store.state.alturaCard = '2000px' 
           }                

       }, 
        
        mounted(){ 
 
            this.resetaCampos();  
            
            if(this.sistemaProps!="99"){
            
                console.log('mounted')
                console.log('mounted')
            
                this.usuario.idSistema= Number(this.sistemaProps); 

                console.log('this.usuario.idSistema')

                console.log(this.usuario.idSistema + 13)
                //this.usuarioDesabilitado = true;
                
            }else{
               // this.usuarioDesabilitado = false;
            }  
/*            
           if(this.$store.state.tipoDispositivo == 'tablet'              ){
             this.$store.state.alturaCard = '1200px' 
           }

           if( this.$store.state.tipoDispositivo == 'mobile'             ){
             this.$store.state.alturaCard = '2000px' 
           }       
  */             
        } ,
        beforeRouteLeave(){            
            this.teste="beforeRouteLeave"
            ///this.$store.state.alturaCard = '800px' 

        }

 
 }
   </script>

<style scoped>

.botaoPesquisa {
     background-image:url("@/assets/icon_pesquisa.gif");
     
 
}

.backPesquisa{
    background-color: lightgrey ;
}

 .tituloPesquisa {
   font-size: 10px;
 }
 
 .floating-label {
  position: absolute;
  top: 8px;
  left: 16px;
  pointer-events: none;
  transition: 0.2s ease all;
  color: gray; /* Cor do texto na borda */
  font-size: 12px; /* Tamanho do texto na borda */
}

/* Aplicar o estilo quando o input estiver focado */
.v-input--has-label .floating-label,
.v-input--is-dirty .floating-label {
  top: -12px;
  font-size: 10px; /* Tamanho do texto na borda quando o input estiver focado ou preenchido */
  color: #1976D2; /* Cor quando o input estiver focado ou preenchido */
}
  

</style>

 
 