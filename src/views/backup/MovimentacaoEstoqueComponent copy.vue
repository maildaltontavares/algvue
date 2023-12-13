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
                                        label="Tipo Movimento"
                                        :items="tipoMovimentoItens" 
                                        :disabled="tipoMovimentoDesabilitado"                                           
                                        v-model="this.movimento.tipoMovimento"   
                                        item-title="codigo" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 160px; font-size:16px;" 
                                        bg-color="white"      
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
                                        style="width: 160px;font-size:16px " 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        
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
                                                    data-bs-target="#modalPesquisaUsuario" tabindex="-1"  @click="apiFlushPesquisa" :disabled="codigoDesabilitado" 
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
                                                    :rules="[campoRequerido]"                                                     
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

                                <div    class="espacoEntreComponentes">   

                                    <v-autocomplete
                                        label="Produtor"
                                        :items="produtorItens" 
                                        :disabled="produtorDesabilitado"    
                                        v-model="this.movimento.produtor"   
                                        item-title="descricao" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style="width: 270px; " 
                                        bg-color="white"     
                                        :rules="[campoRequerido]"  
                                        density="compact"
                                        
                                    ></v-autocomplete> 

                                </div> 
                                
                                <div    class="espacoEntreComponentes">   

                                    <v-autocomplete
                                        label="Procedencia"
                                        :items="procedenciaItens" 
                                        :disabled="procedenciaDesabilitado"                                           
                                        v-model="this.movimento.procedencia"   
                                        item-title="procedencia" 
                                        item-value="procedencia"
                                        variant="outlined"
                                        style="width: 150px; " 
                                        bg-color="white"     
                                        :rules="[campoRequerido]" 
                                        density="compact" 
                                        
                                    ></v-autocomplete> 

                                </div>                                  


                                <div   class="espacoEntreComponentes">   
                                    
                                            
                                    <div >
                                        
                                        <v-text-field
                                            v-model.trim="this.movimento.pesoTotal" 
                                            id="pesoTotal"
                                            label="Peso Liquido" 
                                            ref="pesoTotal"   
                                            style=" width: 150px; " 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="pesoTotalDesabilitado"                                                                                          
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>     

     
                                <div   class="espacoEntreComponentes">    
                                            
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
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div> 


                                <div   class="espacoEntreComponentes">    
                                            
                                    <div >
                                        
                                        <v-text-field
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
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>                                    
                                    </div>
                           
                                </div>  

                    </div>    <!--  FIM LINHA 0002 -->    

                     <div class="d-flex justify-content-end " style=" margin-left:1%; width:99%; margin-top: 25px;border-radius:15px 15px 15px 15px;">                                    
                        <div style="width:100%;background-color:#c0c0c1; height:50px  ">
                            <p  class="text-white text-center  mt-3  " style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Itens</b></p>                               
                        </div>        

                        <v-btn  
                         
                            style="height:50px;width:160px;background-color:rgb(240, 237, 232); " 
                            @click="novoItem"
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
                    <div style="height:700px;overflow: auto; background-color:white;  "> 
                    
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
                                            <div class="d-flex justify-content-end " style=" margin-left:5px; width:99%; margin-top: 10px;border-radius:15px 15px 15px 15px;">                                    

                                                <div style="width:100%;background-color:#003366;; height:20px  ">
                                                    <p  class="text-white text-center   " style=" margin-bottom:5px;margin-left:20%;width:55%; font-size: 15px; height:20pxborder-radius:15px 15px 15px 15px; "><b>Item: {{i.ind}}</b></p>                               
                                                </div>    

                                                <v-btn  
                            
                                                        style="height:20px; background-color:rgb(240, 237, 232); "  
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
                                                                    :disabled="itemDesabilitado"  
                                                                    type="number"
                                                                    inputmode="numeric"
                                                                    :rules="[campoRequerido]" 
                                                                    density="compact"
                                                                    
                                                                ></v-text-field>    
                                                                    
                                                                <v-btn   data-bs-toggle="modal" 
                                                                    data-bs-target="#modalPesquisaUsuario" tabindex="-1"  @click="apiFlushPesquisa" :disabled="codigoDesabilitado" 
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
                                                                    v-model="i.nomeItem" 
                                                                    id="nomeItem"   
                                                                    disabled 
                                                                    class="limitadorMedia"
                                                                    :rules="[campoRequerido]"  
                                                                    style="background-color:rgb(210, 210, 246); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                                ></v-text-field>   
                                                            </div>   



                                                    </div>

                                            </div>   
    
                                        </td>
                                    
                                        <td  >

                                            <div   class="espacoEntreComponentesGrid">     
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim="i.id" 
                                                        id="id"
                                                        label="id" 
                                                        ref="id"   
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="idDesabilitado"  
                                                        type="number"
                                                        inputmode="numeric"
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                              
                                        </td>
                                        
                                        <td  >
                                            <div   class="espacoEntreComponentesGrid">   
                                                        
                                                <div >
                                                    
                                                    <v-text-field
                                                        v-model.trim=   i.lote  
                                                        id="lote"
                                                        label="Lote" 
                                                        ref="lote"  
                                                        maxlength="10"                                         
                                                        style=" width: 150px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="loteItemDesabilitado"  
                                                        type="text"                                       
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div> 
                                        </td>            


                                        <td   >
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
                                                        bg-color="white"
                                                        :disabled="pilhaDesabilitado"  
                                                        type="number"
                                                        inputmode="numeric"
                                                        :rules="[campoRequerido]" 
                                                        density="compact"
                                                        
                                                    ></v-text-field>                                    
                                                </div>
                                    
                                            </div>                                     
                                        </td> 

                                        <td  >
                                            <div    class="espacoEntreComponentesGrid">  

                                                <v-autocomplete

                                                    label="Tam"
                                                    :items="tamanhoItens" 
                                                    :disabled="tamanhoDesabilitado"                                       
                                                    v-model="i.tamanho"   
                                                    item-title="nome" 
                                                    item-value="id"
                                                    variant="outlined"
                                                    style=" width: 150px; " 
                                                    bg-color="white"      
                                                    :rules="[campoRequerido]" 
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
                                                        :disabled="quantidadeDesabilitado"  
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
                                                        :disabled="pesoDesabilitado"  
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
                                                        :disabled="umDesabilitado"   
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
                                                        :disabled="vlUnitarioDesabilitado"  
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
                                                        v-model.trim="i.observacao" 
                                                        id="observacao"
                                                        label="Observação" 
                                                        ref="observacao"   
                                                        style=" width: 250px; " 
                                                        variant="outlined"
                                                        bg-color="white"
                                                        :disabled="observacaoDesabilitado"   
                                                        :rules="[campoRequerido]"  
                                                        density="compact"
                                                    ></v-text-field>    

                                                </div>
                                    
                                            </div>     
                                        </td> 
                                    
    
        
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

        <v-container>   <!--   RODAPE  -->

            <div class="d-flex justify-content-center" > 


                <MensagemMobile    v-if="this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'  "    class="rodape_mobile"
                style=" margin-bottom:60px"
                :mensagemSucessoProps="mensagemSucesso" 
                :mensagemErroProps="mensagemErro"
                :haErrosProps="haErros"
                :haSucessoProps= "haSucesso"
                />  

                <v-card rounded="lg" class=" elevation-12 rodape_crud2" 
                        style="position: fixed;background-color:rgb(173, 173, 187);"  :style="{marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
                                            width:  this.$store.state.configuracaoTela.tamanhoRodape,
                                            height:  this.$store.state.configuracaoTela.alturaRodape   }" > 
                        
                        
                        <div class=" d-flex justify-space-between " >  

                            <div class="col-9 "  >

                                <p v-if="msgProcessamento != ''" class=" mensagem mensagem_processando" style="font-size: 16px;">
                                    {{ msgProcessamento }}
                                </p>       

                                <p v-if="haErros && this.$store.state.tipoDispositivo == 'desktop'" class="mensagem mensagem_erro">
                                    {{ mensagemErro }}
                                </p>
                                <p v-if="haSucesso && this.$store.state.tipoDispositivo == 'desktop'"  class="mensagem mensagem_sucesso">
                                    {{ mensagemSucesso }}
                                </p>
                            </div> 

                            <div class="col-3 div_rodape d-flex justify-content-end"   >
                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px; " accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</v-btn> 

                                <v-btn color="primary" class="botao_rodape" style=" min-width: 70px;"  v-if="tipoOperacao == 'E' || tipoOperacao  == 'A'  "  accesskey="e"  @click="exibeModal('excluir','Confirma exclusão ?',['S','N'],'aviso'  )"><u>E</u>xcluir
                                </v-btn>              

                                <v-btn color="primary" class="botao_rodape" style="min-width: 70px;"  v-if="(tipoOperacao  == 'I' || tipoOperacao  == 'A'  )" type="submit"  accesskey="s"><u>S</u>alvar</v-btn>
                                <v-btn color="secondary" class="botao_rodape" style="min-width: 100px;margin-right: 5px;"  accesskey="p" @click="exibeModal('pesquisar','Deseja sair deste formulário?',['S','N'] ,'sucesso' )"><u>P</u>esquisar</v-btn>

                            </div> 

                        </div>

                    </v-card>   
            </div>
         </v-container>  



    </v-form>    

     
    
  <PesquisaUsuario @setaPesquisa="setaPesquisa($event)"></PesquisaUsuario>
  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>    
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core' 
   import PesquisaUsuario from '@/requires/PesquisaUsuario'
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
        components: { PesquisaUsuario, SimNao,MensagemMobile},
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
 
        data: () => ({ 
 
            
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


            nomeFornecedor:'',            
            items: [],
            numItem:0,

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
            loteDesabilitado:false,  
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
                itemMovimentoDTO:[]
            } ,


            movimentoItem: {
                    id:  0,
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
                    pesoMedio: 0

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
                itemMovimentoDTO:[]
            } ,



            movimentoItemInicial: {
                    id:  0,
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
                    pesoMedio: 0

            },  
 
            movimentoDAO: [],
            movimentoItemDAO: [],

            aMovimentoItem :[ 

            ],    
            movimentoItemTempAux:{},
           
        }              

        ),
        computed: {...mapState(['usuarioSistema']) } ,      

        props: {
            sistemaProps : {
            type: Number,
            required: true,
            },
            usuarioProps : {
            type: String,
            required: true,
            },            
            operacao: {
            type : String,
            required: true,
            },
        },  
        methods:{    


            novoItem(){ 

                let i;

                for (i = 0; i < 3; i++) {

                    this.numItem = this.numItem+1; 
                    this.movimentoItemTempAux = Object.assign({},this.movimentoItemInicial);  
                    this.movimentoItemTempAux.ind =  String(this.numItem).padStart(3, '0')  ;  
                    this.aMovimentoItem.push(this.movimentoItemTempAux); 

                }


            },


/*
            setaPesquisa(e) {  
             
                
                this.codUsuario =  e.obj.idUsuario;
                this.nomeUsuario=  e.obj.nome; 

            },  
            async submitForm() {   

                    console.log("submitForm");

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 

                    ///const isFormCorrect = await this.$refs.form.$validate();    
                    //const isFormCorrect = await this.v$.$validate()


                    this.validacao = await this.$refs.formulario.validate();
                    console.log("submitForm 11");
                    console.log(this.validacao);
                    console.log("submitForm 333");
                    //console.log(isFormCorrect);
                    console.log("submitForm 33344");


                    

                    if (!this.validacao.valid) {
                        this.apiDisplayMensagem('Preencha os campos com críticas.');
                        this.haErros = true;
                        return;
                    } else { 
                        let url = `${process.env.VUE_APP_BASE_URL}/usuariologin` 

                        if (this.tipoOperacao=="I") {   

                            this.usuarioDAO =
                                {
                                    "id":null,                            
                                    "idUsuario": this.codUsuario,
                                    "idSistema": this.codSistema,
                                    "login":         this.usuario.login, 
                                    "senha":         this.usuario.senha   

                                }  

                                //console.log("submitForm");
                                //console.log(url);
                                //console.log(this.usuarioDAO);




                                await this.axios.post(
                                    url,
                                    JSON.stringify(this.usuarioDAO),
                                    this.apiTokenHeader({ "Content-Type": "application/json" })
                                )
                                .then(response => {
                                     

                                    this.apiDisplayMensagemSucesso('Usuário inserido com sucesso.' ) 
                                    this.usuario.id = JSON.stringify(response.data);  
                                    this.usuarioDAO.id = this.usuario.id;
                                    this.tipoOperacao = 'A'; 
                                    this.configuraCampos('A' )  ;
                                
                                })
                                .catch(error => {
                                    console.log("Erro: ", error.response.data.message);
                                    //this.haErros = true
                                    //this.mensagemErro = error.response.data.message
                                    this.apiDisplayMensagem(error.response.data.message ) 
                                }); 

                        

                        } else {

                                    if (this.tipoOperacao == 'A'   ) { 
                                       
                                        this.usuarioDAO =
                                            {
                                                "id":        this.usuario.id,                            
                                                "idUsuario": this.codUsuario ,
                                                "idSistema": this.codSistema,
                                                "login":     this.usuario.login, 
                                                "senha":     this.usuario.senha   

                                            } 

                                            console.log('AlteraCAO')
                                            console.log(this.usuarioDAO )


                                            console.log("submitForm");
                                            console.log(url);
                                            console.log(this.usuarioDAO);                                            


                                           
                                            await this.axios.put(
                                                url,
                                                JSON.stringify(this.usuarioDAO),
                                                this.apiTokenHeader({ "Content-Type": "application/json" })
                                            )
                                            .then(response => {  
                                                console.log(response.data); 
                                                this.apiDisplayMensagemSucesso('Usuário alterado com sucesso.' ) 

                                            
                                            })
                                            .catch(error => { 
                                                console.log("Erro: ", error.response.data.message);
                                                //this.haErros = true
                                                //this.mensagemErro = error.response.data.message
                                                this.apiDisplayMensagem(error.response.data.message ) 
                                            });
                                    }  

                                }

                    }  

           },
*/

           resetarForm(){

                //console.log('')  

                if(this.simNaoRetorno == 'S'){

                    this.movimento = Object.assign({},this.movimentoInicialInicial);  
                    this.v$.$reset(); 
                    this.numItem = 0;
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';  
                     
                    //this.configuraCampos('I' )  ;
                    this.aMovimentoItem= [];

                }  

                },
                configuraCampos(oper ){
 
                    if(oper=='I'){

                        this.sistemaDesabilitado=false;
                        this.codigoDesabilitado=false;
                         

                    }else if(oper=='A' || oper=='E'){
                        this.sistemaDesabilitado=true;
                        this.codigoDesabilitado=true;
                    }    
                 
            },

            
            async populaForm(){   

                    this.resultado = ""; 
                    let retornoPopForm=false;  
                    let objItem;   
                    let dataFormatada;
                    let parametroCodificado;
                    

                    parametroCodificado = encodeURIComponent(this.movimento.notaFiscal);

                    console.log('parametroCodificado');
                    console.log(parametroCodificado);



                    let url = `${process.env.VUE_APP_BASE_URL}/movimento/buscadoc/${this.$store.state.usuarioSistema.idfil}/${this.movimento.fornecedor}/${parametroCodificado}`;
 
                    //console.log('url') 
                    //console.log(url)  

                   this.msgProcessamento = "Processando" 
                   this.apiProcessamento()  

                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                        console.log("PopulaForm");
                        this.resultado = response.data;     


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
                            this.movimento.produtor = this.resultado.fkProdutor.descricao ;     
                        
                        }else{
                            this.movimento.produtor = "" ;                       
                        }                          

                        if (this.resultado.fkProcedencia!= null){
                            this.movimento.procedencia = this.resultado.fkProcedencia.descricao ;     
                        
                        }else{
                            this.movimento.procedencia = "" ;                       
                        }    

                        console.log('this.resultado.itemMovimento 2222')
                        console.log(this.resultado.itemMovimento)

                        

                        for (let i = 0; i < this.resultado.itemMovimento.length; i++) { 
                            
                               this.numItem = this.numItem+1; 
  

                                objItem = { 

                                        id   :   this.resultado.itemMovimento[i].id, 
                                        idfil:   this.resultado.itemMovimento[i].filial, 
                                        notaFiscal:   this.resultado.itemMovimento[i].notaFiscal, 
                                        fornecedor:   this.resultado.itemMovimento[i].fornecedor, 
                                        item: parseInt(this.resultado.itemMovimento[i].item), 
                                        produtor: this.resultado.itemMovimento[i].produtor, 
                                        procedencia: this.resultado.itemMovimento[i].procedencia, 
                                        lote: this.resultado.itemMovimento[i].lote,    
                                        qualidade: this.resultado.itemMovimento[i].qualidade, 
                                        tamanho: this.resultado.itemMovimento[i].tamanho ,

                                        nomeItem: this.resultado.itemMovimento[i].descFio, 

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
                                        ind: String(this.numItem).padStart(3, '0')    

                                } 

                                this.aMovimentoItem.push(objItem);
                        }


                        this.msgProcessamento = "" 

                        //console.log('this.aMovimentoItem 333333')
                        //console.log(this.aMovimentoItem)                        

                         
                     
 

                        //console.log('this.resultado popula');
                        //console.log(this.resultado);
                        //console.log(this.tipoOperacao);

                        /*
                        if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                            this.tipoOperacao = 'A';   
                        }

                        if(this.resultado==''){
                            //this.mensagemErro =  'Registro não existe. Cadastre-o.'; 
                            //this.haErros = true  
                            this.configuraCampos('I' )  ;
                        }else{

                            this.configuraCampos('A' )  ;

                        }
                        */
                        ////// this.apiPesquisaParam('usuarioseg', this.codUsuario, this.usuario) 
                        retornoPopForm = true;

                    })
                    .catch(error => {  
                        
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

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = ''                

                if ((this.movimento.fornecedor!='' && this.movimento.fornecedor!=null)  
                && (this.movimento.notaFiscal!=null && this.movimento.notaFiscal!='') 
                 ){  
                         const resposta = await this.populaForm();     

                        if (!(resposta === true) ){
                            console.log('Erro de cadastro BuscaChave' );      
                        }  

                } else{  
                        this.apiDisplayMensagem("Informe o fornecedor e o num. do documento."   )  
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
                        this.$router.push( { name: 'movimentacaoestoquepesquisa',params : {sistemaProps : '04'}} )
                        console.log('pesquisa');
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
        } , 
    
        async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }  
            
           this.populaTipoMovimento(); 
           this.populaTipoMP();
           this.populaProdutor();

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){ 
                this.tipoOperacao = 'E'  
            }  

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){         
                //this.codUsuario = this.usuarioProps;
               // this.codSistema = this.sistemaProps;

                const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
            }  

        },
        mounted(){  
                //this.codSistema = Number(this.sistemaProps) 
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

  