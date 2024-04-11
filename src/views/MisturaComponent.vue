<template>   

<v-form  ref="formulario"  @submit.stop.prevent="submitForm" style=" background-color:white;height:100% "  >    

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
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Mistura Padrão</b></p>                               
                            </div> 
                        </div>    


                        <div class=" d-flex justify-content-end"   style=" height:45px;margin-right: 10px; "  > 


                           <div   class="espacoEntreComponentes">    
                                        
                                <v-text-field
                                    v-model.trim="this.mistura.statusMistura" 
                                    id="statusMistura"
                                    label="Status" 
                                    ref="statusMistura"  
                                    maxlength="10"                                            
                                    style=" width: 150px; " 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact" 
                                    disabled
                                ></v-text-field>                                    
                                        
                              
                           </div>  
                           
                           
                           
                                <v-btn @click="this.pesquisaDados()"  style="height:47px;width:280px;margin-top: 15px;background-color:rgb(240, 237, 232);"
                                :disabled="acaoDesabilitado"
                                v-if="this.$store.state.tipoDispositivo == 'desktop'"  >

                                    <v-icon left                                               
                                        color="primary"
                                        icon="mdi-plus-box-outline"
                                        size="45"
                                    ></v-icon> 

                                    <span class="my-auto">Informar Composição</span>  

                                </v-btn>  
                        
                      
                        </div>              

                   </div> 
                   
   
                   <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >   
                   

                        <div    class="espacoEntreComponentes"    >  

                            <v-autocomplete

                                label="Operacao"
                                :items="operMistItens"      
                                v-model.trim="this.operMist"  
                                item-title="descricao" 
                                item-value="codigo"
                                variant="outlined"
                                style=" width: 150px; "
                                bg-color="white"   
                                density="compact"
                                @blur="trocaOperMist()"
                                :disabled="operMistDesabilitado"
                                

                            ></v-autocomplete> 

                        </div>    
 
                        <div   class="espacoEntreComponentes" v-if = "this.operMist=='I'  ">    
                                        
                              <v-text-field

                                  v-model.trim="this.mistura.numeroMistura" 
                                  id="numeroMistura"
                                  label="Mistura" 
                                  ref="numeroMistura"  
                                  maxlength="10"                                            
                                  style=" width: 180px; " 
                                  variant="outlined"
                                  bg-color="white"                                           
                                  type="number"  
                                  inputmode="numeric"   
                                  density="compact"
                                  :disabled="numeroMisturaDesabilitado"   
                                   
                                  @blur="preparaMistura()"
                                  
                                  
                              ></v-text-field>                                    
                                     
                           
                        </div> 
 
                        <div    class="espacoEntreComponentes" v-if = "this.operMist=='A'" >  
                                 
                                 <v-autocomplete
                                     
                                     :items="misturasAbertas"    
                                     label="Mistura"          
                                     v-model="this.mistura.numeroMistura"    
                                     item-title="codigo" 
                                     item-value="codigo"
                                     variant="outlined"
                                     style="width: 180px;"                                       
                                     :rules="[campoRequerido]" 
                                     density="compact"
                                     @blur="preparaMistura()"
                                     :disabled="numeroMisturaDesabilitado"  
                               
                                     
                                 ></v-autocomplete> 

                             </div>  




                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field
                                    
                                  v-model.trim="this.mistura.quantidade" 
                                  class="text-end"
                                  id="quantidade"
                                  label="Quantidade" 
                                  ref="quantidade"   
                                  style=" width: 150px; " 
                                  variant="outlined"
                                  bg-color="white"
                                  type="number"    
                                  density="compact" 
                                  inputmode="numeric"  
                                  :rules="[campoRequerido]"  
                                  :disabled="quantidadeDesabilitado"  
                                  @change="calculaCor(aComposicao)"
  
                              ></v-text-field>                                    
                        </div>                
                        
                        

                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field
                                    
                                  v-model.trim="this.mistura.totalMisturasUtilizadas" 
                                  class="text-end"
                                  id="totalMisturasUtilizadas"
                                  label="Utilizadas" 
                                  ref="totalMisturasUtilizadas"   
                                  style=" width: 150px; " 
                                  variant="outlined"
                                  bg-color="white"
                                  type="number"    
                                  density="compact" 
                                  inputmode="numeric"  
                                  disabled
  
                              ></v-text-field>                                    
                        </div>  
 

                        <div   class="espacoEntreComponentes">     

                                <v-text-field
                                    v-model.trim="this.mistura.dataInicial" 
                                    id="dataInicial"
                                    label="Data Inicial" 
                                    ref="dataInicial"  
                                    style=" width: 150px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    :disabled="dataInicialDesabilitado"  
                                    
                                ></v-text-field>      
                    
                        </div>           

                        <div   class="espacoEntreComponentes">    
                                    
                             
                                
                                <v-text-field
                                    v-model.trim="this.mistura.dataFinal" 
                                    id="dataFinal"
                                    label="Data Final" 
                                    ref="dataFinal"  
                                    style=" width: 150px; " 
                                    variant="outlined"
                                    bg-color="white" 
                                    type="date" 
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    :disabled="dataFinalDesabilitado"  
                                    
                                ></v-text-field>                                    
                            
                    
                        </div>         
                        
                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field
                                    
                                  v-model.trim="this.mistura.totalFardos" 
                                  class="text-end"
                                  id="totalFardos"
                                  label="Total de Fardos" 
                                  ref="totalFardos"   
                                  style=" width: 150px; " 
                                  variant="outlined"
                                  bg-color="white"
                                  type="number"  
                                  :rules="[campoRequerido]"      
                                  density="compact" 
                                  inputmode="numeric" 
                                  :disabled="totalFardosDesabilitado"    
  
                              ></v-text-field>                                    
                        </div>  

                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field
                                  v-model.trim="this.mistura.loteFiacao" 
                                  id="loteFiacao"
                                  label="Lote Fiação" 
                                  ref="loteFiacao"  
                                  maxlength="10"                                            
                                  style=" width: 150px; " 
                                  variant="outlined"
                                  bg-color="white"                                           
                                  type="number"  
                                  inputmode="numeric"   
                                  density="compact"
                                  :rules="[campoRequerido]" 
                                  :disabled="loteFiacaoDesabilitado" 
                                  @blur="buscaLote()"
                                  
                              ></v-text-field>                                    
                                     
                           
                        </div> 

                        <div    class="espacoEntreComponentes" v-if="this.$store.state.usuarioSistema.idfil == '05'">  

                            <v-autocomplete

                                label="Fardos"
                                :items="destinoItens"      
                                v-model.trim="this.mistura.destino"  
                                item-title="descricao" 
                                item-value="codigo"
                                variant="outlined"
                                style=" width: 150px; "
                                bg-color="white"   
                                density="compact"
                                :disabled="destinoDesabilitado" 

                                
                              
                                
                            ></v-autocomplete> 

                        </div>                           

                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field
                                  v-model.trim="this.mistura.observacao" 
                                  id="observacao"
                                  label="Observação" 
                                  ref="observacao"  
                                  maxlength="150"                                            
                                  style=" width: 350px; " 
                                  variant="outlined"
                                  bg-color="white"                                           
                                  type="text"     
                                  density="compact"
                                  :disabled="observacaoDesabilitado" 
                                  
                              ></v-text-field>                                    
                                      
                            
                        </div>     

                        <div   class="espacoEntreComponentes">    
                                        
                              <v-text-field

                                  v-model.trim="this.totalFardosMistura" 
                                  id="numFardos"
                                  label="Num. Fardos Selec." 
                                  ref="numFardos"  
                                  maxlength="150"                                            
                                  style=" width: 150px; " 
                                  variant="outlined"
                                  bg-color="white"                                           
                                  type="text"     
                                  density="compact"
                                  disabled
                                  
                              ></v-text-field>                                    
                                      
                            
                        </div> 


                        <div   class="espacoEntreComponentes"   v-if="this.totalFardosMistura == this.mistura.totalFardos && this.totalFardosMistura > 0 ">    
                                            
                                    <div >
                                        <v-icon
                                            class="mb-6"
                                            color="green"
                                            icon="mdi-check"
                                            size="55"
                                        ></v-icon>                                                 
                                                                          
                                    </div>
                                   
                        </div>  

                        <div   class="espacoEntreComponentes"  v-if="this.totalFardosMistura != this.mistura.totalFardos && this.totalFardosMistura > 0 ">    
                                    
                                    <div >
                                        <v-icon
                                            class="mb-6"
                                            color="red"
                                            icon="mdi-alert-circle-outline"  
                                            size="35"
                                        ></v-icon>                                                 
                                                                          
                                    </div>
                            
                        </div>



   
                    </div>      

               
                    <!-- /// Resumo Mistura -->  
                    <!-- /// Resumo Mistura -->
                    <!-- /// Resumo Mistura -->
                    <!-- /// Resumo Mistura -->
                    <div class="d-flex justify-content-center"  style=" background-color:white "   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:150px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="19" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA MISTURA</th> 
                                      </tr>                                     
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
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
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-start tabGrid" >Qtde Selec</th>  
                                          <th class="col-1 text-start tabGrid" >Testados</th>  
                                          <th class="col-1 text-start tabGrid" >Não Testados</th> 

                                      </tr>
                                    </thead>  

                                    <tbody  v-if=" this.totalFardosMistura >0"  >
                                      <template  v-for="(i,indice) in aResumoMistura" :key="indice">
    
                                        <tr v-if="i.TotFardos_selec>0" >  
    
                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ (i.SAC ).toFixed(2)}} 
                                            </td> 
                                        
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TRID).toFixed(2) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.PIM).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SC).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SCI).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MST).toFixed(2) }}
                                            </td> 
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MIC).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MAT).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UHML).toFixed(3) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UI).toFixed(2) }}
                                            </td>                                                
 
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SF).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.STR).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.ELG).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ i.TotFardos_selec }}
                                            </td>                                              
 
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-start tabGridCol" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-start tabGridCol" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td>                                                                                             

                                        </tr>  

                                      </template>

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  

                    <!-- ///Final Resumo Mistura -->  
                    <!-- ///Final Resumo Mistura -->
                    <!-- ///Final Resumo Mistura -->
                    <!-- ///Final Resumo Mistura -->
 


                    <div class="d-flex justify-content-center"  style="margin-left:4%;width:96%;margin-top: 1%;background-color:white" v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile' " >  

                                <div class="espacoEntreComponentes "   style=" height:45px;margin-bottom:25px"  > 
                                
                                  <v-btn @click="this.pesquisaDados()" style="height:47px;width:280px;margin-top: 15px;background-color:rgb(240, 237, 232);" 
                                     :disabled="acaoDesabilitado"
                                    v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile' "  >

                                      <v-icon left                                               
                                          color="primary"
                                          icon="mdi-plus-box-outline"
                                          size="45"
                                      ></v-icon> 

                                      <span class="my-auto">Informar Composição</span>  {{ this.$store.state.usuarioSistema.idfil }}

                                  </v-btn>  
                            
                                </div>    

                    </div>           
                    
                    <!-- ///Corpo da Mistura -->  
                    <!-- ///Corpo da Mistura -->  
                    <!-- ///Corpo da Mistura -->  
                    <!-- ///Corpo da Mistura -->                     
 
                     <div class="container-fluid"  style=" height:800px; overflow-y: scroll; overflow-x: scroll;">
                            <table class="table table-sm  tabela">
                                <thead class="cabecalho " style="background-color:#003366;color: white;">
                                  <tr>
                                    
                                      <th class="col-3 text-start" v-if="this.$store.state.usuarioSistema.idfil != '05'">FORNECEDOR</th>   
                                      <th class="col-3 text-start">PRODUTOR</th>     
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >DV/COR/ TP MIC</th>  
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >QUAL</th>  
                                      <th class="col-2 text-start"  >PILHA</th>  
                                      <th class="col-2 text-start" >LOTE</th>  
                                      <th class="col-2 text-start" >TAM</th>  
                                      <th class="col-2 text-start"  >DISPONÍVEL</th>  
                                      <th class="col-2 text-start" >NECESSIDADE</th>  
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
                                      <th class="col-2 text-start" >RS</th>  
                                      <th class="col-2 text-start" >TrAr</th>  
                                      <th class="col-2 text-start" >TrCnt</th>  
                                      <th class="col-2 text-start" >UHML</th>  
                                      <th class="col-2 text-start" >ESTOQUE</th>  
                                      <th class="col-2 text-start" >NECES MIST</th>  
                                      <th class="col-2 text-start" >SLD_DISP PÓS_BAIXA</th>  


                                     

                                      
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
                                        {{ i.m4DEST + '-' +  i.m4COLOR + '-' + i.m4TPMIC}}
                                      </td>       
                                      
                                      <td class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.m4QUAL}}
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
                                        {{ i.disponivel}}
                                      </td>     

 
                                      <td  class="col-2  "   >    
 
                                          <input type="number"
                                              v-model.trim="i.qtde" 
                                              maxlength="4"                                            
                                              style=" width: 100px;height: 30px;border:solid 1px ;text-align: center;font-size:16px"   
                                              @change="calculaTotais(this.aComposicao,i )"
                                          >         

                                      </td>      

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.sac}}
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                                                               

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.trid}}
                                      </td>  
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                        

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.pim}}
                                      </td> 
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                        

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.sc}}
                                      </td>  
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                        

                                      <td class="col-1 text-start"  :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.sic}}
                                      </td>   
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                        

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.mst}}
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                                           

                                      <td class="col-1 text-start" style="color:blue" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0"> 
                                        {{ i.mat}}
                                      </td> 

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.elg}}
                                      </td>        
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} "  v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.str}}
                                      </td> 

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.tipo}}
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                                             

                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.ui}}
                                      </td>

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" style="color:blue" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.mic}}
                                      </td>   

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.sf}}
                                      </td>   
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.m4B}}
                                      </td> 
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.m4RS}}
                                      </td>       
                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.m4TRAR}}
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       

                                      
                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0">
                                        {{ i.m4TRCNT}}
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      <td class="col-1 text-start" :style="{backgroundColor: i.corLinha} " v-if="i.mic != 0 && i.uhml != 0 && i.mat != 0 && i.sic != 0"> 
                                        {{ i.m4UHML}}
                                      </td>  

                                      <td class="col-1 text-center" :style="{backgroundColor: i.corLinha} "     v-if="i.mic == 0 || i.uhml == 0 || i.mat == 0 || i.sic == 0">
                                        {{  }}
                                      </td>                                       
                                      
                                      
                                      <td class="col-1 text-end" style="color:blue" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.estoque}}
                                      </td>                                        

                                                                            
                                      <td class="col-1 text-end" :style="{backgroundColor: i.corLinha} ">
                                        {{ i.qtde * (this.mistura.quantidade-i.total_mist_util) }}
                                      </td>  

                                      <td class="col-1 text-end" :style="{backgroundColor: i.corLinha} ">
                                        {{  i.disponivel - (i.qtde * (this.mistura.quantidade-i.total_mist_util)) }}
                                      </td>  
 
                                    </tr>
 

 
                     
    
                                  </template> 
  
                              </tbody> 
  
                          </table> 
  
  
                      </div>

                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  


                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <div class="d-flex justify-content-center"  style="height:400px; background-color:white ;margin-top:100px; overflow-y: scroll; overflow-x: scroll;"   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA MISTURA POR PRODUTOR</th> 
                                      </tr> 
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
                                          <th class="col-1 text-start tabGrid"  >PRODUTOR</th>  
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
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-end tabGrid" >Qtde Selec</th> 
                                          <th class="col-1 text-end tabGrid" >%</th>  
                                          <th class="col-1 text-end tabGrid" >Testados</th>  
                                          <th class="col-1 text-end tabGrid" >Não Testados</th> 
                                            

                                      </tr>
                                    </thead>  

                                    <tbody  v-if=" this.totalFardosMistura >0"  >
                                      <template  v-for="(i,indice) in aResumoProdutor" :key="indice">
    
                                        <tr v-if="i.TotFardos_selec>0" >  

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ i.produtor }} 
                                            </td> 

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ (i.SAC).toFixed(2)}} 
                                            </td> 
                                        
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TRID).toFixed(2) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.PIM).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SC).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SCI).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MST).toFixed(2) }}
                                            </td> 
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MIC).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MAT).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UHML).toFixed(3) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UI).toFixed(2) }}
                                            </td>                                                
 
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SF).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.STR).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.ELG).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ i.TotFardos_selec }}
                                            </td>    

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ ( ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2)) }}
                                            </td> 
                                            
                                           
 
                                            <td class="col-1 text-end tabGridCol" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td>                                                                                             
 

                                        </tr>  

                                      </template>

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  


                    

                    <!-- /// Estoque por Produtor -->  
                    <!-- /// Estoque por Produtor -->   
                    <!-- /// Estoque por Produtor -->   
                    <!-- /// Estoque por Produtor -->  
                    <div class="d-flex justify-content-center"  style="height:400px; background-color:white ;margin-top:100px;overflow-y: scroll; overflow-x: scroll;"   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " >ESTOQUE POR PRODUTOR</th> 
                                      </tr> 
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
                                          <th class="col-1 text-start tabGrid"  >PRODUTOR</th>  
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
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-end tabGrid" >Estoque</th> 
                                          <th class="col-1 text-end tabGrid" >%</th> 
                                          <th class="col-1 text-end tabGrid" >Testados</th>  
                                          <th class="col-1 text-end tabGrid" >Não Testados</th> 
                                          

                                      </tr>
                                    </thead>  

                                    <tbody  >
                                      <template  v-for="(i,indice) in aEstoqueProdutor" :key="indice">
    
                                        <tr   >  

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ i.produtor }} 
                                            </td> 

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ (i.SAC).toFixed(2)}} 
                                            </td> 
                                        
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TRID).toFixed(2) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.PIM).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SC).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SCI).toFixed(2) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MST).toFixed(2) }}
                                            </td> 
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MIC).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.MAT).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UHML).toFixed(3) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.UI).toFixed(2) }}
                                            </td>                                                
 
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.SF).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.STR).toFixed(2) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.ELG).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ i.TotFardosEstoque }}
                                            </td>     

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ ((i.TotFardosEstoque / this.totalFardosEstoque)*100).toFixed(2)}}
                                            </td>                                              
                                                                                     

 
                                            <td class="col-1 text-end tabGridCol" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td>                                                                                             

                                             

                                        </tr>  

                                      </template>

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  

                    <!-- /// Final Estoque por Produtor -->  
                    <!-- /// Final Estoque por Produtor -->   
                    <!-- /// Final Estoque por Produtor -->   
                    <!-- /// Final Estoque por Produtor --> 


                    <!-- /// Resumo Qualidade -->  
                    <!-- /// Resumo Qualidade -->  
                    <!-- /// Resumo Qualidade -->  
                    <!-- /// Resumo Qualidade -->  
                    <div class="d-flex justify-content-center"  style="height:400px; background-color:white ;margin-top:100px; overflow-y: scroll; overflow-x: scroll;"   v-if="this.$store.state.usuarioSistema.idfil == '05'" >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:20%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA MISTURA POR QUALIDADE</th> 
                                      </tr> 
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
                                          <th class="col-1 text-start tabGrid"  >QUALIDADE</th>   
                                          <th class="col-1 text-end tabGrid" >Qtde Selec</th>  
                                          <th class="col-1 text-end tabGrid" >%</th>  
                                          <th class="col-1 text-end tabGrid" >Testados</th>  
                                          <th class="col-1 text-end tabGrid" >Não Testados</th> 
                                            

                                      </tr>
                                    </thead>  

                                    <tbody  v-if=" this.totalFardosMistura >0"  >
                                      <template  v-for="(i,indice) in aResumoQualidade" :key="indice">
    
                                        <tr v-if="i.TotFardos_selec>0" >  

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ i.qualidade }} 
                                            </td> 
  
                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ i.TotFardos_selec }}
                                            </td> 
                                            
                                            <td class="col-1 text-end tabGridCol"  >
                                              {{ ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2) }}
                                            </td>                                              
 
                                            <td class="col-1 text-end tabGridCol" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td>                                                                                             
  

                                        </tr>  

                                      </template>

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>   




                    <!-- /// Estoque por Qualidade -->  
                    <!-- /// Estoque por Qualidade -->   
                    <!-- /// Estoque por Qualidade -->   
                    <!-- /// Estoque por Qualidade -->  
                    <div class="d-flex justify-content-center"  style="height:400px; background-color:white ;margin-top:100px;margin-bottom:500px;overflow-y: scroll; overflow-x: scroll;"   v-if="this.$store.state.usuarioSistema.idfil == '05'">  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:20%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " >ESTOQUE POR QUALIDADE</th> 
                                      </tr> 
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
                                          <th class="col-1 text-start tabGrid"  >QUALIDADE</th>   
                                          <th class="col-1 text-end tabGrid" >Estoque</th> 
                                          <th class="col-1 text-end tabGrid" >%</th> 
                                          <th class="col-1 text-end tabGrid" >Testados</th>  
                                          <th class="col-1 text-end tabGrid" >Não Testados</th> 

                                          
                                          

                                      </tr>
                                    </thead>  

                                    <tbody  >
                                      <template  v-for="(i,indice) in aEstoqueQualidade" :key="indice">
    
                                        <tr   >  

                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ i.qualidade }} 
                                            </td> 

                                             <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ i.TotFardosEstoque }}
                                            </td>                                              
 
                                            
                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ ((i.TotFardosEstoque / this.totalFardosEstoque)*100).toFixed(2) }}
                                            </td>                                              
                                            
                                            


                                            <td class="col-1 text-end tabGridCol" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridCol" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td>                                                                                             

                                             

                                        </tr>  

                                      </template>

                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  

                    <!-- /// Final Estoque por Qualidade -->  
                    <!-- /// Final Estoque por Qualidade -->   
                    <!-- /// Final Estoque por Qualidade -->   
                    <!-- /// Final Estoque por Qualidade --> 


                                            
   
  
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

                             

                              <div class="col-3 div_rodape d-flex justify-content-end"   >
                                  
                            
                                  <v-btn color="secondary" class="botao_rodape" style=" min-width: 70px;"  v-if="this.mistura.statusMistura=='A' && this.mistura.totalMisturasUtilizadas==0 && this.acaoDesabilitado==true"  accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir</v-btn> 
                                  <v-btn color="primary" class="botao_rodape" style="min-width: 70px;" type="submit"  accesskey="s"  v-if="this.mistura.statusMistura=='A' && this.acaoDesabilitado==true"><u>S</u>alvar</v-btn>
                                  <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ova Operação</v-btn>                                   

                              </div> 

                          </div>
                    
                      </div>   

                            
              </div>




    </v-form>
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
  
    export default {
      name: 'MisturaComponent',
      mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
      components: {MensagemMobile, SimNao},  
      data: () => ({

        resultPesquisaCRUD : [] , 

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
            destino:'T',
            totalMisturasUtilizadas:0,


        },



        aMisturaFinal:[],
        aMisturaItemFinal:[],

        misturaInicial:{

            statusMistura:'',
            numeroMistura:'',
            dataInicial:'',
            dataFinal:'' , 
            quantidade:0,
            totalFardos:0,
            idfil:'',
            loteFiacao:'',
            observacao:'',
            destino:'T',
            totalMisturasUtilizadas:0,


        },        


        destinoItens:[
            {'codigo':'D','descricao':'Denim'},
            {'codigo':'V','descricao':'Venda'} ,
            {'codigo':'T','descricao':'Todos'} 

        ], 

        operMistItens:[
            {'codigo':'I','descricao':'Incluir'},
            {'codigo':'A','descricao':'Alterar'} 

        ],         

        aResumoMistura:[], 
        aEstoqueProdutor:[], 
        aEstoqueQualidade:[],         
        aResumoQualidade:[], 

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
        aResumoProdutor:[] ,
        temp:'',
        operMist:'I', 
        oper:'I',

        numeroMisturaDesabilitado:false,
        dataInicialDesabilitado:false,
        dataFinalDesabilitado:false,
        quantidadeDesabilitado:false,
        totalFardosDesabilitado:false,
        loteFiacaoDesabilitado:false,
        observacaoDesabilitado:false,
        operMistDesabilitado:false, 
        destinoDesabilitado:false, 
        acaoDesabilitado:false, 

        misturasAbertas: [],
        misturasAbertasTemp:{ 
            codigo:'' 
        },
        aResult:[],
        
         
      }),
      computed: mapState(['usuarioSistema']),
      methods: {
   
       setaPesquisaCRUD(pCursor) {  
              this.resultPesquisaCRUD = pCursor   
        } ,   



        configuraCampos(oper ){ 
 
            if(oper=='I'){

              if(this.operMist=='I' ){

                if(this.$store.state.usuarioSistema.idfil == '05'){
                  this.numeroMisturaDesabilitado=false; 
                }else{
                  this.numeroMisturaDesabilitado=true;
                }
                   
              }else{
                this.numeroMisturaDesabilitado=true;
              }
              this.acaoDesabilitado=false;
            
              this.dataInicialDesabilitado=false;
              this.dataFinalDesabilitado=false;
              //this.quantidadeDesabilitado=false;
              //this.totalFardosDesabilitado=false;
              this.loteFiacaoDesabilitado=false;
              this.observacaoDesabilitado=false; 
              this.operMistDesabilitado=false;
              this.destinoDesabilitado=false;
 
            }else{ 

              this.numeroMisturaDesabilitado=true;
              this.acaoDesabilitado=true;
              this.dataInicialDesabilitado=true;
              this.dataFinalDesabilitado=true;
              //this.quantidadeDesabilitado=true;
              //this.totalFardosDesabilitado=true;
              this.loteFiacaoDesabilitado=true;
              this.observacaoDesabilitado=true; 
              this.operMistDesabilitado=true; 
              this.destinoDesabilitado=true;

            }

          },

        trocaOperMist(){    

             // console.log('trocaOperMist')

              this.mistura.numeroMistura = ''; 

              if(this.$store.state.usuarioSistema.idfil=='05'){
                    this.numeroMisturaDesabilitado=false;
              }else{
                   if(this.operMist=='I')
                      this.numeroMisturaDesabilitado=true;                
                    else{
                      this.numeroMisturaDesabilitado=false; 
                    } 
              }

              if(this.operMist=='I'){
                this.simNaoRetorno == 'S';
                this.acaoDesabilitado=false; 
                this.resetarForm();

              }else{

                this.acaoDesabilitado=true; 
                this.populaMisturasAbertas();
              }
              

        }, 


        async exclusao() { 

            /// EXCLUSAO ////

            let url = `${process.env.VUE_APP_BASE_URL}/mp/excluir/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}`  

            if ( this.simNaoRetorno == 'S') {   
                     
                    this.axios.delete(url,this.apiTokenHeader() )
                    .then(response => {
                        this.resetarForm();
                        this.apiDisplayMensagemSucesso('Mistura ' + response.data  + ' excluida com sucesso.'  )
                    })
                    .catch(error => {
                        console.log("Erro: ", error.response.data); 
                        this.apiDisplayMensagem(error.response.data ) 
                    }); 

            }


        },


        resetarForm(){

            //console.log('')  

            if(this.simNaoRetorno == 'S'){

                this.mistura = Object.assign({},this.misturaInicial);  
                //this.v$.$reset(); 
                this.totalFardosMistura=0;
                this.totalFardosEstoque=0;
                this.aComposicao=[];
                this.aResumoMistura=[];
                this.aResumoProdutor=[];
                this.aResumoQualidade=[];
                this.aEstoqueProdutor=[];
                this.aEstoqueQualidade=[];
                this.aMisturaFinal=[];
                this.aMisturaItemFinal=[];
                this.operMist='I'                ;
                this.oper='I';
                this.numeroMistura = '';
                this.configuraCampos('I' )  ;
               
 

            }  

        }, 
  
          navegarParaLogin(){this.$router.push({name:'login'  })}   ,

          scrollToTop() {
              window.scrollTo(0, 0);
            },   
            
            confirmaAcao(resposta) {

                    this.simNaoRetorno = resposta

                    console.log('confirmaAcao');
                    console.log(this.simNaoRetorno ); 

                    if(resposta == 'O'){ 
                        console.log(this.simNaoRetorno ); 
                    }


                    if(this.simNaoRetorno == 'S') {

                         
                        if(this.acao == 'excluir'){      
                                              
                            this.exclusao();
                        }else if(this.acao == 'cancelaEdicao')
                        {
                            this.resetarForm();
                        } 
                        
                    }

            },     
            async buscaLote(){

                 let validacaoOk;
                 validacaoOk = true;
                  if  (!(this.mistura.loteFiacao==null || this.mistura.loteFiacao=='' || this.mistura.loteFiacao=='0')){
                        this.mistura.loteFiacao = this.mistura.loteFiacao.padStart(10, '0'); 
                  } 

                  if(this.mistura.loteFiacao == '0000000000'){
                      this.mistura.loteFiacao = '';
                  } 


                  let url = `${process.env.VUE_APP_BASE_URL}/lotefiacao/buscalote/${this.$store.state.usuarioSistema.idfil}/${this.mistura.loteFiacao}`; 

                  //console.log('BuscaLote');
                  //console.log(url);

                  await this.axios.get(url,this.apiTokenHeader())
                  .then(response => { 

                       this.resultado = response.data; 
                       
                       if(this.resultado){ 

                           //console.log('valida lote')
                           //console.log(this.resultado)
                           

                           this.aResult = [];
                           this.resultado.forEach(element => {
                                this.aResult.push({   
                                    lote:      (element.LOTE != null ? element.LOTE : '')   
                                }) 

                            }); 

                            //console.log(this.aResult)
                
                            if(this.aResult.length > 0){
                                  if (this.aResult[0].lote==null || this.aResult[0].lote=='' ){
                                        if(!(this.mistura.loteFiacao==this.resultado.lote)){
                                          this.apiDisplayMensagem("Lote de fiação não localizado" );
                                          this.haErros = true; 
                                          validacaoOk = false;
                                        }
                                  }else{
                                    validacaoOk = true; 
                                  } 
                            }else{
                               this.apiDisplayMensagem("Lote de fiação não localizado" );
                               this.haErros = true;  
                               validacaoOk = false; 
                            } 
                       }else{

                            this.apiDisplayMensagem("Lote de fiação não localizado" );
                            this.haErros = true;  
                            validacaoOk = false; 
                       } 
      
                  })
                    .catch(error => {
                    console.log("Erro: ", error);
                    this.haErros = true
                    validacaoOk = false;
                  });                  

                  return validacaoOk;  

          },

          async preparaMistura()  {


             //console.log("PreparaForm");

             let retornoPrepForm; 

             if(this.operMist=='I' && this.$store.state.usuarioSistema.idfil== '05'){ 
                      if  (!(this.mistura.numeroMistura==null || this.mistura.numeroMistura=='' || this.mistura.numeroMistura=='0')){
                            this.mistura.numeroMistura = this.mistura.numeroMistura.padStart(10, '0'); 
                      } 

                      if(this.mistura.numeroMistura == '0000000000'){
                          this.mistura.numeroMistura = '';
                      } 
             }

             if(this.operMist=='A'){ 
                  if(!(this.mistura.numeroMistura==null || this.mistura.numeroMistura=='' || this.mistura.numeroMistura=='0')){
                        let url; 
                        url = `${process.env.VUE_APP_BASE_URL}/mp/calc/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}`   

                        //console.log('url') 
                        //console.log(url)  

                        this.numItem = 0; 
                        this.aMisturaItem = [];
                        this.msgProcessamento = "Processando" ;
                        this.apiProcessamento()  ; 
                        
                        await this.axios.get(url,this.apiTokenHeader()) 
                        .then(response => {

                            //console.log("PreparaForm");
                            this.resultado = response.data;  
                            
                            //console.log(this.resultado); 
                            if(this.resultado){ 

                                    if (this.resultado.mistura != null){
                                        this.mistura.numeroMistura = this.resultado.mistura ; 
                                    }else{
                                        this.mistura.numeroMistura= "" ;                       
                                    }  


                                    if (this.resultado.status != null){
                                        this.mistura.statusMistura = this.resultado.status ; 
                                    }else{
                                        this.mistura.statusMistura= "" ;                       
                                    }   
      
                                    if (this.resultado.dataInicial != null){
                                        let dataInicialFormatada = this.$moment(this.resultado.dataInicial , "DD/MM/YYYY").format("YYYY-MM-DD");
                                        this.mistura.dataInicial = dataInicialFormatada ; 
                                    }else{
                                        this.mistura.dataInicial= "" ;                       
                                    }      

                                    if (this.resultado.dataFinal != null){
                                        let dataFinalFormatada = this.$moment(this.resultado.dataFinal , "DD/MM/YYYY").format("YYYY-MM-DD");
                                        this.mistura.dataFinal = dataFinalFormatada ; 
                                    }else{
                                        this.mistura.dataFinal= "" ;                       
                                    }    
                                    
                                    
                                    if (this.resultado.dataInclusao != null){
                                        let dataFinalFormatada = this.$moment(this.resultado.dataInclusao , "DD/MM/YYYY").format("YYYY-MM-DD");
                                        this.mistura.dataInclusao = dataFinalFormatada ; 
                                    }else{
                                        this.mistura.dataInclusao= "" ;                       
                                    } 

                                    if (this.resultado.usuarioInclusao != null){ 
                                        this.mistura.usuarioInclusao = this.resultado.usuarioInclusao ; 
                                    }else{
                                        this.mistura.usuarioInclusao= "" ;                       
                                    }                                     

                                    
                                    if (this.resultado.quantidade != null){
                                        this.mistura.quantidade = this.resultado.quantidade ; 
                                    }else{
                                        this.mistura.quantidade= 0 ;                       
                                    }  

                                    if (this.resultado.numFardos != null){
                                        this.mistura.totalFardos = this.resultado.numFardos ; 
                                    }else{
                                        this.mistura.totalFardos= 0 ;                       
                                    }      
                                    
                                    if (this.resultado.idfil != null){
                                        this.mistura.idfil = this.resultado.idfil ; 
                                    }else{
                                        this.mistura.idfil= "" ;                       
                                    }                                  
              
                                    if (this.resultado.loteFiacao != null){
                                        this.mistura.loteFiacao = this.resultado.loteFiacao ; 
                                    }else{
                                        this.mistura.loteFiacao= "" ;                       
                                    }           
              
                                    if (this.resultado.observacao != null){
                                        this.mistura.observacao = this.resultado.observacao ; 
                                    }else{
                                        this.mistura.observacao= "";                       
                                    }   

                                    if (this.resultado.totalUtilizadas != null){
                                        this.mistura.totalMisturasUtilizadas = this.resultado.totalUtilizadas ; 
                                    }else{
                                        this.mistura.totalUtilizadas= 0 ;                       
                                    }                                 

                                                          

                                    this.mistura.destino = 'T'; 

                            }        
                                    

                        })
                        this.numeroMisturaDesabilitado=true;
                        this.operMistDesabilitado=true;  
                        this.acaoDesabilitado=false;

                  }
                  this.msgProcessamento = "" 
                  retornoPrepForm = true; 
                  
                  return  retornoPrepForm;    



              }  // this.operMist=='A'
              

          },

          async pesquisaDados(){    

                //console.log('pesquisaDados')
                //console.log(this.producaoFiacaoParams )

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                this.totalFardosMistura=0;
                this.totalFardosEstoque=0;
                this.aComposicao=[];
                this.aResumoMistura=[];
                this.aResumoProdutor=[];
                this.aResumoQualidade=[];
                this.aEstoqueProdutor=[];
                this.aEstoqueQualidade=[]; 


                let validacaoOk = true;  
                
                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {

                    //console.log('AAAAAAAAA')
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                   // periodoPreenchido  = false; 
                    validacaoOk = false; 
                } else {      
                  
                         //console.log('BBBBBB')

                        if (this.mistura.dataInicial != null && this.mistura.dataInicial != "" && 
                            this.mistura.dataFinal != null && this.mistura.dataFinal != "" ){
                     
                            if (this.mistura.dataFinal < this.mistura.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                            }  else{
                                 validacaoOk = true;  
                            } 
                           
                        }  else{ 

                               validacaoOk = false;  
                        } 


                        if(this.mistura.statusMistura=='A' || this.operMist == 'I' ){

                          

                            if(this.mistura.quantidade <= this.mistura.totalMisturasUtilizadas){
                                  this.apiDisplayMensagem("Quantidade deve ser maior que o numero de misturas utilizadas" );
                                  this.haErros = true;
                                  validacaoOk = false; 

                            }

                            if(this.mistura.quantidade <= 0){
                                  this.apiDisplayMensagem("Quantidade de misturas inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 

                            }                            

                            if(this.mistura.totalFardos <= 0){
                                  this.apiDisplayMensagem("Quantidade de fardos inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 

                            }                         


                        } 
                   
                        const resposta = await this.buscaLote();     
                        //console.log('Resposta')   
                        //console.log(resposta)  
                        if (resposta){
                             
                            if(resposta==false){ 
                                validacaoOk = false; 
                            }
                            
                        }else{
                            validacaoOk = false; 
                        }     
                       
                        if(validacaoOk) {
                             this.haErros = false
                             this.acaoDesabilitado=true;
                             this.populaForm();  
                        }

                       

              }

              return validacaoOk
        },
 
       async submitForm() {   

              this.haErros = false
              this.haSucesso = false  
              this.mensagemSucesso = ''
              this.mensagemErro = ''
              let objItem; 
              let validado;
              let objMist;

              validado=true;

     
              this.aMisturaFinal=[];
              this.aMisturaItemFinal=[];
              
              let aFardos =  this.aComposicao;  

              // Valida dados do corpo da mistura
              for (let j = 0; j < aFardos.length; j++) {
             
                    if( aFardos[j].qtde < 0 ){  
                        this.apiDisplayMensagem("Quantidade do lote " + aFardos[j].lote + " do produtor " + aFardos[j].produt +  " inválida" );
                        this.haErros = true;
                        validado = false; 
                         
                    } 

              }

              this.validacao = await this.$refs.formulario.validate();   

              if (!this.validacao.valid){
                  validado = false;  
                  this.apiDisplayMensagem('Preencha os campos com críticas.');
                  this.haErros = true;
                  return;                  
              }  

              if(validado){ 


                        let dataInsercao;
                        //let dataAlteracao;
                        let dataAtual = new Date();
                        let dia = String(dataAtual.getDate()).padStart(2, '0');
                        let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é baseado em zero, portanto, é necessário adicionar 1
                        let ano = dataAtual.getFullYear();
                        let dataFormatada = `${dia}/${mes}/${ano}`;   
                        
                        if(this.operMist=="A"){ 
                            if (typeof this.mistura.dataInclusao   === "string") {
                                dataInsercao  = this.mistura.dataInclusao ;
                            } else if (this.mistura.dataInclusao  instanceof Date) {
                                dataInsercao  = this.$moment(this.mistura.dataInclusao.format("DD/MM/YYYY")  )
                            }   
                         }    


                        for (let j = 0; j < aFardos.length; j++) {
                      
                              if( aFardos[j].qtde  > 0 ){  

                                  if(this.operMist=='I'){

                                        objItem={

                                              idfil:this.$store.state.usuarioSistema.idfil,
                                              mistura:this.mistura.numeroMistura,	
                                              idItem:aFardos[j].m4ID,
                                              quantidade:aFardos[j].qtde,  
                                              usuarioInclusao: this.$store.state.usuarioSistema.codigo,
                                              usuarioAlteracao: this.$store.state.usuarioSistema.codigo 

                                          }

                                  }else{

                                        objItem={

                                              idfil:this.$store.state.usuarioSistema.idfil,
                                              mistura:this.mistura.numeroMistura,	
                                              idItem:aFardos[j].m4ID,
                                              quantidade:aFardos[j].qtde,   
                                              dataInclusao:     dataInsercao,
                                              usuarioInclusao:  this.mistura.usuarioInclusao,
                                              usuarioAlteracao: this.$store.state.usuarioSistema.codigo 

                                          } 
                                  } 
                                  
                                  this.aMisturaItemFinal.push(objItem);
                              } 

                        } 
             

                        if(this.operMist=='I'){

                              objMist = {

                                  idfil:this.$store.state.usuarioSistema.idfil,
                                  mistura:this.mistura.numeroMistura,	
                                  lote:this.mistura.loteFiacao	,
                                  status:'A',
                                  dataInicial:this.mistura.dataInicial,
                                  dataFinal:this.mistura.dataFinal,
                                  totalMisturas:this.mistura.quantidade,  
                                  observacao:this.mistura.observacao,	 
                                  numFardos:this.mistura.totalFardos, 
                                  misturaPadraoItemDTO:this.aMisturaItemFinal,  
                                  usuarioInclusao: this.$store.state.usuarioSistema.codigo,
                                  usuarioAlteracao: this.$store.state.usuarioSistema.codigo  

                              } 

                              this.mistura.usuarioInclusao = this.$store.state.usuarioSistema.codigo;
                              
                              dataInsercao = dataFormatada;
                              this.mistura.dataInclusao  = dataInsercao; //this.$moment(dataAtual).format("DD/MM/YYYY") ;


                        }else{

                              objMist = {

                                  idfil:this.$store.state.usuarioSistema.idfil,
                                  mistura:this.mistura.numeroMistura,	
                                  lote:this.mistura.loteFiacao	,
                                  status:this.mistura.statusMistura,
                                  dataInicial:this.mistura.dataInicial,
                                  dataFinal:this.mistura.dataFinal,
                                  totalMisturas:this.mistura.quantidade,  
                                  observacao:this.mistura.observacao,	 
                                  numFardos:this.mistura.totalFardos, 
                                  misturaPadraoItemDTO:this.aMisturaItemFinal,  
                                  usuarioInclusao: this.mistura.usuarioInclusao, 
                                  usuarioAlteracao: this.$store.state.usuarioSistema.codigo,
                                  dataInclusao: this.mistura.dataInclusao,

                              } 



                        }

                        this.aMisturaFinal=objMist;   


                        if(this.operMist=='I'){

                                let url = `${process.env.VUE_APP_BASE_URL}/mp/incluir`;

                                await this.axios.post(
                                    url,
                                    JSON.stringify(this.aMisturaFinal),
                                    this.apiTokenHeader({ "Content-Type": "application/json" })
                                )
                                .then(response => { 
        
                                    this.resultado = response.data;  
                                    this.mistura.numeroMistura = this.resultado;
                                    this.apiDisplayMensagemSucesso('Mistura   ' + this.mistura.numeroMistura + '   inserida com sucesso.' )  

                                    this.operMist='A';
                                    this.configuraCampos('A' );   
                                        
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data); 
                                    this.apiDisplayMensagem(error.response.data ) 
                                });   

                        }else{

                                let url = `${process.env.VUE_APP_BASE_URL}/mp/alterar`;

                                await this.axios.put(
                                    url,
                                    JSON.stringify(this.aMisturaFinal),
                                    this.apiTokenHeader({ "Content-Type": "application/json" })
                                )
                                .then(response => { 
        
                                    this.resultado = response.data;   
                                    this.apiDisplayMensagemSucesso('Mistura alterada com sucesso.' ) 
                                        
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data); 
                                    this.apiDisplayMensagem(error.response.data ) 
                                });   


                        }

                        console.log('submit');
                        console.log(this.aMisturaFinal);

            } // fim validado
 
        
        },


        calculaCor(pComposicao){

              let aFardos =  pComposicao; 
          
              for (let j = 0; j < aFardos.length; j++) {

                    if((this.mistura.quantidade!=aFardos[j].total_mist_util) && aFardos[j].qtde  >0 ){ 
                        if(( aFardos[j].disponivel - (aFardos[j].qtde * (this.mistura.quantidade-aFardos[j].total_mist_util)) ) >= 0  ){
                          aFardos[j].corLinha ="white";
                        }else{
                          aFardos[j].corLinha ="AntiqueWhite";
                        }
                    }  

              }



          
        },


        calculaTotais(pComposicao,elemento ){
           
          let aFardos =  pComposicao; 
          let somaFardosMistura;
          let somaFardosEstoque;
           


          // Resumo da Mistura
          let nSAC_RT = 0;
          let nTRID_RT = 0;
          let nPIM_RT = 0;
          let nSC_RT = 0;
          let nSCI_RT = 0;
          let nMST_RT = 0;
          let nMIC_RT = 0;
          let nMAT_RT = 0;
          let nUHML_RT = 0;
          let nUI_RT = 0;                       
          let nSF_RT = 0;
          let nSTR_RT = 0;
          let nELG_RT = 0;
          let nTIPO_RT = 0;
          let nTrAr_RT = 0;   

          let nSAC_GERAL  = 0;
          let nTRID_GERAL  = 0;
          let nPIM_GERAL  = 0;
          let nSC_GERAL  = 0;
          let nSCI_GERAL  = 0;
          let nMST_GERAL  = 0;
          let nMIC_GERAL  = 0;
          let nMAT_GERAL  = 0;
          let nUHML_GERAL  = 0;
          let nUI_GERAL  = 0;                       
          let nSF_GERAL  = 0;
          let nSTR_GERAL  = 0;
          let nELG_GERAL  = 0;
          let nTIPO_GERAL  = 0;
          let nTrAr_GERAL  = 0;                
             


                               
          somaFardosMistura = 0;
          somaFardosEstoque = 0;
          this.aResumoMistura = [];
          this.aResumoProdutor = [];
          this.aResumoQualidade = [];
          this.aEstoqueProdutor = [];
          this.aEstoqueQualidade = [];
          //console.log('calculaTotais')
          //console.log(pComposicao);
          //console.log(this.aComposicao);
          //console.log(elemento);

          for (let j = 0; j < aFardos.length; j++) {  
             
                  //console.log(aFardos[j]);
                  
                  if(aFardos[j].qtde != null && aFardos[j].qtde > 0 ){
                      somaFardosMistura+=aFardos[j].qtde;
                  }

                  if(aFardos[j].estoque != null && aFardos[j].estoque > 0 ){
                      somaFardosEstoque+=aFardos[j].estoque;
                  }                  

                  /// Fardos Selecionados
                  if(aFardos[j].qtde){ 
                              
                        if(aFardos[j].sac){
                          nSAC_RT = aFardos[j].sac * aFardos[j].qtde
                        }



                        if(aFardos[j].trid){
                          nTRID_RT= aFardos[j].trid * aFardos[j].qtde
                        }



                        if(aFardos[j].pim){
                          nPIM_RT= aFardos[j].pim * aFardos[j].qtde
                        }
                                        


                        if(aFardos[j].sc){
                          nSC_RT= aFardos[j].sc * aFardos[j].qtde
                        }



                        if(aFardos[j].sic){
                          nSCI_RT= aFardos[j].sic * aFardos[j].qtde
                        }



                        if(aFardos[j].mst){
                          nMST_RT= aFardos[j].mst * aFardos[j].qtde
                        }



                        if(aFardos[j].mic){
                          nMIC_RT= aFardos[j].mic * aFardos[j].qtde
                        }



                        if(aFardos[j].mat){
                          nMAT_RT= aFardos[j].mat * aFardos[j].qtde
                        }



                        if(aFardos[j].m4UHML){
                          nUHML_RT= aFardos[j].m4UHML * aFardos[j].qtde
                        }
                                    

                        
                        if(aFardos[j].ui){
                          nUI_RT= aFardos[j].ui * aFardos[j].qtde
                        }



                        if(aFardos[j].sf){
                          nSF_RT= aFardos[j].sf * aFardos[j].qtde
                        }
                                      


                        if(aFardos[j].str){
                          nSTR_RT= aFardos[j].str * aFardos[j].qtde
                        }



                        if(aFardos[j].elg){
                          nELG_RT= aFardos[j].elg * aFardos[j].qtde
                        }
                                      


                        if(aFardos[j].tipo){
                          nTIPO_RT= aFardos[j].tipo * aFardos[j].qtde
                        }



                        if(aFardos[j].m4TRAR){
                          nTrAr_RT= aFardos[j].m4TRAR * aFardos[j].qtde;
                        }
                          
 
                  }else{


                        nSAC_RT   = 0;
                        nTRID_RT  = 0;
                        nPIM_RT   = 0;
                        nSC_RT    = 0;
                        nSCI_RT   = 0;
                        nMST_RT   = 0;
                        nMIC_RT   = 0;
                        nMAT_RT   = 0;
                        nUHML_RT  = 0;
                        nUI_RT    = 0;
                        nSF_RT    = 0;
                        nSTR_RT   = 0;
                        nELG_RT   = 0;
                        nTIPO_RT  = 0;
                        nTrAr_RT  = 0;  

                  }  // Final possui quantidade selecionada

                  /// Possui estoque
                  if(aFardos[j].estoque){

                        if(aFardos[j].sac){
                          nSAC_GERAL  = aFardos[j].sac * aFardos[j].estoque
                        }



                        if(aFardos[j].trid){
                          nTRID_GERAL= aFardos[j].trid * aFardos[j].estoque
                        }



                        if(aFardos[j].pim){
                          nPIM_GERAL= aFardos[j].pim * aFardos[j].estoque
                        }
                                        


                        if(aFardos[j].sc){
                          nSC_GERAL= aFardos[j].sc * aFardos[j].estoque
                        }



                        if(aFardos[j].sic){
                          nSCI_GERAL= aFardos[j].sic * aFardos[j].estoque
                        }



                        if(aFardos[j].mst){
                          nMST_GERAL= aFardos[j].mst * aFardos[j].estoque
                        }



                        if(aFardos[j].mic){
                          nMIC_GERAL= aFardos[j].mic * aFardos[j].estoque
                        }



                        if(aFardos[j].mat){
                          nMAT_GERAL= aFardos[j].mat * aFardos[j].estoque
                        }



                        if(aFardos[j].m4UHML){
                          nUHML_GERAL= aFardos[j].m4UHML * aFardos[j].estoque
                        }
                                    


                        if(aFardos[j].ui){
                          nUI_GERAL= aFardos[j].ui * aFardos[j].estoque
                        }



                        if(aFardos[j].sf){
                          nSF_GERAL= aFardos[j].sf * aFardos[j].estoque
                        }
                                      


                        if(aFardos[j].str){
                          nSTR_GERAL= aFardos[j].str * aFardos[j].estoque
                        }



                        if(aFardos[j].elg){
                          nELG_GERAL= aFardos[j].elg * aFardos[j].estoque
                        }
                                      


                        if(aFardos[j].tipo){
                          nTIPO_GERAL= aFardos[j].tipo * aFardos[j].estoque
                        }



                        if(aFardos[j].m4TRAR){
                          nTrAr_GERAL= aFardos[j].m4TRAR * aFardos[j].estoque;
                        }		 


                  }else{


                       nSAC_GERAL  = 0;                      
                       nTRID_GERAL =  0; 
                       nPIM_GERAL  =  0; 
                       nSC_GERAL   =  0; 
                       nSCI_GERAL  =  0; 
                       nMST_GERAL  =  0; 
                       nMIC_GERAL  =  0; 
                       nMAT_GERAL  =  0; 
                       nUHML_GERAL =  0; 
                       nUI_GERAL   =  0; 
                       nSF_GERAL   =  0; 
                       nSTR_GERAL  =  0; 
                       nELG_GERAL  =  0; 
                       nTIPO_GERAL =  0; 
                       nTrAr_GERAL =  0; 



                  } /// Final possui estoque          



                  // Lote Testado
                  if ((aFardos[j].mic != null && aFardos[j].mic  > 0 ) ||
                      (aFardos[j].uhml!= null && aFardos[j].uhml > 0 ) ||
                      (aFardos[j].sic!= null  && aFardos[j].sic  > 0 ) ||
                      (aFardos[j].mat!= null  && aFardos[j].mat  > 0 ) 
                  ){ 


                          //// Estoque por Qualidade
                          let objEstQual = this.aEstoqueQualidade.find(objEstQual => objEstQual.qualidade === aFardos[j].m4QUAL); 
                           

                          if (objEstQual) { 
                          
                                    objEstQual.TotalTestadoMistura     += aFardos[j].estoque;  
                                    objEstQual.TotFardosEstoque     += aFardos[j].estoque;  
                          }else{ 

                                  let objEstkQualidade = {
                                    
                                          qualidade: aFardos[j].m4QUAL, 
                                          TotalTestadoMistura:aFardos[j].estoque,
                                          TotFardosEstoque:   aFardos[j].estoque                                        

                                }

                                this.aEstoqueQualidade.push(objEstkQualidade);  
                          }  







                          //// Estoque por produtor
                          let objEstProd = this.aEstoqueProdutor.find(objEstProd => objEstProd.produtor === aFardos[j].produt); 
                           

                          if (objEstProd) {
          
                                    objEstProd.SAC  += nSAC_GERAL;
                                    objEstProd.TRID += nTRID_GERAL;
                                    objEstProd.PIM  += nPIM_GERAL;
                                    objEstProd.SC   += nSC_GERAL; 
                                    objEstProd.SCI  += nSCI_GERAL;
                                    objEstProd.MST  += nMST_GERAL;
                                    objEstProd.MIC  += nMIC_GERAL;
                                    objEstProd.MAT += nMAT_GERAL,
                                    objEstProd.UHML += nUHML_GERAL;
                                    objEstProd.UI   += nUI_GERAL;                       
                                    objEstProd.SF   += nSF_GERAL;
                                    objEstProd.STR  += nSTR_GERAL;
                                    objEstProd.ELG  += nELG_GERAL;
                                    objEstProd.TIPO += nTIPO_GERAL;
                                    objEstProd.TrAr += nTrAr_GERAL;  
                                    objEstProd.TotalTestadoMistura  += aFardos[j].estoque;
                                    objEstProd.TotFardosEstoque     += aFardos[j].estoque;  
                                    
                                    //console.log(this.aResumoMistura); 

  
                          }else{


                                  let objEstkProdutor = {
                                    
                                          produtor: aFardos[j].produt,
                                          SAC:nSAC_GERAL,
                                          TRID:nTRID_GERAL,
                                          PIM:nPIM_GERAL,
                                          SC:nSC_GERAL,
                                          SCI:nSCI_GERAL,
                                          MST:nMST_GERAL,
                                          MIC:nMIC_GERAL,
                                          MAT:nMAT_GERAL,
                                          UHML:nUHML_GERAL,
                                          UI  :nUI_GERAL,                       
                                          SF	:nSF_GERAL,
                                          STR	:nSTR_GERAL,
                                          ELG	:nELG_GERAL,
                                          TIPO:nTIPO_GERAL,
                                          TrAr:nTrAr_GERAL,  
                                          TotFardosMistura:   0,
                                          TotFardos_selec:    0,
                                          TotalTestadoMistura:aFardos[j].estoque,
                                          TotFardosEstoque:   aFardos[j].estoque                                        

                                }

                                this.aEstoqueProdutor.push(objEstkProdutor); 

                          }  





    
                          if(aFardos[j].qtde){
                                
                              // Com quantidade seleciona e testado
                              //// Mistura Completa
                              let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 

                              if (objMistura) {
              
                                        objMistura.SAC  += nSAC_RT;
                                        objMistura.TRID += nTRID_RT;
                                        objMistura.PIM  += nPIM_RT;
                                        objMistura.SC   += nSC_RT; 
                                        objMistura.SCI  += nSCI_RT,
                                        objMistura.MST  += nMST_RT,
                                        objMistura.MIC  += nMIC_RT,
                                        objMistura.MAT += nMAT_RT,
                                        objMistura.UHML += nUHML_RT,
                                        objMistura.UI   += nUI_RT,                       
                                        objMistura.SF   += nSF_RT,
                                        objMistura.STR  += nSTR_RT,
                                        objMistura.ELG  += nELG_RT,
                                        objMistura.TIPO += nTIPO_RT,
                                        objMistura.TrAr += nTrAr_RT 
                                        objMistura.TotFardosMistura     += aFardos[j].qtde;
                                        objMistura.TotFardos_selec      += aFardos[j].qtde;
                                        objMistura.TotalTestadoMistura  += aFardos[j].qtde;
                                        objMistura.TotFardosEstoque     += aFardos[j].estoque;  
                                        
                                        //console.log(this.aResumoMistura); 

      
                              }else{


                                      let objResumoMistura = {
                                        
                                              mistura: this.mistura.numeroMistura,
                                              SAC:nSAC_RT,
                                              TRID:nTRID_RT,
                                              PIM:nPIM_RT,
                                              SC:nSC_RT,
                                              SCI:nSCI_RT,
                                              MST:nMST_RT,
                                              MIC:nMIC_RT,
                                              MAT:nMAT_RT,
                                              UHML:nUHML_RT,
                                              UI  :nUI_RT,                       
                                              SF	:nSF_RT,
                                              STR	:nSTR_RT,
                                              ELG	:nELG_RT,
                                              TIPO:nTIPO_RT,
                                              TrAr:nTrAr_RT,  
                                              TotFardosMistura:   aFardos[j].qtde,
                                              TotFardos_selec:    aFardos[j].qtde,
                                              TotalTestadoMistura:aFardos[j].qtde,
                                              TotFardosEstoque:   aFardos[j].estoque,                                       

                                    }

                                    this.aResumoMistura.push(objResumoMistura); 

                              }  


                              //// Produtor
                              let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 

                              if (objProdutor) {
              
                                        objProdutor.SAC  += nSAC_RT;
                                        objProdutor.TRID += nTRID_RT;
                                        objProdutor.PIM  += nPIM_RT;
                                        objProdutor.SC   += nSC_RT; 
                                        objProdutor.SCI  += nSCI_RT,
                                        objProdutor.MST  += nMST_RT,
                                        objProdutor.MIC  += nMIC_RT,
                                        objProdutor.MAT += nMAT_RT,
                                        objProdutor.UHML += nUHML_RT,
                                        objProdutor.UI   += nUI_RT,                       
                                        objProdutor.SF   += nSF_RT,
                                        objProdutor.STR  += nSTR_RT,
                                        objProdutor.ELG  += nELG_RT,
                                        objProdutor.TIPO += nTIPO_RT,
                                        objProdutor.TrAr += nTrAr_RT 
                                        objProdutor.TotFardosMistura     += aFardos[j].qtde;
                                        objProdutor.TotFardos_selec      += aFardos[j].qtde;
                                        objProdutor.TotalTestadoMistura  += aFardos[j].qtde;
                                        objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
                                        
                                        //console.log(this.aResumoMistura); 

      
                              }else{


                                      let objResumoProdutor = {
                                        
                                              produtor: aFardos[j].produt,
                                              SAC:nSAC_RT,
                                              TRID:nTRID_RT,
                                              PIM:nPIM_RT,
                                              SC:nSC_RT,
                                              SCI:nSCI_RT,
                                              MST:nMST_RT,
                                              MIC:nMIC_RT,
                                              MAT:nMAT_RT,
                                              UHML:nUHML_RT,
                                              UI  :nUI_RT,                       
                                              SF	:nSF_RT,
                                              STR	:nSTR_RT,
                                              ELG	:nELG_RT,
                                              TIPO:nTIPO_RT,
                                              TrAr:nTrAr_RT,  
                                              TotFardosMistura:   aFardos[j].qtde,
                                              TotFardos_selec:    aFardos[j].qtde,
                                              TotalTestadoMistura:aFardos[j].qtde,
                                              TotFardosEstoque:   aFardos[j].estoque,                                       

                                    }

                                    this.aResumoProdutor.push(objResumoProdutor); 

                              }  




                              //// Qualidade
                              let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 

                              if (objQualidade) {
              
                                        objQualidade.SAC  += nSAC_RT;
                                        objQualidade.TRID += nTRID_RT;
                                        objQualidade.PIM  += nPIM_RT;
                                        objQualidade.SC   += nSC_RT; 
                                        objQualidade.SCI  += nSCI_RT,
                                        objQualidade.MST  += nMST_RT,
                                        objQualidade.MIC  += nMIC_RT,
                                        objQualidade.MAT += nMAT_RT,
                                        objQualidade.UHML += nUHML_RT,
                                        objQualidade.UI   += nUI_RT,                       
                                        objQualidade.SF   += nSF_RT,
                                        objQualidade.STR  += nSTR_RT,
                                        objQualidade.ELG  += nELG_RT,
                                        objQualidade.TIPO += nTIPO_RT,
                                        objQualidade.TrAr += nTrAr_RT 
                                        objQualidade.TotFardosMistura     += aFardos[j].qtde;
                                        objQualidade.TotFardos_selec      += aFardos[j].qtde;
                                        objQualidade.TotalTestadoMistura  += aFardos[j].qtde;
                                        objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
                                        
                                        //console.log(this.aResumoMistura); 

      
                              }else{


                                      let objResumoQualidade = {
                                        
                                              qualidade: aFardos[j].m4QUAL,
                                              SAC:nSAC_RT,
                                              TRID:nTRID_RT,
                                              PIM:nPIM_RT,
                                              SC:nSC_RT,
                                              SCI:nSCI_RT,
                                              MST:nMST_RT,
                                              MIC:nMIC_RT,
                                              MAT:nMAT_RT,
                                              UHML:nUHML_RT,
                                              UI  :nUI_RT,                       
                                              SF	:nSF_RT,
                                              STR	:nSTR_RT,
                                              ELG	:nELG_RT,
                                              TIPO:nTIPO_RT,
                                              TrAr:nTrAr_RT,  
                                              TotFardosMistura:   aFardos[j].qtde,
                                              TotFardos_selec:    aFardos[j].qtde,
                                              TotalTestadoMistura:aFardos[j].qtde,
                                              TotFardosEstoque:   aFardos[j].estoque,                                       

                                    }

                                    this.aResumoQualidade.push(objResumoQualidade); 

                              }  






                          
                          }else {    // Final com/sem quantidade selecionada

                                  
                                  // // Sem quantidade selecionada e testado
                                  //// Mistura
                                  let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 

                                  if (objMistura) {
                                            
                                       objMistura.TotFardosEstoque     += aFardos[j].estoque;  
          
                                  }else{


                                          let objResumoMistura = {
                                            
                                                  mistura: this.mistura.numeroMistura,
                                                  SAC:0,
                                                  TRID:0,
                                                  PIM:0,
                                                  SC:0,
                                                  SCI:0,
                                                  MST:0,
                                                  MIC:0,
                                                  MAT:0,
                                                  UHML:0,
                                                  UI  :0,                       
                                                  SF	:0,
                                                  STR	:0,
                                                  ELG	:0,
                                                  TIPO:0,
                                                  TrAr:0,  
                                                  TotFardosMistura:   0,
                                                  TotFardos_selec:    0,
                                                  TotalTestadoMistura:0,
                                                  TotFardosEstoque:   aFardos[j].estoque                                        

                                        }

                                        this.aResumoMistura.push(objResumoMistura); 

                                  }  

                                  // // Sem quantidade selecionada e testado
                                  //// Produtor
                                  let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 

                                  if (objProdutor) {
                                            
                                        objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
          
                                  }else{


                                          let objResumoProdutor = {
                                            
                                                  produtor: aFardos[j].produt,
                                                  SAC:0,
                                                  TRID:0,
                                                  PIM:0,
                                                  SC:0,
                                                  SCI:0,
                                                  MST:0,
                                                  MIC:0,
                                                  MAT:0,
                                                  UHML:0,
                                                  UI  :0,                       
                                                  SF	:0,
                                                  STR	:0,
                                                  ELG	:0,
                                                  TIPO:0,
                                                  TrAr:0,  
                                                  TotFardosMistura:   0,
                                                  TotFardos_selec:    0,
                                                  TotalTestadoMistura:0,
                                                  TotFardosEstoque:   aFardos[j].estoque                                        

                                        }

                                        this.aResumoProdutor.push(objResumoProdutor); 

                                  }                                    
                                  //// Qualidade
                                  let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 

                                  if (objQualidade) {
                                            
                                         objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
          
                                  }else{


                                          let objResumoQualidade = {
                                            
                                                  qualidade: aFardos[j].m4QUAL,
                                                  SAC:0,
                                                  TRID:0,
                                                  PIM:0,
                                                  SC:0,
                                                  SCI:0,
                                                  MST:0,
                                                  MIC:0,
                                                  MAT:0,
                                                  UHML:0,
                                                  UI  :0,                       
                                                  SF	:0,
                                                  STR	:0,
                                                  ELG	:0,
                                                  TIPO:0,
                                                  TrAr:0,  
                                                  TotFardosMistura:   0,
                                                  TotFardos_selec:    0,
                                                  TotalTestadoMistura:0,
                                                  TotFardosEstoque:   aFardos[j].estoque                                        

                                        }

                                        this.aResumoQualidade.push(objResumoQualidade); 

                                  }    

                          } // Final com quantidade selecionada


                  }else{  //// Nao testados



                          //// Estoque por qualidade
                          let objEstQual = this.aEstoqueQualidade.find(objEstQual => objEstQual.qualidade === aFardos[j].m4QUAL); 
                           

                          if (objEstQual) { 
                                 objEstQual.TotFardosEstoque     += aFardos[j].estoque;  
                          }else{ 

                                  let objEstkQualidade = {
                                    
                                          qualidade: aFardos[j].m4QUAL, 
                                          TotalTestadoMistura:0,
                                          TotFardosEstoque:   aFardos[j].estoque                                        

                                }

                                this.aEstoqueQualidade.push(objEstkQualidade);  
                          }  



                          //// Estoque por produtor
                          let objEstProd = this.aEstoqueProdutor.find(objEstProd => objEstProd.produtor === aFardos[j].produt); 
                           

                          if (objEstProd) { 
                                    objEstProd.TotFardosEstoque     += aFardos[j].estoque;   
                          }else{


                                  let objEstkProdutor = {
                                    
                                        produtor: aFardos[j].produt,
                                        SAC:0,
                                        TRID:0,
                                        PIM:0,
                                        SC:0,
                                        SCI:0,
                                        MST:0,
                                        MIC:0,
                                        MAT:0,
                                        UHML:0,
                                        UI  :0,                       
                                        SF	:0,
                                        STR	:0,
                                        ELG	:0,
                                        TIPO:0,
                                        TrAr:0,  
                                        TotFardosMistura:   0,
                                        TotFardos_selec:    0,
                                        TotalTestadoMistura:0,
                                        TotFardosEstoque:   aFardos[j].estoque                                        

                                }

                                this.aEstoqueProdutor.push(objEstkProdutor); 

                          }  







                          //console.log('Forma Array Produtor 3333')
                          /// Sem teste
                           if(aFardos[j].qtde){
                                
                                // Com quantidade seleciona e testado
  
                                let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
  
                                if (objMistura) {
                
                                      
                                          objMistura.TotFardosMistura     += aFardos[j].qtde;
                                          objMistura.TotFardos_selec      += aFardos[j].qtde;                                          
                                          objMistura.TotFardosEstoque     += aFardos[j].estoque;   
  
        
                                }else{
  
  
                                        let objResumoMistura = {

                                                 mistura: this.mistura.numeroMistura,
                                                 SAC:0,
                                                 TRID:0,
                                                 PIM:0,
                                                 SC:0,
                                                 SCI:0,
                                                 MST:0,
                                                 MIC:0,
                                                 MAT:0,
                                                 UHML:0,
                                                 UI  :0,                       
                                                 SF	:0,
                                                 STR	:0,
                                                 ELG	:0,
                                                 TIPO:0,
                                                 TrAr:0,  
                                                 TotFardosMistura:   aFardos[j].qtde,
                                                 TotFardos_selec:    aFardos[j].qtde,
                                                 TotalTestadoMistura: 0,
                                                 TotFardosEstoque:   aFardos[j].estoque,                                       
  
                                      }
  
                                      this.aResumoMistura.push(objResumoMistura); 
  
                                }  

                                /// Produtor
                                let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 

                                if (objProdutor) {
                
                                          //console.log('Forma Array Produtor 2222')
                                          objProdutor.TotFardosMistura     += aFardos[j].qtde;
                                          objProdutor.TotFardos_selec      += aFardos[j].qtde;                                          
                                          objProdutor.TotFardosEstoque     += aFardos[j].estoque;   

                                          //console.log(this.aResumoProdutor)
  
        
                                }else{
  
                                        //console.log('Forma Array Produtor 1111')

                                        let objResumoProdutor = {

                                                 produtor: aFardos[j].produt,
                                                 SAC:0,
                                                 TRID:0,
                                                 PIM:0,
                                                 SC:0,
                                                 SCI:0,
                                                 MST:0,
                                                 MIC:0,
                                                 MAT:0,
                                                 UHML:0,
                                                 UI  :0,                       
                                                 SF	:0,
                                                 STR	:0,
                                                 ELG	:0,
                                                 TIPO:0,
                                                 TrAr:0,  
                                                 TotFardosMistura:   aFardos[j].qtde,
                                                 TotFardos_selec:    aFardos[j].qtde,
                                                 TotalTestadoMistura: 0,
                                                 TotFardosEstoque:   aFardos[j].estoque,                                       
  
                                      }
  
                                      this.aResumoProdutor.push(objResumoProdutor); 
                                      //console.log(this.aResumoProdutor)
  
                                }  



                                /// Qualidade
                                let objQualidade= this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 

                                if (objQualidade) {
                
                                          //console.log('Forma Array Produtor 2222')
                                          objQualidade.TotFardosMistura     += aFardos[j].qtde;
                                          objQualidade.TotFardos_selec      += aFardos[j].qtde;                                          
                                          objQualidade.TotFardosEstoque     += aFardos[j].estoque;   

                                          
  
        
                                }else{
  
                                       

                                        let objResumoQualidade = {

                                                 qualidade: aFardos[j].m4QUAL,
                                                 SAC:0,
                                                 TRID:0,
                                                 PIM:0,
                                                 SC:0,
                                                 SCI:0,
                                                 MST:0,
                                                 MIC:0,
                                                 MAT:0,
                                                 UHML:0,
                                                 UI  :0,                       
                                                 SF	:0,
                                                 STR	:0,
                                                 ELG	:0,
                                                 TIPO:0,
                                                 TrAr:0,  
                                                 TotFardosMistura:   aFardos[j].qtde,
                                                 TotFardos_selec:    aFardos[j].qtde,
                                                 TotalTestadoMistura: 0,
                                                 TotFardosEstoque:   aFardos[j].estoque,                                       
  
                                      }
  
                                      this.aResumoQualidade.push(objResumoQualidade); 
                            
  
                                }  

                            
                            }else {    // Final com  quantidade selecionada
  
                                    
                                    // // Sem quantidade seleciona e testado
                                    //// Mistura
                                    let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
  
                                    if (objMistura) { 
   
                                              objMistura.TotFardosEstoque     += aFardos[j].estoque;  
            
                                    }else{
  
  
                                            let objResumoMistura = {
                                              
                                                    mistura: this.mistura.numeroMistura,
                                                    SAC:0,
                                                    TRID:0,
                                                    PIM:0,
                                                    SC:0,
                                                    SCI:0,
                                                    MST:0,
                                                    MIC:0,
                                                    MAT:0,
                                                    UHML:0,
                                                    UI  :0,                       
                                                    SF	:0,
                                                    STR	:0,
                                                    ELG	:0,
                                                    TIPO:0,
                                                    TrAr:0,  
                                                    TotFardosMistura:   0,
                                                    TotFardos_selec:    0,
                                                    TotalTestadoMistura:0,
                                                    TotFardosEstoque:   aFardos[j].estoque                                        
  
                                          }
  
                                          this.aResumoMistura.push(objResumoMistura); 
  
                                    }  

                                    // // Sem quantidade selecionada e testado
                                
                                    /// Produtor
                                    let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 

                                    if (objProdutor) {
   
                                            objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
            
                                    }else{
  
  
                                            let objResumoProdutor = {
                                              
                                                    produtor: aFardos[j].produt,
                                                    SAC:0,
                                                    TRID:0,
                                                    PIM:0,
                                                    SC:0,
                                                    SCI:0,
                                                    MST:0,
                                                    MIC:0,
                                                    MAT:0,
                                                    UHML:0,
                                                    UI  :0,                       
                                                    SF	:0,
                                                    STR	:0,
                                                    ELG	:0,
                                                    TIPO:0,
                                                    TrAr:0,  
                                                    TotFardosMistura:   0,
                                                    TotFardos_selec:    0,
                                                    TotalTestadoMistura:0,
                                                    TotFardosEstoque:   aFardos[j].estoque                                        
  
                                          }
  
                                          this.aResumoProdutor.push(objResumoProdutor); 
  
                                    }                                  
                                    
                                    /// Qualidade
                                    let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.produtor ===  aFardos[j].m4QUAL); 

                                    if (objQualidade) {
   
                                           objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
            
                                    }else{
  
  
                                            let objResumoQualidade = {
                                              
                                                    produtor: aFardos[j].produt,
                                                    SAC:0,
                                                    TRID:0,
                                                    PIM:0,
                                                    SC:0,
                                                    SCI:0,
                                                    MST:0,
                                                    MIC:0,
                                                    MAT:0,
                                                    UHML:0,
                                                    UI  :0,                       
                                                    SF	:0,
                                                    STR	:0,
                                                    ELG	:0,
                                                    TIPO:0,
                                                    TrAr:0,  
                                                    TotFardosMistura:   0,
                                                    TotFardos_selec:    0,
                                                    TotalTestadoMistura:0,
                                                    TotFardosEstoque:   aFardos[j].estoque                                        
  
                                          }
  
                                          this.aResumoQualidade.push(objResumoQualidade); 
  
                                    }                                       

  
  
                            } // Final com/sem quantidade selecionada

                  } // Final dos testados/nao testados
 
              
          } // Fim do for principal

          if((this.mistura.quantidade!=elemento.total_mist_util) && elemento.qtde  >0 ){ 
              if(( elemento.disponivel - (elemento.qtde * (this.mistura.quantidade-elemento.total_mist_util)) ) >= 0  ){
                elemento.corLinha ="white";
              }else{
                elemento.corLinha ="AntiqueWhite";
              }
          }

          // Pondera Mistura
          for (let j = 0; j < this.aResumoMistura.length; j++) {  
             
             //console.log(aFardos[j]);
             
             if(this.aResumoMistura[j].TotalTestadoMistura != null && this.aResumoMistura[j].TotalTestadoMistura > 0 ){

                
                  this.aResumoMistura[j].SAC    = this.aResumoMistura[j].SAC   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].TRID   = this.aResumoMistura[j].TRID  / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].PIM    = this.aResumoMistura[j].PIM   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].SC     = this.aResumoMistura[j].SC    / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].SCI    = this.aResumoMistura[j].SCI   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].MST    = this.aResumoMistura[j].MST   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].MIC    = this.aResumoMistura[j].MIC   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].MAT    = this.aResumoMistura[j].MAT   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].UHML   = this.aResumoMistura[j].UHML  / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].UI     = this.aResumoMistura[j].UI    / this.aResumoMistura[j].TotalTestadoMistura ;                       
                  this.aResumoMistura[j].SF	    = this.aResumoMistura[j].SF    / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].STR	  = this.aResumoMistura[j].STR   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].ELG	  = this.aResumoMistura[j].ELG   / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].TIPO   = this.aResumoMistura[j].TIPO  / this.aResumoMistura[j].TotalTestadoMistura ;
                  this.aResumoMistura[j].TrAr   = this.aResumoMistura[j].TrAr  / this.aResumoMistura[j].TotalTestadoMistura ; 


        
             }    
          
          }   
          // Pondera Produtor
          for (let j = 0; j < this.aResumoProdutor.length; j++) {  
             
             //console.log(aFardos[j]);
             
             if(this.aResumoProdutor[j].TotalTestadoMistura != null && this.aResumoProdutor[j].TotalTestadoMistura > 0 ){

                
                  this.aResumoProdutor[j].SAC    = this.aResumoProdutor[j].SAC   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].TRID   = this.aResumoProdutor[j].TRID  / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].PIM    = this.aResumoProdutor[j].PIM   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].SC     = this.aResumoProdutor[j].SC    / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].SCI    = this.aResumoProdutor[j].SCI   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].MST    = this.aResumoProdutor[j].MST   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].MIC    = this.aResumoProdutor[j].MIC   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].MAT    = this.aResumoProdutor[j].MAT   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].UHML   = this.aResumoProdutor[j].UHML  / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].UI     = this.aResumoProdutor[j].UI    / this.aResumoProdutor[j].TotalTestadoMistura ;                       
                  this.aResumoProdutor[j].SF	    = this.aResumoProdutor[j].SF    / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].STR	  = this.aResumoProdutor[j].STR   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].ELG	  = this.aResumoProdutor[j].ELG   / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].TIPO   = this.aResumoProdutor[j].TIPO  / this.aResumoProdutor[j].TotalTestadoMistura ;
                  this.aResumoProdutor[j].TrAr   = this.aResumoProdutor[j].TrAr  / this.aResumoProdutor[j].TotalTestadoMistura ; 


        
             }    
          
          }                 
          // Pondera Estoque Produtor
          for (let j = 0; j < this.aEstoqueProdutor.length; j++) {  
             
             //console.log(aFardos[j]);
             
             if(this.aEstoqueProdutor[j].TotalTestadoMistura != null && this.aEstoqueProdutor[j].TotalTestadoMistura > 0 ){

                
                  this.aEstoqueProdutor[j].SAC    = this.aEstoqueProdutor[j].SAC   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].TRID   = this.aEstoqueProdutor[j].TRID  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].PIM    = this.aEstoqueProdutor[j].PIM   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].SC     = this.aEstoqueProdutor[j].SC    / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].SCI    = this.aEstoqueProdutor[j].SCI   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].MST    = this.aEstoqueProdutor[j].MST   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].MIC    = this.aEstoqueProdutor[j].MIC   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].MAT    = this.aEstoqueProdutor[j].MAT   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].UHML   = this.aEstoqueProdutor[j].UHML  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].UI     = this.aEstoqueProdutor[j].UI    / this.aEstoqueProdutor[j].TotalTestadoMistura ;                       
                  this.aEstoqueProdutor[j].SF	    = this.aEstoqueProdutor[j].SF    / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].STR	  = this.aEstoqueProdutor[j].STR   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].ELG	  = this.aEstoqueProdutor[j].ELG   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].TIPO   = this.aEstoqueProdutor[j].TIPO  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                  this.aEstoqueProdutor[j].TrAr   = this.aEstoqueProdutor[j].TrAr  / this.aEstoqueProdutor[j].TotalTestadoMistura ; 


        
             }    
          
          }  
 
         
          this.totalFardosMistura = somaFardosMistura;
          this.totalFardosEstoque = somaFardosEstoque;

        },
        async populaForm(){    

                 this.resultado = ""; 
                 let retornoPopForm=false;  
                 let objItem;
                 let url;
                 let corItem;
                
                 if(this.mistura.numeroMistura!=''){
                    if(this.$store.state.usuarioSistema.idfil == '05'){
                      url = `${process.env.VUE_APP_BASE_URL}/estoquemp/mistura/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}/${this.mistura.destino}`                    
                    }else{
                      url = `${process.env.VUE_APP_BASE_URL}/estoquemp/mistura/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}/T`
                    } 

                 }else{
                    if(this.$store.state.usuarioSistema.idfil == '05'){
                         url = `${process.env.VUE_APP_BASE_URL}/estoquemp/mistura/${this.$store.state.usuarioSistema.idfil}/9999999/${this.mistura.destino}`                    
                    }else{
                         url = `${process.env.VUE_APP_BASE_URL}/estoquemp/mistura/${this.$store.state.usuarioSistema.idfil}/9999999/T`
                    } 
                    this.mistura.statusMistura='A';

                 }


                 

                  //console.log('url') 
                  //console.log(url)  

                  this.numItem = 0; 
                  this.aMisturaItem = [];
                  this.msgProcessamento = "Processando" ;
                  this.apiProcessamento()  ;

                  this.misturaParamDTO =  {}; 
 
                   
                  await this.axios.get(url,this.apiTokenHeader()) 
                  .then(response => {

                       //console.log("PopulaForm");
                      this.resultado = response.data;  
                      
                       //console.log(this.resultado);

 
                          if(this.resultado){  


                                  let aItens =  this.resultado; 
                               
                                  for (let i = 0; i < aItens.length; i++) {  

                                      //console.log(aItens[i]);
                                      //console.log((aItens[i].disponivel - (aItens[i].qtde * (10-aItens[i].total_mist_util)) ));

                                      corItem='white';
                                      //if(aItens[i].disponivel){  
                                        if((this.mistura.quantidade!=aItens[i].total_mist_util) && aItens[i].qtde > 0){
  
                                            if (  (aItens[i].disponivel - (aItens[i].qtde * (this.mistura.quantidade-aItens[i].total_mist_util)) ) >= 0  ){
                                                corItem='white';
                                            }else{
                                                corItem='AntiqueWhite';
                                            }
                                        }
                                      //}

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
                                                corLinha: corItem                                           
                                                


                                      } 
                                      this.aComposicao.push(objItem);
                                    }
                                    
                            }    
                            
                            
                  }  
                  
                  )

                  this.msgProcessamento = ""    
                  this.oper = 'A'               
                  this.configuraCampos('A')  ;
                  retornoPopForm = true;
                  this.calculaTotais(this.aComposicao,0 )
                  return  retornoPopForm;                 
        }
                            

     } , 
      
     async created(){   

    

            this.msgProcessamento = '';
            this.scrollToTop();
    
      }
  
      ,
    mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
       this.populaMisturasAbertas();
       this.operMist='I'
       if(this.$store.state.usuarioSistema.idfil=='05'){
          this.numeroMisturaDesabilitado = false;

       }else{
          this.numeroMisturaDesabilitado = true;

       } 
        this.oper = 'I'
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
 
   
  
  </style>
  
    