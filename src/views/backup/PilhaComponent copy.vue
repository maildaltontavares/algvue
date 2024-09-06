<template>   

<v-form  ref="formulario"   style=" background-color:white;height:100% "  >    

   <!-- <v-container style="width:100%;background-color:white"  >--> 
   
           <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
               <div  style="width:100%"  > 
                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   
                        
                        <div    class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p class="text-white text-end mt-3 pe-5" style="font-size: 18px"><b>{{this.titulo}}  </b></p>
                                                         
                            </div> 
                        </div>    


                        <div class=" d-flex justify-content-end"   style=" height:45px;margin-right: 10px; "  
                        v-if="this.$store.state.tipoDispositivo == 'desktop' "  >                          
                                <v-btn @click="this.pesquisaDados()"  :disabled="acaoDesabilitado"  style="height:47px;width:280px;margin-top: 15px;background-color:rgb(240, 237, 232);"
                            
                                v-if="this.$store.state.tipoDispositivo == 'desktop' "  >

                                    <v-icon left                                               
                                        color="primary"
                                        icon="mdi-card-search-outline"
                                        size="45"
                                    ></v-icon> 

                                    <span class="my-auto">{{this.labelPesquisarComposicao}}</span>  

                                </v-btn>  
                        
                      
                        </div>              

                   </div> 



                  <!-- Inicio Painel Unir Pilhas -->
                  <!-- Inicio Painel Unir Pilhas -->
                  <!-- Inicio Painel Unir Pilhas -->
                  <!-- Inicio Painel Unir Pilhas -->                    

               

            

                  <template v-if="this.acaoSelecionada=='I'">
                   

   
                        <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >    
                        
                             <div    class="espacoEntreComponentes">   

                                    <v-autocomplete
                                        label="Produtor"
                                        :items="produtorItens"                              
                                        v-model.trim="this.pilha.produtor" 
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 270px; " 
                                        bg-color="white"   
                                        density="compact"
                                        :rules="[campoRequerido]" 
                                        :disabled="this.produtorDesabilitado"
                                    ></v-autocomplete> 

                              </div>     
 

      
                              <div   class="espacoEntreComponentes">    
                                                    
                                      <v-text-field  
                                          id="pilha"
                                          label="Nova Pilha"
                                          ref="pilha"  
                                          v-model.trim="this.pilha.pilha"
                                          maxlength="5"                                         
                                          style=" width: 200px; "
                                          variant="outlined" 
                                          type="number"
                                          inputmode="numeric" 
                                          density="compact" 
                                          :rules="[campoRequerido]"
                                          @blur="configuraPilha() "
                                          :disabled="this.pilhaDesabilitado"

                                      ></v-text-field>                                    
                                         
                               </div>   

                               <div   class="espacoEntreComponentes">    
                                      
                                      <v-text-field  
                                       
                                          label="Fardos na Pilha" 
                                          v-model.trim="this.pilha.numFardosPilha"
                                          maxlength="5"                                         
                                          style=" width: 200px; "
                                          variant="outlined" 
                                          type="number"
                                          inputmode="numeric" 
                                          density="compact"   
                                          disabled

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
                                                v-model.trim="this.pilha.item"
                                                type="number"
                                                inputmode="numeric"
                                                :rules="[campoRequerido]" 
                                                density="compact"
                                                :disabled="this.itemDesabilitado"
                                                @blur="apiPesquisaParam('itemPilha', this.pilha.item  , this.pilha)"
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
                                                v-model.trim="this.pilha.descFio"
                                                style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                            ></v-text-field>   
                                        </div>  

                                    </div>

                                </div>    



                                <div   class="espacoEntreComponentes">    
                                                    
                                      <v-text-field  
                                          id="lote"
                                          label="Lote"
                                          ref="lote"  
                                          v-model.trim="this.pilha.lote"
                                          maxlength="5"                                         
                                          style=" width: 200px; "
                                          variant="outlined"   
                                          density="compact"  
                                          :disabled="this.loteDesabilitado"
  
                                      ></v-text-field>    
                                </div> 

<!--
                                <div    class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'">  

                                      <v-autocomplete

                                          label="Fardos"
                                          :items="destinoItens"      
                                          v-model.trim="this.pilha.destino"  
                                          item-title="descricao" 
                                          item-value="codigo"
                                          variant="outlined"
                                          style=" width: 150px; "
                                          bg-color="white"   
                                          density="compact"
                                          :disabled="destinoDesabilitado" 
                                          :rules="[campoRequerido]"  
                                          
                                      ></v-autocomplete> 

                                </div> 
                                
-->
                        </div>
                        <!--

                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados


                        -->
                        <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" > 

                                <div   class="espacoEntreComponentes">    
                                         
                                         <v-text-field
          
                                             v-model.trim="this.totalFardosMistura" 
                                             id="numFardos"
                                             label="Num. Fardos Selec." 
                                             ref="numFardos"  
                                             maxlength="150"                                            
                                             style=" width: 200px; " 
                                             variant="outlined"
                                             bg-color="white"                                           
                                             type="text"     
                                             density="compact"
                                             disabled
                                             
                                         ></v-text-field>                                    
                                                 
                                       
                                   </div>  
           
          
                                   <div   class="espacoEntreComponentes">    
                                                        
                                          <v-text-field
          
                                              v-model.trim="this.nPesoMovimento" 
                                              id="pesoMistura"
                                              label="Peso" 
                                              ref="pesoMistura"  
                                              maxlength="150"                                            
                                              style=" width: 200px; " 
                                              variant="outlined"
                                              bg-color="white"                                           
                                              type="text"     
                                              density="compact"
                                              disabled
                                              
                                          ></v-text-field>                                    
                                                                
                                    </div>      



        
                          </div>      


                  </template>

                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->      



                    <div class="d-flex justify-content-center"  style="margin-left:4%;width:96%;margin-top: 1%;background-color:white" v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile' " >  

                        <div class="espacoEntreComponentes "   style=" height:45px;margin-bottom:25px"  > 

                          <v-btn @click="this.pesquisaDados()" style="height:47px;width:280px;margin-top: 15px;background-color:rgb(240, 237, 232);" 
                         
                            v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile' " 
                            :disabled="acaoDesabilitado" > 
                            

                              <v-icon left                                               
                                  color="primary"
                                  icon="mdi-card-search-outline"
                                  size="45"
                              ></v-icon> 

                              <span class="my-auto">{{this.labelPesquisarComposicao}}</span>   

                          </v-btn>  

                        </div>    

                    </div>   
 
               
                    <!-- /// Resumo Pilha -->  
                    <!-- /// Resumo Pilha -->
                    <!-- /// Resumo Pilha -->
                    <!-- /// Resumo Pilha -->
                    <div class="d-flex justify-content-center"  style=" background-color:white "   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:150px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="21" style="background-color:cadetblue; text-align:center;font-size:18px; " >FORMACAO DA PILHA</th> 
                                      </tr>                                     
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th class="col-1 text-start tabGrid"  >IND </th>  
                                          <th class="col-1 text-start tabGrid"  >SAC</th>  
                                          <th class="col-1 text-start tabGrid" >TRID</th>  
                                          <th class="col-1 text-start tabGrid">PIM</th>  
                                          <th class="col-1 text-start tabGrid ">SC</th>  
                                          <th class="col-1 text-start tabGrid" >SCI</th>
                                          <th class="col-1 text-start tabGrid" >MST</th>
                                          <th class="col-1 text-start tabGrid" >MIC</th>   
                                          <th class="col-1 text-start tabGrid" >MAT</th>  
                                          <th class="col-1 text-start tabGrid" >UHML</th> 
                                          <th class="col-1 text-start tabGrid" >UI</th> 
                                          <th class="col-1 text-start tabGrid" >SF</th>  
                                          <th class="col-1 text-start tabGrid" >STR</th> 
                                          <th class="col-1 text-start tabGrid" >ELG</th> 
                                          <th class="col-1 text-start tabGrid" >+B</th> 
                                          <th class="col-1 text-start tabGrid" >RD</th>                                           
<!--                                          
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
-->                                          
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-start tabGrid" >TrCnt</th> 
                                          <th class="col-1 text-start tabGrid" >Estoque</th>  
                                          <th class="col-1 text-start tabGrid" >Qtde Selec</th>  
                                          

                                      </tr>
                                    </thead>  

                                    <tbody  v-if=" this.totalFardosMistura >0"  >  

                                        <template  v-for="(i,indice) in aProdutorSelecionado" :key="indice">
    
                                            <tr v-if="i.TotFardos_selec>0" >  

                                                <td class="col-1 text-start tabGridCol" style="color:blue"   >
                                                   {{ i.produtor  }} 
                                                </td> 

                                                <td class="col-1 text-start tabGridCol"   >
                                                  {{ (i.SAC ).toFixed(1)}} 
                                                </td> 
                                            
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TRID).toFixed(1) }}
                                                </td>  

                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.PIM).toFixed(1) }}
                                                </td>  
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.SC).toFixed(1) }}
                                                </td>  
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.SCI).toFixed(0) }}
                                                </td>  
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.MST).toFixed(1) }}
                                                </td> 
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.MIC).toFixed(2) }}
                                                </td>    
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.MAT).toFixed(2) }}
                                                </td>    
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.UHML).toFixed(2) }}
                                                </td>  

                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.UI).toFixed(1) }}
                                                </td>                                                

                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.SF).toFixed(1) }}
                                                </td>   
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.STR).toFixed(1) }}
                                                </td>   
                                                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.ELG).toFixed(1) }}
                                                </td>   
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.B).toFixed(1) }}
                                                </td>   

                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.RS).toFixed(1) }}
                                                </td>                                               
    <!--
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TIPO).toFixed(2) }}
                                                </td>                                                                                           
                                              -->                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TrAr).toFixed(2) }}
                                                </td>   

                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TrCnt).toFixed(2) }}
                                                </td>  

                                                <td class="col-1 text-end tabGridCol" >
                                                  {{ this.apiFormataNumero(i.TotFardosEstoque ,0) }}
                                                </td>                                            

                                                <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                                  {{ i.TotFardos_selec }}
                                                </td>    
                                                                                            

                                            </tr>  

                                          </template> 
                                      

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  


                    <div class="d-flex justify-content-center"     :style="{marginBottom:  this.marginBottomNovaPilha} " >  
                        <div   style=" width:4.3%;   "> </div>

                        <div   style=" width:89%;background-color: rgb(239, 244, 251);  "  :style="{height:  this.heightNovaPilha}" > 
                        
                          <div  style=" width:100%;background-color:#003366; color: white; text-align: center; font-size:15px"><b>DADOS DA NOVA PILHA</b></div>
                        

                          <div class="flex-linha " style="margin-left: 2%" >    
                        
                                <div    class="espacoEntreComponentes">   

                                        <v-autocomplete

                                              label="Fornecedor"
                                              :items="fornecedorItens"  
                                              v-model.trim="this.pilha.fornecedor" 
                                              item-title="nome" 
                                              item-value="codigo"
                                              variant="outlined"
                                              style=" width: 320px; "
                                              bg-color="white"  
                                              density="compact"
                                              @blur="trocaFornecedor"

                                      ></v-autocomplete>  

                                </div>     

                                <div   class="espacoEntreComponentes">    
                                                      
                                      <v-text-field  
                                          id="novoLote"
                                          label="Novo Lote"
                                          ref="novoLote"  
                                          v-model.trim="this.pilha.novoLote"
                                          maxlength="10"                                         
                                          style=" width: 320px; "
                                          variant="outlined"  
                                          bg-color="white"  
                                          density="compact"  
                                          

                                      ></v-text-field>    

                                </div> 

                                <div    class="espacoEntreComponentes">   

                                  <v-autocomplete

                                        label="Procedencia"
                                        :items="procedenciaItens"  
                                        v-model.trim="this.pilha.procedencia" 
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style=" width: 320px; "
                                        bg-color="white"      
                                        density="compact"
                                        @blur="trocaProcedencia"

                                   ></v-autocomplete>  

                                </div>   
                                
                                
                                <div    class="espacoEntreComponentes"  >    


                                    <v-autocomplete

                                          label="Tamanho"
                                          :items="tamanhoItens"  
                                          v-model.trim="this.pilha.tamanho" 
                                          item-title="nome" 
                                          item-value="id"
                                          variant="outlined"
                                          style=" width: 320px; "
                                          bg-color="white"      
                                          
                                          density="compact"

                                   ></v-autocomplete>  



                                </div>     


                          </div>    

                        
                        </div>
                        <div   style=" width:4%;  "> </div>
                    </div>

                    <div style="height:  300px; background-color:white"  v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "  >

                    </div>    




                    <!-- ///Final Resumo Pilha -->  
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                     
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->                     
 
                     <div class="container-fluid"  style=" height:1800px;  overflow-x: scroll;">
                            <table class="table table-sm  tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                    
                                      <th class="col-3 text-start" v-if="this.$store.state.usuarioSistema.idfil != '05'">FORNECEDOR</th>   
                                      <th class="col-3 text-start">PRODUTOR</th>     
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >DV/COR/ TP MIC</th>  
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >QUAL</th>  
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >CORTEZA</th> 
                                      <th class="col-2 text-start"  >PILHA</th>  
                                      <th class="col-2 text-start" >LOTE</th>  
                                      <th class="col-2 text-start" >TAM</th>  
                                      <th class="col-2 text-start"  >ESTOQUE</th>  
                                      <th class="col-2 text-start"  >UTILIZAR TODOS</th>  

                                      <th class="col-2 text-start" >NUM FARDOS</th>  
                                      <th class="col-2 text-start" >SAC</th>  
                                      <th class="col-2 text-start" >TRID</th>  
                                      <th class="col-2 text-start" >PIM</th>  
                                      <th class="col-2 text-start" >SC</th>  
                                      <th class="col-2 text-start" >SCI</th>  
                                      <th class="col-2 text-start" >MST</th>  
                                      <th class="col-2 text-start" >MAT</th>  
                                      <th class="col-2 text-start" >ELG</th>  
                                      <th class="col-2 text-start" >STR</th>  
                                     
                                      <th class="col-2 text-start" >TIPO</th>  
                                       
                                      <th class="col-2 text-start" >UI</th>  
                                      <th class="col-2 text-start" >MIC</th>  
                                      <th class="col-2 text-start" >SF</th>  
                                      <th class="col-2 text-start" >+B</th>  
                                      <th class="col-2 text-start" >RD</th>  
                                      <th class="col-2 text-start" >TrAr</th>  
                                      <th class="col-2 text-start" >TrCnt</th>  
                                      <th class="col-2 text-start" >UHML</th>  
                                    
                                    

                                      
                                  </tr>
                                </thead> 
  
                                <tbody    >
                                  <template  v-for="(i,indice) in aComposicao" :key="indice">
 
                                    <tr  >  
 
                                      <td class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil != '05'" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.forn}}
                                      </td> 
                                  
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " >
                                        {{ i.produt }}
                                      </td>  

                                      <td class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4DEST + '-' +  i.m4COLOR +   i.m4TPMIC}}
                                      </td>       
                                      
                                      <td class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4QUAL}}
                                      </td> 
                                      
                                      <td class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4CORTEZ}}
                                      </td>                                      
 
                                      <td class="col-1 text-start"   :style="{backgroundColor: i.corLinha} ">
                                        {{ i.pi}}
                                      </td>  

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " >
                                        {{ i.lote}}
                                      </td>     

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4TAM}}
                                      </td>   

                                      <td class="text-center"  :style="{backgroundColor: i.corLinha} ">
                                        {{ i.estoque}}
                                      </td>  

                                      <td class="text-center"  :style="{backgroundColor: i.corLinha} ">
                                            <v-btn style="height:30px;width:30px;"   @click="transfereEstoque(this.aComposicao,i )"> 
                                                <v-icon left                                               
                                                  color="primary"
                                                  icon="mdi-arrow-right-bold"
                                                  size="35"
                                                ></v-icon> 
                                            </v-btn>

                                      </td>    
 
                                      <td  class="col-2  "   >    
 
                                          <input type="number"
                                              v-model.trim="i.qtde" 
                                              maxlength="4"                                            
                                              style=" width: 100px;height: 30px;border:solid 1px ;text-align: center;font-size:16px;border-radius:5px 5px 5px 5px; "   
                                              @change="calculaPilha(this.aComposicao,i )"
                                              @focus="calculaPilha(this.aComposicao,i )" 
                                          >         

                                      </td>      

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.sac !=null">
                                        {{ ((i.sac)).toFixed(1)}}
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.sac ==null">
                                        {{   }}
                                      </td>                                                                               

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.trid !=null">
                                        {{ ((i.trid)).toFixed(1)}}   
                                      </td>  
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.trid ==null">
                                        {{   }}
                                      </td>                                        

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.pim !=null">
                                         
                                        {{ ((i.pim)).toFixed(1)}}   
                                      </td> 
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.pim ==null">
                                        {{   }}
                                      </td>                                        

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.sc !=null">
                                       
                                        {{ ((i.sc)).toFixed(1)}} 
                                      </td>  
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.sc == null">
                                        {{    }}
                                      </td>                                        

                                      <td class="col-1 text-start"  :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0  && i.sic !=null">
                                       
                                        {{ ((i.sic)).toFixed(0)}} 
                                      </td>   
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.sic ==null">
                                        {{   }}
                                      </td>                                        

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.mst !=null">
                                       
                                        {{ ((i.mst)).toFixed(1)}} 
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.mst ==null">
                                        {{   }}
                                      </td>                                                           

                                      <td class="col-1 text-start" style="color:blue" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.mat !=null"> 
                                     
                                        {{ ((i.mat)).toFixed(2)}} 
                                      </td> 

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.mat ==null">
                                        {{   }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.elg !=null">
                                   
                                        {{ ((i.elg)).toFixed(1)}} 
                                      </td>        
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.elg ==null">
                                        {{  }}
                                      </td>                                       

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.str !=null">
                                      
                                        {{ ((i.str)).toFixed(1)}} 
                                      </td> 

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0   || i.str ==null">
                                        {{  }}
                                      </td>                                       
 
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " style="min-width:50px;" v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.tipo !=null">
                                        {{ String(i.tipo).replace(/\./g, "-")}}
                                
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0   || i.tipo ==null">
                                        {{  }}
                                      </td>                                                             
 
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.ui !=null">
                                       
                                        {{ ((i.ui)).toFixed(1)}} 
                                      </td>

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0   || i.ui ==null">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" style="color:blue" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.mic !=null">
                                   
                                        {{ ((i.mic)).toFixed(2)}} 
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0   || i.mic ==null">
                                        {{   }}
                                      </td>                                       
                                      
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.str !=null && i.sf !=null">
                                
                                        {{ ((i.sf)).toFixed(1)}} 
                                      </td>   
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.sf ==null">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.m4B !=null">
                                   
                                        {{ ((i.m4B)).toFixed(1)}} 
                                      </td> 
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.m4B ==null">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.m4RS !=null">
                                      
                                        {{ ((i.m4RS)).toFixed(1)}} 
                                      </td>       
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.m4RS ==null">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.m4TRAR !=null">
                                      
                                        {{ ((i.m4TRAR)).toFixed(2)}} 
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0 || i.m4TRAR ==null">
                                        {{  }}
                                      </td>                                       

                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.m4TRCNT !=null">
                                   
                                        {{ ((i.m4TRCNT)).toFixed(1)}} 
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.m4TRCNT ==null">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0 && i.m4UHML !=null"> 
                                        {{ (i.m4UHML).toFixed(2)}}
                                       
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0  || i.m4UHML ==null">
                                        {{  }}
                                      </td>                                        

                                     
                                    </tr>
 

 
                     
    
                                  </template> 
  
                              </tbody> 
  
                          </table> 
  
  
                      </div>

                    <!-- /// Final corpo Pilha --> 
                    <!-- /// Final corpo Pilha -->  
                    <!-- /// Final corpo Pilha -->  
                    <!-- /// Final corpo Pilha -->   
  
  

                                            
   
  
                      <div style="height:80px">   <!--   Libera espaco da barra de botoes no mobile-->
  
                      </div>   
                </div>    
                    <!-- </v-card> -->
           </div>
      <!--  </v-container>      -->
 
        

          <div style="margin-bottom: 38px; background-color:white; ">

          </div>  

          <div style="height:  500px; background-color:white"  v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "  >

          </div>       


              <div class="d-flex justify-content-center" > 


                  <MensagemMobile    v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "    class="rodape_mobile"
                  style=" margin-bottom:60px"
                  :mensagemSucessoProps="mensagemSucesso" 
                  :mensagemErroProps="mensagemErro"
                  :haErrosProps="haErros"
                  :haSucessoProps= "haSucesso"
                  />   
 

                      <div   class=" elevation-12 rodape_crud2" style=" background-color:rgb(173, 173, 187);"  > 
                          
                          <div class=" d-flex justify-space-between " style=" margin-bottom:5px" >  

                              <div class="col-9 "  >
 

                                  <p v-if="msgProcessamento != ''" class=" mensagem mensagem_processando" style="font-size: 16px;">
                                      {{ msgProcessamento }}
                                  </p>       

                                  <p v-if="haErros && this.$store.state.tipoDispositivo == 'desktop'" class="mensagem mensagem_erro" style="font-size: 20px;">
                                      {{ mensagemErro }}
                                  </p>
                                  <p v-if="haSucesso && this.$store.state.tipoDispositivo == 'desktop'"  class="mensagem mensagem_sucesso" style="font-size: 20px;">
                                      {{ mensagemSucesso }}
                                  </p>
                              </div> 

                              <!-- Inicio Rodape Manutencao Pilha -->
                              <!-- Inicio Rodape Manutencao Pilha -->
                              <!-- Inicio Rodape Manutencao Pilha -->
                              <!-- Inicio Rodape Manutencao Pilha -->                     

                    
 
                              <template v-if="this.acaoSelecionada=='I'">                              

                                    <div class="col-3 div_rodape d-flex justify-content-end"    >
                                        <v-btn color="secondary" class="botao_rodape" v-if="this.acaoDesabilitado"  :disabled="this.unirPilhaDesabilitado" style="min-width: 70px; "  accesskey="c"  @click="ativaConsulta()"><u>C</u>onfirmar</v-btn>
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>{{this.labelNovo}}</v-btn>                                   

                                    </div>  



                              </template>   
  
                          </div>
                    
                      </div>   

                            
              </div>




    </v-form>
    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao> 
</template> 
    
<script>
  
    import ApiMixin from '@/mixins/ApiMixin' 
    import { mapState } from 'vuex'
    import ApiMixinSEG from '@/mixins/ApiMixinSEG'    
    import ApiMixinALG from '@/mixins/ApiMixinALG'
    import ApiMixinValidator from '@/mixins/ApiMixinValidator'
    import MensagemMobile  from '@/components/MensagemMobileComponent.vue'
    import SimNao from '@/requires/SimNao.vue' 
    import PesquisaItem from '@/requires/PesquisaItem'
  
    export default {
      name: 'PilhaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile, SimNao,PesquisaItem},  
      props: {
 
          tituloProps : {
          type: String,
          required: true,
          },     
          labelPesquisarComposicaoProps : {
          type: String,
          required: true,
          },                       
          acaoSelecionadaProps: {
          type : String,
          required: true,
          },
       },       
      data: () => ({

        resultPesquisaCRUD : [] , 

        produtorItens: [],
        produtorItensTemp:{ 
            codigo:'',
            descricao:'',
            chave:''
        }, 

        tamanhoItens:[
                
         ],     
         fornecedorItens:[
                
         ],      
         procedenciaItens:[]  ,


        misturaDTO:{  

            statusMistura:'',
            numeroMistura:'',
            dataInicial:'',
            dataFinal:'' , 
            quantidade:0,
            totalFardos:0,
            idfil:'',
            loteFiacao:'',
            observacao:'',
            destino:'',
            totalMisturasUtilizadas:0,
            
        }, 

        titulo:'',
        labelPesquisarComposicao:'',
        acaoSelecionada:''        , 
   

        aMisturaFinal:[],
        aMisturaItemFinal:[], 
  
        aResumoMistura:[], 

        
        aEstoqueProdutor:[],  
        aResumoProdutor:[],
        aEstoqueProdutorTotalizador:[], 
        aResumoProdutorTotalizador:[] , 
        aProdutorSelecionado: [],

        aResumoQualidade:[], 
        aEstoqueQualidade:[],  
        aResumoQualidadeTotalizador:[],
        aEstoqueQualidadeTotalizador:[],  
        

        aComposicao:[], 

        erros: '',
        mensagemSucesso: '',
        mensagemErro : '', 
        haErros: false,      
        haSucesso: false,    
        exibePaginador:false,         
        resultadoPesquisa:[],        
        totalFardosMistura:0, 
        totalFardosEstoque:0, 
        simNaoTipo: 'sucesso',
        simNaoPergunta: '',
        simNaoBotoes: [],
        simNaoRetorno: '',
        tipoOperacao:'A',
        
        temp:'',
        operMist:'I', 
        oper:'I',

        pilhaInicial:{
          produtor:'',
          pilha:'',
          item:'',
          descFio:'',
          lote:'',
          destino:'',
          fornecedor:'',
          nomeFornecedor:'',
          tamanho:'',
          procedencia:'',
          novoLote:'',
          fornecedorFinal: '',
          procedenciaFinal: '',
          numFardosPilha:0

        },

        pilha: {

          produtor:'',
          pilha:'',
          item:'',
          descFio:'',
          lote:'',
          destino:'',
          fornecedor:'',
          nomeFornecedor:'',
          tamanho:'',
          procedencia:'',
          novoLote:'',
          numFardosPilha:0

        },        

        validacao:'',

        aResult:[],
        
        produtorDesabilitado:false,
        pilhaDesabilitado:false,
        itemDesabilitado:false,  
        loteDesabilitado:false,  
        destinoDesabilitado:false,
        nPesoMovimento:0,

        mistura:{

        statusMistura:'',
        numeroMistura:'',
        dataInicial:'',
        dataFinal:'' , 
        quantidade:0,
        totalFardos:0,
        idfil:'',
        loteFiacao:'',
        observacao:'',
        destino:'',
        totalMisturasUtilizadas:0,
        unirPilhaDesabilitado:false,
        
        },
        aMovimentoItemDAOEnt:[],

        acaoDesabilitado:'false',
        destinoItens:[
            {'codigo':'D','descricao':'DENIM'},
            {'codigo':'V','descricao':'VENDA'} ,
            {'codigo':'T','descricao':'TODOS'} 

        ], 
        marginBottomNovaPilha:"30px",
        tamTela:"",
        labelNovo:"",
        heightNovaPilha:"",
        fardosEmPilha:"",


        
         
      }),
      computed: mapState(['usuarioSistema']),
      methods: {
   
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
 
        } , 
        trocaFornecedor(){

           this.pilha.fornecedorFinal = this.pilha.fornecedor;
        },

        trocaProcedencia(){

          this.pilha.procedenciaFinal = this.pilha.procedencia;
        }, 
        transfereEstoque(pComposicaoArray,elemento)       {
 
           elemento.qtde = elemento.estoque;
           this.calculaPilha(pComposicaoArray,elemento);

        },


        calculaPilha(aComposicaoArray,elemento ){ 

              let afardosPilha = aComposicaoArray;
              let aTamanhoPilha; 
              let aFornecedorPilha;
              let aProcedenciaPilha;
              let objTamanho;
              let objFornec;
              let objProced;
              let objFor;
              let objProc;


              //console.log(afardosPilha);

              aTamanhoPilha = [];
              //aFornecedorPilha=[{codigo:'',descricao:''}]; 
              aFornecedorPilha=[]; 
              aProcedenciaPilha=[];
              
              for (let k = 0; k < afardosPilha.length; k++) {
                
                   if(afardosPilha[k].qtde > 0){ 

                         objTamanho = aTamanhoPilha.indexOf(aComposicaoArray[k].m4TAM); 
                         if(objTamanho<0){   
                                aTamanhoPilha.push(aComposicaoArray[k].m4TAM);     
                         }  

                         
                         objFornec =  aFornecedorPilha.find(objFornec => objFornec.codigo  === aComposicaoArray[k].m4FORN);  
                       
                         if(!objFornec){

                              objFor = {
                                codigo:aComposicaoArray[k].m4FORN,
                                nome:aComposicaoArray[k].forn                              
                              }
                        
                              aFornecedorPilha.push(objFor);
 

                         } 


                         objProced =  aProcedenciaPilha.find(objProced => objProced.codigo  === aComposicaoArray[k].m4PROCED);  
                       
                         if(!objProced){

                              objProc = {
                                codigo:aComposicaoArray[k].m4PROCED,
                                nome:aComposicaoArray[k].m7DESC                              
                              }
                        
                              aProcedenciaPilha.push(objProc);
 

                         }                          
                       

                   } 

              } 

              this.tamanhoItens      = aTamanhoPilha;
              this.fornecedorItens   = aFornecedorPilha;
              this.procedenciaItens  = aProcedenciaPilha;


              //console.log(this.procedenciaItens)

              if(this.tamanhoItens.length ==1 ){
                  this.pilha.tamanho = aTamanhoPilha[0]; 
              }else{ 
                  this.pilha.tamanho='';
              }

              if(this.fornecedorItens.length ==1 ){
                  this.pilha.fornecedor = aFornecedorPilha[0].nome; 
                  this.pilha.fornecedorFinal = aFornecedorPilha[0].codigo;  
              }else{ 
                  this.pilha.fornecedor='';
              }    
              
              if(this.procedenciaItens.length ==1 ){
                  this.pilha.procedencia = aProcedenciaPilha[0].nome; 
                  this.pilha.procedenciaFinal = aProcedenciaPilha[0].codigo;  
              }else{ 
                  this.pilha.procedencia='';
              }               
              

              //console.log('this.tamanhoItens'); 
              //console.log( this.tamanhoItens );
              
  
              this.calculaTotais(aComposicaoArray,elemento ) ;  

        },


        async validaFormacaoPilha(){
   
              let validado;
              let myMsg;

              this.unirPilhaDesabilitado = true; 
              


              if(this.pilha.fornecedor ==null ||  this.pilha.fornecedor == ''  ){
                    validado = false;
                    this.unirPilhaDesabilitado = false; 
                    myMsg = 'Informe o fornecedor da pilha.'
                    this.apiDisplayMensagem(myMsg); 
                    this.haErros = true;
                    return validado;
              }  else if(this.pilha.novoLote ==null ||  this.pilha.novoLote == ''  ){
                    validado = false;
                    this.unirPilhaDesabilitado = false; 
                    myMsg = 'Informe o lote da pilha.'
                    this.apiDisplayMensagem(myMsg);
                    this.haErros = true; 
                    return validado;
              }else if(this.pilha.tamanho ==null ||  this.pilha.tamanho == ''  ){
                    validado = false;
                    myMsg = 'Informe o tamanho do fardo da pilha.'
                    this.unirPilhaDesabilitado = false; 
                    this.apiDisplayMensagem(myMsg);
                    this.haErros = true; 
                    return validado;
              }  else{ 
                validado = true;
              }         

              return validado;  

        }, 
        
        
        validaPesquisa(){  

              let validado; 

              validado=true; 
             
              for (let j = 0; j < this.aComposicao.length; j++) {

                    if( this.aComposicao[j].qtde < 0 ){  
                        this.apiDisplayMensagem("Quantidade do lote " + this.aComposicao[j].lote + " inválida" );
                        this.haErros = true;
                        validado = false;  
                        this.unirPilhaDesabilitado=false;
                        return validado;
                          
                    }

                    if( this.aComposicao[j].qtde > 0 && this.aComposicao[j].qtde > this.aComposicao[j].estoque ){  
                        this.apiDisplayMensagem("Quantidade do lote " + this.aComposicao[j].lote + " maior que o estoque." );
                        this.haErros = true;
                        validado = false;  
                        this.unirPilhaDesabilitado=false;
                        return validado;
                          
                    }  

                      
                    if( this.aComposicao[j].qtde > 0 && (
                        this.aComposicao[j].mic <= 0     || this.aComposicao[j].m4UHML <= 0      ||
                        this.aComposicao[j].mat <= 0     || this.aComposicao[j].sic <= 0          || this.aComposicao[j].m4RS <= 0 ||
                        this.aComposicao[j].mic == null  || this.aComposicao[j].m4UHML == null   ||
                        this.aComposicao[j].mat == null  || this.aComposicao[j].sic == null       || this.aComposicao[j].m4RS == null   
                         )
                      ){  

                          this.apiDisplayMensagem("Lote " + this.aComposicao[j].lote + " sem teste." );
                          this.haErros = true;
                          validado = false;  
                          this.unirPilhaDesabilitado=false; 
                          return validado;

                      }
                    
             



              } 
    
             
              return validado;


        },
        
        async ativaConsulta(){

            this.unirPilhaDesabilitado=true;
           
            this.msgProcessamento = "Processando" ;
            this.apiProcessamento()  ;   
            
            
            const respostaV = await this.validaFormacaoPilha();        
            if (respostaV==true){    

                const respostaF = this.validaPesquisa();  
                if (respostaF==true ){  
                  
                  const respostaP = await this.verficaFardosEmPilha();   
                         

                  if (respostaP==true || (this.fardosEmPilha == "" || this.fardosEmPilha.length == 0 )){   
                         this.msgProcessamento = ""; 
                         this.exibeModal('confirmaFardosEmPilha',"Confirma formação da pilha?" ,['S','N'] ,'sucesso')                        
                   }else{                
                         this.msgProcessamento = ""; 
                         this.exibeModal('fardosEmPilha',this.fardosEmPilha + " . Confirma formação da pilha?" ,['S','N'] ,'aviso')
                   }   

                }else{
                  this.msgProcessamento = "";
                } 
                    
            }else{
              this.msgProcessamento = "";
            }

             

        },


        async verficaFardosEmPilha(){ 


               let validado;
               let objItem;
               let fardosEmPilhaTmp="";

               this.aMovimentoItemFinal = []; 
               this.aMovimentoItemDAO = [];   

               validado=false;
               this.fardosEmPilha = ""; 

                /// Movimento SAIPL
                for (let i = 0; i < this.aComposicao.length; i++) {    

                      if(this.aComposicao[i].qtde > 0){  
                                                           
                              objItem = {  
                                                                    
                                        idfil:        this.$store.state.usuarioSistema.idfil,
                                        notaFiscal:   null    ,
                                        fornecedor:   null,
                                        item:        null, 
                                        produtor:     null,
                                        procedencia:  null, 
                                        lote:         null,    
                                        qualidade:    null,     
                                        tamanho:      null,   
                                        descFio:      null,    
                                        observacao:          null,   
                                        unidadeMedida:       null,   
                                        pilha:               null,    
                                        idAutomatico:        null,    
                                        movimentoAutomatico:  null,   
                                        movimentoDePilha:     null,   
                                        quantidade:           this.aComposicao[i].qtde,    
                                        peso:                 null,   
                                        vlUnitario:           null,   
                                        idMovimento:          this.aComposicao[i].m4ID,   
                                        idItem:               null,    
                                        sac:     null,
                                        trid:    null,
                                        pim:     null,
                                        sc:      null,
                                        mst:     null,
                                        mic:     null,
                                        mat:     null,
                                        ui:  null, 
                                        sf:  null, 
                                        str: null,  
                                        elg:  null,
                                        tipo: null,
                                        sic:  null, 
                                        uhml:  null,     
                                        rs:   null,      
                                        b:     null,     
                                        trcnt:   null,   
                                        trar:   null,    
                                        pesoMedio:  null, 
                                        statusItem: null,
                                        statusItemOriginal:  null,  
                                        habilitado:  null,
                                        loteJaTestado: null,  
                                        tipoQualidade:  null,   
                                        classifQualidade: null,
                                        coloracao:    null,    
                                        loteAdicional:   null, 
                                        idVolume:      null,   
                                        tipoMic:   null,       
                                        destino:   null,                                                                 
                                        usuarioInclusao:  this.$store.state.usuarioSistema.codigo ,                                               
                                        dataInclusao:   null,                                                                  
                                        usuarioAlteracao:   this.$store.state.usuarioSistema.codigo ,
                                          

                              } 
        
                              this.aMovimentoItemDAO.push(objItem);     

                      }

                }   
 
                this.movimentoDAO =
                        {   
                                "id":null ,
                                "idfil": this.$store.state.usuarioSistema.idfil,
                                "notaFiscal": 'null'   ,
                                "fornecedor": this.pilha.fornecedorFinal,
                                "tipoMovimento": "SAIPL",
                                "tipoMP":  "ALG",
                                "dataBase":  null,
                                "dataEmissao":  null,  
                                "loteFiacao":  null,
                                "pesoMedio":  (this.apiConverteNumeroFormatado(this.nPesoMovimento)/this.totalFardosMistura).toFixed(2),
                                "pesoTotal":  this.apiConverteNumeroFormatado(this.nPesoMovimento), 
                                "numVolumes": this.totalFardosMistura,
                                "produtor":  this.pilha.produtor,
                                "procedencia":   this.pilha.procedenciaFinal, 
                                "qual1":  null, 
                                "qual2":  null,                                                             
                                "movimentoAutomatico":  "A", 
                                "movimentoPilha": "S",
                                "usuarioInclusao":  this.$store.state.usuarioSistema.codigo,
                                "usuarioAlteracao":  this.$store.state.usuarioSistema.codigo,
                                "dataInclusao":  null, 
                                "dataAlteracao":  null, 
                                "itemMovimentoDTO":this.aMovimentoItemDAO   ,
                                "idAutomatico":null,   
                        }    


               

                this.aMovimentoItemFinal.push(this.movimentoDAO); 

                //console.log('PPilha')
                //console.log(this.aMovimentoItemFinal)


                let url = `${process.env.VUE_APP_BASE_URL}/estoquemp/estoqueemmistura`; 

                await this.axios.post(
                    url,
                    JSON.stringify(this.aMovimentoItemFinal[0]),
                    this.apiTokenHeader({ "Content-Type": "application/json" })
                )
                .then(response => { 

                    this.resultado = response.data;  

                    //console.log('resultado Pilha')
                    //console.log(this.resultado)



                    if(this.resultado!=null) { 

                        let aItens =  this.resultado; 
                        if(aItens.length > 0)  {
                             fardosEmPilhaTmp = "Lotes em mistura: "
                        }
                        
                                
                        for (let i = 0; i < aItens.length; i++) {    
                          fardosEmPilhaTmp += "("  +  aItens[i].lote + "/" +  aItens[i].mistura + ")    "

                        } 
                        if(aItens.length > 0) {
                            this.fardosEmPilha = fardosEmPilhaTmp;
                        }

                    } else{
                      validado=true;
                    }
                    
                        
                })
                .catch(error => {
                    console.log("Erro: ", error.response.data); 
                    this.apiDisplayMensagem(error.response.data ) 
                });   

                return validado


        },

        
        async configuraPilha(){
 
               
              if  (!(this.pilha.pilha==null || this.pilha.pilha=='' || this.pilha.pilha=='0')){
                      
                    this.pilha.pilha = this.pilha.pilha.padStart(5, '0'); 
 

                    if(this.pilha.pilha == '00000'){
                      this.pilha.pilha = '';
                      this.pilha.numFardosPilha  = 0;
                    }  else{ 
                      
                         let url = `${process.env.VUE_APP_BASE_URL}/pilha/totalfardos/${this.$store.state.usuarioSistema.idfil}/${this.pilha.pilha} `; 

                        console.log(url)

                        await this.axios.get(url,this.apiTokenHeader()) 
                        .then(response => { 
                    
                            this.resultado = response.data;   
 
                            if(this.resultado != null && this.resultado>0){
                              this.pilha.numFardosPilha  =  this.resultado
                            }else{ 
                              this.pilha.numFardosPilha  = 0;
                            } 
                            return true;

                                
                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data); 
                            this.apiDisplayMensagem(error.response.data ) 
                            this.pilha.numFardosPilha  = 0;
                            return false;
                        });   


                    }
              }else{
                this.pilha.numFardosPilha  = 0;
              }


         },
         async pesquisaDados(){
             
                let validacaoOk = true;  

                this.acaoDesabilitado=true;
                
                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {                     
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;                   
                    validacaoOk = false;   
                    this.acaoDesabilitado=false;                  
                } else {    
                  
                         //console.log('BBBBBB')

                        if (this.pilha.descFio == null || this.pilha.descFio == ""  ){
                          this.apiDisplayMensagem('Informe um item válido');
                          this.haErros = true;                   
                          validacaoOk = false;   
                          this.acaoDesabilitado=false;                  
                        }else{

                              this.configuraCampos('A')
                              this.populaForm();
                        }
              
                }

                return validacaoOk;

         },         

         async populaForm(){


                  //this.resultado = "";                   
                  let obj;
                  let url;  
                  let objItem;  
                  let retornoPopForm = true;              
                 
                  obj={

                     idfil:this.$store.state.usuarioSistema.idfil,
                     item:this.pilha.item,	
                     produtor: this.pilha.produtor,              
                     lote:this.pilha.lote  
                  } 
                 
                  url = `${process.env.VUE_APP_BASE_URL}/estoquemp/pilha`     
            
                  this.msgProcessamento = "Processando" ;
                  this.apiProcessamento()  ;
               
                  await this.axios.post(
                      url,
                      JSON.stringify(obj),
                      this.apiTokenHeader({ "Content-Type": "application/json" })
                  )
                  .then(response => { 

                      this.resultado = response.data; 
                      
                      //console.log('Popula Form');
                      //console.log(this.resultado );


                      let aItens =  this.resultado; 
                               
                               for (let i = 0; i < aItens.length; i++) {   

                                    

                                   objItem = { 

                                             forn:     aItens[i].forn , 
                                             produt: aItens[i].produt,
                                             frd_reserv: aItens[i].frd_reserv,
                                             total_mist_util: aItens[i].total_mist_util,
                                             mistura: aItens[i].mistura,
                                             m4UM: aItens[i].m4UM,
                                             sac: aItens[i].sac,
                                             trid: aItens[i].trid,
                                             m4PESMED: aItens[i].m4PESMED,
                                             mat: aItens[i].mat,
                                             qtde: aItens[i].qtde,
                                             sic: aItens[i].sic,
                                             sc: aItens[i].sc,
                                             str: aItens[i].str,
                                             m4DESCF: aItens[i].m4DESCF,
                                             pim: aItens[i].pim,
                                             m4PROCED: aItens[i].m4PROCED,
                                             disponivel: aItens[i].disponivel,
                                             sf: aItens[i].sf,
                                             m4ID: aItens[i].m4ID,
                                             m4NF: aItens[i].m4NF,
                                             m4B: aItens[i].m4B,
                                             ui: aItens[i].ui,
                                             tipo: aItens[i].tipo,
                                             m4QUAL: aItens[i].m4QUAL,
                                             m4CORTEZ: aItens[i].m4CORTEZ,
                                             elg: aItens[i].elg,
                                             mst: aItens[i].mst,
                                             estoque: aItens[i].estoque,
                                             m4FORN: aItens[i].m4FORN,
                                             m4ITEM: aItens[i].m4ITEM,
                                             m4TAM: aItens[i].m4TAM,
                                             mic: aItens[i].mic,
                                             m4UHML: aItens[i].m4UHML,
                                             m4TRCNT: aItens[i].m4TRCNT,
                                             m4COLOR: aItens[i].m4COLOR,
                                             m4DEST: aItens[i].m4DEST,
                                             m4RS: aItens[i].m4RS,
                                             m4TRAR: aItens[i].m4TRAR,
                                             m4TPMIC: aItens[i].m4TPMIC,
                                             pi: aItens[i].pi, 
                                             cod_PROD: aItens[i].cod_PROD,
                                             lote: aItens[i].lote, 
                                             m7DESC: aItens[i].m7DESC,
                                             corLinha: "white"                                           
                                             


                                   } 
                                   this.aComposicao.push(objItem);
                                   
                              } 
                              //console.log(this.aComposicao);






                  })
                  .catch(error => {
                      this.msgProcessamento = ""
                      retornoPopForm = false
                      console.log("Erro: ", error.response.data); 
                      this.apiDisplayMensagem(error.response.data ) 
                  }); 

                  this.msgProcessamento = ""   
                  this.configuraCampos('A')  ;
                  retornoPopForm = true;
                  this.calculaTotais(this.aComposicao,0 )
                  return  retornoPopForm;   


         }, 

         async submitForm(){


                //let idMovto;
                //let vIdMovtoItem;
                //let vIdIt;     
                //let vIdMovim;   
                let objItemEnt;     
                //let vPesoMedio ; 
                let objItem
                //let url; 
                let movimentoDAOEnt;

                let zeraTipo;
                let primeiraVez = true;
                let paramTipo = 0;
                let tipoFinal;
                

              //  url = `${process.env.VUE_APP_BASE_URL}/movimento`;  
               
                //vIdMov = await this.buscaId();                   
               // idMovto = vIdMov 

               this.aMovimentoItemFinal = []; 
               this.aMovimentoItemDAO = [];   
               this.aMovimentoItemDAOEnt = []; 
          

               //console.log('this.aComposicao')
               //console.log(this.aComposicao)


                /// Movimento SAIPL
                zeraTipo = false;
                for (let i = 0; i < this.aComposicao.length; i++) {    

                      if(this.aComposicao[i].qtde > 0){  

                              if(primeiraVez==true){
                                paramTipo = this.aComposicao[i].tipo;
                                primeiraVez = false;
                              }else{

                                  if(paramTipo != this.aComposicao[i].tipo){   
                                    zeraTipo = true;
                                  }

                              }

                              console.log('paramTipo: ' + i.toString()) 
                              console.log(paramTipo)
                                                           
                              objItem = {  
                                                                    
                                        idfil:        this.$store.state.usuarioSistema.idfil,
                                        notaFiscal:   null    ,
                                        fornecedor:   null,
                                        item:        null, 
                                        produtor:     null,
                                        procedencia:  null, 
                                        lote:         null,    
                                        qualidade:    null,     
                                        tamanho:      null,   
                                        descFio:      null,    
                                        observacao:          null,   
                                        unidadeMedida:       null,   
                                        pilha:               null,    
                                        idAutomatico:        null,    
                                        movimentoAutomatico:  null,   
                                        movimentoDePilha:     null,   
                                        quantidade:           this.aComposicao[i].qtde,    
                                        peso:                 null,   
                                        vlUnitario:           null,   
                                        idMovimento:          this.aComposicao[i].m4ID,   
                                        idItem:               null,    
                                        sac:     null,
                                        trid:    null,
                                        pim:     null,
                                        sc:      null,
                                        mst:     null,
                                        mic:     null,
                                        mat:     null,
                                        ui:  null, 
                                        sf:  null, 
                                        str: null,  
                                        elg:  null,
                                        tipo: null,
                                        sic:  null, 
                                        uhml:  null,     
                                        rs:   null,      
                                        b:     null,     
                                        trcnt:   null,   
                                        trar:   null,    
                                        pesoMedio:  null, 
                                        statusItem: null,
                                        statusItemOriginal:  null,  
                                        habilitado:  null,
                                        loteJaTestado: null,  
                                        tipoQualidade:  null,   
                                        classifQualidade: null,
                                        coloracao:    null,    
                                        loteAdicional:   null, 
                                        idVolume:      null,   
                                        tipoMic:   null,       
                                        destino:   null,                                                                 
                                        usuarioInclusao:  this.$store.state.usuarioSistema.codigo ,                                               
                                        dataInclusao:   null,                                                                  
                                        usuarioAlteracao:   this.$store.state.usuarioSistema.codigo ,
                                          

                              } 
        
                              this.aMovimentoItemDAO.push(objItem);     

                      }

                }   
 
                this.movimentoDAO =
                        {   
                                "id":null ,
                                "idfil": this.$store.state.usuarioSistema.idfil,
                                "notaFiscal": null   ,
                                "fornecedor": this.pilha.fornecedorFinal,
                                "tipoMovimento": "SAIPL",
                                "tipoMP":  "ALG",
                                "dataBase":  null,
                                "dataEmissao":  null,  
                                "loteFiacao":  null,
                                "pesoMedio":  (this.apiConverteNumeroFormatado(this.nPesoMovimento)/this.totalFardosMistura).toFixed(2),
                                "pesoTotal":  this.apiConverteNumeroFormatado(this.nPesoMovimento), 
                                "numVolumes": this.totalFardosMistura,
                                "produtor":  this.pilha.produtor,
                                "procedencia":   this.pilha.procedenciaFinal, 
                                "qual1":  null, 
                                "qual2":  null,                                                             
                                "movimentoAutomatico":  "A", 
                                "movimentoPilha": "S",
                                "usuarioInclusao":  this.$store.state.usuarioSistema.codigo,
                                "usuarioAlteracao":  this.$store.state.usuarioSistema.codigo,
                                "dataInclusao":  null, 
                                "dataAlteracao":  null, 
                                "itemMovimentoDTO":this.aMovimentoItemDAO   ,
                                "idAutomatico":null,   
                        }    


               

                this.aMovimentoItemFinal.push(this.movimentoDAO); 



                if(zeraTipo == true){
                    tipoFinal = null;
                }else{
                    tipoFinal = this.aProdutorSelecionado[0].TIPO;
                    if(tipoFinal==0){
                        tipoFinal = null; 
                    }
                }
  
                objItemEnt = {  
                                                        
                      idfil:      this.$store.state.usuarioSistema.idfil, 
                      fornecedor:   this.pilha.fornecedorFinal,
                      item: parseInt(this.pilha.item), 
                      produtor:    this.pilha.produtor,
                      procedencia:  this.pilha.procedenciaFinal,
                      lote:         this.pilha.novoLote,                                                                  
                      tamanho:      this.pilha.tamanho,  
                      descFio:      this.pilha.descFio,   
                      pilha:               this.pilha.pilha, 
                      movimentoAutomatico:  "A", 
                      movimentoDePilha:     "S",
                      quantidade:           this.totalFardosMistura,  
                      peso:                 this.apiConverteNumeroFormatado(this.nPesoMovimento),    
                      sac:   this.aProdutorSelecionado[0].SAC, 
                      trid:  this.aProdutorSelecionado[0].TRID, 
                      pim:   this.aProdutorSelecionado[0].PIM, 
                      sc:    this.aProdutorSelecionado[0].SC, 
                     
                      mst:   this.aProdutorSelecionado[0].MST, 
                      mic:   this.aProdutorSelecionado[0].MIC, 
                      mat:   this.aProdutorSelecionado[0].MAT, 
                      ui:    this.aProdutorSelecionado[0].UI, 
                      sf:    this.aProdutorSelecionado[0].SF, 
                      str:   this.aProdutorSelecionado[0].STR, 
                      elg:   this.aProdutorSelecionado[0].ELG, 
                      tipo:  tipoFinal, 
                      sic:   this.aProdutorSelecionado[0].SCI,  
                      uhml:  this.aProdutorSelecionado[0].UHML, 
                      rs:    this.aProdutorSelecionado[0].RS, 
                      b:     this.aProdutorSelecionado[0].B, 
                      trcnt: this.aProdutorSelecionado[0].TrCnt,
                      trar:  this.aProdutorSelecionado[0].TrAr, 
                      
                    
                      usuarioInclusao:  this.$store.state.usuarioSistema.codigo,
                      usuarioAlteracao: this.$store.state.usuarioSistema.codigo,
                                                                  

              }         
              
              this.aMovimentoItemDAOEnt.push(objItemEnt);  

              movimentoDAOEnt = 
                
                {   
                                "id":null ,
                                "idfil": this.$store.state.usuarioSistema.idfil,
                                "notaFiscal": null   ,
                                "fornecedor": this.pilha.fornecedorFinal,
                                "tipoMovimento": "ENTPL",
                                "tipoMP":  "ALG",
                                "dataBase":  null,
                                "dataEmissao":  null,  
                                "loteFiacao":  null,
                                "pesoMedio":  (this.apiConverteNumeroFormatado(this.nPesoMovimento)/this.totalFardosMistura).toFixed(2),
                                "pesoTotal":  this.apiConverteNumeroFormatado(this.nPesoMovimento), 
                                "numVolumes": this.totalFardosMistura,
                                "produtor":  this.pilha.produtor,
                                "procedencia":  this.pilha.procedenciaFinal,
                                "qual1":  null, 
                                "qual2":  null,                                                             
                                "movimentoAutomatico":  "A", 
                                "movimentoPilha": "S",
                                "usuarioInclusao":  this.$store.state.usuarioSistema.codigo,
                                "usuarioAlteracao":  this.$store.state.usuarioSistema.codigo,
                                "dataInclusao":  null, 
                                "dataAlteracao":  null, 
                                "itemMovimentoDTO":this.aMovimentoItemDAOEnt   ,
                                "idAutomatico":null,   
                        }   


                this.aMovimentoItemFinal.push(movimentoDAOEnt);   
                 
 
                //console.log('this.aMovimentoItemFinal22');
                //console.log(this.aMovimentoItemFinal);   

                let url = `${process.env.VUE_APP_BASE_URL}/movimento/pilha`;

                


                await this.axios.post(
                    url,
                    JSON.stringify(this.aMovimentoItemFinal),
                    this.apiTokenHeader({ "Content-Type": "application/json" })
                )
                .then(response => { 

                    this.resultado = response.data;  
                    
                    //this.mistura.numeroMistura = this.resultado;
                     
                    this.apiDisplayMensagemSucesso('Pilha formada com sucesso.' )   
                    this.simNaoRetorno = 'S' 
                    this.resetarForm()   ;
                        
                })
                .catch(error => {
                    console.log("Erro: ", error.response.data); 
                    this.apiDisplayMensagem(error.response.data ) 
                });   







         },

         resetarForm(){
              if(this.simNaoRetorno == 'S'){

                  this.pilha = Object.assign({},this.pilhaInicial); 
                  this.configuraCampos('I')
                  this.totalFardosMistura=0;
                  this.totalFardosEstoque=0;
                  this.nPesoMovimento =0;
                  this.aComposicao=[];
                  this.aResumoMistura=[];
                  this.aResumoProdutorTotalizador=[];
                  this.aProdutorSelecionado=[];
                  this.aResumoProdutor=[];
                  this.aResumoQualidade=[];
                  this.aEstoqueProdutor=[];
                  this.aEstoqueQualidade=[];


                  this.aEstoqueProdutorTotalizador=[];
                  this.aEstoqueQualidadeTotalizador=[]; 

                  this.aMisturaFinal=[];
                  this.aMisturaItemFinal=[];   
                  this.acaoDesabilitado=false

                  this.tamanhoItens=[];    
                  this.fornecedorItens=[]; 
                  this.procedenciaItens=[];

                  this.msgProcessamento = "";
                  

              }

         },

        setaPesquisa(e) {   

            if (e.tipo == "item") {
                this.pilha.item = e.obj.codigo;
                this.pilha.descFio = e.obj.material.descricao.substring(0, 40);
                
            }   
            
          },    



        configuraCampos(oper ){  
             
              if(oper=='I'){
                   this.produtorDesabilitado=false;
                   this.pilhaDesabilitado=false;
                   this.itemDesabilitado=false;
                   this.loteDesabilitado=false; 
                   this.destinoDesabilitado=false;
                   this.unirPilhaDesabilitado = false;

              } else if(oper=='A'){
                   this.produtorDesabilitado=true;
                   this.pilhaDesabilitado=true;
                   this.itemDesabilitado=true;
                   this.loteDesabilitado=true;
                   this.destinoDesabilitado=true;

              }

          },
 
     
   
          navegarParaLogin(){this.$router.push({name:'login'  })}   ,

          scrollToTop() {
              window.scrollTo(0, 0);
            },   
            
            confirmaAcao(resposta) {

                    this.simNaoRetorno = resposta

                    //console.log('confirmaAcao');
                    //console.log(this.simNaoRetorno ); 

                    if(resposta == 'O'){ 
                        console.log(this.simNaoRetorno ); 
                    } 

                    if(this.simNaoRetorno == 'S') { 
                         
                        if(this.acao == 'excluir'){     
                            this.exclusao();
                        }else if(this.acao == 'cancelaEdicao')
                        {
                            this.resetarForm(); 
                        } else if(this.acao == 'fardosEmPilha')
                        {
                            this.submitForm(); 
                        }  else if(this.acao == 'confirmaFardosEmPilha')
                        {
                            this.submitForm(); 
                        } 
 
                    } else if(this.acao == 'confirmaFardosEmPilha' || this.acao == 'fardosEmPilha'){ 
                          this.simNaoRetorno = 'S';
                          this.resetarForm(); 
                    }
            },     
 
     } , 
      
     async created(){    

            this.msgProcessamento = '';
            this.scrollToTop();
            this.populaProdutor(); 
      }
  
      ,
    mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
  
       this.mistura.numeroMistura = '';
       this.titulo= this.tituloProps;
       this.labelPesquisarComposicao=this.labelPesquisarComposicaoProps;
       this.acaoSelecionada = this.acaoSelecionadaProps; 

       this.acaoDesabilitado=false;


       if(this.acaoSelecionada =='I') {
           this.operMist = 'I'
           this.oper='I'
           
       }else{
           this.operMist = 'A'
           //this.acaoDesabilitado=true; 
         

       }     

       if(this.$store.state.tipoDispositivo == 'mobile'  ){
             this.marginBottomNovaPilha = "90px"
             this.heightNovaPilha = "400px"
       } else if (this.$store.state.tipoDispositivo == 'tablet' ){
             this.marginBottomNovaPilha = "40px"
             this.heightNovaPilha = "200px"
       } else if (this.$store.state.tipoDispositivo == 'desktop' ){
             this.marginBottomNovaPilha = "30px"
             this.heightNovaPilha = "100px"
       }

       if(  this.$store.state.tipoDispositivo == 'mobile' ){
             this.labelNovo = "ova Oper"
       } else{
            this.labelNovo = "ova Operação"
       }           
        

       this.tamTela = window.innerWidth;



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
   
    th {
      position: sticky;
      top: 0;
      background: #003366;
      color:white;
       
    }

    .tabGrid{
       background-color:cadetblue;
        color:white;
        max-width: 6%;
         
    }

    .tabGridCol{
      
        
        color:black;
        max-width: 6%;
         
    }


    .tabGridColTotais{
      
      background-color: black;
      color:white;
      max-width: 6%;
       
  }
 
   
  
  </style>
  
    