import { mapState } from 'vuex'

export default { 

  computed:   {...mapState(['usuarioSistema'])},

  data: () => ({
    dados: {},
    nomePesquisa: '',
    itens: [],
    indiceAtual: {},
    resultPesquisa: [],
    page: 1,
    perPage: 10,
    pages: [],
  }),
  methods: {
   
       populaTipoMovimento(){
        /* DALTON */
               this.resultado = ""; 
               this.tipoMovimentoItens = []; 
       
               // Carrega tipo Maquina
               let url = `${process.env.VUE_APP_BASE_URL}/tipomovto/filial/${this.$store.state.usuarioSistema.idfil}`; 

               //console.log(url);
               
               this.axios.get(url,this.apiTokenHeader())
               .then(response => { 
                   this.resultado = response.data;     

                   //console.log(this.resultado );
                   
                   this.tipoMovimentoItens = [];
                   this.resultado.forEach((tpMov ) => {     
 
                   
                       this.tipoMovimentoItensTemp.codigo = (tpMov.codigo != null ? tpMov.codigo.trim()  : null)  ;  
                       this.tipoMovimentoItensTemp.descricao = (tpMov.descricao != null ? tpMov.descricao.trim()  : null)  ;   

                       this.tipoMovimentoItens.push({
                         codigo:this.tipoMovimentoItensTemp.codigo,
                         descricao:this.tipoMovimentoItensTemp.descricao  
                        }); 


       
                   });    
                
       
               })
               .catch(error => {
               console.log("Erro: ", error);
               this.haErros = true
               });
           },
 
           populaTipoMP(){
            /* DALTON */
                   this.resultado = ""; 
                   this.tipoMPItens = []; 
           
                   // Carrega tipo Maquina
                   let url = `${process.env.VUE_APP_BASE_URL}/tipomp/filial/${this.$store.state.usuarioSistema.idfil}`; 
    
                   //console.log(url);
                   
                   this.axios.get(url,this.apiTokenHeader())
                   .then(response => { 
                       this.resultado = response.data;     
    
                       //console.log(this.resultado );
                       
                       this.tipoMPItens = [];
                       this.resultado.forEach((tpMP) => {     
     
                       
                           this.tipoMPItensTemp.codigo = (tpMP.codigo != null ? tpMP.codigo.trim()  : null)  ;  
                           this.tipoMPItensTemp.descricao = (tpMP.descricao != null ? tpMP.descricao.trim()  : null)  ;  
                       
    
                           this.tipoMPItens.push({
                             codigo:this.tipoMPItensTemp.codigo,
                             descricao:this.tipoMPItensTemp.descricao  
                            }); 
    
    
           
                       });    
                    
           
                   })
                   .catch(error => {
                   console.log("Erro: ", error);
                   this.haErros = true
                   });
               },
     
               populaProdutor(){
                /* DALTON */
                       this.resultado = ""; 
                       this.produtorItens = []; 
               
                       // Carrega tipo Maquina
                       let url = `${process.env.VUE_APP_BASE_URL}/produtor/filial/${this.$store.state.usuarioSistema.idfil}`; 
        
                       //console.log(url);
                       
                       this.axios.get(url,this.apiTokenHeader())
                       .then(response => { 
                           this.resultado = response.data;     
        
                           //console.log(this.resultado );
                           
                           this.produtorItens = [];
                           this.resultado.forEach((prod) => {     
         
                           
                               this.produtorItensTemp.codigo = (prod.codigo != null ? prod.codigo.trim()  : null)  ;  
                               this.produtorItensTemp.descricao = (prod.descricao != null ? prod.descricao.trim()  : null)  ;  
                           
        
                               this.produtorItens.push({
                                 codigo:this.produtorItensTemp.codigo,
                                 descricao:this.produtorItensTemp.descricao  
                                });  
                

                                //console.log('Produtores')
                                //console.log(this.produtorItens)



                           });    
                        
               
                       })
                       .catch(error => {
                       console.log("Erro: ", error);
                       this.haErros = true
                       });
                   },

                   populaProcedencia(){
                    /* DALTON */
                           this.resultado = ""; 
                           this.produtorItens = []; 
                   
                           // Carrega tipo Maquina
                           let url = `${process.env.VUE_APP_BASE_URL}/procedencia/pesquisa/${this.$store.state.usuarioSistema.idfil}`; 
            
                           //console.log(url);
                           
                           this.axios.get(url,this.apiTokenHeader())
                           .then(response => { 
                               this.resultado = response.data;     
            
                               //console.log(this.resultado );
                               
                               this.procedenciaItens = [];
                               this.resultado.forEach((proced) => {     
             
                               
                                   this.procedenciaItensTemp.codigo = (proced.codigo != null ? proced.codigo.trim()  : null)  ;  
                                   this.procedenciaItensTemp.descricao = (proced.descricao != null ? proced.descricao.trim()  : null)  ;  
                               
            
                                   this.procedenciaItens.push({
                                     codigo:this.procedenciaItensTemp.codigo,
                                     descricao:this.procedenciaItensTemp.descricao  
                                    });  
                    
    
                                     console.log('Produtores')
                                    console.log(this.produtorItens)
    
    
    
                               });    
                            
                   
                           })
                           .catch(error => {
                           console.log("Erro: ", error);
                           this.haErros = true
                           });
                       },                   

    }
}    