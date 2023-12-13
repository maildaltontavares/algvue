<template>
    
    <div class=" msg_rodape_mobile"     
    :style="{ marginLeft:  this.$store.state.configuracaoTela.marginLeftRodape  ,
            width:  this.$store.state.configuracaoTela.tamanhoRodape,
            height:  this.$store.state.configuracaoTela.alturaRodape  }"
    >

            <div class="col-12">
                <p v-if="this.$store.state.haErrosStore" class="mensagem mensagem_erro">
                    {{ this.$store.state.mensagemErroStore }}
                </p>
                <p v-if="this.$store.state.haSucessoStore"  class="mensagem mensagem_sucesso">
                    {{ this.$store.state.mensagemSucessoStore }}
                </p>
            </div> 

    </div> 



</template>



<script>

 
import ApiMixin from '@/mixins/ApiMixin' 
import { mapState } from 'vuex';
  export default {
    name: 'MensagemMobile',
    mixins: [ApiMixin],
    data: () => ({
        mensagemSucessoMobile: '',
        mensagemErroMobile : '', 
        haErrosMobile: false,      
        haSucessoMobile: false, 
    
    }),
    computed: mapState(['usuarioSistema']),
    props: {   
            mensagemSucessoProps : {
            type : String 
            },
            mensagemErroProps : {
            type : String 
            }, 
            haErrosProps: {
            type : Boolean 
            }, 
            haSucessoProps : {
            type : Boolean 
            }, 

        },     
    setup() {
        

    },
    mounted(){

        console.log('Novo componente')

        console.log(this.mensagemSucessoProps)
        console.log(this.mensagemErroProps)
        console.log(this.haErrosProps)
        console.log(this.haSucessoProps)
 
        this.mensagemSucessoMobile = this.mensagemSucessoProps;
        this.mensagemErroMobile    = this.mensagemErroProps; 
        this.haErrosMobile         = this.haErrosProps; 
        this.haSucessoMobile       = this.haSucessoProps;  
    }
}
</script>

<style scoped>

</style>
