<template>
 
 
 
  <v-data-table
    :headers="headers"
    :items="desserts"
    :sort-by="[{ key: 'calories', order: 'asc' }]"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>

        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="props"
            >
              New Item
            </v-btn>
          </template>


          <v-card>

                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                      <v-container>


                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.name"
                              label="Dessert name"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.calories"
                              label="Calories"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.fat"
                              label="Fat (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.carbs"
                              label="Carbs (g)"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                              v-model="editedItem.protein"
                              label="Protein (g)"
                            ></v-text-field>
                          </v-col>
                        </v-row>


                      </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
          </v-card>
        </v-dialog>


        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>




      </v-toolbar>
    </template>
 

    <template v-slot:[`item.actions`]="{ item }">
      
      <v-icon
        size="small"
        class="me-2"
        @click="editItem(item.raw)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item.raw)"
      >
        mdi-delete
      </v-icon>

    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>

  </v-data-table> 
  

  <v-container>
 
         <div class="d-flex justify-content-center" >  
 
 
             <v-card rounded="lg" class=" elevation-12" 
                 min-width="98%" style="background-color:rgb(240, 237, 232);height:800px;">  
 
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
 <!--
 
                 <div class="flex-container ">  
 
                     <div class=" text-start flex-element"> 
 
                         <input type="text"     @keypress.enter="apiPesquisaCRUDByFilial('usuarioseg','nome',nomePesquisa)" ref="nomePesquisa" class="form-control form-control-sm campoPesquisaMinWidth  text-uppercase" v-model="nomePesquisa" placeholder="Informe o nome do usuário" >
                         <button type="button" class="btn btn-primary"    @click="apiPesquisaCRUDByFilial('usuarioseg','nome',nomePesquisa)"><i class="bi bi-search input-group-append"></i></button>                
 
                     </div>   
 
                 </div>  
 
 -->
                 <div class="container-fluid">
                     <table class="table table-sm table-striped tabela">
                         <thead class="cabecalho " style="background-color:#003366;color: white;">
                           <tr>
                             <th class="col-1">COD</th>
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
                                 <router-link :to="{ name: 'usuario' , params: { codigoProps : i.idUsuario,operacao:'A'}}">                                        
                                     <img src="@/assets/icon_editar.gif" alt="Editar" class="botao EspacoEntreBotoes" height="30">
                                   </router-link>  
 
                                 <!--
                                 <router-link :to="{ name: 'usuario' , params: { codigoProps : i.idUsuario,operacao:'E'}}">                                        
                                     <img src="@/assets/icon_deletar.gif" alt="Excluir" class="botao EspacoEntreBotoes">
                                   </router-link>  
                                   -->
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
          headers: [
            {
              title: 'Dessert (100g serving)',
              align: 'start',
              sortable: false,
              key: 'name',
            },
            { title: 'Calories', key: 'calories' },
            { title: 'Fat (g)', key: 'fat' },
            { title: 'Carbs (g)', key: 'carbs' },
            { title: 'Protein (g)', key: 'protein' },
            { title: 'Actions', key: 'actions', sortable: false },
          ],
          desserts: [],
          editedIndex: -1,
          editedItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
          },
          defaultItem: {
            name: '',
            calories: 0,
            fat: 0,
            carbs: 0,
            protein: 0,
          },        
 
     
     }),
     computed: 
      {     
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        } 
      },
 
     methods: {


      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
          },          
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },


 
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
 
   