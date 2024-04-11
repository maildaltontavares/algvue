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


    async populaMisturasAbertas(){
        /* DALTON */
               this.resultado = ""; 
               this.tipoMovimentoItens = [];  
       
               // Carrega tipo Maquina
               let url = `${process.env.VUE_APP_BASE_URL}/mp/abertas/${this.$store.state.usuarioSistema.idfil}`; 

               //console.log(url);
               
               await this.axios.get(url,this.apiTokenHeader())
               .then(response => { 
                   this.resultado = response.data;     

                   //console.log('Misturas abertas');
                   //console.log(this.resultado );

                
                   
                   this.misturasAbertas = [];
                   this.resultado.forEach((mistA ) => {  
                   
                       //console.log('Misturas XXXXX');
                       //console.log(mistA.mistura );   

                       this.misturasAbertasTemp.codigo = (mistA.mistura != null ? mistA.mistura  : null)  ;  

                       this.misturasAbertas.push({
                         codigo:this.misturasAbertasTemp.codigo,
                        
                        }); 


       
                   });  
                   //console.log('Misturas Fina l ');
                   //console.log(this.misturasAbertas );
                
       
               })
               .catch(error => {
               console.log("Erro: ", error);
               this.haErros = true
               });
           },

       async populaTipoMovimento(){
        /* DALTON */
               this.resultado = ""; 
               this.tipoMovimentoItens = []; 
       
               // Carrega tipo Maquina
               let url = `${process.env.VUE_APP_BASE_URL}/tipomovto/pesquisa/${this.$store.state.usuarioSistema.idfil}`; 

               //console.log(url);
               
               await this.axios.get(url,this.apiTokenHeader())
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
 
           async populaTipoMP(){
            /* DALTON */
                   this.resultado = ""; 
                   this.tipoMPItens = []; 
           
                   // Carrega tipo Maquina
                   let url = `${process.env.VUE_APP_BASE_URL}/tipomp/pesquisa/${this.$store.state.usuarioSistema.idfil}`; 
    
                   //console.log(url);
                   
                   
                   await this.axios.get(url,this.apiTokenHeader())
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
            
                               //console.log('Procedencia' );
                               //console.log(this.resultado );
                               
                               this.procedenciaItens = [];
                               this.resultado.forEach((proced) => {     
             
                               
                                   this.procedenciaItensTemp.codigo = (proced.codigo != null ? proced.codigo.trim()  : null)  ;  
                                   this.procedenciaItensTemp.descricao = (proced.descricao != null ? proced.descricao.trim()  : null)  ;  
                               
            
                                   this.procedenciaItens.push({
                                     codigo:this.procedenciaItensTemp.codigo,
                                     descricao:this.procedenciaItensTemp.descricao  
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

                       
                       async populaColoracao(){
                        /* DALTON */
                               this.resultado = ""; 
                               this.coloracao = []; 
                       
                               // Carrega tipo Maquina
                               let url = `${process.env.VUE_APP_BASE_URL}/coloracao/${this.$store.state.usuarioSistema.idfil}`; 
                
                               //console.log(url);
                               
                               
                               await this.axios.get(url,this.apiTokenHeader())
                               .then(response => { 
                                   this.resultado = response.data;     
                
                                   //console.log('populaColoracao');
                                   //console.log(this.resultado );
                                   
                                   this.coloracao = [];
                                   this.resultado.forEach((tpMP) => {     
                 
                                   
                                       this.coloracaoTemp.codigo = (tpMP.codigo != null ? tpMP.codigo.trim()  : null)  ;  
                                       this.coloracaoTemp.descricao = (tpMP.descricao != null ? tpMP.descricao.trim()  : null)  ;  
                                   
                
                                       this.coloracao.push({
                                         codigo:this.coloracaoTemp.codigo,
                                         descricao:this.coloracaoTemp.codigo  
                                        }); 
                
                
                       
                                   });  
                                   
                                   //console.log(this.coloracao);
                                
                       
                               })
                               .catch(error => {
                               console.log("Erro: ", error);
                               this.haErros = true
                               });
                           },                       

                       
                       
                       async buscaId(){
                        /* DALTON */
                               
                               let vId = 0;
                               this.resultado = ""; 
                               ///this.tipoMPItens = []; 
                               
                               // Carrega tipo Maquina
                               let url = `${process.env.VUE_APP_BASE_URL}/movimento/novoitem`; 
                
                               //console.log('id'); 
                               
                               await this.axios.get(url,this.apiTokenHeader())
                               .then(response => { 
                                   this.resultado = response.data;  
                                   vId = this.resultado ; 
                                   //console.log(' Funcao vId'); 
                                   //console.log(vId); 
                       
                               })
                                .catch(error => {
                                console.log("Erro: ", error);
                                this.haErros = true
                                
                               });

                               return vId;
                           },




    }
}    