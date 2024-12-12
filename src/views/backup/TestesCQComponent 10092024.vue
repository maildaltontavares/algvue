<template>

    <v-form  ref="formulario" @submit.stop.prevent="submitForm" style=" background-color:white;height:100% "  >     
        
        <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
            <div  style="width:100%"  >   
                    
                    

                    <div class="flex-linha-between"  style=" width:100%;background-color:white;margin-top: 1%;" >  
                    
                    
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Testes de CQ</b></p>                               
                            </div> 
                       </div>        
              

                   </div>         
                   
                   <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white;margin-top: 1%; " > 

                              

                                <v-autocomplete
                                    label="Produtor"
                                    :items="produtorItens"                              
                                    v-model="this.teste.produtor"   
                                    item-title="descricao" 
                                    item-value="codigo"
                                    variant="outlined"
                                    style=" width: 7%;min-width: 270px; "  
                                    class="espacoEntreComponentes" 
                                    bg-color="white"   
                                    density="compact"
                                    :rules="[campoRequerido]" 
                                    @blur="buscaByChave"
                                    :disabled="produtorDesabilitado"
                                ></v-autocomplete> 

                             


                       
                                        
                                <v-text-field
                                    v-model.trim="this.teste.lote" 
                                    id="lote"
                                    label="Lote" 
                                    ref="lote"  
                                    maxlength="20"                                            
                                    style=" width: 7%;min-width: 180px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    :rules="[campoRequerido]" 
                                    @blur="buscaByChave"
                                    :disabled="loteDesabilitado"
                                    
                                ></v-text-field>                                  
                                     
                           
                              




                            <div   class="espacoEntreComponentes" style="width: 40%; min-width: 350px; "  >   
                                        
                                        <div class="input-group">   
                                            
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                 
                                                    id="item"
                                                    label="Item"
                                                    ref="item"  
                                                    maxlength="7"  
                                                    style=" width: 120px; "
                                                    variant="outlined"
                                                    bg-color="white"
                                                    v-model.trim="this.teste.item"
                                                    type="number"                                                     
                                                    :rules="[campoRequerido]" 
                                                    density="compact"
                                                    :disabled="this.itemDesabilitado"
                                                    @blur="buscaByChave"
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
    
                                            <div style="   flex-grow: 1;height:43px;"  >   
                                                <v-text-field
                                                 
                                                    id="descFio"   
                                                    disabled 
                                                    class="limitadorMedia"
                                                    density="compact"
                                                    v-model.trim="this.teste.descItem"
                                                    style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  " 
                                                ></v-text-field>   
                                            </div>  
    
                                        </div>
    
                            </div>                                
                     


                          

                                    <v-text-field
                                        v-model.trim="this.teste.dataTeste" 
                                        id="dataTeste"
                                        label="Data do Teste" 
                                        ref="dataTeste"  
                                        style=" width: 7%;min-width: 180px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        type="date" 
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                     

                                        
                                    ></v-text-field>      

                                                    
                   </div>
                   <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white" > 

                            

                                <v-autocomplete

                                    label="Tipo Teste"
                                    :items="tipoTesteItens"                                                                                            
                                    v-model="this.teste.prdint"  
                                    item-title="nome" 
                                    item-value="codigo"
                                    variant="outlined"
                                    style=" width: 7%;min-width: 180px; "  
                                    class="espacoEntreComponentes" 
                                    bg-color="white"      
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                   
                                    
                                ></v-autocomplete>  

                                              
                                    <v-text-field

                                        v-model.trim="this.teste.numVolumes" 
                                        id="numVolumes"
                                        label="Num. Fardos Testados" 
                                        ref="numVolumes"  
                                        maxlength="3"                                            
                                        style=" width: 7%;min-width: 180px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white"                                           
                                        type="number"  
                                        inputmode="numeric"   
                                        density="compact" 
                                         

                                    ></v-text-field>                                    
                                        
                                
                               

                            <div   class="espacoEntreComponentes"> 
                          

                                    <v-btn   
                                        style="height:45px;width:200px;background-color:rgb(240, 237, 232); margin-bottom: 25px"   
                                            @click="this.exibeMovimentos()"  
                                            
                                        > 
                                        <v-icon
                                        class="mb-6"
                                        color="primary"
                                        icon="mdi-card-search-outline"
                                        size="41"
                                        ></v-icon>  
                                        <span  style="margin-bottom:18px"><b>Movim. do Lote</b></span> <!-- Texto centralizado -->
                                    </v-btn>   


                            </div>                            
                            
                            
        

                    </div>     

                    <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white" v-if="this.$store.state.usuarioSistema.idfil!='05'  ">
                        <div   style="width:64%;   "> 

                           <v-file-input   
                                    style="width:99%; min-width: 350px;   "
                                    v-model.trim="fileSelecionado"
                                    label="Selecione o arquivo do HVI" 
                                    variant="outlined"
                                    bg-color="white"  
                                    density="compact" 
                                    accept=".csv" 
                                    type="file"
                                    prepend-icon=""
                                    append-inner-icon="mdi-card-search-outline"
                                    @change="buscarNomeArquivo" 
                                    :disabled="fileSelecionadoDesabilitado"
                                    > 
                            </v-file-input>

                        </div>

                        <div   class="espacoEntreComponentes"  >     
                                <v-btn   @click="importarArquivo()"
                                   :disabled="fileSelecionadoDesabilitado"
                                    style="height:45px;width:200px;background-color:rgb(240, 237, 232); margin-bottom:40px; "   
                                    > 
                                    <v-icon
                                    class="mb-6"
                                    color="primary"
                                    icon="mdi-file-download-outline"
                                    size="41"
                                    ></v-icon>  
                                    <span  style="margin-bottom:18px"><b>Importar dados</b></span> <!-- Texto centralizado -->
                                </v-btn>   

                            
                
                        </div>  


                    </div> 
 
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    
                    <div class="d-flex justify-content-end " style="margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    
                        <div style="width:100%;background-color:#c0c0c1; height:50px  ">
                            <p  class="text-white text-center  mt-3  " style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Dados de Qualidade</b></p>                               
                        </div>  
                    </div>    


                    <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white;margin-top: 1%;">



                   

                                    <v-text-field
                                            v-model.trim="this.teste.sic" 
                                            id="sci"
                                            label="SCI" 
                                            ref="sci"  
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white"  
                                            inputmode="numeric"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            maxlength="3"       
                                           
                                        
                                    ></v-text-field>  

                        


                            

                                <v-text-field
                                        v-model.trim="this.teste.mst" 
                                        id="mst"
                                        label="MST" 
                                        ref="mst"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.mst = $event.target.value"
                                        maxlength="4"   
                                       
                                ></v-text-field>  

                        

                                    <v-text-field
                                            v-model.trim="this.teste.mic" 
                                            id="mic"
                                            label="MIC" 
                                            ref="mic"  
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white" 
                                            inputmode="numeric"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            @keyup="apiEntraNumero($event,2) " 
                                            @blur="this.teste.mic = $event.target.value"
                                            maxlength="5" 
                                        
                                    ></v-text-field>  

                             


                      

                                    <v-text-field
                                            v-model.trim="this.teste.mat" 
                                            id="mat"
                                            label="MAT" 
                                            ref="mat"  
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white" 
                                            inputmode="numeric"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            @keyup="apiEntraNumero($event,2) " 
                                            @blur="this.teste.mat = $event.target.value"
                                            maxlength="5" 
                                        
                                    ></v-text-field>   
                  

                                <v-text-field
                                        v-model.trim="this.teste.uhml" 
                                        id="uhml"
                                        label="UHML" 
                                        ref="uhml"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,3) " 
                                        @blur="this.teste.uhml = $event.target.value"  
                                        maxlength="6"                                  
                                ></v-text-field>  

                             


                  

                                <v-text-field
                                        v-model.trim="this.teste.ui" 
                                        id="ui"
                                        label="UI" 
                                        ref="ui"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.ui = $event.target.value"   
                                        maxlength="5"                                 
                                ></v-text-field>  
   

                                    <v-text-field
                                            v-model.trim="this.teste.sf" 
                                            id="sf"
                                            label="SF" 
                                            ref="sf"  
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white" 
                                            inputmode="numeric"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            @keyup="apiEntraNumero($event,1) " 
                                            @blur="this.teste.sf = $event.target.value"  
                                            maxlength="5"                                    
                                    ></v-text-field>  

                                                  


                    

                                    <v-text-field
                                            v-model.trim="this.teste.str" 
                                            id="str"
                                            label="STR" 
                                            ref="str"  
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white" 
                                            inputmode="numeric"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            @keyup="apiEntraNumero($event,1) " 
                                            @blur="this.teste.str = $event.target.value" 
                                            maxlength="5"                                     
                                    ></v-text-field>  
 

                                <v-text-field
                                        v-model.trim="this.teste.elg" 
                                        id="elg"
                                        label="ELG" 
                                        ref="elg"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.elg = $event.target.value"  
                                        maxlength="4"                                    
                                ></v-text-field>  
 

                    </div>
                    <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white">                               

                            

                                <v-text-field
                                        v-model.trim="this.teste.rs" 
                                        id="rd"
                                        label="RD" 
                                        ref="rd"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.rs = $event.target.value"   
                                        maxlength="5"                                   
                                ></v-text-field>  



                            
 

                            

                                <v-text-field
                                        v-model.trim="this.teste.b" 
                                        id="b"
                                        label="+B" 
                                        ref="b"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.b = $event.target.value"  
                                        maxlength="5"                                    
                                ></v-text-field>  
 

                                <v-text-field
                                        v-model.trim="this.teste.tipo" 
                                        id="tipo"
                                        label="Tipo" 
                                        ref="tipo"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.tipo = $event.target.value" 
                                        maxlength="5"                                     
                                ></v-text-field>  

                                                         

                            

                                <v-text-field
                                        v-model.trim="this.teste.trcnt" 
                                        id="trcnt"
                                        label="TrCNT" 
                                        ref="trcnt"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.trcnt = $event.target.value" 
                                        maxlength="5"                                     
                                ></v-text-field>  

                            


                          

                                <v-text-field
                                        v-model.trim="this.teste.trar" 
                                        id="trar"
                                        label="TrAR" 
                                        ref="trar"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.trar = $event.target.value"  
                                        maxlength="5"                                    
                                ></v-text-field>    

                                <v-text-field
                                        v-model.trim="this.teste.trid" 
                                        id="trid"
                                        label="TRID" 
                                        ref="trid"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes"  
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.trid = $event.target.value"  
                                        maxlength="4"                                    
                                ></v-text-field>  

                               
                            
                            
                              

                                <v-text-field
                                        v-model.trim="this.teste.sac" 
                                        id="sac"
                                        label="SAC" 
                                        ref="sac"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                       
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.sac = $event.target.value"                                    
                                ></v-text-field>  

                           
                                <v-text-field
                                        v-model.trim="this.teste.pim" 
                                        id="pim"
                                        label="PIM" 
                                        ref="pim"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                        
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.pim = $event.target.value"                                    
                                ></v-text-field>  

                           

                             

                                <v-text-field
                                        v-model.trim="this.teste.sc" 
                                        id="sc"
                                        label="SC" 
                                        ref="sc"  
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white" 
                                        inputmode="numeric"
                                      
                                        density="compact"
                                        @keyup="apiEntraNumero($event,1) " 
                                        @blur="this.teste.sc = $event.target.value"                                    
                                ></v-text-field>  
 
                    </div>
                    <div class="flex-linha "  style="margin-left:6%;width:90%;background-color:white">

                           
                                                
                                <v-text-field
                                    v-model.trim="this.teste.hvi" 
                                    id="hvi"
                                    label="HVI" 
                                    ref="hvi"                               
                                    style=" width: 7%;min-width: 320px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                            
                                    
                                ></v-text-field>                                  
                                        
                            
                           
                              

                                               

                            
                                                
                                <v-text-field
                                    v-model.trim="this.teste.benef" 
                                    id="benef"
                                    label="Beneficiamento" 
                                    ref="benef"                               
                                    style=" width: 7%;min-width: 320px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                            
                                    
                                ></v-text-field>          

                                    <v-autocomplete

                                        label="Possui Selo"
                                        :items="possuiSelo"                                                                                            
                                        v-model="this.teste.possuiSelo"  
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style=" width: 7%;min-width: 100px; "  
                                        class="espacoEntreComponentes" 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @blur="configuraSelo"
                                        
                                    ></v-autocomplete> 

                                     

                                

                                        <v-autocomplete

                                            label="Tipo de Selo"
                                            :items="tipoSelo"                                                                                            
                                            v-model="this.teste.tipoSelo"  
                                            item-title="nome" 
                                            item-value="codigo"
                                            variant="outlined"
                                            style=" width: 7%;min-width: 100px; "  
                                            class="espacoEntreComponentes" 
                                            bg-color="white"      
                                            
                                            density="compact"
                                            
                                        ></v-autocomplete>  
                              
                                                
                                        <v-text-field
                                            v-model.trim="this.teste.numeroSelo" 
                                            id="numeroSelo"
                                            label="Numero Selo" 
                                            ref="numeroSelo"                               
                                            style=" width: 7%;min-width: 180px; "  
                                            class="espacoEntreComponentes" 
                                            maxlength="30"
                                            variant="outlined"
                                            bg-color="white"                                           
                                            type="text"     
                                            density="compact"
                                    
                                            
                                        ></v-text-field>                                  
                                                        
                                            
                                                            




                        </div>                     


                        <div class="flex-linha "  style="margin-left:6%;width:90%; ">                            

                            
                                                
                                <v-text-field
                                    v-model.trim="this.teste.obs" 
                                    id="obs"
                                    label="Observacao" 
                                    ref="obs"                               
                                    style=" width: 100%;min-width: 320px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                            
                                    
                                ></v-text-field>                                  
                                        
                            
                             


                        </div>  
                        
                        <div class="flex-linha "  style="margin-left:6%;width:90%; ">                            

                                 
                                                    
                                    <v-text-field
                                        v-model.trim="this.teste.arqImportacao" 
                                        id="arq"
                                        label="Arquivo Importado" 
                                        ref="arq"                               
                                        style=" width: 100%;min-width: 320px; "  
                                        class="espacoEntreComponentes" 
                                        variant="outlined"
                                        bg-color="white"                                           
                                        type="text"     
                                        density="compact"
                                        disabled

                                        
                                    ></v-text-field>                                  
                                            

                                 


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

                                          


                              </div>  



                        
  
                          </div>
                    
                      </div>   

                            
                </div>

            </div>
        </div>  

    </v-form>     



    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>  
    <PesquisaNotasLote   :nfLoteProps ="paramDadosNfLote"  :loteProps ="paramLote"  ref="pesquisaNotasLote"></PesquisaNotasLote>
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>     
</template>
 
<script> 

   
   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
  
    
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'   
   import MensagemMobile  from '../../components/MensagemMobileComponent.vue'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
   import SimNao from '@/requires/SimNao.vue' 
   import PesquisaNotasLote from '@/requires/PesquisaNotasLote'
   import PesquisaItem from '@/requires/PesquisaItem'
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'TestesCQComponent',
 
        components: {  MensagemMobile,SimNao,PesquisaNotasLote,PesquisaItem },
        
 
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
        props: {  
                produtorProps : {
                    type: String,
                    required: true,
                },                   
                loteProps : {
                    type: String,
                    required: true,
                },   
                itemProps : {
                    type: String,
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

                       
           
            teste:{
                produtor:'',	 
                lote:'',
                dataTeste:'', 
                numVolumes:0, 
                sac:0,		 
                mst:0,	 
                mic:0,	 
                mat:0,	 
                ui:0,	 
                sf:0, 
                str:0, 	
                elg:0,	 
                tipo:0, 
                trid:0, 
                sc:0, 	
                pim:0,	 
                hvi:'',	 
                benef:'', 
                obs:'', 
                dataInclusao:'', 
                usarioInclusao:'',
                dataAlteracao:'', 
                usarioAlteracao:'',		 
                sic:0,	 
                uhml:0, 
                rs:0, 
                b:0, 
                trcnt:0, 
                trar:0, 	
                prdint:'', 
                arqImportacao:" ", 
                possuiSelo:'', 
                tipoSelo:'', 
                numeroSelo:'',
                tipoMic:'', 
                item:'',
                descItem:'' 
                
            },

            testeInicial:{
                produtor:'',	 
                lote:'',
                dataTeste:'', 
                numVolumes:0, 
                sac:0,		 
                mst:0,	 
                mic:0,	 
                mat:0,	 
                ui:0,	 
                sf:0, 
                str:0, 	
                elg:0,	 
                tipo:0, 
                trid:0, 
                sc:0, 	
                pim:0,	 
                hvi:'',	 
                benef:'', 
                obs:'', 
                dataInclusao:'', 
                usarioInclusao:'',
                dataAlteracao:'', 
                usarioAlteracao:'',		 
                sic:0,	 
                uhml:0, 
                rs:0, 
                b:0, 
                trcnt:0, 
                trar:0, 	
                prdint:'', 
                arqImportacao:" ", 
                possuiSelo:'', 
                tipoSelo:'', 
                numeroSelo:'',
                tipoMic:'', 
                item:'',
                descItem:''
                
            },


            testeDAO:{
                produtor:'',	 
                lote:'',
                dataTeste:'', 
                numVolumes:0, 
                sac:0,		 
                mst:0,	 
                mic:0,	 
                mat:0,	 
                ui:0,	 
                sf:0, 
                str:0, 	
                elg:0,	 
                tipo:0, 
                trid:0, 
                sc:0, 	
                pim:0,	 
                hvi:'',	 
                benef:'', 
                obs:'', 
                dataInclusao:'', 
                usarioInclusao:'',
                dataAlteracao:'', 
                usarioAlteracao:'',		 
                sic:0,	 
                uhml:0, 
                rs:0, 
                b:0, 
                trcnt:0, 
                trar:0, 	
                prdint:'', 
                arqImportacao:" ", 
                possuiSelo:'', 
                tipoSelo:'', 
                numeroSelo:'',
                tipoMic:'', 
                item:'',
                
                
            },            

            produtorDesabilitado:false,	 
            loteDesabilitado:false,
            dataTesteDesabilitado:false, 
            numVolumesDesabilitado:false, 
            sacDesabilitado:false,		 
            mstDesabilitado:false,	 
            micDesabilitado:false,	 
            matDesabilitado:false,	 
            uiDesabilitado:false,	 
            sfDesabilitado:false, 
            strDesabilitado:false, 	
            elgDesabilitado:false,	 
            tipoDesabilitado:false, 
            tridDesabilitado:false, 
            scDesabilitado:false, 	
            pimDesabilitado:false,	 
            hviDesabilitado:false,	 
            benefDesabilitado:false, 
            obsDesabilitado:false,                     
            sicDesabilitado:false,	 
            uhmlDesabilitado:false, 
            rsDesabilitado:false, 
            bDesabilitado:false, 
            trcntDesabilitado:false, 
            trarDesabilitado:false, 	
            prdintDesabilitado:false, 
            arqImportacaoDesabilitado:false, 
            possuiSeloDesabilitado:false, 
            tipoSeloDesabilitado:false, 
            numeroSeloDesabilitado:false,
            tipoMicDesabilitado:false,  
            fileSelecionadoDesabilitado:false,
            itemDesabilitado:false,

            produtorItens: [],
            produtorItensTemp:{ 
                codigo:'',
                descricao:'',
                chave:''
            },   
            
            tipoTesteItens:[
                {codigo:"I", nome:"Interno"},
                {codigo:"P", nome:"Produtor"}

            ], 
            possuiSelo:[
                {codigo:"S", nome:"SIM"},
                {codigo:"N", nome:"NAO"}

            ],         
            
        
            tipoSelo:[
                {codigo:"ABR", nome:"ABR"},
                {codigo:"BCI", nome:"BCI"},
                {codigo:"DCI", nome:"DCI"}

            ],             
            nomeArquivo:'',        
            fileRules: [
                (value) => !value || value.size < 2000000 || 'File size should be less than 2 MB!',
            ], 
            fileSelecionado:''  ,
            aDados:[],
            dadosNotasLote:[],
            paramPesqNotasLote:{
                idfil:'' ,
                produtor:'' ,
                lote:'' , 
                idItem :''

             },
             paramDadosNfLote:[],
             paramLote:'',
             paramTMp: '',
             aNumVol:[],
            
          
            

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        
        methods:{ 

             
            navegarParaLogin(){this.$router.push({name:'login'  })}, 

            async exclusao() {  


                if (this.teste.produtor==null || this.teste.produtor=='' || 
                 this.teste.lote==null || this.teste.lote=='' ||
                 this.teste.item==null || this.teste.item==''|| 
                 this.teste.descItem==null || this.teste.descItem=='')
                {  
                    this.apiDisplayMensagem('Informe um  teste válido' ) 
                    return false;
                }    


                /// EXCLUSAO //// 


                //let url = `${process.env.VUE_APP_BASE_URL}/testecq/delete/${this.$store.state.usuarioSistema.idfil}/${this.teste.produtor}/${this.teste.lote}/${this.teste.item}`    
                let url = `${process.env.VUE_APP_BASE_URL}/testecq/delete`    
                

                this.testeDAO =
                    {
                        idfil:this.$store.state.usuarioSistema.idfil,
                        produtor:this.teste.produtor  ,
                        lote:this.teste.lote  ,  
                        item:   this.teste.item  
                    }    


                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  
 
                        this.axios.put( 
                        url,
                        JSON.stringify(this.testeDAO),
                        this.apiTokenHeader({ "Content-Type": "application/json" }) 
                        ).then(response => {
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


            buscarNomeArquivo(event){ 
                
                 this.nomeArquivo = event.target.files[0];
                 //console.log('buscarNomeArquivo');
                 //console.log(event.target.files[0]);
                 
                 
            }, 
            importarArquivo(){ 


                if(this.teste.produtor=='' || this.teste.produtor==null){
                    this.apiDisplayMensagem('Informe o produtor');
                    return false 
                }


                if(this.teste.lote=='' || this.teste.lote==null){
                    this.apiDisplayMensagem('Informe o lote');
                    return false 
                }  
                
                if(this.teste.item=='' || this.teste.item==null){
                    this.apiDisplayMensagem('Informe o item');
                    return false 
                }  
                
                if(this.teste.descItem=='' || this.teste.descItem==null){
                    this.apiDisplayMensagem('Informe um item válido');
                    return false 
                }                 



                
                if(this.fileSelecionado!='') {                    
                    this.readFile(this.nomeArquivo); 
                    this.produtorDesabilitado= true;	 
                    this.loteDesabilitado= true;
                    this.itemDesabilitado=true;
                    this.fileSelecionadoDesabilitado=true;

                }else{
                    
                    this.fileSelecionado='';
                    this.nomeArquivo='';
                    this.teste.obs = ''; 
                    this.apiDisplayMensagem('Nunhum arquivo seleciondo para importar');
                }

                
            },

            setaPesquisa(e) {   

                //if (e.tipo == "itemTeste") {
                    this.teste.item = e.obj.codigo;
                    this.teste.descItem = e.obj.material.descricao.substring(0, 40);
                    
                 //} 
            },  
            



            readFile(file) {
                const reader = new FileReader();

                reader.onload = (e) => { 
       
                    const content = e.target.result;
                    this.parseCSV(content);
                };
                reader.readAsText(file);
            },

 
            parseCSV(content) {

                //let linhaLote;
                let linhaMedia;
                let linhaNumVol;
                let dadosArquivo;
                let erroArquivo = false;
                 


             
                const lines = content.split('\n'); 

                const linhaLote = lines[3].split(';');      
                dadosArquivo = linhaLote[5].toUpperCase();

                let objDescProdutor = this.produtorItens.find(objDescProdutor => objDescProdutor.codigo === this.teste.produtor);   

                //console.log(objDescProdutor);
 

                if (!dadosArquivo.includes(objDescProdutor.chave.toUpperCase())) {   
                    erroArquivo = true;  
                    this.apiDisplayMensagem('Nome do produtor nao encontrado no arquivo'); 
                } else if (!dadosArquivo.includes(this.teste.lote)) {  
                    erroArquivo = true;  
                    this.apiDisplayMensagem('Lote nao encontrado no arquivo'); 
                }  


                if(erroArquivo){

                        this.teste.sic  = 0;
                        this.teste.mst  = 0;
                        this.teste.mic  = 0;
                        this.teste.mat  = 0;
                        this.teste.uhml = 0;

                        this.teste.ui   = 0;
                        this.teste.sf   = 0;
                        this.teste.str  = 0;
                        this.teste.elg  = 0; 
                        this.teste.rs   = 0;

                        this.teste.b    = 0;
                        this.teste.tipo = 0;
                        this.teste.trcnt = 0;
                        this.teste.trar = 0; 
                        this.teste.trid = 0;  
                        
                        this.teste.numVolumes=0;

                        this.teste.arqImportacao = '';  

                        return false
                    
                }else{
                        this.teste.arqImportacao = linhaLote[5];  
                        for(let ind=0;ind<1000;ind++){
        
                            if(lines[ind].substring(0, 5)==("M" + String.fromCharCode( lines[ind].substring(1, 2).charCodeAt(0) ) + "dia")){                        

                                linhaMedia = lines[ind];
                                linhaNumVol = lines[ind-1];
                                ind=1000;
                            }   
        
                        } 


    
                        this.aDados = linhaMedia.split(';'); 
        
                        this.teste.sic  = this.aDados[2];
                        this.teste.mst  = this.aDados[7];
                        this.teste.mic  = this.aDados[8];
                        this.teste.mat  = this.aDados[9];
                        this.teste.uhml = this.aDados[10];

                        this.teste.ui   = this.aDados[12];
                        this.teste.sf   = this.aDados[13]; 
                        this.teste.str  = this.aDados[15]; 
                        this.teste.elg  = this.aDados[16]; 
                        this.teste.rs   = this.aDados[17]; 

                        this.teste.b    = this.aDados[19]; 
                        this.teste.tipo = this.aDados[21].replace("-", ",");
                        this.teste.trcnt = this.aDados[23]; 
                        this.teste.trar = this.aDados[25]; 
                        this.teste.trid = this.aDados[29];    

                        this.aNumVol = linhaNumVol.split(';'); 
                        this.teste.numVolumes = this.aNumVol[1];
                        


                } 


            },


            async buscaByChave(){ 

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = ''     

                    const resposta = await this.validaChave(); 

                    //if (await this.validaChave ()){   
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

                    //console.log('validaChave 1111')
                    //console.log(this.teste.item)




                    if (!(this.teste.item==null || this.teste.item=='')){   
                        this.apiPesquisaParam('itemTeste', this.teste.item  , this.teste)  

                        //console.log('validaChave 333333')
                        //console.log(this.teste.item)


                    }else{
                        this.teste.descItem='' 
                    }
                    

                    if ((this.teste.produtor==null || this.teste.produtor=='')){ 
                        validado = false;   
                        return validado;
                    } else{

                        if ((this.teste.lote==null || this.teste.lote=='')){ 
                            validado = false;  
                            return validado;
                         }else{
                            if ((this.teste.item==null || this.teste.item=='')){ 
                                validado = false;  
                                return validado;
                            } else{

                                const descIt = await this.apiPesquisaParam('itemTeste', this.teste.item  , this.teste) 
                                this.paramTMp =  descIt
                                if(this.teste.descItem=='' || this.teste.descItem==null){
                                    validado = false;  
                                    return validado;                                    
                                }else{

                                    return validado; 
                                }

                                
                             

                            } 

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
                           this.exclusao();
                        }else if(this.acao == 'cancelaEdicao')
                        {
                            this.resetarForm();
                        }  else if(this.acao == 'pesquisar')
                        {
                            this.$router.push( { name: 'testecqpesquisa' } )
                            
                        
                        }
                      
                        
                    }

           }, 
           
           resetarForm(){

                    //console.log('')  

                    if(this.simNaoRetorno == 'S'){

                        this.teste = Object.assign({},this.testeInicial);  
                        //this.v$.$reset(); 
                       
                        this.erros= '';
                        this.mensagemSucesso= '';
                        this. mensagemErro= ''; 
                        this.haErros= false;      
                        this.haSucesso= false;
                        this.tipoOperacao = 'I';  

                        this.fileSelecionado=""
                        this.configuraCampos('I' )  ;
                        this.populaProdutor();

                        if(this.$store.state.usuarioSistema.idfil=="01"){
                            this.teste.item = '424668'
                        }else if(this.$store.state.usuarioSistema.idfil=="03"){
                            this.teste.item = '444944'
                        }else if(this.$store.state.usuarioSistema.idfil=="05"){
                            this.teste.item = '523044'
                        }
                        this.apiPesquisaParam('itemTeste', this.teste.item  , this.teste)                    
                       
                        this.scrollToTop();


                    }  

            },           

  
            async populaForm(){   

                    let url;
                    let dataFormatada;
                    this.resultado = "";

                    this.msgProcessamento = "Processando" ;
                    this.apiProcessamento()  ; 


                    //url = `${process.env.VUE_APP_BASE_URL}/testecq/busca/${this.$store.state.usuarioSistema.idfil}/${this.teste.produtor}/${this.teste.lote}/${this.teste.item}`  
                    url = `${process.env.VUE_APP_BASE_URL}/testecq/busca`  
                    //console.log(url)

                    this.testeDAO =
                    {
                        idfil:this.$store.state.usuarioSistema.idfil,
                        produtor:this.teste.produtor  ,
                        lote:this.teste.lote  ,  
                        item:   this.teste.item  
                    }   

                            //console.log(this.testeDAO);
                    await this.axios.put(
                        url,
                        JSON.stringify(this.testeDAO),
                        this.apiTokenHeader({ "Content-Type": "application/json" })
                    ).then(response => {

                        // console.log("PopulaForm");
                            this.resultado = response.data;  
                            
                            //console.log(this.resultado);,

                            if (this.resultado.idfil != null){

                                dataFormatada = this.resultado.dataTeste.split('/').reverse().join('-');
                                this.teste.dataTeste = dataFormatada ;   
                                        
                            }else{
                                this.teste.dataTeste = "" ;                       
                            } 

                            if (this.resultado.numVolumes != null){
                                this.teste.numVolumes = this.resultado.numVolumes;
                                        
                            }else{
                                this.teste.numVolumes = 0 ;                       
                            }  
   
                            
                            if (this.resultado.sac != null){
                                let pSAC  = this.apiFormataNumero(this.resultado.sac,1);
                                this.teste.sac = pSAC;
                                        
                            }else{
                                this.teste.sac = 0 ;                       
                            }                                
                            
                            if (this.resultado.mst != null){
                                let pMST  = this.apiFormataNumero(this.resultado.mst,1);
                                this.teste.mst = pMST; 
                            }else{
                                this.teste.mst = 0 ;                       
                            }   

                            if (this.resultado.mic != null){
                                let pMIC  = this.apiFormataNumero(this.resultado.mic,2);
                                this.teste.mic = pMIC; 
                            }else{
                                this.teste.mic = 0 ;                       
                            }         
                            
                            if (this.resultado.mat != null){
                                let pMAT  = this.apiFormataNumero(this.resultado.mat,2);
                                this.teste.mat = pMAT; 
                            }else{
                                this.teste.mat = 0 ;                       
                            }    
                            
                            if (this.resultado.ui != null){
                                let pUI  = this.apiFormataNumero(this.resultado.ui,1);
                                this.teste.ui = pUI; 
                            }else{
                                this.teste.ui = 0 ;                       
                            }      
                            
                            if (this.resultado.sf != null){
                                let pSF  = this.apiFormataNumero(this.resultado.sf,1);
                                this.teste.sf = pSF; 
                            }else{
                                this.teste.sf = 0 ;                       
                            }     
                            
                            if (this.resultado.str != null){
                                let pSTR  = this.apiFormataNumero(this.resultado.str,1);
                                this.teste.str = pSTR; 
                            }else{
                                this.teste.str = 0 ;                       
                            }    
                            
                            if (this.resultado.elg != null){
                                let pELG  = this.apiFormataNumero(this.resultado.elg,1);
                                this.teste.elg = pELG; 
                            }else{
                                this.teste.elg = 0 ;                       
                            }                                


                            if (this.resultado.tipo != null){
                                let pTipo  = this.apiFormataNumero(this.resultado.tipo,1);
                                this.teste.tipo = pTipo; 
                            }else{
                                this.teste.tipo = 0 ;                       
                            }  
                            
                            
                            if (this.resultado.trid != null){
                                let pTrid  = this.apiFormataNumero(this.resultado.trid,1);
                                this.teste.trid = pTrid; 
                            }else{
                                this.teste.trid = 0 ;                       
                            }                               



                            if (this.resultado.sc != null){
                                let pSc  = this.apiFormataNumero(this.resultado.sc,1);
                                this.teste.sc = pSc; 
                            }else{
                                this.teste.sc = 0 ;                       
                            } 


                            if (this.resultado.pim != null){
                                let pPim  = this.apiFormataNumero(this.resultado.pim,1);
                                this.teste.pim = pPim; 
                            }else{
                                this.teste.pim = 0 ;                       
                            }          
                            
                            if (this.resultado.sic != null){
                                let pSic  = this.apiFormataNumero(this.resultado.sic,0);
                                this.teste.sic = pSic; 
                            }else{
                                this.teste.sic = 0 ;                       
                            }                               
                            

                            if (this.resultado.uhml != null){
                                let pUHML  = this.apiFormataNumero(this.resultado.uhml,3);
                                this.teste.uhml = pUHML; 
                            }else{
                                this.teste.uhml = 0 ;                       
                            }     
                            
                            
                             if (this.resultado.rs != null){
                                let pRS  = this.apiFormataNumero(this.resultado.rs,1);
                                this.teste.rs = pRS; 
                            }else{
                                this.teste.rs = 0 ;                       
                            }        
                            
                            
                            if (this.resultado.b != null){
                                let pB  = this.apiFormataNumero(this.resultado.b,1);
                                this.teste.b = pB; 
                            }else{
                                this.teste.b = 0 ;                       
                            }                              

                            if (this.resultado.trcnt != null){
                                let pTrCnt  = this.apiFormataNumero(this.resultado.trcnt,1);
                                this.teste.trcnt = pTrCnt; 
                            }else{
                                this.teste.trcnt = 0 ;                       
                            }  


                            if (this.resultado.trar != null){
                                let pTrar  = this.apiFormataNumero(this.resultado.trar,2);
                                this.teste.trar = pTrar; 
                            }else{
                                this.teste.trar = 0 ;                       
                            }   
                            
                            if (this.resultado.hvi != null){
                                this.teste.hvi = this.resultado.hvi;
                                        
                            }else{
                                this.teste.hvi = '' ;                       
                            }                              


                            if (this.resultado.benef != null){
                                this.teste.benef = this.resultado.benef;
                                        
                            }else{
                                this.teste.benef = '' ;                       
                            }  

                            if (this.resultado.obs != null){
                                this.teste.obs = this.resultado.obs;
                                        
                            }else{
                                this.teste.obs = '' ;                       
                            }       

                            if (this.resultado.usuarioAlteracao != null){
                                this.teste.usarioAlteracao = this.resultado.usuarioAlteracao ;     
                            
                            }else{
                                this.teste.usarioAlteracao = "" ;                       
                            }      

                            if (this.resultado.dataAlteracao != null){
                                this.teste.dataAlteracao = this.resultado.dataAlteracao ;     
                            
                            }else{
                                this.teste.dataAlteracao = "" ;                       
                            }   
                            
                            
                            if (this.resultado.usarioInclusao != null){
                                this.teste.usarioInclusao = this.resultado.usarioInclusao ;     
                            
                            }else{
                                this.teste.usarioInclusao = "" ;                       
                            }      

                            if (this.resultado.dataInclusao != null){
                                this.teste.dataInclusao = this.resultado.dataInclusao ;     
                            
                            }else{
                                this.teste.dataInclusao = "" ;                       
                            }   
                            
                            if (this.resultado.prdint != null){
                                this.teste.prdint = this.resultado.prdint ;     
                            
                            }else{
                                this.teste.prdint = "" ;                       
                            }                             

                            if (this.resultado.arqImportacao != null){
                                this.teste.arqImportacao = this.resultado.arqImportacao ;     
                            
                            }else{
                                this.teste.arqImportacao = "" ;                       
                            } 

                            if (this.resultado.possuiSelo != null){
                                this.teste.possuiSelo = this.resultado.possuiSelo ;     
                            
                            }else{
                                this.teste.possuiSelo = "" ;                       
                            }  
                            
                            if (this.resultado.tipoSelo != null){
                                this.teste.tipoSelo = this.resultado.tipoSelo ;     
                            
                            }else{
                                this.teste.tipoSelo = "" ;                       
                            }
                            
                            if (this.resultado.numeroSelo != null){
                                this.teste.numeroSelo = this.resultado.numeroSelo ;     
                            
                            }else{
                                this.teste.numeroSelo = "" ;                       
                            } 
                            
                            if (this.resultado.tipoMic != null){
                                this.teste.tipoMic = this.resultado.tipoMic ;     
                            
                            }else{
                                this.teste.tipoMic = "" ;                       
                            }    
                            
                            
                            if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                                  this.tipoOperacao = 'A';    
                            }
 
                            if(this.resultado==''){ 
                                this.configuraCampos('I' )  ;
                            }else{ 
                                this.apiPesquisaParam('itemTeste', this.teste.item  , this.teste) 
                                this.configuraCampos('A' )  ;  
                            }  

 
                            this.msgProcessamento = ''




                    }).catch(error => {  
                                    
                            console.log("Erro: ", error); 
                            this.msgProcessamento = '' 
                            this.apiDisplayMensagem(error ) 
                    });   

            },  


            configuraCampos(oper ){  

                
                if(oper=='I'){ 

                    this.produtorDesabilitado= false;	 
                    this.loteDesabilitado= false;
                    this.itemDesabilitado=false;
                    this.fileSelecionadoDesabilitado=false;  
/*                    
                    this.dataTesteDesabilitado= false; 
                    this.numVolumesDesabilitado= false; 
                    this.sacDesabilitado= false;		 
                    this.mstDesabilitado= false;	 
                    this.micDesabilitado= false;	 
                    this.matDesabilitado= false;	 
                    this.uiDesabilitado= false;	 
                    this.sfDesabilitado= false; 
                    this.strDesabilitado= false; 	
                    this.elgDesabilitado= false;	 
                    this.tipoDesabilitado= false; 
                    this.tridDesabilitado= false; 
                    this.scDesabilitado= false; 	
                    this.pimDesabilitado= false;	 
                    this.hviDesabilitado= false;	 
                    this.benefDesabilitado= false; 
                    this.obsDesabilitado= false;  
                    this.sicDesabilitado= false;	 
                    this.uhmlDesabilitado= false; 
                    this.rsDesabilitado= false; 
                    this.bDesabilitado= false; 
                    this.trcntDesabilitado= false; 
                    this.trarDesabilitado= false; 	
                    this.prdintDesabilitado= false; 
                    this.arqImportacaoDesabilitado= false; 
                    this.possuiSeloDesabilitado= false; 
                    this.tipoSeloDesabilitado= false; 
                    this.numeroSeloDesabilitado= false;
*/                   
                    
                   

                }else if(oper=='A' || oper=='E'){


                    this.produtorDesabilitado= true;	 
                    this.loteDesabilitado= true;
                    this.itemDesabilitado=true;
                    this.fileSelecionadoDesabilitado=true;  
                    /*
                    this.dataTesteDesabilitado= false; 
                    this.numVolumesDesabilitado= false; 
                    this.sacDesabilitado= false;		 
                    this.mstDesabilitado= false;	 
                    this.micDesabilitado= false;	 
                    this.matDesabilitado= false;	 
                    this.uiDesabilitado= false;	 
                    this.sfDesabilitado= false; 
                    this.strDesabilitado= false; 	
                    this.elgDesabilitado= false;	 
                    this.tipoDesabilitado= false; 
                    this.tridDesabilitado= false; 
                    this.scDesabilitado= false; 	
                    this.pimDesabilitado= false;	 
                    this.hviDesabilitado= false;	 
                    this.benefDesabilitado= false; 
                    this.obsDesabilitado= false;  
                    this.sicDesabilitado= false;	 
                    this.uhmlDesabilitado= false; 
                    this.rsDesabilitado= false; 
                    this.bDesabilitado= false; 
                    this.trcntDesabilitado= false; 
                    this.trarDesabilitado= false; 	
                    this.prdintDesabilitado= false; 
                    this.arqImportacaoDesabilitado= false; 
                    this.possuiSeloDesabilitado= false; 
                    this.tipoSeloDesabilitado= false; 
                    this.numeroSeloDesabilitado= false;    
                    */
                                  



  
                   
                }  
            }, 



        async exibeMovimentos(){ 

                let url;  
                this.dadosNotasLote =[];    



                if ((this.teste.produtor==null || this.teste.produtor=='')){ 
                    this.apiDisplayMensagem('Informe o produtor' ) 
                    return false;
                }                    

                if ((this.teste.lote==null || this.teste.lote==''))
                {  
                    this.apiDisplayMensagem('Informe o lote' ) 
                    return false;
                }                
             

                if ((this.teste.item==null || this.teste.item==''))
                {  
                    this.apiDisplayMensagem('Informe o item' ) 
                    return false;
                }  

                if ((this.teste.descItem==null || this.teste.descItem==''))
                {  
                    this.apiDisplayMensagem('Informe um  item válido' ) 
                    return false;
                }                 



                url = `${process.env.VUE_APP_BASE_URL}/movimento/exibemovimentacao`  

                //console.log(url)

                this.paramPesqNotasLote.idfil = this.$store.state.usuarioSistema.idfil; 
                this.paramPesqNotasLote.produtor = this.teste.produtor;
                this.paramPesqNotasLote.lote = this.teste.lote; 
                this.paramPesqNotasLote.item = this.teste.item;  

               
                await this.axios.post(
                    url,
                    JSON.stringify(this.paramPesqNotasLote),
                    this.apiTokenHeader({ "Content-Type": "application/json" })
                )                
                .then(response => { 

                    this.resultado = response.data;  
                    
                    
                    if (this.resultado){ 
                        if(this.resultado.length>0){
                             this.dadosNotasLote = this.resultado; 
                             this.exibeModalNotasLote(this.dadosNotasLote,this.teste.lote)
                        }else{
                             this.apiDisplayMensagem('Movimentação nao encontrada' ) 
                        }
                    } else{
                        this.apiDisplayMensagem('Movimentação nao encontrada' ) 
                    }
                    
                })
                .catch(error => {  
                    
                        console.log("Erro: ", error); 
                        this.msgProcessamento = '' 
                        this.apiDisplayMensagem(error ) 
                        
                });    
 


        },  

        configuraSelo(){
            if (this.teste.possuiSelo=='N')
            {   
                    this.teste.tipoSelo='';                   
                    this.teste.numeroSelo='';   
            }

        },

        async submitForm() {   

                //console.log("submitForm");

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 



                if ((this.teste.possuiSelo=='S'))
                {   

                        if ((this.teste.tipoSelo=='' || this.teste.tipoSelo==null))
                        {  
                            this.apiDisplayMensagem('Informe o tipo do selo.' ) 
                            return false;
                        }  

                        if ((this.teste.numeroSelo=='' || this.teste.numeroSelo==null))
                        {  
                            this.apiDisplayMensagem('Informe o número do selo.' ) 
                            return false;
                        }   

                }  


                // Obtém a data atual
                let dataAtual = new Date();

                // Obtém as partes individuais da data atual
                let ano = dataAtual.getFullYear();
                let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
                let dia = ("0" + dataAtual.getDate()).slice(-2);

                // Formata a data atual como "yyyy-mm-dd"
                let dataAtualFormatada = `${ano}-${mes}-${dia}`; 

                 if( this.teste.dataTeste > dataAtualFormatada ){
                    this.apiDisplayMensagem('Data do teste inválida.' ) 
                    return false; 
                 } 
                 
                dataAtual.setDate(dataAtual.getDate() - 30); 
                 
                const testeDate = new Date(this.teste.dataTeste); 
                testeDate.setHours(0, 0, 0, 0);
                dataAtual.setHours(0, 0, 0, 0);

                if( testeDate < dataAtual){
                    this.apiDisplayMensagem('Data do teste inválida.' ) 
                    return false;                    
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
                            this.teste.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                            this.teste.usarioInclusao = this.$store.state.usuarioSistema.codigo;
                    }else{
                            if (typeof this.teste.dataInclusao   === "string") {
                                dataInsercao  = this.teste.dataInclusao ;
                            } else if (this.teste.dataInclusao  instanceof Date) {
                                dataInsercao  = this.$moment(this.teste.dataInclusao.format("DD/MM/YYYY")  )
                            } 

                            dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    }                     

                    
                    if (this.tipoOperacao=="I") {   

                        let url = `${process.env.VUE_APP_BASE_URL}/testecq/insert` 
                       
                        this.testeDAO =
                            {
                                idfil:this.$store.state.usuarioSistema.idfil,
                                produtor:this.teste.produtor  ,
                                lote:this.teste.lote  ,
                                dataTeste:this.$moment(this.teste.dataTeste).format("DD/MM/YYYY"),   
                                numVolumes:this.teste.numVolumes  ,
                                sac:this.apiConverteNumeroFormatado(this.teste.sac)  ,
                                mst:this.apiConverteNumeroFormatado(this.teste.mst)  ,
                                mic:this.apiConverteNumeroFormatado(this.teste.mic)  ,
                                mat:this.apiConverteNumeroFormatado(this.teste.mat)  ,
                                ui:this.apiConverteNumeroFormatado(this.teste.ui)  ,
                                sf:this.apiConverteNumeroFormatado(this.teste.sf)  ,
                                str:this.apiConverteNumeroFormatado(this.teste.str)  ,
                                elg:this.apiConverteNumeroFormatado(this.teste.elg)  ,
                                tipo:this.apiConverteNumeroFormatado(this.teste.tipo)  ,
                                trid:this.apiConverteNumeroFormatado(this.teste.trid)  ,
                                sc:this.apiConverteNumeroFormatado(this.teste.sc)  ,
                                pim:this.apiConverteNumeroFormatado(this.teste.pim)  ,
                                hvi:this.teste.hvi  ,
                                benef:this.teste.benef  ,
                                obs:this.teste.obs  , 
                                usarioInclusao:this.teste.usarioInclusao  , 
                                usarioAlteracao:this.teste.usarioAlteracao, 
                                dataInclusao:  dataInsercao,
                                dataAlteracao:  dataInsercao,                              
                                sic:this.apiConverteNumeroFormatado(this.teste.sic)  ,
                                uhml:this.apiConverteNumeroFormatado(this.teste.uhml)  ,
                                rs:this.apiConverteNumeroFormatado(this.teste.rs)  ,
                                b:this.apiConverteNumeroFormatado(this.teste.b)  ,
                                trcnt:this.apiConverteNumeroFormatado(this.teste.trcnt)  ,
                                trar:this.apiConverteNumeroFormatado(this.teste.trar)  ,
                                prdint:this.teste.prdint  ,
                                arqImportacao:this.teste.arqImportacao  ,
                                possuiSelo:this.teste.possuiSelo  ,
                                tipoSelo:this.teste.tipoSelo  ,
                                numeroSelo:this.teste.numeroSelo  ,
                                tipoMic:this.teste.tipoMic    ,
                                item:   this.teste.item  
                            }   

                            //console.log(this.testeDAO);
                            await this.axios.post(
                                url,
                                JSON.stringify(this.testeDAO),
                                this.apiTokenHeader({ "Content-Type": "application/json" })
                            )
                            .then(response => {

                                this.resultado = response.data;  

                                this.apiDisplayMensagemSucesso('Registro inserido com sucesso.' )                              
                                this.tipoOperacao = 'A'; 
                                this.configuraCampos('A' )  ;
                            
                            })
                            .catch(error => {


                              
                                console.log("Erro: ", error.response.data);
                                //this.haErros = true
                                //this.mensagemErro = error.response.data
                                this.apiDisplayMensagem(error.response.data ) 
                            });  

                    } else {


                                //console.log('AAAAAAAA')

                                if (this.tipoOperacao == 'A'   ) {   

                                       let url = `${process.env.VUE_APP_BASE_URL}/testecq/update` 
                                
                                       this.testeDAO =
                                        {
                                            idfil:this.$store.state.usuarioSistema.idfil,  
                                            produtor:this.teste.produtor  ,
                                            lote:this.teste.lote  ,
                                            dataTeste:this.$moment(this.teste.dataTeste).format("DD/MM/YYYY"),  
                                            numVolumes:this.teste.numVolumes  ,
                                            sac:this.apiConverteNumeroFormatado(this.teste.sac)  ,
                                            mst:this.apiConverteNumeroFormatado(this.teste.mst)  ,
                                            mic:this.apiConverteNumeroFormatado(this.teste.mic)  ,
                                            mat:this.apiConverteNumeroFormatado(this.teste.mat)  ,
                                            ui:this.apiConverteNumeroFormatado(this.teste.ui)  ,
                                            sf:this.apiConverteNumeroFormatado(this.teste.sf)  ,
                                            str:this.apiConverteNumeroFormatado(this.teste.str)  ,
                                            elg:this.apiConverteNumeroFormatado(this.teste.elg)  ,
                                            tipo:this.apiConverteNumeroFormatado(this.teste.tipo)  ,
                                            trid:this.apiConverteNumeroFormatado(this.teste.trid)  ,
                                            sc:this.apiConverteNumeroFormatado(this.teste.sc)  ,
                                            pim:this.apiConverteNumeroFormatado(this.teste.pim)  ,
                                            hvi:this.teste.hvi  ,
                                            benef:this.teste.benef  ,
                                            obs:this.teste.obs  , 
                                            usarioInclusao:this.teste.usarioInclusao  ,  
                                            usarioAlteracao:  this.$store.state.usuarioSistema.codigo,
                                            dataInclusao:  this.teste.dataInclusao,
                                            dataAlteracao:  dataAlteracao,                              
                                            sic:this.apiConverteNumeroFormatado(this.teste.sic)  ,
                                            uhml:this.apiConverteNumeroFormatado(this.teste.uhml)  ,
                                            rs:this.apiConverteNumeroFormatado(this.teste.rs)  ,
                                            b:this.apiConverteNumeroFormatado(this.teste.b)  ,
                                            trcnt:this.apiConverteNumeroFormatado(this.teste.trcnt)  ,
                                            trar:this.apiConverteNumeroFormatado(this.teste.trar)  ,
                                            prdint:this.teste.prdint  ,
                                            arqImportacao:this.teste.arqImportacao  ,
                                            possuiSelo:this.teste.possuiSelo  ,
                                            tipoSelo:this.teste.tipoSelo  ,
                                            numeroSelo:this.teste.numeroSelo  ,
                                            tipoMic:this.teste.tipoMic ,
                                            item:   this.teste.item ,
                                        }  

                                        //console.log(this.testeDAO);
                                    
                                        await this.axios.put(
                                            url,
                                            JSON.stringify(this.testeDAO),
                                            this.apiTokenHeader({ "Content-Type": "application/json" })
                                        )
                                        .then(response => {    

                                            this.resultado = response.data;  
                                            this.apiDisplayMensagemSucesso('Registro alterado com sucesso.' ) 
                                            //console.log(this.haSucesso);
                                            //console.log(this.mensagemSucesso);                                            

                                        
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
                this.populaProdutor(); 
                

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
                     
                    this.teste.produtor = this.produtorProps;  
                    this.teste.lote     = this.loteProps;  
                    this.teste.item     = this.itemProps.toString().trim();  

                    const resposta = await this.populaForm();     

                    if (!(resposta === true) ){
                        console.log('Erro de cadastro BuscaChave' );      
                    }

                }else{
 

                     if(this.$store.state.usuarioSistema.idfil=="01"){
                        this.teste.item = '424668'
                     }else if(this.$store.state.usuarioSistema.idfil=="03"){
                        this.teste.item = '444944'
                     }else if(this.$store.state.usuarioSistema.idfil=="05"){
                        this.teste.item = '523044'
                     }
                     this.apiPesquisaParam('itemTeste', this.teste.item  , this.teste)
                    
                }  

        },        

       
       mounted(){ 
            
            this.scrollToTop();
 
       
       }
       

   }

   </script>

  