<template>

  <div class="row topoLogin d-flex align-items-center">
    <div class="col-2 d-flex justify-content-start"> 
      <label>ALG</label>
    </div>
    <div class="col-8  justify-content-center">
      <label>Santana Têxtil S/A.</label>
    </div>
  </div>
   
  <v-card rounded="lg"
  
  :style="{marginLeft:  marginLeftLogin ,
   width:tamanhoLogin,marginTop:marginTopLogin }"   
   
  class="px-6 py-6 elevation-12"   >

    <v-row>
      <v-img :src="require('@/assets/logo.svg')" height="100"></v-img>
      <v-col cols="9">
        <v-toolbar rounded="lg" color="#003366">
          <v-toolbar-title>
            <p class="text-white text-end mt-3 pe-5">ALG - Cont. Mat. Prima</p>
          </v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
    
    <v-card-text>
      <v-form ref="formLogin" v-model="isValid" lazy-validation>
        <v-select
          v-model="idfil"
          label="Unidade"
          prepend-icon="mdi-factory"
          :items="empresas"
          :rules="[idfilRules.required]"
          item-title="nome"
          item-value="idfil"
        >
        </v-select>
        <v-text-field
          v-model="codigo"
          class="text-center"
          id="codigo"
          prepend-icon="mdi-account"
          name="codigo"
          label="Usuário"
          autocomplete="off"
          :rules="[codigoRules.required]"
          type="text">
        </v-text-field>
        <v-text-field
          v-model="senha"
          class="text-center"
          id="senha"
          prepend-icon="mdi-lock"
          name="senha"
          label="Senha"
          autocomplete="off"
          :rules="[senhaRules.required]"
          type="password">
        </v-text-field>
      </v-form>
    </v-card-text>
    <v-alert v-if="haErros" color="danger" theme="dark" icon="mdi-alert-circle" >{{ erros }}</v-alert>

    <div class="d-flex justify-content-center" style="font-size: 9px;" >
                 <p>Versao 1.00.04</p>
      </div>  

    <v-card-actions>

     
      <v-spacer></v-spacer>
      <!--
      <v-btn color="primary" @click="validaLogin" :disabled="!isValid">Acessar</v-btn>
      -->
      <v-btn color="primary" @click="populaParametros" :disabled="!isValid">Acessar</v-btn>
  

    </v-card-actions>
  </v-card>

</template>

<script>
import ApiMixin from '@/mixins/ApiMixin'
import useValidate from '@vuelidate/core'
import ApiMixinSEG from '@/mixins/ApiMixinSEG'


export default {
name: 'LoginComponent',
mixins: [ApiMixin,ApiMixinSEG],
 
setup: () => (
{ v$: useValidate() }
),
data: () => ({
idfilRules: {
  required : value => !!value || 'Informe a unidade.',
},
codigoRules: {
  required : value => !!value || 'Informe o código do usuário.',
},
senhaRules: {
  required : value => !!value || 'Informe a senha do usuário.',
},
idfil: '01',
codigo: 'admin',
senha: 'qwerty',
isValid: true,
haErros: false,
token: '',
tamanhoLogin:'',
marginLeftLogin:'',
marginTopLogin:'',
marginLeftRodape:'',
tamanhoRodape:'',


erros: [],
empresas: [
  { idfil: "01", nome: "SANTANA HORIZONTE" },
  { idfil: "03", nome: "NORTEX" },
  { idfil: "20", nome: "NOVA TECELAGEM DO AGRESTE" },
  { idfil: "05", nome: "ARGENTINA" },
],
}),
methods: {

  async populaParametros(){ 
           

           //console.log('Popula parametros' )
           const logou = await this.validaLogin();
 
           if(logou){     

                   this.navegarPara()   
           } 
     },  
  async validaLogin() { 
        
        
        //Reseta as permissões ja dadas
        let retorno = false;
        this.$store.state.permissoesUsuario ='';
        let url;


        if(process.env.VUE_APP_TOKEN == 'true') { 
             url = `${process.env.VUE_APP_BASE_URL}/login`;
        }else{
             url = `${process.env.VUE_APP_BASE_URL}/usuariologin/login`;
        }  
        
         
       //.log('VUE_APP_TOKEN')  
        //console.log(process.env.VUE_APP_TOKEN)  
        const isFormCorrect = this.v$.$validate()
        if (isFormCorrect) {
           
           //console.log( url )
           let login = this.codigo.replace(/\s/g, "");  
 
           this.usuarioDAO =  { 
            "id":0,
            "senha": this.senha,
            "idSistema": process.env.VUE_APP_ID_SISTEMA,
            "login": login,
            "idfil":this.idfil

          } 
          //console.log( this.usuarioDAO)
          //console.log( url)
          

           await this.axios.post(url,this.usuarioDAO
           ,this.apiTokenHeader( {
            'Access-Control-Expose-Headers' : '*' ,
            'Access-Control-Allow-Origin': `${process.env.VUE_APP_BASE_URL}`
           } )
           )
          .then(response => {
 
                //console.log('Login');
                //console.log(response.data);

                this.haErros = false
                this.resultado = response.data;   
        
                this.$store.state.usuarioSistema.empresa =  this.empresas.find( item => item.idfil === this.idfil).nome            
                this.$store.state.usuarioSistema.idfil  = this.idfil;  
                this.$store.state.usuarioSistema.id = this.resultado.idUsuario; 
                this.$store.state.usuarioSistema.codigo = login; 


                //console.log('Login 1111');

                if(process.env.VUE_APP_TOKEN == 'true') { 
                    //console.log('VUE_APP_TOKEN == true')   
                    //console.log(response.headers.authorization )

                    this.$store.state.usuarioSistema.nome = this.resultado.nome;
                    this.token = response.headers.authorization 
                    this.$store.state._token = this.token
                    this.$cookies.set('_token',this.token,{ httpOnly: true} )      
                               
                } else {

                  //console.log('VUE_APP_TOKEN == false')   

                  this.$store.state.usuarioSistema.nome =  this.resultado.fkUsuario.nome;  
                } 

                //console.log('idUsuario');
                //console.log(this.$store.state.usuarioSistema.id )
                //console.log(this.$store.state.usuarioSistema.codigo)
                //console.log(this.$store.state.usuarioSistema.nome)
             
                  
                this.$cookies.set('usuarioSistema',{
                    empresa : this.$store.state.usuarioSistema.empresa,
                    idfil : this.$store.state.usuarioSistema.idfil,
                    codigo : this.$store.state.usuarioSistema.codigo,
                    nome :  this.$store.state.usuarioSistema.nome } 


            ) 
            //console.log('Usuario Sistema: ' , this.$store.state.usuarioSistema)

            retorno = true;
            
          })
          .catch(error => {
               console.log("Erro: ", error.response.data.message); 
               //this.haErros=true;
               //this.erros = error.response.data.message
               this.apiDisplayMensagem("Login ou senha inválido!")  
               retorno = false;
          });



        } else {

          retorno = false;
        }

        return retorno           


      },
      navegarPara() {  
           //console.log('rota xxxxx')
           this.$router.push({name:'home'})
      },   




      
    },
    created() {
      this.$cookies.remove('usuarioSistema') 
      this.checkDispositivo();
    },
    mounted() {
        this.checkDispositivo();
        //console.log('this.$store.state')
        //console.log(this.$store.state.tipoDispositivo)
        //console.log(this.tamanhoLogin);
        window.addEventListener('resize', this.checkDispositivo);
        
    },    
}
</script>

<style scoped>

.topoLogin {
background-color: #003366;
margin-left: 10px;
margin-top: 10px;
text-align: center;
font-size: 20px;
color: white;
width: 98%;
height: 50px;
border-radius: 5px;
}

.corpoLogin {
margin-top: 10%;
}
.mensagem_erro {
text-align: center;
color: white;
font-weight: bold;
;
padding-top: 5px;
}

.error {
border: 3px solid red;
}

</style>
