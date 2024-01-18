 
<template>
  <!--<v-app style="background-color: blanchedalmond;"> -->
  <v-app style="background-color: rgb(219, 220, 225) "> 
     <v-main   >
      <!-- Roteador Vue para trocar dinamicamente os componentes com base nas rotas -->
      <router-view></router-view>  
      </v-main>
  </v-app>
</template>

<!--
<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
-->
<script>
//import LoginComponent from '@view/HelloWorld.vue'

export default {
  name: 'App',

  /*
  components: {
  
  },
*/
  data: () => ({
    //
  }),
}
</script>


<!---->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.corpoPrincipal {
  margin-bottom: 10%;
}

.cabecalho_principal {
  background-color: #003366;
  margin-left: 5px;
  color: white;
  width: 99%;
  height: 7%;
  border-radius: 5px;
}

.cabecalho_principal_sistema {
  align-content: center;
  font-size: 20px;
  margin-top: 8px;
}

.cabecalho_principal_empresa {
  align-content: center;
  font-size: 18px;
  margin-top: 12px;
}

.cabecalho_principal_usuario {
  font-size: 14px;
  margin-top: 12px;
}

.cabecalho_principal_usuario_nome {
  font-size: 14px;
  font-size: bold;
  margin-top: 13px;
  padding-left: 10px;
}

.linha_inicio{

   margin-left:15%;
   width:70%;
   margin-top: 5%  

}

.rodape {
    position: fixed;
    bottom: 0;
    background-color: #003366;
    margin-left: 5px;
    width: 98%;
    height: 7%;
    border-radius: 5px;
    color: white;
}

.rodape_crud {
    position: fixed;
    bottom: 16px;
    background-color: #003366;
    margin-bottom: 15px;
    width: 88%;
    height: 6%;
    border-radius: 5px;
    color: white;
}

.rodape_mobile {
    position: fixed;
    bottom: 16px;   
    border-radius: 5px;
    color: white;
}


.rodape_crud2 {
    position: fixed;
    bottom: 16px;
    background-color: #003366;
    width: 100%;
    height: 50px;
    margin-bottom: 15px; 
    border-radius: 5px;
    color: white;
}


.rodape_crud3 {
    position: fixed;
    bottom: 16px; 
    width: 100%;
    height: 7%;
    margin-bottom: 5px; 
    border-radius: 5px;
    color: white;
}

.div_rodape {
  margin-top: 8px;
  margin-bottom: 8px;
}

.inputBold {
  font-weight: bold;
}

.dark {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: white;
  --popper-theme-border-width: 0px;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 10px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.desabilitado {
  color: #333333;
}

.desabilitado.hover {
  cursor: none;
}

.cabecalhoItens {
  background-color: darkblue;
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.itemLegenda {
  border-radius: 5px;
}

.error {
  border: 3px solid red;
}
.mensagem_erro {
  background-color: #DC3545;
  margin-top: 5px;
}

.mensagem_processando {
  margin-top: 10px;
  color: white;
  font-weight: bold;
}

.msg_rodape_mobile{ 
  position:fixed;
  z-index:9999;
  margin-top:20px;
  min-width: 400px;
  height: 300px;
}

.mensagem_sucesso {
  background-color: #28a745;
  margin-top: 10px;
}
 
.mensagem {
  width: 85%;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  height: 29px;
  padding-top: 3px;
  text-align: center;
  margin-left: 5%;
}

.label_cabecalho {
  font-weight: bold;
}

.botao_superior {
  background-color: dimgrey;
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.botao_rodape{ 
  margin: 2px;    
  max-height: 40px;

}

.botao_pesquisa{ 
     
  height: 80px;
  padding: 10px;

}



.tabela_cabecalho_linha {
  background-color: #003366;
  color: white;
  font-size: 12px;
}

.tabela_detalhe_linha {
  font-size: 11px;
}

.aguarde_processamento {
  display: inline-block;
  margin-top: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.v-input--is-disabled .v-label .v-input__control .v-input__slot {
    color:rgb(9, 29, 247);
    pointer-events: none;
    font-weight:bold; 
    font-size: 30px;
    background-color: #28a745;


}

.v-input--disabled {
    pointer-events: none;
    color:rgb(9, 29, 247);
    pointer-events: none;
    font-weight:bold; 
    font-size: 30px;
    white-space: pre-line;
    
   
    

}

.text-input input {
    font-size: 16px;
    white-space: pre-line;
}

.text-input-center input {
    font-size: 14px;
    text-align: center;
}

.text-input-right input {
    font-size: 14px;
    text-align: right;
}

.text-input textarea {
    font-size: 14px;
}

.text-input select {
    font-size: 14px;
}

.text-input checkbox {
    font-size: 14px;
}

.text-input .v-label {
    color: #1A237E;
    font-weight: bold;
    font-size: 14px;
}

.text-input-center .v-label {
    color: #1A237E;
    font-weight: bold;
    font-size: 14px;
}

.text-input-right .v-label {
    color: #1A237E;
    font-weight: bold;
    font-size: 14px;
}




</style>