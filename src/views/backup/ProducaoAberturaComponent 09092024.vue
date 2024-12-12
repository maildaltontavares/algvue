<template>

    <v-form  ref="formulario" @submit.stop.prevent="submitForm" style=" background-color:white;height:100% "  >     
        
        <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
            <div  style="width:100%"  >   
                    
                    

                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >  
                    
                    
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Producao Abertura</b></p>                               
                            </div> 
                       </div>        
              

                   </div>         
                   
                   <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" > 


                              

                                <v-text-field
                                        v-model.trim="this.producaoAbertura.mistura" 
                                        id="mistura"
                                        label="Mistura" 
                                        ref="mistura"  
                                        style=" width: 30%;min-width: 180px; "  
                                        class="espacoEntreComponentes"  
                                        variant="outlined"
                                        bg-color="white"  
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        maxlength="10"  
                                        @blur="buscaByChave"
                                        type="number"
                                        :disabled="this.misturaDesabilitado"
                                     

                                    
                                ></v-text-field>  

                        


                        

                                <v-text-field
                                        v-model.trim="this.producaoAbertura.seq" 
                                        id="sequencia"
                                        label="Sequencia" 
                                        ref="sequencia"  
                                        style=" width: 30%;min-width: 180px; "  
                                        class="espacoEntreComponentes"  
                                        variant="outlined"
                                        bg-color="white"  
                                        inputmode="numeric"
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        maxlength="3"   
                                        @blur="buscaByChave" 
                                        type="number"
                                        :disabled="this.seqDesabilitado"  
                                ></v-text-field>  

                           

                      
                    </div>

                    <!--  DADOS PRODUCAO -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    <!--  DADOS QUALIDADE -->
                    
                    <div class="d-flex justify-content-end " style="margin-top: 25px;border-radius:15px 15px 15px 15px;" >                                    
                        <div style="width:100%;background-color:#c0c0c1; height:50px  ">
                            <p  class="text-white text-center  mt-3  " style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Dados de Produção</b></p>                               
                        </div>  
                    </div>     

                    <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" >  
                                
                                        
                                        <v-text-field
                                            
                                            v-model.trim="this.producaoAbertura.dataMovimento" 
                                            id="dataMovimento"
                                            label="Data Movimento" 
                                            ref="dataMovimento"    
                                            style=" width: 10%;min-width: 180px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="dataMovimentoDesabilitado"  
                                            type="date"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>       
                              
                                        
                                        <v-text-field
                                            
                                            v-model.trim="this.producaoAbertura.horaMovimento" 
                                            id="horaMovimento"
                                            label="Hora" 
                                            ref="horaMovimento"    
                                            style=" width: 10%;min-width: 180px; "  
                                            class="espacoEntreComponentes" 
                                            variant="outlined"
                                            bg-color="white"
                                            :disabled="horaMovimentoDesabilitado"  
                                            type="time"
                                            :rules="[campoRequerido]" 
                                            density="compact"
                                            
                                        ></v-text-field>   
                               

                                    <v-autocomplete
                                        v-model.trim="this.producaoAbertura.turno" 
                                        label="Turno"
                                        :items="turnos"   
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style=" width: 10%;min-width: 180px; "  
                                        class="espacoEntreComponentes" 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact"
                                        @blur="validaTurno()"
                                    
                                        
                                    ></v-autocomplete> 

                              

                            
                                    <div   class="espacoEntreComponentes" style="width: 40%; min-width:350px; "   >   
                                                
                                                <div class="input-group">   
                                                    
                                                    <div class="d-flex  justify-content-start">
                                                        
                                                        <v-text-field
                                                        
                                                            id="operador"
                                                            label="Operador"
                                                            ref="operador"  
                                                            maxlength="5"  
                                                            style=" width: 120px; "
                                                            variant="outlined"
                                                            bg-color="white"
                                                            v-model.trim="this.producaoAbertura.operador" 
                                                            inputmode="numeric" 
                                                            density="compact"
                                                            :rules="[campoRequerido]" 
                                                            @blur="apiPesquisaParam('operadorCpf', this.producaoAbertura.operador, this.producaoAbertura)"
                                                        
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
            
                                                    <div style="   flex-grow: 1;height:43px;"  >    
                                                        <v-text-field
                                                        
                                                            id="nomeOperador"   
                                                            disabled 
                                                            class="limitadorMedia"
                                                            density="compact"
                                                            :rules="[campoRequerido]" 
                                                            v-model.trim="this.producaoAbertura.nomeOperador"
                                                            style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                        ></v-text-field>   
                                                    </div>  
            
                                                </div>
            
                                    </div>     




                    </div>
                    <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%;background-color:white" > 

                           

                                <v-autocomplete
                                    label="Tipo Máquina"
                                    :items="tipoMaquinaItens"      
                                    item-title="descricao" 
                                    item-value="codigo"
                                    v-model.trim="this.producaoAbertura.tipoMaquina"   
                                    variant="outlined"
                                    style=" width: 10%;min-width: 180px; "  
                                    class="espacoEntreComponentes" 
                                    bg-color="white"   
                                    density="compact"
                                    :rules="[campoRequerido]"  
                                    disabled
                                ></v-autocomplete>  

                           
                                        
                                <v-text-field
                                    v-model.trim="this.producaoAbertura.localFisico"   
                                    id="localFisico"
                                    label="Local Físico"
                                    ref="localFisico"  
                                    maxlength="3"                                            
                                    style=" width: 10%;min-width: 180px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    :rules="[campoRequerido]"  
                                    :disabled="localFisicoDesabilitado"
                                    @blur="buscaMaquinaPorLocal"
                                    
                                ></v-text-field>                                  
                                     
                           
                            
                            
                            
                            <div   class="espacoEntreComponentes" style="width: 40%; min-width: 350px; "   >   
                                        
                                        <div class="input-group">   
                                            
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                 
                                                    id="maquina"
                                                    label="Maquina"
                                                    ref="maquina"  
                                                    maxlength="6"  
                                                    style=" width: 120px; "
                                                    variant="outlined"
                                                    bg-color="white"
                                                    v-model.trim="this.producaoAbertura.maquina" 
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
    
                                            <div style="   flex-grow: 1;height:43px;"  > 
                                                <v-text-field
                                                 
                                                    id="descMaquina"   
                                                    disabled 
                                                    class="limitadorMedia"
                                                    density="compact"
                                                    :rules="[campoRequerido]" 
                                                    v-model.trim="this.producaoAbertura.descMaquina"
                                                    style="background-color:rgb(247, 247, 247); color:black;height:43px;border-radius:0px 5px 5px 0px;  "
                                                ></v-text-field>   
                                            </div>  
    
                                        </div>
    
                            </div>    

                                    <v-autocomplete
                                        v-model.trim="this.producaoAbertura.lado" 
                                        label="Lado" 
                                        :items="lados"     
                                        item-title="nome" 
                                        item-value="codigo"
                                        variant="outlined"
                                        style=" width: 10%;min-width: 180px; "  
                                        class="espacoEntreComponentes" 
                                        bg-color="white"      
                                        :rules="[campoRequerido]" 
                                        density="compact" 
                                        @blur="validaLado"
                                    ></v-autocomplete>  
                  

                    </div>  


                     

 
                            


                        
 

                        <div class="flex-linha "  style="margin-left:6%;width:90%;margin-top: 1%; ">                            

                        
                                                
                                <v-text-field
                                    v-model.trim="this.producaoAbertura.observacao"
                                    id="obs"
                                    label="Observacao" 
                                    ref="obs"                               
                                    style=" width: 100%;min-width: 180px; "  
                                    class="espacoEntreComponentes" 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact" 
                                    
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


    <PesquisaOperador @setaPesquisa="setaPesquisa($event)"></PesquisaOperador>
    <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>     
</template>
 
<script> 

   
   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
  
    
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'   
   import MensagemMobile  from '../../components/MensagemMobileComponent.vue'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
   import SimNao from '@/requires/SimNao.vue' 
   import PesquisaOperador from '@/requires/PesquisaOperador';
   
  
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'ProducaoAberturaComponent',
 
        components: {  PesquisaOperador, MensagemMobile,SimNao  },
        
 
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
        
        props: {  
               misturaProps: {
                    type : String,
                    required: true,
          
                    },
                seqProps: {
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

                       
           
            producaoAbertura:{ 
                idfil:'' ,
              
                mistura:'' ,	 
                seq:'' ,	 
                idAutomatico:'' ,
                maquina:'' ,	 
                localFisico:'' ,	 
                turno:'' , 
                operador:'' ,                
                dataMovimento:'' ,
                observacao:'' , 
                lado:'' , 
                horaMovimento:'' , 
                dataInclusao:'' , 
                usarioInclusao:'' ,	                 
                dataAlteracao:'' ,
                usarioAlteracao:'',
                tipoMaquina:'' ,
                descMaquina:'',
                nomeOperador:'',
            }, 


            producaoAberturaInicial:{
                idfil:'' ,
         
                mistura:'' ,	 
                seq:'' ,	 
                idAutomatico:'' ,
                maquina:'' ,	 
                localFisico:'' ,	 
                turno:'' , 
                operador:'' ,                
                dataMovimento:'' ,
                observacao:'' , 
                lado:'' , 
                horaMovimento:'' , 
                dataInclusao:'' , 
                usarioInclusao:'' ,	                 
                dataAlteracao:'' ,
                usarioAlteracao:'',
                tipoMaquina:'' ,
                descMaquina:'',
                nomeOperador:'',
            },


            producaoAberturaDAO:{
                idfil:'' ,
             
                mistura:'' ,	 
                seq:'' ,	 
                idAutomatico:'' ,
                maquina:'' ,	 
                localFisico:'' ,	 
                turno:'' , 
                operador:'' ,                
                dataMovimento:'' ,
                observacao:'' , 
                lado:'' , 
                horaMovimento:'' , 
                dataInclusao:'' , 
                usarioInclusao:'' ,	                 
                dataAlteracao:'' ,
                usarioAlteracao:'',
                tipoMaquina:'' ,
                descMaquina:'',
                nomeOperador:'',
            },           

            
            misturaDesabilitado:false,	 	 
            seqDesabilitado:false,	  
            idAutomaticoDesabilitado:false,	 
            maquinaDesabilitado:false,	 	 
            localFisicoDesabilitado:false,	  
            turnoDesabilitado:false,	 
            operadorDesabilitado:false,	             
            dataMovimentoDesabilitado:false,	 
            observacaoDesabilitado:false,	 
            ladoDesabilitado:false,	 
            horaMovimentoDesabilitado:false,	 
            tipoMaquinaDesabilitado:false,	 
            
            
            tipoMaquinaItens: [],
            tipoMaquinaTemp: {    
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
            ladoMaquina:""   , 

            hr_ini_ta:0,
            hr_fim_ta:0,
            hr_ini_tb:0,
            hr_fim_tb:0,
            hr_ini_tc:0,
            hr_fim_tc:0,            
            
          
            

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        
        methods:{ 

             
            navegarParaLogin(){this.$router.push({name:'login'  })}, 
 
            async exclusao() {  


                if (this.producaoAbertura.mistura==null || this.producaoAbertura.mistura=='' || 
                this.producaoAbertura.seq==null || this.producaoAbertura.seq==''  )
                {  
                    this.apiDisplayMensagem('Informe uma mistura válida' ) 
                    return false;
                }    


                /// EXCLUSAO ////

                let url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/delete/${this.$store.state.usuarioSistema.idfil}/${this.producaoAbertura.mistura}/${this.producaoAbertura.seq}`    

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

            

                    if (e.tipo == "operador") {
                        this.producaoAbertura.operador =  e.obj.codigo;
                        this.producaoAbertura.nomeOperador = e.obj.nome;
                    }


            },  
            
 
 
            async buscaMaquinaPorLocal(){   
            
                    let retorno;

                    this.producaoAbertura.localFisico = this.producaoAbertura.localFisico.padStart(3, '0'); 

                    let url =  `${process.env.VUE_APP_BASE_URL_CPF}/maquina/filial/${this.$store.state.usuarioSistema.idfil}/local/${this.producaoAbertura.localFisico}/tpMaq/01`; 
 
                    //this.producaoAbertura.lado = "";
                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                        this.resultado = response.data;   

                        //console.log('Maquinas this.resultado');
                        //console.log(this.resultado); 

                        if (this.resultado.codigo != null && this.resultado.codigo != ''){
                            
                            this.producaoAbertura.maquina =  this.resultado.codigo ;   
                            this.producaoAbertura.descMaquina =  this.resultado.nome ;   
 
                            if(this.resultado.lado=="U" || this.resultado.lado == null || this.resultado.lado == ''){  
                                //this.producaoAbertura.lado = "U"; 
                                this.ladoMaquina = "U"; 
                   
                            } else if (this.resultado.lado=="D"  ){  
                                //this.producaoAbertura.lado = "";
                                this.ladoMaquina = "D"; 
                            }   
 
                        
                        }else{
                            
                            this.producaoAbertura.maquina = "" ;  
                            this.producaoAbertura.descMaquina = "" ;  
                            //this.lados = [{codigo:" ", nome:" "} ]; 
                            this.producaoAbertura.lado = "";
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

            validaLado(param){


                if(this.producaoAbertura.maquina!=""){
                    if(this.ladoMaquina!=""){
                        if(this.producaoAbertura.lado!=""){

                            if(this.ladoMaquina=="U" && this.producaoAbertura.lado!="U"){
                                this.apiDisplayMensagem("Lado inválido para esta máquina");  
                                return false;
                            }

                            if(this.ladoMaquina=="D" && this.producaoAbertura.lado=="U"){
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
            async buscaByChave(){ 

                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = ''     

                    const resposta = await this.validaChave(); 

                 
                    if ( resposta === true  ){  
                            
                            console.log("OK")
                         
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

                    if (!(this.producaoAbertura.mistura==null || this.producaoAbertura.mistura=='')){   
                        this.producaoAbertura.mistura = this.producaoAbertura.mistura.padStart(10, '0');
                    }else{
                        this.producaoAbertura.mistura =='' 
                        validado = false;   
                        return validado;
                    }

                    if (!(this.producaoAbertura.seq==null ||  this.producaoAbertura.seq=='')){   
                        this.producaoAbertura.seq = this.producaoAbertura.seq.padStart(2, '0')  ;
                    }else{
                        this.producaoAbertura.seq ='' 
                        validado = false;   
                        return validado;
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
                        }  
                        
                        else if(this.acao == 'pesquisar')
                        {
                            this.$router.push( { name: 'producaoaberturapesquisa' } )
                            
                        
                        }
                       
                    }

           }, 
           
 

           resetarForm(){

              

                    if(this.simNaoRetorno == 'S'){

                        this.producaoAbertura = Object.assign({},this.producaoAberturaInicial);   
                        this.erros= '';
                        this.mensagemSucesso= '';
                        this. mensagemErro= ''; 
                        this.haErros= false;      
                        this.haSucesso= false;
                        this.tipoOperacao = 'I';  
                        this.tipoMaquina = '01'
                        this.ladoMaquina = ""; 
                        
                        this.configuraCampos('I' )  ;
                        this.scrollToTop();


                    }  

            },           
 
 
            async populaForm(){   

                    let url;
                    let dataFormatada;
                    let horaFormatada;
                    this.resultado = "";

                    this.msgProcessamento = "Processando" ;
                    this.apiProcessamento()  ;  

                    url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/producao/${this.$store.state.usuarioSistema.idfil}/${this.producaoAbertura.mistura}/${this.producaoAbertura.seq}`  
                    //console.log(url)

                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {

                            //console.log("PopulaForm");
                            this.resultado = response.data;  
                            
                            //console.log(this.resultado); 

                            this.producaoAbertura.tipoMaquina = '01';

                            if (this.resultado.dataMovimento != null){

                                dataFormatada = this.resultado.dataMovimento.split('/').reverse().join('-');
                                this.producaoAbertura.dataMovimento = dataFormatada ;   
                                        
                            }else{
                                this.producaoAbertura.dataMovimento = "" ;                       
                            } 

                            if (this.resultado.horaMovimento != null){  
                                horaFormatada = ("0000" + this.resultado.horaMovimento.toString()).slice(-4) ;  
                                this.producaoAbertura.horaMovimento = horaFormatada.substring(0,2)   + ':' + horaFormatada.substring(2,4);    
                            }else{
                                this.producaoAbertura.horaMovimento        = "" ;                       
                            }                             

                            if (this.resultado.localFisico != null){
                                this.producaoAbertura.localFisico = this.resultado.localFisico; 
                                this.producaoAbertura.maquina =  this.resultado.fkMaquina.codigo ;   
                                this.producaoAbertura.descMaquina =  this.resultado.fkMaquina.nome ;                                   
                                        
                            }else{
                                this.producaoAbertura.localFisico = "" ;   
                                this.producaoAbertura.maquina =  "";   
                                this.producaoAbertura.descMaquina = "" ;                        
                            }  


                            if (this.resultado.operador != null){
                                this.producaoAbertura.operador = this.resultado.operador;
                                        
                            }else{
                                this.producaoAbertura.operador = '' ;                       
                            }          
                            
                            if (this.resultado.lado != null){
                                this.producaoAbertura.lado = this.resultado.lado;
                                        
                            }else{
                                this.producaoAbertura.lado = "" ;                       
                            }          
                            
                            if (this.resultado.turno != null){
                                this.producaoAbertura.turno = this.resultado.turno;
                                        
                            }else{
                                this.producaoAbertura.turno = "" ;                       
                            }                             


                            if (this.resultado.usuarioAlteracao != null){
                                this.producaoAbertura.usarioAlteracao = this.resultado.usuarioAlteracao ;     
                            
                            }else{
                                this.producaoAbertura.usarioAlteracao = "" ;                       
                            }      

                            if (this.resultado.dataAlteracao != null){
                                this.producaoAbertura.dataAlteracao = this.resultado.dataAlteracao ;     
                            
                            }else{
                                this.producaoAbertura.dataAlteracao = "" ;                       
                            }   
                            
                            
                            if (this.resultado.usarioInclusao != null){
                                this.producaoAbertura.usarioInclusao = this.resultado.usarioInclusao ;     
                            
                            }else{
                                this.producaoAbertura.usarioInclusao = "" ;                       
                            }      

                            if (this.resultado.dataInclusao != null){
                                this.producaoAbertura.dataInclusao = this.resultado.dataInclusao ;     
                            
                            }else{
                                this.producaoAbertura.dataInclusao = "" ;                       
                            }     


                            if (this.resultado.observacao != null){
                                this.producaoAbertura.observacao = this.resultado.observacao;
                                        
                            }else{
                                this.producaoAbertura.observacao = "" ;                       
                            }  

                            if(this.tipoOperacao == 'I' &&   this.resultado.localFisico!=''  && this.resultado.localFisico!=null ){  
                                  this.tipoOperacao = 'A';    
                            }  

                            if(this.resultado.localFisico==''  || this.resultado.localFisico==null ){ 
                                this.configuraCampos('I' )  ;
                            }else{ 
                                this.apiPesquisaParam('operadorCpf', this.producaoAbertura.operador  , this.producaoAbertura) 
                                this.configuraCampos('A' )  ; 
                                this.buscaMaquinaPorLocal();
                            }   


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

 

 
            configuraCampos(oper ){   

                if(oper=='I'){ 

                    this.misturaDesabilitado = false;	 
                    this.seqDesabilitado= false;
                     
                   

                }else if(oper=='A' || oper=='E'){


                    this.misturaDesabilitado = true;	 
                    this.seqDesabilitado= true;
 
  
                   
                }  
            }, 
 

        validaTurno(param){
            
            let nTurno; 

            if (this.producaoAbertura.horaMovimento==null || 
                this.producaoAbertura.horaMovimento==''   ||
                this.producaoAbertura.turno==null || 
                this.producaoAbertura.turno==''   
            ){   
                if(param=="submit"){
                    this.apiDisplayMensagem("Turno inválido." )  
                }
                return false
            }

            nTurno = parseInt(this.producaoAbertura.horaMovimento.substring(0,2) + this.producaoAbertura.horaMovimento.substring(3,5)) ;
            
            if(nTurno >= this.hr_ini_ta && nTurno < this.hr_fim_ta){ 

                if(this.producaoAbertura.turno!="A"){
                    this.apiDisplayMensagem("Turno inválido para a hora informada." ) 
                    return false
                }

            } else if(nTurno >= this.hr_ini_tb && nTurno < this.hr_fim_tb){ 

                if(this.producaoAbertura.turno!="B"){
                    this.apiDisplayMensagem("Turno inválido para a hora informada.") 
                    return false
                }

            }else{
                
                if(this.producaoAbertura.turno!="C"){
                    this.apiDisplayMensagem("Turno inválido para a hora informada.") 
                    return false
                }
            }


        },
        async submitForm() {   

                //console.log("submitForm");

    
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

                 if( this.producaoAbertura.dataMovimento > dataAtualFormatada ){
                    this.apiDisplayMensagem('Data do movimento inválida.' ) 
                    return false; 
                 } 
                 
                dataAtual.setDate(dataAtual.getDate() - 30); 
                 
                const movimentoDate = new Date(this.producaoAbertura.dataMovimento); 
                movimentoDate.setHours(0, 0, 0, 0);
                dataAtual.setHours(0, 0, 0, 0);

                if( movimentoDate < dataAtual){
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
                            this.producaoAbertura.dataInclusao  = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                            this.producaoAbertura.usarioInclusao = this.$store.state.usuarioSistema.codigo;
                    }else{
                            if (typeof this.producaoAbertura.dataInclusao   === "string") {
                                dataInsercao  = this.producaoAbertura.dataInclusao ;
                            } else if (this.producaoAbertura.dataInclusao  instanceof Date) {
                                dataInsercao  = this.$moment(this.producaoAbertura.dataInclusao.format("DD/MM/YYYY")  )
                            } 

                            dataAlteracao = this.$moment(dataAtual).format("DD/MM/YYYY") ;
                    }                     

                    
                    if (this.tipoOperacao=="I") {   

                        let url = `${process.env.VUE_APP_BASE_URL}/producaoabertura/insert` 
                       
                        this.producaoAberturaDAO =
                            {
                                idfil:this.$store.state.usuarioSistema.idfil,  
                                dataMovimento:this.$moment(this.producaoAbertura.dataMovimento).format("DD/MM/YYYY"),    
                                mistura:this.producaoAbertura.mistura  , 
                                seq:this.producaoAbertura.seq + ' '  ,   
                                maquina:this.producaoAbertura.maquina ,	 
                                localFisico:this.producaoAbertura.localFisico ,	 
                                turno:this.producaoAbertura.turno , 
                                operador:this.producaoAbertura.operador ,     
                                lado:this.producaoAbertura.lado , 
                                horaMovimento: parseInt(this.producaoAbertura.horaMovimento.substring(0,2) + this.producaoAbertura.horaMovimento.substring(3,5))     , 
                                observacao:this.producaoAbertura.observacao  , 
                                usarioInclusao:this.producaoAbertura.usarioInclusao  , 
                                usarioAlteracao:this.producaoAbertura.usarioAlteracao, 
                                dataInclusao:  dataInsercao,
                                dataAlteracao:  dataInsercao                               
                                
                            }   

                            //console.log(this.producaoAberturaDAO);
                            await this.axios.post(
                                url,
                                JSON.stringify(this.producaoAberturaDAO),
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
                                
                                       this.producaoAberturaDAO =
                                        {
                                             
                                            idfil:this.$store.state.usuarioSistema.idfil,  
                                            dataMovimento:this.$moment(this.producaoAbertura.dataMovimento).format("DD/MM/YYYY"),    
                                            mistura:this.producaoAbertura.mistura  , 
                                            seq:this.producaoAbertura.seq + ' '  ,   
                                            maquina:this.producaoAbertura.maquina ,	 
                                            localFisico:this.producaoAbertura.localFisico ,	 
                                            turno:this.producaoAbertura.turno , 
                                            operador:this.producaoAbertura.operador ,     
                                            lado:this.producaoAbertura.lado , 
                                            horaMovimento: parseInt(this.producaoAbertura.horaMovimento.substring(0,2) + this.producaoAbertura.horaMovimento.substring(3,5))     ,   
                                            observacao:this.producaoAbertura.observacao  ,  
                                            usarioInclusao:this.producaoAbertura.usarioInclusao  ,  
                                            usarioAlteracao:  this.$store.state.usuarioSistema.codigo,
                                            dataInclusao:  this.producaoAbertura.dataInclusao,
                                            dataAlteracao:  dataAlteracao,                              
                                            
                                        }  

                                    
                                        await this.axios.put(
                                            url,
                                            JSON.stringify(this.producaoAberturaDAO),
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
               
                this.populaTipoMaquina();  

                this.producaoAbertura.tipoMaquina = '01';


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

                //console.log(this.tipoOperacao);

                if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
  
                     
                    this.producaoAbertura.mistura = this.misturaProps;  
                    this.producaoAbertura.seq    =  this.seqProps.toString().trim();   

                    //this.teste.item     = this.itemProps.toString().trim();  
 
                    const resposta = await this.populaForm();     

                    if (!(resposta === true) ){
                        console.log('Erro de cadastro BuscaChave' );      
                    } 
 
           

                } 


                let url =  `${process.env.VUE_APP_BASE_URL_CPF}/turno/horariosturnos/${this.$store.state.usuarioSistema.idfil}`; 
 
 
                await this.axios.get(url,this.apiTokenHeader())
                .then(response => {        

                    this.resultado = response.data;   
 


                    response.data.forEach(element => {

                        //console.log(element);
                        //console.log(element.NHINITA);
                        //console.log(element.NHFIMTA); 
    
                        this.hr_ini_ta = element.NHINITA;
                        this.hr_fim_ta = element.NHFIMTA; 
                        this.hr_ini_tb = element.NHINITB;
                        this.hr_fim_tb = element.NHFIMTB;    
                        this.hr_ini_tc = element.NHINITC;
                        this.hr_fim_tc = element.NHFIMTC;   
 
                    });

 
                }).catch(error => { 

                    this.hr_ini_ta = 0;
                    this.hr_fim_ta = 0;

                    this.hr_ini_tb = 0;
                    this.hr_fim_tb = 0;      
                    
                    this.hr_ini_tc = 0;
                    this.hr_fim_tc = 0;   

                    console.log("Erro: ", error.response.data);
                    this.apiDisplayMensagem(error.response.data ) ;

                });



 

        },        

       
       mounted(){ 
            
            this.scrollToTop();
 
       
       }
       

   }

   </script>

  