<template  >  
 

 <v-form  ref="formulario" @submit.stop.prevent="submitForm" >    

    <v-container>
        <div class="d-flex justify-content-center" > 
            <!-- style="background-color:rgb(240, 237, 232); "    -->
            <v-card rounded="lg" class=" elevation-12" 
                    
                    :style="{  minWidth: this.$store.state.larguraCard,
                            height:  this.$store.state.alturaCard }" 
                    
                    >  

                <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                 
                    <div>                         
                        <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Usuários</b></p>                               
                    </div>
                </div>  
                
                <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 5%;">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-text-field
                            v-model.number="usuario.codigo"
                            label="Código"
                            hide-details="auto"
                            id="codigoUsuario" 
                            ref="codigoUsuario"  
                            @blur="buscaByChave"
                            style="min-width: 250px"  
                            variant="outlined"
                            bg-color="white"  
                            type="number"
                            inputmode="numeric"
                             
                            :disabled="usuarioCodigoDesabilitado"
                            append-inner-icon="mdi-numeric"   
                            
                        ></v-text-field>

                    </div>   
                </div>    <!--  FIM LINHA 0003 -->       
                
       <!--

                <div class="flex-linha"  style="margin-left:2%;width:95%; ">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-container>
                            <v-text-field    
                                v-model = "value"                            
                                v-mask="'#.###,##'"
                                label="Valor formatado"
                                prefix=""                                   
                                inputmode="decimal"                                
                            ></v-text-field>
                            <p>Valor digitado:  </p>
                        </v-container>   
                        
                    </div>   
                </div>     FIM LINHA 0003 -->      

<!--
                <div class="flex-linha"  style="margin-left:2%;width:95%; ">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-container> 
                            <label for="rpmCAR" class="col-form-label label_cabecalho">Decimal</label> 
                            <money3 class="form-control text-end form-control-sm" 
                                style="height:55px" 
                                  v-model="value"  v-bind="config_3d"  >
                            </money3>
                        </v-container>   
                        
                    </div>   
                </div>      FIM LINHA 0003 -->       
                
                
<!--
                <div class="flex-linha"  style="margin-left:2%;width:95%; ">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-container> 
                            <label for="rpmCAR" class="col-form-label label_cabecalho">Decimal</label> 
                            <money3 class="form-control text-end form-control-sm" 
                                style="height:55px" 
                                v-model="value"  v-bind="config_3d"  >
                            </money3>
                        </v-container>   
                        
                    </div>   
                    </div>     FIM LINHA 0003 -->                     


                <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">    

                    <div  style=" width:99%;height:2px;background-color:black"   >   

                    </div>
                </div> 

                <div class="d-flex justify-content-end " style=" margin-left:5%; width:90%; margin-top: 25px;border-radius:15px 15px 15px 15px;">                                    
                        <div style="width:100%;background-color:#c0c0c1;border-radius:15px 15px 15px 15px;  height:45px  ">
                            <p  class="text-white text-center  mt-3 pe-5" style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><span><b>Dados do usuário</b></span></p>                               
                        </div>                                               
                </div>   


                <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-text-field
                            v-model="usuario.nome"
                            label="Nome"
                            hide-details="auto"                            
                            id="nome" 
                            maxlength="80"                                        
                            ref="nome"      
                            style="min-width: 250px;"  
                            variant="outlined"
                            bg-color="white"  
                            append-inner-icon="mdi-alphabetical"  
                            :rules="[nomeRules.required]"
                            ></v-text-field>

                    </div>   
                </div>    <!--  FIM LINHA 0003 -->     

                <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">    

                    <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                        <v-text-field
                            v-model="usuario.email"
                            label="Email"
                            placeholder="maria@santanatextiles.com"
                            type="email"
                            id="email"  
                            maxlength="100"                                        
                            ref="email"   
                            style="min-width: 250px;"  
                            variant="outlined"
                            bg-color="white"  
                            append-inner-icon="mdi-email"  
                            :rules="[emailRules.required]"            
                        ></v-text-field>

                    </div>   
                </div>    <!--  FIM LINHA 0003 -->     

       
                
                 
            </v-card>
        </div>
    </v-container>  

    <v-container> 

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

                        <div class="col-3 div_rodape d-flex justify-content-end" >

                            <!--
                            <p   style="font-size: 16px;color:white">
                                {{ this.$store.state.tipoDispositivo}}  -     {{ this.$store.state.expandOnHover}} - {{ this.$store.state.rail}}
                            </p>
                        
                            -->

                            <v-btn color="primary" class="botao_rodape" style="min-width: 70px;" accesskey="n" @click="exibeModal('cancelaEdicao','Deseja sair da edição?',['S','N'],'sucesso'  )"><u>N</u>ovo</v-btn>     

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
  
      
  
  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>   

</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   import { required, helpers } from '@vuelidate/validators'    
   import SimNao from '@/requires/SimNao.vue'
   //import { Money3Component } from 'v-money3';
  

   //import  vuetifyMoney  from 'vuetify-money';
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'
   import MensagemMobile  from '../components/MensagemMobileComponent.vue'

    export default {


            //   components: {    Popper },
        name: 'UsuarioComponent',
        setup: () => (
            { v$: useValidate() }
        ),
        //components: {  SimNao , money3: Money3Component, MensagemMobile },
        components: {  SimNao ,  MensagemMobile },
        validations: {
            usuario: {  

                    ///codigo: { required: helpers.withMessage('Informe o usuario', required) } , 
                    nome: { required: helpers.withMessage('Informe a nome', required) } ,  
                    email: { required: helpers.withMessage('Informe o email', required)}   
            } 

        },          
    
        props: {  
            codigoProps : {
            type: String,
            required: true,
            },                   
            operacao: {
            type : String,
            required: true,
            },
        },          
       mixins: [ApiMixin,ApiMixinSEG],
 
        data: () => ({ 
 
            nomeRules: {
                required : value => !!value || 'Informe o nome do usuário.',
            },
            emailRules: {
                required : value => !!value || 'Informe o email do usuário.',
            },            

            
            value:  '  67.89',
            label: "Código",
            placeholder: " ",
            readonly: false,
            disabled: false,
            outlined: true,
            clearable: true,
            valueWhenIsEmpty: "",
           //tamanhoRodapeTela:0,
            options: {
                locale: "pt-BR",
                prefix: "",
                suffix: "",
                length: 11,
                precision: 0
            }, 




            isValid: true,
            resultado : "",             
            simNaoPergunta: '',
            simNaoBotoes: [],
            simNaoRetorno: '',
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false, 
            simNaoTipo: 'sucesso',
            tipoOperacao:'A', 
            UsuarioTemp: [],  
            
            usuario : {    
                 codigo:  '',
                 nome: ''  ,
                 filial: '',
                 email : ''
                 
            },    

            usuarioInicial : {    
                 codigo:  '',
                 nome: ''  ,
                 filial: '',
                 email : ''
                 
            },  
            usuarioCodigoDesabilitado:false              
            
                            

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

  
        methods:{ 
          
            async submitForm() {   

                //console.log("submitForm");

                this.haErros = false
                this.haSucesso = false  
                this.mensagemSucesso = ''
                this.mensagemErro = '' 

                this.validacao = await this.$refs.formulario.validate(); 
                if (!this.validacao.valid) {
                    this.apiDisplayMensagem('Preencha os campos com críticas.');
                    this.haErros = true;
                    return;
                } else { 

                    let url = `${process.env.VUE_APP_BASE_URL}/usuarioseg` 

                    
                    if (this.tipoOperacao=="I") {   
                       

                        this.usuarioDAO =
                            {
                                "idUsuario":null,                            
                                "filial": '',
                                "nome": this.usuario.nome,
                                "email": this.usuario.email  

                            }   

                            console.log(this.usuarioDAO);
                            await this.axios.post(
                                url,
                                JSON.stringify(this.usuarioDAO),
                                this.apiTokenHeader({ "Content-Type": "application/json" })
                            )
                            .then(response => {
                             
                                this.apiDisplayMensagemSucesso('Código ' + response.data  + ' inserido com sucesso.' ) 
                                this.usuario.codigo= JSON.stringify(response.data);   
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

                                if (this.tipoOperacao == 'A'   ) { 

                                 
                                
                                        this.usuarioDAO =
                                        {
                                            "idUsuario": this.usuario.codigo,                          
                                            "filial": '',
                                            "nome": this.usuario.nome,
                                            "email": this.usuario.email  

                                        }   

                                        console.log(this.usuarioDAO);
                                    
                                        await this.axios.put(
                                            url,
                                            JSON.stringify(this.usuarioDAO),
                                            this.apiTokenHeader({ "Content-Type": "application/json" })
                                        )
                                        .then(response => {   



                                            this.apiDisplayMensagemSucesso('Código ' + response.data  + ' alterado com sucesso.' ) 
                                            console.log(this.haSucesso);
                                            console.log(this.mensagemSucesso);                                            

                                        
                                        })
                                        .catch(error => { 

                                          
                                            console.log("Erro: ", error.response.data);
                                            //this.haErros = true
                                            //this.mensagemErro = error.response.data
                                            this.apiDisplayMensagem(error.response.data ) 
                                        });
                                }  

                            }

                }  

                },
            resetarForm(){

                //console.log('')  

                if(this.simNaoRetorno == 'S'){

                    this.usuario = Object.assign({},this.usuarioInicial); 
                    this.v$.$reset(); 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this.mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';    
                    this.configuraCampos('I' )  ; 
                    this.usuario.codigo='';
                    this.$refs.codigoUsuario.focus();  
                    

                }  

            },
            configuraCampos(oper ){
 
                if(oper=='I'){ 
                    this.usuarioCodigoDesabilitado=false; 
                    this.$refs.codigoUsuario.focus();   

                }else if(oper=='A' || oper=='E'){
                    this.usuarioCodigoDesabilitado=true;
                    this.$refs.nome.focus();   
                }    

            },
            async populaForm(){   

                
                console.log("PopulaForm"); 
                
                this.resultado = ""; 
                let retornoPopForm=false;   
                let url = `${process.env.VUE_APP_BASE_URL}/usuarioseg/usuario/${this.usuario.codigo}`;

                
                console.log(url)  
                 if (this.usuario.codigo  !='' && this.usuario.codigo!=null && this.usuario.codigo  !=' '    )  {
              
                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                        //console.log("PopulaForm");
                        this.resultado = response.data;     
                        this.usuario.idfil = ''; 

                        if (this.resultado.nome != null){
                            this.usuario.nome = this.resultado.nome ;     
                        
                        }else{
                            this.usuario.nome  = "" ;                       
                        }    

                        if (this.resultado.email != null){
                            this.usuario.email = this.resultado.email ;     
                        
                        }else{
                            this.usuario.email  = "" ;                       
                        }    

                        console.log('this.resultado popula');
                        console.log(this.resultado);
                        //console.log(this.tipoOperacao);

                        if(this.tipoOperacao == 'I' &&  this.resultado!='' ){  
                            this.tipoOperacao = 'A';   
                            this.configuraCampos('A' )  ;
                        }

                        if(this.resultado==''){
                            //this.mensagemErro =  'Registro não existe. Cadastre-o.'; 
                            //this.haErros = true  
                            this.configuraCampos('I' )  ;
                           
                            this.apiDisplayMensagem('Código não encontrado. Para inserir novo usuario deixe o campo código vazio.')
                            this.usuario.codigo = ''
                           
                            this.$refs.codigoUsuario.focus();  
                            
                            
                            
                        }else{

                            this.configuraCampos('A' )  ;
                            this.$refs.nome.focus();  

                        }

                        retornoPopForm = true;
                
                    })
                    .catch(error => {  
                        
                            console.log("Erro: ", error);
                            this.mensagemErro = error; 
                            this.haErros = true ;
                            retornoPopForm = false;
                    }  
                    ); 
               }

              return retornoPopForm;

            },
            
            async buscaByChave(){ 


                    console.log("buscaByChave");


                    this.haErros = false
                    this.haSucesso = false  
                    this.mensagemSucesso = ''
                    this.mensagemErro = ''                
 
                    if (this.usuario.codigo!='' && this.usuario.codigo!=null && this.usuario.codigo!=' ' )
                    {   
                            const resposta = await this.populaForm();     

                            if (!(resposta === true) ){
                                ///this.apiDisplayMensagem("Para novo usuário deixe o campo código em branco."   )  
                                console.log('Erro de cadastro BuscaChave' );      
                            }   
                    
                    } 

                     

            },   

            confirmaAcao(resposta) { 
                
                this.simNaoRetorno = resposta  
                //console.log('this.simNaoRetorno' );

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
                    }
                    else if(this.acao == 'pesquisar')
                    {
                        this.$router.push( { name: 'usuariopesquisa' } )
                     
                    }
                    
                }

               
                
            },               

            async exclusao() { 

                    /// EXCLUSAO ////

                    let url = `${process.env.VUE_APP_BASE_URL}/usuarioseg/usuario/${this.usuario.codigo}`  

                    if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  

                            //await this.axios.delete(
                            //    url,
                            //    JSON.stringify(this.usuarioDAO),
                            //    this.apiTokenHeader({ "Content-Type": "application/json" })
                            //)
                            this.axios.delete(url,this.apiTokenHeader() )
                            .then(response => {
                                this.resetarForm();
                                this.apiDisplayMensagemSucesso('Código ' + response.data  + ' excluido com sucesso.'  )
                            })
                            .catch(error => {
                                console.log("Erro: ", error.response.data);
                                //this.haErros = true
                               // this.mensagemErro = error.response.data
                                this.apiDisplayMensagem(error.response.data ) 
                            }); 

                    }


            },

        navegarParaLogin(){this.$router.push({name:'login'  })}   
        } , 

        async created(){    

                this.scrollToTop();
 
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

                //console.log("created");
                //console.log(this.operacao);

                if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){         
                    this.usuario.codigo=this.codigoProps;  

                    const resposta = await this.populaForm();     

                    if (!(resposta === true) ){
                        console.log('Erro de cadastro BuscaChave' );      
                    } 
               }  
 
        },
        mounted(){ 


            this.scrollToTop();
            this.usuario.codigo=this.codigoProps; 
            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){  
                this.$refs.nome.focus();   
            } else{ 
                this.$refs.codigoUsuario.focus();   
            }  

            
            //this.checkDispositivo();
            /*
            if (this.$store.state.tipoDispositivo== 'desktop'){

                console.log('this.$store.state.pinOff')
                console.log(this.$store.state.pinOff)

                if (this.$store.state.pinOff){
                   this.$store.state.configuracaoTela.tamanhoRodape='99%' 
                   this.tamanhoRodapeTela = '99%'; //this.$store.state.configuracaoTela.tamanhoRodape;
                }else{
                    this.$store.state.configuracaoTela.tamanhoRodape='86%' 
                    this.tamanhoRodapeTela = '86%'; //this.$store.state.configuracaoTela.tamanhoRodape; 
                }

            }
            */
            
        }  

   }

   </script>

  