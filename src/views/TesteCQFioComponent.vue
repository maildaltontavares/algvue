<template>

    <v-form  ref="formulario" @submit.stop.prevent="submitForm" style=" background-color:white;height:100% "  >     
        
        <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
            <div  style="width:100%"  >    

                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   
                    
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Teste CQ Fita/Fio</b></p>                               
                            </div> 
                       </div>        

                   </div>    
     
                   
                   <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" >   

                        <v-row>
                            <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                <label   for="tipoMaquina" class="col-form-label labelCampoPadrao"><b>Tipo_Máquina</b></label><br> 

                                <v-autocomplete
                                
                                    id="tipoMaquina"  
                                    :items="tipoMaquinaItens"      
                                    item-title="descricao" 
                                    item-value="codigo"
                                    v-model.trim="this.tpMaquina"   
                                    variant="outlined"  
                                    bg-color="white"   
                                    density="compact"
                                    :rules="[campoRequerido]"  
                                    :disabled="tipoMaquinaDesabilitado"
                                     
                                     @blur="limpaMaquina" 
                                   
                                   
                                ></v-autocomplete>  

                            </v-col> 
          

                            <v-col class="campoPadraoReduzido"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                <label   for="localFisico" class="col-form-label labelCampoPadrao"><b>Local_Físico</b></label><br> 
                                        
                                <v-text-field
                                    v-model.trim="this.testeCqFio.localFisico"   
                                    id="localFisico" 
                                    ref="localFisico"  
                                    maxlength="3"       
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    :rules="[campoRequerido]"  
                                    :disabled="localFisicoDesabilitado"
                                    @blur="buscaByChave"
                                    
                                ></v-text-field>                                  
                            </v-col>         
                           
                            
                            
                            
                            <v-col class="campoConjugado"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                       
                                <div>   
                                         <label   for="maquina" class="col-form-label labelCampoPadrao"><b>Maquina</b></label><br>                                                 

                                        
                                        <div class="input-group">   
                                            
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                 
                                                    id="maquina"
                                                
                                                    ref="maquina"  
                                                    maxlength="6"  
                                                    style=" width: 120px; "
                                                    variant="outlined"
                                                    bg-color="white"
                                                    v-model.trim="this.testeCqFio.codigoMaquina" 
                                                    inputmode="numeric" 
                                                    density="compact"
                                                    :rules="[campoRequerido]" 
                                                    disabled   
                                                ></v-text-field>    
                                                    
                                                <v-btn     
                                                     disabled
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
    
                                            <div class="descricaoCampoConjugado" > 
                                                <v-text-field
                                                 
                                                    id="descMaquina"   
                                                    disabled 
                                                    class="limitadorMedia"
                                                    density="compact"
                                                    :rules="[campoRequerido]" 
                                                    v-model.trim="this.testeCqFio.descMaquina"
                                                    style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                ></v-text-field>   
                                            </div>  
    
                                        </div>
    
                                 </div>    

                            </v-col>



                            <v-col class="campoPadraoReduzido"  v-if="this.tpMaquina=='04' || this.tpMaquina=='06'   || this.tpMaquina=='07'  "> <!-- Ajuste a largura de cada campo com "cols" -->
                                <label   for="lado" class="col-form-label labelCampoPadrao"><b>Lado</b></label><br> 
                                                       
                                    <v-autocomplete
                                        id="lado"
                                        v-model.trim="this.testeCqFio.ladoMaquina" 
                                        base-color=""
                                        :items="lados"     
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined" 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact"            
                                        @blur="buscaByChave"   
                                        :disabled="ladoMaquinaDesabilitado"                          
                                     
                                    ></v-autocomplete>  

                            </v-col>     
                            
                            
                            <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->

                                    <label  for="tipoTesteFiacao" class="col-form-label labelCampoPadrao"><b>Tipo_de_Teste</b></label><br> 

                                    <v-autocomplete
                                        v-model.trim="this.testeCqFio.tipoTesteFiacao" 
                                        id="tipoTesteFiacao" 
                                        :items="tipoTesteCQFioItens"   
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"  
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact" 
                                        @blur="buscaByChave"
                                        :disabled="tipoTesteFiacaoDesabilitado"    
                                    ></v-autocomplete> 

                            </v-col>     

                            <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                        <label  for="dataTeste" class="col-form-label labelCampoPadrao"><b>Data_do_Teste</b></label><br> 

                                            <v-text-field
                                                
                                                v-model.trim="this.testeCqFio.dataTeste" 
                                                id="dataTeste" 
                                                ref="dataTeste"  
                                                variant="outlined"
                                                bg-color="white"
                                                :disabled="dataTesteDesabilitado"  
                                                type="date"
                                                :rules="[campoRequerido]" 
                                                density="compact"
                                                @blur="buscaByChave"
                                            ></v-text-field>       
                                </v-col>

                                
                                <v-col class="campoPadraoReduzido"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                        <label  for="turno" class="col-form-label labelCampoPadrao"><b>Turno</b></label><br> 

                                        <v-autocomplete
                                            v-model.trim="this.testeCqFio.turno" 
                                            id="turno" 
                                            :items="turnos"   
                                            item-title="nome" 
                                            item-value="codigo"
                                            variant="outlined"  
                                            bg-color="white"      
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            @blur="buscaByChave"
                                            :disabled="turnoDesabilitado"    
                                         
                                        ></v-autocomplete> 

                                </v-col>                              
                            
 
 
                        </v-row>
                   </div>

                   <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" >  





                        <v-row>  
                                <v-col class="campoConjugado" cols="3" >   

                                <label  for="item" class="col-form-label labelCampoPadrao"><b>Item</b></label><br>    

                                    <div    >   
                                                
                                                <div class="input-group">   
                                                    
                                                    <div class="d-flex  justify-content-start">
                                                        
                                                        <v-text-field
                                                        
                                                            id="item"
                                                        
                                                            ref="item"  
                                                            maxlength="7"  
                                                            style=" width: 120px; "
                                                            variant="outlined"
                                                            bg-color="white"
                                                            v-model.trim="this.testeCqFio.item"
                                                            type="number"                                                     
                                                            :rules="[campoRequerido]" 
                                                            density="compact"
                                                            :disabled="itemDesabilitado"
                                                            @blur="pesquisaItem"
                                                             
                                                        ></v-text-field>    
                                                            
                                                        <v-btn   data-bs-toggle="modal" 
                                                        data-bs-target="#modalPesquisaFio" @click="apiFlushPesquisa()" tabindex="-1"     
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

                                                    <div class="descricaoCampoConjugado" >    
                                                        <v-text-field
                                                        
                                                            id="descFio"   
                                                            disabled 
                                                            class="limitadorMedia"
                                                            density="compact"
                                                            v-model.trim="this.testeCqFio.descItem"
                                                            style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  " 
                                                        ></v-text-field>   
                                                    </div>  

                                                </div>

                                    </div>                                

                                </v-col>

                                <v-col class="campoPadrao"  >   

                                        <label  for="lote" class="col-form-label labelCampoPadrao"><b>Lote</b></label><br>   
                                        <v-text-field
                                            v-model.trim="this.testeCqFio.loteFiacao" 
                                            id="lote"                                     
                                            ref="lote"  
                                            maxlength="10"
                                            variant="outlined"
                                            bg-color="white"                                           
                                            type="text"     
                                            density="compact"
                                            :rules="[campoRequerido]" 
                                            @blur="apiLoteFiacao"
                                            :disabled="loteFiacaoDesabilitado"
                                            
                                        ></v-text-field>                                  
                                </v-col>   
                                
                                <v-col class="campoPadraoReduzido"  v-if="this.tpMaquina=='04' || this.tpMaquina=='03'  || this.tpMaquina=='06'  || this.tpMaquina=='05'   || this.tpMaquina=='07'  " >   

                                    <label  for="estiragem" class="col-form-label labelCampoPadrao"><b>Estiragem</b></label><br>   
                                    <v-text-field
                                        v-model.trim="this.testeCqFio.estiragem" 
                                        id="estiragem"                                     
                                        ref="estiragem"  
                                        maxlength="6"
                                        variant="outlined"
                                        bg-color="white"    
                                        :rules="[campoRequerido]" 
                                        :disabled="estiragemDesabilitado" 
                                        type="text"     
                                        density="compact"   
                                        inputmode="numeric"     
                                        @keyup="apiEntraNumero($event,2) " 
                                        @blur="this.testeCqFio.estiragem = $event.target.value"  


                                        
                                    ></v-text-field>                                  
                                </v-col>                        
                                
                                

                                <v-col class="campoPadrao" v-if="this.tpMaquina=='02' ||  this.tpMaquina=='03'  || this.tpMaquina== '05'"  >

                                    <label  for="dobradora" class="col-form-label labelCampoPadrao"><b>Dobradora</b></label><br> 

                                    <v-autocomplete
                                        v-model.trim="this.testeCqFio.dobradora" 
                                        id="dobradora" 
                                        :items="Dobradora"   
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"  
                                        bg-color="white"      
                                        :disabled="dobradoraDesabilitado"  
                                        :rules="[campoRequerido]" 
                                        density="compact" 
                                    ></v-autocomplete> 

                                </v-col>     

                                <v-col class="campoConjugado"  > <!-- Ajuste a largura de cada campo com "cols" -->

                                    <div  >   
                                        <label for="operador" class="col-form-label labelCampoPadrao"><b>Titulador</b></label><br>                                                 
                                        <div class="input-group">   
                                            
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                
                                                    id="operador" 
                                                    ref="operador"  
                                                    maxlength="5"  
                                                    style=" width: 120px; "
                                                    variant="outlined"
                                                    bg-color="white"
                                                    v-model.trim="this.testeCqFio.operador" 
                                                    inputmode="numeric" 
                                                    density="compact"
                                                    :disabled="operadorDesabilitado"  
                                                    :rules="[campoRequerido]" 
                                                    @blur="apiPesquisaParam('operadorCpfFio', this.testeCqFio.operador, this.testeCqFio)"
                                                
                                                ></v-text-field>    
                                                    
                                                <v-btn     
                                                    
                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); "  
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalPesquisaOperador" tabindex="-1"  @click="apiFlushPesquisa" 
                                                    :disabled="operadorDesabilitado"  
                                                        
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

                                            <div class="descricaoCampoConjugado" >    
                                                <v-text-field
                                                
                                                    id="nomeOperador"   
                                                    disabled 
                                                    class="limitadorMedia"
                                                    density="compact"
                                                    :rules="[campoRequerido]" 
                                                    v-model.trim="this.testeCqFio.nomeOperador"
                                                    style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                ></v-text-field>   
                                            </div>  

                                        </div>

                                    </div>  
                                </v-col>        


                                <v-col class="campoPadrao"  > <!-- Ajuste a largura de cada campo com "cols" -->
                                    <label  for="obs" class="col-form-label labelCampoPadrao"><b>Observacao</b></label><br> 

                                    <v-text-field
                                    v-model.trim="this.testeCqFio.observacao"
                                    id="obs" 
                                    ref="obs"     
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"  

                                    ></v-text-field>   

                                </v-col>                                    



                                

                        </v-row>
                    </div>  



                    <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" >   


                        <v-row  >   

                        </v-row>
                    </div>      
                    
                    



                    <!--  DADOS PRODUCAO -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->



                    <!-- <div class="d-flex justify-content-end " style=" margin-left:1%; width:99%; margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    -->
                    <div class="d-flex justify-content-end " style="margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    
                        <div style="width:100%;background-color:#c0c0c1; height:50px  ">
                            <p  class="text-white text-center  mt-3  " style=" margin-left:19%;width:60%; font-size: 18px; height:20px "><b>Resultado</b></p>                               
                        </div>    

                        <v-btn  
                         
                            style="height:49px;width:160px;background-color:rgb(240, 237, 232); " 
                            @click="preparaTeste"  
                          
                            :disabled="informarTesteDesabilitado"
                            > 
                                <v-icon
                                class="mb-6"
                                color="primary"
                                icon="mdi-plus-box-outline"
                                size="55"
                                ></v-icon>  
                                <span  style="margin-bottom:28px"><b>Informar</b></span> <!-- Texto centralizado -->
                        </v-btn>  
                    </div> 





 
                    <table style="margin-top:20px"  :style="{width:this.larguraGrid,marginLeft:this.margemEsquerdaGrid}" v-if="this.exibeDetalhe==true" >

                                <thead   style="background-color:#003366;color: white;height:30px;margin-bottom:30px"  >
                                        <tr>
                                            <th class="col-1"  style="text-align:center  ;font-size:17px">Num. Prova</th> 
                                            <th class="col-1"  style="text-align:center  ;font-size:17px" v-if="this.tpMaquina== '04' || this.tpMaquina== '05' || this.tpMaquina== '06' || this.tpMaquina== '07'">Num. Fusos</th> 
                                            <th class="col-1"  style="text-align:center  ;font-size:17px" v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' ">Peso (g)</th> 
                                            <th class="col-1"  style="text-align:center  ;font-size:17px">Titulo</th>  
                                            
                                        </tr>
                                </thead>  

                                <tbody  v-if="this.exibeDetalhe==true" :style="{width:this.larguraGrid,marginLeft:this.margemEsquerdaGrid}" > 
 
                                        <template  v-for="(z, indice) in aTesteDetalhe" :key="indice"   >    
                                              
                                                <tr>  

                                                    <td class="col-1 text-start">  
                                                            
                                                            <v-text-field
                                                                v-model.trim="z.seqProva" 
                                                                :id="'seq'  +  indice "
                                                                variant="outlined"    
                                                                bg-color="white"                                           
                                                                type="text"     
                                                                density="compact"  
                                                                disabled

                                                            ></v-text-field>   
                                                    </td>
                                             
                                       

                                                    <td class="col-1 text-end" v-if="this.tpMaquina== '04' || this.tpMaquina== '05' || this.tpMaquina== '06' || this.tpMaquina== '07'">  
                                                        
                                                        <v-text-field
                                                            v-model.trim="z.numeroFusos"
                                                            :id="'numFusos'  +  indice "
                                                            variant="outlined"
                                                            bg-color="white"                                           
                                                            maxlength="3"
                                                            density="compact"  
                                                            class="text-end"
                                                            style="text-align: right;"
                                                            inputmode="numeric" 
                                                               
                                                            
                                                            
                                                        ></v-text-field>   

                                                    </td>            
                                                    
                                                    <td class="col-1 text-end"  v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' " >                                                          
                                                      
                                                            
                                                            <v-text-field
                                                                v-model.trim="z.peso"
                                                                :id="'peso'  +  indice " 
                                                                variant="outlined"
                                                                bg-color="white"         
                                                                density="compact"  
                                                                inputmode="numeric" 
                                                                maxlength="8"                                          
                                                                @keyup="apiEntraNumero($event,2) "  
                                                                @blur="calculaDadosPeso(z,$event)"  

                                                            ></v-text-field>   
                                                    </td>  
                                                        
                        
                                                        
                                                    <td class="col-1 text-end"  v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' " >    
                                                        
                                                            <v-text-field
                                                                v-model.trim="z.titulo"
                                                                :id="'titulo'  +  indice " 
                                                                variant="outlined"
                                                                maxlength="6"
                                                                bg-color="white"                                           
                                                                type="text"     
                                                                density="compact"  
                                                                disabled
                                                                @keyup="apiEntraNumero($event,3) " 
                                                                @blur="z.titulo = $event.target.value"  

                                                            ></v-text-field>   

                                                    </td>
                                                    <td class="col-1 text-start"  v-if="this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07' " >     
                                                        
                                                        <v-text-field
                                                            v-model.trim="z.titulo"
                                                                 
                                                            variant="outlined"
                                                            bg-color="white"                                           
                                                            type="text"     
                                                            density="compact"   
                                                            inputmode="numeric"     
                                                            @keyup="apiEntraNumero($event,3) " 
                                                            @blur="calculaDadosTitulo(z,$event)"
                                                          
                                                             

                                                        ></v-text-field>   
                                                        
                                                    </td>   
                                                </tr>
                                           
                                        </template>
                                </tbody>

 


                    </table>


                 <!--    <div class="flex-linha "  style="margin-left:4%;width:90%;margin-top: 0.3%;background-color:white"  v-if="this.exibeDetalhe==true"  >   -->
                    
                    <div class="flex-linha "  style="margin-top:20px"  :style="{width:this.larguraRodapeGrid,marginLeft:this.margemEsquerdaGrid}"  v-if="this.exibeDetalhe==true"  >
                    

                        <!-- <v-row style="margin-left:23%;max-width:50%">  
                            -->

                        <v-row >

                            <v-col class="campoPadrao" style="max-width:200px;"   >  
                                <v-card 
                                    elevation="16"
                                    max-width="344"
                                    style="width:180px;height:120px;" 
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            Titulo do Item
                                        </v-card-title> 
                                    </v-card-item>

                                    <v-card-text>
                                    
                                            <div style="margin-left:15%;width:200px;height:70px;  ">
                                                <div style="padding:3%;">                         
                                                    <p    style= "font-size: 40px;color:red"><b>{{this.tituloFioAtual}}</b></p>                               
                                                </div> 
                                            </div>

                                    </v-card-text>
                                </v-card>
                            </v-col>    
                            
                            <v-col class="campoPadrao"  style="max-width:200px;"  >  
                                <v-card 
                                    elevation="16"
                                    max-width="344"
                                    style="width:180px;height:120px; " 
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            Média do Teste
                                        </v-card-title> 
                                    </v-card-item>

                                    <v-card-text>
                                    
                                            <div style="margin-left:15%;width:200px;height:70px;  ">
                                                <div style="padding:3%;">                         
                                                    <p    style= "font-size: 40px;color:red" v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' " ><b>{{this.mediaTeste.toFixed(3)}}</b></p>                               
                                                    <p    style= "font-size: 40px;color:red" v-if="this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07' " ><b>{{this.mediaTeste.toFixed(2)}}</b></p>                               
                                                </div> 
                                            </div>

                                    </v-card-text>
                                </v-card>
                            </v-col>       
                        </v-row>
                    </div>   
                    <div class="flex-linha "  style="margin-top:20px"  :style="{width:this.larguraRodapeGrid,marginLeft:this.margemEsquerdaGrid}"  v-if="this.exibeDetalhe==true"  >
                    

                    <!-- <v-row style="margin-left:23%;max-width:50%">  
                        -->

                        <v-row >                            
                            
                            <v-col class="campoPadrao"  style="max-width:200px;"   >  
                                <v-card 
                                    elevation="16"
                                    max-width="344"
                                    style="width:180px;height:120px; " 
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            Desvio Padrão
                                        </v-card-title> 
                                    </v-card-item>

                                    <v-card-text>
                                    
                                            <div style="margin-left:15%;width:200px;height:70px;  ">
                                                <div style="padding:3%;">                         
                                                    <p    style= "font-size: 40px;color:red" v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' "><b>{{this.desvioPadraoTeste.toFixed(3)}}</b></p>                               
                                                    <p    style= "font-size: 40px;color:red" v-if="this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07' "><b>{{this.desvioPadraoTeste.toFixed(2)}}</b></p>                               
                                                </div> 
                                            </div>

                                    </v-card-text>
                                </v-card>
                            </v-col>   

                            <v-col class="campoPadrao"   style="max-width:200px;"  >  
                                <v-card 
                                    elevation="16"
                                    max-width="344"
                                    style="width:180px;height:120px; " 
                                >
                                    <v-card-item>
                                        <v-card-title>
                                            CV
                                        </v-card-title> 
                                    </v-card-item>

                                    <v-card-text>
                                    
                                            <div style="margin-left:15%;width:200px;height:70px;  ">
                                                <div style="padding:3%;">                         
                                                    <p    style= "font-size: 40px;color:red"  v-if="this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05' "><b> {{this.coeficienteVariacaoTeste.toFixed(3)}}  </b></p>                               
                                                    <p    style= "font-size: 40px;color:red"  v-if="this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07' "><b> {{this.coeficienteVariacaoTeste.toFixed(2)}}  </b></p>                               
                                                </div> 
                                            </div>

                                    </v-card-text>
                                </v-card>
                            </v-col>                               


                        </v-row>
                    </div>     
             
    
              <div style="height:  500px; background-color:white"     >

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

                              <div class="col-3 div_rodape d-flex justify-content-end"     > 
                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px; " accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</v-btn> 

                                        <v-btn color="primary" class="botao_rodape" style=" min-width: 70px;"    accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir </v-btn>              

                                        <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"   type="submit"  accesskey="s"><u>S</u>alvar</v-btn>
                                        <v-btn color="secondary" class="botao_rodape" style="min-width: 100px;"
                                        @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"
                                        
                                        :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} "  
                                         accesskey="p" ><u>P</u>esquisar</v-btn>

                                         <div v-if="this.$store.state.menuExpandido" ><div :style="{marginRight:this.$store.state.tamanhoEspacoMarginRight}"  ></div></div>

                                          


                              </div>   
                        
  
                          </div>
                    
                      </div>   

                            
                </div>

            </div>
        </div>  

    </v-form>     

    <PesquisaFio @setaPesquisa="setaPesquisa($event)"></PesquisaFio>  
    <PesquisaOperador @setaPesquisa="setaPesquisa($event)"></PesquisaOperador>
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>     
</template>
 
<script> 

   
   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
  
    
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'   
   import MensagemMobile  from '../components/MensagemMobileComponent.vue'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
   import SimNao from '@/requires/SimNao.vue' 
   import PesquisaOperador from '@/requires/PesquisaOperador';
   import PesquisaFio from '@/requires/PesquisaFio.vue'
   
  
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'TesteCQFioComponent',
 
        components: {  PesquisaOperador, MensagemMobile,SimNao ,PesquisaFio },
        
 
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],

        props: {  
                tipoMaquinaProps: {
                    type : String,
                    required: true,
          
                    },            
                idProps: {
                    type : String,
                    required: true,
          
                    },
                        
                operacao: {
                    type : String,
                    required: true,
          
                    },
        },        
       
        data: () => ({
            
            resultado : "",             
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            erros: '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            simNaoTipo: 'sucesso',
            tipoOperacao:'A',     
            mensagemSucesso: '',
            mensagemErro : '', 
            exibeDetalhe : false, 

                       
           
            testeCqFio:{ 
                id:'' ,	 
                idfil:'' ,  
                tipoTesteFiacao:'' , 
                dobradora:'' , 	
                dataTeste:'' ,	 
                turno:'' ,	 
                operador:'' , 
                localFisico:'' ,	 
                ladoMaquina:'' ,	 
                codigoMaquina:'' , 
                item:'' ,	 
                loteFiacao:'' , 
                estiragem:'' , 
                usuarioInclusao:'' ,	 
                usuarioAlteracao:'' ,  
                dataInclusao:'' ,	 
                dataAlteracao:'' , 
                testeQualidadeFioDetalheDTO :[] ,
                tipoMaquina:'' ,
                descMaquina:'',
                nomeOperador:'',
                observacao:'',
                descItem:''
            }, 


            testeCqFioInicial:{ 
                id:'' ,	 
                idfil:'' ,  
                tipoTesteFiacao:'' , 
                dobradora:'' , 	
                dataTeste:'' ,	 
                turno:'' ,	 
                operador:'' , 
                localFisico:'' ,	 
                ladoMaquina:'' ,	 
                codigoMaquina:'' , 
                item:'' ,	 
                loteFiacao:'' , 
                estiragem:'' , 
                usuarioInclusao:'' ,	 
                usuarioAlteracao:'' ,  
                dataInclusao:'' ,	 
                dataAlteracao:'' , 
                testeQualidadeFioDetalheDTO :[] ,
                tipoMaquina:'' ,
                descMaquina:'',
                nomeOperador:'',
                observacao:'',
                descItem:''
            }, 


            testeCqFioDAO:{ 
                id:'' ,	 
                idfil:'' ,  
                tipoTesteFiacao:'' , 
                dobradora:'' , 	
                dataTeste:'' ,	 
                turno:'' ,	 
                operador:'' , 
                localFisico:'' ,	 
                ladoMaquina:'' ,	 
                codigoMaquina:'' , 
                item:'' ,	 
                loteFiacao:'' , 
                estiragem:'' , 
                usuarioInclusao:'' ,	 
                usuarioAlteracao:'' ,  
                dataInclusao:'' ,	 
                dataAlteracao:'' , 
                testeQualidadeFioDetalheDTO :[] , 
                observacao:'',
                dataTesteParam:''
         
            }, 
            
              




            testeCqFioDetalhe:{ 
                id:'' ,	 
                idfil:'' ,     
                idPai:'' ,	       
                seqProva:'' ,	 
                numeroFusos:'',	  
                peso:0 ,	   
                titulo:0     
            }  ,      
            
            testeCqFioDetalheInicial:{ 
                id:'' ,	 
                idfil:'' ,     
                idPai:'' ,	       
                seqProva:'' ,	 
                numeroFusos:'',	  
                peso:0 ,	   
                titulo:0    ,
                ind:0 
            } ,
            
            testeCqFioDetalheDAO:{ 
                id:'' ,	 
                idfil:'' ,     
                idPai:'' ,	       
                seqProva:'' ,	 
                numeroFusos:'',	  
                peso:0 ,	   
                titulo:0     
            }  , 
            
            
            tpMaquina:'',
          
        
            dataTesteDesabilitado:false,	  
            itemDesabilitado:false,	 
            loteFiacaoDesabilitado:false, 
            estiragemDesabilitado:false,   
            observacaoDesabilitado:false, 
            dobradoraDesabilitado:false,
            tipoTesteFiacaoDesabilitado:false,
            codigoMaquinaDesabilitado:false,	 	 
            localFisicoDesabilitado:false,	  
            turnoDesabilitado:false,	 
            operadorDesabilitado:false,	    
            ladoMaquinaDesabilitado:false,	  
            tipoMaquinaDesabilitado:false,	             
            informarTesteDesabilitado:false,	
            
            
            tipoMaquinaItens: [],
            tipoMaquinaTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            }, 

            tipoTesteCQFioItens: [],
            tipoTesteCQFioTemp: {    
                 codigo:'' ,
                 nome:  '' , 
            },             
             
            turnos:[
                {codigo:"A", nome:"A"},
                {codigo:"B", nome:"B"},
                {codigo:"C", nome:"C"} 
            ],   

            lados:[
                {codigo:"A", nome:"A"} ,
                {codigo:"B", nome:"B"} , 
                {codigo:"U", nome:"U"}   
            ], 
            Dobradora:[
                {codigo:"M", nome:"METROS"} ,
                {codigo:"J", nome:"JARDAS"}   
            ],             
            ladoMaquina:""   , 
            loteFiacaoDAO:"",
            vTemp:'',
            larguraGrid:'100%',
            margemEsquerdaGrid:'0%',
            aDadosQ:[],
            testeItemTempAux:{},
            nInd:0,
            tituloFioAtual:0,
            mediaTeste:0,
            desvioPadraoTeste:0,
            coeficienteVariacaoTeste:0,
            larguraRodapeGrid:'0%',
            aTesteDet:[]

            
            
          
            

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        
        methods:{ 

             
            navegarParaLogin(){this.$router.push({name:'login'  })}, 
 
            async exclusao() {  


                if (this.testeCqFio.id==null || this.testeCqFio.id==''   )
                {  
                    this.apiDisplayMensagem('Informe um teste válido.' ) 
                    return false;
                }    


                /// EXCLUSAO ////

                let url = `${process.env.VUE_APP_BASE_URL}/tqf/delete/${this.testeCqFio.id}`    

                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  

                        this.axios.delete(url,this.apiTokenHeader() )
                        .then(response => {
                            if(response){                            
                                this.resetarForm();
                                this.apiDisplayMensagemSucesso('Registro excluido com sucesso.'  ) 
                                
                            }

                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data);
                        
                            this.apiDisplayMensagem(error.response.data ) 
                        }); 

                }


            },       


            setaPesquisa(e) {    

                    if (e.tipo == "item") {
                        this.testeCqFio.item =  e.obj.codigo;
                        this.testeCqFio.descItem = e.obj.descricao;

                        this.tituloFioAtual = e.obj.titulo;
                    }                 

                    if (e.tipo == "operador") {
                        this.testeCqFio.operador =  e.obj.codigo;
                        this.testeCqFio.nomeOperador = e.obj.nome;
                    } 

            }, 

            limpaCampos(){

                //console.log('limpaCampos')

                
                this.testeCqFio.item = '';
                this.testeCqFio.descItem = '';

            },
            
            limpaMaquina(){


                //console.log('limpaMaquina')

                

                this.testeCqFio.codigoMaquina = '';
                this.testeCqFio.descMaquina   = '';
                this.testeCqFio.localFisico   ='';
                this.testeCqFio.ladoMaquina   ='' ;


            },

            async buscaMaquinaPorLocal(){   
            
                    let retorno;

                    this.testeCqFio.localFisico = this.testeCqFio.localFisico.padStart(3, '0'); 

                    let url =  `${process.env.VUE_APP_BASE_URL_CPF}/maquina/filial/${this.$store.state.usuarioSistema.idfil}/local/${this.testeCqFio.localFisico}/tpMaq/${this.tpMaquina}`; 
 
                    //this.testeCqFio.ladoMaquina = "";
                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                        this.resultado = response.data;   

                        //console.log('Maquinas this.resultado');
                        //console.log(this.resultado); 

                        if (this.resultado.codigo != null && this.resultado.codigo != ''){
                            
                            this.testeCqFio.codigoMaquina =  this.resultado.codigo ;   
                            this.testeCqFio.descMaquina =  this.resultado.nome ;   
 
                            if(this.resultado.lado=="U" || this.resultado.lado == null || this.resultado.lado == ''){  
                                //this.testeCqFio.ladoMaquina = "U"; 
                                this.ladoMaquina = "U"; 
                   
                            } else if (this.resultado.lado=="D"  ){  
                                //this.testeCqFio.ladoMaquina = "";
                                this.ladoMaquina = "D"; 
                            }   
 
                        
                        }else{
                            
                            this.testeCqFio.codigoMaquina = "" ;  
                            this.testeCqFio.descMaquina = "" ;  
                            //this.lados = [{codigo:" ", nome:" "} ]; 
                            this.testeCqFio.ladoMaquina = "";
                            this.ladoMaquina = ""; 

                            return false;  
                            
                        }    

                        retorno = true;
                    }                
                    )        
                    .catch(error => {  
                        
                        console.log("Erro Turno: ", error);
                        this.apiDisplayMensagem(error.response.data);  
                        retorno = false;

                    });
            

                   return retorno;



            },

            preparaTeste(){

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 
                    
                    

                    const resposta = this.validaCampos(); 
                 
                    if ( resposta === true  ){  

                        this.exibeDetalhe = true; 
                        this.configuraCampos('A')
                        this.populaGridInclusao(); 


                        //console.log('preparaTeste')
                        //console.log(this.aTesteDetalhe)

                        this.informarTesteDesabilitado = true;
                    }            




            },



            validaLado(param){


                if(this.testeCqFio.codigoMaquina!=""){
                    if(this.ladoMaquina!=""){
                        if(this.testeCqFio.ladoMaquina!=""){

                            if(this.ladoMaquina=="U" && this.testeCqFio.ladoMaquina!="U"){
                                this.apiDisplayMensagem("Lado inválido para esta máquina");  
                                return false;
                            }

                            if(this.ladoMaquina=="D" && this.testeCqFio.ladoMaquina=="U"){
                                this.apiDisplayMensagem("Lado inválido para esta máquina");  
                                return false;
                            }

                        } 
                    }
                }else{

                    if(param=="submit"){
                        this.apiDisplayMensagem("Máquina inválida." )  
                    }
                }


            }, 


            pesquisaItem(){


                //console.log('pesquisaItem');


              
                   if (!(this.testeCqFio.item =='' || this.testeCqFio.item==null))  {  
                        this.apiPesquisaParam('itemCqFio', this.testeCqFio.item  , this.testeCqFio)
                        this.buscaByChave() ;
                    } else{
                       this.testeCqFio.descItem='' 
                    }  
 
            },
            mostraDescricaoItem(){

                   if (!(this.testeCqFio.item =='' || this.testeCqFio.item==null))  {  
                        this.apiPesquisaParam('itemCqFio', this.testeCqFio.item  , this.testeCqFio) 
                    } else{
                       this.testeCqFio.descItem='' 
                    }  
 
            },



            async buscaByChave(){ 

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 
                    
                    

                    const resposta = await this.validaChave(); 

                    //console.log('buscaByChave')


                    if ( resposta === true  ){   
                        
                            const resposta = await this.populaForm();  
                            
              

                            if (!(resposta === true) ){
                                console.log('Erro de cadastro BuscaChave' );      
                            }   
                    }            

             },             
 
 
            async validaChave(){ 

                    let validado;

                    validado = true;

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = ''   


                    //console.log('validaChave')

                    if (!(this.testeCqFio.localFisico =='' || this.testeCqFio.localFisico==null))  {  
                        this.buscaMaquinaPorLocal()
                    }   

                    if (this.testeCqFio.item =='' || this.testeCqFio.item==null)  {
                        //this.apiDisplayMensagem('Informe o item.');
                        validado = false; 
                        return validado;
                    }                   


                    if (this.tpMaquina=='' || this.tpMaquina==null)  {
                        //this.apiDisplayMensagem('Informe o tipo de máquina.');
                        validado = false; 
                        return validado;
                    }      

                    if (this.testeCqFio.localFisico=='' || this.testeCqFio.localFisico==null)  {
                        //this.apiDisplayMensagem('Informe o local fisico.');
                        validado = false; 
                        return validado;
                    }                       


                    if (this.testeCqFio.codigoMaquina=='' || this.testeCqFio.codigoMaquina==null)  {
                        //this.apiDisplayMensagem('Informe o código da maquina.');
                        validado = false; 
                        return validado;
                    }   
                    
                    if (this.testeCqFio.descMaquina =='' || this.testeCqFio.descMaquina==null)  {
                        //this.apiDisplayMensagem('Informe uma maquina válida.');
                        validado = false; 
                        return validado;
                    }                      
                    
                    if (this.testeCqFio.dataTeste=='' || this.testeCqFio.dataTeste==null)  {
                        //this.apiDisplayMensagem('Informe a data do teste.');
                        validado = false; 
                        return validado;
                    }      
                    
                    if (this.testeCqFio.ladoMaquina =='' || this.testeCqFio.ladoMaquina==null)  {
                        //this.apiDisplayMensagem('Informe o lado da maquina.');
                        validado = false; 
                        return validado;
                    } 
                    
                    if (this.testeCqFio.turno =='' || this.testeCqFio.turno==null)  {
                        //this.apiDisplayMensagem('Informe o turno.');
                        validado = false; 
                        return validado;
                    }    

                  
                    if (this.testeCqFio.descItem =='' || this.testeCqFio.descItem==null)  {
                        //this.apiDisplayMensagem('Informe um item valido.');
                        validado = false; 
                        return validado;
                    }                        
                     

                    if (this.testeCqFio.tipoTesteFiacao =='' || this.testeCqFio.tipoTesteFiacao==null)  {
                        //this.apiDisplayMensagem('Informe o tipo de teste.');
                        validado = false; 
                        return validado;
                    }    

                    return validado; 
                                


            }, 


            validaDataProducao(pData){ 

                // Obtém a data atual
                let dataAtual = new Date();

                // Obtém as partes individuais da data atual
                let ano = dataAtual.getFullYear();
                let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
                let dia = ("0" + dataAtual.getDate()).slice(-2);

                // Formata a data atual como "yyyy-mm-dd"
                let dataAtualFormatada = `${ano}-${mes}-${dia}`;
                let retorno = true;


                //console.log('Datas');
                //console.log(dataAtualFormatada);
                //console.log(pData);

                if( pData > dataAtualFormatada ){
                    return false;
                }

                return retorno


           },            

            validaCampos(){

                let validado;
                validado = true;


                if(!this.validaDataProducao(this.testeCqFio.dataTeste)){
                    this.apiDisplayMensagem('Data inválida')
                    validado = false; 
                    return validado; 

                } 


                if( this.tpMaquina != '02' &&
                    this.tpMaquina != '03' &&
                    this.tpMaquina != '04' &&
                    this.tpMaquina != '05' &&
                    this.tpMaquina != '06' &&
                    this.tpMaquina != '07'  
                ){
                    this.apiDisplayMensagem('Tipo de máquina inválido')
                    validado = false; 
                    return validado; 
                }     

                   if (this.testeCqFio.item =='' || this.testeCqFio.item==null)  {
                        this.apiDisplayMensagem('Informe o item.');
                        validado = false; 
                        return validado;
                    }                   


                    if (this.tpMaquina=='' || this.tpMaquina==null)  {
                        this.apiDisplayMensagem('Informe o tipo de máquina.');
                        validado = false; 
                        return validado;
                    }      

                    if (this.testeCqFio.localFisico=='' || this.testeCqFio.localFisico==null)  {
                        this.apiDisplayMensagem('Informe o local fisico.');
                        validado = false; 
                        return validado;
                    }                       


                    if (this.testeCqFio.codigoMaquina=='' || this.testeCqFio.codigoMaquina==null)  {
                        this.apiDisplayMensagem('Informe o código da maquina.');
                        validado = false; 
                        return validado;
                    }   
                    
                    if (this.testeCqFio.descMaquina =='' || this.testeCqFio.descMaquina==null)  {
                        this.apiDisplayMensagem('Informe uma maquina válida.');
                        validado = false; 
                        return validado;
                    }                      
                    
                    if (this.testeCqFio.dataTeste=='' || this.testeCqFio.dataTeste==null)  {
                        this.apiDisplayMensagem('Informe a data do teste.');
                        validado = false; 
                        return validado;
                    }      
                    
                    
                    
                    if(this.tpMaquina == '04' ||
                    this.tpMaquina == '03' ||
                    this.tpMaquina == '05' ||
                    this.tpMaquina == '06' ||
                    this.tpMaquina == '07' ) { 

                           

                            if (this.testeCqFio.estiragem =='' || this.testeCqFio.estiragem==null)  {
                                this.apiDisplayMensagem('Informe a estiragem.');
                                validado = false; 
                                return validado;
                            }                             
                    }

                    if(this.tpMaquina == '04' || 
                    this.tpMaquina == '06' ||
                    this.tpMaquina == '07' ) { 

                            if (this.testeCqFio.ladoMaquina =='' || this.testeCqFio.ladoMaquina==null)  {
                                this.apiDisplayMensagem('Informe o lado da maquina.');
                                validado = false; 
                                return validado;
                            } 

                                                      
                    }                    
                    
                    if (this.testeCqFio.turno =='' || this.testeCqFio.turno==null)  {
                        this.apiDisplayMensagem('Informe o turno.');
                        validado = false; 
                        return validado;
                    }   

                   
                    if (this.testeCqFio.descItem =='' || this.testeCqFio.descItem==null)  {
                        this.apiDisplayMensagem('Informe um item valido.');
                        validado = false; 
                        return validado;
                    }                        
                    

                    if (this.testeCqFio.tipoTesteFiacao =='' || this.testeCqFio.tipoTesteFiacao==null)  {
                        this.apiDisplayMensagem('Informe o tipo de teste.');
                        validado = false; 
                        return validado;
                    }    


                    if (this.testeCqFio.operador =='' || this.testeCqFio.operador==null)  {
                        this.apiDisplayMensagem('Informe o operador.');
                        validado = false; 
                        return validado;
                    }   
                    
                    if (this.testeCqFio.nomeOperador =='' || this.testeCqFio.nomeOperador==null)  {
                        this.apiDisplayMensagem('Informe um operador válido.');
                        validado = false; 
                        return validado;
                    }                       



                if (this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05'){ 

                    if(this.testeCqFio.dobradora == ''){
                        this.apiDisplayMensagem('Informe a dobradora')
                       validado = false; 
                       return validado;  
                    }

                    //this.tipoMaquinaDesabilitado = true;
                    //this.dobradoraDesabilitado = true;



                }

                return validado;




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
                           this.tipoOperacao = 'E';
                           this.exclusao();
                        } else if(this.acao == 'cancelaEdicao')
                        {
                            this.resetarForm();
                        } else if(this.acao == 'pesquisar')
                        {
                            this.$router.push( { name: 'testecqfiopesquisa' } ) 
                        }
                       
                    }

           }, 
           
 

           resetarForm(){ 

                    if(this.simNaoRetorno == 'S'){ 
                 
                        if (this.tipoOperacao == 'E'){

                                this.testeCqFioInicial={ 
                                id:'' ,	 
                                idfil:'' ,  
                                tipoTesteFiacao:'' , 
                                dobradora:'' , 	
                                dataTeste:'' ,	 
                                turno:'' ,	 
                                operador:'' , 
                                localFisico:'' ,	 
                                ladoMaquina:'' ,	 
                                codigoMaquina:'' , 
                                item:'' ,	 
                                loteFiacao:'' , 
                                estiragem:'' , 
                                usuarioInclusao:'' ,	 
                                usuarioAlteracao:'' ,  
                                dataInclusao:'' ,	 
                                dataAlteracao:'' , 
                                testeQualidadeFioDetalheDTO :[] ,
                                tipoMaquina:'' ,
                                descMaquina:'',
                                nomeOperador:'',
                                observacao:'',
                                descItem:''
                            }  


                        }else{

 
                            this.testeCqFioInicial={ 
                                id:'' ,	 
                                idfil:'' ,  
                                tipoTesteFiacao:this.testeCqFio.tipoTesteFiacao ,
                                dobradora:this.testeCqFio.dobradora, 	
                                dataTeste:this.testeCqFio.dataTeste,	 
                                turno:this.testeCqFio.turno,	 
                                operador:this.testeCqFio.operador,
                                localFisico:'', 
                                ladoMaquina:'',  
                                codigoMaquina:'',   
                                item:this.testeCqFio.item,  	 
                                loteFiacao:this.testeCqFio.loteFiacao,   
                                estiragem:'' , 
                                usuarioInclusao:'' ,	 
                                usuarioAlteracao:'' ,  
                                dataInclusao:'' ,	 
                                dataAlteracao:'' , 
                                testeQualidadeFioDetalheDTO :[] ,
                                tipoMaquina:this.tpMaquina,  
                                descMaquina:'',
                                nomeOperador:this.testeCqFio.nomeOperador,   
                                observacao:'',
                                descItem:this.testeCqFio.descItem  
                            }
                       } 
 
 

                        this.testeCqFio = Object.assign({},this.testeCqFioInicial); 
                         
                        this.erros= '';
                        this.mensagemSucesso= '';
                        this. mensagemErro= ''; 
                        this.haErros= false;      
                        this.haSucesso= false;
                        this.tipoOperacao = 'I';  
                        this.aTesteDetalhe=[]; 
                        this.testeCqFioDetalheDAO = []; 
                        this.testeCqFio.id=0;

                        this.exibeDetalhe = false;                        

                        //this.vTemp = '.  ';
                        
                        this.informarTesteDesabilitado = false;
                        this.mediaTeste = 0;
                        this.desvioPadraoTeste=0;
                        this.coeficienteVariacaoTeste=0;
                     
                        
                        
                        this.configuraCampos('I' )  ;
                        this.scrollToTop();


                    }  

            },           
 
  
            async populaForm(){   

                    let url;
                    let dataFormatada;
                    let dataTesteFormatada;
                     
                    let mLote,mDobradora, mOperador, mNomeOperador
                    
                    this.resultado = "";
                    
                    mLote = this.testeCqFio.loteFiacao;
                    mDobradora = this.testeCqFio.dobradora;
                    mOperador = this.testeCqFio.operador;
                    mNomeOperador = this.testeCqFio.nomeOperador;

                    //console.log('populaForm')
                    //console.log(mLote)
                    //console.log(this.tipoOperacao)




                    this.msgProcessamento = "Processando" ;
                    this.apiProcessamento()  ;  

                    url = `${process.env.VUE_APP_BASE_URL}/tqf/busca`  
                    //console.log(url)

                    dataTesteFormatada =  this.testeCqFio.dataTeste.substring(0,4) +this.testeCqFio.dataTeste.substring(5,7) + this.testeCqFio.dataTeste.substring(8,10)  

                    //console.log('dataTesteFormatada')
                    //console.log(dataTesteFormatada)


                    this.testeCqFioDAO={ 
                            "id":this.testeCqFio.id ,	 
                            "idfil":this.$store.state.usuarioSistema.idfil, 
                            "tipoTesteFiacao": this.testeCqFio.tipoTesteFiacao , 
                            "dobradora":'' , 	
                            "dataTeste":'' ,	 
                            "turno":this.testeCqFio.turno ,   
                            "operador":'' , 
                            "localFisico":this.testeCqFio.localFisico ,  	 
                            "ladoMaquina":this.testeCqFio.ladoMaquina ,  	 
                            "codigoMaquina":this.testeCqFio.codigoMaquina,    
                            "item":this.testeCqFio.item ,   	 
                            "loteFiacao":'' , 
                            "estiragem":'' , 
                            "usuarioInclusao":'' ,	 
                            "usuarioAlteracao":'' ,  
                            "dataInclusao":'' ,	 
                            "dataAlteracao":'' , 
                            "testeQualidadeFioDetalheDTO" :[] , 
                            "observacao":'',
                            "dataTesteParam":dataTesteFormatada
                    
                    },   

                    //console.log(this.testeCqFioDAO)


                    await this.axios.put(
                        url,
                        JSON.stringify(this.testeCqFioDAO),
                        this.apiTokenHeader({ "Content-Type": "application/json" })
                    ) 
                    .then(response => {

                            //console.log("PopulaForm");
                            this.resultado = response.data;  
                            
                            //console.log(this.resultado);  
                            /// A pesquisa da tela de pesquisa é feita pelo id portanto é preciso preencher estes campos
                            if(this.tipoOperacao == 'A') {   

                                if (this.resultado.dataTeste != null){

                                      dataFormatada = this.resultado.dataTeste.split('/').reverse().join('-');
                                      this.testeCqFio.dataTeste = dataFormatada ;   
                                        
                                }else{
                                       this.testeCqFio.dataTeste = "" ;                       
                                }  

                                if (this.resultado.turno != null){
                                    this.testeCqFio.turno = this.resultado.turno;  
                                        
                                }else{
                                    this.testeCqFio.turno = "" ;   
                   
                                }      
                                
                                if (this.resultado.ladoMaquina != null){
                                    this.testeCqFio.ladoMaquina = this.resultado.ladoMaquina;  
                                        
                                }else{
                                    this.testeCqFio.ladoMaquina = "" ;   
                   
                                }       
                                
                                if (this.resultado.tipoTesteFiacao != null){
                                    this.testeCqFio.tipoTesteFiacao = this.resultado.tipoTesteFiacao;  
                                        
                                }else{
                                    this.testeCqFio.tipoTesteFiacao = "" ;   
                   
                                }         
                                
                                if (this.resultado.item != null){
                                    this.testeCqFio.item = Number(this.resultado.item);  
                                    this.apiPesquisaParam('itemCqFio', this.resultado.item.trim()  , this.testeCqFio)
                                        
                                }else{
                                    this.testeCqFio.item = "" ;   
                   
                                }   



                                if (this.resultado.localFisico != null){
                                    this.testeCqFio.localFisico = this.resultado.localFisico;  
                                        
                                }else{
                                    this.testeCqFio.localFisico = "" ;   
                                    ///this.testeCqFio.codigoMaquina =  "";   
                                    ////this.testeCqFio.descMaquina = "" ;    
                                }

                            }


 

                            if (this.resultado.id != null){
                                this.testeCqFio.id = this.resultado.id;
                                        
                            }else{
                                this.testeCqFio.id = 0 ;                       
                            } 

                            if (this.resultado.operador != null){
                                this.testeCqFio.operador = this.resultado.operador;
                                        
                            }else{
                                this.testeCqFio.operador = '' ;                       
                            }          
 

                            if (this.resultado.usuarioAlteracao != null){
                                this.testeCqFio.usuarioAlteracao = this.resultado.usuarioAlteracao ;     
                            
                            }else{
                                this.testeCqFio.usuarioAlteracao = "" ;                       
                            }      

                            if (this.resultado.dataAlteracao != null){
                                this.testeCqFio.dataAlteracao = this.resultado.dataAlteracao ;     
                            
                            }else{
                                this.testeCqFio.dataAlteracao = "" ;                       
                            }   
                            
                            
                            if (this.resultado.usuarioInclusao != null){
                                this.testeCqFio.usuarioInclusao = this.resultado.usuarioInclusao ;     
                            
                            }else{
                                this.testeCqFio.usuarioInclusao = "" ;                       
                            }      

                            if (this.resultado.dataInclusao != null){
                                this.testeCqFio.dataInclusao = this.resultado.dataInclusao ;     
                            
                            }else{
                                this.testeCqFio.dataInclusao = "" ;                       
                            }     


                            if (this.resultado.observacao != null){
                                this.testeCqFio.observacao = this.resultado.observacao;
                                        
                            }else{
                                this.testeCqFio.observacao = "" ;                       
                            }  

                            if (this.resultado.loteFiacao != null){
                                    this.testeCqFio.loteFiacao = this.resultado.loteFiacao;
                                            
                            }else{
                                    this.testeCqFio.loteFiacao = "" ;                       
                            }                               

                            if(this.tipoOperacao == 'I' &&  ( this.resultado != null &&  this.resultado.length == 0) ){                                     


                                //console.log('populaForm 22222222')
                                //console.log(mLote)

                                // Para manter os dados da digitação anterior e nao ter que lancar tudo novamente
                                if (this.testeCqFio.loteFiacao   != '' && this.testeCqFio.loteFiacao   != null ){


                                    //console.log('populaForm 333333333')
                                    //console.log(mLote)

                                    this.testeCqFio.loteFiacao =  mLote ;
                                }   
                                
                            }

                            /*

                            if (this.resultado.loteFiacao != null){
                                this.testeCqFio.loteFiacao = this.resultado.loteFiacao;
                                        
                            }else{
                                this.testeCqFio.loteFiacao = "" ;                       
                            }   
                            
                            */

                            if (this.resultado.estiragem != null){
                                this.testeCqFio.estiragem = this.resultado.estiragem;
                                        
                            }else{
                                this.testeCqFio.estiragem = "" ;                       
                            }  

                            if (this.resultado.dobradora != null){
                                this.testeCqFio.dobradora = this.resultado.dobradora;
                                        
                            }else{
                                this.testeCqFio.dobradora = "" ;                       
                            }      
                            
                            
                            
                            let aItens =  this.resultado.testeQualidadeFioDetalhe;  

                            //console.log('zerar aTesteDetalhe ')
                            //console.log(this.resultado)
                            //console.log(aItens)
 

                            
                            this.nInd = 0;

                            if (aItens!=null) {

 
                                    this.aTesteDetalhe=[]; 
                                    aItens.sort(function(a, b) {
                                            if (a.seqProva < b.seqProva) {
                                                return -1;
                                            }
                                            if (a.seqProva > b.seqProva) {
                                                return 1;
                                            }
                                            return 0;
                                    }); 

                                    let nPeso = 0;
                                    let nTitulo ;

                                    for (let m = 0; m < aItens.length; m++) {    

                                        this.nInd++; 
                                       
                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);

                                       // nPeso  = this.apiFormataNumero(aItens[m].peso ,2); 
                                        nPeso  = parseFloat(aItens[m].peso).toFixed(2);
                                        
                                        if(this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07'){
                                            nTitulo = parseFloat(aItens[m].titulo).toFixed(3);
                                        }else{
                                            nTitulo = parseFloat(aItens[m].titulo).toFixed(3);
                                        }
                                        

                                        if(nPeso== Infinity || isNaN(nPeso)){
                                            nPeso = ' ' 
                                        }else{
                                            nPeso = nPeso.replace('.', ',') ;
                                        }


                                        if(nTitulo== Infinity || isNaN(nTitulo)){
                                            nTitulo = ' ' 
                                        }else{
                                            if(this.tpMaquina== '04' || this.tpMaquina== '06' || this.tpMaquina== '07'){
                                               nTitulo = nTitulo.replace('.', ',') ; 
                                            }
                                        }



                                       //console.log(parseFloat(indic.titulo).toFixed(3)  == Infinity) 
                            //console.log(isNaN(parseFloat(indic.titulo).toFixed(3)))  


                                        
                                       // console.log(nPeso)

                                        this.testeItemTempAux.id=          aItens[m].id; 
                                        this.testeItemTempAux.idfil=       aItens[m].idfil;
                                        this.testeItemTempAux.idPai=       aItens[m].idPai;
                                        this.testeItemTempAux.seqProva=    aItens[m].seqProva; 
                                        this.testeItemTempAux.numeroFusos= aItens[m].numeroFusos;
                                        this.testeItemTempAux.peso=        nPeso ;
                                        this.testeItemTempAux.titulo=      nTitulo;  
                                        this.testeItemTempAux.ind =        this.nInd;   

                                        this.aTesteDetalhe.push(this.testeItemTempAux ); 

                                    }  

                                    /*
                                    if(this.nInd < 10){

                                        for (let m = this.nInd  ; m < 10; m++) {   

                                            this.nInd++;

                                            this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                            this.testeItemTempAux.id=          this.nInd; 
                                            this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                            this.testeItemTempAux.idPai=       '99';
                                            this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0'); 
                                            this.testeItemTempAux.numeroFusos= '';
                                            this.testeItemTempAux.peso=       '';
                                            this.testeItemTempAux.titulo=      ''; 
                                            this.testeItemTempAux.ind =        this.nInd; 

                                            this.aTesteDetalhe.push(this.testeItemTempAux );     

                                        }                                   
                                    

                                    }
                                        */

                                    this.aTesteDetalhe.sort(function(a, b) {
                                            if (a.seqProva < b.seqProva) {
                                                return -1;
                                            }
                                            if (a.seqProva > b.seqProva) {
                                                return 1;
                                            }
                                            return 0;
                                    });  
                                    
                                    this.mediaTeste = this.calcularMedia(this.aTesteDetalhe);


                                    //this.calculaTesteFiacao(this.aTesteDetalhe);
                                    
                            
                            }    
                            
                            //.log('BUSCA BUSCA')
                            
                            //console.log(this.tipoOperacao)
                            //console.log(this.tipoOperacao == 'I' )
                            //console.log( this.resultado != null )
                            //console.log(  this.resultado != '')
                            //console.log(  this.resultado.length)
                            //console.log(this.resultado)

                            //console.log(mLote)
                            //console.log(mOperador)


                            if(this.tipoOperacao == 'I' ){
                            
                            
                                if(this.resultado != null && this.resultado.length != 0 ){  
                                        this.tipoOperacao = 'A';  
                                        this.configuraCampos('A' )  ;  
                                        

                                        //console.log('BUSCA BUSCA AAAAAAAAA')
                               
                                }else{
                                        this.configuraCampos('I' )  ; 



                                        //console.log('BUSCA BUSCA IIIIIIIIII')

                                        //console.log(mLote)
                                        //console.log(mOperador)


                                        // Para manter os dados da digitação anterior e nao ter que lancar tudo novamente
                                         if (this.testeCqFio.loteFiacao   == '' || this.testeCqFio.loteFiacao   == null ){
                                            this.testeCqFio.loteFiacao =  mLote ;
                                         }  

                                         if (this.testeCqFio.dobradora   == '' ||  this.testeCqFio.dobradora   == null ){
                                            this.testeCqFio.dobradora =  mDobradora ;
                                         } 


                                        if (this.testeCqFio.operador   == '' || this.testeCqFio.operador   == null ){
                                            this.testeCqFio.operador =  mOperador ;
                                            this.testeCqFio.nomeOperador =  mNomeOperador ;
                                        }  
                                        
                                                                         

                                }       
                                   

                                this.mostraDescricaoItem();

                            }  else{

                                this.apiPesquisaParam('operadorCpfFio', this.testeCqFio.operador  , this.testeCqFio) 
                                this.configuraCampos('A' )  ; 
                                this.buscaMaquinaPorLocal();                                 
      
                                

                            }
                            
/*
                            if(this.resultado.loteFiacao==''  || this.resultado.loteFiacao==null ){ 
                                this.configuraCampos('I' )  ;
                            }else{ 
                                this.apiPesquisaParam('operadorCpfFio', this.testeCqFio.operador  , this.testeCqFio) 
                                this.configuraCampos('A' )  ; 
                                this.buscaMaquinaPorLocal(); 
                             
                            }   
*/

                            this.msgProcessamento = '';
                            return true;




                    }).catch(error => {  
                                    
                            console.log("Erro: ", error); 
                            this.msgProcessamento = '' 
                            this.apiDisplayMensagem(error ) 
                            return false;
                    }); 
                    
                    return true;

            },  

            populaGridInclusao(){

                    this.aTesteDetalhe=[]; 
                    this.nInd = 0; 
                    //this.vTemp = '.';
                    //this.vTemp = ' ';


                    //console.log('populaGridInclusao 00000000')

                    if (this.validaCampos() == true){

                           this.exibeDetalhe = true;

                           //console.log('populaGridInclusao 1111111111')


                            if(this.tpMaquina=='04' || this.tpMaquina=='06'  || this.tpMaquina=='07' ){ 
                            
                                    //console.log('populaGridInclusao 22222222222222')
                                    for (let m = 0  ; m < 10; m++) {     
        
                                        this.nInd++;
                                        this.testeItemTempAux = {}

                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                        this.testeItemTempAux.id=          this.nInd; 
                                        this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                        this.testeItemTempAux.idPai=       0;
                                        this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0');
                                        this.testeItemTempAux.numeroFusos= '';
                                        this.testeItemTempAux.peso=       '';
                                        this.testeItemTempAux.titulo=      '';  
                                        this.testeItemTempAux.ind =        this.nInd; 

                                        this.aTesteDetalhe.push(this.testeItemTempAux );     

                                    } 
                                    


                            
                            }else if(this.tpMaquina=='02' || this.tpMaquina=='03'){ 


                                    //console.log('populaGridInclusao 44444444444444')


                                    for (let m = 0  ; m < 3; m++) {   
                                        
                                        
                                        //console.log('populaGridInclusao 44444444444444 11111111111')

                                        this.nInd++;
                                        this.testeItemTempAux = {}

                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                        this.testeItemTempAux.id=          this.nInd; 
                                        this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                        this.testeItemTempAux.idPai=       0;
                                        this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0');  
                                        this.testeItemTempAux.numeroFusos= '';
                                        this.testeItemTempAux.peso=       '';
                                        this.testeItemTempAux.titulo=     '';  
                                        this.testeItemTempAux.ind =        this.nInd; 

                                        this.aTesteDetalhe.push(this.testeItemTempAux );     

                                    }     



                            }else if(this.tpMaquina=='05'){ 


                                    //console.log('populaGridInclusao 44444444444444')
                                    

                                    for (let m = 0  ; m < 18; m++) {   
                                        
                                        
                                        //console.log('populaGridInclusao 44444444444444 11111111111')
                                    
                                        this.nInd++;
                                        this.testeItemTempAux = {}

                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                        this.testeItemTempAux.id=          this.nInd; 
                                        this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                        this.testeItemTempAux.idPai=       0;
                                        this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0');  
                                        this.testeItemTempAux.numeroFusos= '';
                                        this.testeItemTempAux.peso=       '';
                                        this.testeItemTempAux.titulo=     '';  
                                        this.testeItemTempAux.ind =        this.nInd; 

                                        this.aTesteDetalhe.push(this.testeItemTempAux );     

                                    }     

                                   
                        
                            }  

                            this.aTesteDetalhe.sort(function(a, b) {
                                if (a.seqProva < b.seqProva) {
                                    return -1;
                                }
                                if (a.seqProva > b.seqProva) {
                                    return 1;
                                }
                                return 0;
                            });   


                    } 



            },

            calculaDadosTitulo(indicd, pEvento){ 
                    indicd.titulo =  pEvento.target.value ; 
                    this.mediaTeste = this.calcularMedia(this.aTesteDetalhe); 
            },                 

            calculaDadosPeso(indicd, pEvento){ 
                    indicd.peso =  pEvento.target.value ; 
                    this.calculaDados(indicd);    
            },            

            calculaDados(indc){

                if (this.calculaTitulo(indc)==true){ 
                    this.mediaTeste = this.calcularMedia(this.aTesteDetalhe); 
                } 

            },
            calculaTitulo(indic){ 


                  let pPeso; 
                /// !isNaN(val)
                  //console.log(' calculaTitulo  00000000')
                  if (this.tpMaquina== '02' || this.tpMaquina== '03' || this.tpMaquina== '05'){ 

                       //console.log(' calculaTitulo  11111')
                       //console.log(indic.peso) 
                       //console.log(indic.peso != '')
                       //console.log(indic.peso != null)
                       //console.log(indic.peso != 0.00)
                       //console.log(indic.peso != '0,00')
                       //console.log(indic.peso != 'NaN')
                       //console.log(indic.peso != 'Infinity')
                       
                       
                       pPeso = indic.peso;

                       if (pPeso.includes(',')) {
                           pPeso = pPeso.replace(',', '.'); 
                       }

                       //console.log(pPeso)
                       //console.log(parseFloat(7.08))
                       //console.log(parseFloat(7.08)  / parseFloat(pPeso)  )
                       //console.log(parseFloat(parseFloat(7.08)  / parseFloat(pPeso) ).toFixed(3) )
 
                      
                       //parseFloat(pPeso)

                   
                       
                       if(indic.peso != '' && indic.peso != null && indic.peso != 0.00 && indic.peso != '0,00'   && indic.peso != 'NaN' && indic.peso != Infinity) {

                            console.log(' calculaTitulo  222222')
                            if (this.testeCqFio.dobradora == 'M'  ){

                                //console.log(' calculaTitulo  3333')
                                //indic.titulo = (12 * 0.59) / parseFloat(parseFloat(indic.peso).toFixed(2)); 
                                indic.titulo =  (7.08)  / pPeso ; 
                            }else{
                                //console.log(' calculaTitulo  44444')
                                //indic.titulo = (10.9728 * 0.59) / parseFloat(parseFloat(indic.peso).toFixed(2)); 
                                indic.titulo =  (6.48) / pPeso  ;   
                            }  
                            //console.log(parseFloat(indic.titulo).toFixed(3)  == Infinity) 
                            //console.log(isNaN(parseFloat(indic.titulo).toFixed(3)))  


                            if ( parseFloat(indic.titulo).toFixed(3)  != Infinity) {                            
                               indic.titulo =  parseFloat(indic.titulo).toFixed(3) 
                            }else{
                                 indic.titulo = ''
                            }   

                            return true;
                       }else if(indic.peso == 0.00 || indic.peso == '0,00' ||  isNaN(indic.peso)  ){ 
                          //console.log(' calculaTitulo  666666')
                          indic.titulo = '';
                          return true;
                       }else {
                          //console.log(' calculaTitulo  77777')
                          indic.titulo = '';
                          return true;
                       }

                  }else{
                    //console.log(' calculaTitulo  8888888')
                    indic.titulo = '';
                    return true;
                  }

                  

                  
            },
            calcularMedia(valores) {


                    let soma, totalTestes,vlr , md; 
                    totalTestes = 0;
                    soma = 0.000 ;
                    md = 0.000;

                    for (let m = 0; m < valores.length; m++) {    
                        if(valores[m].titulo != '' && valores[m].titulo != null && valores[m].titulo != 0.000 && valores[m].titulo != '0,0' && valores[m].titulo != '0,00' && valores[m].titulo != '0,000' && valores[m].titulo != 'NaN' && valores[m].titulo != 'Infinity') {
                         
                            vlr   =  valores[m].titulo;  

                            if (this.tpMaquina!= '02' && this.tpMaquina!= '03'){ 
                                if(vlr.length > 0){ 
                                    vlr = parseFloat(vlr.replace(",", "."));
                                }

                            }

                            soma +=  vlr;      
                            totalTestes++;  

                        }
                         
                    }  
                    if (!isNaN(parseFloat(soma).toFixed(3) / totalTestes )  ){
                          md = parseFloat(soma).toFixed(3) / totalTestes ; 
                    }else{

                          md = 0.000;
                    }



                    if (!isNaN(this.calcularDesvioPadrao(valores,md,totalTestes))  ){
                        this.desvioPadraoTeste = this.calcularDesvioPadrao(valores,md,totalTestes)  ;   
                    }else{

                        this.desvioPadraoTeste = 0.000  ;   
                    }


                     
                    return  md;
                   
                  
                

            },
            calcularDesvioPadrao(valores,md,totalTestes ) {

                    let vlr ;  
                    let somaQuadrados;
                    let dp;
                     
                    somaQuadrados = 0.000 ;

                    for (let m = 0; m < valores.length; m++) {    
                        if(valores[m].titulo != '' && valores[m].titulo != null && valores[m].titulo != 0.000 && valores[m].titulo != '0,0' && valores[m].titulo != '0,00' && valores[m].titulo != '0,000' && valores[m].titulo != 'NaN' && valores[m].titulo != 'Infinity') {
                         
                            vlr   =  valores[m].titulo;  

                            if (this.tpMaquina!= '02' && this.tpMaquina!= '03'){ 
                                if(vlr.length > 0){ 
                                    vlr = parseFloat(vlr.replace(",", "."));
                                }

                            } 
                            somaQuadrados +=  Math.pow(vlr - md, 2)   ;    
                        }
                         
                    }    
                     
                    const variancia = somaQuadrados / (totalTestes );
                    dp = Math.sqrt(variancia) ; // Arredonda para 4 casas decimais
                    this.coeficienteVariacaoTeste = this. calcularCV(md,dp );
                    return dp;
            },
            calcularCV(md,dp ) {
                   
                    
                    let coefVar = 0.00;
                    if (md>0){
                        coefVar = (dp/md)*100 
                    }

                    if (isNaN(coefVar))  { 
                        coefVar = 0.00;
                    }


                    
                    return  coefVar;
            },


 
            configuraCampos(oper ){   

                if(oper=='I'){ 

                    this.dataTesteDesabilitado=false;	 
                    this.turnoDesabilitado=false;	 
                    this.itemDesabilitado=false;	 
                    this.loteFiacaoDesabilitado=false; 
                    this.estiragemDesabilitado=false; 
                    this.dobradoraDesabilitado=false;
                    this.tipoTesteFiacaoDesabilitado=false;
                    this.localFisicoDesabilitado=false;	  
                    this.operadorDesabilitado=false;	
                    this.observacaoDesabilitado=false;	 
                    this.ladoMaquinaDesabilitado=false;	  
                    this.tipoMaquinaDesabilitado=false;
                     
                   

                }else if(oper=='A' || oper=='E'){
 
                    this.dataTesteDesabilitado=true;	 
                    this.turnoDesabilitado=true;	 
                    this.itemDesabilitado=true;	 
                    this.loteFiacaoDesabilitado=false; 
                    this.estiragemDesabilitado=false;  
                    this.dobradoraDesabilitado=true;
                    this.tipoTesteFiacaoDesabilitado=true; 
                    this.localFisicoDesabilitado=true;	 
                    this.operadorDesabilitado=false;	
                    this.observacaoDesabilitado=false;	 
                    this.ladoMaquinaDesabilitado=true;	  
                    this.tipoMaquinaDesabilitado=true;
                    this.informarTesteDesabilitado=true;

                    this.exibeDetalhe=true;
  
                   
                }  
            }, 

        nomeCampo(p1,p2){
            return p1 + p2 ;

        },
 

       
        async submitForm() {   

                console.log("submitForm");
 
                let objItem; 
                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                this.aTesteDet = [] 
 
                // Obtém a data atual
                let dataAtual = new Date();
                let pesoAmostra;
                let tituloAmostra;
                let estiragemTeste;

                // Obtém as partes individuais da data atual
                let ano = dataAtual.getFullYear();
                let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
                let dia = ("0" + dataAtual.getDate()).slice(-2);

                // Formata a data atual como "yyyy-mm-dd"
                let dataAtualFormatada = `${ano}-${mes}-${dia}`; 

                 if( this.testeCqFio.dataTeste > dataAtualFormatada ){
                    this.apiDisplayMensagem('Data inválida.' ) 
                    return false; 
                 } 
                 
                dataAtual.setDate(dataAtual.getDate() - 30); 
                 
                const dataTesteDate = new Date(this.testeCqFio.dataTeste); 
                dataTesteDate.setHours(0, 0, 0, 0);
                dataAtual.setHours(0, 0, 0, 0);

                if (this.tipoOperacao=="I") {  
                    if( dataTesteDate < dataAtual){
                        this.apiDisplayMensagem('Data inválida.' ) 
                        return false;                    
                    } 
                }

               // if(this.validaLado("submit")==false){
                //    return false;
                //} 

                if (typeof this.testeCqFio.estiragem  === "string"){
                    estiragemTeste = parseFloat(this.testeCqFio.estiragem.replace(",", "."))    ;                                
                }else{
                    estiragemTeste = this.testeCqFio.estiragem;
                }                   
                 
 
                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                    return;
                } else {  

                    let dataInsercao;
                    let dataAlteracao;
                    let dataAtual = new Date();
                    let dia = String(dataAtual.getDate()).padStart(2, '0');
                    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é baseado em zero, portanto, é necessário adicionar 1
                    let ano = dataAtual.getFullYear();
                    let dataFormatada = `${dia}/${mes}/${ano}`;       
                    
                    

                    if(this.tipoOperacao=="I"){
                            dataInsercao = dataFormatada;
                            this.testeCqFio.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                            this.testeCqFio.usuarioInclusao = this.$store.state.usuarioSistema.codigo;
                    }else{
                            if (typeof this.testeCqFio.dataInclusao   === "string") {
                                dataInsercao  = this.testeCqFio.dataInclusao ;
                            } else if (this.testeCqFio.dataInclusao  instanceof Date) {
                                dataInsercao  = this.$moment(this.testeCqFio.dataInclusao.format("DD/MM/YYYY")  )
                            } 

                            dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    }                     

                    
                    if (this.tipoOperacao=="I") {   

                        let url = `${process.env.VUE_APP_BASE_URL}/tqf/insert` 

                      
                        console.log(url)

                        if (this.aTesteDetalhe!=null) { 
                                
                                for (let m = 0; m < this.aTesteDetalhe.length; m++) {    


                                    if (typeof this.aTesteDetalhe[m].peso === "string"){
                                        pesoAmostra = parseFloat(this.aTesteDetalhe[m].peso.replace(",", "."))    ;                                
                                    }else{
                                        pesoAmostra = this.aTesteDetalhe[m].peso;
                                    }


                                    if (typeof this.aTesteDetalhe[m].titulo   === "string"){
                                        tituloAmostra = parseFloat(this.aTesteDetalhe[m].titulo.replace(",", "."))    ;
                                    }else{
                                        tituloAmostra = this.aTesteDetalhe[m].titulo;
                                    }                                    
       

                                    
                                    objItem = {
                                               id:null,
                                               idfil:this.$store.state.usuarioSistema.idfil, 
                                               idPai:      this.aTesteDetalhe[m].idPai,
                                               seqProva:    this.aTesteDetalhe[m].seqProva, 
                                               numeroFusos: this.aTesteDetalhe[m].numeroFusos,
                                               peso:        pesoAmostra    ,
                                               titulo:      tituloAmostra  
                                    }
                                  

                                    this.aTesteDet.push(objItem); 

                                }  

                        }     

                     

                       
                        this.testeCqFioDAO =
                            {

                                id:null ,	 
                                idfil:this.$store.state.usuarioSistema.idfil,  
                                tipoTesteFiacao:this.testeCqFio.tipoTesteFiacao , 
                                dobradora:this.testeCqFio.dobradora , 
                                dataTeste:this.$moment(this.testeCqFio.dataTeste).format("DD/MM/YYYY"),  
                                turno:this.testeCqFio.turno , 	 
                                operador:this.testeCqFio.operador ,     
                                localFisico:this.testeCqFio.localFisico ,	
                                ladoMaquina:this.testeCqFio.ladoMaquina ,  
                                codigoMaquina:this.testeCqFio.codigoMaquina ,	 
                                item:this.testeCqFio.item ,	 	 
                                loteFiacao:this.testeCqFio.loteFiacao ,	 
                                estiragem:estiragemTeste,	  
                                usuarioInclusao:this.testeCqFio.usuarioInclusao  , 
                                usuarioAlteracao:null, 
                                dataInclusao:  dataInsercao,
                                dataAlteracao:  dataInsercao ,   
                                testeQualidadeFioDetalheDTO : this.aTesteDet ,
                                tipoMaquina:this.tpMaquina, 	            
                                observacao:this.testeCqFio.observacao   
 
                            }   

                            console.log(this.testeCqFioDAO);
 

                            await this.axios.post(
                                url,
                                JSON.stringify(this.testeCqFioDAO),
                                this.apiTokenHeader({ "Content-Type": "application/json" })
                            )
                            .then(response => {

                                this.resultado = response.data;  

                                this.apiDisplayMensagemSucesso('Registro gravado com sucesso.' )                              
                                this.tipoOperacao = 'A'; 
                                this.configuraCampos('A' )  ;
                            
                            })
                            .catch(error => { 
                              
                                console.log("Erro: ", error.response.data); 
                                this.apiDisplayMensagem(error.response.data ) 
                            });  
 
                    } else {


                                //console.log('AAAAAAAA')

                                if (this.tipoOperacao == 'A'   ) {   

                                       let url = `${process.env.VUE_APP_BASE_URL}/tqf/update` 
                                
                                        if (this.aTesteDetalhe!=null) { 
                                                
                                                for (let m = 0; m < this.aTesteDetalhe.length; m++) {    

                                                    if (typeof this.aTesteDetalhe[m].peso === "string"){
                                                        pesoAmostra = parseFloat(this.aTesteDetalhe[m].peso.replace(",", "."))    ;                                
                                                    }else{
                                                        pesoAmostra = this.aTesteDetalhe[m].peso;
                                                    }


                                                    if (typeof this.aTesteDetalhe[m].titulo   === "string"){
                                                        tituloAmostra = parseFloat(this.aTesteDetalhe[m].titulo.replace(",", "."))    ;
                                                    }else{
                                                        tituloAmostra = this.aTesteDetalhe[m].titulo;
                                                    }   

                                                    
                                                    objItem = {
                                                            id :this.aTesteDetalhe[m].idPai,
                                                            idfil:this.$store.state.usuarioSistema.idfil, 
                                                            idPai:       this.aTesteDetalhe[m].idPai,
                                                            seqProva:    this.aTesteDetalhe[m].seqProva, 
                                                            numeroFusos: this.aTesteDetalhe[m].numeroFusos,
                                                            peso:        pesoAmostra ,
                                                            titulo:      tituloAmostra
                                                    
                                                    
                                                    }
                                                                

                                                    this.aTesteDet.push(objItem); 

                                                }  

                                        }     

                                    
                                        this.testeCqFioDAO =
                                            {

                                                id:this.testeCqFio.id , 
                                                idfil:this.$store.state.usuarioSistema.idfil,  
                                                tipoTesteFiacao:this.testeCqFio.tipoTesteFiacao , 
                                                dobradora:this.testeCqFio.dobradora , 
                                                dataTeste:this.$moment(this.testeCqFio.dataTeste).format("DD/MM/YYYY"),  
                                                turno:this.testeCqFio.turno , 	 
                                                operador:this.testeCqFio.operador ,     
                                                localFisico:this.testeCqFio.localFisico ,	
                                                ladoMaquina:this.testeCqFio.ladoMaquina ,  
                                                codigoMaquina:this.testeCqFio.codigoMaquina ,	 
                                                item:this.testeCqFio.item ,	 	 
                                                loteFiacao:this.testeCqFio.loteFiacao ,	 
                                                estiragem:estiragemTeste,	  
                                                usuarioInclusao:this.testeCqFio.usuarioInclusao  , 
                                                usuarioAlteracao:this.$store.state.usuarioSistema.codigo,
                                                dataInclusao: this.testeCqFio.dataInclusao,
                                                dataAlteracao:  dataAlteracao ,   
                                                testeQualidadeFioDetalheDTO : this.aTesteDet ,
                                                tipoMaquina:this.tpMaquina, 	 	            
                                                observacao:this.testeCqFio.observacao   
                
                                            }   


                                            console.log(this.testeCqFioDAO);                                            

 
                                            
                                        await this.axios.put(
                                            url,
                                            JSON.stringify(this.testeCqFioDAO),
                                            this.apiTokenHeader({ "Content-Type": "application/json" })
                                        )
                                        .then(response => {    

                                            this.resultado = response.data;  
                                            this.apiDisplayMensagemSucesso('Registro alterado com sucesso.' ) 
                                                                  

                                        
                                        })
                                        .catch(error => { 
                                            console.log("Erro: ", error.response.data);
                                            this.apiDisplayMensagem(error.response.data ) 
                                        });
 
 

                                }  

                            }



                }  
 
        },        


       } ,
        async created(){    

                this.scrollToTop();


                //this.vTemp = '.';
               
                this.populaTipoMaquina();  
                this.populaTipoTesteCQFio();

                
/*
                        this.testeCqFio.dataTeste = "21/10/2024" ;                       
                        this.testeCqFio.turno = "A" ;   
                        this.testeCqFio.ladoMaquina = "A" ;   
                        this.testeCqFio.tipoTesteFiacao = "TESTE" ;   
                        this.testeCqFio.item = "783582" ;   
                        this.testeCqFio.localFisico = "001" ;   
                         
                        this.testeCqFio.operador = '17071' ;    
                        this.testeCqFio.nomeOperador = '';
                        this.testeCqFio.observacao = "" ;                       
                        this.testeCqFio.loteFiacao = "0000000180" ;     
                        this.tpMaquina = '02'                  
                         



  */              


                if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                    this.navegarParaLogin();
                } 

                if(this.operacao=='A'){
                    this.tipoOperacao = 'A' 
                }else if(this.operacao=='I'){
                    this.tipoOperacao = 'I'  
                }else if(this.operacao=='E'){
                    this.tipoOperacao = 'E'  
                }   

              

                if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){   

                    this.testeCqFio.id = this.idProps;   
                    this.tpMaquina = this.tipoMaquinaProps;   
                    const resposta = await this.populaForm();     

                    if (!(resposta === true) ){
                        console.log('Erro de cadastro BuscaChave' );      
                    } 

                    this.informarTesteDesabilitado = true;
                    this.exibeDetalhe=true;
 
           

                } else{
                    this.tpMaquina = '01';
                }

                 if(this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'){
                    this.larguraGrid= '90%';
                    this.margemEsquerdaGrid='3%';

                    this.larguraRodapeGrid = '90%';
                



                 }else{
                    //this.larguraGrid= '20%';
                    //this.margemEsquerdaGrid='36%';
                    this.larguraGrid= '25%';
                    this.margemEsquerdaGrid='33%';

                    this.larguraRodapeGrid = '50%';
                              
                 }
                

 

 

        },        

       
       mounted(){ 
            
            this.scrollToTop();
 
       
       },
       watch: {
       
            tpMaquina(newValue,oldValue) {

                if(newValue!=oldValue){

                       this.testeCqFioInicial={ 
                                id:'' ,	 
                                idfil:'' ,  
                                tipoTesteFiacao:'' , 
                                dobradora:'' , 	
                                dataTeste:'' ,	 
                                turno:'' ,	 
                                operador:'' , 
                                localFisico:'' ,	 
                                ladoMaquina:'' ,	 
                                codigoMaquina:'' , 
                                item:'' ,	 
                                loteFiacao:'' , 
                                estiragem:'' , 
                                usuarioInclusao:'' ,	 
                                usuarioAlteracao:'' ,  
                                dataInclusao:'' ,	 
                                dataAlteracao:'' , 
                                testeQualidadeFioDetalheDTO :[] ,
                                tipoMaquina:'' ,
                                descMaquina:'',
                                nomeOperador:'',
                                observacao:'',
                                descItem:''
                            }  
                            this.testeCqFio = Object.assign({},this.testeCqFioInicial); 


                
   

                }


            } 
        }
      

   }

   </script>

  