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



                            <v-col class="campoPadraoReduzido"  v-if="this.tpMaquina=='04' || this.tpMaquina=='06'  || this.tpMaquina=='05'   "> <!-- Ajuste a largura de cada campo com "cols" -->
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
                                
                                <v-col class="campoPadraoReduzido"  v-if="this.tpMaquina=='04' || this.tpMaquina=='06'  || this.tpMaquina=='05'   " >   

                                    <label  for="estiragem" class="col-form-label labelCampoPadrao"><b>Estiragem</b></label><br>   
                                    <v-text-field
                                        v-model.trim="this.testeCqFio.estiragem" 
                                        id="estiragem"                                     
                                        ref="estiragem"  
                                        maxlength="20"
                                        variant="outlined"
                                        bg-color="white"                                           
                                        type="text"     
                                        density="compact"
                                        :rules="[campoRequerido]"   
                                  
                                        
                                    ></v-text-field>                                  
                                </v-col>                        
                                
                                

                                <v-col class="campoPadrao" v-if="this.tpMaquina=='02' ||  this.tpMaquina=='03'  "  >

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
                                                    :rules="[campoRequerido]" 
                                                    @blur="apiPesquisaParam('operadorCpfFio', this.testeCqFio.operador, this.testeCqFio)"
                                                
                                                ></v-text-field>    
                                                    
                                                <v-btn     
                                                    
                                                    style="height:43px;width:60px;background-color:rgb(240, 237, 232); "  
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalPesquisaOperador" tabindex="-1"  @click="apiFlushPesquisa" 
                                                        
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

                        <v-row>



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
                            <p  class="text-white text-center  mt-3  " style=" margin-left:19%;width:60%; font-size: 18px; height:20px "><b>Resultado dos Testes</b></p>                               
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


<!--

                    <div class="flex-linha linhaPadrao" :style="{width:this.larguraGrid,marginLeft:this.margemEsquerdaGrid}" >              
                            
                            <v-row> 

                                <v-col class="campoPadrao"  >  
                                    <label  for="seqProva" class="col-form-label labelCampoPadrao"   ><b>Num. Prova</b></label><br>   
                                </v-col>  
                                
                                <v-col class="campoPadrao"  >  
                                    <label  for="numeroFusos" class="col-form-label labelCampoPadrao"  ><b>Num. Fusos</b></label><br>   
                                </v-col>                                  
                                
                                <v-col class="campoPadrao"   v-if="this.tpMaquina== '02' || this.tpMaquina== '03'">  
                                    <label  for="peso" class="col-form-label labelCampoPadrao" ><b>Peso</b></label><br>   
                                </v-col>       
   
                                
                                <v-col class="campoPadrao"  >  
                                    <label  for="titulo" class="col-form-label labelCampoPadrao"  ><b>Titulo</b></label><br>   
                                </v-col>     
                            </v-row> 

                    </div>  
                -->



{{this.larguraGrid}}

{{this.margemEsquerdaGrid}}

                    <table  :style="{width:this.larguraGrid,marginLeft:this.margemEsquerdaGrid}">

                                <thead   style="background-color:#003366;color: white;"  >
                                        <tr>
                                            <th class="col-2">Num. Prova</th> 
                                            <th class="col-2">Num. Fusos</th> 
                                            <th class="col-4" v-if="this.tpMaquina== '02' || this.tpMaquina== '03'">Peso</th> 
                                            <th class="col-2">Titulo</th>  
                                            
                                        </tr>
                                </thead> 
      
 

                                <tbody  v-if="apiDisplayedDadosCRUD && exibeDetalhe==true" :style="{width:this.larguraGrid,marginLeft:this.margemEsquerdaGrid}" >

                   
          
 
                                        <template  v-for="(z, indice) in aTesteDetalhe" :key="indice"   >   

                    

                                            <div class="flex-linha linhaPadrao"  >              
                                                
                                                    <v-row> 

                                                        <v-col class="campoPadrao"   >  
                                                            
                                                            <v-text-field
                                                                v-model.trim="z.seqProva"
                                                                id="seqProva" 
                                                                ref="seqProva"     
                                                                variant="outlined"
                                                                bg-color="white"                                           
                                                                type="text"     
                                                                density="compact"  
                                                                disabled

                                                            ></v-text-field>   
                                                        </v-col> 

                                                        <v-col class="campoPadrao" >  
                                                        
                                                        <v-text-field
                                                            v-model.trim="z.numeroFusos"
                                                            id="numeroFusos" 
                                                            ref="numeroFusos"     
                                                            variant="outlined"
                                                            bg-color="white"                                           

                                                            density="compact"  
                                                            class="text-end"
                                                            style="text-align: right;"
                                                            inputmode="numeric"    
                                                            
                                                        ></v-text-field>   
                                                    </v-col>                         
                                                    
                                                        
                                                        <v-col class="campoPadrao"  v-if="this.tpMaquina== '02' || this.tpMaquina== '03'" > 
                                                            
                                                            <v-text-field
                                                                v-model.trim="z.peso"
                                                                id="peso" 
                                                                ref="peso"     
                                                                variant="outlined"
                                                                bg-color="white"         
                                                                density="compact"  
                                                                inputmode="numeric"                                           
                                                                @keyup="apiEntraNumero($event,2) "  
                                                                @blur="calculaTitulo(z,$event)"  

                                                            ></v-text-field>   
                                                        </v-col>       
                                                        
                        
                                                        
                                                        <v-col class="campoPadrao" v-if="this.tpMaquina== '02' || this.tpMaquina== '03'" > 
                                                        
                                                            <v-text-field
                                                                v-model.trim="z.titulo"
                                                                id="titulo" 
                                                                ref="titulo"     
                                                                variant="outlined"
                                                                bg-color="white"                                           
                                                                type="text"     
                                                                density="compact"  
                                                                disabled
                                                                @keyup="apiEntraNumero($event,2) " 
                                                                @blur="z.titulo = $event.target.value"  

                                                            ></v-text-field>   

                                                        </v-col>

                                                        <v-col class="campoPadrao" v-if="this.tpMaquina== '04' || this.tpMaquina== '05' || this.tpMaquina== '06' " > 
                                                        
                                                        <v-text-field
                                                            v-model.trim="z.titulo"
                                                            id="titulo" 
                                                            ref="titulo"     
                                                            variant="outlined"
                                                            bg-color="white"                                           
                                                            type="text"     
                                                            density="compact"   
                                                            @keyup="apiEntraNumero($event,2) " 
                                                            @blur="z.titulo = $event.target.value"  

                                                        ></v-text-field>   
                                                        
                                                    </v-col>       

                                                    
                                                    </v-row> 

                                            </div>  
                                        </template>
                                </tbody>

 


                    </table>
                    {{this.vTemp}}
             
    
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

    <PesquisaItem @setaPesquisa="setaPesquisa($event)"></PesquisaItem>  
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
   import PesquisaItem from '@/requires/PesquisaItem'
   
  
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'TesteCQFioComponent',
 
        components: {  PesquisaOperador, MensagemMobile,SimNao ,PesquisaItem },
        
 
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],

        props: {  
                tipoMaquinaProps: {
                    type : String,
                    required: true,
          
                    },            
                idProps: {
                    type : Number,
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
            exibeDetalhe : true, 

                       
           
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
            nInd:0

            
            
          
            

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        
        methods:{ 

             
            navegarParaLogin(){this.$router.push({name:'login'  })}, 
 
            async exclusao() {  


            },   

            setaPesquisa(e) {    

                    if (e.tipo == "item") {
                        this.testeCqFio.item =  e.obj.codigo;
                        this.testeCqFio.descItem = e.obj.material.descricao;
                    }                 

                    if (e.tipo == "operador") {
                        this.testeCqFio.operador =  e.obj.codigo;
                        this.testeCqFio.nomeOperador = e.obj.nome;
                    } 

            }, 

            limpaCampos(){

                console.log('limpaCampos')

                
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

                    this.testeCqFio.localFisico = this.testeCqFio.localFisico.padStart(2, '0'); 

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
                        this.configuraCampos('A')
                        this.populaGridInclusao(); 


                        console.log('preparaTeste')
                        console.log(this.aTesteDetalhe)

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


            async buscaByChave(){ 

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = '' 
                    
                    this.exibeDetalhe = true;

                    const resposta = await this.validaChave(); 

                 
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
                    
                    //if (this.testeCqFio.descMaquina =='' || this.testeCqFio.descMaquina==null)  {
                        //this.apiDisplayMensagem('Informe uma maquina válida.');
                        //validado = false; 
                        //return validado;
                    //}                      
                    
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

                   /* 
                    if (this.testeCqFio.descItem =='' || this.testeCqFio.descItem==null)  {
                        //this.apiDisplayMensagem('Informe um item valido.');
                        validado = false; 
                        return validado;
                    }                        
                    */

                    if (this.testeCqFio.tipoTesteFiacao =='' || this.testeCqFio.tipoTesteFiacao==null)  {
                        //this.apiDisplayMensagem('Informe o tipo de teste.');
                        validado = false; 
                        return validado;
                    }    

                    return validado; 
                                


            }, 

            validaCampos(){

                let validado;
                validado = true;


                if( this.tpMaquina != '02' &&
                    this.tpMaquina != '03' &&
                    this.tpMaquina != '04' &&
                    this.tpMaquina != '05' &&
                    this.tpMaquina != '06'  
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
                    this.tpMaquina == '05' ||
                    this.tpMaquina == '06' ) { 

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



                if (this.tpMaquina== '02' || this.tpMaquina== '03'){ 

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
                        }, 
 
 

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
                                this.testeCqFio.usarioAlteracao = this.resultado.usuarioAlteracao ;     
                            
                            }else{
                                this.testeCqFio.usarioAlteracao = "" ;                       
                            }      

                            if (this.resultado.dataAlteracao != null){
                                this.testeCqFio.dataAlteracao = this.resultado.dataAlteracao ;     
                            
                            }else{
                                this.testeCqFio.dataAlteracao = "" ;                       
                            }   
                            
                            
                            if (this.resultado.usarioInclusao != null){
                                this.testeCqFio.usarioInclusao = this.resultado.usarioInclusao ;     
                            
                            }else{
                                this.testeCqFio.usarioInclusao = "" ;                       
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

                            console.log('zerar aTesteDetalhe ')
                            console.log(this.resultado)
                            console.log(aItens)
 

                            
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

                                    for (let m = 0; m < aItens.length; m++) {   

                                        this.nInd++;
                                       
                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                        this.testeItemTempAux.id=          aItens[m].id; 
                                        this.testeItemTempAux.idfil=       aItens[m].idfil;
                                        this.testeItemTempAux.idPai=       aItens[m].idPai;
                                        this.testeItemTempAux.seqProva=    aItens[m].seqProva; 
                                        this.testeItemTempAux.numeroFusos= aItens[m].numeroFusos;
                                        this.testeItemTempAux.peso=        aItens[m].peso;
                                        this.testeItemTempAux.titulo=      aItens[m].titulo;  
                                        this.testeItemTempAux.ind =        this.nInd; 

                                        this.aTesteDetalhe.push(this.testeItemTempAux ); 

                                    }  

                                    
                                    if(this.nInd < 10){

                                        for (let m = this.nInd  ; m < 10; m++) {   

                                            this.nInd++;

                                            this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                            this.testeItemTempAux.id=          this.nInd; 
                                            this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                            this.testeItemTempAux.idPai=       '99';
                                            this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0'); 
                                            this.testeItemTempAux.numeroFusos= 0;
                                            this.testeItemTempAux.peso=        0;
                                            this.testeItemTempAux.titulo=      0;  
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
                    this.exibeDetalhe = true;
                    

                    //this.vTemp = '.';
                    //this.vTemp = ' ';


                    //console.log('populaGridInclusao 00000000')

                    if (this.validaCampos() == true){


                           //console.log('populaGridInclusao 1111111111')


                            if(this.tpMaquina=='04' || this.tpMaquina=='06' || this.tpMaquina=='05'){ 
                            
                                    //console.log('populaGridInclusao 22222222222222')
                                    for (let m = 0  ; m < 10; m++) {     
        
                                        this.nInd++;
                                        this.testeItemTempAux = {}

                                        this.testeItemTempAux = Object.assign({},this.testeCqFioDetalheInicial);   

                                        this.testeItemTempAux.id=          this.nInd; 
                                        this.testeItemTempAux.idfil=       this.$store.state.usuarioSistema.idfil;
                                        this.testeItemTempAux.idPai=       0;
                                        this.testeItemTempAux.seqProva=    this.nInd.toString().padStart(2, '0');
                                        this.testeItemTempAux.numeroFusos= 0;
                                        this.testeItemTempAux.peso=        0;
                                        this.testeItemTempAux.titulo=      0;  
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
                                        this.testeItemTempAux.numeroFusos= 0;
                                        this.testeItemTempAux.peso=        0;
                                        this.testeItemTempAux.titulo=      0;  
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
            calculaTitulo(indic, evento){

                  indic.peso =  evento.target.value ; 
                  if (this.tpMaquina== '02' || this.tpMaquina== '03'){ 
                  
                        if (this.testeCqFio.dobradora == 'M'  ){
                            indic.titulo = (12 * 0.59) / parseFloat(parseFloat(indic.peso).toFixed(2)); 
                        }else{
                            indic.titulo = (10.9728 * 0.59) / parseFloat(parseFloat(indic.peso).toFixed(2)); 
                        }

                        indic.titulo = parseFloat(parseFloat(indic.titulo).toFixed(3))

                  }

                  

                  
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
  
                   
                }  
            }, 
 
 

       
        async submitForm() {   

                //console.log("submitForm");

    /*
                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

 
 
                // Obtém a data atual
                let dataAtual = new Date();

                // Obtém as partes individuais da data atual
                let ano = dataAtual.getFullYear();
                let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
                let dia = ("0" + dataAtual.getDate()).slice(-2);

                // Formata a data atual como "yyyy-mm-dd"
                let dataAtualFormatada = `${ano}-${mes}-${dia}`; 

                 if( this.testeCqFio.dataTeste > dataAtualFormatada ){
                    this.apiDisplayMensagem('Data do movimento inválida.' ) 
                    return false; 
                 } 
                 
                dataAtual.setDate(dataAtual.getDate() - 30); 
                 
                const dataTesteDate = new Date(this.testeCqFio.dataTeste); 
                dataTesteDate.setHours(0, 0, 0, 0);
                dataAtual.setHours(0, 0, 0, 0);

                if( dataTesteDate < dataAtual){
                    this.apiDisplayMensagem('Data do movimento inválida.' ) 
                    return false;                    
                } 

                if(this.validaLado("submit")==false){
                    return false;
                } 

                if(this.validaTurno("submit")==false){
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
                            this.testeCqFio.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                            this.testeCqFio.usarioInclusao = this.$store.state.usuarioSistema.codigo;
                    }else{
                            if (typeof this.testeCqFio.dataInclusao   === "string") {
                                dataInsercao  = this.testeCqFio.dataInclusao ;
                            } else if (this.testeCqFio.dataInclusao  instanceof Date) {
                                dataInsercao  = this.$moment(this.testeCqFio.dataInclusao.format("DD/MM/YYYY")  )
                            } 

                            dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    }                     

                    
                    if (this.tipoOperacao=="I") {   

                        let url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/insert` 
                       
                        this.testeCqFioDAO =
                            {
                                idfil:this.$store.state.usuarioSistema.idfil,  
                                dataTeste:this.$moment(this.testeCqFio.dataTeste).format("DD/MM/YYYY"),    
                                mistura:this.testeCqFio.mistura  , 
                                seq:this.testeCqFio.seq + ' '  ,   
                                maquina:this.testeCqFio.codigoMaquina ,	 
                                localFisico:this.testeCqFio.localFisico ,	 
                                turno:this.testeCqFio.turno , 
                                operador:this.testeCqFio.operador ,     
                                lado:this.testeCqFio.ladoMaquina , 
                                horaMovimento: parseInt(this.testeCqFio.horaMovimento.substring(0,2) + this.testeCqFio.horaMovimento.substring(3,5))     , 
                                observacao:this.testeCqFio.observacao  , 
                                usarioInclusao:this.testeCqFio.usarioInclusao  , 
                                usarioAlteracao:this.testeCqFio.usarioAlteracao, 
                                dataInclusao:  dataInsercao,
                                dataAlteracao:  dataInsercao                               
                                
                            }   

                            //console.log(this.testeCqFioDAO);
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

                                       let url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/update` 
                                
                                       this.testeCqFioDAO =
                                        {
                                             
                                            idfil:this.$store.state.usuarioSistema.idfil,  
                                            dataTeste:this.$moment(this.testeCqFio.dataTeste).format("DD/MM/YYYY"),    
                                            mistura:this.testeCqFio.mistura  , 
                                            seq:this.testeCqFio.seq + ' '  ,   
                                            maquina:this.testeCqFio.codigoMaquina ,	 
                                            localFisico:this.testeCqFio.localFisico ,	 
                                            turno:this.testeCqFio.turno , 
                                            operador:this.testeCqFio.operador ,     
                                            lado:this.testeCqFio.ladoMaquina , 
                                            horaMovimento: parseInt(this.testeCqFio.horaMovimento.substring(0,2) + this.testeCqFio.horaMovimento.substring(3,5))     ,   
                                            observacao:this.testeCqFio.observacao  ,  
                                            usarioInclusao:this.testeCqFio.usarioInclusao  ,  
                                            usarioAlteracao:  this.$store.state.usuarioSistema.codigo,
                                            dataInclusao:  this.testeCqFio.dataInclusao,
                                            dataAlteracao:  dataAlteracao,                              
                                            
                                        }  

                                    
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
 */
        },        


       } ,
        async created(){    

                this.scrollToTop();


                //this.vTemp = '.';
               
                this.populaTipoMaquina();  
                this.populaTipoTesteCQFio();

                

                


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
 
           

                } else{
                    this.tpMaquina = '01';
                }

                 if(this.$store.state.tipoDispositivo == 'tablet' ||  this.$store.state.tipoDispositivo == 'mobile'){
                    this.larguraGrid= '94%';
                    this.margemEsquerdaGrid='3%';

                 }else{
                    this.larguraGrid= '40%';
                    this.margemEsquerdaGrid='28%';
                 }
                

 

 

        },        

       
       mounted(){ 
            
            this.scrollToTop();
 
       
       },

       

       watch: {
       
            tpMaquina(newValue,oldValue) {

                if(newValue!=oldValue){

                         console.log(newValue) 
                     
                    
                         this.testeCqFio.item = '';
                         this.testeCqFio.descItem = '';

                   
                
            
                }
            }
       }

      

   }

   </script>

  