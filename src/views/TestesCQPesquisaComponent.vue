<template>   

<v-form  ref="formulario" style=" background-color:white;height:100% "  >    

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
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Testes de CQ</b></p>                               
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
                   
   
                   <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >   

                        <div   class="espacoEntreComponentes">     

                                <v-text-field
                                    v-model.trim="this.param.dataInicial" 
                                    id="dataInicial"
                                    label="Data Inicial" 
                                    ref="dataInicial"  
                                    style=" width: 180px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    
                                ></v-text-field>                                    
                           
                    
                        </div>           

                        <div   class="espacoEntreComponentes">    
                                    
                             
                                
                                <v-text-field
                                    v-model.trim="this.param.dataFinal" 
                                    id="dataFinal"
                                    label="Data Final" 
                                    ref="dataFinal"  
                                    style=" width: 180px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    
                                ></v-text-field>                                    
                            
                    
                        </div>                          
    
                    
                        <div    class="espacoEntreComponentes">   

                            <v-autocomplete
                                label="Produtor"
                                :items="produtorItens"                              
                                v-model="this.param.produtor"   
                                item-title="descricao" 
                                item-value="codigo"
                                variant="outlined"
                                style="width: 270px; " 
                                bg-color="white"   
                                density="compact"
                            ></v-autocomplete> 

                        </div> 
                        
                        <div   class="espacoEntreComponentes">    
                                        
                                <v-text-field
                                    v-model.trim="this.param.lote" 
                                    id="lote"
                                    label="Lote" 
                                    ref="lote"  
                                    maxlength="10"                                            
                                    style=" width: 250px; " 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    
                                ></v-text-field>                                    
                                     
                           
                        </div>      
                        <div   class="espacoEntreComponentes"   >   
                                        
                            <div class="input-group">   
                                
                                <div class="d-flex  justify-content-start">
                                    
                                    <v-text-field
                                      
                                        id="item"
                                        label="Item"
                                        ref="item"  
                                        maxlength="7"  
                                        style=" width: 170px; "
                                        variant="outlined"
                                        bg-color="white"
                                        v-model.trim="this.param.item"
                                        type="number"                                                     
                                      
                                        density="compact" 
                                        @blur="buscaItem" 
                                    ></v-text-field>    
                                        
                                    <v-btn   data-bs-toggle="modal" 
                                    data-bs-target="#modalPesquisaItem" @click="apiFlushPesquisa()" tabindex="-1"     
                                          :disabled="this.itemDesabilitado"
                                        style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
                                        > 
                                            <v-icon
                                            this.
                                            class="mb-6"
                                            color="primary"
                                            icon="mdi-card-search-outline"
                                            size="45"
                                            
                                            ></v-icon>  
                                    </v-btn>     

                                </div  >      

                                <div class=" backCampoConjugado "  >   
                                    <v-text-field
                                      
                                        id="descFio"   
                                        disabled 
                                        class="limitadorMedia"
                                        density="compact"
                                        v-model.trim="this.param.descItem"
                                        style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  " 
                                    ></v-text-field>   
                                </div>  

                            </div>
    
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
                    
                    <div class="container-fluid"  >
                            <table class="table table-sm  tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                      <th class="col-1">DATA</th>
                                      <th class="col-4 text-start">PRODUTOR</th>     
                                      <th class="col-4 text-start">LOTE</th>                                                             
                                      <th class="col-4 text-start">ITEM</th>   
                                      <th class="col-3 text-start">OPER</th>  
                                
                                     
                                      
                                  </tr>
                                </thead> 
      
                                <tbody  v-if="apiDisplayedDadosCRUD" >
                                  <template  v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">
 
                                    <tr>  

                                      <td class="col-1 text-start">
                                        {{ i.dataTeste}}
                                      </td>                                       
                                  

  
                                       
                                      <td class="col-2 text-start"  >
                                        
                                        <span v-if="i.fkProdutor !=null">{{ i.fkProdutor.descricao.trimRight() }} ({{i.produtor}}  )</span>
                                        <span v-else> </span>
                                       
                                      </td>      

                                      <td class="col-1 text-start">
                                        {{ i.lote}}
                                      </td>   
                                      
                                      <td class="col-1 text-start">
                                        {{ i.item}}
                                      </td>                                        
                                      
                                      <td class="col-1  "  >  
                                            <v-btn   icon="mdi-pencil" text="Editar"   :to="{ name: 'testecq' , params: { produtorProps : i.produtor ,  loteProps : i.lote ,  itemProps : i.item ,operacao : 'A'}}"  style="background-color:rgb(83, 138, 83);margin-right: 10px;margin-top:1px;height:30px;width:30px ; "></v-btn>
                                       </td>                                        
                                    
  
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
                           </div>   
   
                       </div>    
                    </div>   
           </div>
       </v-container>                    
   
    </v-form>
  <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>     
</template> 
    
<script>
  
    import ApiMixin from '@/mixins/ApiMixin' 
    import { mapState } from 'vuex'
    import ApiMixinSEG from '@/mixins/ApiMixinSEG'    
    import ApiMixinALG from '@/mixins/ApiMixinALG'
    import ApiMixinValidator from '@/mixins/ApiMixinValidator'
    import MensagemMobile  from '@/components/MensagemMobileComponent.vue'
    import PesquisaItem from '@/requires/PesquisaItem'
   

    //import {VDataTable } from "vuetify/labs/VDataTable";
  
    export default {
      name: 'TesteCQPesquisaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile,PesquisaItem },  
      data: () => ({
        resultPesquisaCRUD : [] , 
        'testeDTO':{  

            dataInicial:'',
            dataFinal:'' ,   
            lote:'',  
            idfil:'',
            produtor:''  ,
            item:''  , 
            descItem:''
        }, 

        'testeDAO':{  

            dataInicial:'',
            dataFinal:'' ,   
            lote:'',  
            idfil:'',
            produtor:'',
            item:''  , 
            descItem:''  
        },         

  

        produtorItens: [],
        produtorItensTemp:{ 
            codigo:'',
            descricao:''
        },     
        
        param:{

            dataInicial:'',
            dataFinal:'' ,   
            lote:'',  
            idfil:'',
            produtor:'' ,
            item:''  , 
            descItem:''  ,


        }, 

        testeParamDTO:{

            dataInicial:'',
            dataFinal:'' ,   
            lote:'',  
            idfil:'',
            produtor:'',
            item:''  , 
            descItem:''


        },



        //tipoMP:'',
        //tipoMovimento:'',
        

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
       
          this.$router.push({name:'testecq', params : { produtorProps : ' ' ,  loteProps : ' ' ,itemProps: ' ',operacao : 'I' }  })
        },
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
  
        } ,


        setaPesquisa(e) {   
 
            this.param.item = e.obj.codigo;
            this.param.descItem = e.obj.material.descricao.substring(0, 40);
            
      
        },
        buscaItem() {

          if(!(this.param.item==null || this.param.item=='')){
            this.apiPesquisaParam('itemTeste', this.param.item, this.param);
          }else{
            this.param.descItem=''
          }
          
        },
        

 

        resetaCampos() {  

            //console.log('Resetar');
           // this.movimentoDTO.idfil = this.$store.state.usuarioSistema.idfil;  

            this.param.dataInicial='';
            this.param.dataFinal='' ;
            this.param.lote=''; 
            this.param.produtor='';  
            this.param.item='';  
            this.param.descItem='';  

            this.resultPesquisaCRUD = [];
            this.exibePaginador = false;

            //this.populaForm();               

        }  ,   
            
  
          navegarParaLogin(){this.$router.push({name:'login'  })}   ,
       

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
                    return;
                } else {      
                  

                        if (this.param.dataInicial != null && this.param.dataInicial != "" && 
                            this.param.dataFinal != null && this.param.dataFinal != "" ){
                         
                            if (this.param.dataFinal < this.param.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true;
                                 //console.log("Informe a data inicial")  ;
                                  //console.log("Informe a data inicial ddddd")  ;
                                  periodoPreenchido  = false; 
                            }  
                           
                        }  else{ 
                            return; 
                        }  
                        if(periodoPreenchido) {
                            this.haErros = false
                            this.exibePaginador = true;
                            this.apiPesquisaCRUDByFilial('testecq','nome',  this.param)
                        }

                

              }
        },          

     } , 
      
     async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }   
          
            this.populaProdutor();
            //this.populaProcedencia();

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
  
   