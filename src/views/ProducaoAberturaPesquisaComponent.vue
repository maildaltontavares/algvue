<template>   

<v-form  ref="formulario" style=" background-color:white;height:100% "  >    

   <!-- <v-container style="width:100%;background-color:white"  >--> 
   
           <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
               <div  style="width:100%"  > 
 
                   <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >  
                    
                    
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Prod. Abertura</b></p>                               
                            </div> 
                        </div>    


                        <div class="espacoEntreComponentes "   style=" height:45px; "  v-if="this.$store.state.tipoDispositivo == 'desktop'"    > 
                           
                           <v-btn @click="pesquisaDados" style="height:47px;width:200px;background-color:rgb(240, 237, 232);" >

                               <v-icon left                                               
                                   color="primary"
                                   icon="mdi-card-search-outline"
                                   size="45"
                               ></v-icon> 

                               <span class="my-auto"  >Pesquisar</span>  

                           </v-btn>  
                      
                        </div>              

                   </div> 
                   

                   
                   <div class="flex-linha linhaPadrao"  style="margin-top: 1% "  >  
                          <v-row>
                                  <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                      <label  for="dataInicial" class="col-form-label labelCampoPadrao"><b>Data_Inicial</b></label><br>   

                                      <v-text-field
                                          v-model.trim="this.param.dataInicial" 
                                          id="dataInicial" 
                                          ref="dataInicial"   
                                          variant="outlined"
                                          bg-color="white" 
                                          type="date" 
                                          :rules="[campoRequerido]" 
                                          density="compact"
                                          
                                      ></v-text-field> 

                                  </v-col> 
                                          
                                  <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                          <label  for="dataFinal" class="col-form-label labelCampoPadrao"><b>Data_Final</b></label><br>                                     
                                          
                                          <v-text-field
                                              v-model.trim="this.param.dataFinal" 
                                              id="dataFinal" 
                                              ref="dataFinal" 
                                              variant="outlined"
                                              bg-color="white" 
                                              type="date" 
                                              :rules="[campoRequerido]" 
                                              density="compact"
                                              
                                          ></v-text-field>   
                                  </v-col>     

                                  <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                          <label  for="mistura" class="col-form-label labelCampoPadrao"><b>Mistura</b></label><br>                                        
                                                  
                                          <v-text-field
                                              v-model.trim="this.param.mistura" 
                                              id="mistura" 
                                              ref="mistura"  
                                              maxlength="10"
                                              variant="outlined"
                                              bg-color="white"                                           
                                              type="text"     
                                              density="compact"
                                              @blur="validaMistura()"
                                          ></v-text-field>                                    
                                  </v-col>                                               
                                
                        </v-row>                             


                    </div>




                    <div class="d-flex justify-content-center"  style="margin-left:4%;width:96%;margin-top: 1%;background-color:white" v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile' " >  

                                <div class="espacoEntreComponentes "   style=" height:45px;margin-bottom:25px"  > 
                                
                                <v-btn @click="pesquisaDados" style="height:47px;width:200px;background-color:rgb(240, 237, 232);" >

                                    <v-icon left                                               
                                        color="primary"
                                        icon="mdi-card-search-outline"
                                        size="45"
                                    ></v-icon> 

                                    <span class="my-auto" style="margin-bottom:35px">Pesquisar</span> <!-- Texto centralizado -->

                                </v-btn>  
                            
                                </div>    

                    </div>                  
 
                     <div class="container-fluid"  >
                            <table class="table table-sm  tabela">
                              
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                      <th class="col-1">DATA</th>
                                      <th class="col-1">HORA</th>
                                      <th class="col-3 text-start">TURNO</th>  
                                      <th class="col-4 text-start">MISTURA</th>
                                   
                                      <th class="col-3 text-start">MAQUINA</th>  
                                      <th class="col-3 text-start">LADO</th>   
                                  
                                      <th class="col-3 text-start">OPER</th>
                                      
                                  </tr>
                                </thead>   


                                <tbody  v-if="apiDisplayedDadosCRUD" >

                                  <template  v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">
 
                                    <tr>  
                                  
                                      <td class="col-1 text-start">
                                        {{ i.dataMovimento}}
                                      </td> 

                                      <td class="col-1 text-start">
                                        {{ this.formataHora(i.horaMovimento) }}
                                      </td>           

                                      <td class="col-2 text-start">  
                                           {{ i.turno}}                                      
                                      </td>                                                                     
  
                                      <td class="col-2 text-start">  
                                           {{ i.mistura + ' / ' + i.seq}}                                      
                                      </td>
                                      

                                      <td class="col-2 text-start">  
                                           {{ i.localFisico}}                                      
                                      </td>          

                                      <td class="col-2 text-start">  
                                           {{ i.lado}}                                      
                                      </td>    
                                      
                                      <td class="col-1  "  >  
                                           <v-btn   icon="mdi-pencil" text="Editar"   :to="{name:'producaoabertura', params : {  misturaProps: i.mistura, seqProps:i.seq , operacao : 'A'   }  }"  style="background-color:rgb(83, 138, 83);margin-right: 10px;margin-top:1px;height:30px;width:30px ; "></v-btn>
                                      </td>                                         
  
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
                </div>    
                    <!-- </v-card> -->
           </div>
      <!--  </v-container>      -->
   
       <v-container> 
   
           <div class="d-flex justify-content-center" > 
   
 
   
                <MensagemMobile    v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "    class="rodape_mobile"
                    style=" margin-bottom:60px"
                    :mensagemSucessoProps="mensagemSucesso" 
                    :mensagemErroProps="mensagemErro"
                    :haErrosProps="haErros"
                    :haSucessoProps= "haSucesso"
                />  
   
                <!--
               <div  class="  rodape_crud2" 
                         style="position: fixed;background-color:rgb(173, 173, 187);"  :style="{marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
                                             width:  this.$store.state.configuracaoTela.tamanhoRodape,
                                             height:  this.$store.state.configuracaoTela.alturaRodape   }" > 
                         -->
                         
              <div   class=" elevation-12 rodape_crud2" style=" background-color:rgb(173, 173, 187);"  >                          
                       
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

                               <v-btn color="secondary" class="botao_rodape" style="width:170px;min-width: 170px;" accesskey="p"  @click="resetaCampos"><u>L</u>impar pesquisa</v-btn>                               
                               <v-btn color="primary" class="botao_rodape"  
                                :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} "
                                 accesskey="n" @click="NavegarParaInclusao"> <u>N</u>ovo </v-btn  >  

                                 <div v-if="this.$store.state.menuExpandido" ><div :style="{marginRight:this.$store.state.tamanhoEspacoMarginRight}"  ></div></div>
                           </div>   
   
                       </div>    
                    </div>   
           </div>
       </v-container>                    
   
    </v-form>
   <!-- <PesquisaFornecedor @setaPesquisa="setaPesquisa($event)"></PesquisaFornecedor> -->
</template> 
    
<script>
  
    import ApiMixin from '@/mixins/ApiMixin' 
    import { mapState } from 'vuex'
    import ApiMixinSEG from '@/mixins/ApiMixinSEG'    
    import ApiMixinALG from '@/mixins/ApiMixinALG'
    import ApiMixinValidator from '@/mixins/ApiMixinValidator'
    import MensagemMobile  from '@/components/MensagemMobileComponent.vue'
    

    //import {VDataTable } from "vuetify/labs/VDataTable";
  
    export default {
      name: 'ProducaoAberturaPesquisaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile},  
      data: () => ({
        resultPesquisaCRUD : [] , 
        producaoAberturaDTO:{  

            dataInicialS:'',
            dataFinalS:'' , 
            mistura:'',    
            idfil:'',
          
        }, 

   
        
        param:{

            dataInicialS:'',
            dataFinalS:'' , 
            mistura:'',    
            idfil:'',


        }, 

        producaoAberturaParamDTO:{

            dataInicialS:'',
            dataFinalS:'' , 
            mistura:'',    
            idfil:'',


        },

 

        erros: '',
        mensagemSucesso: '',
        mensagemErro : '', 
        haErros: false,      
        haSucesso: false,    
        exibePaginador:false,         
        resultadoPesquisa:[],         
         
      }),
      computed: mapState(['usuarioSistema']),
      methods: {
  
        NavegarParaInclusao( ){ 
             this.$router.push({name:'producaoabertura', params : {  misturaProps: ' ', seqProps:' ' , operacao : 'I'   }  })  


             
        
        },
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
  
        } ,
 

        resetaCampos() {  

            //console.log('Resetar');
           // this.producaoAberturaDTO.idfil = this.$store.state.usuarioSistema.idfil;  

            this.param.dataInicial='';
            this.param.dataFinal='' ;
            this.param.mistura='';  

            this.resultPesquisaCRUD = [];
            this.exibePaginador = false;

            //this.populaForm();               

        }  ,   
            
  
          navegarParaLogin(){this.$router.push({name:'login'  })}   ,
       

          validaMistura (){

               if (!(this.param.mistura==null || this.param.mistura=='')){   
                    this.param.mistura = this.param.mistura.padStart(10, '0');
               }
          },



          async pesquisaDados(){      

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                let periodoPreenchido = true;  
                
                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                    return false;
                } else {      
                  

                        if (this.param.dataInicial != null && this.param.dataInicial != "" && 
                            this.param.dataFinal != null && this.param.dataFinal != "" ){
                         
                            if (this.param.dataFinal < this.param.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true; 
                                  periodoPreenchido  = false; 
                                  return false;
                            } else{

                              if (!(this.param.mistura==null || this.param.mistura=='')){   
                                  this.param.mistura = this.param.mistura.padStart(10, '0');
                              }

                              if(periodoPreenchido) {
                                this.haErros = false;
                                this.exibePaginador = true;
                                this.apiPesquisaCRUDByFilial('producaoAbertura','nome',  this.param);
                              }                                 



                            } 

                           
                        }  else{ 
                            this.apiDisplayMensagem('Preencha os campos com críticas.');
                            this.haErros = true;
                            return false;

                        }  
              }
        },          

     } , 
      
     async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }   

            this.msgProcessamento = '';
            this.scrollToTop();
    
      }
  
      ,
    mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
    } 
    
    }
    </script>
  
    
  <style scoped>
  
    .tituloPesquisa {
      font-size: 10px;
    }
  
    .cabecalhoPesquisa {
      font-size: 12px;
      color: white;
      font-weight: bold;
      background-color: #003366;
      border-radius: 5px;
    }
    .detalhePesquisa {
      font-size: 12px;
      height: 300px;
    }
  
    .divBotao {
      height: 45px;
      background-color: #003366;
      color:white;
      font-weight: bold;
    }
  
    .botaoFechar {
      margin-top: 8px;
      margin-bottom: 8px;
      margin-right: 8px;
    }
  
    .barraPesquisa1{
      padding: 10px;
      background-color: rgb(56, 17, 230);
      margin-top: 20px;
      margin-bottom: 20px;
      display: inline;
      
  
    }
  
    .flex-container{
       display: flex;
       flex-wrap:wrap;
       flex-direction: row;
       justify-content: center;
       
  
    }
     .flex-element-topo{ 
      margin-left: 40%;
      display: inline-flex;
      margin-top:10px; 
      justify-content: center;
      
    }
  
   
    .flex-element{
    
      width:40%;
      display: inline-flex;
      margin-top:15px;
      margin-bottom: 25px;
      justify-self: center;
  
    }
   
  
  
    .EspacoEntreBotoes{
      margin-right: 15px;
    }

    th {
      position: sticky;
      top: 0;
      background: #003366;
      color:white;
       
    }
 
   
  
  </style>
  
   