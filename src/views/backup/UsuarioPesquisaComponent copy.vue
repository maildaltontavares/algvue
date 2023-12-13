<template>
 


 <v-data-table
      v-model:sort-by="sortBy" 
      :headers="headers"
      :items="desserts"
      class="elevation-1"
  ></v-data-table>

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
  import { mapState } from 'vuex'

  import {
  VDataTable,
 
} from "vuetify/labs/VDataTable";


  export default {
    name: 'UsuarioPesquisaComponent',
    mixins: [ApiMixin],
    components: {
        VDataTable,
       
      },      
    data: () => ({
      resultPesquisaCRUD : [],
    
      
      /*
        sortBy: [{ key: 'nome', order: 'asc' }],
        headers: [
 
          { title: 'codigo', key: 'idUsusario' },
          { title: 'Nome', key: 'nome', sortable: false,align: 'start' },
          { title: 'Email', key: 'email' },
          { title: 'Operacao', key: ' ' } 
        ],
*/
        sortBy: [{ key: 'calories', order: 'asc' }],
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
          { title: 'Iron (%)', key: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 200,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 200,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 300,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
        ], 


    
    }),
    computed: mapState(['usuarioSistema']),
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

  