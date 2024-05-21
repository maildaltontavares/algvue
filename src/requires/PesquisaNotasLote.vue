<template>
  <!-- Modal Pesquisa Lote-->
  <div class="modal fade" id="modalPesquisaNotasLote" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelNotasLote" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #003366; color:white; font-weight: bold;">
            <label class="tituloPesquisa fs-5" id="staticBackdropLabelNotasLote">Notas do Lote - {{loteProps}}</label>
        </div>
        <div class="modal-body" > 
         

          <div class="mb-1" style="height: 60%;  overflow-y: auto;">
            <table class="table table-striped table-bordered table-sm">
                <thead> 

                  <tr class="cabecalhoPesquisa">
                    <th scope="col" class="text-center" width="20%">Notas</th>
                    <th scope="col" class="text-center" width="20%">Data</th>
                    <th scope="col" class="text-center" width="40%">Fornecedor</th>
                    <th scope="col" class="text-center" width="20%">Testado em</th>
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
                            <!--<th scope="row" class="text-center" style="color: blue; cursor: pointer;" @click="setaPesquisa({ tipo: 'Lote',obj: c})" data-bs-dismiss="modal">{{ c.idMov }}</th>-->
                            <td class="text-start">{{ c.notaFiscal}}</td>
                            <td class="text-start">{{ c.dataBase}}</td>
                            <td class="text-start">{{ c.nomeFornecedor}} </td>
                            <td class="text-start">{{ c.dataTeste}}</td>
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
 
    export default {
        name: 'PesquisaNotasLote',
        mixins: [ApiMixin,ApiMixinALG],
        props: {
          nfLoteProps : {
            type: Array,
            required: true,
          }, 
          loteProps : {
            type: String,
            required: true,
          }, 
          
        },        
        data: () => ({
            haErros : false,
            mensagemErro: '', 
          
            resultPesquisaCRUD : [] ,  
            exibePaginador:false, 
            param: {
               produtor:[], 

            }  ,
            apiDisplayedDadosCRUD:[]
           
                    
        }),
        methods:{
        
             
            fecharModal() {
                this.nomePesquisa = '' 
                this.resultPesquisaCRUD = []
                this.pages = [] 
                this.apiDisplayedDadosCRUD =[];
                $('#modalPesquisaNotasLote').modal('hide');
            },
        },
       


 
        async updated(){      

               this.apiDisplayedDadosCRUD = this.nfLoteProps;
           
        } ,       

            
          
        
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
