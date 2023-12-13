<template>
 
  <v-container>
 
         <div class="d-flex justify-content-center" >  
 
 
             <v-card rounded="lg" class=" elevation-12" 
                 min-width="98%" style="background-color:rgb(240, 237, 232);height:1000px;">  
 
                 <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                  
                     <div>                         
                         <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Pesquisa Usuários</b></p>                               
                     </div>
                 </div>     
 
                 <div class="d-flex justify-space-between" style="margin-left:15%;width:70%;margin-top: 60px;margin-bottom: 10px;">
 
                       <v-text-field
                           v-model="nomePesquisa"
                           label="Informe o nome do usuário"
                           hide-details="auto"
                           id="nomePesquisa" 
                           ref="nomePesquisa"   
                           style="color:blue;min-width: 150px;"  
                           append-inner-icon="mdi-alphabetical"   
                           @keypress.enter="apiPesquisaCRUDByFilial('usuarioseg','nome',nomePesquisa)"
 
                       ></v-text-field>  
 
                       <v-btn  @click="apiPesquisaCRUDByFilial('usuarioseg','nome',nomePesquisa)" style="height:53px;width:60px;background-color:rgb(240, 237, 232);" >
 
                           <v-icon
                             class="mb-6"
                             color="primary"
                             icon="mdi-card-search-outline"
                             size="55"
                           ></v-icon> 
 
                       </v-btn>                
 
                 </div >    


                 <v-data-table
                      :headers="headers"
                      :items="apiDisplayedDadosCRUD"
                      :sort-by="[{ key: 'nome', order: 'asc' }]"
                      class="elevation-1"
                      style="padding:25px;"
                    >
                      <template v-slot:top>
                        <v-toolbar
                          flat
                        >
                          <v-toolbar-title>My CRUD</v-toolbar-title> 
                        </v-toolbar>
                      </template>
                    
                      <template v-slot:[`item.actions`]="{ item }">
                        
                        <v-icon
                          size="small"
                          class="me-2"
                          @click="NavegarParaInclusao(item.raw)"
                        >
                          mdi-pencil
                        </v-icon>
                        <v-icon
                          size="small"
                          @click="NavegarParaInclusao(item.raw)"
                        >
                          mdi-delete
                        </v-icon>

                      </template>

                </v-data-table>   
                     
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
                       style="position: fixed;background-color:#003366;"  :style="{marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
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
 
 
   </template> 
   
   <script>
 
   import ApiMixin from '@/mixins/ApiMixin' 
   //import { mapState } from 'vuex'
 
   import {VDataTable } from "vuetify/labs/VDataTable";
 
 
   export default {
     name: 'UsuarioPesquisaComponent',
     mixins: [ApiMixin],
     components: {VDataTable},   
       
       
     data: () => ({
          resultPesquisaCRUD : [],     
          dialog: false,
          dialogDelete: false,
     
          sortBy: [{ key: 'nome', order: 'asc' }],
          headers: [
 
          { title: 'codigo', key: 'idUsusario',sortable: true },
          { title: 'Nome', key: 'nome', sortable: true,align: 'start' },
          { title: 'Email', key: 'email' },
          { title: 'Operacao', key: ' ' } 
        ],
  
          editedIndex: -1,
        
             
 
     
     }),
 
 
     methods: { 

       NavegarParaInclusao( ){ 
         this.$router.push({name:'usuario'   , params : { codigoProps :' ' , operacao : 'I' }} ) 
       },
      setaPesquisaCRUD(pCursor) {  
             this.resultPesquisaCRUD = pCursor   
 
         } ,
 
         navegarParaLogin(){this.$router.push({name:'login'  })}   
         } , 
     
         async created(){   
        
        console.log('');
   
     }
 
     ,
   mounted(){ 
      this.$refs.nomePesquisa.focus();     
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
 
   