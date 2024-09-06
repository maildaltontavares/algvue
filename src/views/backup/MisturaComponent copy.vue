<template>   

<v-form  ref="formulario"   style=" background-color:white;height:100% "  >    

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
                        
                        <div    class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>{{this.titulo}}</b></p>                               
                            </div> 
                        </div>    


                        <div class=" d-flex justify-content-end"   style=" height:45px;margin-right: 10px; "  
                        v-if="this.$store.state.tipoDispositivo == 'desktop' " > 


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

                 
                  


                  <!-- Inicio Painel Manutencao Mistura -->
                  <!-- Inicio Painel Manutencao Mistura -->
                  <!-- Inicio Painel Manutencao Mistura -->
                  <!-- Inicio Painel Manutencao Mistura -->                     


                  <template v-if="this.acaoSelecionada=='I'">
                   

   
                        <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >   


                           


                              <div   class="espacoEntreComponentes" v-if="this.$store.state.tipoDispositivo != 'desktop' ">    
                                            
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
      
                              <div   class="espacoEntreComponentes" v-if = "(this.operMist=='I' || this.operMist=='C' )   ">    
                                              
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
                                        style=" width: 170px; " 
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
                                          style=" width: 170px; " 
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
                                          style=" width: 170px; " 
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
                                        style=" width: 170px; " 
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

                              <!-- Meio Painel Manutencao Mistura -->
                              <!-- Meio Painel Manutencao Mistura -->
                              <!-- Meio Painel Manutencao Mistura -->
                              <!-- Meio Painel Manutencao Mistura -->                        

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
                                      :rules="[campoRequerido]"  
                                      
                                  ></v-autocomplete> 

                              </div>                           

                              <div   class="espacoEntreComponentes">    
                                              
                                    <v-text-field
                                        v-model.trim="this.mistura.observacao" 
                                        id="observacao"
                                        label="Observação" 
                                        ref="observacao"  
                                        maxlength="150"                                            
                                        style=" width: 450px; " 
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

                              <div   class="espacoEntreComponentes">    
                                              
                                              <v-text-field
          
                                                  v-model.trim="this.nPesoMovimento" 
                                                  id="pesoMistura"
                                                  label="Peso" 
                                                  ref="pesoMistura"  
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
                    
                    <!-- Final Painel Manutencao Mistura -->
                    <!-- Final Painel Manutencao Mistura -->
                    <!-- Final Painel Manutencao Mistura -->
                    <!-- Final Painel Manutencao Mistura -->


                  <!-- Inicio Painel Baixar Mistura -->
                  <!-- Inicio Painel Baixar Mistura -->
                  <!-- Inicio Painel Baixar Mistura -->
                  <!-- Inicio Painel Baixar Mistura -->                     


                  <template v-if="this.acaoSelecionada=='B'">
                   

   
                   <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" >   
                     
 
 
                         <div    class="espacoEntreComponentes"   >  
                                 
                                 <v-autocomplete
                                     
                                     :items="misturasABaixar"    
                                     label="Mistura"          
                                     v-model="this.mistura.numeroMistura"    
                                     item-title="codigo" 
                                     item-value="codigo"
                                     variant="outlined"
                                     style="width: 180px;"                                       
                                     :rules="[campoRequerido]" 
                                     density="compact"
                                     @blur="preparaMistura()" 
                               
                                     :disabled="misturasABaixarDesabilitado"  
                                
                               
                                     
                                 ></v-autocomplete> 

                             </div>  




                         <div   class="espacoEntreComponentes">    
                                         
                               <v-text-field
                                     
                                   v-model.trim="this.mistura.quantidade" 
                                   class="text-end"
                                   id="quantidade"
                                   label="Quantidade" 
                                   ref="quantidade"   
                                   style=" width: 170px; " 
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
                                     disabled
                                     
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
                                     disabled
                                     
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
                                   disabled
   
                               ></v-text-field>                                    
                         </div>  

                         <div   class="espacoEntreComponentes">    
                                         
                               <v-text-field
                                   v-model.trim="this.mistura.loteFiacao" 
                                   id="loteFiacao"
                                   label="Lote Fiação" 
                                   ref="loteFiacao"  
                                   maxlength="10"                                            
                                   style=" width: 170px; " 
                                   variant="outlined"
                                   bg-color="white"                                           
                                   type="number"  
                                   inputmode="numeric"   
                                   density="compact"
                                   :rules="[campoRequerido]" 
                                   disabled
                                   
                                   
                               ></v-text-field>                                    
                                     
                           
                         </div> 

                         <!-- Meio Painel Baixar Mistura -->
                         <!-- Meio Painel Baixar Mistura -->
                         <!-- Meio Painel Baixar Mistura -->
                         <!-- Meio Painel Baixar Mistura -->                        

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
                                 :rules="[campoRequerido]"  
                                 
                             ></v-autocomplete> 

                         </div>                           

                         <div   class="espacoEntreComponentes">    
                                         
                               <v-text-field
                                   v-model.trim="this.mistura.observacao" 
                                   id="observacao"
                                   label="Observação" 
                                   ref="observacao"  
                                   maxlength="150"                                            
                                   style=" width: 450px; " 
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


                         <div   class="espacoEntreComponentes">    
                                              
                                <v-text-field

                                    v-model.trim="this.nPesoMovimento" 
                                    id="pesoMistura"
                                    label="Peso" 
                                    ref="pesoMistura"  
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
               
               <!-- Final Painel Baixar Mistura -->
               <!-- Final Painel Baixar Mistura -->
               <!-- Final Painel Baixar Mistura -->
               <!-- Final Painel Baixar Mistura -->
 
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


               
                    <!-- /// Resumo Mistura -->  
                    <!-- /// Resumo Mistura -->
                    <!-- /// Resumo Mistura -->
                    <!-- /// Resumo Mistura -->
                    <div class="d-flex justify-content-center"  style=" background-color:white "   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:200px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="25" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA MISTURA</th> 
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
                                          <th class="col-1 text-end tabGrid" >Estoque</th>  
                                          <th class="col-1 text-end tabGrid" >Qtde Selec</th>  
                                          <th class="col-1 text-end tabGrid" >%M</th>  
                                          <th class="col-1 text-end tabGrid" >%P</th>  
                                          <th class="col-1 text-end tabGrid" >Testados</th>  
                                          <th class="col-1 text-end tabGrid" >Não Testados</th> 

                                      </tr>
                                    </thead>  

                                    <tbody  v-if=" this.totalFardosMistura >0"  >
                                      <template  v-for="(i,indice) in aResumoMistura" :key="indice">
    

                                        <tr v-if="i.TotFardos_selec>0" >  

                                          
                                            <td class="col-1 text-start tabGridCol"  style="color:blue"  >
                                              {{ 'MIST '  }} 
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
               
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TrCnt).toFixed(2) }}
                                            </td>                                               

                                            <td class="col-1 text-end tabGridCol" >
                                              {{ this.apiFormataNumero(i.TotFardosEstoque ,0)}}
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
                                        <!-- Fim linha 01 resumo Mistura-->
                                        <!-- Fim linha 01 resumo Mistura-->
                                        <!-- Fim linha 01 resumo Mistura-->
                                        <!-- Fim linha 01 resumo Mistura-->
                                        <!-- Fim linha 01 resumo Mistura-->


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
                                      <th class="col-1 text-start" v-if="this.$store.state.usuarioSistema.idfil == '05'" >CORTEZA</th> 
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

                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  
                    <!-- /// Final corpo Mistura Produtor -->  


                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <!-- /// Resumo Produtor -->  
                    <div class="d-flex justify-content-center"  style="height:500px; background-color:white ;margin-top:100px; overflow-y: scroll; overflow-x: scroll;"   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="25" style="background-color:cadetblue; text-align:center;font-size:18px; " >RESUMO DA MISTURA POR PRODUTOR</th> 
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
                                          <th class="col-1 text-start tabGrid" >+B</th> 
                                          <th class="col-1 text-start tabGrid" >RD</th>                                           
<!--                                          
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
-->                                          
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-start tabGrid" >TrCnt</th> 
                                          <th class="col-1 text-start tabGrid" >Estoque</th> 
                                          <th class="col-1 text-end tabGrid" >Qtde Selec</th> 
                                          <th class="col-1 text-end tabGrid" >%M</th>  
                                          <th class="col-1 text-end tabGrid" >%P</th>  
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
                                              {{ (i.SAC).toFixed(1)}} 
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
                                              {{this.apiFormataNumero(i.TotFardosEstoque ,0)}}
                                            </td>                                            

                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ i.TotFardos_selec }}
                                            </td>    

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ ( ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2)) }}
                                            </td>                                             
                                           

                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ ( ((i.TotFardos_selec / i.TotFardosEstoque )*100).toFixed(2)) }}
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

                                      <template  v-for="(i,indice) in aResumoProdutorTotalizador" :key="indice">
    
                                          <tr v-if="i.TotFardos_selec>0" >  
 

                                            <td class="col-1 text-start tabGridColTotais"   >
                                              {{ i.produtor }} 
                                            </td> 

                                            <td class="col-1 text-start tabGridColTotais"   >
                                              {{ (i.SAC).toFixed(1)}} 
                                            </td> 
                                        
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TRID).toFixed(1) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.PIM).toFixed(1) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SC).toFixed(1) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SCI).toFixed(0) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MST).toFixed(1) }}
                                            </td> 
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MIC).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MAT).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.UHML).toFixed(2) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.UI).toFixed(1) }}
                                            </td>                                                
 
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SF).toFixed(1) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.STR).toFixed(1) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.ELG).toFixed(1) }}
                                            </td>   
<!--
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                                          -->                
                                           <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.B).toFixed(1) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.RS).toFixed(1) }}
                                            </td>                                               
<!--
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                                          -->                
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TrCnt).toFixed(2) }}
                                            </td> 

                                            <td class="col-1 text-end tabGridColTotais" >
                                              {{ this.apiFormataNumero(i.TotFardosEstoque ,0)}}
                                            </td>                                            

                                            <td class="col-1 text-end tabGridColTotais"   >
                                              {{ i.TotFardos_selec }}
                                            </td>    

                                            <td class="col-1 text-end tabGridColTotais"   >
                                              {{ ( ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2)) }}
                                            </td>                                             
                                           

                                            <td class="col-1 text-end tabGridColTotais"   >
                                              {{ ( ((i.TotFardos_selec / i.TotFardosEstoque )*100).toFixed(2)) }}
                                            </td> 
 
                                            <td class="col-1 text-end tabGridColTotais" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura<=0"  >
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
                    <div class="d-flex justify-content-center"  style="height:500px; background-color:white ;margin-top:100px;overflow-y: scroll; overflow-x: scroll;"   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:90%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="23" style="background-color:cadetblue; text-align:center;font-size:18px; " v-if="this.$store.state.usuarioSistema.idfil != '05'" >ESTOQUE POR PRODUTOR</th> 
                                          <th  colspan="23" style="background-color:cadetblue; text-align:center;font-size:18px; " v-if="this.$store.state.usuarioSistema.idfil == '05'"  >ESTOQUE POR PRODUTOR -  {{ this.nomeDestino.descricao  }}</th> 
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
                                          <th class="col-1 text-start tabGrid" >+B</th> 
                                          <th class="col-1 text-start tabGrid" >RD</th>                                           
<!--                                          
                                          <th class="col-1 text-start tabGrid"  >TIPO</th>  
-->                                          
                                          <th class="col-1 text-start tabGrid" >TrAr</th>  
                                          <th class="col-1 text-start tabGrid" >TrCnt</th> 
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
                                              {{ (i.SAC).toFixed(1)}} 
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

                                            <td class="col-1 text-end tabGridCol" style="color:blue"  >
                                              {{ this.apiFormataNumero(i.TotFardosEstoque ,0) }}
                                            </td>     

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ ((i.TotFardosEstoque / this.totalFardosEstoque)*100).toFixed(2)}}
                                            </td>       
 
                                            <td class="col-1 text-end tabGridCol"  >
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

                                      <!-- Totais estoque por produtor -->
                                      <!-- Totais estoque por produtor -->
                                      <!-- Totais estoque por produtor -->
                                      <!-- Totais estoque por produtor -->


                                      <template  v-for="(i,indice) in aEstoqueProdutorTotalizador" :key="indice">
    
                                        <tr   >  

                                            <td class="col-1 text-start tabGridColTotais"   >
                                              {{ i.produtor }} 
                                            </td> 

                                            <td class="col-1 text-start tabGridColTotais"   >
                                              {{ (i.SAC).toFixed(1)}} 
                                            </td> 
                                        
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TRID).toFixed(1) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.PIM).toFixed(1) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SC).toFixed(1) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SCI).toFixed(0) }}
                                            </td>  
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MST).toFixed(1) }}
                                            </td> 
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MIC).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.MAT).toFixed(2) }}
                                            </td>    
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.UHML).toFixed(2) }}
                                            </td>  

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.UI).toFixed(1) }}
                                            </td>                                                
 
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.SF).toFixed(1) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.STR).toFixed(1) }}
                                            </td>   
                                            
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.ELG).toFixed(1) }}
                                            </td>   
<!--
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                                          -->                
                                           <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.B).toFixed(1) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.RS).toFixed(1) }}
                                            </td>                                               
<!--
                                            <td class="col-1 text-start tabGridCol"  >
                                              {{ (i.TIPO).toFixed(2) }}
                                            </td>                                                                                           
                                          -->                
                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TrAr).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-start tabGridColTotais"  >
                                              {{ (i.TrCnt).toFixed(2) }}
                                            </td>   

                                            <td class="col-1 text-end tabGridColTotais"   >
                                              {{ this.apiFormataNumero(i.TotFardosEstoque ,0)}}
                                            </td>     

                                            <td class="col-1 text-end tabGridColTotais"   >
                                              {{ ((i.TotFardosEstoque / this.totalFardosEstoque)*100).toFixed(2)}}
                                            </td>                                              
                                                                                     

 
                                            <td class="col-1 text-end tabGridColTotais" >
                                              {{ i.TotalTestadoMistura }}
                                            </td>                                   
 
                                            <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura>0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td> 

                                            <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura<=0"  >
                                              {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                            </td>                                                                                             

                                             

                                        </tr>  

                                      </template>

                                      <!-- Final Totais estoque por produtor -->
                                      <!-- Final Totais estoque por produtor -->
                                      <!-- Final Totais estoque por produtor -->
                                      <!-- Final Totais estoque por produtor -->  



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

                                      <template  v-for="(i,indice) in aResumoQualidadeTotalizador" :key="indice">
    
                                          <tr v-if="i.TotFardos_selec>0" >  

                                              <td class="col-1 text-start tabGridColTotais"   >
                                                {{ i.qualidade }} 
                                              </td> 

                                              <td class="col-1 text-end tabGridColTotais"    >
                                                {{ i.TotFardos_selec }}
                                              </td> 
                                              
                                              <td class="col-1 text-end tabGridColTotais"  >
                                                {{ ((i.TotFardos_selec / this.totalFardosMistura)*100).toFixed(2) }}
                                              </td>                                              

                                              <td class="col-1 text-end tabGridColTotais" >
                                                {{ i.TotalTestadoMistura }}
                                              </td>                                   

                                              <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura>0"  >
                                                {{ i.TotFardos_selec  - i.TotalTestadoMistura }}
                                              </td> 

                                              <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura<=0"  >
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
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " v-if="this.$store.state.usuarioSistema.idfil != '05'"  >ESTOQUE POR QUALIDADE</th> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " v-if="this.$store.state.usuarioSistema.idfil == '05'"  >ESTOQUE POR QUALIDADE - {{ this.nomeDestino.descricao }}</th> 
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
                                              {{this.apiFormataNumero(i.TotFardosEstoque ,0)}}
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

                                      <template  v-for="(i,indice) in aEstoqueQualidadeTotalizador" :key="indice">
    
                                            <tr   >  

                                                <td class="col-1 text-start tabGridColTotais"   >
                                                  {{ i.qualidade }} 
                                                </td> 

                                                <td class="col-1 text-end tabGridColTotais"    >
                                                  {{ this.apiFormataNumero(i.TotFardosEstoque ,0) }}
                                                </td>   

                                                <td class="col-1 text-end tabGridColTotais"   >
                                                  {{ ((i.TotFardosEstoque / this.totalFardosEstoque)*100).toFixed(2) }}
                                                </td>   

                                                <td class="col-1 text-end tabGridColTotais" >
                                                  {{ i.TotalTestadoMistura }}
                                                </td>                                   

                                                <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura>0"  >
                                                  {{ i.TotFardosEstoque  - i.TotalTestadoMistura }}
                                                </td> 

                                                <td class="col-1 text-end tabGridColTotais" v-if="i.TotalTestadoMistura<=0"  >
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


                    <!-- /// Baixas Mistura -->  
                    <!-- /// Baixas Mistura -->  
                    <!-- /// Baixas Mistura -->  
                    <!-- /// Baixas Mistura -->  
                    <div class="d-flex justify-content-center"  style="height:800px; background-color:white ;margin-top:100px;margin-bottom:500px;overflow-y: scroll; overflow-x: scroll;"   >  
                          <div   style=" width:4%;  "> </div>
                          <div class="container-fluid"  style=" height:100px; width:20%; ">
                                <table class="table table-sm  ">
                                    <thead   >
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          <th  colspan="20" style="background-color:cadetblue; text-align:center;font-size:18px; " >BAIXAS DA MISTURA</th> 
                                          
                                      </tr> 
                                      <tr  style="background-color:cadetblue; color: white;"> 
                                          
                                          <th class="col-1 text-start tabGrid"  >MISTURA</th>   
                                          <th class="col-1 text-end tabGrid" >SEQ</th> 
                                          <th class="col-1 text-end tabGrid" >DATA</th> 
                                          <th class="col-1 text-end tabGrid" >HORA</th>  
                                          <th class="col-1 text-end tabGrid" >TURNO</th>  
                                          <th class="col-1 text-end tabGrid" >MAQUINA</th>  
                                          <th class="col-1 text-end tabGrid" >LADO</th>  

                                      </tr>
                                    </thead>  

                                    <tbody  >
                                      <template  v-for="(i,indice) in aBaixas" :key="indice">
    
                                        <tr   >  
 
                                            <td class="col-1 text-start tabGridCol"   >
                                              {{ i.mistura }} 
                                            </td> 

                                             <td class="col-1 text-end tabGridCol"   >
                                              {{ i.seq }}
                                            </td>

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ i.dataMovimento }}
                                            </td>

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ this.formataHora(i.horaMovimento)  }}
                                            </td>

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ i.turno }}
                                            </td>

                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ i.localFisico }}
                                            </td>                                            

                                                                                    
                                            <td class="col-1 text-end tabGridCol"   >
                                              {{ i.lado }}
                                            </td>                                                    
                                                                                  
                               

                                        </tr>  

                                      </template>


                                    </tbody> 

                                </table>  
                          </div> 
                          <div   style=" width:4%;  "> </div>
                    </div>  

                    <!-- /// Final  Baixas Mistura -->  
                    <!-- /// Final  Baixas Mistura -->  
                    <!-- /// Final  Baixas Mistura -->  
                    <!-- /// Final  Baixas Mistura -->   
                                            
   
  
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

                              <!-- Inicio Rodape Manutencao Mistura -->
                              <!-- Inicio Rodape Manutencao Mistura -->
                              <!-- Inicio Rodape Manutencao Mistura -->
                              <!-- Inicio Rodape Manutencao Mistura -->                     

                    
 
                              <template v-if="this.acaoSelecionada=='I'">                              

                                    <div class="col-3 div_rodape d-flex justify-content-end"     >
   
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if=" (this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalFardos == this.totalFardosMistura && this.mistura.numeroMistura!= null && this.mistura.numeroMistura != '' &&  this.totalFardosMistura >0  && this.operMist != 'C'"  @click="exibeModal('liberarProducao','Mistura será gravada com esta composição e liberada para producao. Confirma?',['S','N'],'aviso'  )"><u>L</u>iberar</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if="this.mistura.statusMistura!='A' &&  this.mistura.statusMistura!=null &&  this.mistura.statusMistura!='' && this.operMist == 'A' &&  this.totalFardosMistura >0 "  @click="exibeModal('reabrir','Mistura será reaberta. Confirma?',['S','N'],'aviso'  )"><u>R</u>eabrir</v-btn> 
                                        <v-btn color="secondary" class="botao_rodape" style=" min-width: 70px;"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalMisturasUtilizadas==0 && this.acaoDesabilitado==true   && this.mistura.numeroMistura != ''  && this.totalFardosMistura >0  "  accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"    accesskey="s" @click="submitForm('S')"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.acaoDesabilitado==true   && this.operMist != 'C' &&   this.totalFardosMistura >0 "><u>S</u>alvar</v-btn>
                                        
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>{{this.labelNovo}}</v-btn>                                   

                                    </div> 
<!--
                                    <div class="col-3 div_rodape d-flex justify-content-end"  v-if="this.$store.state.tipoDispositivo != 'desktop'"  >
   
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if=" (this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalFardos == this.totalFardosMistura && this.mistura.numeroMistura!= null && this.mistura.numeroMistura != '' && this.mistura.totalFardos >0  && this.operMist != 'C'"  @click="exibeModal('liberarProducao','Mistura será gravada com esta composição e liberada para producao. Confirma?',['S','N'],'aviso'  )"><u>L</u>iberar</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="l" v-if="this.mistura.statusMistura!='A'  &&  this.mistura.statusMistura!=null  &&  this.mistura.statusMistura!=''  && this.operMist == 'A' && this.totalFardos > 0"  @click="exibeModal('reabrir','Mistura será reaberta. Confirma?',['S','N'],'aviso'  )"><u>R</u>eabrir</v-btn> 
                                        <v-btn color="secondary" class="botao_rodape" style=" min-width: 70px;"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.mistura.totalMisturasUtilizadas==0 && this.acaoDesabilitado==true"  accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir</v-btn> 
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"    accesskey="s" @click="submitForm('S')"  v-if="(this.mistura.statusMistura=='A'  || this.mistura.statusMistura==null ||    this.mistura.statusMistura=='' ) && this.acaoDesabilitado==true"><u>S</u>alvar</v-btn>
                                        
                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ova Oper</v-btn>                                   

                                    </div> 

-->                                    



                              </template>   
                              
                              
                              <!-- Inicio Baixar Manutencao Mistura -->
                              <!-- Inicio Baixar Manutencao Mistura -->
                              <!-- Inicio Baixar Manutencao Mistura -->
                              <!-- Inicio Baixar Manutencao Mistura -->                     


                              <template v-if="this.acaoSelecionada=='B'">                              

                                <div class="col-3 div_rodape d-flex justify-content-end"   > 
                                    <!-- @click="exibeModal('confirmaDescida','Confirma descida da mistura?',['S','N'],'sucesso'  )" -->
                                    <v-btn color="secondary" class="botao_rodape" style="min-width: 70px; "  :disabled="confirmaBaixaDesabilitado" @click="confirmaBaixaMistura()" v-if="this.aComposicao.length>0  && this.totalFardosMistura>0"  accesskey="n"   ><u>C</u>onfirmar</v-btn>                                   
                                    <v-btn color="primary" class="botao_rodape" style="min-width: 70px; "  accesskey="n" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>{{this.labelNovo}}</v-btn>

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
        labelNovo:'',
        aBaixas:[] 
        
         
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

                        /*
                        let url = `${process.env.VUE_APP_BASE_URL}/lotefiacao/buscalote/${this.$store.state.usuarioSistema.idfil}/${this.mistura.loteFiacao}`; 
 

                        await this.axios.get(url,this.apiTokenHeader())
                        .then(response => { 

                            this.resultado = response.data; 
                            
                            if(this.resultado){  

                                this.aResult = [];
                                this.resultado.forEach(element => {
                                      this.aResult.push({   
                                          lote:      (element.LOTE != null ? element.LOTE : '')   
                                      }) 

                                  });  
                      
                                  if(this.aResult.length > 0){
                                        if (this.aResult[0].lote==null || this.aResult[0].lote=='' ){
                                              if(!(this.mistura.loteFiacao==this.resultado.lote)){
                                                this.apiDisplayMensagem("Lote de fiação não localizado" );
                                                this.haErros = true; 
                                                validacaoOk = false;
                                                return validacaoOk;
                                              }
                                        }else{
                                          validacaoOk = true; 
                                        } 
                                  }else{
                                    this.apiDisplayMensagem("Lote de fiação não localizado" );
                                    this.haErros = true;  
                                    validacaoOk = false; 
                                    return validacaoOk;
                                  } 
                            }else{

                                  this.apiDisplayMensagem("Lote de fiação não localizado" );
                                  this.haErros = true;  
                                  validacaoOk = false; 
                                  return validacaoOk;
                            } 
            
                        })
                          .catch(error => {
                          console.log("Erro: ", error);
                          this.haErros = true
                          validacaoOk = false;
                          return validacaoOk;
                        });  


                        */
                        
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
                    return validacaoOk;
                } else {      
                  
                         //console.log('BBBBBB')

                        if (this.mistura.dataInicial != null && this.mistura.dataInicial != "" && 
                            this.mistura.dataFinal != null && this.mistura.dataFinal != "" ){
                     
                            if (this.mistura.dataFinal < this.mistura.dataInicial ){
                                  this.apiDisplayMensagem("Data inicial maior que data final" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 
                                  return validacaoOk;
                            }  else{
                                 validacaoOk = true;  
                            } 
                           
                        }  else{ 

                               validacaoOk = false;  
                               this.acaoDesabilitado=false; 
                               return validacaoOk;
                        } 


                        if((this.mistura.statusMistura=='A' || this.mistura.statusMistura==null  || this.operMist == 'I' )  || this.acaoSelecionadaProps=='B'){

                          

                            if(this.mistura.quantidade <= this.mistura.totalMisturasUtilizadas){
                                  this.apiDisplayMensagem("Quantidade deve ser maior que o numero de misturas utilizadas" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 
                                  return validacaoOk;

                            }

                            if(this.mistura.quantidade <= 0){
                                  this.apiDisplayMensagem("Quantidade de misturas inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 
                                  return validacaoOk;

                            }                            

                            if(this.mistura.totalFardos <= 0){
                                  this.apiDisplayMensagem("Quantidade de fardos inválida" );
                                  this.haErros = true;
                                  validacaoOk = false; 
                                  this.acaoDesabilitado=false; 
                                  return validacaoOk;

                            }                         
                            
                        } 
 
                           

                   
                        const resposta = await this.buscaLote();     
                        //console.log('Resposta')   
                        //console.log(resposta)  
                        if (resposta){
                             
                            if(resposta==false){ 
                                validacaoOk = false; 
                                this.acaoDesabilitado=false; 
                                return validacaoOk;
                            }
                            
                        }else{
                            validacaoOk = false; 
                            this.acaoDesabilitado=false; 
                            return validacaoOk;
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

 
              let aFardos =  this.aComposicao;  

              // Valida dados do corpo da mistura
              for (let j = 0; j < aFardos.length; j++) {
             
                    if( aFardos[j].qtde < 0 ){  
                        this.apiDisplayMensagem("Quantidade do lote " + aFardos[j].lote + " do produtor " + aFardos[j].produt +  " inválida" );
                        this.haErros = true;
                        validado = false; 
                        this.confirmaBaixaDesabilitado=false;
                        return validado;
                         
                    }  

                    if( aFardos[j].qtde > 0 && (aFardos[j].qtde > aFardos[j].estoque )){  
                        this.apiDisplayMensagem("Quantidade do lote " + aFardos[j].lote + " maior que o estoque." );
                        this.haErros = true;
                        validado = false;  
                        this.confirmaBaixaDesabilitado=false;
                        return validado;
                    }   

              }  
 
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
                        return false;
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
                        return false; 
                         
                    } 
 


              }

              this.validacao = await this.$refs.formulario.validate();   

              if (!this.validacao.valid){
                  validado = false;  
                  this.apiDisplayMensagem('Preencha os campos com críticas.');
                  this.haErros = true;
                  return false;                  
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
                                    return true
                                        
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data); 
                                    this.apiDisplayMensagem(error.response.data ) 
                                    return false
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

                                    return true

                                        
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data); 
                                    this.apiDisplayMensagem(error.response.data ) 
                                    return false
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
                  this.pesquisaBaixas();
                  return  retornoPopForm;                 
        } ,

        
        async pesquisaBaixas() {   
                let url ;

                if(this.operMist == 'I') {
                    url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/pesquisabaixa/${this.$store.state.usuarioSistema.idfil}/0`    
                }else{
                    url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/pesquisabaixa/${this.$store.state.usuarioSistema.idfil}/${this.mistura.numeroMistura}`  
                } 
          
               // let obj;

                this.axios.get(url,this.apiTokenHeader() )
                .then(response => {
                    if(response){    

                      this.resultado = response.data;    
                      this.aBaixas = this.resultado;  
                        
                    }

                })
                .catch(error => {
                    console.log("Erro: ", error.response.data);
                
                    this.apiDisplayMensagem(error.response.data ) 
                }); 

              


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


       if(  this.$store.state.tipoDispositivo == 'mobile' ){
             this.labelNovo = "ova Oper"
       } else{
            this.labelNovo = "ova Operação"
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
  
    