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
                            <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Trocar Senha</b></p>                               
                        </div>
                    </div>    
                    
                    <div class="d-flex  " style="margin-left:2%;width:95%;margin-top: 5%;"> 

                        <v-autocomplete
                            label="Sistema"
                            :items="sistema" 
                            disabled
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
                                                    v-model.trim="this.usuario.codigo" 
                                                    id="usuario"
                                                    label="Usuário" 
                                                    ref="usuario"  
                                                    maxlength="6" 
                                                    @blur="buscaByChave"
                                                    style=" min-width: 150px; " 
                                                    variant="outlined"
                                                    bg-color="white"
                                                    disabled 
                                                    type="number"
                                                    inputmode="numeric" 
                                                ></v-text-field>     

                                                    
                                                <v-btn   data-bs-toggle="modal"                                                 
                                                    data-bs-target="#modalPesquisaUsuario" 
                                                     @click="apiFlushPesquisa"  
                                                    style="height:53px;width:60px;background-color:rgb(240, 237, 232);" 
                                                    disabled
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
                                                    
                                                    style="background-color:rgb(247, 247, 247);  color:black;height:53px;border-radius:0px 5px 5px 0px;"
                                                ></v-text-field>   
                                            </div>   

    

                                </div>
                        
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
                                    disabled                                      
                                ></v-text-field> 
                        </div>   

                    </div>    <!--  FIM LINHA 0003 -->    


                    <div class="d-flex justify-content-end " style=" margin-left:5%; width:90%; margin-top: 25px;border-radius:15px 15px 15px 15px;">                                    
                        <div style="width:100%;background-color:#c0c0c1;border-radius:15px 15px 15px 15px;  height:45px  ">
                            <p  class="text-white text-center  mt-3 pe-5" style=" margin-left:20%;width:60%; font-size: 18px; height:20px "><b>Redefina senha</b></p>                               
                        </div>                                               
                    </div>    


                    <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%;">   


                        <div class=" espacoEntreComponentes    " style=" width:100%;"   >   

                                <v-text-field
                                    v-model="this.senhaAtual"
                                    label="Senha atual"
                                    hide-details="auto"                            
                                    id="senhaAtual" 
                                    maxlength="20"                                         
                                    ref="senhaAtual"      
                                    type="password"
                                    style="min-width: 250px;"  
                                    variant="outlined"
                                    bg-color="white"     
                                    :disabled="senhaAtualDisabled"     
                                    :rules="[validaSenha]"
                                ></v-text-field> 

                        </div>   
                    </div>    <!--  FIM LINHA 0003 -->                        


                    <div class="flex-linha"  style="margin-left:2%;width:95%;margin-top: 1%; ">   


                        <div   style=" width:48%;" class="espacoEntreComponentes">   

                            <v-text-field
                                v-model ="this.usuario.senha"
                                label="Nova Senha"
                                hide-details="auto"                            
                                id="senha" 
                                maxlength="20"                                        
                                ref="senha"      
                                type="password"
                                :rules="[validaSenha]" 
                                style="min-width: 250px;"                                  
                                variant="outlined"
                                bg-color="white"      
                                :disabled="senhaDisabled"      
                            ></v-text-field> 

                        </div>   



                        <div   style=" width:49%;" class="espacoEntreComponentes">   

                            <v-text-field
                                v-model ="this.confirmaSenha"
                                label="Confirma Senha"
                                hide-details="auto"                            
                                id="confirmaSenha" 
                                maxlength="20"                                        
                                ref="confirmaSenha"      
                                type="password" 
                                style="min-width: 250px;"  
                                variant="outlined"
                                bg-color="white"         
                                :rules="[validaSenha,validaNovaSenha]" 
                                :disabled="confirmaSenhaDisabled"   
                            ></v-text-field> 

                        </div>   
               


                    </div>    <!--  FIM LINHA 0003 -->    
 
                               
 
             
                </v-card>   
            </div>
        </v-container>
<!--
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
                                                     
                                <v-btn color="primary"  v-if="senhaAlterada" class="botao_rodape" style="min-width: 120px;" accesskey="n"  @click="navegarParaLogin"><u>N</u>ovo login</v-btn> 
                                <v-btn color="primary" type="submit" v-if="senhaAlterada==false"  class="botao_rodape" style="min-width: 70px;" accesskey="n"  ><u>S</u>alvar</v-btn> 
 
                            </div> 

                        </div>

                </v-card>   
            </div>
        </v-container> 

-->

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
                                    <v-btn color="primary"  v-if="senhaAlterada" class="botao_rodape" style="min-width: 120px;" accesskey="n"  @click="navegarParaLogin"><u>N</u>ovo login</v-btn> 
                                    <v-btn color="primary" type="submit" v-if="senhaAlterada==false"  class="botao_rodape" style="min-width: 70px;" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " accesskey="n"  ><u>S</u>alvar</v-btn> 

                                    <div v-if="this.$store.state.menuExpandido" ><div :style="{marginRight:this.$store.state.tamanhoEspacoMarginRight}"  ></div></div>

                              </div>  



                        
  
                          </div>
                    
                      </div>   

                            
                </div>

               




    </v-form>     

 
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
   import useValidate from '@vuelidate/core'
   import { required, helpers } from '@vuelidate/validators'
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'   
   import MensagemMobile  from '../components/MensagemMobileComponent.vue'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'TrocarSenhaComponent',
        setup: () => (
            { v$: useValidate() }
        ),
        components: {  MensagemMobile },
        
       
        validations: {
            usuario: {
                     
                    //sistema: { required: helpers.withMessage('Informe o sistema', required)} ,  //, $lazy: true 
                    codigo: { required: helpers.withMessage('Informe o usuario', required) } ,
                    login: { required: helpers.withMessage('Informe o login', required) }   ,
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

                    ) }  ,
                },

            senhaAtual: { required: helpers.withMessage('Informe a senha atual', required) }  ,
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
       mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
 
        data: () => ({
            
            resultado : "",      
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false, 
           
            UsuarioTemp: [], 
            nomeUsuario:'',
            confirmaSenha:'', 
            codSistema:0,
            senhaAtual:"",

            senhaAtualDisabled:false,
            senhaDisabled:false,
            confirmaSenhaDisabled:false,
            
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
            senhaAlterada:false,

            
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
            } 
          
        },  
        methods:{ 

            setaPesquisa(e) {  
             
                this.usuario.codigo=  e.obj.idUsuario;
                this.nomeUsuario=  e.obj.nome; 

            }, 
            navegarParaLogin(){this.$router.push({name:'login'  })}, 
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
                        let url = `${process.env.VUE_APP_BASE_URL}/usuariologin/trocarsenha`   
 
                                
                        this.usuarioDAO =
                            {
                                "id":        this.usuario.id,                            
                                "idUsuario": this.usuario.codigo ,
                                "idSistema": this.codSistema,
                                "login":     this.usuario.login, 
                                "senha":     this.usuario.senha   ,
                                "senhaAnterior": this.senhaAtual

                            }  

                            console.log(this.usuarioDAO)
                            await this.axios.post(
                                url,
                                JSON.stringify(this.usuarioDAO),
                                this.apiTokenHeader({ "Content-Type": "application/json" })
                            )
                            .then(response => {  
                                
                                console.log(response.data)
                                this.senhaAlterada=true;
                                this.senhaAtualDisabled=true;
                                this.senhaDisabled=true;
                                this.confirmaSenhaDisabled=true;
                                this.apiDisplayMensagemSucesso('Senha alterada com sucesso.' ) 
                            
                            })
                            .catch(error => {     
                                //if(process.env.VUE_APP_TOKEN == 'true')
                                   this.apiDisplayMensagem(error.response.data ) 
                                //else{
                                //    this.apiDisplayMensagem(error.response.data ) 
                                //}   


                            });
                        } 
 

           },

 
            async populaForm(){   

                    this.resultado = ""; 
                    let retornoPopForm=false; 
                    let url = `${process.env.VUE_APP_BASE_URL}/usuariologin/usuario/${this.usuario.codigo}/sistema/${this.codSistema}`;
 
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

                        this.apiPesquisaParam('usuarioseg', this.usuario.codigo, this.usuario) 
                        retornoPopForm = true;                        

                    })
                    .catch(error => {  
                        
                            console.log("Erro: ", error);
                            //this.mensagemErro = error; 
                            //this.haErros = true ;  
                            this.apiDisplayMensagem(error.response.data ) 
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

                if ((this.usuario.codigo!='' && this.usuario.codigo!=null)  
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


        } ,

        async created(){  

            this.scrollToTop();
            this.populaSistema();  
            this.usuario.codigo = this.usuarioProps;
            this.codSistema = Number(this.sistemaProps) 

            const resposta = await this.populaForm();     

            if (!(resposta === true) ){
                console.log('Erro de cadastro BuscaChave' );      
            } 

            if(this.$store.state.usuarioSistema.empresa=="" || this.$store.state.usuarioSistema.empresa==null){
                this.navegarParaLogin();
            }
           

       },
       mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
       
       }

   }

   </script>

  