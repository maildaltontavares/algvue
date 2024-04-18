<script>

export default { 

       name: 'AcessoBaixarMisturaComponent'  ,

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



        //console.log('misturapadrao')  
 

        this.$router.push({name:'baixarmisturapadrao', params : {tituloProps:this.tituloProps,labelPesquisarComposicaoProps  : this.labelPesquisarComposicaoProps
             , acaoSelecionadaProps: this.acaoSelecionadaProps } } )

       }
    }       
 
</script>



