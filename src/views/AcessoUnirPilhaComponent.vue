<script>

export default { 

       name: 'AcessoUnirPilhaComponent'  ,

       props: {
 
            tituloProps : {
            type: String,
            required: true,
            },     
            labelPesquisarComposicaoProps : {
            type: String,
            required: true,
            },                       
            acaoSelecionadaProps: {
            type : String,
            required: true,
            },
       },   
       mounted(){ 


/*
        console.log('manterpilha')  
        console.log(this.tituloProps)  
        console.log(this.labelPesquisarComposicaoProps)  
        console.log(this.acaoSelecionadaProps )  
*/
 

        this.$router.push({name:'manterpilha', params : {tituloProps:this.tituloProps,labelPesquisarComposicaoProps  : this.labelPesquisarComposicaoProps
             , acaoSelecionadaProps: this.acaoSelecionadaProps } } )

       }
    }       
 
</script>



