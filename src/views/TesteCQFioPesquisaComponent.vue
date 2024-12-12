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
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Testes de CQ Fio/Fita</b></p>                               
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

                          <v-col class="campoPadrao"  >  

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
                          <v-col class="campoPadrao"  >  

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
                                <label   for="tipoMaquina" class="col-form-label labelCampoPadrao"><b>Tipo_Máquina</b></label><br> 

                                <v-autocomplete

                                    id="tipoMaquina"  
                                    :items="tipoMaquinaItens"      
                                    item-title="descricao" 
                                    item-value="codigo"
                                    v-model.trim="this.param.tipoMaquina"   
                                    variant="outlined"  
                                    bg-color="white"   
                                    density="compact"  
                                   
                                   
                                ></v-autocomplete>  

                            </v-col>

                            <v-col class="campoPadraoReduzido"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                  <label  for="turno" class="col-form-label labelCampoPadrao"><b>Turno</b></label><br> 

                                  <v-autocomplete
                                      v-model.trim="this.param.turno" 
                                      id="turno" 
                                      :items="turnos"   
                                      item-title="nome" 
                                      item-value="codigo"
                                      variant="outlined"  
                                      bg-color="white"       
                                      density="compact"
                                    
                                    
                                  ></v-autocomplete> 
   
                            </v-col>                             

                            <v-col class="campoPadraoReduzido"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                <label   for="localFisico" class="col-form-label labelCampoPadrao"><b>Local_Físico</b></label><br> 
                                        
                                <v-text-field
                                    v-model.trim="this.param.localFisico"   
                                    id="localFisico" 
                                    ref="localFisico"  
                                    maxlength="3"       
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"  
                                    @blur="strzeroLocal"
                                ></v-text-field>                                  
                            </v-col>                                

                        
                        <v-col class="campoPadrao"  >  

                                <label  for="lote" class="col-form-label labelCampoPadrao"><b>Lote</b></label><br>                             
                          
                                        
                                <v-text-field
                                    v-model.trim="this.param.loteFiacao" 
                                    id="lote"
                                   
                                    ref="lote"  
                                    maxlength="10"                                            
                                     
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    @blur="strzeroLote"
                                    
                                ></v-text-field>       

                        </v-col>                       
                                     
                                             
                             
                        <v-col class="campoConjugado" cols="3" >   

                                <label  for="item" class="col-form-label labelCampoPadrao"><b>Item</b></label><br>    

                                <div    >   
                                                
                                    <div class="input-group">   
                                        
                                        <div class="d-flex  justify-content-start">
                                            
                                            <v-text-field
                                              
                                                id="item"
                                                label="Item"
                                                ref="item"  
                                                maxlength="7"  
                                                style=" width: 120px; "
                                                variant="outlined"
                                                bg-color="white"
                                                v-model.trim="this.param.item"
                                                type="number"                                                     
                                              
                                                density="compact" 
                                                @blur="buscaItem" 
                                            ></v-text-field>    
                                                
                                            <v-btn   data-bs-toggle="modal" 
                                            data-bs-target="#modalPesquisaFio" @click="apiFlushPesquisa()" tabindex="-1"     
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

                                        <div class="descricaoCampoConjugado" >     
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
                                      <th class="col-2">DATA</th> 
                                      <th class="col-2">TURNO</th> 
                                      <th class="col-4">TIPO MAQ</th> 
                                      <th class="col-2">MAQ</th> 
 
                                      <th class="col-1 text-start">OPER</th>     
                               
                                
                                     
                                      
                                  </tr>
                                </thead> 
      
                                <tbody  v-if="apiDisplayedDadosCRUD" >
                                  <template  v-for="(i,indice) in apiDisplayedDadosCRUD" :key="indice">
 
                                    <tr>  

                                      <td class="col-1 text-start">
                                        {{ i.dataTeste}}
                                      </td>   

                                      <td class="col-1 text-start">
                                        {{ i.turno}}
                                      </td>         
                                      
                                      <td class="col-1 text-start">
                                        {{ i.descTipoMaquina}}
                                      </td>    
                                      
                                      <td class="col-1 text-start">
                                        {{ i.maquina}}
                                      </td>                                         
   
                                   
                                      
                                      <td class="col-1  "  >  
                                            <v-btn   icon="mdi-pencil" text="Editar"   :to="{ name: 'testecqfio' , params: { tipoMaquinaProps:i.tipoMaquina, idProps : i.id ,operacao : 'A'}}"  style="background-color:rgb(83, 138, 83);margin-right: 10px;margin-top:1px;height:30px;width:30px ; "></v-btn>
                                       </td>                                        
                                    
  
                                    </tr>

                                    <tr> 

                                        <td class="col-1 text-start">
                                           {{ i.loteFiacao}}
                                        </td>   

                                        <td class="col-1 text-start">
                                          {{ i.descTipoTeste}}
                                        </td>                                         
                                        
                                        <td class="col-1 text-start">
                                           {{ i.item}}
                                        </td>     
                                        <td class="col-1 text-start">
                                          
                                        </td>                                           
                                        <td class="col-1 text-start">
                                  
                                        </td>                                           
                                    </tr>

                                    <tr>

                                      <td class="col-1 text-start"  >
                                        <div style="border:2px solid black ;">

                                        </div>
                                      
                                      </td>
                                      <td class="col-1 text-start"  >
                                        <div style="border:2px solid black ;">

                                        </div>
                                      </td>
                                      
                                      <td class="col-1 text-start"  >
                                        <div style="border:2px solid black ;">

                                        </div>
                                      
                                      </td>     
                                      
                                      <td class="col-1 text-start"  >
                                        <div style="border:2px solid black ;">

                                        </div>
                                      
                                      </td>   
                                      
                                      <td class="col-1 text-start"  >
                                        <div style="border:2px solid black ;">

                                        </div>
                                      
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
  <PesquisaFio @setaPesquisa="setaPesquisa($event)"></PesquisaFio>     
</template> 
    
<script>
  
    import ApiMixin from '@/mixins/ApiMixin' 
    import { mapState } from 'vuex'
    import ApiMixinSEG from '@/mixins/ApiMixinSEG'    
    import ApiMixinALG from '@/mixins/ApiMixinALG'
    import ApiMixinValidator from '@/mixins/ApiMixinValidator'
    import MensagemMobile  from '@/components/MensagemMobileComponent.vue'
    import PesquisaFio from '@/requires/PesquisaFio.vue'
   

    //import {VDataTable } from "vuetify/labs/VDataTable";
  
    export default {
      name: 'TesteCQFioPesquisaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile,PesquisaFio },  
      data: () => ({
        
        resultPesquisaCRUD : [] , 

        'testeCqFioDAO':{  
            id:0,
            idfil:'',
            turno:'',
            dataInicial:'',
            dataFinal:'' ,   
            loteFiacao:'',  
            localFisico:'', 
            item:''  , 
            tipoMaquina:''
        },   
        
        param:{

            id:0,
            idfil:'',
            turno:'',
            dataInicial:'',
            dataFinal:'' ,   
            loteFiacao:'',  
            localFisico:'', 
            item:''  , 
            tipoMaquina:'',
            descItem :'',

        }, 
 

        tipoMaquinaItens: [],
        tipoMaquinaTemp: {    
              codigo:'' ,
              nome:  '' , 
        },    
        
        turnos:[
            {codigo:"A", nome:"A"},
            {codigo:"B", nome:"B"},
            {codigo:"C", nome:"C"} 
        ],          



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
       
          this.$router.push({name:'testecqfio', params : { tipoMaquinaProps:'01',  idProps : ' ' ,   operacao : 'I' }  })
        },
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
  
        } ,


        setaPesquisa(e) {   
 
            this.param.item = e.obj.codigo;
            this.param.descItem = e.obj.descricao.substring(0, 40);
            
      
        },

        strzeroLocal(){ this.param.localFisico = this.param.localFisico.padStart(3, '0'); },
        strzeroLote(){ this.param.loteFiacao = this.param.loteFiacao.padStart(10, '0'); },

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
            this.param.loteFiacao='';  
            this.param.item='';  
            this.param.descItem='';   
            this.param.turno='';  
            this.param.localFisico='';  
            this.param.tipoMaquina='';  

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
                                  periodoPreenchido  = false; 
                            }  
                           
                        }  else{ 
                            return; 
                        }  
                        if(periodoPreenchido) {
                            this.haErros = false
                            this.exibePaginador = true;
                            this.apiPesquisaCRUDByFilial('testecqfio','nome',  this.param)
                        }

                

              }
        },          

     } , 
      
     async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }   
          
       
            this.populaTipoMaquina();  
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
  
   