<template> 

<!--style="background-color:#ec4022;-->
    <v-navigation-drawer :expand-on-hover="this.$store.state.expandOnHover" :rail="this.$store.state.rail" :temporary="this.tipoTemporario"  v-model="isDrawerOpen"  style="background-color:rgb(109, 109, 129);color:white;"  >  
      

        <v-list style="padding: 0px;margin:0px">

            <div class="d-flex justify-space-between" style="background-color:#003366;height:65px;" >           
                                        
                    <div class="d-flex"  style="margin-left:0px; ">                              
                        <v-list-subheader  style="color:white;font-size:18px;margin-left:0px; ">ALG</v-list-subheader>                        
                    </div>                       
                     
                    <div class="d-flex justify-content-end" >  
                         <v-btn @click="fixaMenu()" :disabled="desabilitaPin" :icon="this.tipoIconeFixo"  density="compact" style="margin-top:5px;margin-right:5px;padding:3px;background-color:#003366 " ></v-btn>                           
                         <v-btn @click="isDrawerOpen=false" v-if ="exibeMenu" fill-dot="true" icon="mdi-arrow-left-circle-outline" density="compact" style="margin-top:5px;margin-right:5px;padding:3px;background-color:#003366  " ></v-btn>
                    </div>              
                     
            </div>
 
            <v-divider style="padding: 0px;margin:0px"></v-divider>

        </v-list>

        <v-list  > 
            <v-list-item prepend-icon="mdi-home" class="item-hover font-menu" style="color:white; " >Home</v-list-item>
            
            
             <!--  
            <v-list-group value="Cadastros" style="color:white" >

            <template v-slot:activator="{ props }">                <v-list-item
                prepend-icon="mdi-file-table-box-multiple"
                v-bind="props"
                title="Cadastros"
                class="item-hover"
                ></v-list-item>
            </template>

            
            <v-list-item prepend-icon="mdi-tree-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Produtores</v-list-item>   
            <v-list-item prepend-icon="mdi-tree-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Procedência</v-list-item>   
            <v-list-item prepend-icon="mdi-tree-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Tipo Movimento</v-list-item>   
            <v-list-item prepend-icon="mdi-tree-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Tipo Mat. Prima</v-list-item>   
            
 
               

            </v-list-group>   
            -->
            <v-list-group value="Movimentos"  style="color:white" >

                <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-clipboard-file-outline"            
                    v-bind="props"
                    title="Movimentos"
                    class="item-hover"
                ></v-list-item>

                </template> 
                <v-list-item   prepend-icon="mdi-file-check-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02" @click="navegarParaMovimentacaoEstoque">Movimentação de Estoque</v-list-item>   
                <!--
                <v-list-item   prepend-icon="mdi-file-check-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Teste Qualidade</v-list-item>   
                <v-list-item   prepend-icon="mdi-file-check-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Formação de Pilhas</v-list-item>   
                <v-list-item   prepend-icon="mdi-file-check-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02">Apontamento Abertura</v-list-item>   
                 -->


            </v-list-group>   
            
            <v-list-group value="Misturas" style="color:white" > 

                <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-view-quilt-outline "

                    v-bind="props"
                    title="Misturas"
                    class="item-hover"
                ></v-list-item>
                </template> 
                
                <v-list-item prepend-icon="mdi-account-edit-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02" @click="navegarParaMisturaPadrao">Mistura Padrão</v-list-item>   
                 

            </v-list-group>   
            

            <!--
            <v-list-group value="Autorizações" style="color:white" > 

                <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-account"

                    v-bind="props"
                    title="Autorizações"
                    class="item-hover"
                ></v-list-item>
                </template> 

                
                <v-list-item prepend-icon="mdi-account" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02" @click="navegarParaUsuarios" ><b>Usuários</b></v-list-item>            
                <v-list-item prepend-icon="mdi-file-account-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02"  @click="navegarParaUsuariosLogin">Credenciais</v-list-item>      
                <v-list-item prepend-icon="mdi-card-account-details-outline" class="item-hover font-menu margin-item_menu" style="margin-left:-40px;color:#ffff02"  @click="navegarParaTrocarSenha">Trocar Senha</v-list-item>      
                          
            </v-list-group> 
            -->



             

            <v-divider style="padding: 0px;margin:0px"></v-divider>   
            <v-list-item :to="{ name: 'login'}" prepend-icon="mdi-exit-to-app" class="item-hover  font-menu  ">Sair</v-list-item>   
              
        
    </v-list>     

    

 
    </v-navigation-drawer>

    <!--color="#003366"--> 

    <v-app-bar  color="#003366" class="border-b">  
        
        <div class="d-flex justify-space-between " style="width:98%;"> 
            <div class="d-flex">
                <v-app-bar-nav-icon v-if="exibeMenu"  @click="isDrawerOpen=!isDrawerOpen"></v-app-bar-nav-icon>  
                <v-app-bar-title  class="cabecalho_principal_empresa" style="margin-left:15px;margin-right:15px">{{this.$store.state.tituloPrincipal }}</v-app-bar-title>
            </div>

            <div class="cabecalho_principal_empresa d-flex justify-content-center">
                <label class="empresa">{{ this.$store.state.usuarioSistema.empresa }}</label>
            </div>  


            <div class="d-flex justify-content-end" >

                    <v-btn  icon="mdi-account-outline" style="background-color:gray;margin-right: 10px;margin-top:10px;height:30px;width:30px; ">  
                    </v-btn> 

                    <div>           
                            <router-link to="/alg"  class="btn btn-sm btn-primary mt-2 mb-2"  >
                                <span  title="Sair" ><i class="bi bi-door-open" style="cursor: pointer;"></i> Sair </span>
                            </router-link>             
                    </div>
            </div>
        </div>
    </v-app-bar> 
    
    
     <router-view></router-view>
  

  
     
    

    <v-footer app  color="#003366" style="height:30px;"  >

        <div class="d-flex justify-space-between " style="background-color:#003366;height:20px;width:90%">

            <div >
                <label>Copyright@2023</label>
            </div>   

            <div  >
                <label  >Usuário: {{ this.$store.state.usuarioSistema.nome }}</label> 
            </div> 

        </div>
        

    </v-footer>   


<!--
    <v-container> 
        <router-view></router-view> 
    </v-container>


    <div class="row cabecalho_principal">
        <div class="col-4 cabecalho_principal_sistema">
            <router-link class="navbar-brand" to="/alg/home">ALG</router-link>
        </div>
        <div class="col-3 cabecalho_principal_empresa d-flex justify-content-center">
            <label class="empresa">{{ this.$store.state.usuarioSistema.empresa }}</label>
        </div>
        <div class="col-4 d-flex justify-content-end">
        <label class="cabecalho_principal_usuario">Usuário: {{ this.$store.state.usuarioSistema.nome }}</label> 
        </div>
        <div class="col-1 d-flex justify-content-end">
        <router-link to="/alg"  class="btn btn-sm btn-primary mt-2 mb-2">
            <span  title="Sair"><i class="bi bi-door-open" style="cursor: pointer;"></i></span>
        </router-link>
        </div>
    </div> 

  <nav class="py-2 bg-light  ">
    <div class=" d-flex flex-wrap  ">
      <ul class="nav me-auto">   

                <ul class="navbar-nav"     >
                    <li class="nav-item dropdown" style="margin-left:20px;margin-right:10px">
                            <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                            Cadastros
                            </a>
                            <ul class="dropdown-menu"    >   
                                <li><a class="dropdown-item"  accesskey="t" >Itens</a></li>
                                <li><hr class="dropdown-divider"></li>   
                                <li><a class="dropdown-item"  @click="sair" bold><b>Sair</b></a></li>  

                            </ul>
                    </li>
                </ul>
             
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                    Interfaces
                    </a>
                    <ul class="dropdown-menu">   
                        
                        <li><a class="dropdown-item"  @click="navegarParaCargaManual">Movimentação de Materiais </a></li>
                            
                    </ul> 
                </li>        
     

                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" style="color:black"  href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                        Configurações
                        </a>
                        <ul class="dropdown-menu"      >   
                            <li><a class="dropdown-item"    @click="navegarParaUsuarios">Usuários</a></li>                
                            <li><a class="dropdown-item"    @click="navegarParaUsuariosLogin">Credenciais</a></li>
                            <li><a class="dropdown-item"    @click="navegarParaTrocarSenha">Trocar senha</a></li>
                            
                        </ul>
                </li>      

 


      </ul>

 
    </div>
  </nav>

  -->
     
    </template>
    
    <script>

   
       
       export default {
            name: 'HomeComponent'  ,  
            data: () => ({
                isDrawerOpen:false,                
                tipoTemporario:false,
                exibeMenu:false,
                tipoIconeFixo :"mdi-pin",
                desabilitaPin:true,
          
              
                
            }),
            methods:{


                configMenu(){
                    this.isDrawerOpen=!this.isDrawerOpen
                    
                },
              
                fixaMenu(){ 
                    
                    this.tipoTemporario=!this.tipoTemporario;

                    if(this.tipoTemporario){
                        // Movel
                        this.isDrawerOpen=false;
                        this.exibeMenu=true;
                        this.tipoIconeFixo ="mdi-pin-off";  
                        
                        if( this.$store.state.tipoDispositivo=='desktop'){ 
                            //this.$store.state.configuracaoTela.tamanhoRodape = '99%';  
                          //  this.$store.state.configuracaoTela.tamanhoRodape = '1890px' ; 
                            this.$store.state.configuracaoTela.tamanhoRodape = '100%' ; 
                            this.$store.state.pinOff = false; 
                        }
                         
                    }else{ 
                        this.isDrawerOpen=true;
                        this.exibeMenu=false;
                        this.tipoIconeFixo ="mdi-pin"; 

                        if( this.$store.state.tipoDispositivo=='desktop'){ 
                             //this.$store.state.configuracaoTela.tamanhoRodape = '1630px' ; 
                             this.$store.state.configuracaoTela.tamanhoRodape = '97%' ; 
                             this.$store.state.pinOff = true; 
                        }
                    }

                    //console.log('this.$store.state.pinOff222')
                    //console.log(this.$store.state.pinOff)   

                },
                
                navegarParaUsuarios(){this.$router.push({name:'usuario'   , params : { codigoProps :' ' , operacao : 'I' }}) },
                navegarParaUsuariosLogin(){this.$router.push({name:'usuarioLogin' , params : {sistemaProps : 4 ,usuarioProps : '0' , operacao : 'I' }} ) },
                navegarParaTrocarSenha(){this.$router.push({name:'trocarsenha' , params : {sistemaProps : 4 ,usuarioProps :this.$store.state.usuarioSistema.id  }} ) },
                navegarParaMovimentacaoEstoque(){this.$router.push({name:'movimentacaoestoque' , params : { fornecedorProps : '0' ,  notaFiscalProps : '0' ,operacao : 'I' }} ) },
                navegarParaMisturaPadrao(){this.$router.push({name:'misturapadrao'} ) }, 
            },
            created() {

                //console.log('this.$store.state.tipoDispositivo')
                //console.log(this.$store.state.tipoDispositivo)


               if(this.$store.state.tipoDispositivo=='desktop' ){ 

                  // Para iniciar mostrando o menu
                  //this.tipoTemporario=false;
                  //this.isDrawerOpen=true;   /// Exibe menu no inicio
                  //this.exibeMenu=false;               

                  // Para iniciar sem mostrar o menu
                  this.tipoTemporario=true;
                  this.isDrawerOpen=false;   /// Exibe menu no inicio
                  this.exibeMenu=true;               


                  this.tipoIconeFixo ="mdi-pin-outline";
                  this.desabilitaPin=false;
               }else{
                    this.tipoTemporario=true;
                    this.isDrawerOpen=false;
                    this.exibeMenu=true; 
                    this.tipoIconeFixo ="mdi-pin-off-outline"; 
                    this.desabilitaPin=true;
               }
            }


            
        
         
       }
 
    
    </script>
       
    <style>
     

     .font-menu{
        font-size: 16px;

     }

     .margin-item_menu{

        margin-left: -50px;

     }



    .principal{
    
    height: 50px;
    width: 90%;
    background-color:rgb(235, 232, 234);    
 
    margin-left: 5%; 
    
    
    }


    .flex-container{
        display: flex; 
        flex-direction: row; 
        justify-content: center; 
        width: 100%;
        
    }
    
    .flex-linha{
      
        /*   Comentar */
 
        width:98%; 
        display: flex;
        flex-wrap: wrap;
        margin-bottom:5px ;
        align-items: center;
      
        
    } 

    .flex-linha-between{
      
      /*   Comentar */

      width:100%; 
      display: flex;
      flex-wrap: wrap;
      margin-bottom:5px ;
      justify-content: space-between;
    
      
  }     

    .flex-linha-completa{
      
      /*   Comentar */

      width:100%; 
      display: flex;
      flex-wrap: wrap;
      margin-bottom:5px ;
      align-items: center;
    
      
  }    
    
    .padraoCodigo {
        width: 100px;
        margin-right: 15px; 
        margin-bottom:5px ;   
        
        /*   Comentar */
        /*
        border: solid 5px ;
        border-color: blue;
        */
         
    }
    
    .padraoCombo{
        height: 35px;
        margin-bottom:5px ;   
    
    }
    
    
    .padraoDesc {
        width: 350px;
        margin-right: 15px; 
        margin-bottom:5px ;   
        
        /*   Comentar */
        /*
        border: solid 5px ;
        border-color: red;
        */ 
    }
    
    .divCentral {
        background-color: #E0E0E0;
        height: 600px;
        width: 90%; 
        margin-bottom:10%;
    }
    
    .divForm{
        margin-top:20Px;
        margin-left:20Px;
        max-width: 98%;
        
    }
    
    .verde{
          background-color:cadetblue; 
    }
    
    
    .azul{
          background-color:blue;  
    }
    
    .amarelo{
          background-color:yellow;
            
    
    }
    .vermelho{
        background-color: red;
    }
    
    .cinzaClaro{
        background-color: aliceblue;
    }
    .divBlock{
    
        height:100px;
        
    }
    
    .ocupaTodoComponente{
        width: 100%;
    }
    
    .campoPesquisaMinWidth{
    
        min-width: 200Px;
    
    }
    
    
    /* .CSS DALTON */
    
    
    
    .linha{ 
        border: solid 3px; 
        border-color:black; 
        width: 95%;   
    }

    .div-box {
         
        background-color:darkgray;
        color: white;
        text-align: center;        
        font-size:14px;
        width: 90%;   
        font-weight: bold;
        margin-top: 10px;
        
     } 
/*
    .exibeDesktop{
        display: inline-flex;
    }

    .exibeMobile{
        display: none;
    } 
 
  */  
    @media screen and (max-width: 560px){
     

        .externoCampoConjugado{     
            align-content: center;
            /*  Comentar */
            /*
            border: solid 5px; 
            border-color:brown;  
            */
            
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;     
            margin-bottom: 5px; 
            max-width: 300px;
            
            }

        .pai21{
        
            background-color: aqua;
            
            /*  Comentar */
            /*
            background-color:cornflowerblue ;
            align-content: center;     
            border: solid 5px; 
            border-color:green;  
            */
        
            display: flex;
            flex-wrap: wrap;
            margin-right: 5px;     
            margin-bottom: 5px; 
            max-width: 300px;
            
            
        }
        
        
        .padraoDesc{
                max-width: 250px;
            /*  Comentar */
            /*
                border: solid 5px; 
                border-color:green; 
                */  
        }
        
        .divCentral {
            background-color: #E0E0E0;
            height: 900px;
            width: 95%; 
        }     
        
    
    }
    
    .espacoEntreComponentes{
            margin-right: 20px;  
            margin-top:20px;
    }

    .espacoEntreComponentesGrid{
            margin-right: 10px;  
            margin-top:10px;
    }
    
    
    .padraoCodigo1 {
    width: 300px; 
    margin-bottom:5px ; 
    margin-right: 15px; 
    /*  Comentar */
    /*   
    border: solid 5px ;
    border-color: blue;
    */
    }
    
    
    
    .pai22{
    
    width: 350px;
    margin-right: 15px; 
    margin-bottom:5px ;
    
    } 
    

    .externoCampoConjugado{     
    align-content: center;
    /*  Comentar */
    /*
    border: solid 5px; 
    border-color:brown;  
    */
    
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;     
    margin-bottom: 5px; 
    
    }



    .pai{    
    background-color:cornflowerblue ;
    align-content: center;
    border: solid 5px;
    width:95%; 
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
    }
    
    .pai21{
    background-color:cornflowerblue ;
    align-content: center;
    /*  Comentar */
    /*
    border: solid 5px; 
    border-color:brown;  
    */
    
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;     
    margin-bottom: 5px; 
    
    }
    
    .frontCampoConjugado{ 
 
     width: 100px;
     flex-grow: 0;
     } 

    .filho21{
     
    background-color: aqua;
    width: 100px;
    flex-grow: 0;
    } 
    
    .filho41{
     
     background-color: aqua;
     width: 100px;
     flex-grow: 0;
    } 
    
    .filho31{  
    background-color: aquamarine;
    width: 350px; 
    flex-grow: 1;
    } 


    .backCampoConjugado{  
 
    width: 350px; 
    flex-grow: 1;
    } 
    
    .filho51{  
    background-color: aquamarine;
    width:450px;
    
    } 
    
    .filho1{
     
    background-color: aqua;
    width: 100px;
    
    }
    
     
    
    .filho3{  
    background-color: aquamarine;
    width: 600px; 
    }
    
    .limitadorMedia{
    text-align: center;
    width: 100%;
     
    
    }
    
    .texto21{
    text-align: center;
    width: 100%;
    
    }
     


    /* Estilos personalizados */
    .dropdown-menu > .dropdown-submenu {
      position: static;
    }
    
    .dropdown-submenu .dropdown-menu {
      top: 0;
      left: 100%;
      margin-top: -6px;
      margin-left: -1px;
      width: 250px;
    }
   /*
    .dropdown-item {
      background-color: black;
      color: #640df0;
    }
 */
 

 .item-hover:hover  {
  background-color: #00060a; /* Defina a cor desejada para o hover */
  color: #fff; /* Cor do texto para o hover */
  cursor: pointer;
  



}


    

    </style>