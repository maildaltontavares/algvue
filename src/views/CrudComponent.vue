<template>

    <v-form  ref="formulario" @submit.stop.prevent="submitForm" style=" background-color:white;height:100% "  >     
        
        <div class="d-flex justify-content-center" style="width:100%;background-color:white; "  >  
   
            <div  style="width:100%"  >   
                    
                    

                    <div class="flex-linha-between"  style=" width:100%;margin-top: 1%;background-color:white" >  
                    
                    
                        <div class="d-flex justify-content-end" style="background-color:#003366;width:350px; margin-top: 15px;border-radius:0px 15px 15px 0px;">  
                            <div>                         
                                <p  class="text-white text-end mt-3 pe-5" style="font-size: 18px;"><b>Testes de CQ</b></p>                               
                            </div> 
                       </div>        
              

                   </div>         
                   
                   <div class="flex-linha "  style="margin-left:6%;width:94%;margin-top: 1%;background-color:white" > 

                            <div    class="espacoEntreComponentes">   

                                <v-autocomplete
                                    label="Produtor"
                                    :items="produtorItens"                              
                                    v-model="this.teste.produtor"   
                                    item-title="descricao" 
                                    item-value="codigo"
                                    variant="outlined"
                                    style="width: 270px; " 
                                    bg-color="white"   
                                    density="compact"
                                    :rules="[campoRequerido]" 
                                ></v-autocomplete> 

                            </div>   


                            <div   class="espacoEntreComponentes">    
                                        
'                                <v-text-field
                                    v-model.trim="this.teste.lote" 
                                    id="lote"
                                    label="Lote" 
                                    ref="lote"  
                                    maxlength="20"                                            
                                    style=" width: 200px; " 
                                    variant="outlined"
                                    bg-color="white"                                           
                                    type="text"     
                                    density="compact"
                                    :rules="[campoRequerido]" 
                                    
                                ></v-text-field>                                  
                                     
                           
                            </div>        
                            
                            

                            <div    class="espacoEntreComponentes">  

                                <v-autocomplete

                                    label="Tipo Teste"
                                    :items="tipoTesteItens"                                                                                            
                                    v-model="this.teste.tipoTeste"  
                                    item-title="nome" 
                                    item-value="codigo"
                                    variant="outlined"
                                    style=" width: 200px; "
                                    bg-color="white"      
                                    :rules="[campoRequerido]" 
                                    density="compact"
                                    
                                ></v-autocomplete> 

                            </div>        





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
                                    <v-btn color="primary"  v-if="senhaAlterada" class="botao_rodape" style="min-width: 120px;" accesskey="n"  @click="navegarParaLogin"><u>N</u>ovo login</v-btn> 
                                    <v-btn color="primary" type="submit" v-if="senhaAlterada==false"  class="botao_rodape" style="min-width: 70px;" :style="{marginRight:  this.$store.state.configuracaoTela.marginRightRodape} " accesskey="n"  ><u>S</u>alvar</v-btn> 

                              </div>  



                        
  
                          </div>
                    
                      </div>   

                            
                </div>

            </div>
        </div>

               




    </v-form>     

 
</template>

<script> 

   import ApiMixin from '@/mixins/ApiMixin'  
   import { mapState } from 'vuex'    
  
    
   import ApiMixinValidator from '@/mixins/ApiMixinValidator'   
   import MensagemMobile  from '../components/MensagemMobileComponent.vue'
   import ApiMixinALG from '@/mixins/ApiMixinALG'
 
 
   //import Popper from 'vue3-popper'
   import ApiMixinSEG from '@/mixins/ApiMixinSEG'

    export default { 
    
        name: 'TestesCQComponent',
 
        components: {  MensagemMobile },
        
 
       mixins: [ApiMixin,ApiMixinSEG,ApiMixinValidator,ApiMixinALG],
 
        data: () => ({
            
            resultado : "",      
            erros: '',
            mensagemSucesso: '',
            mensagemErro : '', 
            haErros: false,      
            haSucesso: false, 
            teste:{
                produtor:'',
                lote:''
            },
            produtorItens: [],
            produtorItensTemp:{ 
                codigo:'',
                descricao:''
            },   
            
            tipoTesteItens:[
                {codigo:"I", nome:"Interno"},
                {codigo:"P", nome:"Produtor"}

            ],            
          

        }),
        computed: {...mapState(['usuarioSistema']) } ,      

        
        methods:{ 

            setaPesquisa(e) {  
             
                this.usuario.codigo=  e.obj.idUsuario;
                this.nomeUsuario=  e.obj.nome; 

            }, 
            navegarParaLogin(){this.$router.push({name:'login'  })}, 
            async submitForm() {  
            },

 
            async populaForm(){   
  

            },  


        } ,

        async created(){  
            this.populaProdutor();

       },
       mounted(){ 
       //this.$refs.dataInicial.focus();     
       this.scrollToTop();
       
       }

   }

   </script>

  