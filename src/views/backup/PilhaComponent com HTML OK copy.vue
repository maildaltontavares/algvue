<template>   

<v-form  ref="formulario"   style=" background-color:white;height:100% "  >    

   <!-- <v-container style="width:100%;background-color:white"  >--> 
   
           <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
               <div  style="width:100%"  > 
                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   
                        
                        <div    class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>{{this.titulo}}</b></p>                               
                            </div> 
                        </div>    


                        <div class=" d-flex justify-content-end"   style=" height:45px;margin-right: 10px; "  
                        v-if="this.$store.state.tipoDispositivo == 'desktop' " >   
                           
                                <v-btn @click="this.pesquisaDados()"   style="height:47px;width:280px;margin-top: 15px;background-color:rgb(240, 237, 232);"
                                :disabled="acaoDesabilitado"
                                v-if="this.$store.state.tipoDispositivo == 'desktop' "  >

                                    <v-icon left                                               
                                        color="primary"
                                        icon="mdi-plus-box-outline"
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

                        

                              <div    class="espacoEntreComponentes"    >  

                                  <v-autocomplete

                                      label="Operacao"
                                      :items="operMistItens"      
                                      v-model.trim="this.operMist"  
                                      item-title="descricao" 
                                      item-value="codigo"
                                      variant="outlined"
                                      style=" width: 160px; "
                                      bg-color="white"   
                                      density="compact"
                                      @blur="trocaOperMist()"
                                      :disabled="operMistDesabilitado"
                                      

                                  ></v-autocomplete> 

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


        
                          </div>      


                  </template>

                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->
                  <!-- Final Painel Unir Pilhas -->                                      
                    
                    



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
                          <div class="container-fluid"  style=" height:200px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="22" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA PILHA</th> 
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
<!--                                          
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
-->                                          
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-start tabGrid" >Estoque</th>  
                                          <th class="col-1 text-start tabGrid" >Qtde Selec</th>  
                                          <th class="col-1 text-start tabGrid" >%M</th>  
                                          <th class="col-1 text-start tabGrid" >%P</th>  
                                          <th class="col-1 text-start tabGrid" >Testados</th>  
                                          <th class="col-1 text-start tabGrid" >Não Testados</th> 

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
                                        <!--
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TIPO).toFixed(2) }}
                                                </td>                                                                                           
                                              -->                
                                                <td class="col-1 text-start tabGridCol"  >
                                                  {{ (i.TrAr).toFixed(2) }}
                                                </td>   

                                                <td class="col-1 text-end tabGridCol" >
                                                  {{ this.apiFormataNumero(i.TotFardosEstoque ,0) }}
                                                </td>                                            

                                                <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                                  {{ i.TotFardos_selec }}
                                                </td>    

                                                <td class="col-1 text-end tabGridCol"   >
                                                  {{ ( ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2)) }}
                                                </td>                                             
                                              

                                                <td class="col-1 text-end tabGridCol"  style="color:blue"  >
                                                  {{ ( ((i.TotFardos_selec / i.TotFardosEstoque )*100).toFixed(2)) }}
                                                </td>                                            

                                                <td class="col-1 text-end tabGridCol"  >
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

                    <!-- ///Final Resumo Pilha -->  
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                    <!-- ///Final Resumo Pilha -->
                     
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
                                      <th class="col-2 text-start" >RD</th>  
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
                                        {{ i.m4DEST + '-' +  i.m4COLOR +   i.m4TPMIC}}
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
                                              style=" width: 100px;height: 30px;border:solid 1px ;text-align: center;font-size:16px;border-radius:5px 5px 5px 5px; "   
                                              @change="calculaTotais(this.aComposicao,i )"
                                              @focus="calculaTotais(this.aComposicao,i )"


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

                                    <div class="col-3 div_rodape d-flex justify-content-end"  v-if="this.$store.state.tipoDispositivo == 'desktop'"  >
   
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if=" (this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalFardos == this.totalFardosMistura && this.mistura.numeroMistura!= null && this.mistura.numeroMistura != '' &&  this.totalFardosMistura >0  && this.operMist != 'C'"  @click="exibeModal('liberarProducao','Mistura será gravada com esta composição e liberada para producao. Confirma?',['S','N'],'aviso'  )"><u>L</u>iberar</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if="this.mistura.statusMistura!='A' &&  this.mistura.statusMistura!=null &&  this.mistura.statusMistura!='' && this.operMist == 'A' &&  this.totalFardosMistura >0 "  @click="exibeModal('reabrir','Mistura será reaberta. Confirma?',['S','N'],'aviso'  )"><u>R</u>eabrir</v-btn> 
                                        <v-btn color="secondary" class="botao_rodape" style=" min-width: 70px;"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalMisturasUtilizadas==0 && this.acaoDesabilitado==true   && this.mistura.numeroMistura != ''  && this.totalFardosMistura >0  "  accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"    accesskey="s" @click="submitForm('S')"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.acaoDesabilitado==true   && this.operMist != 'C' &&   this.totalFardosMistura >0 "><u>S</u>alvar</v-btn>
                                        
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ova Operação</v-btn>                                   

                                    </div>  



                              </template>   
  
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
            destino:'',
            totalMisturasUtilizadas:0,


        },        


        destinoItens:[
            {'codigo':'D','descricao':'DENIM'},
            {'codigo':'V','descricao':'VENDA'} ,
            {'codigo':'T','descricao':'TODOS'} 

        ], 

        operMistItens:[
            {'codigo':'I','descricao':'Incluir'},
            {'codigo':'A','descricao':'Alterar'} ,
            {'codigo':'C','descricao':'Consultar'} 

        ],         

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
        confirmaBaixaDesabilitado:false,

        misturasAbertas: [],
        misturasAbertasTemp:{ 
            codigo:'' 
        },

        misturasABaixar: [],
        misturasABaixarTemp:{ 
            codigo:'' 
        },        
        aResult:[],
        nomeDestino:'TODOS',
        nPesoMovimento:0,
        
         
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

                  this.misturasABaixarDesabilitado=false;
 
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
              this.misturasABaixarDesabilitado=true;
            }

          },
 
        trocaOperMist(){    

              //console.log('trocaOperMist')

              this.mistura.numeroMistura = ''; 
              this.misturasAbertas=[];
              

              if(this.$store.state.usuarioSistema.idfil=='05' || this.operMist=='C'){
                    this.numeroMisturaDesabilitado=false;
              }else{
                   if(this.operMist=='I')
                      this.numeroMisturaDesabilitado=true;                
                    else{
                      this.numeroMisturaDesabilitado=false; 
                    } 
              }
              //console.log(this.operMist)

              if(this.operMist=='I'){
                this.simNaoRetorno == 'S';
                this.acaoDesabilitado=false; 
                this.resetarForm();

              }else if(this.operMist=='A'){

                this.acaoDesabilitado=true; 
                this.populaMisturasAbertas();
              }
/*              
              else if(this.operMist=='C'){

                this.acaoDesabilitado=true; 
                this.populaMisturasFull();
              }
*/
        }, 


        async exclusao() { 

            /// EXCLUSAO ////

            let url = `${process.env.VUE_APP_BASE_URL}/mp/excluir/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}`  

            if ( this.simNaoRetorno == 'S') {   
                     
                    this.axios.delete(url,this.apiTokenHeader() )
                    .then(response => {
                        this.simNaoRetorno = 'S';
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
                
                if(this.acaoSelecionadaProps!='B'){   
                   this.operMist='I'                ;
                   this.oper='I';
                }else{  // Baixas
                   this.operMist='A'                ;
                   this.oper='I'; 
                }  
                this.numeroMistura = '';

                this.confirmaBaixaDesabilitado=false; 
                
                this.configuraCampos('I' )  ;
               
                this.populaMisturasABaixar();
                this.scrollToTop();
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
                        } else if(this.acao == 'liberarProducao'){ 
                            this.submitForm('L');
                        } else if(this.acao == 'reabrir'){ 
                            this.reabrirMistura();
                        }else if(this.acao == 'confirmaDescida'){   
                            this.tratarBaixa();
                        }  
                        
                    }else{

                      if(this.acao == 'confirmaDescida'){
                        this.confirmaBaixaDesabilitado=false; 
                      }
                    }


            },     

            async tratarBaixa(){


                this.msgProcessamento = "Processando" ;
                this.apiProcessamento()  ; 

                const resposta = await this.baixarMistura();    
                if (resposta){ 
                  this.confirmaBaixaDesabilitado=false; 
                  this.msgProcessamento = "" ;
                }else{
                  this.confirmaBaixaDesabilitado=false;
                  this.msgProcessamento = "" ;
                }   


            },

            async reabrirMistura(){

                  let url = `${process.env.VUE_APP_BASE_URL}/mp/reabrir`;
                  let objMist;


                  objMist = { 
                    idfil:this.$store.state.usuarioSistema.idfil,
                    mistura:this.mistura.numeroMistura   
                    }
                  

                  await this.axios.post(
                      url,
                      JSON.stringify(objMist),
                      this.apiTokenHeader({ "Content-Type": "application/json" })
                  )
                  .then(response => { 

                      this.resultado = response.data;   
                      this.mistura.statusMistura = 'A';
                      this.apiDisplayMensagemSucesso('Mistura   ' + this.mistura.numeroMistura + '   reaberta com sucesso.' )   
                      
                  })
                  .catch(error => {
                      console.log("Erro: ", error.response.data); 
                      this.apiDisplayMensagem(error.response.data ) 
                  });    
             

            },
            async buscaLote(){

                 let validacaoOk;
                 validacaoOk = true;
                  
                 if  (!(this.mistura.loteFiacao==null || this.mistura.loteFiacao=='' || this.mistura.loteFiacao=='0')){
                  
                        this.mistura.loteFiacao = this.mistura.loteFiacao.padStart(10, '0'); 
                        

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
                        
                } 

                  return validacaoOk;  

          },

          async preparaMistura()  {

 


             let retornoPrepForm; 

             if((this.operMist=='I' && this.$store.state.usuarioSistema.idfil== '05') || this.operMist=='C' ){ 
                      if  (!(this.mistura.numeroMistura==null || this.mistura.numeroMistura=='' || this.mistura.numeroMistura=='0')){
                            this.mistura.numeroMistura = this.mistura.numeroMistura.padStart(10, '0'); 
                      } 

                      if(this.mistura.numeroMistura == '0000000000'){
                          this.mistura.numeroMistura = '';
                      } 
             }

             if(this.operMist!='I'){ 
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
                                        this.mistura.dataInclusao = this.resultado.dataInclusao; 
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
                                    
                                    if (this.resultado.totalUtilizadas != null){
                                       this.mistura.numMisturasLiberadas  = this.resultado.numMisturasLiberadas ; 
                                    }else{
                                       this.mistura.numMisturasLiberadas = 0 ;                       
                                    }                                    

                                                     

                                    this.mistura.destino = ''; 

                                    //console.log('UsuarioInclusao')
                                    //console.log(this.mistura)
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
                this.aResumoProdutorTotalizador=[];
                this.aProdutorSelecionado=[];
                this.aResumoQualidade=[];
                this.aEstoqueProdutor=[];
                this.aEstoqueQualidade=[]; 
                this.aEstoqueProdutorTotalizador=[];
                this.aEstoqueQualidadeTotalizador=[];  
                this.aResumoQualidadeTotalizador=[];
                this.acaoDesabilitado=true;                        


                let validacaoOk = true;  
                
                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {

                    //console.log('AAAAAAAAA')
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                   // periodoPreenchido  = false; 
                    validacaoOk = false; 
                    this.acaoDesabilitado=false; 
                } else {      
                  
                         //console.log('BBBBBB')

                        if (this.mistura.dataInicial != null && this.mistura.dataInicial != "" && 
                            this.mistura.dataFinal != null && this.mistura.dataFinal != "" ){
                     
                            if (this.mistura.dataFinal < this.mistura.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 
                            }  else{
                                 validacaoOk = true;  
                            } 
                           
                        }  else{ 

                               validacaoOk = false;  
                               this.acaoDesabilitado=false; 
                        } 


                        if((this.mistura.statusMistura=='A' || this.mistura.statusMistura==null  || this.operMist == 'I' )  || this.acaoSelecionadaProps=='B'){

                          

                            if(this.mistura.quantidade <= this.mistura.totalMisturasUtilizadas){
                                  this.apiDisplayMensagem("Quantidade deve ser maior que o numero de misturas utilizadas" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 

                            }

                            if(this.mistura.quantidade <= 0){
                                  this.apiDisplayMensagem("Quantidade de misturas inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 

                            }                            

                            if(this.mistura.totalFardos <= 0){
                                  this.apiDisplayMensagem("Quantidade de fardos inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 

                            }                         
                            
                        } 
 
                           

                   
                        const resposta = await this.buscaLote();     
                        //console.log('Resposta')   
                        //console.log(resposta)  
                        if (resposta){
                             
                            if(resposta==false){ 
                                validacaoOk = false; 
                                this.acaoDesabilitado=false; 
                            }
                            
                        }else{
                            validacaoOk = false; 
                            this.acaoDesabilitado=false; 
                        }     
                       
                        if(validacaoOk) {
                             this.haErros = false
                             this.acaoDesabilitado=true; 
                             this.nomeDestino = this.destinoItens.find(objDestino => objDestino.codigo === this.mistura.destino)
                             this.populaForm();  
                        }else{
                          this.nomeDestino =''
                        }

                       

              }

              return validacaoOk
        },



       async confirmaBaixaMistura() {


              this.haErros = false
              this.haSucesso = false  
              this.mensagemSucesso = ''
              this.mensagemErro = ''              
              let validado;

              
            

              validado=true;
  
              let aFardos =  this.aComposicao;  

              this.validacao = await this.$refs.formulario.validate();   

              if (!this.validacao.valid){
                  validado = false;  
                  this.apiDisplayMensagem('Preencha os campos com críticas.');
                  this.haErros = true;
                  return;                  
              }                


              if( validado){
                      // Valida dados do corpo da mistura
                      for (let j = 0; j < aFardos.length; j++) {
                    
                            if( aFardos[j].qtde < 0 ){  
                                this.apiDisplayMensagem("Quantidade do lote " + aFardos[j].lote + " do produtor " + aFardos[j].produt +  " inválida" );
                                this.haErros = true;
                                validado = false; 
                                
                            } 

                      }
              }

              this.confirmaBaixaDesabilitado=true;
              if(this.$store.state.usuarioSistema.idfil != '05' && validado){
                  if(this.totalFardosMistura > this.mistura.totalFardos  && this.totalFardosMistura <= this.mistura.totalFardos + 2){   
                            this.exibeModal('confirmaDescida', "Quantidade do fardos selecionados difere da quantidade prevista em " + (this.totalFardosMistura -this.mistura.totalFardos).toString() + ". Confirma?" ,['S','N'] ,'aviso') 
                  }else{
                      if((this.totalFardosMistura > this.mistura.totalFardos && this.totalFardosMistura > 0)){
                          this.apiDisplayMensagem("Quantidade do fardos selecionados difere da quantidade prevista." );
                          this.haErros = true;
                          validado = false;  
                          this.confirmaBaixaDesabilitado=false;
                      }else if((this.totalFardosMistura < this.mistura.totalFardos && this.totalFardosMistura > 0)){
                          this.apiDisplayMensagem("Quantidade do fardos selecionados difere da quantidade prevista." );
                          this.haErros = true;
                          validado = false;  
                          this.confirmaBaixaDesabilitado=false;
                      }else{ 
                        this.exibeModal('confirmaDescida', 'Confirma descida da mistura?'  ,['S','N'] ,'sucesso') 
                      }

                  }
              }else if(this.$store.state.usuarioSistema.idfil == '05' && validado){

                  if(this.totalFardosMistura < this.mistura.totalFardos  && this.totalFardosMistura >= this.mistura.totalFardos - 2){                                    
                        this.exibeModal('confirmaDescida', "Quantidade do fardos selecionados difere da quantidade prevista em " + (this.mistura.totalFardos - this.totalFardosMistura).toString() + "."  + ". Confirma?" ,['S','N'] ,'aviso');               
                  }else{
                      if((this.totalFardosMistura > this.mistura.totalFardos && this.totalFardosMistura > 0)){
                          this.apiDisplayMensagem("Quantidade do fardos selecionados difere da quantidade prevista." );
                          this.haErros = true;
                          validado = false;  
                          this.confirmaBaixaDesabilitado=false;
                        }else if((this.totalFardosMistura < this.mistura.totalFardos && this.totalFardosMistura > 0)){
                          this.apiDisplayMensagem("Quantidade do fardos selecionados difere da quantidade prevista." );
                          this.haErros = true;
                          validado = false;  
                          this.confirmaBaixaDesabilitado=false;
                      }else{
                        this.exibeModal('confirmaDescida', 'Confirma descida da mistura?'  ,['S','N'] ,'sucesso') 
                      }

                  }                



              } 


       },




       async baixarMistura() {


              this.haErros = false
              this.haSucesso = false  
              this.mensagemSucesso = ''
              this.mensagemErro = ''
              let objItem; 
              let validado;
              let objMist;
              let result;

              validado=true;
              this.aMisturaFinal=[];
              this.aMisturaItemFinal=[]; 

              result = false; 
           
               if(validado){ 

 
                  let aFardos =  this.aComposicao;                  

                  for (let j = 0; j < aFardos.length; j++) {
                        
                        if( aFardos[j].qtde  > 0 ){   
                                  objItem={

                                        idfil:this.$store.state.usuarioSistema.idfil,
                                        mistura:this.mistura.numeroMistura,	
                                        idItem:aFardos[j].m4ID,
                                        quantidade:aFardos[j].qtde,  
                                        usuarioInclusao: this.$store.state.usuarioSistema.codigo,
                                        usuarioAlteracao: this.$store.state.usuarioSistema.codigo 

                                    }  
                                    this.aMisturaItemFinal.push(objItem); 
                        } 

                    }

                    objMist = {

                          idfil:this.$store.state.usuarioSistema.idfil,
                          mistura:this.mistura.numeroMistura,	 
                          lote:this.mistura.loteFiacao	,
                          status:this.mistura.statusMistura,
                          pesoTotal:this.apiConverteNumeroFormatado(this.nPesoMovimento),
                          numFardos:this.totalFardosMistura,  
                          usuarioInclusao: this.$store.state.usuarioSistema.codigo,
                          usuarioAlteracao: this.$store.state.usuarioSistema.codigo  ,  
                          misturaPadraoItemDTO:this.aMisturaItemFinal, 
                          dataInicial: null,
                          dataFinal: null,
                          totalMisturas: this.mistura.quantidade,
                          dataInclusao:null,
                          dataAlteracao:null,
                          numMisturasLiberadas: this.mistura.numMisturasLiberadas,
                          observacao:null  

                    }
                    
                    this.aMisturaFinal=objMist;   

                    //console.log('Baixar Mistura')
                    //console.log(this.aMisturaFinal)


                    let url = `${process.env.VUE_APP_BASE_URL}/mp/baixar`; 

                    await this.axios.post(
                        url,
                        JSON.stringify(this.aMisturaFinal),
                        this.apiTokenHeader({ "Content-Type": "application/json" })
                    )
                    .then(response => { 

                        this.resultado = response.data;  
                        
                        //console.log('Baixar')
                        //console.log(this.resultado)
                        this.apiDisplayMensagemSucesso('Mistura   ' + this.resultado + ' baixada com sucesso.' )   
                        this.simNaoRetorno = 'S';
                        this.resetarForm();
                        this.populaMisturasABaixar();
                        result = true;
                            
                    })
                    .catch(error => {
                        console.log("Erro: ", error.response.data); 
                        this.apiDisplayMensagem(error.response.data ) 
                    });    


              }

              return result;


       },
 
       
       async submitForm(pAcao) {   

              this.haErros = false
              this.haSucesso = false  
              this.mensagemSucesso = ''
              this.mensagemErro = ''
              let objItem; 
              let validado;
              let objMist;
              let numLiberadas;

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
                        let statusMist;
                        //let dataAlteracao;
                        let dataAtual = new Date();
                        let dia = String(dataAtual.getDate()).padStart(2, '0');
                        let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é baseado em zero, portanto, é necessário adicionar 1
                        let ano = dataAtual.getFullYear();
                        let dataFormatada = `${dia}/${mes}/${ano}`;  
                        //let dataFormatada = `${ano}-${mes}-${dia}`;  
                        
                        

                        if(this.operMist=="A"){ 
                            if (typeof this.mistura.dataInclusao   === "string") {

                                //console.log('11111')
                                //console.log(this.mistura.dataInclusao );


                                dataInsercao  = this.mistura.dataInclusao ;
                            } else if (this.mistura.dataInclusao  instanceof Date) {
                                 //console.log('22222222')
                                //console.log(this.mistura.dataInclusao );                                
                              
                              
                              dataInsercao  = this.$moment(this.mistura.dataInclusao.format("DD/MM/YYYY")  )

                              //console.log(dataInsercao);   
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
                                              dataInclusao:     dataFormatada,
                                              usuarioInclusao:  this.mistura.usuarioInclusao,
                                              usuarioAlteracao: this.$store.state.usuarioSistema.codigo 

                                          } 
                                  } 
                                  
                                  this.aMisturaItemFinal.push(objItem);
                              } 

                        } 

                        if(pAcao=='S'){
                            statusMist = 'A'   
                            numLiberadas = 0                          
                        }else{ 
                          statusMist = 'L'
                          numLiberadas = this.mistura.quantidade; 
                        }       



                        if(this.operMist=='I'){ 
 

                              objMist = {

                                  idfil:this.$store.state.usuarioSistema.idfil,
                                  mistura:this.mistura.numeroMistura,	
                                  lote:this.mistura.loteFiacao	,
                                  status:statusMist,
                                  dataInicial:this.$moment(this.mistura.dataInicial).format("DD/MM/YYYY"), 
                                  dataFinal:this.$moment(this.mistura.dataFinal).format("DD/MM/YYYY"),  
                                  totalMisturas:this.mistura.quantidade,  
                                  observacao:this.mistura.observacao,	 
                                  numFardos:this.mistura.totalFardos, 
                                  misturaPadraoItemDTO:this.aMisturaItemFinal,  
                                  usuarioInclusao: this.$store.state.usuarioSistema.codigo,
                                  usuarioAlteracao: this.$store.state.usuarioSistema.codigo,
                                  numMisturasLiberadas: numLiberadas,

                              } 

                              this.mistura.usuarioInclusao = this.$store.state.usuarioSistema.codigo;
                              
                              dataInsercao = dataFormatada;
                              this.mistura.dataInclusao  = dataInsercao; //this.$moment(dataAtual).format("DD/MM/YYYY") ;


                        }else{ 

                              objMist = {

                                  idfil:this.$store.state.usuarioSistema.idfil,
                                  mistura:this.mistura.numeroMistura,	
                                  lote:this.mistura.loteFiacao	,
                                  status:statusMist,
                                  dataInicial:this.$moment(this.mistura.dataInicial).format("DD/MM/YYYY"), 
                                  dataFinal:this.$moment(this.mistura.dataFinal).format("DD/MM/YYYY"),  
                                  totalMisturas:this.mistura.quantidade,  
                                  observacao:this.mistura.observacao,	 
                                  numFardos:this.mistura.totalFardos, 
                                  misturaPadraoItemDTO:this.aMisturaItemFinal,  
                                  usuarioInclusao: this.mistura.usuarioInclusao, 
                                  usuarioAlteracao: this.$store.state.usuarioSistema.codigo,
                                  dataInclusao: this.mistura.dataInclusao,
                                  numMisturasLiberadas: numLiberadas,

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
                                    if(pAcao=='S'){
                                         this.apiDisplayMensagemSucesso('Mistura   ' + this.mistura.numeroMistura + '   inserida com sucesso.' )  
                                    }else{
                                         this.mistura.statusMistura = 'L'
                                         this.apiDisplayMensagemSucesso('Mistura   ' + this.mistura.numeroMistura + '   inserida e liberada com sucesso.' )  
                                    }
                                    

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
                                    if(pAcao=='S'){
                                       this.apiDisplayMensagemSucesso('Mistura alterada com sucesso.' ) 
                                    }else{
                                      this.mistura.statusMistura = 'L'
                                       this.apiDisplayMensagemSucesso('Mistura alterada e liberada com sucesso.' ) 
                                    }

                                        
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data); 
                                    this.apiDisplayMensagem(error.response.data ) 
                                });   


                        } 

                        //console.log('submit');
                        //console.log(this.aMisturaFinal);

            } // fim validado
 
        
        },

 
        calculaCor(pComposicao){

              let aFardos =  pComposicao; 
          
              if(this.acaoSelecionada=='B'){

                  for (let j = 0; j < aFardos.length; j++) {

                      if(aFardos[j].qtde  !=0){
                          if((this.mistura.quantidade!=aFardos[j].total_mist_util) && aFardos[j].qtde  >0 ){ 
                              if((( aFardos[j].disponivel -  aFardos[j].qtde ) >= 0 )  ){
                                aFardos[j].corLinha ="white";
                              }else{
                                aFardos[j].corLinha ="AntiqueWhite";
                              }
                          } 
                      } else{
                         aFardos[j].corLinha ="white"; 

                      } 

                  }


              }else{

                    for (let j = 0; j < aFardos.length; j++) {
                          if(aFardos[j].qtde  !=0){
                                if((this.mistura.quantidade!=aFardos[j].total_mist_util) && aFardos[j].qtde  >0 ){ 
                                    if((( aFardos[j].disponivel - (aFardos[j].qtde * (this.mistura.quantidade-aFardos[j].total_mist_util)) ) >= 0)    ){
                                      aFardos[j].corLinha ="white";
                                    }else{
                                      aFardos[j].corLinha ="AntiqueWhite";
                                    }
                                }  
                        }else{
                          aFardos[j].corLinha ="white";

                        }

                    }

                }


          
        },


        calculaTotais(pComposicao,elemento ){
           
          let aFardos =  pComposicao; 
          let somaFardosMistura;
          let somaFardosEstoque;
          let pesoMovimento;
           

          pesoMovimento = 0;
          this.nPesoMovimento = 0;

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
          this.aResumoProdutorTotalizador=[];
          this.aProdutorSelecionado=[];
          this.aResumoQualidade = [];
          this.aEstoqueProdutor = [];
          this.aEstoqueQualidade = [];
          this.aResumoQualidadeTotalizador=[];
          this.aEstoqueQualidadeTotalizador=[];  


          this.aEstoqueProdutorTotalizador = [];
          this.aEstoqueQualidadeTotalizador = [];          
          //console.log('calculaTotais')
          //console.log(pComposicao);
          //console.log(this.aComposicao);
          //console.log(elemento);

          for (let j = 0; j < aFardos.length; j++) {  
             
                  //console.log(aFardos[j]);
                  
                  if(aFardos[j].qtde != null && aFardos[j].qtde > 0 ){
                      somaFardosMistura+=aFardos[j].qtde;
                      pesoMovimento += aFardos[j].qtde * aFardos[j].m4PESMED;
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



          if(elemento.qtde  != 0 ){
                if(this.acaoSelecionada=='B'){
                      if((this.mistura.quantidade!=elemento.total_mist_util) && elemento.qtde  >0 ){ 
                            if(( elemento.disponivel -  elemento.qtde) >= 0  ){
                              elemento.corLinha ="white";
                            }else{
                              elemento.corLinha ="AntiqueWhite";
                            }
                        }

                }else{  
                        if((this.mistura.quantidade!=elemento.total_mist_util) && elemento.qtde  >0 ){ 
                            if(( elemento.disponivel - (elemento.qtde * (this.mistura.quantidade-elemento.total_mist_util)) ) >= 0  ){
                              elemento.corLinha ="white";
                            }else{
                              elemento.corLinha ="AntiqueWhite";
                            }
                        }
                } 
          }else{
            elemento.corLinha ="white";
          }

            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Produtor


            let objResumo  = {
                                                
                    produtor: '',
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
                    TotFardosEstoque:  0                                       

          }

          this.aResumoProdutorTotalizador.push(objResumo);  


          for (let j = 0; j < this.aResumoProdutor.length; j++) {  
              
              //console.log(aFardos[j]);
              
              

                
                  this.aResumoProdutorTotalizador[0].produtor = 'TOTAIS:';
                  this.aResumoProdutorTotalizador[0].SAC    += this.aResumoProdutor[j].SAC   ;
                  this.aResumoProdutorTotalizador[0].TRID   += this.aResumoProdutor[j].TRID  ;
                  this.aResumoProdutorTotalizador[0].PIM    += this.aResumoProdutor[j].PIM   ;
                  this.aResumoProdutorTotalizador[0].SC     += this.aResumoProdutor[j].SC    ;
                  this.aResumoProdutorTotalizador[0].SCI    += this.aResumoProdutor[j].SCI   ;
                  this.aResumoProdutorTotalizador[0].MST    += this.aResumoProdutor[j].MST   ;
                  this.aResumoProdutorTotalizador[0].MIC    += this.aResumoProdutor[j].MIC   ;
                  this.aResumoProdutorTotalizador[0].MAT    += this.aResumoProdutor[j].MAT   ;
                  this.aResumoProdutorTotalizador[0].UHML   += this.aResumoProdutor[j].UHML  ;
                  this.aResumoProdutorTotalizador[0].UI     += this.aResumoProdutor[j].UI    ;                       
                  this.aResumoProdutorTotalizador[0].SF	    += this.aResumoProdutor[j].SF    ;
                  this.aResumoProdutorTotalizador[0].STR	  += this.aResumoProdutor[j].STR   ;
                  this.aResumoProdutorTotalizador[0].ELG	  += this.aResumoProdutor[j].ELG   ;
                  this.aResumoProdutorTotalizador[0].TIPO   += this.aResumoProdutor[j].TIPO  ;
                  this.aResumoProdutorTotalizador[0].TrAr   += this.aResumoProdutor[j].TrAr  ; 

                  this.aResumoProdutorTotalizador[0].TotFardosMistura   += this.aResumoProdutor[j].TotFardosMistura  ; 
                  this.aResumoProdutorTotalizador[0].TotFardos_selec      += this.aResumoProdutor[j].TotFardos_selec  ; 

                  this.aResumoProdutorTotalizador[0].TotalTestadoMistura   += this.aResumoProdutor[j].TotalTestadoMistura  ; 
                  this.aResumoProdutorTotalizador[0].TotFardosEstoque      += this.aResumoProdutor[j].TotFardosEstoque  ;  


        
               
          
          } 


          /// Totais estoque Produtor
          /// Totais estoque Produtor
          /// Totais estoque Produtor
          /// Totais estoque Produtor
          /// Totais estoque Produtor


           objResumo  = {
                                              
                      produtor: '',
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
                      TotFardosEstoque:  0                                       
  
            }
  
            this.aEstoqueProdutorTotalizador.push(objResumo);  
  
  
            for (let j = 0; j < this.aEstoqueProdutor.length; j++) {  
                
                //console.log(aFardos[j]);
                
                
  
                  
                    this.aEstoqueProdutorTotalizador[0].produtor = 'TOTAIS:';
                    this.aEstoqueProdutorTotalizador[0].SAC    += this.aEstoqueProdutor[j].SAC   ;
                    this.aEstoqueProdutorTotalizador[0].TRID   += this.aEstoqueProdutor[j].TRID  ;
                    this.aEstoqueProdutorTotalizador[0].PIM    += this.aEstoqueProdutor[j].PIM   ;
                    this.aEstoqueProdutorTotalizador[0].SC     += this.aEstoqueProdutor[j].SC    ;
                    this.aEstoqueProdutorTotalizador[0].SCI    += this.aEstoqueProdutor[j].SCI   ;
                    this.aEstoqueProdutorTotalizador[0].MST    += this.aEstoqueProdutor[j].MST   ;
                    this.aEstoqueProdutorTotalizador[0].MIC    += this.aEstoqueProdutor[j].MIC   ;
                    this.aEstoqueProdutorTotalizador[0].MAT    += this.aEstoqueProdutor[j].MAT   ;
                    this.aEstoqueProdutorTotalizador[0].UHML   += this.aEstoqueProdutor[j].UHML  ;
                    this.aEstoqueProdutorTotalizador[0].UI     += this.aEstoqueProdutor[j].UI    ;                       
                    this.aEstoqueProdutorTotalizador[0].SF	   += this.aEstoqueProdutor[j].SF    ;
                    this.aEstoqueProdutorTotalizador[0].STR	   += this.aEstoqueProdutor[j].STR   ;
                    this.aEstoqueProdutorTotalizador[0].ELG	   += this.aEstoqueProdutor[j].ELG   ;
                    this.aEstoqueProdutorTotalizador[0].TIPO   += this.aEstoqueProdutor[j].TIPO  ;
                    this.aEstoqueProdutorTotalizador[0].TrAr   += this.aEstoqueProdutor[j].TrAr  ; 
                    this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura   += this.aEstoqueProdutor[j].TotalTestadoMistura  ; 
                    this.aEstoqueProdutorTotalizador[0].TotFardosEstoque += this.aEstoqueProdutor[j].TotFardosEstoque  ; 
              
  
  
          
                     
            
            }   

            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Produtor
            /// Totais resumo mistura Qualidade
            /// Totais resumo mistura Qualidade
            /// Totais resumo mistura Qualidade


           objResumo  = {
                                                
                      qualidade: '',
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
                      TotFardosEstoque:  0                                       
  
            }
  
            this.aResumoQualidadeTotalizador.push(objResumo);  
  
  
            for (let j = 0; j < this.aResumoQualidade.length; j++) {  
                
                //console.log(aFardos[j]);
                
                
  
                  
                    this.aResumoQualidadeTotalizador[0].qualidade = 'TOTAIS:';
                    this.aResumoQualidadeTotalizador[0].SAC    += this.aResumoQualidade[j].SAC   ;
                    this.aResumoQualidadeTotalizador[0].TRID   += this.aResumoQualidade[j].TRID  ;
                    this.aResumoQualidadeTotalizador[0].PIM    += this.aResumoQualidade[j].PIM   ;
                    this.aResumoQualidadeTotalizador[0].SC     += this.aResumoQualidade[j].SC    ;
                    this.aResumoQualidadeTotalizador[0].SCI    += this.aResumoQualidade[j].SCI   ;
                    this.aResumoQualidadeTotalizador[0].MST    += this.aResumoQualidade[j].MST   ;
                    this.aResumoQualidadeTotalizador[0].MIC    += this.aResumoQualidade[j].MIC   ;
                    this.aResumoQualidadeTotalizador[0].MAT    += this.aResumoQualidade[j].MAT   ;
                    this.aResumoQualidadeTotalizador[0].UHML   += this.aResumoQualidade[j].UHML  ;
                    this.aResumoQualidadeTotalizador[0].UI     += this.aResumoQualidade[j].UI    ;                       
                    this.aResumoQualidadeTotalizador[0].SF	    += this.aResumoQualidade[j].SF    ;
                    this.aResumoQualidadeTotalizador[0].STR	  += this.aResumoQualidade[j].STR   ;
                    this.aResumoQualidadeTotalizador[0].ELG	  += this.aResumoQualidade[j].ELG   ;
                    this.aResumoQualidadeTotalizador[0].TIPO   += this.aResumoQualidade[j].TIPO  ;
                    this.aResumoQualidadeTotalizador[0].TrAr   += this.aResumoQualidade[j].TrAr  ; 
  
                    this.aResumoQualidadeTotalizador[0].TotFardosMistura   += this.aResumoQualidade[j].TotFardosMistura  ; 
                    this.aResumoQualidadeTotalizador[0].TotFardos_selec      += this.aResumoQualidade[j].TotFardos_selec  ; 
  
                    this.aResumoQualidadeTotalizador[0].TotalTestadoMistura   += this.aResumoQualidade[j].TotalTestadoMistura  ; 
                    this.aResumoQualidadeTotalizador[0].TotFardosEstoque      += this.aResumoQualidade[j].TotFardosEstoque  ;  
  
  
          
                    
            
            } 
  
  
            /// Totais estoque Qualidade
            /// Totais estoque Qualidade
            /// Totais estoque Qualidade
            /// Totais estoque Qualidade
            /// Totais estoque Qualidade
  
  
              objResumo  = {
                                                
                        qualidade: '',
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
                        TotFardosEstoque:  0                                       
    
              }
    
              this.aEstoqueQualidadeTotalizador.push(objResumo);  
    
    
              for (let j = 0; j < this.aEstoqueQualidade.length; j++) {  
                  
                  //console.log(aFardos[j]);
                  
                  
    
                    
                      this.aEstoqueQualidadeTotalizador[0].qualidade = 'TOTAIS:';
                      this.aEstoqueQualidadeTotalizador[0].SAC    += this.aEstoqueQualidade[j].SAC   ;
                      this.aEstoqueQualidadeTotalizador[0].TRID   += this.aEstoqueQualidade[j].TRID  ;
                      this.aEstoqueQualidadeTotalizador[0].PIM    += this.aEstoqueQualidade[j].PIM   ;
                      this.aEstoqueQualidadeTotalizador[0].SC     += this.aEstoqueQualidade[j].SC    ;
                      this.aEstoqueQualidadeTotalizador[0].SCI    += this.aEstoqueQualidade[j].SCI   ;
                      this.aEstoqueQualidadeTotalizador[0].MST    += this.aEstoqueQualidade[j].MST   ;
                      this.aEstoqueQualidadeTotalizador[0].MIC    += this.aEstoqueQualidade[j].MIC   ;
                      this.aEstoqueQualidadeTotalizador[0].MAT    += this.aEstoqueQualidade[j].MAT   ;
                      this.aEstoqueQualidadeTotalizador[0].UHML   += this.aEstoqueQualidade[j].UHML  ;
                      this.aEstoqueQualidadeTotalizador[0].UI     += this.aEstoqueQualidade[j].UI    ;                       
                      this.aEstoqueQualidadeTotalizador[0].SF	   += this.aEstoqueQualidade[j].SF    ;
                      this.aEstoqueQualidadeTotalizador[0].STR	   += this.aEstoqueQualidade[j].STR   ;
                      this.aEstoqueQualidadeTotalizador[0].ELG	   += this.aEstoqueQualidade[j].ELG   ;
                      this.aEstoqueQualidadeTotalizador[0].TIPO   += this.aEstoqueQualidade[j].TIPO  ;
                      this.aEstoqueQualidadeTotalizador[0].TrAr   += this.aEstoqueQualidade[j].TrAr  ; 
                      this.aEstoqueQualidadeTotalizador[0].TotalTestadoMistura   += this.aEstoqueQualidade[j].TotalTestadoMistura  ; 
                      this.aEstoqueQualidadeTotalizador[0].TotFardosEstoque += this.aEstoqueQualidade[j].TotFardosEstoque  ; 
                
    
    
            
                     
              
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
          
          if(this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura != null && this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura > 0 ){ 
    
                this.aEstoqueProdutorTotalizador[0].SAC    = this.aEstoqueProdutorTotalizador[0].SAC   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                this.aEstoqueProdutorTotalizador[0].TRID   = this.aEstoqueProdutorTotalizador[0].TRID  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                this.aEstoqueProdutorTotalizador[0].PIM    = this.aEstoqueProdutorTotalizador[0].PIM   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                this.aEstoqueProdutorTotalizador[0].SC     = this.aEstoqueProdutorTotalizador[0].SC    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].SCI    = this.aEstoqueProdutorTotalizador[0].SCI   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].MST    = this.aEstoqueProdutorTotalizador[0].MST   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].MIC    = this.aEstoqueProdutorTotalizador[0].MIC   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].MAT    = this.aEstoqueProdutorTotalizador[0].MAT   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].UHML   = this.aEstoqueProdutorTotalizador[0].UHML  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].UI     = this.aEstoqueProdutorTotalizador[0].UI    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;                       
                this.aEstoqueProdutorTotalizador[0].SF	   = this.aEstoqueProdutorTotalizador[0].SF    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].STR	   = this.aEstoqueProdutorTotalizador[0].STR   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].ELG	   = this.aEstoqueProdutorTotalizador[0].ELG   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].TIPO   = this.aEstoqueProdutorTotalizador[0].TIPO  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                this.aEstoqueProdutorTotalizador[0].TrAr   = this.aEstoqueProdutorTotalizador[0].TrAr  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;   

          }    
          
          
          if(this.aResumoProdutorTotalizador[0].TotalTestadoMistura != null && this.aResumoProdutorTotalizador[0].TotalTestadoMistura > 0 ){ 
    
              this.aResumoProdutorTotalizador[0].SAC    = this.aResumoProdutorTotalizador[0].SAC   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
              this.aResumoProdutorTotalizador[0].TRID   = this.aResumoProdutorTotalizador[0].TRID  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
              this.aResumoProdutorTotalizador[0].PIM    = this.aResumoProdutorTotalizador[0].PIM   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
              this.aResumoProdutorTotalizador[0].SC     = this.aResumoProdutorTotalizador[0].SC    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].SCI    = this.aResumoProdutorTotalizador[0].SCI   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].MST    = this.aResumoProdutorTotalizador[0].MST   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].MIC    = this.aResumoProdutorTotalizador[0].MIC   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].MAT    = this.aResumoProdutorTotalizador[0].MAT   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].UHML   = this.aResumoProdutorTotalizador[0].UHML  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].UI     = this.aResumoProdutorTotalizador[0].UI    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;                       
              this.aResumoProdutorTotalizador[0].SF	   = this.aResumoProdutorTotalizador[0].SF    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].STR	   = this.aResumoProdutorTotalizador[0].STR   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].ELG	   = this.aResumoProdutorTotalizador[0].ELG   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].TIPO   = this.aResumoProdutorTotalizador[0].TIPO  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
              this.aResumoProdutorTotalizador[0].TrAr   = this.aResumoProdutorTotalizador[0].TrAr  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;   

          }           
 
         
          this.totalFardosMistura = somaFardosMistura;
          this.totalFardosEstoque = somaFardosEstoque;
          this.nPesoMovimento =  pesoMovimento.toFixed(2);
          this.nPesoMovimento = this.apiFormataNumero(this.nPesoMovimento,2);


          // Formacao linha resumo mistura/produtor
          // Formacao linha resumo mistura/produtor          
          // Formacao linha resumo mistura/produtor
          // Formacao linha resumo mistura/produtor

          let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  elemento.produt); 


          //console.log('DDDDDddddsssaa')
          //console.log(objProdutor)
          //console.log(elemento)
          

          if (objProdutor) { 

             let objResumoProdutor = {
                                        
                        produtor: elemento.produt,                        
                        SAC:objProdutor.SAC ,
                        TRID:objProdutor.TRID,
                        PIM:objProdutor.PIM,
                        SC:objProdutor.SC,
                        SCI:objProdutor.SCI,
                        MST:objProdutor.MST,
                        MIC:objProdutor.MIC,
                        MAT:objProdutor.MAT,
                        UHML:objProdutor.UHML,
                        UI  :objProdutor.UI,                       
                        SF	:objProdutor.SF,
                        STR	:objProdutor.STR,
                        ELG	:objProdutor.ELG,
                        TIPO:objProdutor.TIPO,
                        TrAr:objProdutor.TrAr,  
                        TotFardosMistura:objProdutor.TotFardosMistura,
                        TotFardos_selec:objProdutor.TotFardos_selec,
                        TotalTestadoMistura:objProdutor.TotalTestadoMistura,
                        TotFardosEstoque:  objProdutor.TotFardosEstoque,                                       

              }

              this.aProdutorSelecionado.push(objResumoProdutor); 

              //console.log(this.aProdutorSelecionado)

          } else{

       
            if(this.aResumoProdutor.length>0){
                  let objResumoProdutor = {
                                            
                            produtor: this.aResumoProdutor[0].produtor,                        
                            SAC:this.aResumoProdutor[0].SAC ,
                            TRID:this.aResumoProdutor[0].TRID,
                            PIM:this.aResumoProdutor[0].PIM,
                            SC:this.aResumoProdutor[0].SC,
                            SCI:this.aResumoProdutor[0].SCI,
                            MST:this.aResumoProdutor[0].MST,
                            MIC:this.aResumoProdutor[0].MIC,
                            MAT:this.aResumoProdutor[0].MAT,
                            UHML:this.aResumoProdutor[0].UHML,
                            UI  :this.aResumoProdutor[0].UI,                       
                            SF	:this.aResumoProdutor[0].SF,
                            STR	:this.aResumoProdutor[0].STR,
                            ELG	:this.aResumoProdutor[0].ELG,
                            TIPO:this.aResumoProdutor[0].TIPO,
                            TrAr:this.aResumoProdutor[0].TrAr,  
                            TotFardosMistura:this.aResumoProdutor[0].TotFardosMistura,
                            TotFardos_selec:this.aResumoProdutor[0].TotFardos_selec,
                            TotalTestadoMistura:this.aResumoProdutor[0].TotalTestadoMistura,
                            TotFardosEstoque:  this.aResumoProdutor[0].TotFardosEstoque,                                       

                  }

                  this.aProdutorSelecionado.push(objResumoProdutor); 
            }       

          }

          // Final Formacao linha resumo mistura/produtor
          // Final Formacao linha resumo mistura/produtor          
          // Final Formacao linha resumo mistura/produtor
          // Final Formacao linha resumo mistura/produtor


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
                                       if(this.acaoSelecionada=='B') {
                                              if(aItens[i].qtde  !=0 ){
                                                  if((this.mistura.quantidade!=aItens[i].total_mist_util) && aItens[i].qtde > 0){
                
                                                      if (  (aItens[i].disponivel - aItens[i].qtde  ) >= 0  ){
                                                          corItem='white';
                                                      }else{
                                                          corItem='AntiqueWhite';
                                                      }
                                                  }
                                              }else{ 
                                                corItem='white';
                                              }

                                       }else{
                                            if(aItens[i].qtde  !=0 ){
                                                    if((this.mistura.quantidade!=aItens[i].total_mist_util) && aItens[i].qtde > 0){
              
                                                        if (  (aItens[i].disponivel - (aItens[i].qtde * (this.mistura.quantidade-aItens[i].total_mist_util)) ) >= 0  ){
                                                            corItem='white';
                                                        }else{
                                                            corItem='AntiqueWhite';
                                                        }
                                                    }
                                            }else{
                                              corItem='white';

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
       
       
       if(this.$store.state.usuarioSistema.idfil=='05'){
          this.numeroMisturaDesabilitado = false;

       }else{
          this.numeroMisturaDesabilitado = true;

       } 
   


       this.titulo= this.tituloProps;
       this.labelPesquisarComposicao=this.labelPesquisarComposicaoProps;
       this.acaoSelecionada = this.acaoSelecionadaProps; 

       if(this.acaoSelecionada =='I') {
           this.operMist = 'I'
           this.oper='I'
           this.populaMisturasAbertas();
       }else{
           this.operMist = 'A'
           this.acaoDesabilitado=true; 
           this.populaMisturasABaixar();

       }     



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
  
    