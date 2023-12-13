<template>  


    <MensagemMobile    

class="rodape_mobile"
style=" margin-bottom:60px;background-color:red;height:700px;color:#ce6d2c"

:mensagemSucessoProps="mensagemSucesso" 
:mensagemErroProps="mensagemErro"
:haErrosProps="haErros"
:haSucessoProps= "haSucesso"

rrrrrrrrrrrrrrrrrrrrrrrr

/>  



<v-form  ref="formulario" style=" background-color:white; "  >    

   <!-- <v-container style="width:100%;background-color:white"  >-->






   
           <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
               <div  style="width:100%"  > 
                <!--
               <v-card rounded="lg" class=" elevation-12" 
      
                  :style="{  minWidth:  this.$store.state.larguraCardPesq,
                                     height:  this.$store.state.alturaCardPesq }" 
                  
                  >  
                    -->
                   <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                            
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Movimentos de Estoque</b></p>                               
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
                   
   
                   <div class="flex-linha "  style="margin-left:4%;width:96%;margin-top: 1%;background-color:white" >   

                        <div   class="espacoEntreComponentes">     

                                <v-text-field
                                    v-model.trim="this.dataInicial" 
                                    id="dataInicial"
                                    label="Data Inicial" 
                                    ref="dataInicial"  
                                    style=" width: 150px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    
                                ></v-text-field>                                    
                           
                    
                        </div>           

                        <div   class="espacoEntreComponentes">    
                                    
                             
                                
                                <v-text-field
                                    v-model.trim="this.dataFinal" 
                                    id="dataFinal"
                                    label="Data Final" 
                                    ref="dataFinal"  
                                    style=" width: 150px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    
                                ></v-text-field>                                    
                            
                    
                        </div>                          
 
 
                        <div   class="espacoEntreComponentes">   
                                
                                    <div class="input-group">  
                                        
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                    v-model.trim="this.fornecedor" 
                                                    label="Fornecedor"
                                                    id="fornecedor"                                                  
                                                    ref="fornecedor"  
                                                    maxlength="5"                                                    
                                                    style=" width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"                                                  
                                                    type="number"
                                                    inputmode="numeric"                                                   
                                                    density="compact"
                                                    
                                                ></v-text-field>    
                                                    
                                                <v-btn   data-bs-toggle="modal" 
                                                    data-bs-target="#modalPesquisaUsuario" tabindex="-1"  @click="apiFlushPesquisa" :disabled="codigoDesabilitado" 
                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
                                                    > 
                                                        <v-icon
                                                        class="mb-6"
                                                        color="primary"
                                                        icon="mdi-card-search-outline"
                                                        size="45"
                                                        ></v-icon>  
                                                </v-btn>     

                                            </div  >      

                                            <div class=" backCampoConjugado "  >   
                                                <v-text-field
                                                    v-model="this.nomeFornecedor" 
                                                    id="nomeFornecedor"   
                                                    disabled 
                                                    class="limitadorMedia"                                                                                                        
                                                    style="background-color:rgb(210, 210, 246); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                    density="compact"
                                                ></v-text-field>   
                                            </div>     
                                    </div>

                        </div>



                        <div   class="espacoEntreComponentes">    
                                        
                                        <v-text-field
                                            v-model.trim="this.notaFiscal" 
                                            id="notaFiscal"
                                            label="Documento" 
                                            ref="notaFiscal"  
                                            maxlength="10"                                            
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"                                           
                                            type="text"     
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                     
                           
                        </div>   
                    <!--
                    </div>

                    <div class="d-flex justify-content-center"  style="margin-left:2%;width:95%;margin-top: 1%;background-color:white" >      
                    -->   
                    
                    
                        <div    class="espacoEntreComponentes">   

                            <v-autocomplete
                                label="Produtor"
                                :items="produtorItens"                              
                                v-model="this.produtor"   
                                item-title="descricao" 
                                item-value="codigo"
                                variant="outlined"
                                style="width: 270px; " 
                                bg-color="white"   
                                density="compact"
                            ></v-autocomplete> 

                        </div>                             

                        <div    class="espacoEntreComponentes">  

                            <v-autocomplete
                                label="Tipo MP"
                                :items="tipoMPItens"                                                                       
                                v-model="this.tipoMP"   
                                item-title="codigo" 
                                item-value="codigo"
                                variant="outlined"
                                style="width: 160px;font-size:16px " 
                                bg-color="white"                                    
                                density="compact"                                
                            ></v-autocomplete> 

                        </div>    
 
  
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
 
                     <div class="container-fluid" >
                            <table class="table table-sm table-striped tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                    <th class="col-1">#</th>
                                      <th class="col-4 text-start">NOME</th>
                                      <th class="col-4 text-start">EMAIL</th>              
                                      <th class="col-3 text-start">OPER</th>  
                                      
                                  </tr>
                                </thead> 
  
                                <tbody>
                                  <template v-if="apiDisplayedDadosCRUD">
  
                                    <tr v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">  
                                  
                                      <td class="col-2 text-start">
                                        {{ i.idUsuario}}
                                      </td> 
  
                                      <td class="col-2 text-start">
                                          {{ i.nome }}
                                      </td>
  
                                      <td class="col-2 text-start">
                                          {{ i.email}}
                                      </td>                
  
                                  
                                      <th class="col-1">
                                   
                                        <v-btn  icon="mdi-pencil" text="Editar"  :to="{ name: 'usuario' , params: { codigoProps : i.idUsuario,operacao:'A'}}" style="background-color:rgb(83, 138, 83);margin-right: 10px;margin-top:1px;height:30px;width:30px; ">  </v-btn>
                                        
   
                                      </th> 
                                  
                                    </tr>
                                  </template> 
  
                              </tbody> 
  
                          </table> 
  
  
                      </div>
  
                      <div class="mt-4">
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
   


                <div style="height:500px;background-color:green">

                    zzzzzzzzzzzzzzz


                </div>
   
               <MensagemMobile    

               class="rodape_mobile"
               style=" margin-bottom:60px;background-color:red;height:700px;color:#ce6d2c"

               :mensagemSucessoProps="mensagemSucesso" 
               :mensagemErroProps="mensagemErro"
               :haErrosProps="haErros"
               :haSucessoProps= "haSucesso"

rrrrrrrrrrrrrrrrrrrrrrrr

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
   
                       
                           <div class="div_rodape d-flex justify-content-end">
                               <v-btn color="primary" class="botao_rodape"  style="margin-right: 5px;" accesskey="n" @click="NavegarParaInclusao"> <u>N</u>ovo </v-btn  >  
                           </div>   
   
                       </div>    
               </v-card>   
           </div>
       </v-container>                    
   
    </v-form>
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
      name: 'MovimentacaoEstoquePesquisaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG,MensagemMobile],
      //components: {VDataTable},  
      data: () => ({
        resultPesquisaCRUD : [] , 
        dataInicial:'',
        dataFinal:'' , 
        fornecedor:'',
        nomeFornecedor:'',
        notaFiscal:'', 
        tipoMP:'',
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
          this.$router.push({name:'movimentacaoestoque'   ,   params : {sistemaProps : 4 ,usuarioProps : '0' , operacao : 'I' }} ) 
        },
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
  
        } ,
  
          navegarParaLogin(){this.$router.push({name:'login'  })}   ,

          async pesquisaDados(){    

                //console.log('pesquisaDados')
                //console.log(this.producaoFiacaoParams )

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                let periodoPreenchido = true;  

                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                    return;
                } else {                
 
                        if (this.dataInicial != null && this.dataInicial != "" && 
                        this.dataFinal != null && this.dataFinal != "" ){
                            //this.haErros = true;
                            //this.mensagemErro = "Informe a data inicial  " + this.producaoFiacaoParams.dataProducaoInicial ; 
                            
                          

                            if (this.dataFinal < this.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true;
                                 //console.log("Informe a data inicial")  ;
                                 console.log("Informe a data inicial ddddd")  ;
                                  periodoPreenchido  = false; 
                            }else{
                                console.log("Informe a data inicial fffff")  ;

                            }

                           
                        }  else{

                            //this.apiDisplayMensagem('Preencha os campos com críticas.');
                            //this.haErros = true;
                            return;

                        } 

                        //console.log('periodoPreenchido 2')
                          


                        if(periodoPreenchido) {
                            this.haErros = false
                            this.exibePaginador = true;
                            //this.apiPesquisaCRUDByFilial('producao','nome',  this.producaoFiacaoParams )
                        }

                

              }
        },          

     } , 
      
    async created(){   
    
            console.log('');
            this.msgProcessamento = '';
    
      }
  
      ,
    mounted(){ 
       //this.$refs.dataInicial.focus();     
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
   
  
  </style>
  
   