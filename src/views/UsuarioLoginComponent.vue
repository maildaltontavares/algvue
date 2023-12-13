<template>
    
    <v-form  ref="formulario" @submit.stop.prevent="submitForm" >    
        <v-container>
            <div class="d-flex justify-content-center" > 
                <v-card rounded="lg" class=" elevation-12" 
                        
                    :style="{  minWidth:  this.$store.state.larguraCard,
                            height:  this.$store.state.alturaCard }" 
                    
                    >  

                    <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">                   
                    
                        <div>                         
                            <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Credenciais do usuário</b></p>                               
                        </div>
                    </div>    
                    
                    <div class="d-flex  " style="margin-left:2%;width:95%;margin-top: 5%;"> 

                        <v-autocomplete
                            label="Sistema"
                            :items="sistema" 
                            :disabled="sistemaDesabilitado"   
                            @blur="buscaByChave" 
                            v-model="this.codSistema"   
                            item-title="nome" 
                            item-value="id"
                            variant="outlined"
                            bg-color="white"      
                            
                        ></v-autocomplete> 

                    </div >    


                    <div class="flex-linha" style="margin-left:2%;width:95%;margin-top: 1%; "> 
                        <div class="row espacoEntreComponentes" style=" width:100%" >   
                                <div class="input-group">  
                                            
                                            <div class="d-flex  justify-content-start">
                                                
                                                <v-text-field
                                                    v-model.trim="this.codUsuario" 
                                                    id="usuario"
                                                    label="Usuário" 
                                                    ref="usuario"  
                                                    maxlength="6" 
                                                    @blur="buscaByChave"
                                                    style=" min-width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    :disabled="codigoDesabilitado"  
                                                    type="number"
                                                    inputmode="numeric"
                                                    
                                                ></v-text-field>    
                                                    
                                                <v-btn   data-bs-toggle="modal" 
                                                    data-bs-target="#modalPesquisaUsuario" tabindex="-1"  @click="apiFlushPesquisa" :disabled="codigoDesabilitado" 
                                                    style="height:53px;width:60px;background-color:rgb(240, 237, 232);" 
                                                    > 
                                                        <v-icon
                                                        class="mb-6"
                                                        color="primary"
                                                        icon="mdi-card-search-outline"
                                                        size="55"
                                                        ></v-icon>  
                                                </v-btn>     

                                            </div  >      
                                            <div class=" backCampoConjugado "  >   
                                                <v-text-field
                                                    v-model="this.nomeUsuario" 
                                                    id="nomeUsuario"   
                                                    disabled 
                                                    class="limitadorMedia"
                                                    :rules="[campoRequerido]" 
                                                    
                                                    style="background-color:rgb(210, 210, 246); color:black;height:53px;border-radius:0px 5px 5px 0px;"
                                                ></v-text-field>   
                                            </div>   

    

                                </div>
                        
                        </div>    
                        
                        
                    </div>   




                    <div class="d-flex justify-content-end " style=" margin-left:5%; width:90%; margin-top: 25px;border-radius:15px 15px 15px 15px;">                                    
                        <div style="width:100%;background-color:#c0c0c1;border-radius:15px 15px 15px 15px;  height:45px  ">
                            <p  class="text-white text-center  mt-3 pe-5" style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Credenciais</b></p>                               
                        </div>                                               
                    </div>    

                        <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">   


                            <div class=" espacoEntreComponentes    " style=" width:100%;"   > 

                            

                                    <v-text-field
                                        v-model="usuario.login"
                                        label="Login"
                                        hide-details="auto"                            
                                        id="login" 
                                        maxlength="20"                                        
                                        ref="login"      
                                        :rules="[campoRequerido]"  
                                        style="min-width: 250px;"  
                                        variant="outlined"
                                        bg-color="white"                                        
                                    ></v-text-field>

                            
                            
                            </div>   

                        </div>    <!--  FIM LINHA 0003 -->    

                        <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">   


                                <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                                        <v-text-field
                                            v-model="usuario.senha"
                                            label="Senha"
                                            hide-details="auto"                            
                                            id="senha" 
                                            maxlength="50"                                        
                                            ref="senha"      
                                            type="password"
                                            style="min-width: 250px;"  
                                            variant="outlined"
                                            bg-color="white"          
                                            :rules="[validaSenha,campoRequerido]"  
                                        ></v-text-field> 

                                </div>   
                        </div>    <!--  FIM LINHA 0003 -->                        


                        <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%; ">   


                            <div   style=" width:100%;" class="espacoEntreComponentes">   
                                    <v-text-field
                                        v-model ="confirmaSenha"
                                        label="Confirmar Senha"
                                        hide-details="auto"                            
                                        id="confirmaSenha" 
                                        maxlength="50"                                        
                                        ref="confirmaSenha"      
                                        type="password"
                                        :rules="[validaNovaSenha]" 
                                        style="min-width: 250px;"  
                                        variant="outlined"
                                        bg-color="white"          
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
                        
                        
                        <div class=" d-flex justify-space-between ">  

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

                            <div class="col-3 div_rodape d-flex justify-content-end">
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

     
    
  <PesquisaUsuario @setaPesquisa="setaPesquisa($event)"></PesquisaUsuario>
  <SimNao @confirmaAcao="confirmaAcao($event)" :pergunta="simNaoPergunta" :botoes="simNaoBotoes" :tipo="simNaoTipo" ref="simNao"></SimNao>    
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   //import { required, helpers  } from '@vuelidate/validators'   
   import PesquisaUsuario from '@/requires/PesquisaUsuario'
   import SimNao from '@/requires/SimNao.vue'
  // import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'
   import MensagemMobile  from '../components/MensagemMobileComponent.vue'

    export default { 
    
        name: 'UsuarioLoginComponent',
        setup: () => (
            { v$: useValidate() }
        ),
        components: { PesquisaUsuario, SimNao,MensagemMobile},
    /*
        validations: {
            usuario: {
                     
                    //sistema: { required: helpers.withMessage('Informe o sistema', required)} ,  //, $lazy: true  
                    login: { required: helpers.withMessage('Informe o login. Mínimo de 5 caracteres e sem espaços.',  

                                function(val) {

                                    if(!val==''){ 

                                        if (val.includes(" "))  {
                                            return false 
                                        }   

                                        if (val.length<5)  {
                                            return false
                                        }else{

                                            return true
                                        }  




                                    }else{
                                    return false
                                    }

                               }   
                    
                    ) }   ,
                    senha: { required: helpers.withMessage('Informe a senha. Mínimo de 6 caracteres e sem espaços.', 
                    
                    
                    function(val) {

                        if(!val==''){ 

                            if (val.includes(" "))  {
                                return false 
                            }  

                           
                            console.log(val.length)

                            if (val.length<6)  {
                                return false
                            }else{

                                return true
                            }  

                        }else{
                        return false
                        }

                    }                      
                    
                    
                    
                    
                    ) }   
                    
            },
            codUsuario:{ required: helpers.withMessage('Informe o usuario', required) } ,
            confirmaSenha: { required: helpers.withMessage('Senha em branco ou senhas não conferem.', 
        

                function(val) {

                    if(!val==''){ 

                        if( val != this.usuario.senha){
                            return false
                        }else{

                            return true
                        }

                    }else{
                    return false
                    }

                }     
        
            )},   
            nomeUsuario: { required: helpers.withMessage('Nome do usuario nao informado', required) }

        },   

        */
        mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator],
 
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
            UsuarioTemp: [], 
            nomeUsuario:'',
            confirmaSenha:'',
            sistemaDesabilitado:false,
            codigoDesabilitado:false,
            codSistema:0,
            codUsuario:"",
            items: [],
            
            usuario : {    
                 id:0,                            
                 sistema:'' ,
                 codigo:  '',
                 login: '',
                 senha: ''  
            },    


            usuarioInicial: {               
                 id:0,                            
                 sistema:'' ,
                 codigo:  '',
                 login: '',
                 senha: ''  


            },
            usuarioDAO: [],

            
            sistema :[],
            sistemaTemp:{    
                id: 0,
                sigla: '',
                nome: '',
                tipoLogin: '',
                tipoCodificacaoSenha: '' 
            },                

        }),
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
                    //onsole.log("submitForm 11");
                    //console.log(this.validacao);
                    //console.log("submitForm 333");
                    //console.log(isFormCorrect);
                    //console.log("submitForm 33344");


                    

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


           resetarForm(){

                //console.log('')  

                if(this.simNaoRetorno == 'S'){

                    this.usuario = Object.assign({},this.usuarioInicial); 
                    this.v$.$reset(); 
                    this.ehInclusao = true; 
                    this.erros= '';
                    this.mensagemSucesso= '';
                    this. mensagemErro= ''; 
                    this.haErros= false;      
                    this.haSucesso= false;
                    this.tipoOperacao = 'I';  
                    this.confirmaSenha='';
                    this.configuraCampos('I' )  ;
                    this.nomeUsuario='';
                    this.codUsuario='';
                    

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
                    let url = `${process.env.VUE_APP_BASE_URL}/usuariologin/usuario/${this.codUsuario}/sistema/${this.codSistema}`;
 
                    console.log(url)  

                    await this.axios.get(url,this.apiTokenHeader())
                    .then(response => {        

                        console.log("PopulaForm");
                        this.resultado = response.data;    

                        if (this.resultado.id != null){
                            this.usuario.id = this.resultado.id ;     
                        
                        }else{
                            this.usuario.id  = "" ;                       
                        }   
  
                        if (this.resultado.login != null){
                            this.usuario.login = this.resultado.login.trim() ;     
                        
                        }else{
                            this.usuario.login  = "" ;                       
                        }     

                        if (this.resultado.idSistema != null){
                            this.usuario.sistema = this.resultado.idSistema ;     
                        
                        }else{
                            this.usuario.sistema  = "" ;                       
                        }    

                        if (this.resultado.senha != null){
                            this.usuario.senha = this.resultado.senha ; 
                            this.confirmaSenha = this.resultado.senha ;     
                        
                        }else{
                            this.usuario.senha  = "" ;    
                            this.confirmaSenha = "" ;
                        }  

 

                        console.log('this.resultado popula');
                        console.log(this.resultado);
                        console.log(this.tipoOperacao);

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
                        this.apiPesquisaParam('usuarioseg', this.codUsuario, this.usuario) 
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

                if ((this.codUsuario!='' && this.codUsuario!=null)  
                && (this.sistema!=null && this.usuario.nome!='') 
                 ){  
                         const resposta = await this.populaForm();     

                        if (!(resposta === true) ){
                            console.log('Erro de cadastro BuscaChave' );      
                        } 



                } else{ 
 
                        this.apiDisplayMensagem("Informe o sistema e o usuário."   )
                        
                      
                }


            }, 

            confirmaAcao(resposta) {

                this.simNaoRetorno = resposta

                console.log('confirmaAcao');
                console.log(this.simNaoRetorno ); 

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
                        this.$router.push( { name: 'usuariologinpesquisa',params : {sistemaProps : '04'}} )
                        console.log('pesquisa');
                    }
                    
                }

            },             

            async exclusao() { 
                
                /// EXCLUSAO ////

                let url = `${process.env.VUE_APP_BASE_URL}/usuariologin/usuario/${this.codUsuario}/sistema/${this.codSistema}` 
                
                
                if (this.tipoOperacao == 'E' && this.simNaoRetorno == 'S') {  
                        /*
                        await this.axios.delete(
                            url,
                            JSON.stringify(this.usuarioDAO),
                            {
                            headers: { "Content-Type": "application/json" }
                            }
                        )
                        */
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




            navegarParaLogin(){this.$router.push({name:'login'  })},  
        } , 
    
        async created(){   

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }  
            
            this.populaSistema(); 

            if(this.operacao=='A'){
                this.tipoOperacao = 'A' 
            }else if(this.operacao=='I'){
                this.tipoOperacao = 'I'  
            }else if(this.operacao=='E'){ 
                this.tipoOperacao = 'E'  
            }  

            if(this.tipoOperacao == 'A'  || this.tipoOperacao == 'E' ){         
                this.codUsuario = this.usuarioProps;
                this.codSistema = this.sistemaProps;

                const resposta = await this.populaForm();     

                if (!(resposta === true) ){
                    console.log('Erro de cadastro BuscaChave' );      
                } 
            }  

        },
        mounted(){  
                this.codSistema = Number(this.sistemaProps) 
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

  