<template>   

<v-form  ref="formulario"   style=" background-color:white;height:100% "  >    

   <!-- <v-container style="width:100%;background-color:white"  >--> 
   
           <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
               <div  style="width:100%"  > 
                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   
                        
                        <div    class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p class="text-white text-end mt-3 pe-5" style="font-size: 18px"><b>Localizar Pilha</b></p>
                                                         
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

                                    <span class="my-auto">Pesquisar</span>  

                                </v-btn>  
                        
                      
                        </div>              

                   </div> 

            

   
                        <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >    
                        
                             <div    class="espacoEntreComponentes">   

                                    <v-autocomplete
                                        label="Produtor"
                                        :items="produtorItens"                              
                                        v-model.trim="this.estoque.produtor" 
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 270px; " 
                                        bg-color="white"   
                                        density="compact"
                                       
                                        :disabled="this.produtorDesabilitado"
                                    ></v-autocomplete> 

                              </div>     
 

      
  
                                <div   class="espacoEntreComponentes"   >   
                                        
                                    <div class="input-group">   
                                        
                                        <div class="d-flex  justify-content-start">
                                            
                                            <v-text-field
                                             
                                                id="item"
                                                label="Item"
                                                ref="item"  
                                                maxlength="7"  
                                                style=" width: 200px; "
                                                variant="outlined"
                                                bg-color="white"
                                                v-model.trim="this.estoque.item"
                                                type="number"
                                                inputmode="numeric"
                                                
                                                density="compact"
                                                :disabled="this.itemDesabilitado"
                                                @blur="apiPesquisaParam('itemPilha', this.estoque.item  , this.estoque)"
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
                                                v-model.trim="this.estoque.descFio"
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
                                          v-model.trim="this.estoque.lote"
                                          maxlength="5"                                         
                                          style=" width: 200px; "
                                          variant="outlined"   
                                          density="compact"  
                                          :disabled="this.loteDesabilitado"
  
                                      ></v-text-field>    
                                </div> 

                                <div   class="espacoEntreComponentes">    
                                                    
                                          <v-text-field  
                                              id="pilha"
                                              label="Pilha"
                                              ref="pilha"  
                                              v-model.trim="this.estoque.pilha"
                                              maxlength="5"                                         
                                              style=" width: 200px; "
                                              variant="outlined" 
                                              type="number"
                                              inputmode="numeric" 
                                              density="compact" 
                                              
                                              @blur="configuraPilha() "
                                              :disabled="this.pilhaDesabilitado"
    
                                          ></v-text-field>                                    
                                                       
                                </div>   


                                <div    class="espacoEntreComponentes">   
                                      <v-autocomplete
                                          
                                          label="Procedencia"
                                          :items="procedenciaItens" 
                                          v-model.trim="this.estoque.procedencia"   
                                          :disabled="this.procedenciaDesabilitado"               
                                         
                                          item-title="descricao" 
                                          item-value="codigo"
                                          variant="outlined"
                                          style="width: 270px; " 
                                          bg-color="white"     
                                          
                                          density="compact" 
                                          
                                      ></v-autocomplete> 

                                 </div>   


                                 <div    class="espacoEntreComponentes"  >    


                                            <v-autocomplete

                                                  label="Tamanho"
                                                  :items="tamanhoItens"  
                                                  v-model.trim="this.estoque.tamanho" 
                                                  item-title="nome" 
                                                  item-value="id"
                                                  variant="outlined"
                                                  style=" width: 200px; "
                                                  bg-color="white" 
                                                  :disabled="this.tamanhoDesabilitado"     
                                                  
                                                  density="compact"

                                          ></v-autocomplete>  


                                </div>     


                                <div    class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'"  >   

                                        <v-autocomplete
                                            
                                            label="Qualid."
                                            :items="qualidadeItens" 
                                            v-model.trim="this.estoque.qual1" 
                                            :disabled="this.qual1Desabilitado" 
                                            item-title="descricao" 
                                            item-value="codigo"
                                            variant="outlined"
                                            style="width: 200px; " 
                                            bg-color="white" 
                                            density="compact" 
                                            
                                        ></v-autocomplete> 

                                </div>   

                                <div    class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'"  >   

                                        <v-autocomplete
                                            
                                            label="Classfic"
                                            :items="classificacaoItens" 
                                            v-model.trim="this.estoque.qual2" 
                                            :disabled="this.qual2Desabilitado"    
                                            item-title="descricao" 
                                            item-value="codigo"
                                            variant="outlined"
                                            style="width: 200px; " 
                                            bg-color="white" 
                                            density="compact" 
                                            
                                        ></v-autocomplete> 

                                </div>      


                                <div   class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'">   
                                          
                                        <v-autocomplete 
                                            label="Cor"
                                            :items="coloracao"  
                                            id="cor"    
                                            item-title="codigo" 
                                            item-value="codigo"
                                            variant="outlined"
                                            style="width: 200px; " 
                                            bg-color="white"  
                                            density="compact"
                                            v-model.trim="this.estoque.coloracao" 
                                            :disabled="this.coloracaoDesabilitado"                                              

                                        ></v-autocomplete>  
                                    
                                </div>          

                                
                                
                                <div   class="espacoEntreComponentes">   
                                   <!-- <label style='font-size:16px'>Fornecedor</label>-->
                                    <div class="input-group">  
                                        
                                            <div class="d-flex  justify-content-start">
                                                
                                              <v-text-field
                                                    v-model.trim="this.estoque.fornecedor" 
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
                                                    @blur="apiPesquisaParam('fornecedor', this.estoque.fornecedor, this.estoque)"
                                                    :disabled="this.fornecedorDesabilitado" 
                                                    
                                                ></v-text-field>   
                                                    
                                                <v-btn   data-bs-toggle="modal" 
                                                    data-bs-target="#modalPesquisaFornecedor"  
                                                    :disabled="this.fornecedorDesabilitado" 
                                                    tabindex="-1"  @click="apiFlushPesquisa"  
                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232);; " 
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
                                                    v-model.trim="this.nomeFornecedor"
                                                    id="nomeFornecedor"   
                                                    disabled 
                                                    class="limitadorMedia"                                                                                                 
                                                    style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                    density="compact"
                                                ></v-text-field>   
                                            </div>     
                                    </div>

                                </div>   
                                
                                <div    class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'">  

                                      <v-autocomplete

                                          label="Destino"
                                          :items="destinoItens"       
                                          v-model.trim="this.estoque.destino" 
                                          item-title="descricao" 
                                          item-value="codigo"
                                          variant="outlined"
                                          style=" width: 200px; "
                                          bg-color="white"      
                                     
                                          density="compact"
                                          :disabled="this.destinoDesabilitado" 
                                          
                                      ></v-autocomplete> 

                                </div>                                  



 
                        </div>
                        <!--

                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados
                          Final primeira Linha de dados


                        -->


            

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

                              <span class="my-auto">Pesquisar</span>   

                          </v-btn>  

                        </div>    

                    </div>   
 
               
                    <!-- /// Resumo Pilha -->  
                    <!-- /// Resumo Pilha -->
                    <!-- /// Resumo Pilha -->
                    <!-- /// Resumo Pilha -->
 

                     

                    <div style="height:  100px; background-color:white"  v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "  >

                    </div>    



 
                     
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->  
                    <!-- ///Corpo da Pilha -->                     
 
                     <div class="container-fluid"  style=" height:800px;  overflow-y: scroll; overflow-x: scroll;">
                            <table class="table table-sm  tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                    
                                      <th class="col-3 text-start" v-if="this.$store.state.usuarioSistema.idfil != '05'">FORNECEDOR</th>   
                                      <th class="col-3 text-start">PRODUTOR</th>     
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >DV/COR/ TP MIC</th>  
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >QUAL</th>  
                                      <th class="col-2 text-start"  >PILHA</th>  
                                      <th class="col-2 text-start"  >NOVA PILHA</th>  




                                      <th class="col-2 text-start" >LOTE</th>  
                                      <th class="col-2 text-start" >TAM</th>  
                                      <th class="col-2 text-start"  >ESTOQUE</th>  
                                      
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
 
                                      <td class="col-1 text-start"   :style="{backgroundColor: i.corLinha} ">
                                        {{ i.pi}}
                                      </td>   

                                      <td  class="col-2  "   >    
 
                                          <input type="number"
                                              v-model.trim="i.novaPilha" 
                                              maxlength="5"                                            
                                              style=" width: 100px;height: 30px;border:solid 1px ;text-align: center;font-size:16px;border-radius:5px 5px 5px 5px; "   
                                              @blur="atualizaPilha( i )"
                                             
                                          >         

                                      </td>                                         

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " >
                                        {{ i.lote}}
                                      </td>     

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4TAM}}
                                      </td>   

                                      <td class="text-center"  :style="{backgroundColor: i.corLinha} " style="color:blue">
                                        {{ i.estoque}}
                                      </td>  

                                     
 <!--
                                      <td  class="col-2  "   >    
 
                                          <input type="number"
                                              v-model.trim="i.qtde" 
                                              maxlength="4"                                            
                                              style=" width: 100px;height: 30px;border:solid 1px ;text-align: center;font-size:16px;border-radius:5px 5px 5px 5px; "   
                                              @change="calculaPilha(this.aComposicao,i )"
                                              @focus="calculaPilha(this.aComposicao,i )" 
                                          >         

                                      </td>      
-->
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

                              <div class="col-3 div_rodape d-flex justify-content-end"    > 
                                <v-btn color="secondary" class="botao_rodape" style="min-width: 70px; " v-if="this.acaoDesabilitado==true "  accesskey="l"   @click="exibeModal('localizar','Confirma localização?',['S','N'],'aviso'  )"><u>L</u>ocalizar</v-btn>                                     
                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>{{this.labelNovo}}</v-btn>                                   

                              </div>  



                         
  
                          </div>
                    
                      </div>   

                            
              </div>




    </v-form>
    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
    <PesquisaFornecedor @setaPesquisa="setaPesquisa($event)"></PesquisaFornecedor>
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
    import PesquisaFornecedor from '@/requires/PesquisaFornecedor'
  
    export default {
      name: 'PilhaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile, SimNao,PesquisaItem,PesquisaFornecedor},  
       
      data: () => ({

        resultPesquisaCRUD : [] , 

        produtorItens: [],
        produtorItensTemp:{ 
            codigo:'',
            descricao:'',
            chave:'' 
        }, 

        tamanhoItens:[
                'G',
                'P'

        ],

        qualidadeItens:[
            'A',
            'B',
            'C',
            'D',
            'E',
            'F'                
        ],            
    
        classificacaoItens:[
            '   ',
            '1/2',
            '1/4',
            '3/4'

        ],        
         
 

        coloracao: [],
        coloracaoTemp:{ 
            codigo:'',
            descricao:''
        },  
        
        procedenciaItens: [],
            procedenciaItensTemp:{ 
                codigo:'',
                descricao:''
          },           
   

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
       

        estoqueInicial:{
          produtor:'',
          estoque:'',
          item:'',
          descFio:'',
          lote:'',
          destino:'',
          fornecedor:'',
          
          tamanho:'',
          procedencia:'',
          qual1:'' ,
          qual2:'',
          coloracao:'' 

        },

        estoque: {

          produtor:'',
          estoque:'',
          item:'',
          descFio:'',
          lote:'',
          destino:'',
          fornecedor:'', 
          tamanho:'',
          procedencia:'',
          qual1:'' ,
          qual2:'',
          coloracao:''  

        },      
        nomeFornecedor:'',  

        validacao:'',

        aResult:[],
        
        produtorDesabilitado:false,
        estoqueDesabilitado:false,
        itemDesabilitado:false,  
        loteDesabilitado:false,  
        destinoDesabilitado:false,
        qual1Desabilitado:false,
        qual2Desabilitado:false,
        coloracaoDesabilitado:false,
        pilhaDesabilitado:false,
        fornecedorDesabilitado:false,
        procedenciaDesabilitado:false,
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
        destino:'' 
        
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
        aEstoque:[],
     


        
         
      }),
      computed: mapState(['usuarioSistema']),
      methods: {
   
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
 
        } ,  
        
        async configuraPilha(){
 
               
              if  (!(this.estoque.pilha==null || this.estoque.pilha=='' || this.estoque.pilha=='0')){
                      
                    this.estoque.pilha = this.estoque.pilha.padStart(5, '0'); 
 

                    if(this.estoque.pilha == '00000'){
                      this.estoque.pilha = ''; 
                    } 
              } 


         },

         async atualizaPilha(elemento){
 
            let novaPilha=0;   
            if  (!(elemento.novaPilha=='' )){
                  
                  if(typeof elemento.novaPilha  === "string" ){ 

                        if(elemento.novaPilha.length()>0) {
                          novaPilha   = elemento.novaPilha ;
                          novaPilha   =  novaPilha.padStart(5, '0');  
                          elemento.novaPilha = novaPilha;

                          if(elemento.novaPilha == '00000'){
                              elemento.novaPilha = ''; 
                            } 
                        }else{
                          elemento.novaPilha="";

                        }


                  } else{

                      if(elemento.novaPilha >0) {
                          novaPilha   = elemento.novaPilha.toString() ;
                          novaPilha   =  novaPilha.padStart(5, '0');  
                          elemento.novaPilha = novaPilha;

                          if(elemento.novaPilha == '00000'){
                              elemento.novaPilha = ''; 
                            } 
                        }else{
                          elemento.novaPilha="";

                        }

                  }
              


            } 


          },         

          validaDadosNovaPilha(){

           
            let umElementoSelecionado=0; 

              for (let i = 0; i < this.aComposicao.length; i++) {    
                  if(this.aComposicao[i].novaPilha != ''){  
                         umElementoSelecionado++;
                  }
               }

               
                //console.log('umElementoSelecionado');
                //console.log(umElementoSelecionado);
               
               if(umElementoSelecionado==0){

               
                    this.msgProcessamento = "" ;   
                    this.apiDisplayMensagem('Nenhum lote selecionado.');
                    this.haErros = true;     
                    
                    return false;
                     

               }
             

               return true;

 

          },

          async submitForm(){

            let objEstoque;
            this.aEstoque=[];

            this.msgProcessamento = "Processando" ;
            this.apiProcessamento()  ;

            if(this.validaDadosNovaPilha()==true){

                  for (let i = 0; i < this.aComposicao.length; i++) {    

                      if(this.aComposicao[i].novaPilha != ''){  

                          objEstoque = {
                              idfil:this.$store.state.usuarioSistema.idfil,  
                              id:this.aComposicao[i].m4ID,  	  
                              pilha:this.aComposicao[i].novaPilha 
                          }  

                          this.aEstoque.push(objEstoque);
                      
                      }
                  }  

                  //console.log('objEstoque');
                  //console.log(this.aEstoque);


                  let url = `${process.env.VUE_APP_BASE_URL}/estoquemp/atualizapilha`      

                  await this.axios.post(
                      url,
                      JSON.stringify(this.aEstoque),
                      this.apiTokenHeader({ "Content-Type": "application/json" })
                  )
                  .then(response => { 

                      this.resultado = response.data;  

                      if(this.resultado){
                          this.msgProcessamento = ""  
                          this.apiDisplayMensagemSucesso('Lotes localizados com sucesso.');
                          this.simNaoRetorno="S";
                          this.resetarForm();   
                      } 
                      

                  })
                  .catch(error => {
                      this.msgProcessamento = "" 
                      console.log("Erro: ", error.response.data); 
                      this.apiDisplayMensagem(error.response.data ) 
                  }); 

                  this.msgProcessamento = ""  

            } 


          },





         async pesquisaDados(){ 
          
                let validacaoOk = false;   
 
                this.acaoDesabilitado=true;  
                this.configuraCampos('A')
                this.populaForm();  
  
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
                     item:this.estoque.item,	
                     produtor: this.estoque.produtor,              
                     lote:this.estoque.lote, 
                     fornecedor:this.estoque.fornecedor,  
                     procedencia:this.estoque.procedencia, 
                     coloracao:this.estoque.coloracao, 
                     destino:this.estoque.destino, 
                     tipoQualidade:this.estoque.qual1,  
                     classifQualidade:this.estoque.qual2,  
                     tamanho:this.estoque.tamanho, 
                     pilha:this.estoque.pilha, 

                  }   


                  //console.log('objPesquisa')
                  //console.log(obj)
                 
                  url = `${process.env.VUE_APP_BASE_URL}/estoquemp/estoque`     
            
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
                                             corLinha: "white",
                                             novaPilha:'',

                                             


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

         resetarForm(){
              if(this.simNaoRetorno == 'S'){

                  this.estoque = Object.assign({},this.estoqueInicial); 
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

                  //this.tamanhoItens=[];    
                  this.fornecedorItens=[]; 
                  //this.procedenciaItens=[];

                  this.msgProcessamento = "";
                  this.nomeFornecedor="";
                  

              }

         },

        setaPesquisa(e) {   

            if (e.tipo == "item") {
                this.estoque.item = e.obj.codigo;
                this.estoque.descFio = e.obj.material.descricao.substring(0, 40);
                
            }   

            if (e.tipo == "fornecedor") {
                this.estoque.fornecedor = e.obj.codigo;
                this.nomeFornecedor = e.obj.descricao;    
            }        
            
          },    



        configuraCampos(oper ){  
             
              if(oper=='I'){
                   this.produtorDesabilitado=false;
                   this.estoqueDesabilitado=false;
                   this.itemDesabilitado=false;
                   this.loteDesabilitado=false; 
                   this.destinoDesabilitado=false;  
                   this.qual1Desabilitado=false;
                   this.qual2Desabilitado=false;
                   this.coloracaoDesabilitado=false;
                   this.pilhaDesabilitado=false;
                   this.fornecedorDesabilitado=false;
                   this.procedenciaDesabilitado=false;                   
                   this.tamanhoDesabilitado=false; 
                

              } else if(oper=='A'){

                   this.produtorDesabilitado=true;
                   this.estoqueDesabilitado=true;
                   this.itemDesabilitado=true;
                   this.loteDesabilitado=true;
                   this.destinoDesabilitado=true;
                   this.qual1Desabilitado=true;
                   this.qual2Desabilitado=true;
                   this.coloracaoDesabilitado=true;
                   this.pilhaDesabilitado=true;
                   this.fornecedorDesabilitado=true;
                   this.procedenciaDesabilitado=true;     
                   this.tamanhoDesabilitado=true;                   

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
                         
                        if(this.acao == 'cancelaEdicao')
                        {
                          this.resetarForm(); 
                        }else if(this.acao == 'localizar'){
                          this.submitForm();

                        }
                        
 
                    }  
            },     
 
     } , 
      
     async created(){    

            this.msgProcessamento = '';
            this.scrollToTop();
            
      }
  
      ,
    mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
   
       this.acaoDesabilitado=false;
 

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
             this.labelNovo = "ova Cons"
       } else{
            this.labelNovo = "ova Consulta"
       }           
       this.populaProdutor(); 
       this.populaProcedencia();
       this.populaColoracao();



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
  
    