 
<template  >
    
    <v-form  ref="formulario" @submit.stop.prevent="submitForm" style="width:100%;height: 100%;" >    
       <!-- <v-container  style="background-color:#3290ce;">-->
            <div   > 
                 
                <div style="background-color:white; ">
                <!--  height: 1000px;
                <v-card rounded="lg" class=" elevation-12" 
                        
                    :style="{  minWidth:  this.$store.state.larguraCard,
                            height:  '20000px'}" 
                    
                    >  
                      -->

                      
                      <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >   

                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Movimentação de Estoque</b></p>                               
                            </div> 
                        </div>    


                        <div class="espacoEntreComponentes d-flex justify-content-end"   style=" height:45px; "  v-if="this.$store.state.tipoDispositivo == 'desktop'"    > 
                           
                             
                                
                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S' && parseFloat(this.movimento.pesoMedio) > 0">    
                                             

                                            <div >
                                                
                                                <v-text-field
                                                     
                                                    v-model.trim="this.pPesoDocumento" 
                                                    id="pesoDocumento"
                                                    label="Peso Digitado" 
                                                    ref="pesoDocumento"   
                                                    style=" width: 150px;    " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    disabled
                                                    
                                                    inputmode="numeric"
                                                   
                                                    density="compact" 
                                                    
                                                ></v-text-field>                                    
                                            </div>
                                   
                                </div>                                 


                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'  &&  parseFloat(this.movimento.pesoMedio) > 0">    
                                            
                                            <div >
                                                
                                                <v-text-field
                                                    
                                                    v-model.trim="this.pNumVolumes" 
                                                    id="qtdeDigitado"
                                                    label="Num.Vol Digitado" 
                                                    ref="qtdeDigitado"   
                                                    style=" width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    disabled
                                                    
                                                    inputmode="numeric"
                                                    
                                                    density="compact" 
                                                    
                                                ></v-text-field>                                    
                                            </div>
                                   
                                </div>                                 


 
                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'  &&  parseFloat(this.movimento.pesoMedio) > 0" >    
                                            
                                            <div >
                                                
                                                <v-text-field
                                                     
                                                    v-model.trim="this.pPesoMedio" 
                                                    id="pesoMDigitado"
                                                    label="Peso Médio Digitado" 
                                                    ref="pesoMDigitado"   
                                                    style=" width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    disabled
                                                     
                                                    inputmode="numeric"
                                                    
                                                    density="compact" 
                                                    
                                                ></v-text-field>                                    
                                            </div>
                                   
                                </div>                                 


                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S' && this.validaPeso()   &&  parseFloat(this.movimento.pesoMedio) > 0 ">    
                                            
                                            <div >
                                                <v-icon
                                                    class="mb-6"
                                                    color="green"
                                                    icon="mdi-check"
                                                    size="55"
                                               ></v-icon>                                                 
                                                                                  
                                            </div>
                                   
                                </div>  

                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S' && !this.validaPeso()   &&  parseFloat(this.movimento.pesoMedio) > 0   ">    
                                            
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

                      </div>  

                    <div class="flex-linha"  style="margin-left:6%;width:94%;margin-top: 1%; ">  
                            
                                <div    class="espacoEntreComponentes">  
                                 
                                    <v-autocomplete
                                        
                                        :items="tipoMovimentoItens"    
                                        label="Tipo Movimento"          
                                        v-model="this.movimento.tipoMovimento"   
                                        @blur="buscaTipoMovimento"
                                        item-title="codigo" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 160px;" 
                                        :disabled="tipoMovimentoDesabilitado"  
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                  
                                        
                                    ></v-autocomplete> 

                                </div>                        


                                <div    class="espacoEntreComponentes">  

                                    <v-autocomplete
                                         
                                        label="Tipo MP"
                                        :items="tipoMPItens" 
                                        :disabled="tipoMPDesabilitado"                                           
                                        v-model="this.movimento.tipoMP"   
                                        item-title="codigo" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 120px; " 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @blur="buscaTipoMatP"
                                    ></v-autocomplete> 

                                </div>   
                                
                                

                                <div   class="espacoEntreComponentes">   
                                   <!-- <label style='font-size:16px'>Fornecedor</label>-->
                                    <div class="input-group">  
                                        
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                     
                                                    v-model.trim="this.movimento.fornecedor" 
                                                    label="Fornecedor"
                                                    id="fornecedor"                                                  
                                                    ref="fornecedor"  
                                                    maxlength="5" 
                                                    @blur="buscaByChave"
                                                    style=" width: 120px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    :disabled="fornecedorDesabilitado"  
                                                    type="number"
                                                    inputmode="numeric"
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                   
                                                    
                                                ></v-text-field>    
                                                    
                                                <v-btn   data-bs-toggle="modal" 
                                                    data-bs-target="#modalPesquisaFornecedor"  
                                                    tabindex="-1"  @click="apiFlushPesquisa" :disabled="fornecedorDesabilitado" 
                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
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
                                                    v-model="this.nomeFornecedor" 
                                                    id="nomeFornecedor"   
                                                    disabled 
                                                    class="limitadorMedia"                                                                                                    
                                                    style="background-color:rgb(210, 210, 246); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                    density="compact"
                                                ></v-text-field>   
                                            </div>     
                                    </div>

                                </div>


                                <div   class="espacoEntreComponentes">   
                                    
                                            
                                            <div >
                                                
                                                <v-text-field
                                                     
                                                    v-model.trim="this.movimento.notaFiscal" 
                                                    id="notaFiscal"
                                                    label="Documento" 
                                                    ref="notaFiscal"  
                                                    maxlength="10" 
                                                    @blur="buscaByChave"
                                                    style=" width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    :disabled="notaFiscalDesabilitado"  
                                                    type="text"                                                    
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                    
                                                ></v-text-field>                                    
                                            </div>
                                   
                                </div>     
                                
                                <div   class="espacoEntreComponentes">   
                                    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            
                                            v-model.trim="this.movimento.dataBase" 
                                            id="dataBase"
                                            label="Data Movimento" 
                                            ref="dataBase"    
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="dataBaseDesabilitado"  
                                            type="date"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>                                     

                                <div   class="espacoEntreComponentes">   
                                    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            
                                            v-model.trim="this.movimento.dataEmissao" 
                                            id="dataEmissao"
                                            label="Data Emissão" 
                                            ref="dataEmissao"  
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="dataEmissaoDesabilitado"  
                                            type="date" 
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>    
                <!--    </div>     FIM LINHA 0001   

                    <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%; ">   -->  

                                <div    class="espacoEntreComponentes" v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'">   

                                    <v-autocomplete
                                         
                                        label="Produtor"
                                        :items="produtorItens" 
                                        :disabled="produtorDesabilitado "    
                                        v-model="this.movimento.produtor"   
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 270px; " 
                                        bg-color="white"     
                                         
                                        density="compact"
                                        
                                    ></v-autocomplete> 

                                </div> 
                                
                                <div    class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S' && this.$store.state.usuarioSistema.idfil!='05'">   

                                    <v-autocomplete
                                          
                                        label="Procedencia"
                                        :items="procedenciaItens" 
                                        :disabled="procedenciaDesabilitado"                                           
                                        v-model="this.movimento.procedencia"   
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 180px; " 
                                        bg-color="white"     
                                        
                                        density="compact" 
                                        
                                    ></v-autocomplete> 

                                </div>                         
                                
                                <div    class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'  &&  this.$store.state.usuarioSistema.idfil=='05' && this.movimento.tipoMovimento =='NFE' ">   

                                    <v-autocomplete
                                        
                                        label="Qualid. Compra"
                                        :items="qualidadeItens" 
                                        :disabled="qual1Desabilitado"                                           
                                        v-model="this.movimento.qual1"   
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 120px; " 
                                        bg-color="white" 
                                        density="compact" 
                                        
                                    ></v-autocomplete> 

                                </div>   
                                
                                <div    class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'  && this.$store.state.usuarioSistema.idfil=='05'  && this.movimento.tipoMovimento =='NFE' ">   

                                    <v-autocomplete
                                        
                                        label="Classfic"
                                        :items="classificacaoItens" 
                                        :disabled="qual2Desabilitado"                                           
                                        v-model="this.movimento.qual2"   
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 120px; " 
                                        bg-color="white" 
                                        density="compact" 
                                        
                                    ></v-autocomplete> 

                                </div>                                   

                                



                                

                                <div   class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'">   
                                    
                                            
                                    <div >
                                        
                                        <v-text-field
                                             
                                            v-model.trim="this.movimento.pesoTotal" 
                                            class="text-end"
                                            id="pesoTotal"
                                            label="Peso Liquido" 
                                            ref="pesoTotal"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="pesoTotalDesabilitado"                                                                                          
                                            :rules="[campoRequerido]"
                                            density="compact" 
                                            inputmode="numeric"  
                                            @keyup="apiEntraNumero($event,2) "
                                            @blur="this.calcPesoMedioPeso($event)"
                                                                                        



                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>     
                                <!--@blur="this.movimento.pesoTotal = $event.target.value" -->
     
                                <div   class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'">    
                                            
                                    <div >
                                        
                                        <v-text-field
                                           
                                            v-model.trim="this.movimento.numVolumes" 
                                            id="numVolumes"
                                            label="Núm. Volumes" 
                                            ref="numVolumes"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="numVolumesDesabilitado"  
                                            type="number"
                                            inputmode="numeric"
                                            :rules="[campoRequerido]"
                                            density="compact"
                                            @blur="calcPesoMedio"
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div> 


                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S'">    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            
                                            v-model.trim="this.movimento.pesoMedio" 
                                            id="pesoMedio"
                                            label="Peso Médio" 
                                            ref="pesoMedio"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            disabled
                                         
                                            inputmode="numeric"
                                            :rules="[campoRequerido]"
                                            density="compact"
                                            
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>  
                                 

 
 
<!--
                                <div    class="espacoEntreComponentes">  
                                     
                                     <v-autocomplete
                                         class="text-input"
                                         label="Id Movimento" 
                                         disabled                                           
                                         v-model="this.movimento.id"   
                                         @blur="buscaTipoMovimento"
                                         item-title="idCab" 
                                         item-value="idCab"
                                         variant="outlined"
                                         style="width: 160px; font-size:16px;" 
                                         bg-color="white"   
                                         density="compact" 

                                     ></v-autocomplete> 
 
                                 </div>  
 -->


                    </div>    <!--  FIM LINHA 0002 -->    

                    <!-- <div class="d-flex justify-content-end " style=" margin-left:1%; width:99%; margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    -->
                    <div class="d-flex justify-content-end " style="margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    
                        <div style="width:100%;background-color:#c0c0c1; height:50px  ">
                            <p  class="text-white text-center  mt-3  " style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Itens</b></p>                               
                        </div>        

                        <v-btn  
                         
                            style="height:49px;width:160px;background-color:rgb(240, 237, 232); " 
                            @click="validaCabecalho" v-if="(this.vOperAlteraEstoque=='S' && this.tipoOperacao!='X')  ||  this.vOperAlteraEstoque=='N'  "    
                            > 
                                <v-icon
                                class="mb-6"
                                color="primary"
                                icon="mdi-plus-box-outline"
                                size="55"
                                ></v-icon>  
                                <span  style="margin-bottom:28px"><b>Novo Item</b></span> <!-- Texto centralizado -->
                        </v-btn>  
                    </div>  

                   
                    
                    
                    

                    <!------------------------------------------------->
                    <!------------------------------------------------->
                    <!-----------------   Itens  ---------------------->
                    <!------------------------------------------------->
                    <!------------------------------------------------->
 
 <!--
                    <div class="d-flex justify-content-end " style=" margin-left:1%; width:92%; margin-top: 15px;border-radius:15px 15px 15px 15px;">                                    
                        <div style="width:100%;background-color:#003366;; height:20px  ">
                            <p  class="text-white text-center   " style=" margin-bottom:5px;margin-left:20%;width:60%; font-size: 15px; height:20pxborder-radius:15px 15px 15px 15px; "><b>001</b></p>                               
                        </div>    
                    </div>  

-->                 <!-- DIV GRID  -->   
                    <div style="height:2000px;overflow: auto; background-color:white  "> 
                    
                        <div class="flex-linha-completa"  style="margin-left:1%;width:99%;margin-top: 5px ;  ">   


                            <table class="table-responsive table-hover w-auto" style= "width:100% "> 
                                <thead style= "width:100% ">
                                    <tr class="tabela_cabecalho">
                                
                                <!--
                                    <th class="text-center">
                                        <button type="button" class="btn btn-primary btn-sm" @click="adicionaItem(1)"><i
                                            class="bi bi-plus-square"></i></button>
                                    </th>
                                    -->
                                    </tr>
                                    
                                </thead>
                                <tbody  v-for="(i, indice) in aMovimentoItem" :key="indice" style= " width:100% ">   
    
                                    <tr>
                                        <td>
                                            <div class="d-flex justify-content-end " style=" margin-left:1px; width:99%; margin-top: 10px;border-radius:15px 15px 15px 15px;">                                    

                                              <!--  <div style="width:100%;background-color:#003366;; height:20px  "  v-if="i.statusItem != 'Exclusão'">-->
                                                <div style="width:100%;background-color:rgb(240, 237, 232); height:20px  "  v-if="i.statusItem != 'Exclusão'">
                                                 
                                                    <p  class="text-center   " style="color:rgb(44, 42, 42); margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20px;border-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}}</b></p>                               
                                                </div>    

                                                <div style="width:100%; ; height:20px  " class="vermelho"  v-if="i.statusItem == 'Exclusão' && i.statusItemOriginal == 'Exclusão'">
                                                    <p  class="text-white text-center   " style=" margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20px;border-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}} - Excluído</b></p>                               
                                                </div>   
                                                
                                                <div style="width:100%; height:20px; background-color:rgb(233, 229, 12);   "   v-if="i.statusItem == 'Exclusão' && i.statusItemOriginal != 'Exclusão'">
                                                    <p  class=" text-center   " style="color:black; margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20px;border-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}} - Excluir</b></p>                               
                                                </div>                                                   

                                                <v-btn  
                                                        style="height:20px; background-color:rgb(240, 237, 232); "    
                                                        @click="excluirItem(indice)"
                                                        >   
                                                            <v-icon                                                       
                                                            color="primary"
                                                            icon="mdi-minus-box-outline"  
                                                            size="23"
                                                            ></v-icon>  
                                                        
                                                </v-btn>  


                                            </div>  

                                            
                                        </td>
                                    </tr>
                                

                                    <tr class="flex-linha-completa" style="margin-bottom:5px"> 
                                    
                                        <td  >
                                            
                                            <div   class="espacoEntreComponentesGrid">   
                                            <!-- <label style='font-size:16px'>Item</label>-->
                                                    
                                                    <div class="input-group">   
                                                            
                                                            <div class="d-flex  justify-content-start">
                                                                
                                                                <v-text-field
                                                                    v-model.trim="i.item" 
                                                                    id="item"
                                                                    label="Item"
                                                                    ref="item"  
                                                                    maxlength="7"  
                                                                    style=" width: 120px; "
                                                                    variant="outlined"
                                                                    bg-color="white"
                                                                    :disabled="itemDesabilitado   && i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão'"  
                                                                    type="number"
                                                                    inputmode="numeric"
                                                                    :rules="[campoRequerido]" 
                                                                    density="compact"
                                                                    @blur="apiPesquisaParam('itemDet', i.item, i)"  
                                                                    
                                                                ></v-text-field>    
                                                                    
                                                                <v-btn   data-bs-toggle="modal" 
                                                                data-bs-target="#modalPesquisaItem" @click="apiFlushPesquisa(indice)" tabindex="-1"   :disabled="itemDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão')" 
  
                                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
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
                                                                    v-model="i.descFio " 
                                                                    id="descFio"   
                                                                    disabled 
                                                                    class="limitadorMedia"
                                                                    
                                                                    style="background-color:rgb(210, 210, 246); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                                ></v-text-field>   
                                                            </div>   



                                                    </div>

                                            </div>   
    
                                        </td>



                                        <td  >
                                            
                                            <div   class="espacoEntreComponentesGrid">   
                                            <!-- <label style='font-size:16px'>Item</label>-->
                                                    <div class="input-group">   

                                                            <div class="d-flex  justify-content-start " v-if="this.vOperAlteraItem=='S'" > 
                                                                
                                                                        
                                                                <v-text-field
                                                                            v-model.trim="i.idMovimento" 
                                                                            id="idMovimento"
                                                                            label="id" 
                                                                            ref="idMovimento"   
                                                                            style=" width: 120px; "
                                                                            variant="outlined"
                                                                            bg-color="white" 
                                                                            type="number"
                                                                            inputmode="numeric"
                                                                            disabled 
                                                                            density="compact" 
                                                                            
                                                                ></v-text-field> 
                                                                    

                                                                <v-btn   @click="validaItem(indice,i.item)" 
                                                                  tabindex="-1"   disabled  
  
                                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
                                                                    > 
                                                                        <v-icon
                                                                        class="mb-6"
                                                                        color="primary"
                                                                        icon="mdi-card-search-outline"
                                                                        size="45"
                                                                        ></v-icon>  
                                                                </v-btn>     

                                                            </div  >      




                                                            <div class="d-flex  justify-content-start " v-if="this.vOperAlteraItem=='N' && i.alteracao==true" >
                                                                
                                                                        
                                                                <v-text-field
                                                                v-model.trim="i.idMovimento" 
                                                                            id="idMovimento"
                                                                            label="id" 
                                                                            ref="idMovimento"     
                                                                            style=" width: 120px; "
                                                                            variant="outlined"
                                                                            bg-color="white" 
                                                                            type="number"
                                                                            inputmode="numeric"
                                                                            disabled 
                                                                            density="compact"
                                                                            @blur="apiPesquisaParam('loteItem', i.idMovimento  , i)"
                                                                 ></v-text-field>          

                                                                <v-btn   @click="validaItem(indice,i.item)" 
                                                                  tabindex="-1"   :disabled="itemDesabilitado && i.habilitado"   
  
                                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
                                                                    > 
                                                                        <v-icon
                                                                        class="mb-6"
                                                                        color="primary"
                                                                        icon="mdi-card-search-outline"
                                                                        size="45"
                                                                        ></v-icon>  
                                                                </v-btn>   
                                                               

                                                            </div  >   

                                                           
                                                            <div class="d-flex  justify-content-start   " v-if="this.vOperAlteraItem=='N' && i.alteracao==false" >
                                                                
                                                                        
                                                                <v-text-field
                                                                v-model.trim="i.idMovimento" 
                                                                            id="idMovimento"
                                                                            label="id" 
                                                                            ref="idMovimento"     
                                                                            style=" width: 120px; "
                                                                            variant="outlined"
                                                                            bg-color="white" 
                                                                            type="number"
                                                                            inputmode="numeric" 
                                                                            density="compact" 
                                                                            @blur="apiPesquisaParam('loteItem', i.idMovimento , i)"
                                                                ></v-text-field>    
                                                          
                                                              
                                                                <v-btn   @click="validaItem(indice,i.item)" 
                                                                  tabindex="-1"    
  
                                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); " 
                                                                    > 
                                                                        <v-icon
                                                                        class="mb-6"
                                                                        color="primary"
                                                                        icon="mdi-card-search-outline"
                                                                        size="45"
                                                                        ></v-icon>  
                                                                </v-btn>     

                                                            </div  >       


                                                    </div>

                                            </div>   
    
                                        </td>

 
                                        <td     v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='N'">
                                            <div   class="espacoEntreComponentesGrid">   
                                                
                                                        
                                                <div >
                                                     
                                                    
                                                    <v-autocomplete
                                                    
                                                        label="Produtor"
                                                        :items="produtorItens" 
                                                        disabled 
                                                        v-model="i.produtor"   
                                                        item-title="descricao" 
                                                        item-value="codigo"
                                                        variant="outlined"
                                                        style="width: 270px; " 
                                                        bg-color="white"  
                                                        density="compact"
                                                    
                                                   ></v-autocomplete> 
                                                </div>
                                    
                                            </div>                                     
                                        </td> 


                                        <td  >   
                                            <div   class="espacoEntreComponentesGrid">   
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim= i.lote  
                                                        id="lote"
                                                        label="Lote" 
                                                        ref="lote"  
                                                        maxlength="10"                                         
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="(loteItemDesabilitado  && (i.statusItemOriginal == 'Alteração'  || i.statusItemOriginal == 'Exclusão')) || this.vOperAlteraItem=='N'"  
                                                        type="text"                                       
                                                        :rules="[campoRequerido]" 
                                                        density="compact" 
                                                        @blur="pesquisaLoteProdutor(this.$store.state.usuarioSistema.idfil,this.movimento.produtor, i)"                                                       
                                                    ></v-text-field>        
                                                    
                                                </div>
                                                
                                            </div> 
                                        </td>   


                                        <td  v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S' && this.$store.state.usuarioSistema.idfil=='05' ">   
                                            <div   class="espacoEntreComponentesGrid">   
                                                
                                                        
                                                <div > 
                                                    <v-autocomplete 
                                                        label="Cor"
                                                        :items="coloracao"  
                                                        id="cor"                                         
                                                        :disabled="(coloracaoDesabilitado   && (i.statusItemOriginal == 'Alteração'  || i.statusItemOriginal == 'Exclusão')) || this.vOperAlteraItem=='N'"  
                                                        v-model="i.coloracao"   
                                                        item-title="codigo" 
                                                        item-value="codigo"
                                                        variant="outlined"
                                                        style="width: 120px; " 
                                                        bg-color="white"  
                                                        density="compact"
                                                        :rules="[campoRequerido]"  

                                                   ></v-autocomplete> 
                                                </div>
                                    
                                            </div>                                     
                                        </td> 

   
                                        <td     v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S' && this.$store.state.usuarioSistema.idfil!='05' ">
                                            <div   class="espacoEntreComponentesGrid">   
                                                
                                                        
                                                <div >
                                                     
                                                    
                                                    <v-text-field 
                                                        v-model.trim="i.pilha" 
                                                        id="pilha"
                                                        label="Pilha"
                                                        ref="pilha"  
                                                        maxlength="6"                                         
                                                        style=" width: 100px; "
                                                        variant="outlined"
                                                        :disabled="(pilhaDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') ) || this.vOperAlteraItem=='N'" 
                                                        type="number"
                                                        inputmode="numeric" 
                                                        density="compact" 
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                                     
                                        </td> 

                                        <td    v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'  ">
                                            <div    class="espacoEntreComponentesGrid">  

                                                <v-autocomplete

                                                    label="Tam"
                                                    :items="tamanhoItens"                                                        
                                                    :disabled="(tamanhoDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') ) || this.vOperAlteraItem=='N'"                                
                                                    v-model="i.tamanho"   
                                                    item-title="nome" 
                                                    item-value="id"
                                                    variant="outlined"
                                                    style=" width: 80px; "
                                                    bg-color="white"      
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                    
                                                ></v-autocomplete> 

                                            </div>           
                                        </td>

                                    
                                        <td    v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'  && this.$store.state.usuarioSistema.idfil=='05'  ">
                                            <div    class="espacoEntreComponentesGrid">  

                                                <v-autocomplete

                                                    label="Qualid"
                                                    :items="qualidadeItens"                                                       
                                                    :disabled="(tipoQualidadeDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') ) || this.vOperAlteraItem=='N'"                                
                                                    v-model="i.tipoQualidade"   
                                                    item-title="nome" 
                                                    item-value="id"
                                                    variant="outlined"
                                                    style=" width: 80px; "
                                                    bg-color="white"      
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                    
                                                ></v-autocomplete> 

                                            </div>           
                                        </td>

                                        <td    v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'  && this.$store.state.usuarioSistema.idfil=='05'  ">
                                            <div    class="espacoEntreComponentesGrid">   
 
                                                <v-autocomplete

                                                    label="Classif"
                                                    :items="classificacaoItens"                                                        
                                                    :disabled="(classifQualidadeDesabilitado && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') ) || this.vOperAlteraItem=='N'"                                
                                                    v-model="i.classifQualidade"   
                                                    item-title="nome" 
                                                    item-value="id"
                                                    variant="outlined"
                                                    style=" width: 100px; "
                                                    bg-color="white"      
                                                 
                                                    density="compact"
                                                    
                                                ></v-autocomplete> 

                                            </div>           
                                        </td>                                        

                                        <td  >
                                            <div   class="espacoEntreComponentesGrid">   

                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.quantidade" 
                                                        id="quantidade"
                                                        label="Qtde/Num.Vol" 
                                                        ref="quantidade"  
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="quantidadeDesabilitado && i.habilitado"   
                                                        type="number"
                                                        inputmode="numeric"
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        @blur="calculaPesoItem(i)"                                                        
                                                    ></v-text-field>                                    
                                                </div>

                                            </div>  
                                        </td>

                                         

                                        
                                        <td class="d-flex  justify-content-start" v-if="this.movimento.tipoMovimento != 'MIST'">
                                            <div   class="espacoEntreComponentesGrid"> 
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.peso" 
                                                        id="peso"
                                                        label="Peso Liq." 
                                                        ref="peso"  
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="pesoDesabilitado && i.habilitado"   
                                                        
                                                        inputmode="numeric"
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        @keyup="apiEntraNumero($event,2) " 
                                                        @blur="calculaPesoMedItem(i,$event)" 
                                                        
                                                    ></v-text-field>                                    
                                                </div>

                                            </div>    
                                        </td> 
                                
                                        
                                        
                                        <td>
                                            <div   class="espacoEntreComponentesGrid" v-if="this.vOperAlteraItem=='S'">   
                                        
                                                
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.unidadeMedida" 
                                                        id="um"
                                                        label="UM" 
                                                        ref="um"   
                                                        style=" width: 80px; "
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled= "(umDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão')) || this.vOperAlteraItem=='N' "    
                                                       
                                                        density="compact"                                     
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div> 
                                        </td>
                                        
                                        

                                        <td>
    
                                            <div   class="espacoEntreComponentesGrid" v-if="this.vOperAlteraItem=='S'">    
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.vlUnitario" 
                                                        id="vlUnitario"
                                                        label="Vl. Unit." 
                                                        ref="vlUnitario"   
                                                        style=" width: 100px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="vlUnitarioDesabilitado && i.habilitado"  
                                                        
                                                        inputmode="numeric"
                                                        @keyup="apiEntraNumero($event,2) " 
                                                        @blur="i.vlUnitario = $event.target.value" 
                                                       
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                             

                                        </td>


                                        <td    v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'  && this.$store.state.usuarioSistema.idfil=='05'  ">
                                            <div   class="espacoEntreComponentesGrid">    
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        class="v-input"
                                                        v-model.trim="i.loteAdicional" 
                                                        id="loteAdicional"
                                                        label="Lote Adicional"
                                                        ref="loteAdicional"   
                                                        style=" width: 120px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="loteAdicionalDesabilitado && i.habilitado"                                                            
                                                        density="compact"
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td> 

                                        <td    v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S' && this.$store.state.usuarioSistema.idfil=='05'  ">
                                            <div    class="espacoEntreComponentesGrid">  

                                                <v-autocomplete

                                                    label="Destino"
                                                    :items="destinoItens"                                                        
                                                    :disabled="(destinoDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') ) || this.vOperAlteraItem=='N'"                                
                                                    v-model="i.destino"   
                                                    item-title="descricao" 
                                                    item-value="codigo"
                                                    variant="outlined"
                                                    style=" width: 150px; "
                                                    bg-color="white"      
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                    
                                                ></v-autocomplete> 

                                            </div>           
                                        </td>                                        


                                        <td v-if="this.movimento.tipoMovimento != 'MIST'">
                                            <div   class="espacoEntreComponentesGrid">    
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        class="v-input"
                                                        v-model.trim="i.observacao" 
                                                        id="observacao"
                                                        label="Observação" 
                                                        ref="observacao"   
                                                        style=" width: 250px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="observacaoDesabilitado && i.habilitado"    
                                                        
                                                        density="compact"
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td> 

<!--
                                        <td  v-if="this.tipoMatP == 'ALGOD' && this.vOperAlteraItem=='S'"> 
                                            <div   class="espacoEntreComponentesGrid">    
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        class="v-input"
                                                        v-model.trim="i.pesoMedio" 
                                                        id="pesoMedioItem"
                                                        label="Peso Médio"
                                                        ref="pesoMedioItem"   
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"  
                                                        density="compact"
                                                         
                                                        inputmode="numeric"                                                        
                                                        disabled
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td> 
-->

                                        <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'  && this.vOperAlteraItem=='S' && i.loteJaTestado == 'S'">    
                                            
                                            <div > 
                                                <label >Lote Testado</label>
                                                <div >
                                                    <v-icon  
                                                        class="mb-6"
                                                        color="green"
                                                        icon="mdi-check"
                                                        size="25"                                                        
                                                        ></v-icon>                                                 
                                                                                    
                                                </div>


                                            </div>
                                        
                                        </div>         
                                        
                                        

<!--
 
                                        <td>
                                            <div   class="espacoEntreComponentesGrid">    
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.statusItem" 
                                                        id="statusItem"
                                                        label="Status" 
                                                        ref="statusItem"   
                                                        style=" width: 250px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        disabled 
                                                        density="compact"
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td>         
                                        
                                        
                                        <td>
                                            <div   class="espacoEntreComponentesGrid">    
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.statusItemOriginal" 
                                                        id="statusItemOriginal"
                                                        label="statusItemOriginal" 
                                                        ref="statusItemOriginal"   
                                                        style=" width: 250px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        disabled 
                                                        density="compact"
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td>                                          
                                    
-->
        
                                    </tr>
                                </tbody>

                            </table> 
    
                        </div>  

                    </div>  <!-- DIV GRID  -->      
                 
                </div>
                <!--</v-card>   --> 
                 

            </div>
        <!--</v-container>-->


        

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
<!--                <div   class=" elevation-12 rodape_crud2" 
                        style="position: fixed;background-color:rgb(173, 173, 187);"  :style="{marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
                                            width:  this.$store.state.configuracaoTela.tamanhoRodape,
                                            height:  this.$store.state.configuracaoTela.alturaRodape   }" >  
-->

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
                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px; " accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</v-btn> 
                         

                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"  v-if="((tipoOperacao  == 'I' || tipoOperacao  == 'A')  && ( this.movimento.tipoMovimento!='SAIPL' && this.movimento.tipoMovimento!='MIST' && this.movimento.tipoMovimento!='ENTPL')  )" type="submit"  accesskey="s"><u>S</u>alvar</v-btn>
                                <v-btn color="secondary" class="botao_rodape" style="min-width: 100px;"
                                :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} "  
                                accesskey="p" @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"><u>P</u>esquisar</v-btn>

                            </div> 

                        </div>
                 
                    </div>   

                          
            </div>

 




    </v-form>    

     
    
  <PesquisaUsuario @setaPesquisa="setaPesquisa($event)"></PesquisaUsuario>
  <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>
  <PesquisaFornecedor @setaPesquisa="setaPesquisa($event)"></PesquisaFornecedor>
  <PesquisaLote @setaPesquisa="setaPesquisa($event)" :itemLote="paramItem" ref="pesquisaLote"></PesquisaLote>
  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>    
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core' 
   import PesquisaUsuario from '@/requires/PesquisaUsuario'
   import PesquisaItem from '@/requires/PesquisaItem'
   import PesquisaFornecedor from '@/requires/PesquisaFornecedor'
   import PesquisaLote from '@/requires/PesquisaLote'


   import SimNao from '@/requires/SimNao.vue' 
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'
   import MensagemMobile  from '@/components/MensagemMobileComponent.vue'
   

    export default { 
    
        name: 'MovimentacaoEstoqueComponent',
        setup: () => (
            { v$: useValidate() }
        ),
        components: { PesquisaUsuario, SimNao,MensagemMobile,PesquisaItem,PesquisaFornecedor,PesquisaLote},
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
 
        data: () => ({ 
 
            paramItem:'',
            resultado : "",             
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false,
            ehInclusao : false ,
            simNaoTipo: 'sucesso',
            tipoOperacao:'A', 
            MovimentoTemp: [], 

            tipoMovimentoItens: [],
            tipoMovimentoItensTemp:{ 
                codigo:'',
                descricao:''
            },

            coloracao: [],
            coloracaoTemp:{ 
                codigo:'',
                descricao:''
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
            
            destinoItens:[
               {'codigo':'D','descricao':'Denim'},
               {'codigo':'V','descricao':'Venda'} 

            ],      

            tipoMPItens: [],
            tipoMPItensTemp:{ 
                codigo:'',
                descricao:''
            },

            produtorItens: [],
            produtorItensTemp:{ 
                codigo:'',
                descricao:''
            },         
            
            
            procedenciaItens: [],
            procedenciaItensTemp:{ 
                codigo:'',
                descricao:''
            },              


            nomeFornecedor:'',            
            items: [],
            numItem:0,
            movimentoParamDTO:[],

            tmp:'',
            tipoMatP:'',

            tipoMovimentoDesabilitado:false,
            tipoMPDesabilitado:false,
            fornecedorDesabilitado:false,
            notaFiscalDesabilitado:false,
            dataBaseDesabilitado:false,
            dataEmissaoDesabilitado:false,
            produtorDesabilitado:false,
            procedenciaDesabilitado:false,
            pesoTotalDesabilitado :false,
            numVolumesDesabilitado:false,
            pesoMedioDesabilitado:false,   
            qual1Desabilitado:false, 
            qual2Desabilitado:false,  
            itemDesabilitado:false,  
            idDesabilitado:false,  
            loteItemDesabilitado:false,   
            pilhaDesabilitado:false,  
            tamanhoDesabilitado:false,  
            quantidadeDesabilitado:false,  
            pesoDesabilitado:false,  
            umDesabilitado:false,  
            vlUnitarioDesabilitado:false,  
            observacaoDesabilitado:false,   
            tipoQualidadeDesabilitado:false,   
            classifQualidadeDesabilitado:false,  
            coloracaoDesabilitado:false,  
            loteAdicionalDesabilitado:false,  
            idVolumeDesabilitado:false,  
            tipoMicDesabilitado:false,  	 
            destinoDesabilitado:false,  


            movimento: {
                id: 0,
                idfil: '',
                notaFiscal: ''    ,
                fornecedor: '',
                tipoMovimento: '',
                tipoMP: '',
                dataBase: '',
                dataEmissao: '',
                entradaSaida: '',
                loteFiacao: '',
                pesoMedio: '',
                pesoTotal: 0,
                numVolumes:0,
                produtor: '',
                procedencia: '',
                linhaAbertura: '',
                idAutomatico: '',
                movimentoAutomatico: '',
                movimentoPilha: '',
                mistura: '',
                sequenciaMistura: '',
                usuarioInclusao: '',
                usuarioAlteracao: '',
                dataInclusao: '',
                dataAlteracao: '',
                statusItem:'',
                statusItemOriginal:'',
                qual1:'',
                qual2:'', 
                itemMovimentoDTO:[]
            } ,

            movimentoDAO: {
                id: 0,
                idfil: '',
                notaFiscal: ''    ,
                fornecedor: '',
                tipoMovimento: '',
                tipoMP: '',
                dataBase: '',
                dataEmissao: '',
                entradaSaida: '',
                loteFiacao: '',
                pesoMedio: '',
                pesoTotal: 0,
                numVolumes:0,
                produtor: '',
                procedencia: '',
                linhaAbertura: '',
                idAutomatico: '',
                movimentoAutomatico: '',
                movimentoPilha: '',
                mistura: '',
                sequenciaMistura: '',
                usuarioInclusao: '',
                usuarioAlteracao: '',
                dataInclusao: '',
                dataAlteracao: '',
                statusItem:'',
                statusItemOriginal:'',
                qual1:'',
                qual2:'',                 
               
                itemMovimentoDTO:[]
            } ,            


            movimentoItem: {
                    idItem:  0,
                    idfil: '',
                    notaFiscal: ''   ,
                    fornecedor: '',
                    item: '' ,
                    produtor: '',
                    procedencia: '',
                    lote: ''                        ,
                    qualidade: '',
                    tamanho: '',
                    descFio: '',
                    pesoCalculadoInformado: '',
                    observacao: '',
                    unidadeMedida: '' ,
                    pilha: '',
                    dataInclusao: '',
                    dataAlteracao: '',
                    usuarioInclusao: '',
                    usuarioAlteracao: '',
                    movimentoAutomatico: '',
                    movimentoDePilha: '',
                    quantidade: 0,
                    peso: 0,
                    idCab: 0,
                    vlUnitario: 0,
                    idMovimento:  0,
                    sac: 0,
                    trid:0,
                    pim: 0,
                    sc: 0,
                    mst: 0,
                    mic: 0,
                    mat:0,
                    ui: 0,
                    sf: 0,
                    str: 0,
                    elg: 0,
                    tipo: 0,
                    sic: 0,
                    idAutomatico: 0,
                    uhml: 0,
                    rs: 0,
                    b: 0,
                    trcnt: 0,
                    trar: 0,
                    pesoMedio: 0,
                    statusItem:'',
                    statusItemOriginal:'',
                    tipoQualidade:'',
                    classifQualidade:'', 
                    coloracao:'',
                    loteAdicional:'', 
                    idVolume:'', 
                    tipoMic:'',	 
                    destino:''                        

            }, 


            movimentoInicial: {
                id: 0,
                idfil: '',
                notaFiscal: ''    ,
                fornecedor: '',
                tipoMovimento: '',
                tipoMP: '',
                dataBase: '',
                dataEmissao: '',
                entradaSaida: '',
                loteFiacao: '',
                pesoMedio: '',
                pesoTotal: 0,
                numVolumes:0,
                produtor: '',
                procedencia: '',
                linhaAbertura: '',
                idAutomatico: '',
                movimentoAutomatico: '',
                movimentoPilha: '',
                mistura: '',
                sequenciaMistura: '',
                usuarioInclusao: '',
                usuarioAlteracao: '',
                dataInclusao: '',
                dataAlteracao: '',
                statusItem:'',
                statusItemOriginal:'',
                qual1:'',
                qual2:'',  
                itemMovimentoDTO:[]
            } ,



            movimentoItemInicial: {
                    idItem:  0,
                    idfil: '',
                    notaFiscal: ''   ,
                    fornecedor: '',
                    item: '' ,
                    produtor: '',
                    procedencia: '',
                    lote: ''                        ,
                    qualidade: '',
                    tamanho: '',
                    descFio: '',
                    pesoCalculadoInformado: '',
                    observacao: '',
                    unidadeMedida: '' ,
                    pilha: '',
                    dataInclusao: '',
                    dataAlteracao: '',
                    usuarioInclusao: '',
                    usuarioAlteracao: '',
                    movimentoAutomatico: '',
                    movimentoDePilha: '',
                    quantidade: 0,
                    peso: 0,
                    idCab: 0,
                    vlUnitario: 0,
                    idMovimento:  0,
                    sac: 0,
                    trid:0,
                    pim: 0,
                    sc: 0,
                    mst: 0,
                    mic: 0,
                    mat:0,
                    ui: 0,
                    sf: 0,
                    str: 0,
                    elg: 0,
                    tipo: 0,
                    sic: 0,
                    idAutomatico: 0,
                    uhml: 0,
                    rs: 0,
                    b: 0,
                    trcnt: 0,
                    trar: 0,
                    pesoMedio: 0,
                    statusItem:'',
                    statusItemOriginal:'', 
                    tipoQualidade:'',
                    classifQualidade:'', 
                    coloracao:'',
                    loteAdicional:'', 
                    idVolume:'', 
                    tipoMic:'',	 
                    destino:''                       

            },   
        
            aMovimentoItemDAO: [],
            aMovimentoItemFinal: [],
            aMovimentoItemTransitorio: [],

            aMovimentoItem :[ 

            ],    
            movimentoItemTempAux:{},
            vOperAlteraEstoque:'',
            vOperAlteraItem:'' ,
            indAtual: 0,

            vTmp:'' ,
            pPesoDocumento:0,
            pNumVolumes:0,
            pPesoMedio:0
            
           
        }              

        ),
        computed: {...mapState(['usuarioSistema']) } ,      

        props: {
 
            fornecedorProps : {
            type: String,
            required: true,
            },     
            notaFiscalProps : {
            type: String,
            required: true,
            },                       
            operacao: {
            type : String,
            required: true,
            },
        },  
        methods:{    


            async buscaTipoMovimento(){ 

                    let url; 


                    if (this.movimento.tipoMovimento!='' && this.movimento.tipoMovimento!=null)  {  

                            url = `${process.env.VUE_APP_BASE_URL}/tipomovto/${this.$store.state.usuarioSistema.idfil}/${this.movimento.tipoMovimento}`  

                            await this.axios.get(url,this.apiTokenHeader())
                            .then(response => {

                                //console.log("TipoMovimento");
                                this.resultado = response.data;  

                                if (this.resultado.atualizaEstoque!= null){
                                    this.vOperAlteraEstoque = this.resultado.atualizaEstoque ;     
                                
                                }else{
                                    this.vOperAlteraEstoque = "" ;                       
                                }                 
                                
                                
                                if (this.resultado.atualizaItem!= null){
                                    this.vOperAlteraItem = this.resultado.atualizaItem ;     
                                
                                }else{
                                    this.vOperAlteraItem = "" ;                       
                                }  


                                //console.log(this.vOperAlteraItem);
                                //console.log(this.vOperAlteraEstoque); 
                                
                            })
                            .catch(error => {  
                                
                                    console.log("Erro: ", error); 
                                    this.msgProcessamento = '' 
                                    this.apiDisplayMensagem(error ) 
                                    
                            });   
                    }

            },

            async pesquisaLoteProdutor(filial,produtor, i){ 
 

                let url;  


                if (filial!='' && filial!=null &&
                    produtor!='' && produtor!=null &&
                    i.lote!='' && i.lote!=null &&
                    this.vOperAlteraItem=='S'   &&
                    this.tipoMatP == 'ALGOD' 

                )  {  

                        url = `${process.env.VUE_APP_BASE_URL}/testecq/${this.$store.state.usuarioSistema.idfil}/${produtor}/${i.lote}`  

                        await this.axios.get(url,this.apiTokenHeader())
                        .then(response => {

                            //console.log("TipoMovimento");
                            this.resultado = response.data;  
 
                            
                            if (this.resultado){
                                if ((this.resultado.mic != null && this.resultado.mic != 0.0 ) ||
                                    (this.resultado.uhml!= null && this.resultado.uhml != 0.0 ) ||
                                    (this.resultado.sic!= null && this.resultado.sic != 0.0 ) ||
                                    (this.resultado.mat!= null && this.resultado.mat != 0.0 ) 
                                ){
                                    i.loteJaTestado =  'S' ;  
                                }else{
                                    i.loteJaTestado =  'N' ; 
                                }      
                            
                            }else{
                                i.loteJaTestado =  'N' ;                       
                            }  


                            //console.log('Pesquisa teste lote');
                            //console.log(this.resultado); 
                            
                        })
                        .catch(error => {  
                            
                                console.log("Erro: ", error); 
                                this.msgProcessamento = '' 
                                this.apiDisplayMensagem(error ) 
                                
                        });   
                }

            },            

            validaPeso(){

                 let resultado;

                 if( //Math.floor(this.movimento.pesoTotal)  ==  Math.floor(this.pPesoDocumento ) &&
                 (
                 Math.floor(  parseFloat(this.apiConverteNumeroFormatado( this.movimento.numVolumes)).toFixed(0) )  ==
                 Math.floor(  parseFloat(this.apiConverteNumeroFormatado( this.pNumVolumes)).toFixed(0) )  
                 ) &&

                 (
                 Math.floor(  parseFloat(this.apiConverteNumeroFormatado( this.movimento.pesoMedio)).toFixed(0) )  ==
                 Math.floor(  parseFloat(this.apiConverteNumeroFormatado( this.pPesoMedio)).toFixed(0) )  
                 )                
                     
                  
                ){
                    resultado = true; 
                }else{
                    resultado = false;  
                }

                //console.log('validaPeso')
                //console.log(this.apiConverteNumeroFormatado(parseFloat(this.movimento.numVolumes).toFixed(2)))
                //console.log(this.pNumVolumes)
                //console.log(this.apiConverteNumeroFormatado(parseFloat(this.movimento.pesoMedio).toFixed(2)))
                //console.log(this.pPesoMedio)

                return resultado; 

            },

            calculaPesoMedItem(pMov,pEvento){

                 
                pMov.peso = pEvento.target.value;  

                if(this.tipoMatP == 'ALGOD'){
                    if(this.vOperAlteraItem=='S'){
                        if(pMov.peso != null && parseFloat(pMov.peso) > 0 &&
                           pMov.quantidade != null && parseFloat(pMov.quantidade) > 0
                        ){    
                            //pMov.pesoMedio =  parseFloat((pMov.peso / pMov.quantidade).toFixed(4));  

                            pMov.pesoMedio =  (parseFloat(this.apiConverteNumeroFormatado( pMov.peso)).toFixed(2) /  pMov.quantidade).toFixed(4)
                            pMov.pesoMedio = this.apiFormataNumero(pMov.pesoMedio,4) 


                            //pMov.pesoMedio =  parseFloat(this.apiConverteNumeroFormatado( pMov.pesoMedio )).toFixed(4)
                        }   
                        
                        this.calculaDadosDocumento();  
                    } 
                     
                }
                

                

            },

            calculaPesoItem(pMov){

                //console.log('calculaPesoItem')
                if(this.tipoMatP == 'ALGOD'){
                    //console.log('calculaPesoItem 22222')
                    if(this.vOperAlteraItem=='S'){  
                        if(pMov.statusItem == 'Inclusão')     {

                            //console.log('calculaPesoItem 777777')
                            // Pega o peso medio do cabecalho
                            //pMov.peso =  parseFloat((pMov.quantidade * parseFloat(this.apiConverteNumeroFormatado(this.movimento.pesoMedio) ).toFixed(2) )) ;
                            pMov.peso =  parseFloat((pMov.quantidade * parseFloat(this.apiConverteNumeroFormatado( this.movimento.pesoMedio)).toFixed(4)) ).toFixed(2) ;
                            //console.log(pMov.peso)

                            pMov.peso = this.apiFormataNumero(pMov.peso,2)
                            //console.log(pMov.peso)

                            pMov.pesoMedio =  parseFloat(this.apiConverteNumeroFormatado(this.movimento.pesoMedio)).toFixed(4) ;
                            //console.log(pMov.pesoMedio)
                            pMov.pesoMedio = this.apiFormataNumero(parseFloat(pMov.pesoMedio).toFixed(4),4) 
                            //console.log(pMov.pesoMedio)

                        } else{
                            //console.log('calculaPesoItem 3232323')  
                            //console.log(pMov.pesoMedio)
                            //console.log(this.apiConverteNumeroFormatado( pMov.pesoMedio ))
                        
                            pMov.peso =  parseFloat((pMov.quantidade * parseFloat(this.apiConverteNumeroFormatado( pMov.pesoMedio )).toFixed(4)) ).toFixed(2) ;
                            //console.log('pMov.peso aaaaaaa')
                            //console.log(pMov.peso)
                            pMov.peso = this.apiFormataNumero(parseFloat(pMov.peso).toFixed(2),2)
                            //console.log('pMov.peso bbbbbbb')
                            //console.log(pMov.peso)
                        }   

                        this.calculaDadosDocumento();
                    }else{ 
                           //.log('calculaPesoItem 666666')
                            // Pega o peso medio do item
                            pMov.peso =  parseFloat((pMov.quantidade * parseFloat(this.apiConverteNumeroFormatado( pMov.pesoMedio )).toFixed(4)) ) ;   
                            //console.log(pMov.peso)
                            pMov.peso = this.apiFormataNumero(parseFloat(pMov.peso).toFixed(2),2)
                            //console.log(pMov.peso)
                    }
                    
                }

                
               

            },
            calculaDadosDocumento(){

                let ppeso;
                let pvol;
                let pmed;

                this.pPesoDocumento =0.00; 
                this.pNumVolumes =0;
                this.pPesoMedio =0.0000;

                ppeso = 0.00;
                pvol = 0;
                pmed = 0.0000;

                //console.log('this.movimento.pesoTotal 8888')          
                


                for (let i = 0; i < this.aMovimentoItem.length; i++) {    
                                                    
                    if(parseFloat(this.aMovimentoItem[i].peso) > 0 && this.aMovimentoItem[i].peso != null   ){
                        //console.log(this.apiConverteNumeroFormatado( this.aMovimentoItem[i].peso )      )
                        ppeso += parseFloat(this.apiConverteNumeroFormatado( this.aMovimentoItem[i].peso ))  
                        
                        //console.log('ppeso 443322')  
                        //console.log(ppeso)  


                        
                    }

                    if(this.aMovimentoItem[i].quantidade > 0 && this.aMovimentoItem[i].quantidade != null   ){
                        pvol += parseFloat(this.aMovimentoItem[i].quantidade);  
                    }   

                }   
                
                if(ppeso > 0 && pvol >0 ){
                    pmed = parseFloat((ppeso / pvol) ).toFixed(4) ;
                }       
                
                //console.log('ppeso 1122')                 
                //console.log(ppeso)                
                                 
                
                this.pPesoDocumento =  this.apiFormataNumero(parseFloat(ppeso).toFixed(2)  ,2) ;    //ppeso.toFixed(2);
                this.pNumVolumes = pvol;
                this.pPesoMedio = this.apiFormataNumero(pmed.toString() ,4) ;  //pmed.toFixed(2);



                //console.log(this.pPesoDocumento)                
                //console.log(this.pPesoMedio)    

            },

            calcPesoMedioPeso(pEvento){
                 this.movimento.pesoTotal = pEvento.target.value; 

                //console.log('this.movimento.pesoTotal 4444')
                //console.log(this.movimento.pesoTotal)

                 this.calcPesoMedio();
            }
            ,
            calcPesoMedio(){

                let vPesoTotal;
                //console.log('this.movimento.pesoTotal 3333')
                //console.log(this.movimento.pesoTotal)

                if(this.movimento.pesoTotal != null ){

                    vPesoTotal = this.movimento.pesoTotal
                    //console.log(vPesoTotal)

                    vPesoTotal = vPesoTotal.replaceAll(".", "")
                    //console.log(vPesoTotal)       
                    
                    vPesoTotal = vPesoTotal.replaceAll(",", ".") 

                }
                //&& this.movimento.pesoTotal
                if(this.movimento.pesoTotal != null    && vPesoTotal > 0 &&
                   this.movimento.numVolumes != null && this.movimento.numVolumes > 0
                ){
                    this.movimento.pesoMedio = this.apiFormataNumero(parseFloat((vPesoTotal / this.movimento.numVolumes).toFixed(4)),4) ;

                }else{
                    this.movimento.pesoMedio = 0;
                }


                //console.log(parseFloat((vPesoTotal / this.movimento.numVolumes).toFixed(4)))
                //console.log(this.apiFormataNumero(parseFloat((vPesoTotal / this.movimento.numVolumes).toFixed(4))),4)


                
            },


            async buscaTipoMatP(){ 

                    let url; 

                    if (this.movimento.tipoMP!='' && this.movimento.tipoMP!=null)  {        

                            url = `${process.env.VUE_APP_BASE_URL}/tipomp/${this.$store.state.usuarioSistema.idfil}/${this.movimento.tipoMP}`  

                            await this.axios.get(url,this.apiTokenHeader())
                            .then(response => {

                            
                                this.resultado = response.data;  

                                if (this.resultado.especieMP!= null){
                                    this.tipoMatP = this.resultado.especieMP ;     
                                
                                }else{
                                    this.tipoMatP = "" ;                       
                                }      
                                //console.log(this.vOperAlteraItem);
                                //console.log(this.vOperAlteraEstoque); 
                                
                            })
                            .catch(error => {  
                                
                                    console.log("Erro: ", error); 
                                    this.msgProcessamento = '' 
                                    this.apiDisplayMensagem(error ) 
                                    
                            });   
                    }

            },




            validaItem(ind,pItem){ 
              
              let validado;

              validado = true;

              if (this.aMovimentoItem[ind].item=='' || this.aMovimentoItem[ind].item==null)  {
                  this.apiDisplayMensagem('Informe o item.');
                  validado = false;
              }      
              
              if (this.aMovimentoItem[ind].descFio=='' || this.aMovimentoItem[ind].descFio==null)  {
                  this.apiDisplayMensagem('Informe um item válido.');
                  validado = false;
              }  

              if(validado){
                
                this.indAtual = ind;
                this.apiFlushPesquisa(ind);  
                this.exibeModalLote(pItem)    
                
                  
              }  


            },


            validaCabecalho(){ 
              
                let validado;

                validado = true;

                if (this.movimento.fornecedor=='' || this.movimento.fornecedor==null)  {
                    this.apiDisplayMensagem('Informe o fornecedor.');
                    validado = false;
                }      
                
                if (this.movimento.tipoMovimento=='' || this.movimento.tipoMovimento==null)  {
                    this.apiDisplayMensagem('Informe o tipo de movimento.');
                    validado = false;
                }  
                
                if (this.movimento.tipoMP=='' || this.movimento.tipoMP==null)  {
                    this.apiDisplayMensagem('Informe o tipo de materia-prima.');
                    validado = false;
                }  
                
                if (this.nomeFornecedor=='' || this.nomeFornecedor==null)  {
                    this.apiDisplayMensagem('Informe um fornecedor válido.');
                    validado = false;
                }       
                
                
                if ((this.movimento.notaFiscal!=null && this.movimento.notaFiscal!='')){


                    if (this.movimento.notaFiscal.length < 6){
                        this.apiDisplayMensagem('Documento deve ter mais de 6 dígitos.') 
                        validado = false;
                    } 

                }else{ 
                    this.apiDisplayMensagem('Informe o número do documento.');
                    validado = false;
                }                

                          
                
                
                if (this.movimento.dataBase=='' || this.movimento.dataBase==null)  {
                    this.apiDisplayMensagem('Informe a data do movimento.');
                    validado = false;
                }   

                if (this.movimento.dataEmissao=='' || this.movimento.dataEmissao==null)  {
                    this.apiDisplayMensagem('Informe a data de emissão.');
                    validado = false;
                }   

                if(this.vOperAlteraItem=='S' && this.tipoMatP == 'ALGOD'  ){ 
                 
                    if (this.movimento.pesoTotal=='' || this.movimento.pesoTotal==null || this.movimento.pesoTotal==0)  {
                        this.apiDisplayMensagem('Informe o peso líquido.');
                        validado = false;
                    }   
                    
                    if (this.movimento.numVolumes=='' || this.movimento.numVolumes==null || this.movimento.numVolumes==0)  {
                        this.apiDisplayMensagem('Informe o número de volumes.');
                        validado = false;
                    }   
                    
                    if (this.movimento.pesoMedio=='' || this.movimento.pesoMedio==null || this.movimento.pesoMedio==0)  {
                        this.apiDisplayMensagem('Informe o peso medio.');
                        validado = false;
                    }            

                }

                if(this.vOperAlteraItem=='S' && this.tipoMatP == 'ALGOD' && this.$store.state.usuarioSistema.idfil == '05' ){  
                 
                    if (this.movimento.qual1=='' || this.movimento.qual1==null )  {
                        this.apiDisplayMensagem('Informe a qualidade.');
                        validado = false;
                    } 

                    //if (this.movimento.qual2=='' || this.movimento.qual2==null )  {
                    //    this.apiDisplayMensagem('Informe a classificação.');
                    //    validado = false;
                   // } 

                }


                if(
                    (this.tipoMatP == 'ALGOD'  && this.movimento.tipoMovimento == 'NFFIL')  ||
                    (this.tipoMatP == 'FILAM'  && this.movimento.tipoMovimento == 'NFE')
                ){      
                        this.apiDisplayMensagem('Tipo de material incompatível com tipo de movimento.');
                        validado = false; 
                 }                



                if(validado){

                    this.novoItem();  

                    this.tipoMovimentoDesabilitado=true;
                    this.tipoMPDesabilitado=true;
                    this.fornecedorDesabilitado=true;
                    this.notaFiscalDesabilitado=true;
                    this.dataBaseDesabilitado=true;
                    this.dataEmissaoDesabilitado=true;
                    this.produtorDesabilitado=true;
                    this.procedenciaDesabilitado=true;
                    this.pesoTotalDesabilitado=true;
                    this.numVolumesDesabilitado=true;
                    this.pesoMedioDesabilitado=true; 
                    this.qual1=true;
                    this.qual2=true;

 
                }

            },

            excluirItem(pInd){

 


                if(this.aMovimentoItem[pInd].statusItemOriginal  == 'Inclusão') {
                    
                    if (this.aMovimentoItem[pInd].item == 0 || this.aMovimentoItem[pInd].item == null  || this.aMovimentoItem[pInd].item == 'undefined'   ){
                        this.aMovimentoItem.splice(pInd,1);  

                        this.numItem = 0;
                        for (let i = 0; i < this.aMovimentoItem.length; i++) {   
                                    this.numItem = this.numItem+1;                                                                    
                                    this.aMovimentoItem[i].ind =  String(this.numItem).padStart(3, '0')  ;    
                        }   

                    }else{
                        this.apiDisplayMensagem('Item já informado.')
                    }


                }else {    
                      
                    if(this.aMovimentoItem[pInd].statusItem  == 'Exclusão'){

                        if(this.aMovimentoItem[pInd].statusItemOriginal == 'Exclusão'){
                            this.apiDisplayMensagem('Item já excluído definitivamente.');
                        }else{
                            this.aMovimentoItem[pInd].statusItem = this.aMovimentoItem[pInd].statusItemOriginal;
                        }
                        
                      }else{
                        this.aMovimentoItem[pInd].statusItem  = 'Exclusão';
                      } 
                }

                this.calculaDadosDocumento();
            }, 
             
            novoItem(){ 

                let i;
                //let dataInsercao;
                //let dataAlteracao;
                let dataAtual = new Date();

                //let dia = String(dataAtual.getDate()).padStart(2, '0');
                //let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês é baseado em zero, portanto, é necessário adicionar 1
                //let ano = dataAtual.getFullYear();
                //let dataFormatada = `${dia}/${mes}/${ano}`;  

               //dataInsercao = dataFormatada;  

                for (i = 0; i < 1; i++) {

                    this.numItem = this.numItem+1; 
                    this.movimentoItemTempAux = Object.assign({},this.movimentoItemInicial);  
                    this.movimentoItemTempAux.ind =  String(this.numItem).padStart(3, '0')  ;  
                    //if(this.vOperAlteraItem=='N'){
                    //    this.movimentoItemTempAux.habilitado = true;
                        //this.configuraNovoItemAtlzItem();
                    //}else{
                        this.movimentoItemTempAux.habilitado = false;
                    //}
                    
                    this.movimentoItemTempAux.alteracao = false; 
                    this.movimentoItemTempAux.statusItem = 'Inclusão'
                    this.movimentoItemTempAux.statusItemOriginal = 'Inclusão'

                    this.movimentoItemTempAux.loteJaTestado =  'N' ;
                    this.movimentoItemTempAux.unidadeMedida = 'KG'; 

                    this.movimentoItemTempAux.dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    this.movimentoItemTempAux.dataInclusao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    this.movimentoItemTempAux.usuarioInclusao = this.$store.state.usuarioSistema.codigo; 
                    this.movimentoItemTempAux.usuarioAlteracao = this.$store.state.usuarioSistema.codigo; 
/*
                    if(this.aMovimentoItem[i].statusItem == 'Inclusão') {
                                                                            this.aMovimentoItem[i].dataAlteracao = dataInsercao; 
                                                                            this.aMovimentoItem[i].dataInclusao = dataInsercao; 
                                                                            this.aMovimentoItem[i].usuarioInclusao  = this.$store.state.usuarioSistema.codigo;
                                                                            this.aMovimentoItem[i].usuarioAlteracao = this.$store.state.usuarioSistema.codigo;

                                                                        }
*/

                   this.aMovimentoItem.push(this.movimentoItemTempAux); 
                   

                } 
 

            },


 
            setaPesquisa(e) {   

                if (e.tipo == "item") {
                    this.aMovimentoItem[this.indiceAtual].item = e.obj.codigo;
                    this.aMovimentoItem[this.indiceAtual].descFio = e.obj.material.descricao.substring(0, 40);
                    this.aMovimentoItem[this.indiceAtual].idMovimento = 0;
                } 

                if(e.tipo == "fornecedor") {

                    this.movimento.fornecedor = e.obj.codigo;
                    this.nomeFornecedor = e.obj.descricao;
                }      
                
                if(e.tipo == "Lote") {

                    this.aMovimentoItem[this.indiceAtual].idMovimento = e.obj.idMov;
                    this.aMovimentoItem[this.indiceAtual].lote           = e.obj.lote;
                    this.aMovimentoItem[this.indiceAtual].pilha          = e.obj.pilha;
                    this.aMovimentoItem[this.indiceAtual].tamanho        = e.obj.tamanho;
                    this.aMovimentoItem[this.indiceAtual].unidadeMedida  = e.obj.unidadeMedida;
                    this.aMovimentoItem[this.indiceAtual].pesoMedio      = this.apiFormataNumero(parseFloat(e.obj.pesoMedio).toFixed(4),4);
                    this.aMovimentoItem[this.indiceAtual].produtor       = e.obj.produtor; 
                    this.aMovimentoItem[this.indiceAtual].unidadeMedida  = e.obj.unidadeMedida;
                    this.aMovimentoItem[this.indiceAtual].notaFiscal     = e.obj.nf; 
                    this.aMovimentoItem[this.indiceAtual].fornecedor     = e.obj.fornecedor; 
                    this.aMovimentoItem[this.indiceAtual].procedencia    = e.obj.procedencia; 
                    this.aMovimentoItem[this.indiceAtual].descFio        = e.obj.nomeItem;   

                    this.aMovimentoItem[this.indiceAtual].tipoQualidade        = e.obj.tipoQualidade;   
                    this.aMovimentoItem[this.indiceAtual].getClassifQualidade  = e.obj.getClassifQualidade;   
                    this.aMovimentoItem[this.indiceAtual].coloracao       = e.obj.coloracao;   
                    this.aMovimentoItem[this.indiceAtual].loteAdicional   = e.obj.loteAdicional;   
                    this.aMovimentoItem[this.indiceAtual].idVolume        = e.obj.idVolume;   
                    this.aMovimentoItem[this.indiceAtual].tipoMic         = e.obj.tipoMic;   
                    this.aMovimentoItem[this.indiceAtual].destino         = e.obj.destino;     

                }                  

            },  
 

            validaPilha(pPilha){

                 let validado; 
                 validado = false;
                
                if(pPilha !=null && pPilha != '') {

                    if(pPilha.length==4) {

                        if(parseInt(pPilha, 10) < 9999){ 
                            validado = true; 
                        } 

                    }  

                }else{
                    // Pilha vazia
                    validado = true;
                }



                 return validado;


            },
 
            async submitForm() {   
 
                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 
                    let objItem ; 
                    let validado;
                    let myMsg;
                    //let vPesoTotal;
                   
                    this.aMovimentoItemFinal = []; 
                    this.aMovimentoItemDAO = [];   
                    
                    myMsg = '';
                    validado = true;
                    for (let i = 0; i < this.aMovimentoItem.length; i++) {    
                                                    
                        if(this.aMovimentoItem[i].idMovimento ==0 && this.vOperAlteraItem=='N'   ){
                            validado = false;
                            myMsg = 'Id do lote ' + this.aMovimentoItem[i].lote + ' inválido.'
                            this.apiDisplayMensagem('Id do lote ' + this.aMovimentoItem[i].lote + ' inválido.');
                            this.haErros = true;
                        }
                    
                        if(!this.validaPilha(this.aMovimentoItem[i].pilha)){
                            validado = false;
                            myMsg = 'Pilha do lote ' + this.aMovimentoItem[i].lote + ' inválida.'
                            this.apiDisplayMensagem(myMsg);
                            this.haErros = true;

                        }

                        if (this.aMovimentoItem[i].descFio=='' || this.aMovimentoItem[i].descFio==null)  {
                            validado = false;
                            myMsg = 'Item do lote ' + this.aMovimentoItem[i].lote + ' inválido.'
                            this.apiDisplayMensagem(myMsg);
                            this.haErros = true; 
                        }                


                    } 

                    this.validacao = await this.$refs.formulario.validate();   

                    if (!this.validacao.valid){
                        validado = false; 
                        myMsg = 'Preencha os campos com críticas.';
                    }
                    
                    if (validado == false ) {
               
                        this.apiDisplayMensagem(myMsg);
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
                        let itensValidos=0;

                        let idMovto;
                        let vIdMovtoItem;
                        let vIdIt;     
                        let vIdMovim;        
                        //let vPesoMedio ; 
                        let url = `${process.env.VUE_APP_BASE_URL}/movimento`;

                        
                        if(this.tipoOperacao=="I"){
                                dataInsercao = dataFormatada;
                                this.movimento.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                                this.movimento.usuarioInclusao = this.$store.state.usuarioSistema.codigo;
                        }else{
                                    if (typeof this.movimento.dataInclusao   === "string") {
                                        dataInsercao  = this.movimento.dataInclusao ;
                                    } else if (this.movimento.dataInclusao  instanceof Date) {
                                        dataInsercao  = this.$moment(this.movimento.dataInclusao.format("DD/MM/YYYY")  )
                                    } 

                                    dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                         }   

                          
                         //vPesoTotal = this.movimento.pesoTotal.replaceAll(".", "") 
                         //vPesoTotal = vPesoTotal.replaceAll(",", ".")
                         //this.apiConverteNumeroFormatado( pMov.peso)

                        // vPesoTotal = parseFloat(vPesoTotal)                          
                       
 
                        if (this.tipoOperacao=="I") {       

                                let vIdMov;


                                // Mesmo sendo inclusão, já possui Id de movimento;

                                if(this.movimento.id==0){
                                    vIdMov = await this.buscaId();   
                                }else{
                                    vIdMov = this.movimento.id; 
                                }
 
 
                                if ((vIdMov != 0 && vIdMov != undefined) ){
 
                                    idMovto = vIdMov 
                                    this.movimento.id = idMovto;

                                    for (let i = 0; i < this.aMovimentoItem.length; i++) {    

                                                       this.aMovimentoItem[i].alteracao = true;  
                                                       

                                                        itensValidos = itensValidos + 1; 

                                                        // Gera um id para o item caso ainda não tenha

                                                        const resposta = await this.buscaId();        
                                                        if ((resposta != 0 && resposta != undefined) ){
                                                            vIdMovtoItem = resposta  
                                                        }else{
                                                            vIdMovtoItem = 99999;
                                                        }

                                                        vIdIt = vIdMovtoItem; 
                                                        this.aMovimentoItem[i].idItem = vIdIt;

                                                        if(this.aMovimentoItem[i].idMovimento == 0) {   
                                                            this.aMovimentoItem[i].idMovimento = vIdMovtoItem; 
                                                        } 
/*
                                                        if(this.aMovimentoItem[i].peso == 0 || this.aMovimentoItem[i].quantidade == 0 ) {
                                                            vPesoMedio = 0
                                                        }else{
                                                            vPesoMedio = this.aMovimentoItem[i].peso / this.aMovimentoItem[i].quantidade ;
                                                        } 
*/
                                                        //vPesoMedio = vPesoMedio.toFixed(4);

                                                        objItem = {  
                                                        
                                                                idfil:      this.$store.state.usuarioSistema.idfil,
                                                                notaFiscal: this.movimento.notaFiscal    ,
                                                                fornecedor: this.movimento.fornecedor,
                                                                item: parseInt(this.aMovimentoItem[i].item), 
                                                                produtor:     this.movimento.produtor,
                                                                procedencia:  this.movimento.procedencia, 
                                                                lote:         this.aMovimentoItem[i].lote,    
                                                                qualidade:    this.aMovimentoItem[i].qualidade,     
                                                                tamanho:      this.aMovimentoItem[i].tamanho,  
                                                                descFio:      this.aMovimentoItem[i].descFio,  
                                                                
                                                                observacao:          this.aMovimentoItem[i].observacao, 
                                                                unidadeMedida:       this.aMovimentoItem[i].unidadeMedida, 
                                                                pilha:               this.aMovimentoItem[i].pilha, 
                                                                movimentoAutomatico:  "N", 
                                                                movimentoDePilha:     "N",
                                                                quantidade:           this.aMovimentoItem[i].quantidade, 
                                                                peso:                 this.apiConverteNumeroFormatado(this.aMovimentoItem[i].peso),   
                                                                vlUnitario:           this.apiConverteNumeroFormatado(this.aMovimentoItem[i].vlUnitario),  
                                                                idMovimento:          this.aMovimentoItem[i].idMovimento,  
                                                                idItem:               vIdIt,
                                                                
                                                                sac:   this.aMovimentoItem[i].sac, 
                                                                trid:  this.aMovimentoItem[i].trid, 
                                                                pim:   this.aMovimentoItem[i].pim, 
                                                                sc:    this.aMovimentoItem[i].sc, 
                                                                mst:   this.aMovimentoItem[i].mst, 
                                                                mic:   this.aMovimentoItem[i].mic, 
                                                                mat:   this.aMovimentoItem[i].mat, 
                                                                ui:    this.aMovimentoItem[i].ui, 
                                                                sf:    this.aMovimentoItem[i].sf, 
                                                                str:   this.aMovimentoItem[i].str, 
                                                                elg:   this.aMovimentoItem[i].elg, 
                                                                tipo:  this.aMovimentoItem[i].tipo, 
                                                                sic:   this.aMovimentoItem[i].sic, 

                                                                idAutomatico: this.aMovimentoItem[i].idAutomatico, 
                                                                uhml:         this.aMovimentoItem[i].uhml, 
                                                                rs:           this.aMovimentoItem[i].rs, 
                                                                b:            this.aMovimentoItem[i].b, 
                                                                trcnt:        this.aMovimentoItem[i].trcnt,
                                                                trar:         this.aMovimentoItem[i].trar, 
                                                                pesoMedio:    this.apiConverteNumeroFormatado(this.aMovimentoItem[i].pesoMedio),
                                                                statusItem:   this.aMovimentoItem[i].statusItem,    
                                                                habilitado: true ,
                                                                loteJaTestado: this.aMovimentoItem[i].loteJaTestado,

                                                                tipoQualidade:    this.aMovimentoItem[i].tipoQualidade,
                                                                classifQualidade: this.aMovimentoItem[i].classifQualidade, 
                                                                coloracao:        this.aMovimentoItem[i].coloracao,
                                                                loteAdicional:    this.aMovimentoItem[i].loteAdicional, 
                                                                idVolume:         this.aMovimentoItem[i].idVolume, 
                                                                tipoMic:          this.aMovimentoItem[i].tipoMic,	 
                                                                destino:          this.aMovimentoItem[i].destino, 
                                                                usuarioInclusao:  this.aMovimentoItem[i].usuarioInclusao ,
                                                                usuarioAlteracao: this.aMovimentoItem[i].usuarioAlteracao,
                                                                dataInclusao:     this.aMovimentoItem[i].dataInclusao,
                                                                dataAlteracao:    this.aMovimentoItem[i].dataAlteracao                                                              
 
                                                        } 

                                                        this.aMovimentoItemDAO.push(objItem);
                                                 
                                                //}
                                            
                                    }   
                                  
                                    if(itensValidos>0){ 


                                            this.movimentoDAO =
                                            {   
                                                    "id": vIdMov,
                                                    "idfil": this.$store.state.usuarioSistema.idfil,
                                                    "notaFiscal": this.movimento.notaFiscal    ,
                                                    "fornecedor": this.movimento.fornecedor,
                                                    "tipoMovimento": this.movimento.tipoMovimento,  
                                                    "tipoMP":  this.movimento.tipoMP,
                                                    "dataBase":  this.$moment(this.movimento.dataBase,).format("DD/MM/YYYY"),
                                                    "dataEmissao":  this.$moment(this.movimento.dataEmissao,).format("DD/MM/YYYY"), 
                                                    //"entradaSaida":  this.movimento.entradaSaida,
                                                    "loteFiacao":  this.movimento.loteFiacao,
                                                    "pesoMedio":  this.apiConverteNumeroFormatado(this.movimento.pesoMedio),
                                                    "pesoTotal":  this.apiConverteNumeroFormatado(this.movimento.pesoTotal),
                                                    "numVolumes": this.movimento.numVolumes,
                                                    "produtor":  this.movimento.produtor,
                                                    "procedencia":  this.movimento.procedencia, 
                                                    "qual1":  this.movimento.qual1, 
                                                    "qual2":  this.movimento.qual2,  

                                                    "movimentoAutomatico":  "N",
                                                    "movimentoPilha":  "N", 
                                                    "usuarioInclusao":  this.movimento.usuarioInclusao ,
                                                    "usuarioAlteracao":  this.movimento.usuarioInclusao,
                                                    "dataInclusao":  dataInsercao,
                                                    "dataAlteracao":  dataInsercao, 

                                                    "itemMovimentoDTO":this.aMovimentoItemDAO    
                                            }   

                                            this.aMovimentoItemFinal.push(this.movimentoDAO);  
                                            
                                            //console.log('InclusaO this.aMovimentoItemFinal')
                                            //console.log(this.aMovimentoItemFinal)
                                             
                                            await this.axios.post(
                                                url,
                                                JSON.stringify(this.aMovimentoItemFinal),
                                                this.apiTokenHeader({ "Content-Type": "application/json" })
                                            )
                                            .then(response => { 

                                                this.apiDisplayMensagemSucesso('Movimento inserido com sucesso.' ) 
                                                this.tmp = JSON.stringify(response.data);   
                                                //if(this.vOperAlteraEstoque=='S'){
                                                //    this.tipoOperacao = 'X'; 
                                                //}else{
                                                    this.tipoOperacao = 'A'; 
                                                    this.configuraCampos('A' ); 
                                                //}

                                                for (let i = 0; i < this.aMovimentoItem.length; i++) {    
                                                    
                                                    if(this.aMovimentoItem[i].statusItem != 'Exclusão'){   
                                                        
                                                        this.aMovimentoItem[i].statusItem = 'Alteração';  
                                                        this.aMovimentoItem[i].statusItemOriginal = 'Alteração';  
                                                        this.aMovimentoItem[i].habilitado = true;

                                                    }

                                                } 

                                                this.calculaDadosDocumento();
                                                 
                                            })
                                            .catch(error => {
                                                console.log("Erro: ", error.response.data); 
                                                this.apiDisplayMensagem(error.response.data ) 
                                            }); 
                                   } else{
                                        this.apiDisplayMensagem('Documento sem itens. Não será gravado')
                                   }  



                                }      
 
                        } else {

                                    if (this.tipoOperacao == 'A'   ) {  

                                            itensValidos = 0;
                                            for (let i = 0; i < this.aMovimentoItem.length; i++) {    

                                                    this.aMovimentoItem[i].alteracao = true;  

                                                    //console.log('this.aMovimentoItem[i]')
                                                    //console.log(this.aMovimentoItem[i]) 


                                                    //if( this.aMovimentoItem[i].statusItem == 'Inclusão' ){
                                                        // if (typeof this.aMovimentoItem[i].dataInclusao   === "string") {
                                                         //   dataInsercao  = this.aMovimentoItem[i].dataInclusao 
                                                        // } else if (this.movimento.dataInclusao  instanceof Date) {
                                                        //   dataInsercao  = this.$moment(this.aMovimentoItem[i].dataInclusao.format("DD/MM/YYYY")  )
                                                         //}
                                                    //}                                                     

                                                    if( this.aMovimentoItem[i].statusItem == 'Inclusão' ||  this.aMovimentoItem[i].statusItem == 'Alteração' ||    (this.aMovimentoItem[i].statusItem == 'Exclusão' && this.aMovimentoItem[i].statusItemOriginal == 'Alteração' )   ){

                                                            itensValidos = itensValidos + 1; 
                                                            // Gera um id para o item caso ainda não tenha
                                                            if(this.aMovimentoItem[i].statusItem == 'Inclusão'){ 
                                                                    const resposta = await this.buscaId();        
                                                                    if ((resposta != 0 && resposta != undefined) ){
                                                                        vIdMovtoItem = resposta  
                                                                    }else{
                                                                        vIdMovtoItem = 99999;
                                                                    }

                                                                    vIdIt = vIdMovtoItem; 
                                                                    this.aMovimentoItem[i].idItem = vIdIt;
                                                                    
                                                                    if(this.aMovimentoItem[i].idMovimento == 0) {
                                                                        vIdMovim = vIdMovtoItem;
                                                                        this.aMovimentoItem[i].idMovimento = vIdMovim;
                                                                    }else{

                                                                        vIdMovim = this.aMovimentoItem[i].idMovimento;
                                                                    }  

                                                            }else{
                                                                vIdIt = this.aMovimentoItem[i].idItem;
                                                                vIdMovim = this.aMovimentoItem[i].idMovimento;
                                                                


                                                            }

/*
                                                            if(this.aMovimentoItem[i].peso == 0 || this.aMovimentoItem[i].quantidade == 0 ) {
                                                                vPesoMedio = 0
                                                            }else{
                                                                vPesoMedio = this.aMovimentoItem[i].peso / this.aMovimentoItem[i].quantidade ;
                                                            } 
*/
                                                            //vPesoMedio = vPesoMedio.toFixed(4);                                                            

                                                            

                                                            //console.log('Valida iitteemm 7777')
                                                            //console.log(this.movimento)  

                                                            objItem = {  
                                                            
                                                                    idfil:      this.$store.state.usuarioSistema.idfil,
                                                                    notaFiscal: this.movimento.notaFiscal    ,
                                                                    fornecedor: this.movimento.fornecedor,
                                                                    item: parseInt(this.aMovimentoItem[i].item), 
                                                                    produtor:     this.movimento.produtor,
                                                                    procedencia:  this.movimento.procedencia, 
                                                                    lote:         this.aMovimentoItem[i].lote,    
                                                                    qualidade:    this.aMovimentoItem[i].qualidade,     
                                                                    tamanho:      this.aMovimentoItem[i].tamanho,  
                                                                    descFio:      this.aMovimentoItem[i].descFio,  
                                                                    
                                                                    observacao:          this.aMovimentoItem[i].observacao, 
                                                                    unidadeMedida:       this.aMovimentoItem[i].unidadeMedida, 
                                                                    pilha:               this.aMovimentoItem[i].pilha, 
                                                                    movimentoAutomatico:  this.aMovimentoItem[i].movimentoAutomatico, 
                                                                    movimentoDePilha:     this.aMovimentoItem[i].movimentoDePilha, 
                                                                    quantidade:           this.aMovimentoItem[i].quantidade, 
                                                                    peso:                 this.apiConverteNumeroFormatado(this.aMovimentoItem[i].peso),  
                                                                    vlUnitario:           this.apiConverteNumeroFormatado(this.aMovimentoItem[i].vlUnitario),  
                                                                    idMovimento:          vIdMovim,  
                                                                    idItem:               vIdIt,
                                                                    
                                                                    sac:   this.aMovimentoItem[i].sac, 
                                                                    trid:  this.aMovimentoItem[i].trid, 
                                                                    pim:   this.aMovimentoItem[i].pim, 
                                                                    sc:    this.aMovimentoItem[i].sc, 
                                                                    mst:   this.aMovimentoItem[i].mst, 
                                                                    mic:   this.aMovimentoItem[i].mic, 
                                                                    mat:   this.aMovimentoItem[i].mat, 
                                                                    ui:    this.aMovimentoItem[i].ui, 
                                                                    sf:    this.aMovimentoItem[i].sf, 
                                                                    str:   this.aMovimentoItem[i].str,   
                                                                    elg:   this.aMovimentoItem[i].elg, 
                                                                    tipo:  this.aMovimentoItem[i].tipo, 
                                                                    sic:   this.aMovimentoItem[i].sic, 

                                                                    idAutomatico: this.aMovimentoItem[i].idAutomatico,  
                                                                    uhml:         this.aMovimentoItem[i].uhml, 
                                                                    rs:           this.aMovimentoItem[i].rs, 
                                                                    b:            this.aMovimentoItem[i].b, 
                                                                    trcnt:        this.aMovimentoItem[i].trcnt, 
                                                                    trar:         this.aMovimentoItem[i].trar, 
                                                                    pesoMedio:    this.apiConverteNumeroFormatado(this.aMovimentoItem[i].pesoMedio),   
                                                                    statusItem:   this.aMovimentoItem[i].statusItem,    
                                                                    statusItemOriginal:   this.aMovimentoItem[i].statusItemOriginal, 
                                                                    habilitado: true,
                                                                    loteJaTestado: this.aMovimentoItem[i].loteJaTestado,

                                                                    tipoQualidade:    this.aMovimentoItem[i].tipoQualidade,
                                                                    classifQualidade: this.aMovimentoItem[i].classifQualidade, 
                                                                    coloracao:        this.aMovimentoItem[i].coloracao,
                                                                    loteAdicional:    this.aMovimentoItem[i].loteAdicional, 
                                                                    idVolume:         this.aMovimentoItem[i].idVolume, 
                                                                    tipoMic:          this.aMovimentoItem[i].tipoMic,	 
                                                                    destino:          this.aMovimentoItem[i].destino,                                                                      
                                                                    usuarioInclusao:  this.aMovimentoItem[i].usuarioInclusao ,                                                   
                                                                    dataInclusao:     this.aMovimentoItem[i].dataInclusao ,                                                                      
                                                                    usuarioAlteracao: this.$store.state.usuarioSistema.codigo       
                                                                    
                                                                    // a data da alteração o java grava
                                                                

                                                            } 

                                                            this.aMovimentoItemDAO.push(objItem);
                                                    
                                                    }

                                            }   

                                            //console.log(itensValidos);

                                            if(itensValidos>0){

                                                    this.movimentoDAO =
                                                    {   
                                                            "id":this.movimento.id ,
                                                            "idfil": this.$store.state.usuarioSistema.idfil,
                                                            "notaFiscal": this.movimento.notaFiscal    ,
                                                            "fornecedor": this.movimento.fornecedor,
                                                            "tipoMovimento": this.movimento.tipoMovimento,
                                                            "tipoMP":  this.movimento.tipoMP,
                                                            "dataBase":  this.$moment(this.movimento.dataBase,).format("DD/MM/YYYY"),
                                                            "dataEmissao":  this.$moment(this.movimento.dataEmissao,).format("DD/MM/YYYY"),  
                                                            "loteFiacao":  this.movimento.loteFiacao,
                                                            "pesoMedio":  this.apiConverteNumeroFormatado(this.movimento.pesoMedio),
                                                            "pesoTotal":  this.apiConverteNumeroFormatado(this.movimento.pesoTotal),   
                                                            "numVolumes": this.movimento.numVolumes,
                                                            "produtor":  this.movimento.produtor,
                                                            "procedencia":  this.movimento.procedencia, 
                                                            "qual1":  this.movimento.qual1, 
                                                            "qual2":  this.movimento.qual2,                                                              
                                                            "movimentoAutomatico":  this.movimento.movimentoAutomatico,
                                                            "movimentoPilha": this.movimento.movimentoPilha,
                                                            "usuarioInclusao":  this.movimento.usuarioInclusao ,
                                                            "usuarioAlteracao":  this.$store.state.usuarioSistema.codigo,
                                                            "dataInclusao":  this.movimento.dataInclusao ,
                                                            "dataAlteracao":  dataAlteracao,
                                                            "itemMovimentoDTO":this.aMovimentoItemDAO    
                                                    } 

                                                    //console.log('AlteraCAO')
                                                    //console.log(this.aMovimentoItemDAO) 

                                                
                                                    this.aMovimentoItemFinal.push(this.movimentoDAO);  
 
                                                    //console.log(this.aMovimentoItemFinal);
                                                    await this.axios.put(
                                                        url,
                                                        JSON.stringify(this.aMovimentoItemFinal),
                                                        this.apiTokenHeader({ "Content-Type": "application/json" })
                                                    )
                                                    .then(response => { 


                                                        this.resultado = response.data; 
                                                       
                                                        if(this.resultado=="Deletado"){
                                                            this.simNaoRetorno = 'S'
                                                            this.resetarForm();
                                                            this.apiDisplayMensagemSucesso('Movimento excluido com sucesso.' ) 
                                                            

                                                        }else{
                                                                this.apiDisplayMensagemSucesso('Movimento alterado com sucesso.' ) 
                                                                this.tmp = JSON.stringify(response.data);   
                                                                
                                                                this.aMovimentoItemTransitorio = [];
                                                                this.numItem = 0;
                                                                for (let i = 0; i < this.aMovimentoItem.length; i++) {   

                                                                    
                                                                        if(this.aMovimentoItem[i].statusItem != 'Exclusão' ) {
                                                                            this.aMovimentoItem[i].statusItem = 'Alteração';   
                                                                            this.aMovimentoItem[i].statusItemOriginal = 'Alteração'; 
                                                                            this.aMovimentoItem[i].habilitado = true;
                                                                        }

                                                                        if(this.aMovimentoItem[i].statusItem == 'Exclusão'   ){
                                                                            this.aMovimentoItem[i].statusItemOriginal = 'Exclusão';  
                                                                        }
                                                                        
                                                                        if(this.aMovimentoItem[i].statusItem == 'Inclusão' || this.aMovimentoItem[i].statusItem == 'Alteração') {
                                                                            this.numItem = this.numItem+1;                                                                    
                                                                            this.aMovimentoItem[i].ind =  String(this.numItem).padStart(3, '0')  ;  
                                                                            this.aMovimentoItemTransitorio.push(this.aMovimentoItem[i]);


                                                                        } 

                                                                
                                                                } 

                                                                //console.log('this.aMovimentoItemTransitorio')
                                                                //console.log(this.aMovimentoItemTransitorio)
                                                                this.aMovimentoItem = this.aMovimentoItemTransitorio;
                                                                this.calculaDadosDocumento();
                                                        } 

                                                        
                                                    })
                                                    .catch(error => {
                                                        console.log("Erro: ", error.response.data ); 
                                                        this.apiDisplayMensagem(error.response.data  ) 
                                                    });  
                                            }



                                    }  

                                }


                    }  //////////////////// valid


                   // } //////////////////// limpaItensBranco

           }, 
  

           resetarForm(){

                //console.log('')  

                if(this.simNaoRetorno == 'S'){

                    this.movimento = Object.assign({},this.movimentoInicial);  
                    //this.v$.$reset(); 
                    this.numItem = 0;
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';  
                    this.nomeFornecedor = '';
                    this.tipoMatP = "" ;
                    this.pPesoDocumento =0.00; 
                    this.pNumVolumes =0;
                    this.pPesoMedio =0.0000;
                     
                    this.configuraCampos('I' )  ;

                    this.aMovimentoItem= []; 
                    this.aMovimentoItemFinal = [];
                    this.aMovimentoItemDAO = [];       
                    this.vOperAlteraEstoque = '';
                    this.vOperAlteraItem = '';  
                    this.movimento.pesoTotal = '0';


                    //console.log('RESETADO');
                    //console.log('this.aMovimentoItem')
                    //console.log(this.aMovimentoItem)
                    //console.log('this.aMovimentoItemFinal')
                    //console.log(this.aMovimentoItemFinal)
                    //console.log('this.aMovimentoItemDAO')
                    //console.log(this.aMovimentoItemDAO)

                }  

            },

/*
            configuraNovoItemAtlzItem(){    

                //this.itemDesabilitado = false; 

                this.loteItemDesabilitado = true; 
                this.pilhaDesabilitado = true; 
                this.tamanhoDesabilitado = true; 
                this.umDesabilitado = true;   
                this.vTmp = 'ZZZZZKKKK'
                             
            },
*/
            configuraCampos(oper ){



 
                    if(oper=='I'){

                        this.tipoMovimentoDesabilitado=false;
                        this.tipoMPDesabilitado=false;
                        this.fornecedorDesabilitado=false;
                        this.notaFiscalDesabilitado=false;
                        this.dataBaseDesabilitado=false;
                        this.dataEmissaoDesabilitado=false;
                        this.produtorDesabilitado=false;
                        this.procedenciaDesabilitado=false;
                        this.pesoTotalDesabilitado=false;
                        this.numVolumesDesabilitado=false;
                        this.pesoMedioDesabilitado=false; 
                        this.qual1Desabilitado=false;
                        this.qual2Desabilitado=false;
                         

                    }else if(oper=='A' || oper=='E'){

                        this.tipoMovimentoDesabilitado=true;
                        this.tipoMPDesabilitado=true;
                        this.fornecedorDesabilitado=true;
                        this.notaFiscalDesabilitado=true;
                        this.dataBaseDesabilitado=true;
                        this.dataEmissaoDesabilitado=true;
                        this.produtorDesabilitado=true;
                        this.procedenciaDesabilitado=true;
                        this.pesoTotalDesabilitado=true;
                        this.numVolumesDesabilitado=true;
                        this.pesoMedioDesabilitado=true;
                        this.qual1Desabilitado=true;
                        this.qual2Desabilitado=true;
                    }    

                    ///////////// CONFIGURAÇÃO DOS ITENS //////////////
 
                    if(oper=='I'){


                        this.itemDesabilitado = false; 
                        //this.loteItemDesabilitado = false;  
                        this.pilhaDesabilitado = false; 
                        //this.tamanhoDesabilitado = false;  
                          
                        if(this.vOperAlteraItem=='N'){  
                           
                            this.loteItemDesabilitado = true;
                            this.tamanhoDesabilitado = true;  
                            this.tipoQualidadeDesabilitado = true; 
                            this.classifQualidadeDesabilitado = true; 
                            this.coloracaoDesabilitado = true; 
                            this.loteAdicionalDesabilitado = true; 
                            this.idVolumeDesabilitado = true; 
                            this.tipoMicDesabilitado = true; 	 
                            this.destinoDesabilitado = true; 
                            this.umDesabilitado  = true;   


                            this.vTmp = 'ZZZZZ1111'
                        }else{                 
                            
                            this.loteItemDesabilitado = false;
                            this.tamanhoDesabilitado = false; 
                            this.tipoQualidadeDesabilitado = false; 
                            this.classifQualidadeDesabilitado = false; 
                            this.coloracaoDesabilitado = false; 
                            this.loteAdicionalDesabilitado = false; 
                            this.idVolumeDesabilitado = false; 
                            this.tipoMicDesabilitado = false; 	 
                            this.destinoDesabilitado = false; 
                            this.umDesabilitado = false;   

                            this.vTmp = 'ZZZZZ2222'
                        } 
 
                    }else if(oper=='A'){ 

                        if(this.vOperAlteraEstoque=='S'){                            
                            
                             
                            this.itemDesabilitado = true;   
                            this.loteItemDesabilitado = true;                             
                            this.pilhaDesabilitado = true; 
                            this.tamanhoDesabilitado = true; 
                            this.umDesabilitado  = true;   
                            this.tipoQualidadeDesabilitado = true; 
                            this.classifQualidadeDesabilitado = true; 
                            this.coloracaoDesabilitado = true; 
                            this.loteAdicionalDesabilitado = true; 
                            this.idVolumeDesabilitado = true; 
                            this.tipoMicDesabilitado = true; 	 
                            this.destinoDesabilitado = true;                             
  
                            this.vTmp = 'ZZZZZaaaaaaa'

                            if(this.vOperAlteraItem=='N'){  
                           
                                this.loteItemDesabilitado = true;
                                this.tamanhoDesabilitado = true; 
                                this.umDesabilitado = true; 
                                this.tipoQualidadeDesabilitado = true; 
                                this.classifQualidadeDesabilitado = true; 
                                this.coloracaoDesabilitado = true; 
                                this.loteAdicionalDesabilitado = true; 
                                this.idVolumeDesabilitado = true; 
                                this.tipoMicDesabilitado = true; 	 
                                this.destinoDesabilitado = true;                                       
                        
                               this.vTmp = 'ZZZZZbbbbb'
                             } else{

 

                                //this.quantidadeDesabilitado = true;
                                this.vTmp = 'ZZZZZMMMMMM'

                             }


                        }else{
                            
                            this.itemDesabilitado = true; 
                            this.loteItemDesabilitado = true;    
                            this.umDesabilitado = true;                          
                            this.pilhaDesabilitado = true; 
                            this.tamanhoDesabilitado = true;                             
                            this.observacaoDesabilitado = false;  
                            this.tipoQualidadeDesabilitado = true; 
                            this.classifQualidadeDesabilitado = true; 
                            this.coloracaoDesabilitado = true; 
                            this.loteAdicionalDesabilitado = true; 
                            this.idVolumeDesabilitado = true; 
                            this.tipoMicDesabilitado = true; 	 
                            this.destinoDesabilitado = true;   




                            this.vTmp = 'ZZZZZccccc'

                             /*
                            if(this.vOperAlteraItem=='N'){  
                                this.idDesabilitado = false;
                            }else{                 
                                this.idDesabilitado = true;
                            } 
                            */

                        } 

                
                    }          
                    
                    
                   //console.log('configuraCampos');
                   //console.log(this.vTmp);
 

                  


            }, 

            
            async populaForm(){    

                    this.resultado = ""; 
                    let retornoPopForm=false;  
                    let objItem;   
                    let dataFormatada;
                    let loteTestado;
                    let vPesoTotal;
                    let vPesMed;
                    //let parametroCodificado;
                    

                    //parametroCodificado = encodeURIComponent(this.movimento.notaFiscal);

                    //console.log('parametroCodificado');
                    //console.log(parametroCodificado); 

                   // let url = `${process.env.VUE_APP_BASE_URL}/movimento/buscadoc/${this.$store.state.usuarioSistema.idfil}/${this.movimento.fornecedor}/${parametroCodificado}`;
                   
                   
                   let url = `${process.env.VUE_APP_BASE_URL}/movimento/buscadoc`;
 
                    //console.log('url') 
                    //console.log(url)  

                   this.numItem = 0; 
                   this.aMovimentoItem = [];
                   this.msgProcessamento = "Processando" ;
                   this.apiProcessamento()  ;

                   this.movimentoParamDTO =  {};

                   this.movimentoParamDTO.idfil      = this.$store.state.usuarioSistema.idfil;
                   this.movimentoParamDTO.fornecedor = this.movimento.fornecedor;
                   this.movimentoParamDTO.notaFiscal = this.movimento.notaFiscal;  

                   //console.log('this.movimentoParamDTO'); 

                   //console.log(this.movimentoParamDTO); 

                   await this.axios.post(
                   url,
                   JSON.stringify(this.movimentoParamDTO),
                   //{
                   //headers: { "Content-Type": "application/json" }
                   //}
                    
                   this.apiTokenHeader({ "Content-Type": "application/json" })
                    
                   )
                    .then(response => {

                       // console.log("PopulaForm");
                        this.resultado = response.data;  
                        
                        //console.log(this.resultado);


                        if(this.resultado){ 

                                    if (this.resultado.id != null){
                                        this.movimento.id = this.resultado.id ;     
                                    
                                    }else{
                                        this.movimento.id = "" ;                       
                                    }  

                                    if (this.resultado.idfil != null){
                                        this.movimento.idfil = this.resultado.idfil ;     
                                    
                                    }else{
                                        this.movimento.idfil = "" ;                       
                                    }  

                                    if (this.resultado.entradaSaida != null){
                                        this.movimento.entradaSaida = this.resultado.entradaSaida ;     
                                    
                                    }else{
                                        this.movimento.entradaSaida = "" ;                       
                                    }                         

                                    if (this.resultado.loteFiacao != null){
                                        this.movimento.loteFiacao = this.resultado.loteFiacao ;     
                                    
                                    }else{
                                        this.movimento.loteFiacao = "" ;                       
                                    }    
            
                                    if (this.resultado.pesoMedio != null){
                                        //this.movimento.pesoMedio = this.resultado.pesoMedio ;  
                                        
                                        vPesMed = this.apiFormataNumero(this.resultado.pesoMedio,4)
                                        this.movimento.pesoMedio = vPesMed ;


                                    
                                    }else{
                                        this.movimento.pesoMedio = 0 ;                       
                                    }   
                
                                    if (this.resultado.pesoTotal != null){




                                        //vPesoTotal = this.resultado.pesoTotal ;
                                        //vPesoTotal = vPesoTotal.toString().replaceAll(".", ",") 
                                        //this.movimento.pesoTotal = vPesoTotal ;   
                                        

                                        vPesoTotal = this.apiFormataNumero(this.resultado.pesoTotal,2)
                                        this.movimento.pesoTotal = vPesoTotal ;
                                    
                                    }else{
                                        this.movimento.pesoTotal = 0 ;                       
                                    }   
                
                                    if (this.resultado.numVolumes != null){
                                        this.movimento.numVolumes = this.resultado.numVolumes ;     
                                    
                                    }else{
                                        this.movimento.numVolumes = 0 ;                       
                                    } 
                                    if (this.resultado.linhaAbertura != null){
                                        this.movimento.linhaAbertura = this.resultado.linhaAbertura ;     
                                    
                                    }else{
                                        this.movimento.linhaAbertura = "" ;                       
                                    }       
                                    
                                    if (this.resultado.idAutomatico != null){
                                        this.movimento.idAutomatico = this.resultado.idAutomatico ;     
                                    
                                    }else{
                                        this.movimento.idAutomatico = 0 ;                       
                                    }    
            
                                    if (this.resultado.movimentoAutomatico != null){
                                        this.movimento.movimentoAutomatico = this.resultado.movimentoAutomatico ;     
                                    
                                    }else{
                                        this.movimento.movimentoAutomatico = "" ;                       
                                    }  

                                    if (this.resultado.movimentoPilha != null){
                                        this.movimento.movimentoPilha = this.resultado.movimentoPilha ;     
                                    
                                    }else{
                                        this.movimento.movimentoPilha = "" ;                       
                                    }              
                                    
                                    if (this.resultado.mistura != null){
                                        this.movimento.mistura = this.resultado.mistura ;     
                                    
                                    }else{
                                        this.movimento.mistura = "" ;                       
                                    }                              
                                    
                                    if (this.resultado.sequenciaMistura != null){
                                        this.movimento.sequenciaMistura = this.resultado.sequenciaMistura ;     
                                    
                                    }else{
                                        this.movimento.sequenciaMistura = "" ;                       
                                    }   

                                    if (this.resultado.usuarioAlteracao != null){
                                        this.movimento.usuarioAlteracao = this.resultado.usuarioAlteracao ;     
                                    
                                    }else{
                                        this.movimento.usuarioAlteracao = "" ;                       
                                    }      

                                    if (this.resultado.dataAlteracao != null){
                                        this.movimento.dataAlteracao = this.resultado.dataAlteracao ;     
                                    
                                    }else{
                                        this.movimento.dataAlteracao = "" ;                       
                                    }   
                                    
                                    
                                    if (this.resultado.usuarioInclusao != null){
                                        this.movimento.usuarioInclusao = this.resultado.usuarioInclusao ;     
                                    
                                    }else{
                                        this.movimento.usuarioInclusao = "" ;                       
                                    }      

                                    if (this.resultado.dataInclusao != null){
                                        this.movimento.dataInclusao = this.resultado.dataInclusao ;     
                                    
                                    }else{
                                        this.movimento.dataInclusao = "" ;                       
                                    }    


                                    if (this.resultado.tipoMovimento != null){
                                        this.movimento.tipoMovimento = this.resultado.tipoMovimento ;     
                                    }else{
                                        this.movimento.tipoMovimento = "" ;                       
                                    }   

                                    if (this.resultado.tipoMP != null){
                                        this.movimento.tipoMP = this.resultado.tipoMP ;     
                                        this.buscaTipoMatP();
                                    }else{
                                        this.movimento.tipoMP = "" ;                       
                                    }  

                                    if (this.resultado.dataBase != null){
                                        dataFormatada = this.resultado.dataBase.split('/').reverse().join('-');
                                        this.movimento.dataBase = dataFormatada ;     
                                    
                                    }else{
                                        this.movimento.dataBase = "" ;                       
                                    }    
                                    
                                    if (this.resultado.dataEmissao!= null){
                                        dataFormatada = this.resultado.dataEmissao.split('/').reverse().join('-');
                                        this.movimento.dataEmissao = dataFormatada ;     
                                    
                                    }else{
                                        this.movimento.dataEmissao = "" ;                       
                                    }     
                                    
                                    if (this.resultado.fkProdutor!= null){
                                        this.movimento.produtor = this.resultado.fkProdutor.codigo ;     
                                    
                                    }else{
                                        this.movimento.produtor = "" ;                       
                                    }                          

                                    if (this.resultado.fkProcedencia!= null){
                                        this.movimento.procedencia = this.resultado.fkProcedencia.codigo ;     
                                    
                                    }else{
                                        this.movimento.procedencia = "" ;                       
                                    }    

                                    if (this.resultado.qual1!= null){
                                        this.movimento.qual1 = this.resultado.qual1 ;     
                                    
                                    }else{
                                        this.movimento.qual1 = "" ;                       
                                    }                                      

                                    if (this.resultado.qual2!= null){
                                        this.movimento.qual2 = this.resultado.qual2 ;     
                                    
                                    }else{
                                        this.movimento.qual2 = "" ;                       
                                    }  

                                    if (this.resultado.fkTipoMovimento!= null){
                                        this.vOperAlteraEstoque = this.resultado.fkTipoMovimento.atualizaEstoque ;     
                                    
                                    }else{
                                        this.vOperAlteraEstoque = "" ;                       
                                    }                 
                                    
                                    
                                    if (this.resultado.fkTipoMovimento!= null){
                                        this.vOperAlteraItem = this.resultado.fkTipoMovimento.atualizaItem ;     
                                    
                                    }else{
                                        this.vOperAlteraItem = "" ;                       
                                    }           
                   
                                     

                                   //console.log('this.vOperAlteraEstoque')
                                   //console.log(this.vOperAlteraEstoque)

                                   //console.log('this.vOperAlteraItem')
                                   //console.log(this.vOperAlteraItem)


                                   
                                   //console.log('this.resultado.itemMovimento');
                                   //console.log(this.resultado.itemMovimento);

                                   let aItens =  this.resultado.itemMovimento;

                                    // Ordena o array de objetos JSON pelo campo 'idItem'
                                    aItens.sort((a, b) => {
                                        return a.idItem - b.idItem;
                                    }); 

                                   //console.log('aItens');
                                   //console.log(aItens);

                                   // for (let i = 0; i < this.resultado.itemMovimento.length; i++) { 
                                    for (let i = 0; i < aItens.length; i++) { 
                                        
                                            this.numItem = this.numItem+1; 

                                            if( 
                                                this.resultado.itemMovimento[i].mat == 0.0 ||
                                                this.resultado.itemMovimento[i].sic == 0.0 ||
                                                this.resultado.itemMovimento[i].mic == 0.0 ||
                                                this.resultado.itemMovimento[i].uhml == 0.0 
                                             ){
                                               loteTestado = "N"
                                            }else{
                                                loteTestado = "S"
                                            }

                                            vPesoTotal = this.apiFormataNumero(this.resultado.itemMovimento[i].peso,2)
                                            vPesMed = this.apiFormataNumero(this.resultado.itemMovimento[i].pesoMedio,4)

                                            objItem = { 

                                                    idItem   :   this.resultado.itemMovimento[i].idItem, 
                                                    idfil:   this.resultado.itemMovimento[i].filial, 
                                                    notaFiscal:   this.resultado.itemMovimento[i].notaFiscal, 
                                                    fornecedor:   this.resultado.itemMovimento[i].fornecedor, 
                                                    item: parseInt(this.resultado.itemMovimento[i].item), 
                                                    produtor: this.resultado.itemMovimento[i].produtor, 
                                                    procedencia: this.resultado.itemMovimento[i].procedencia, 
                                                    lote: this.resultado.itemMovimento[i].lote,    
                                                    qualidade: this.resultado.itemMovimento[i].qualidade, 
                                                    tamanho: this.resultado.itemMovimento[i].tamanho ,

                                                    descFio: this.resultado.itemMovimento[i].descFio, 

                                                    pesoCalculadoInformado: this.resultado.itemMovimento[i].pesoCalculadoInformado, 
                                                    observacao: this.resultado.itemMovimento[i].observacao, 
                                                    unidadeMedida: this.resultado.itemMovimento[i].unidadeMedida, 
                                                    pilha: this.resultado.itemMovimento[i].pilha, 
                                                    movimentoAutomatico: this.resultado.itemMovimento[i].movimentoAutomatico, 
                                                    movimentoDePilha: this.resultado.itemMovimento[i].movimentoDePilha, 
                                                    quantidade: this.resultado.itemMovimento[i].quantidade, 
                                                    peso: vPesoTotal, 
                                                    idCab: this.resultado.itemMovimento[i].idCab, 
                                                    vlUnitario: this.resultado.itemMovimento[i].vlUnitario,  
                                                    idMovimento:  this.resultado.itemMovimento[i].idMovimento, 
                                                    
                                                    
                                                    sac:  this.resultado.itemMovimento[i].sac, 
                                                    trid:  this.resultado.itemMovimento[i].trid, 
                                                    pim:  this.resultado.itemMovimento[i].pim, 
                                                    sc:  this.resultado.itemMovimento[i].sc, 
                                                    mst:  this.resultado.itemMovimento[i].mst, 
                                                    mic:  this.resultado.itemMovimento[i].mic, 
                                                    mat:  this.resultado.itemMovimento[i].mat, 
                                                    ui:  this.resultado.itemMovimento[i].ui, 
                                                    sf:  this.resultado.itemMovimento[i].sf, 
                                                    str:  this.resultado.itemMovimento[i].str, 
                                                    elg:  this.resultado.itemMovimento[i].elg, 
                                                    tipo:  this.resultado.itemMovimento[i].tipo, 
                                                    sic:  this.resultado.itemMovimento[i].sic, 

                                                    idAutomatico:  this.resultado.itemMovimento[i].idAutomatico, 
                                                    uhml:  this.resultado.itemMovimento[i].uhml, 
                                                    rs:  this.resultado.itemMovimento[i].rs, 
                                                    b:  this.resultado.itemMovimento[i].b, 
                                                    trcnt:  this.resultado.itemMovimento[i].trcnt, 
                                                    trar:  this.resultado.itemMovimento[i].trar, 
                                                    pesoMedio:  vPesMed,  

                                                    ind: String(this.numItem).padStart(3, '0')    ,
                                                    habilitado: true,
                                                    alteracao:true,
                                                    statusItem: 'Alteração',
                                                    statusItemOriginal: 'Alteração',
                                                    loteJaTestado: loteTestado ,

                                                    tipoQualidade:  this.resultado.itemMovimento[i].tipoQualidade, 
                                                    classifQualidade:  this.resultado.itemMovimento[i].classifQualidade,  
                                                    coloracao:  this.resultado.itemMovimento[i].coloracao,  
                                                    loteAdicional:  this.resultado.itemMovimento[i].loteAdicional, 
                                                    idVolume:  this.resultado.itemMovimento[i].idVolume, 
                                                    tipoMic:  this.resultado.itemMovimento[i].tipoMic, 	 
                                                    destino:  this.resultado.itemMovimento[i].destino,  
                                                    usuarioInclusao: this.resultado.itemMovimento[i].usuarioInclusao,  
                                                    dataInclusao:  this.resultado.itemMovimento[i].dataInclusao   
                                                    

                                            }  
                                            
                                            //console.log('Item XXXX')
                                            //console.log(objItem)
                                             

                                            this.aMovimentoItem.push(objItem);
                                    }

                        }
                        this.msgProcessamento = "" 

                        //console.log('this.aMovimentoItem 333333')
                        //console.log(this.aMovimentoItem)                        

                         
                     
 

                        //console.log('this.resultado popula');
                        //console.log(this.resultado);
                        //console.log(this.tipoOperacao);

                         
                        if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                            this.tipoOperacao = 'A';    
                        }

                        if(this.resultado==''){
                            //this.mensagemErro =  'Registro não existe. Cadastre-o.'; 
                            //this.haErros = true  
                            this.configuraCampos('I' )  ;
                        }else{

                            this.configuraCampos('A' )  ;
                            this.apiPesquisaParam('fornecedor', this.movimento.fornecedor, this.movimento) 

                        }
                        
                        ////// this.apiPesquisaParam('usuarioseg', this.codUsuario, this.usuario) 
                        this.calculaDadosDocumento();
                        retornoPopForm = true;

                    })
                    .catch(error => {  
                            this.msgProcessamento = "";

                            //console.log("PopulaForm 444444");

                            console.log("Erro: ", error);
                            //this.mensagemErro = error; 
                            //this.haErros = true ;
                            this.apiDisplayMensagem(error ) 
                            retornoPopForm = false;
                    }  
                    ); 

                   

                    return retornoPopForm;

                },

            async buscaByChave(){ 

                let validado;

                validado = true;

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = ''        

                if (this.movimento.fornecedor!='' && this.movimento.fornecedor!=null)  { 
                    
                    if (this.movimento.fornecedor.length != 5){
                        this.apiDisplayMensagem('Fornecedor deve ter 5 dígitos.')
                        validado = false;
                    }else{ 
                        this.apiPesquisaParam('fornecedor', this.movimento.fornecedor, this.movimento)
                    }   

                }else{
                    
                    validado = false;
                }


              
                   

                if ((this.movimento.notaFiscal!=null && this.movimento.notaFiscal!='')){


                    if (this.movimento.notaFiscal.length < 6){
                        this.apiDisplayMensagem('Documento deve ter mais de 6 dígitos.') 
                        validado = false;
                    }


                }else{ 
                    
                    validado = false;
                }

                if (validado){  
                        const resposta = await this.populaForm();     

                        if (!(resposta === true) ){
                            console.log('Erro de cadastro BuscaChave' );      
                        }  

               
                }


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
                        //this.exclusao();
                    }else if(this.acao == 'cancelaEdicao')
                    {
                        this.resetarForm();
                    }
                    else if(this.acao == 'pesquisar')
                    {
                        this.$router.push( { name: 'movimentacaoestoquepesquisa' } )
                        //console.log('pesquisa');
                    }
                    
                }

            },             
/*
            async exclusao() { 
                
                /// EXCLUSAO ////

                let url = `${process.env.VUE_APP_BASE_URL}/usuariologin/usuario/${this.codUsuario}/sistema/${this.codSistema}` 
                
                
                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  
  
                        this.axios.delete(url,this.apiTokenHeader() )
                        .then(response => {
                            this.resetarForm();
                            this.apiDisplayMensagemSucesso('Código ' + response.data  + ' excluido com sucesso.'  )
                        })
                        .catch(error => {
                            console.log("Erro: ", error.response.data.message);
                            //this.haErros = true
                            //this.mensagemErro = error.response.data.message
                            this.apiDisplayMensagem(error.response.data.message ) 
                        }); 

                    }


            },            


*/

            navegarParaLogin(){this.$router.push({name:'login'  })},  


            scrollToTop() {
              window.scrollTo(0, 0);
            },                  

        } , 
    
        async created(){   

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

                this.movimento.fornecedor = this.fornecedorProps;
                this.movimento.notaFiscal = this.notaFiscalProps;

                const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
            } else{
                  this.movimento.pesoTotal = '0';
            } 

        },
        mounted(){  
                //this.codSistema = Number(this.sistemaProps) 
                this.populaTipoMovimento(); 
                this.populaTipoMP();
                this.populaProdutor();
                this.populaProcedencia();
                this.populaColoracao();

                this.pPesoDocumento =0.00; 
                this.pNumVolumes =0;
                this.pPesoMedio =0.0000;

                this.scrollToTop();


        } ,
       
        
    watch: {
       
        codUsuario(newValue) {

               if(newValue!="" && newValue!=null ){
        ///        this.buscaByChave() ; 
               }
               


          }
        }


   }

   </script>

  