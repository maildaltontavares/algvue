<template> 


    <v-navigation-drawer  :temporary="this.tipoTemporario"  v-model="isDrawerOpen"  style="background-color:#ef3118;color:rgb(247, 223, 4)"  >  
      

        <v-list style="padding: 0px;margin:0px">

            <div class="d-flex justify-space-between" style="background-color:#003366;height:65px;" >           
                                        
                    <div class="d-flex"  style="margin-left:0px; ">                              
                        <v-list-subheader  style="color:white;font-size:14px;margin-left:0px; ">ALG-Cont. Mátéria-Prima</v-list-subheader>                        
                    </div>                       
                     
                    <div class="d-flex justify-content-end" >  
                         <v-btn @click="fixaMenu()" :disabled="desabilitaPin" :icon="this.tipoIconeFixo"  density="compact" style="margin-top:5px;margin-right:5px;padding:3px;background-color:#003366 " ></v-btn>                           
                         <v-btn @click="isDrawerOpen=false" v-if ="exibeMenu" fill-dot="true" icon="mdi-arrow-left-circle-outline" density="compact" style="margin-top:5px;margin-right:5px;padding:3px;background-color:#003366  " ></v-btn>
                    </div>              
                     
            </div>
 
            <v-divider style="padding: 0px;margin:0px"></v-divider>

        </v-list>

        <v-list  > 
            <v-list-item prepend-icon="mdi-home" class="item-hover" style="color:white" >Home</v-list-item>      
            <v-list-item prepend-icon="mdi-account" class="item-hover">Usuários</v-list-item>            
             
            <v-list-group value="Cadastros" style="color:white" >

            <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-file-table-box-multiple"
                v-bind="props"
                title="Cadastros"
                class="item-hover"
                ></v-list-item>
            </template>

            
            <v-list-item prepend-icon="mdi-tree-outline" class="item-hover">Produtores</v-list-item>   
            <!--
            <v-list-item prepend-icon="mdi-book-account-outline">Procedência</v-list-item>            
            <v-list-item prepend-icon="mdi-account">Tipos de movimentos</v-list-item>   
            <v-list-item prepend-icon="mdi-account">Tipos de matérias-primas</v-list-item>    
            -->   

            </v-list-group>   

            <v-list-group value="Movimentos">

                <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-clipboard-file-outline"            
                    v-bind="props"
                    title="Movimentos"
                    class="item-hover"
                ></v-list-item>

                </template> 
                <v-list-item   prepend-icon="mdi-file-check-outline" style="color:white">Movimentação de MP</v-list-item>   
            </v-list-group>   

            <v-list-group value="Misturas" style="color:white" > 

                <template v-slot:activator="{ props }">
                <v-list-item
                prepend-icon="mdi-clipboard-file-outline"

                    v-bind="props"
                    title="Misturas"
                    class="item-hover"
                ></v-list-item>
                </template> 

                <v-list-item prepend-icon="mdi-account-edit-outline" class="item-hover">Editar</v-list-item>   
                <v-list-item prepend-icon="mdi-cloud-print-outline" class="item-hover">Listar</v-list-item>   
                <v-list-item prepend-icon="mdi-arrow-down-bold-circle" class="item-hover">Baixar</v-list-item>    


            </v-list-group>   
             

            <v-divider style="padding: 0px;margin:0px"></v-divider>   
            <v-list-item :to="{ name: 'login'}" prepend-icon="mdi-exit-to-app" class="item-hover">Sair</v-list-item>   
              
        
    </v-list>     

    

 
    </v-navigation-drawer>



    <v-app-bar color="#003366" class="border-b d-flex justify-space-between">  
        
        <div class="d-flex">
            <v-app-bar-nav-icon v-if="exibeMenu"  @click="isDrawerOpen=!isDrawerOpen"></v-app-bar-nav-icon>  
            <v-app-bar-title  >ALG </v-app-bar-title>
        </div>

        <div class="col-3 cabecalho_principal_empresa d-flex justify-content-center">
            <label class="empresa">{{ this.$store.state.usuarioSistema.empresa }}</label>
        </div>





        <template #append>
            <router-link to="/alg"  class="btn btn-sm btn-primary mt-2 mb-2"  >
                  <span  title="Sair" ><i class="bi bi-door-open" style="cursor: pointer;"></i> Sair </span>
             </router-link>
        </template>

    </v-app-bar> 


    <v-footer app  color="#003366" style="height:30px;"  >

        <div class="d-flex justify-space-between " style="background-color:#003366;height:20px;width:90%">

            <div >
                <label>Copyright@2023 - Santana Textiles </label>
            </div>

            <div>
                <label>Termos</label>
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
                        //this.isDrawerOpen=false;
                        this.exibeMenu=true;
                        this.tipoIconeFixo ="mdi-pin-off";    
                    }else{ 
                        this.isDrawerOpen=true;
                        this.exibeMenu=false;
                        this.tipoIconeFixo ="mdi-pin"; 
                    }




                }

            },
            created() {

                console.log('this.$store.state.tipoDispositivo')
                console.log(this.$store.state.tipoDispositivo)


               if(this.$store.state.tipoDispositivo=='desktop' ){
                  this.tipoTemporario=false;
                  this.isDrawerOpen=true;
                  this.exibeMenu=false;               
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
        /* 
        background-color:cornflowerblue ;     
        border: solid 5px ;
        border-color: blue;
        */
        width:95%; 
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