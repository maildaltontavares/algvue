<!--

    TipoOperacao = 'X', significa que o documento acabou de ser gravado após uma inserção. Não permite neste momento que sejam inseridos novos itens. E só válido para operações que atualizam estoque.


-->


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
                    <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                    
                        <div>                         
                            <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Movimentação de Estoque</b></p>                               
                        </div>

                    </div>     

                    <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%; ">  
                            
                                <div    class="espacoEntreComponentes">  
                                 
                                    <v-autocomplete
                                        class="text-input" 
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
                                        class="text-input"
                                        label="Tipo MP"
                                        :items="tipoMPItens" 
                                        :disabled="tipoMPDesabilitado"                                           
                                        v-model="this.movimento.tipoMP"   
                                        item-title="codigo" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 160px; " 
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
                                                    class="text-input"
                                                    v-model.trim="this.movimento.fornecedor" 
                                                    label="Fornecedor"
                                                    id="fornecedor"                                                  
                                                    ref="fornecedor"  
                                                    maxlength="5" 
                                                    @blur="buscaByChave"
                                                    style=" width: 150px; " 
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
                                                    class="text-input"
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
                                            class="text-input"
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
                                            class="text-input"
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

                                <div    class="espacoEntreComponentes" v-if="this.tipoMatP == 'ALGOD'">   

                                    <v-autocomplete
                                        class="text-input"
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
                                
                                <div    class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'">   

                                    <v-autocomplete
                                        class="text-input"
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


                                <div   class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'">   
                                    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            class="text-input"
                                            v-model.trim="this.movimento.pesoTotal" 
                                            id="pesoTotal"
                                            label="Peso Liquido" 
                                            ref="pesoTotal"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="pesoTotalDesabilitado"                                                                                          
                                            
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>     

     
                                <div   class="espacoEntreComponentes"  v-if="this.tipoMatP == 'ALGOD'">    
                                            
                                    <div >
                                        
                                        <v-text-field
                                           class="text-input"
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
                                          
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div> 


                                <div   class="espacoEntreComponentes"   v-if="this.tipoMatP == 'ALGOD'">    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            class="text-input"
                                            v-model.trim="this.movimento.pesoMedio" 
                                            id="pesoMedio"
                                            label="Peso Médio" 
                                            ref="pesoMedio"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="pesoMedioDesabilitado"  
                                            type="number"
                                            inputmode="numeric"
                                             
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
                                                 
                                                    <p  class="text-center   " style="color:rgb(44, 42, 42); margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20pxborder-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}}</b></p>                               
                                                </div>    

                                                <div style="width:100%; ; height:20px  " class="vermelho"  v-if="i.statusItem == 'Exclusão' && i.statusItemOriginal == 'Exclusão'">
                                                    <p  class="text-white text-center   " style=" margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20pxborder-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}} - Excluído</b></p>                               
                                                </div>   
                                                
                                                <div style="width:100%; height:20px; background-color:rgb(233, 229, 12);   "   v-if="i.statusItem == 'Exclusão' && i.statusItemOriginal != 'Exclusão'">
                                                    <p  class=" text-center   " style="color:black; margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20pxborder-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}} - Excluir</b></p>                               
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
                                                                    label="item"
                                                                    ref="item"  
                                                                    maxlength="7"  
                                                                    style=" width: 150px; "
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
                                                                            style=" width: 150px; "
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
                                                                            style=" width: 150px; "
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
                                                                            style=" width: 150px; "
                                                                            variant="outlined"
                                                                            bg-color="white" 
                                                                            type="number"
                                                                            inputmode="numeric" 
                                                                            density="compact" 
                                                                            @blur="apiPesquisaParam('loteItem', i.idMovimento , i)"
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
                                                        :disabled="loteItemDesabilitado  && i.statusItemOriginal == 'Alteração'  || i.statusItemOriginal == 'Exclusão'"  
                                                        type="text"                                       
                                                        :rules="[campoRequerido]" 
                                                        density="compact"                                                        
                                                    ></v-text-field>        
                                                    
                                                </div>
                                                
                                            </div> 
                                        </td>            


                                        <td     v-if="this.tipoMatP == 'ALGOD'">
                                            <div   class="espacoEntreComponentesGrid">   
                                                
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                         
                                                        v-model.trim="i.pilha" 
                                                        id="pilha"
                                                        label="Pilha" 
                                                        ref="pilha"  
                                                        maxlength="6"                                         
                                                        style=" width: 150px; "
                                                        variant="outlined"
                                                        :disabled="pilhaDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') " 
                                                        type="number"
                                                        inputmode="numeric"
                                                        
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                                     
                                        </td> 

                                        <td    v-if="this.tipoMatP == 'ALGOD'">
                                            <div    class="espacoEntreComponentesGrid">  

                                                <v-autocomplete

                                                    label="Tam"
                                                    :items="tamanhoItens"                                                        
                                                    :disabled="tamanhoDesabilitado   && (i.statusItemOriginal == 'Alteração' || i.statusItemOriginal == 'Exclusão') "                                
                                                    v-model="i.tamanho"   
                                                    item-title="nome" 
                                                    item-value="id"
                                                    variant="outlined"
                                                    style=" width: 150px; "
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
                                                        
                                                    ></v-text-field>                                    
                                                </div>

                                            </div>  
                                        </td>

                                        
                                        <td class="d-flex  justify-content-start">
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
                                                        type="number"
                                                        inputmode="numeric"
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>

                                            </div>    
                                        </td> 
                                
                                        
                                        
                                        <td>
                                            <div   class="espacoEntreComponentesGrid">   
                                        
                                                
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.unidadeMedida" 
                                                        id="um"
                                                        label="UM" 
                                                        ref="um"   
                                                        style=" width: 150px; "
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="umDesabilitado && i.habilitado"    
                                                        :rules="[campoRequerido]"    
                                                        density="compact"                                     
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div> 
                                        </td>

                                        

                                        <td>
    
                                            <div   class="espacoEntreComponentesGrid">    
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.vlUnitario" 
                                                        id="vlUnitario"
                                                        label="Vl. Unit." 
                                                        ref="vlUnitario"   
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="vlUnitarioDesabilitado && i.habilitado"  
                                                        type="number"
                                                        inputmode="numeric"
                                                       
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                             

                                        </td>
                                        <td>
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
                         

                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"  v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit"  accesskey="s"><u>S</u>alvar</v-btn>
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

            tamanhoItens:[
                'G',
                'P'

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
            }, 
             
            novoItem(){ 

                let i;

                for (i = 0; i < 1; i++) {

                    this.numItem = this.numItem+1; 
                    this.movimentoItemTempAux = Object.assign({},this.movimentoItemInicial);  
                    this.movimentoItemTempAux.ind =  String(this.numItem).padStart(3, '0')  ;  
                    if(this.vOperAlteraItem=='N'){
                        this.movimentoItemTempAux.habilitado = true;
                        this.configuraNovoItemAtlzItem();
                    }else{
                        this.movimentoItemTempAux.habilitado = false;
                    }
                    
                    this.movimentoItemTempAux.alteracao = false; 
                    this.movimentoItemTempAux.statusItem = 'Inclusão'
                    this.movimentoItemTempAux.statusItemOriginal = 'Inclusão'
                  

                   this.aMovimentoItem.push(this.movimentoItemTempAux); 
                   

                } 
 

            },


 
            setaPesquisa(e) {   

                if (e.tipo == "item") {
                    this.aMovimentoItem[this.indiceAtual].item = e.obj.codigo;
                    this.aMovimentoItem[this.indiceAtual].descFio = e.obj.material.descricao.substring(0, 40);
                } 

                if(e.tipo == "fornecedor") {

                    this.movimento.fornecedor = e.obj.codigo;
                    this.nomeFornecedor = e.obj.descricao;
                }      
                
                if(e.tipo == "Lote") {

                    this.aMovimentoItem[this.indiceAtual].idMovimento = e.obj.idMov;
                    this.aMovimentoItem[this.indiceAtual].lote  = e.obj.lote;
                    this.aMovimentoItem[this.indiceAtual].pilha  = e.obj.pilha;
                    this.aMovimentoItem[this.indiceAtual].tamanho  = e.obj.tamanho;
                    this.aMovimentoItem[this.indiceAtual].unidadeMedida  =      e.obj.unidadeMedida;
                  

                }                  

            },  
 

 
            async submitForm() {   
 
                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 
                    let objItem ; 
                   
                    this.aMovimentoItemFinal = []; 
                    this.aMovimentoItemDAO = [];  
 
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
                        let itensValidos=0;

                        let idMovto;
                        let vIdMovtoItem;
                        let vIdIt;     
                        let vIdMovim;                                      

                        let url = `${process.env.VUE_APP_BASE_URL}/movimento` ; 

                        if(this.tipoOperacao=="I"){
                                dataInsercao = dataFormatada;
                                this.movimento.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                                this.movimento.usuarioInclusao = this.$store.state.usuarioSistema.codigo;
                        }else{
                                    if (typeof this.movimento.dataInclusao   === "string") {
                                        dataInsercao  = this.movimento.dataInclusao ;
                                    } else if (this
                                    
                                    .movimento.dataInclusao  instanceof Date) {
                                        dataInsercao  = this.$moment(this.movimento.dataInclusao .format("DD/MM/YYYY")  )
                                    } 

                                    dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                         }   
                       
 
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
                                                                peso:                 this.aMovimentoItem[i].peso,  
                                                                vlUnitario:           this.aMovimentoItem[i].vlUnitario,  
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
                                                                pesoMedio:    this.aMovimentoItem[i].pesoMedio,
                                                                statusItem:   this.aMovimentoItem[i].statusItem,    
                                                                habilitado: true 
                                                            

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
                                                    "pesoMedio":  this.movimento.pesoMedio,
                                                    "pesoTotal":  this.movimento.pesoTotal,
                                                    "numVolumes": this.movimento.numVolumes,
                                                    "produtor":  this.movimento.produtor,
                                                    "procedencia":  this.movimento.procedencia, 
                                                    "movimentoAutomatico":  "N",
                                                    "movimentoPilha":  "N", 
                                                    "usuarioInclusao":  this.movimento.usuarioInclusao ,
                                                    "usuarioAlteracao":  this.movimento.usuarioInclusao,
                                                    "dataInclusao":  dataInsercao,
                                                    "dataAlteracao":  dataInsercao,
                                                    "itemMovimentoDTO":this.aMovimentoItemDAO    
                                            }   

                                            this.aMovimentoItemFinal.push(this.movimentoDAO);  
                                            
                                            console.log('InclusaO this.aMovimentoItemFinal')
                                            console.log(this.aMovimentoItemFinal)
                                             
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
                                                                    peso:                 this.aMovimentoItem[i].peso,  
                                                                    vlUnitario:           this.aMovimentoItem[i].vlUnitario,  
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
                                                                    pesoMedio:    this.aMovimentoItem[i].pesoMedio,
                                                                    statusItem:   this.aMovimentoItem[i].statusItem,    
                                                                    statusItemOriginal:   this.aMovimentoItem[i].statusItemOriginal, 
                                                                    habilitado: true
                                                                

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
                                                            "pesoMedio":  this.movimento.pesoMedio,
                                                            "pesoTotal":  this.movimento.pesoTotal,
                                                            "numVolumes": this.movimento.numVolumes,
                                                            "produtor":  this.movimento.produtor,
                                                            "procedencia":  this.movimento.procedencia, 
                                                            "movimentoAutomatico":  this.movimento.movimentoAutomatico,
                                                            "movimentoPilha": this.movimento.movimentoPilha,
                                                            "usuarioInclusao":  this.movimento.usuarioInclusao ,
                                                            "usuarioAlteracao":  this.$store.state.usuarioSistema.codigo,
                                                            "dataInclusao":  this.movimento.dataInclusao ,
                                                            "dataAlteracao":  dataAlteracao,
                                                            "itemMovimentoDTO":this.aMovimentoItemDAO    
                                                    } 

                                                    console.log('AlteraCAO')
                                                    console.log(this.movimentoDAO) 

                                                
                                                    this.aMovimentoItemFinal.push(this.movimentoDAO);  
 
                                                    
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
                     
                    this.configuraCampos('I' )  ;

                    this.aMovimentoItem= []; 
                    this.aMovimentoItemFinal = [];
                    this.aMovimentoItemDAO = [];       
                    this.vOperAlteraEstoque = '';
                    this.vOperAlteraItem = '';  


                    //console.log('RESETADO');
                    //console.log('this.aMovimentoItem')
                    //console.log(this.aMovimentoItem)
                    //console.log('this.aMovimentoItemFinal')
                    //console.log(this.aMovimentoItemFinal)
                    //console.log('this.aMovimentoItemDAO')
                    //console.log(this.aMovimentoItemDAO)

                }  

            },


            configuraNovoItemAtlzItem(){    

                this.loteItemDesabilitado = true; 
                this.pilhaDesabilitado = true; 
                this.tamanhoDesabilitado = true; 
                this.umDesabilitado = true;   
                             
            },

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
                    }    

                    ///////////// CONFIGURAÇÃO DOS ITENS //////////////
 
                    if(oper=='I'){


                        this.itemDesabilitado = false; 
                        this.loteItemDesabilitado = false;  
                        this.pilhaDesabilitado = false; 
                        this.tamanhoDesabilitado = false; 
                        //this.quantidadeDesabilitado = false; 
                        //this.pesoDesabilitado = false;   
                        //this.umDesabilitado = false;   
                        //this.vlUnitarioDesabilitado = false;  
                        //this.observacaoDesabilitado = false;                      
                         
                        if(this.vOperAlteraItem=='N'){  
                           
                            this.loteItemDesabilitado = true;
                            this.tamanhoDesabilitado = true; 
                        }else{                 
                            
                            this.loteItemDesabilitado = false;
                            this.tamanhoDesabilitado = false; 
                        } 
                         


                    }else if(oper=='A'){ 

                        if(this.vOperAlteraEstoque=='S'){                            
                            
                            if(this.vOperAlteraItem=='N'){ 


                            

                            }else {
                                this.itemDesabilitado = true;                                
                                this.loteItemDesabilitado = true;                             
                                this.pilhaDesabilitado = true; 
                                this.tamanhoDesabilitado = true; 
                                this.umDesabilitado = true;
                            }
                            this.itemDesabilitado = true;
                            ///this.idDesabilitado = true;
                            this.loteItemDesabilitado = true;                             
                            this.pilhaDesabilitado = true; 
                            this.tamanhoDesabilitado = true; 
                            //this.quantidadeDesabilitado = true; 
                            //this.pesoDesabilitado = true;   
                            //this.umDesabilitado = true;   
                            //this.vlUnitarioDesabilitado = true;  
                            //this.observacaoDesabilitado = true; 

                        }else{
                            
                            this.itemDesabilitado = true; 
                            this.loteItemDesabilitado = true; 
                            
                            this.pilhaDesabilitado = false; 
                            this.tamanhoDesabilitado = false; 
                            //this.quantidadeDesabilitado = false; 
                            //this.pesoDesabilitado = false;   
                            //this.umDesabilitado = false;   
                            //this.vlUnitarioDesabilitado = false;  
                            this.observacaoDesabilitado = false;  

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
                    //console.log(oper);
                    //console.log(this.idDesabilitado); 
                    //console.log(this.aMovimentoItem.Habilitado); 
                    //console.log(this.vOperAlteraItem);
                    //console.log(this.vOperAlteraEstoque);   


            }, 

            
            async populaForm(){   

                    this.resultado = ""; 
                    let retornoPopForm=false;  
                    let objItem;   
                    let dataFormatada;
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
                                        this.movimento.pesoMedio = this.resultado.pesoMedio ;     
                                    
                                    }else{
                                        this.movimento.pesoMedio = 0 ;                       
                                    }   
                
                                    if (this.resultado.pesoTotal != null){
                                        this.movimento.pesoTotal = this.resultado.pesoTotal ;     
                                    
                                    }else{
                                        this.movimento.pesoTotal = 0 ;                       
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
                                                    peso: this.resultado.itemMovimento[i].peso, 
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
                                                    pesoMedio:  this.resultado.itemMovimento[i].pesoMedio,  
                                                    ind: String(this.numItem).padStart(3, '0')    ,
                                                    habilitado: true,
                                                    alteracao:true,
                                                    statusItem: 'Alteração',
                                                    statusItemOriginal: 'Alteração'
                                                    

                                            }  
                                            
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
            }  

        },
        mounted(){  
                //this.codSistema = Number(this.sistemaProps) 
                this.populaTipoMovimento(); 
                this.populaTipoMP();
                this.populaProdutor();
                this.populaProcedencia();

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

  