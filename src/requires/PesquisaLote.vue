<template>
  <!-- Modal Pesquisa Lote-->
  <div class="modal fade" id="modalPesquisaLote" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelLote" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #003366; color:white; font-weight: bold;">
            <label class="tituloPesquisa fs-5" id="staticBackdropLabelLote">Pesquisa de Lote</label>
        </div>
        <div class="modal-body" >
          
          <!--
          <div class="mb-3">

              <div class="col-md-12 input-group">
                  <input type="text" class="form-control form-control-sm" @blur="apiPesquisaNome('Lote','descricao',nomePesquisa,1)" v-model.lazy="nomePesquisa" placeholder="Informe o nome do Lote">
                  <button type="button" class="btn btn-primary" @click="apiPesquisaNome('Lote','descricao',nomePesquisa,1)"><i class="bi bi-search input-group-append"></i></button>
              </div>
          </div>
          
        Item: {{  this.itemLote  }} 
        
        --> 

          


          <div class="flex-linha "  style="margin-left:2%;width:96%; background-color:white" >   

              <div    class="espacoEntreComponentes">   

                  <v-autocomplete
                      label="Produtor"
                      :items="produtorItens"                              
                      v-model="this.param.produtor"   
                      item-title="descricao" 
                      item-value="codigo"
                      variant="outlined"
                      style="width: 230px; " 
                      bg-color="white"   
                      density="compact"
                  ></v-autocomplete> 

              </div>    

        
              
              <div    class="espacoEntreComponentes">   
                  
                  <v-text-field
                      v-model.trim= this.param.lote  
                      id="lote"
                      label="Lote" 
                      ref="lote"  
                      maxlength="10"                                         
                      style=" width: 230px; " 
                      variant="outlined"
                      bg-color="white" 
                      type="text"   
                      density="compact"                                                        
                  ></v-text-field>        
                  
              </div> 

              <div class="espacoEntreComponentes "   style=" height:45px;margin-bottom:25px"  > 

                  <v-btn   style="height:47px;width:200px;background-color:rgb(240, 237, 232);"  @click="pesquisaLote()">

                      <v-icon left                                               
                          color="primary"
                          icon="mdi-card-search-outline"
                          size="45"
                      ></v-icon> 

                      <span class="my-auto" style="margin-bottom:35px">Pesquisar</span> <!-- Texto centralizado --> 

                  </v-btn>  

              </div>     

  
          </div>  
 

          <div class="mb-1" style="height: 60%;  overflow-y: auto;">
            <table class="table table-striped table-bordered table-sm">
                <thead>
                  <tr class="cabecalhoPesquisa">
                    <th scope="col" class="text-center" width="10%">Id</th>
                    <th scope="col" class="text-center" width="50%">Produtor</th>
                    <th scope="col" class="text-center" width="20%">Lote</th>
                    <th scope="col" class="text-center" width="20%">Qtde</th>
                  </tr>
                </thead>
                <tbody class="detalhePesquisa">
                    <template v-if="msgProcessamento == '' && nomePesquisa != '' && resultPesquisa.length == 0">
                        <tr style="height: 200px; vertical-align: middle;">
                          <td colspan="2" class="text-center"><label style="font-weight: bold; font-size: 14px; color:#003366">Pesquisa Sem Resultados</label></td>
                        </tr>
                    </template>
                    <template v-if="msgProcessamento != ''">
                        <tr style="height: 200px; vertical-align: middle;">
                          <td colspan="2" class="mensagem_processando text-center"><label style="font-weight: bold; font-size: 14px; color:#003366">{{ msgProcessamento}}</label></td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr v-for="c in apiDisplayedDadosCRUD" :key="c">
                            <th scope="row" class="text-center" style="color: blue; cursor: pointer;" @click="setaPesquisa({ tipo: 'Lote',obj: c})" data-bs-dismiss="modal">{{ c.idMov }}</th>
                            <td class="text-start">{{ c.produtor}}</td>
                            <td class="text-start">{{ c.lote}}</td>
                            <td class="text-start">{{ c.qtde}}</td>
                        </tr>
                    </template>
                </tbody>
            </table> 

            <div class="mt-4">
              <nav aria-label="Page navigation example">
                <ul class="pagination pagination-sm justify-content-center">
                  <li class="page-Lote">
                    <button type="button" class="page-link" v-if="page != 1" @click="page--"> Anterior </button>
                  </li>
                  <li class="page-Lote" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber">
                    <button type="button" class="page-link" @click="page = pageNumber"> {{pageNumber}} </button>
                  </li>
                  <li class="page-Lote">
                    <button type="button" class="page-link" v-if="page < pages.length" @click="page++"> Próxima </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end divBotao">
            <p v-if="haErros" class="mensagem mensagem_erro text-center mt-2">
                {{ mensagemErro }}
            </p>
            <button type="button" id="btnCloseModal" class="btn btn-secondary btn-sm botaoFechar" @click="fecharModal">Fechar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

    import ApiMixin from '@/mixins/ApiMixin';
    import ApiMixinALG from '@/mixins/ApiMixinALG'
/*
    $('#modalPesquisaLote').on('shown', function () {
        alert("aqui");
    })
*/
    export default {
        name: 'PesquisaLote',
        mixins: [ApiMixin,ApiMixinALG],
        props: {
          itemLote : {
            type: String,
            required: true,
          },
        },        
        data: () => ({
            haErros : false,
            mensagemErro: '', 
          
            resultPesquisaCRUD : [] , 
            produtorItens: [],
            produtorItensTemp:{ 
                codigo:'',
                descricao:''
            },  
            param:{

              produtor: '',
              lote: '' ,
              item:''
            },
            lotePesquisaDTO:{ 
               produtor: '',
               lote: '' ,
               idfil:'',
               item:''
            }   ,
            exibePaginador:false,   
           
                    
        }),
        methods:{
        
            pesquisaLote(){         
              
                //let it;

                if(this.itemLote=='' || this.itemLote==null){
                    this.apiDisplayMensagem('Item não informado.')
                }else{
                    
                    //it = this.itemLote
                    this.param.item = this.itemLote;

                    //console.log(' this.param.item ')
                    //console.log(this.param) 
                    //console.log(it) 

                    this.apiPesquisaCRUDByFilial('lotePesquisa','nome',  this.param);
                }
                
            },
            setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor     
            } ,
            setaPesquisa(evento) {
                this.nomePesquisa = ''
                this.param.produtor = ''
                this.param.lote = ''                
                this.resultPesquisaCRUD = []
                this.pages = []
                this.$emit('setaPesquisa',evento)
            },
            fecharModal() {
                this.nomePesquisa = ''
                this.param.produtor = ''
                this.param.lote = ''
                this.param.item = ''
                this.resultPesquisaCRUD = []
                this.pages = []
                $('#modalPesquisaLote').modal('hide');
            },
        },
        async created(){    
          this.populaProdutor();   
          //this.param.item = this.itemLote;
        } ,       

        mounted(){     
           this.param.item = this.itemLote;
        } ,     
        /*     
        watch: {
            haErros(newValue) {
                if(newValue) {
                    this.apiDisplayMensagem('Informe pelo menos um valor para pesquisa')
                }
            }
        }
        */
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

</style>
