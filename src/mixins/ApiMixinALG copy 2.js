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


    scrollToTop() {
        window.scrollTo(0, 0);
      },   

    async populaMisturasFull(){
        /* DALTON */
               this.resultado = ""; 
               this.tipoMovimentoItens = [];  
       
      
               let url = `${process.env.VUE_APP_BASE_URL}/mp/full/${this.$store.state.usuarioSistema.idfil}`; 

               //console.log(url);
               
               await this.axios.get(url,this.apiTokenHeader())
               .then(response => { 
                   this.resultado = response.data;     

                   //console.log('Misturas full');
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


           async populaMisturasABaixar(){
            /* DALTON */
                   this.resultado = ""; 
                   this.misturasABaixar = [];  
           
                   // Carrega tipo Maquina
                   let url = `${process.env.VUE_APP_BASE_URL}/mp/abaixar/${this.$store.state.usuarioSistema.idfil}`; 
    
                   //console.log(url);
                   
                   await this.axios.get(url,this.apiTokenHeader())
                   .then(response => { 
                       this.resultado = response.data;     
    
                       //console.log('Misturas abertas');
                       //console.log(this.resultado );
    
                    
                       
                       this.misturasABaixar = [];
                       this.resultado.forEach((mistA ) => {  
                       
                           //console.log('Misturas XXXXX');
                           //console.log(mistA.mistura );   
    
                           this.misturasABaixarTemp.codigo = (mistA.mistura != null ? mistA.mistura  : null)  ;  
    
                           this.misturasABaixar.push({
                             codigo:this.misturasABaixarTemp.codigo,
                            
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


    async populaTipoMaquina(){
    /* DALTON */
            this.resultado = ""; 
            this.tipoMaquinaItens = []; 
    
            // Carrega tipo Maquina
            let url = `${process.env.VUE_APP_BASE_URL_CPF}/tipomaquina/filial/01`; 


            //console.log(url)
            
            this.axios.get(url,this.apiTokenHeader())
            .then(response => { 
                this.resultado = response.data;     
                
                this.tipoMaquinaItens = [];
                this.resultado.forEach((tpMaq ) => {   
                
                    this.tipoMaquinaTemp.codigo = (tpMaq.codigo != null ? tpMaq.codigo.trim()  : null)  ; 
                    this.tipoMaquinaTemp.descricao = (tpMaq.nome != null ? tpMaq.nome.trim()  : null)  ;   
                    this.tipoMaquinaItens.push({codigo:this.tipoMaquinaTemp.codigo, descricao:this.tipoMaquinaTemp.descricao }); 
    
                });   


                //console.log(this.tipoMaquinaItens)
    
            })
            .catch(error => {
            console.log("Erro: ", error.response.data);
            this.haErros = true
            });
    },               

    async populaTipoTesteCQFio(){
      /* DALTON */
              this.resultado = ""; 
              this.tipoTesteCQFioItens = []; 
      
              // Carrega tipo Maquina
              let url = `${process.env.VUE_APP_BASE_URL}/tipotestecqf/filial/01`; 
  
  
              //console.log(url)
              
              this.axios.get(url,this.apiTokenHeader())
              .then(response => { 
                  this.resultado = response.data;   
                  
                  
                  //console.log(this.resultado );
                  
                  this.tipoTesteCQFioItens = [];
                  this.resultado.forEach((tpTesteCQFio ) => {   
                  
                      this.tipoTesteCQFioTemp.codigo = (tpTesteCQFio.codigo != null ? tpTesteCQFio.codigo.trim()  : null)  ; 
                      this.tipoTesteCQFioTemp.descricao = (tpTesteCQFio.descricao != null ? tpTesteCQFio.descricao.trim()  : null)  ;  

                      this.tipoTesteCQFioItens.push({codigo:this.tipoTesteCQFioTemp.codigo, nome:this.tipoTesteCQFioTemp.descricao }); 
      
                  });   
  
  
                  //console.log(this.tipoTesteCQFioItens)
      
              })
              .catch(error => {
              console.log("Erro: ", error.response.data);
              this.haErros = true
              });
      },    

    async populaMisturasAbertas(){
        /* DALTON */
               this.resultado = ""; 
               this.misturasAbertas = [];  
       
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
                               this.produtorItensTemp.chave = (prod.chave != null ? prod.chave.trim()  : null)  ;  

                           
        
                               this.produtorItens.push({
                                 codigo:this.produtorItensTemp.codigo,
                                 descricao:this.produtorItensTemp.descricao ,
                                 chave: this.produtorItensTemp.chave 
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
                           this.procedenciaItens = []; 
                   
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
                                   //console.log('this.coloracao');
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




                     calculaTotais(pComposicao,elemento ){
           
                            let aFardos =  pComposicao; 
                            let somaFardosMistura;
                            let somaFardosEstoque;
                            let pesoMovimento;
                             
                  
                            pesoMovimento = 0;
                            this.nPesoMovimento = 0;
                  
                            // Resumo da Mistura
                            let nSAC_RT = 0;
                            let nTRID_RT = 0;
                            let nPIM_RT = 0;
                            let nSC_RT = 0;
                            let nSCI_RT = 0;
                            let nMST_RT = 0;
                            let nMIC_RT = 0;
                            let nMAT_RT = 0;
                            let nUHML_RT = 0;
                            let nUI_RT = 0;                       
                            let nSF_RT = 0;
                            let nSTR_RT = 0;
                            let nELG_RT = 0;
                            let nTIPO_RT = 0;
                            let nTrAr_RT = 0;   
                            let nRS_RT = 0;   
                            let nB_RT = 0;   
                            let nTrCnt_RT = 0;    
                  
                            let nSAC_GERAL  = 0;
                            let nTRID_GERAL  = 0;
                            let nPIM_GERAL  = 0;
                            let nSC_GERAL  = 0;
                            let nSCI_GERAL  = 0;
                            let nMST_GERAL  = 0;
                            let nMIC_GERAL  = 0;
                            let nMAT_GERAL  = 0;
                            let nUHML_GERAL  = 0;
                            let nUI_GERAL  = 0;                       
                            let nSF_GERAL  = 0;
                            let nSTR_GERAL  = 0;
                            let nELG_GERAL  = 0;
                            let nTIPO_GERAL  = 0;
                            let nTrAr_GERAL  = 0;   
                            let nRS_GERAL = 0;   
                            let nB_GERAL = 0;   
                            let nTrCnt_GERAL = 0;    
                               
                  
                  
                                                 
                            somaFardosMistura = 0;
                            somaFardosEstoque = 0;
                            this.aResumoMistura = [];
                            this.aResumoProdutor = [];
                            this.aResumoProdutorTotalizador=[];
                            this.aProdutorSelecionado=[];
                            this.aResumoQualidade = [];
                            this.aEstoqueProdutor = [];
                            this.aEstoqueQualidade = [];
                            this.aResumoQualidadeTotalizador=[];
                            this.aEstoqueQualidadeTotalizador=[];  
                  
                  
                            this.aEstoqueProdutorTotalizador = [];
                            this.aEstoqueQualidadeTotalizador = [];          
                            //console.log('calculaTotais')
                            //console.log(pComposicao);
                            //console.log(this.aComposicao);
                            //console.log(elemento);
                  
                            for (let j = 0; j < aFardos.length; j++) {  
                              
                                    //console.log(aFardos[j]);
                                    
                                    if(aFardos[j].qtde != null && aFardos[j].qtde > 0 ){
                                        somaFardosMistura+=aFardos[j].qtde;
                                        pesoMovimento += aFardos[j].qtde * aFardos[j].m4PESMED;
                                    }
                  
                                    if(aFardos[j].estoque != null && aFardos[j].estoque > 0 ){
                                        somaFardosEstoque+=aFardos[j].estoque;
                                    }                  
                  
                                    /// Fardos Selecionados
                                    if(aFardos[j].qtde){ 
                                                
                                          if(aFardos[j].sac){
                                            nSAC_RT = aFardos[j].sac * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].trid){
                                            nTRID_RT= aFardos[j].trid * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].pim){
                                            nPIM_RT= aFardos[j].pim * aFardos[j].qtde
                                          }
                                                          
                  
                  
                                          if(aFardos[j].sc){
                                            nSC_RT= aFardos[j].sc * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].sic){
                                            nSCI_RT= aFardos[j].sic * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].mst){
                                            nMST_RT= aFardos[j].mst * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].mic){
                                            nMIC_RT= aFardos[j].mic * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].mat){
                                            nMAT_RT= aFardos[j].mat * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].m4UHML){
                                            nUHML_RT= aFardos[j].m4UHML * aFardos[j].qtde
                                          }
                                                      
                  
                                          
                                          if(aFardos[j].ui){
                                            nUI_RT= aFardos[j].ui * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].sf){
                                            nSF_RT= aFardos[j].sf * aFardos[j].qtde
                                          }
                                                        
                  
                  
                                          if(aFardos[j].str){
                                            nSTR_RT= aFardos[j].str * aFardos[j].qtde
                                          }
                  
                  
                  
                                          if(aFardos[j].elg){
                                            nELG_RT= aFardos[j].elg * aFardos[j].qtde
                                          }
                                                        
                  
                  
                                          if(aFardos[j].tipo){
                                            nTIPO_RT= aFardos[j].tipo * aFardos[j].qtde
                                          } 
                  
                  
                                          if(aFardos[j].m4TRAR){
                                            nTrAr_RT= aFardos[j].m4TRAR * aFardos[j].qtde;
                                          }

                                          if(aFardos[j].m4TRCNT){
                                            nTrCnt_RT= aFardos[j].m4TRCNT * aFardos[j].qtde;
                                          }    
                                          
                                          if(aFardos[j].m4B){
                                            nB_RT= aFardos[j].m4B * aFardos[j].qtde;
                                          }                                             
                                            

                                          if(aFardos[j].m4RS){
                                            nRS_RT= aFardos[j].m4RS * aFardos[j].qtde;
                                          }                                            
                   
                                    }else{
                  
                  
                                          nSAC_RT   = 0;
                                          nTRID_RT  = 0;
                                          nPIM_RT   = 0;
                                          nSC_RT    = 0;
                                          nSCI_RT   = 0;
                                          nMST_RT   = 0;
                                          nMIC_RT   = 0;
                                          nMAT_RT   = 0;
                                          nUHML_RT  = 0;
                                          nUI_RT    = 0;
                                          nSF_RT    = 0;
                                          nSTR_RT   = 0;
                                          nELG_RT   = 0;
                                          nTIPO_RT  = 0;
                                          nTrAr_RT  = 0;   
                                          nTrCnt_RT = 0;
                                          nB_RT     = 0;
                                          nRS_RT    = 0;

                                                                                        
                  
                                    }  // Final possui quantidade selecionada
                   
                                    /// Possui estoque
                                    if(aFardos[j].estoque){
                  
                                          if(aFardos[j].sac){
                                            nSAC_GERAL  = aFardos[j].sac * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].trid){
                                            nTRID_GERAL= aFardos[j].trid * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].pim){
                                            nPIM_GERAL= aFardos[j].pim * aFardos[j].estoque
                                          }
                                                          
                  
                  
                                          if(aFardos[j].sc){
                                            nSC_GERAL= aFardos[j].sc * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].sic){
                                            nSCI_GERAL= aFardos[j].sic * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].mst){
                                            nMST_GERAL= aFardos[j].mst * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].mic){
                                            nMIC_GERAL= aFardos[j].mic * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].mat){
                                            nMAT_GERAL= aFardos[j].mat * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].m4UHML){
                                            nUHML_GERAL= aFardos[j].m4UHML * aFardos[j].estoque
                                          }
                                                      
                  
                  
                                          if(aFardos[j].ui){
                                            nUI_GERAL= aFardos[j].ui * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].sf){
                                            nSF_GERAL= aFardos[j].sf * aFardos[j].estoque
                                          }
                                                        
                  
                  
                                          if(aFardos[j].str){
                                            nSTR_GERAL= aFardos[j].str * aFardos[j].estoque
                                          }
                  
                  
                  
                                          if(aFardos[j].elg){
                                            nELG_GERAL= aFardos[j].elg * aFardos[j].estoque
                                          }
                                                        
                  
                  
                                          if(aFardos[j].tipo){
                                            nTIPO_GERAL= aFardos[j].tipo * aFardos[j].estoque
                                          } 
                  
                                          if(aFardos[j].m4TRAR){
                                            nTrAr_GERAL= aFardos[j].m4TRAR * aFardos[j].estoque;
                                          }		 

                                          if(aFardos[j].m4TRCNT){
                                            nTrCnt_GERAL= aFardos[j].m4TRCNT * aFardos[j].estoque;
                                          }    
                                          
                                          if(aFardos[j].m4B){
                                            nB_GERAL= aFardos[j].m4B * aFardos[j].estoque;
                                          }                                             
                                            

                                          if(aFardos[j].m4RS){
                                            nRS_GERAL= aFardos[j].m4RS * aFardos[j].estoque;
                                          }                                            
                  
                  
                                    }else{
                  
                  
                                         nSAC_GERAL  = 0;                      
                                         nTRID_GERAL =  0; 
                                         nPIM_GERAL  =  0; 
                                         nSC_GERAL   =  0; 
                                         nSCI_GERAL  =  0; 
                                         nMST_GERAL  =  0; 
                                         nMIC_GERAL  =  0; 
                                         nMAT_GERAL  =  0; 
                                         nUHML_GERAL =  0; 
                                         nUI_GERAL   =  0; 
                                         nSF_GERAL   =  0; 
                                         nSTR_GERAL  =  0; 
                                         nELG_GERAL  =  0; 
                                         nTIPO_GERAL =  0; 
                                         nTrAr_GERAL =  0; 
                                         nTrCnt_GERAL = 0;
                                         nB_GERAL     = 0;
                                         nRS_GERAL    = 0;                                         
                  
                  
                  
                                    } /// Final possui estoque          
                  
                   
                  
                                    // Lote Testado
                                    if ((aFardos[j].mic != null && aFardos[j].mic  > 0 ) ||
                                        (aFardos[j].uhml!= null && aFardos[j].uhml > 0 ) ||
                                        (aFardos[j].sic!= null  && aFardos[j].sic  > 0 ) ||
                                        (aFardos[j].mat!= null  && aFardos[j].mat  > 0 ) 
                                    ){ 
                  
                  
                                            //// Estoque por Qualidade
                                            let objEstQual = this.aEstoqueQualidade.find(objEstQual => objEstQual.qualidade === aFardos[j].m4QUAL); 
                                             
                  
                                            if (objEstQual) { 
                                            
                                                      objEstQual.TotalTestadoMistura     += aFardos[j].estoque;  
                                                      objEstQual.TotFardosEstoque     += aFardos[j].estoque;  
                                            }else{ 
                  
                                                    let objEstkQualidade = {
                                                      
                                                            qualidade: aFardos[j].m4QUAL, 
                                                            TotalTestadoMistura:aFardos[j].estoque,
                                                            TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                  }
                  
                                                  this.aEstoqueQualidade.push(objEstkQualidade);  
                                            }  
                  
                  
                  
                  
                  
                  
                  
                                            //// Estoque por produtor
                                            let objEstProd = this.aEstoqueProdutor.find(objEstProd => objEstProd.produtor === aFardos[j].produt); 
                                             
                  
                                            if (objEstProd) {
                            
                                                      objEstProd.SAC  += nSAC_GERAL;
                                                      objEstProd.TRID += nTRID_GERAL;
                                                      objEstProd.PIM  += nPIM_GERAL;
                                                      objEstProd.SC   += nSC_GERAL; 
                                                      objEstProd.SCI  += nSCI_GERAL;
                                                      objEstProd.MST  += nMST_GERAL;
                                                      objEstProd.MIC  += nMIC_GERAL;
                                                      objEstProd.MAT += nMAT_GERAL,
                                                      objEstProd.UHML += nUHML_GERAL;
                                                      objEstProd.UI   += nUI_GERAL;                       
                                                      objEstProd.SF   += nSF_GERAL;
                                                      objEstProd.STR  += nSTR_GERAL;
                                                      objEstProd.ELG  += nELG_GERAL;
                                                      objEstProd.TIPO += nTIPO_GERAL;
                                                      objEstProd.TrAr += nTrAr_GERAL;  
                                                      objEstProd.TrCnt += nTrCnt_GERAL;  
                                                      objEstProd.B     += nB_GERAL;  
                                                      objEstProd.RS    += nRS_GERAL;                                                        

                                                      objEstProd.TotalTestadoMistura  += aFardos[j].estoque;
                                                      objEstProd.TotFardosEstoque     += aFardos[j].estoque;  
                                                      
                                                      //console.log(this.aResumoMistura); 
                  
                    
                                            }else{
                  
                  
                                                    let objEstkProdutor = {
                                                      
                                                            produtor: aFardos[j].produt,
                                                            SAC:nSAC_GERAL,
                                                            TRID:nTRID_GERAL,
                                                            PIM:nPIM_GERAL,
                                                            SC:nSC_GERAL,
                                                            SCI:nSCI_GERAL,
                                                            MST:nMST_GERAL,
                                                            MIC:nMIC_GERAL,
                                                            MAT:nMAT_GERAL,
                                                            UHML:nUHML_GERAL,
                                                            UI  :nUI_GERAL,                       
                                                            SF	:nSF_GERAL,
                                                            STR	:nSTR_GERAL,
                                                            ELG	:nELG_GERAL,
                                                            TIPO:nTIPO_GERAL,
                                                            TrAr:nTrAr_GERAL,  
                                                            TrCnt:nTrCnt_GERAL, 
                                                            B: nB_GERAL,  
                                                            RS:nRS_GERAL,                                                              
                                                            TotFardosMistura:   0,
                                                            TotFardos_selec:    0,
                                                            TotalTestadoMistura:aFardos[j].estoque,
                                                            TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                  }
                  
                                                  this.aEstoqueProdutor.push(objEstkProdutor); 
                  
                                            }  
                  
                  
                  
                  
                  
                      
                                            if(aFardos[j].qtde){
                                                  
                                                // Com quantidade seleciona e testado
                                                //// Mistura Completa
                                                let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
                  
                                                if (objMistura) {
                                
                                                          objMistura.SAC  += nSAC_RT;
                                                          objMistura.TRID += nTRID_RT;
                                                          objMistura.PIM  += nPIM_RT;
                                                          objMistura.SC   += nSC_RT; 
                                                          objMistura.SCI  += nSCI_RT,
                                                          objMistura.MST  += nMST_RT,
                                                          objMistura.MIC  += nMIC_RT,
                                                          objMistura.MAT += nMAT_RT,
                                                          objMistura.UHML += nUHML_RT,
                                                          objMistura.UI   += nUI_RT,                       
                                                          objMistura.SF   += nSF_RT,
                                                          objMistura.STR  += nSTR_RT,
                                                          objMistura.ELG  += nELG_RT,
                                                          objMistura.TIPO += nTIPO_RT,
                                                          objMistura.TrAr += nTrAr_RT;  
                                                          objMistura.TrCnt += nTrCnt_RT;  
                                                          objMistura.B     += nB_RT;  
                                                          objMistura.RS    += nRS_RT; 

                                                          objMistura.TotFardosMistura     += aFardos[j].qtde;
                                                          objMistura.TotFardos_selec      += aFardos[j].qtde;
                                                          objMistura.TotalTestadoMistura  += aFardos[j].qtde;
                                                          objMistura.TotFardosEstoque     += aFardos[j].estoque;  
                                                          
                                                          //console.log(this.aResumoMistura); 
                  
                        
                                                }else{
                  
                  
                                                        let objResumoMistura = {
                                                          
                                                                mistura: this.mistura.numeroMistura,
                                                                SAC:nSAC_RT,
                                                                TRID:nTRID_RT,
                                                                PIM:nPIM_RT,
                                                                SC:nSC_RT,
                                                                SCI:nSCI_RT,
                                                                MST:nMST_RT,
                                                                MIC:nMIC_RT,
                                                                MAT:nMAT_RT,
                                                                UHML:nUHML_RT,
                                                                UI  :nUI_RT,                       
                                                                SF	:nSF_RT,
                                                                STR	:nSTR_RT,
                                                                ELG	:nELG_RT,
                                                                TIPO:nTIPO_RT,
                                                                TrAr:nTrAr_RT,   
                                                                TrCnt : nTrCnt_RT,  
                                                                B     : nB_RT,  
                                                                RS    : nRS_RT,                                                                 
                                                                TotFardosMistura:   aFardos[j].qtde,
                                                                TotFardos_selec:    aFardos[j].qtde,
                                                                TotalTestadoMistura:aFardos[j].qtde,
                                                                TotFardosEstoque:   aFardos[j].estoque,                                       
                  
                                                      }
                  
                                                      this.aResumoMistura.push(objResumoMistura); 
                  
                                                }  
                  
                  
                                                //// Produtor
                                                let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 
                  
                                                if (objProdutor) {
                                
                                                          objProdutor.SAC  += nSAC_RT;
                                                          objProdutor.TRID += nTRID_RT;
                                                          objProdutor.PIM  += nPIM_RT;
                                                          objProdutor.SC   += nSC_RT; 
                                                          objProdutor.SCI  += nSCI_RT,
                                                          objProdutor.MST  += nMST_RT,
                                                          objProdutor.MIC  += nMIC_RT,
                                                          objProdutor.MAT += nMAT_RT,
                                                          objProdutor.UHML += nUHML_RT,
                                                          objProdutor.UI   += nUI_RT,                       
                                                          objProdutor.SF   += nSF_RT,
                                                          objProdutor.STR  += nSTR_RT,
                                                          objProdutor.ELG  += nELG_RT,
                                                          objProdutor.TIPO += nTIPO_RT,
                                                          objProdutor.TrAr += nTrAr_RT 
                                                          objProdutor.TrCnt += nTrCnt_RT;  
                                                          objProdutor.B     += nB_RT;  
                                                          objProdutor.RS    += nRS_RT;                                                           
                                                          objProdutor.TotFardosMistura     += aFardos[j].qtde;
                                                          objProdutor.TotFardos_selec      += aFardos[j].qtde;
                                                          objProdutor.TotalTestadoMistura  += aFardos[j].qtde;
                                                          objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
                                                          
                                                          //console.log(this.aResumoMistura); 
                  
                        
                                                }else{
                  
                  
                                                        let objResumoProdutor = {
                                                          
                                                                produtor: aFardos[j].produt,
                                                                SAC:nSAC_RT,
                                                                TRID:nTRID_RT,
                                                                PIM:nPIM_RT,
                                                                SC:nSC_RT,
                                                                SCI:nSCI_RT,
                                                                MST:nMST_RT,
                                                                MIC:nMIC_RT,
                                                                MAT:nMAT_RT,
                                                                UHML:nUHML_RT,
                                                                UI  :nUI_RT,                       
                                                                SF	:nSF_RT,
                                                                STR	:nSTR_RT,
                                                                ELG	:nELG_RT,
                                                                TIPO:nTIPO_RT,
                                                                TrAr:nTrAr_RT,  
                                                                TrCnt : nTrCnt_RT,  
                                                                B     : nB_RT,  
                                                                RS    : nRS_RT,                                                                   
                                                                TotFardosMistura:   aFardos[j].qtde,
                                                                TotFardos_selec:    aFardos[j].qtde,
                                                                TotalTestadoMistura:aFardos[j].qtde,
                                                                TotFardosEstoque:   aFardos[j].estoque,                                       
                  
                                                      }
                  
                                                      this.aResumoProdutor.push(objResumoProdutor); 
                  
                                                }  
                  
                  
                  
                  
                                                //// Qualidade
                                                let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 
                  
                                                if (objQualidade) {
                                
                                                          objQualidade.SAC  += nSAC_RT;
                                                          objQualidade.TRID += nTRID_RT;
                                                          objQualidade.PIM  += nPIM_RT;
                                                          objQualidade.SC   += nSC_RT; 
                                                          objQualidade.SCI  += nSCI_RT,
                                                          objQualidade.MST  += nMST_RT,
                                                          objQualidade.MIC  += nMIC_RT,
                                                          objQualidade.MAT += nMAT_RT,
                                                          objQualidade.UHML += nUHML_RT,
                                                          objQualidade.UI   += nUI_RT,                       
                                                          objQualidade.SF   += nSF_RT,
                                                          objQualidade.STR  += nSTR_RT,
                                                          objQualidade.ELG  += nELG_RT,
                                                          objQualidade.TIPO += nTIPO_RT,
                                                          objQualidade.TrAr += nTrAr_RT 
                                                          objQualidade.TrCnt += nTrCnt_RT;  
                                                          objQualidade.B     += nB_RT;  
                                                          objQualidade.RS    += nRS_RT;                                                               
                                                          objQualidade.TotFardosMistura     += aFardos[j].qtde;
                                                          objQualidade.TotFardos_selec      += aFardos[j].qtde;
                                                          objQualidade.TotalTestadoMistura  += aFardos[j].qtde;
                                                          objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
                                                          
                                                          //console.log(this.aResumoMistura); 
                  
                        
                                                }else{
                  
                  
                                                        let objResumoQualidade = {
                                                          
                                                                qualidade: aFardos[j].m4QUAL,
                                                                SAC:nSAC_RT,
                                                                TRID:nTRID_RT,
                                                                PIM:nPIM_RT,
                                                                SC:nSC_RT,
                                                                SCI:nSCI_RT,
                                                                MST:nMST_RT,
                                                                MIC:nMIC_RT,
                                                                MAT:nMAT_RT,
                                                                UHML:nUHML_RT,
                                                                UI  :nUI_RT,                       
                                                                SF	:nSF_RT,
                                                                STR	:nSTR_RT,
                                                                ELG	:nELG_RT,
                                                                TIPO:nTIPO_RT,
                                                                TrAr:nTrAr_RT,  
                                                                TrCnt : nTrCnt_RT,  
                                                                B     : nB_RT,  
                                                                RS    : nRS_RT,
                                                                TotFardosMistura:   aFardos[j].qtde,
                                                                TotFardos_selec:    aFardos[j].qtde,
                                                                TotalTestadoMistura:aFardos[j].qtde,
                                                                TotFardosEstoque:   aFardos[j].estoque,                                       
                  
                                                      }
                  
                                                      this.aResumoQualidade.push(objResumoQualidade); 
                  
                                                }  
                  
                  
                  
                  
                  
                  
                                            
                                            }else {    // Final com/sem quantidade selecionada
                  
                                                    
                                                    // // Sem quantidade selecionada e testado
                                                    //// Mistura
                                                    let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
                  
                                                    if (objMistura) {
                                                              
                                                         objMistura.TotFardosEstoque     += aFardos[j].estoque;  
                            
                                                    }else{
                  
                  
                                                            let objResumoMistura = {
                                                              
                                                                    mistura: this.mistura.numeroMistura,
                                                                    SAC:0,
                                                                    TRID:0,
                                                                    PIM:0,
                                                                    SC:0,
                                                                    SCI:0,
                                                                    MST:0,
                                                                    MIC:0,
                                                                    MAT:0,
                                                                    UHML:0,
                                                                    UI  :0,                       
                                                                    SF	:0,
                                                                    STR	:0,
                                                                    ELG	:0,
                                                                    TIPO:0,
                                                                    TrAr:0,  
                                                                    TrCnt : 0,  
                                                                    B     : 0,  
                                                                    RS    : 0,
                                                                    TotFardosMistura:   0,
                                                                    TotFardos_selec:    0,
                                                                    TotalTestadoMistura:0,
                                                                    TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                          }
                  
                                                          this.aResumoMistura.push(objResumoMistura); 
                  
                                                    }  
                  
                                                    // // Sem quantidade selecionada e testado
                                                    //// Produtor
                                                    let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 
                  
                                                    if (objProdutor) {
                                                              
                                                          objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
                            
                                                    }else{
                  
                  
                                                            let objResumoProdutor = {
                                                              
                                                                    produtor: aFardos[j].produt,
                                                                    SAC:0,
                                                                    TRID:0,
                                                                    PIM:0,
                                                                    SC:0,
                                                                    SCI:0,
                                                                    MST:0,
                                                                    MIC:0,
                                                                    MAT:0,
                                                                    UHML:0,
                                                                    UI  :0,                       
                                                                    SF	:0,
                                                                    STR	:0,
                                                                    ELG	:0,
                                                                    TIPO:0,
                                                                    TrAr:0,  
                                                                    TrCnt : 0,  
                                                                    B     : 0,  
                                                                    RS    : 0,  
                                                                    TotFardosMistura:   0,
                                                                    TotFardos_selec:    0,
                                                                    TotalTestadoMistura:0,
                                                                    TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                          }
                  
                                                          this.aResumoProdutor.push(objResumoProdutor); 
                  
                                                    }                                    
                                                    //// Qualidade
                                                    let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 
                  
                                                    if (objQualidade) {
                                                              
                                                           objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
                            
                                                    }else{
                  
                  
                                                            let objResumoQualidade = {
                                                              
                                                                    qualidade: aFardos[j].m4QUAL,
                                                                    SAC:0,
                                                                    TRID:0,
                                                                    PIM:0,
                                                                    SC:0,
                                                                    SCI:0,
                                                                    MST:0,
                                                                    MIC:0,
                                                                    MAT:0,
                                                                    UHML:0,
                                                                    UI  :0,                       
                                                                    SF	:0,
                                                                    STR	:0,
                                                                    ELG	:0,
                                                                    TIPO:0,
                                                                    TrAr:0,  
                                                                    TrCnt : 0,  
                                                                    B     : 0,  
                                                                    RS    : 0, 
                                                                    TotFardosMistura:   0,
                                                                    TotFardos_selec:    0,
                                                                    TotalTestadoMistura:0,
                                                                    TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                          }
                  
                                                          this.aResumoQualidade.push(objResumoQualidade); 
                  
                                                    }    
                  
                                            } // Final com quantidade selecionada
                  
                  
                                    }else{  //// Nao testados
                  
                  
                  
                                            //// Estoque por qualidade
                                            let objEstQual = this.aEstoqueQualidade.find(objEstQual => objEstQual.qualidade === aFardos[j].m4QUAL); 
                                             
                  
                                            if (objEstQual) { 
                                                   objEstQual.TotFardosEstoque     += aFardos[j].estoque;  
                                            }else{ 
                  
                                                    let objEstkQualidade = {
                                                      
                                                            qualidade: aFardos[j].m4QUAL, 
                                                            TotalTestadoMistura:0,
                                                            TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                  }
                  
                                                  this.aEstoqueQualidade.push(objEstkQualidade);  
                                            }  
                  
                  
                  
                                            //// Estoque por produtor
                                            let objEstProd = this.aEstoqueProdutor.find(objEstProd => objEstProd.produtor === aFardos[j].produt); 
                                             
                  
                                            if (objEstProd) { 
                                                      objEstProd.TotFardosEstoque     += aFardos[j].estoque;   
                                            }else{
                  
                  
                                                    let objEstkProdutor = {
                                                      
                                                          produtor: aFardos[j].produt,
                                                          SAC:0,
                                                          TRID:0,
                                                          PIM:0,
                                                          SC:0,
                                                          SCI:0,
                                                          MST:0,
                                                          MIC:0,
                                                          MAT:0,
                                                          UHML:0,
                                                          UI  :0,                       
                                                          SF	:0,
                                                          STR	:0,
                                                          ELG	:0,
                                                          TIPO:0,
                                                          TrAr:0,  
                                                          TrCnt : 0,  
                                                          B     : 0,  
                                                          RS    : 0,  
                                                          TotFardosMistura:   0,
                                                          TotFardos_selec:    0,
                                                          TotalTestadoMistura:0,
                                                          TotFardosEstoque:   aFardos[j].estoque                                        
                  
                                                  }
                  
                                                  this.aEstoqueProdutor.push(objEstkProdutor); 
                  
                                            }  
                   
                  
                                            //console.log('Forma Array Produtor 3333')
                                            /// Sem teste
                                             if(aFardos[j].qtde){
                                                  
                                                  // Com quantidade seleciona e testado
                    
                                                  let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
                    
                                                  if (objMistura) {
                                  
                                                        
                                                            objMistura.TotFardosMistura     += aFardos[j].qtde;
                                                            objMistura.TotFardos_selec      += aFardos[j].qtde;                                          
                                                            objMistura.TotFardosEstoque     += aFardos[j].estoque;   
                    
                          
                                                  }else{
                    
                    
                                                          let objResumoMistura = {
                  
                                                                   mistura: this.mistura.numeroMistura,
                                                                   SAC:0,
                                                                   TRID:0,
                                                                   PIM:0,
                                                                   SC:0,
                                                                   SCI:0,
                                                                   MST:0,
                                                                   MIC:0,
                                                                   MAT:0,
                                                                   UHML:0,
                                                                   UI  :0,                       
                                                                   SF	:0,
                                                                   STR	:0,
                                                                   ELG	:0,
                                                                   TIPO:0,
                                                                   TrAr:0,  
                                                                   TrCnt : 0,  
                                                                   B     : 0,  
                                                                   RS    : 0,  
                                                                   TotFardosMistura:   aFardos[j].qtde,
                                                                   TotFardos_selec:    aFardos[j].qtde,
                                                                   TotalTestadoMistura: 0,
                                                                   TotFardosEstoque:   aFardos[j].estoque,                                       
                    
                                                        }
                    
                                                        this.aResumoMistura.push(objResumoMistura); 
                    
                                                  }  
                  
                                                  /// Produtor
                                                  let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 
                  
                                                  if (objProdutor) {
                                  
                                                            //console.log('Forma Array Produtor 2222')
                                                            objProdutor.TotFardosMistura     += aFardos[j].qtde;
                                                            objProdutor.TotFardos_selec      += aFardos[j].qtde;                                          
                                                            objProdutor.TotFardosEstoque     += aFardos[j].estoque;   
                  
                                                            //console.log(this.aResumoProdutor)
                    
                          
                                                  }else{
                    
                                                          //console.log('Forma Array Produtor 1111')
                  
                                                          let objResumoProdutor = {
                  
                                                                   produtor: aFardos[j].produt,
                                                                   SAC:0,
                                                                   TRID:0,
                                                                   PIM:0,
                                                                   SC:0,
                                                                   SCI:0,
                                                                   MST:0,
                                                                   MIC:0,
                                                                   MAT:0,
                                                                   UHML:0,
                                                                   UI  :0,                       
                                                                   SF	:0,
                                                                   STR	:0,
                                                                   ELG	:0,
                                                                   TIPO:0,
                                                                   TrAr:0,  
                                                                   TrCnt : 0,  
                                                                   B     : 0,  
                                                                   RS    : 0,  
                                                                   TotFardosMistura:   aFardos[j].qtde,
                                                                   TotFardos_selec:    aFardos[j].qtde,
                                                                   TotalTestadoMistura: 0,
                                                                   TotFardosEstoque:   aFardos[j].estoque,                                       
                    
                                                        }
                    
                                                        this.aResumoProdutor.push(objResumoProdutor); 
                                                        //console.log(this.aResumoProdutor)
                    
                                                  }  
                  
                  
                  
                                                  /// Qualidade
                                                  let objQualidade= this.aResumoQualidade.find(objQualidade => objQualidade.qualidade ===  aFardos[j].m4QUAL); 
                  
                                                  if (objQualidade) {
                                  
                                                            //console.log('Forma Array Produtor 2222')
                                                            objQualidade.TotFardosMistura     += aFardos[j].qtde;
                                                            objQualidade.TotFardos_selec      += aFardos[j].qtde;                                          
                                                            objQualidade.TotFardosEstoque     += aFardos[j].estoque;   
                  
                                                            
                    
                          
                                                  }else{
                    
                                                         
                  
                                                          let objResumoQualidade = {
                  
                                                                   qualidade: aFardos[j].m4QUAL,
                                                                   SAC:0,
                                                                   TRID:0,
                                                                   PIM:0,
                                                                   SC:0,
                                                                   SCI:0,
                                                                   MST:0,
                                                                   MIC:0,
                                                                   MAT:0,
                                                                   UHML:0,
                                                                   UI  :0,                       
                                                                   SF	:0,
                                                                   STR	:0,
                                                                   ELG	:0,
                                                                   TIPO:0,
                                                                   TrAr:0,  
                                                                   TrCnt : 0,  
                                                                   B     : 0,  
                                                                   RS    : 0,  
                                                                   TotFardosMistura:   aFardos[j].qtde,
                                                                   TotFardos_selec:    aFardos[j].qtde,
                                                                   TotalTestadoMistura: 0,
                                                                   TotFardosEstoque:   aFardos[j].estoque,                                       
                    
                                                        }
                    
                                                        this.aResumoQualidade.push(objResumoQualidade); 
                                              
                    
                                                  }  
                  
                                              
                                              }else {    // Final com  quantidade selecionada
                    
                                                      
                                                      // // Sem quantidade seleciona e testado
                                                      //// Mistura
                                                      let objMistura = this.aResumoMistura.find(objMistura => objMistura.mistura === this.mistura.numeroMistura); 
                    
                                                      if (objMistura) { 
                     
                                                                objMistura.TotFardosEstoque     += aFardos[j].estoque;  
                              
                                                      }else{
                    
                    
                                                              let objResumoMistura = {
                                                                
                                                                      mistura: this.mistura.numeroMistura,
                                                                      SAC:0,
                                                                      TRID:0,
                                                                      PIM:0,
                                                                      SC:0,
                                                                      SCI:0,
                                                                      MST:0,
                                                                      MIC:0,
                                                                      MAT:0,
                                                                      UHML:0,
                                                                      UI  :0,                       
                                                                      SF	:0,
                                                                      STR	:0,
                                                                      ELG	:0,
                                                                      TIPO:0,
                                                                      TrAr:0,  
                                                                      TrCnt : 0,  
                                                                      B     : 0,  
                                                                      RS    : 0,  
                                                                      TotFardosMistura:   0,
                                                                      TotFardos_selec:    0,
                                                                      TotalTestadoMistura:0,
                                                                      TotFardosEstoque:   aFardos[j].estoque                                        
                    
                                                            }
                    
                                                            this.aResumoMistura.push(objResumoMistura); 
                    
                                                      }  
                  
                                                      // // Sem quantidade selecionada e testado
                                                  
                                                      /// Produtor
                                                      let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  aFardos[j].produt); 
                  
                                                      if (objProdutor) {
                     
                                                              objProdutor.TotFardosEstoque     += aFardos[j].estoque;  
                              
                                                      }else{
                    
                    
                                                              let objResumoProdutor = {
                                                                
                                                                      produtor: aFardos[j].produt,
                                                                      SAC:0,
                                                                      TRID:0,
                                                                      PIM:0,
                                                                      SC:0,
                                                                      SCI:0,
                                                                      MST:0,
                                                                      MIC:0,
                                                                      MAT:0,
                                                                      UHML:0,
                                                                      UI  :0,                       
                                                                      SF	:0,
                                                                      STR	:0,
                                                                      ELG	:0,
                                                                      TIPO:0,
                                                                      TrAr:0,  
                                                                      TrCnt : 0,  
                                                                      B     : 0,  
                                                                      RS    : 0,  
                                                                      TotFardosMistura:   0,
                                                                      TotFardos_selec:    0,
                                                                      TotalTestadoMistura:0,
                                                                      TotFardosEstoque:   aFardos[j].estoque                                        
                    
                                                            }
                    
                                                            this.aResumoProdutor.push(objResumoProdutor); 
                    
                                                      }                                  
                                                      
                                                      /// Qualidade
                                                      let objQualidade = this.aResumoQualidade.find(objQualidade => objQualidade.produtor ===  aFardos[j].m4QUAL); 
                  
                                                      if (objQualidade) {
                     
                                                             objQualidade.TotFardosEstoque     += aFardos[j].estoque;  
                              
                                                      }else{
                    
                    
                                                              let objResumoQualidade = {
                                                                
                                                                      produtor: aFardos[j].produt,
                                                                      SAC:0,
                                                                      TRID:0,
                                                                      PIM:0,
                                                                      SC:0,
                                                                      SCI:0,
                                                                      MST:0,
                                                                      MIC:0,
                                                                      MAT:0,
                                                                      UHML:0,
                                                                      UI  :0,                       
                                                                      SF	:0,
                                                                      STR	:0,
                                                                      ELG	:0,
                                                                      TIPO:0,
                                                                      TrAr:0,  
                                                                      TrCnt : 0,  
                                                                      B     : 0,  
                                                                      RS    : 0,  
                                                                      TotFardosMistura:   0,
                                                                      TotFardos_selec:    0,
                                                                      TotalTestadoMistura:0,
                                                                      TotFardosEstoque:   aFardos[j].estoque                                        
                    
                                                            }
                    
                                                            this.aResumoQualidade.push(objResumoQualidade); 
                    
                                                      }                                       
                  
                    
                    
                                              } // Final com/sem quantidade selecionada
                  
                                    } // Final dos testados/nao testados
                   
                                
                            } // Fim do for principal
                          
                  
                  
                            if(elemento.qtde  != 0 ){
                                  if(this.acaoSelecionada=='B'){
                                        if((this.mistura.quantidade!=elemento.total_mist_util) && elemento.qtde  >0 ){ 
                                              if(( elemento.disponivel -  elemento.qtde) >= 0  ){
                                                elemento.corLinha ="white";
                                              }else{
                                                elemento.corLinha ="AntiqueWhite";
                                              }
                                          }
                  
                                  }else{  
                                          if((this.mistura.quantidade!=elemento.total_mist_util) && elemento.qtde  >0 ){ 
                                              if(( elemento.disponivel - (elemento.qtde * (this.mistura.quantidade-elemento.total_mist_util)) ) >= 0  ){
                                                elemento.corLinha ="white";
                                              }else{
                                                elemento.corLinha ="AntiqueWhite";
                                              }
                                          }
                                  } 
                            }else{
                              elemento.corLinha ="white";
                            }
                  
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Produtor
                  
                  
                              let objResumo  = {
                                                                  
                                      produtor: '',
                                      SAC:0,
                                      TRID:0,
                                      PIM:0,
                                      SC:0,
                                      SCI:0,
                                      MST:0,
                                      MIC:0,
                                      MAT:0,
                                      UHML:0,
                                      UI  :0,                       
                                      SF	:0,
                                      STR	:0,
                                      ELG	:0,
                                      TIPO:0,
                                      TrAr:0,  
                                      TrCnt : 0,  
                                      B     : 0,  
                                      RS    : 0,  
                                      TotFardosMistura:   0,
                                      TotFardos_selec:    0,
                                      TotalTestadoMistura:0,
                                      TotFardosEstoque:  0                                       
                  
                            }
                  
                            this.aResumoProdutorTotalizador.push(objResumo);  
                  
                  
                            for (let j = 0; j < this.aResumoProdutor.length; j++) {  
                                
                                //console.log(aFardos[j]);
                                
                                
                  
                                  
                                    this.aResumoProdutorTotalizador[0].produtor = 'TOTAIS:';
                                    this.aResumoProdutorTotalizador[0].SAC    += this.aResumoProdutor[j].SAC   ;
                                    this.aResumoProdutorTotalizador[0].TRID   += this.aResumoProdutor[j].TRID  ;
                                    this.aResumoProdutorTotalizador[0].PIM    += this.aResumoProdutor[j].PIM   ;
                                    this.aResumoProdutorTotalizador[0].SC     += this.aResumoProdutor[j].SC    ;
                                    this.aResumoProdutorTotalizador[0].SCI    += this.aResumoProdutor[j].SCI   ;
                                    this.aResumoProdutorTotalizador[0].MST    += this.aResumoProdutor[j].MST   ;
                                    this.aResumoProdutorTotalizador[0].MIC    += this.aResumoProdutor[j].MIC   ;
                                    this.aResumoProdutorTotalizador[0].MAT    += this.aResumoProdutor[j].MAT   ;
                                    this.aResumoProdutorTotalizador[0].UHML   += this.aResumoProdutor[j].UHML  ;
                                    this.aResumoProdutorTotalizador[0].UI     += this.aResumoProdutor[j].UI    ;                       
                                    this.aResumoProdutorTotalizador[0].SF	    += this.aResumoProdutor[j].SF    ;
                                    this.aResumoProdutorTotalizador[0].STR	  += this.aResumoProdutor[j].STR   ;
                                    this.aResumoProdutorTotalizador[0].ELG	  += this.aResumoProdutor[j].ELG   ;
                                    this.aResumoProdutorTotalizador[0].TIPO   += this.aResumoProdutor[j].TIPO  ;
                                    this.aResumoProdutorTotalizador[0].TrAr   += this.aResumoProdutor[j].TrAr  ; 

                                    this.aResumoProdutorTotalizador[0].TrCnt   += this.aResumoProdutor[j].TrCnt  ; 
                                    this.aResumoProdutorTotalizador[0].B       += this.aResumoProdutor[j].B  ; 
                                    this.aResumoProdutorTotalizador[0].RS      += this.aResumoProdutor[j].RS  ; 
                  
                                    this.aResumoProdutorTotalizador[0].TotFardosMistura   += this.aResumoProdutor[j].TotFardosMistura  ; 
                                    this.aResumoProdutorTotalizador[0].TotFardos_selec      += this.aResumoProdutor[j].TotFardos_selec  ; 
                  
                                    this.aResumoProdutorTotalizador[0].TotalTestadoMistura   += this.aResumoProdutor[j].TotalTestadoMistura  ; 
                                    this.aResumoProdutorTotalizador[0].TotFardosEstoque      += this.aResumoProdutor[j].TotFardosEstoque  ;  
                  
                  
                          
                                 
                            
                            } 
                  
                  
                            /// Totais estoque Produtor
                            /// Totais estoque Produtor
                            /// Totais estoque Produtor
                            /// Totais estoque Produtor
                            /// Totais estoque Produtor
                  
                  
                             objResumo  = {
                                                                
                                        produtor: '',
                                        SAC:0,
                                        TRID:0,
                                        PIM:0,
                                        SC:0,
                                        SCI:0,
                                        MST:0,
                                        MIC:0,
                                        MAT:0,
                                        UHML:0,
                                        UI  :0,                       
                                        SF	:0,
                                        STR	:0,
                                        ELG	:0,
                                        TIPO:0,
                                        TrAr:0,  
                                        TrCnt : 0,  
                                        B     : 0,  
                                        RS    : 0,  
                                        TotFardosMistura:   0,
                                        TotFardos_selec:    0,
                                        TotalTestadoMistura:0,
                                        TotFardosEstoque:  0                                       
                    
                              }
                    
                              this.aEstoqueProdutorTotalizador.push(objResumo);  
                    
                    
                              for (let j = 0; j < this.aEstoqueProdutor.length; j++) {  
                                  
                                  //console.log(aFardos[j]);
                                  
                                  
                    
                                    
                                      this.aEstoqueProdutorTotalizador[0].produtor = 'TOTAIS:';
                                      this.aEstoqueProdutorTotalizador[0].SAC    += this.aEstoqueProdutor[j].SAC   ;
                                      this.aEstoqueProdutorTotalizador[0].TRID   += this.aEstoqueProdutor[j].TRID  ;
                                      this.aEstoqueProdutorTotalizador[0].PIM    += this.aEstoqueProdutor[j].PIM   ;
                                      this.aEstoqueProdutorTotalizador[0].SC     += this.aEstoqueProdutor[j].SC    ;
                                      this.aEstoqueProdutorTotalizador[0].SCI    += this.aEstoqueProdutor[j].SCI   ;
                                      this.aEstoqueProdutorTotalizador[0].MST    += this.aEstoqueProdutor[j].MST   ;
                                      this.aEstoqueProdutorTotalizador[0].MIC    += this.aEstoqueProdutor[j].MIC   ;
                                      this.aEstoqueProdutorTotalizador[0].MAT    += this.aEstoqueProdutor[j].MAT   ;
                                      this.aEstoqueProdutorTotalizador[0].UHML   += this.aEstoqueProdutor[j].UHML  ;
                                      this.aEstoqueProdutorTotalizador[0].UI     += this.aEstoqueProdutor[j].UI    ;                       
                                      this.aEstoqueProdutorTotalizador[0].SF	   += this.aEstoqueProdutor[j].SF    ;
                                      this.aEstoqueProdutorTotalizador[0].STR	   += this.aEstoqueProdutor[j].STR   ;
                                      this.aEstoqueProdutorTotalizador[0].ELG	   += this.aEstoqueProdutor[j].ELG   ;
                                      this.aEstoqueProdutorTotalizador[0].TIPO   += this.aEstoqueProdutor[j].TIPO  ;
                                      this.aEstoqueProdutorTotalizador[0].TrAr   += this.aEstoqueProdutor[j].TrAr  ; 

                                      this.aEstoqueProdutorTotalizador[0].TrCnt   += this.aEstoqueProdutor[j].TrCnt  ; 
                                      this.aEstoqueProdutorTotalizador[0].B       += this.aEstoqueProdutor[j].B  ; 
                                      this.aEstoqueProdutorTotalizador[0].RS      += this.aEstoqueProdutor[j].RS  ;                                       
                                      this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura   += this.aEstoqueProdutor[j].TotalTestadoMistura  ; 
                                      this.aEstoqueProdutorTotalizador[0].TotFardosEstoque += this.aEstoqueProdutor[j].TotFardosEstoque  ; 
                                
                    
                    
                            
                                       
                              
                              }   
                  
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Produtor
                              /// Totais resumo mistura Qualidade
                              /// Totais resumo mistura Qualidade
                              /// Totais resumo mistura Qualidade
                  
                  
                             objResumo  = {
                                                                  
                                        qualidade: '',
                                        SAC:0,
                                        TRID:0,
                                        PIM:0,
                                        SC:0,
                                        SCI:0,
                                        MST:0,
                                        MIC:0,
                                        MAT:0,
                                        UHML:0,
                                        UI  :0,                       
                                        SF	:0,
                                        STR	:0,
                                        ELG	:0,
                                        TIPO:0,
                                        TrAr:0,  
                                        TrCnt : 0,  
                                        B     : 0,  
                                        RS    : 0,  
                                        TotFardosMistura:   0,
                                        TotFardos_selec:    0,
                                        TotalTestadoMistura:0,
                                        TotFardosEstoque:  0                                       
                    
                              }
                    
                              this.aResumoQualidadeTotalizador.push(objResumo);  
                    
                    
                              for (let j = 0; j < this.aResumoQualidade.length; j++) {  
                                  
                                  //console.log(aFardos[j]);
                                  
                                  
                    
                                    
                                      this.aResumoQualidadeTotalizador[0].qualidade = 'TOTAIS:';
                                      this.aResumoQualidadeTotalizador[0].SAC    += this.aResumoQualidade[j].SAC   ;
                                      this.aResumoQualidadeTotalizador[0].TRID   += this.aResumoQualidade[j].TRID  ;
                                      this.aResumoQualidadeTotalizador[0].PIM    += this.aResumoQualidade[j].PIM   ;
                                      this.aResumoQualidadeTotalizador[0].SC     += this.aResumoQualidade[j].SC    ;
                                      this.aResumoQualidadeTotalizador[0].SCI    += this.aResumoQualidade[j].SCI   ;
                                      this.aResumoQualidadeTotalizador[0].MST    += this.aResumoQualidade[j].MST   ;
                                      this.aResumoQualidadeTotalizador[0].MIC    += this.aResumoQualidade[j].MIC   ;
                                      this.aResumoQualidadeTotalizador[0].MAT    += this.aResumoQualidade[j].MAT   ;
                                      this.aResumoQualidadeTotalizador[0].UHML   += this.aResumoQualidade[j].UHML  ;
                                      this.aResumoQualidadeTotalizador[0].UI     += this.aResumoQualidade[j].UI    ;                       
                                      this.aResumoQualidadeTotalizador[0].SF	    += this.aResumoQualidade[j].SF    ;
                                      this.aResumoQualidadeTotalizador[0].STR	  += this.aResumoQualidade[j].STR   ;
                                      this.aResumoQualidadeTotalizador[0].ELG	  += this.aResumoQualidade[j].ELG   ;
                                      this.aResumoQualidadeTotalizador[0].TIPO   += this.aResumoQualidade[j].TIPO  ;
                                      this.aResumoQualidadeTotalizador[0].TrAr   += this.aResumoQualidade[j].TrAr  ; 

                                      this.aResumoQualidadeTotalizador[0].TrCnt   += this.aResumoQualidade[j].TrCnt  ; 
                                      this.aResumoQualidadeTotalizador[0].B       += this.aResumoQualidade[j].B  ; 
                                      this.aResumoQualidadeTotalizador[0].RS      += this.aResumoQualidade[j].RS  ;                                         
                    
                                      this.aResumoQualidadeTotalizador[0].TotFardosMistura   += this.aResumoQualidade[j].TotFardosMistura  ; 
                                      this.aResumoQualidadeTotalizador[0].TotFardos_selec      += this.aResumoQualidade[j].TotFardos_selec  ; 
                    
                                      this.aResumoQualidadeTotalizador[0].TotalTestadoMistura   += this.aResumoQualidade[j].TotalTestadoMistura  ; 
                                      this.aResumoQualidadeTotalizador[0].TotFardosEstoque      += this.aResumoQualidade[j].TotFardosEstoque  ;  
                    
                    
                            
                                      
                              
                              } 
                    
                    
                              /// Totais estoque Qualidade
                              /// Totais estoque Qualidade
                              /// Totais estoque Qualidade
                              /// Totais estoque Qualidade
                              /// Totais estoque Qualidade
                    
                    
                                objResumo  = {
                                                                  
                                          qualidade: '',
                                          SAC:0,
                                          TRID:0,
                                          PIM:0,
                                          SC:0,
                                          SCI:0,
                                          MST:0,
                                          MIC:0,
                                          MAT:0,
                                          UHML:0,
                                          UI  :0,                       
                                          SF	:0,
                                          STR	:0,
                                          ELG	:0,
                                          TIPO:0,
                                          TrAr:0,  
                                          TrCnt : 0,  
                                          B     : 0,  
                                          RS    : 0,  
                                          TotFardosMistura:   0,
                                          TotFardos_selec:    0,
                                          TotalTestadoMistura:0,
                                          TotFardosEstoque:  0                                       
                      
                                }
                      
                                this.aEstoqueQualidadeTotalizador.push(objResumo);  
                      
                      
                                for (let j = 0; j < this.aEstoqueQualidade.length; j++) {  
                                    
                                    //console.log(aFardos[j]);
                                    
                                    
                      
                                      
                                        this.aEstoqueQualidadeTotalizador[0].qualidade = 'TOTAIS:';
                                        this.aEstoqueQualidadeTotalizador[0].SAC    += this.aEstoqueQualidade[j].SAC   ;
                                        this.aEstoqueQualidadeTotalizador[0].TRID   += this.aEstoqueQualidade[j].TRID  ;
                                        this.aEstoqueQualidadeTotalizador[0].PIM    += this.aEstoqueQualidade[j].PIM   ;
                                        this.aEstoqueQualidadeTotalizador[0].SC     += this.aEstoqueQualidade[j].SC    ;
                                        this.aEstoqueQualidadeTotalizador[0].SCI    += this.aEstoqueQualidade[j].SCI   ;
                                        this.aEstoqueQualidadeTotalizador[0].MST    += this.aEstoqueQualidade[j].MST   ;
                                        this.aEstoqueQualidadeTotalizador[0].MIC    += this.aEstoqueQualidade[j].MIC   ;
                                        this.aEstoqueQualidadeTotalizador[0].MAT    += this.aEstoqueQualidade[j].MAT   ;
                                        this.aEstoqueQualidadeTotalizador[0].UHML   += this.aEstoqueQualidade[j].UHML  ;
                                        this.aEstoqueQualidadeTotalizador[0].UI     += this.aEstoqueQualidade[j].UI    ;                       
                                        this.aEstoqueQualidadeTotalizador[0].SF	   += this.aEstoqueQualidade[j].SF    ;
                                        this.aEstoqueQualidadeTotalizador[0].STR	   += this.aEstoqueQualidade[j].STR   ;
                                        this.aEstoqueQualidadeTotalizador[0].ELG	   += this.aEstoqueQualidade[j].ELG   ;
                                        this.aEstoqueQualidadeTotalizador[0].TIPO   += this.aEstoqueQualidade[j].TIPO  ;
                                        this.aEstoqueQualidadeTotalizador[0].TrAr   += this.aEstoqueQualidade[j].TrAr  ; 

                                        this.aEstoqueQualidadeTotalizador[0].TrCnt   += this.aEstoqueQualidade[j].TrCnt  ; 
                                        this.aEstoqueQualidadeTotalizador[0].B       += this.aEstoqueQualidade[j].B  ; 
                                        this.aEstoqueQualidadeTotalizador[0].RS      += this.aEstoqueQualidade[j].RS  ;   
                                        
                                        
                                        this.aEstoqueQualidadeTotalizador[0].TotalTestadoMistura   += this.aEstoqueQualidade[j].TotalTestadoMistura  ; 
                                        this.aEstoqueQualidadeTotalizador[0].TotFardosEstoque += this.aEstoqueQualidade[j].TotFardosEstoque  ; 
                                  
                      
                      
                              
                                       
                                
                                }   
                  
                  
                            // Pondera Mistura
                            for (let j = 0; j < this.aResumoMistura.length; j++) {  
                               
                               //console.log(aFardos[j]);
                               
                               if(this.aResumoMistura[j].TotalTestadoMistura != null && this.aResumoMistura[j].TotalTestadoMistura > 0 ){
                  
                                  
                                    this.aResumoMistura[j].SAC    = this.aResumoMistura[j].SAC   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].TRID   = this.aResumoMistura[j].TRID  / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].PIM    = this.aResumoMistura[j].PIM   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].SC     = this.aResumoMistura[j].SC    / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].SCI    = this.aResumoMistura[j].SCI   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].MST    = this.aResumoMistura[j].MST   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].MIC    = this.aResumoMistura[j].MIC   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].MAT    = this.aResumoMistura[j].MAT   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].UHML   = this.aResumoMistura[j].UHML  / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].UI     = this.aResumoMistura[j].UI    / this.aResumoMistura[j].TotalTestadoMistura ;                       
                                    this.aResumoMistura[j].SF	    = this.aResumoMistura[j].SF    / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].STR	  = this.aResumoMistura[j].STR   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].ELG	  = this.aResumoMistura[j].ELG   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].TIPO   = this.aResumoMistura[j].TIPO  / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].TrAr   = this.aResumoMistura[j].TrAr  / this.aResumoMistura[j].TotalTestadoMistura ; 
                  
                                    this.aResumoMistura[j].TrCnt	  = this.aResumoMistura[j].TrCnt   / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].B        = this.aResumoMistura[j].B       / this.aResumoMistura[j].TotalTestadoMistura ;
                                    this.aResumoMistura[j].RS       = this.aResumoMistura[j].RS      / this.aResumoMistura[j].TotalTestadoMistura ; 


                          
                               }    
                            
                            }   
                            // Pondera Produtor
                            for (let j = 0; j < this.aResumoProdutor.length; j++) {  
                               
                               //console.log(aFardos[j]);
                               
                               if(this.aResumoProdutor[j].TotalTestadoMistura != null && this.aResumoProdutor[j].TotalTestadoMistura > 0 ){
                  
                                  
                                    this.aResumoProdutor[j].SAC    = this.aResumoProdutor[j].SAC   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].TRID   = this.aResumoProdutor[j].TRID  / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].PIM    = this.aResumoProdutor[j].PIM   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].SC     = this.aResumoProdutor[j].SC    / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].SCI    = this.aResumoProdutor[j].SCI   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].MST    = this.aResumoProdutor[j].MST   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].MIC    = this.aResumoProdutor[j].MIC   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].MAT    = this.aResumoProdutor[j].MAT   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].UHML   = this.aResumoProdutor[j].UHML  / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].UI     = this.aResumoProdutor[j].UI    / this.aResumoProdutor[j].TotalTestadoMistura ;                       
                                    this.aResumoProdutor[j].SF	    = this.aResumoProdutor[j].SF    / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].STR	  = this.aResumoProdutor[j].STR   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].ELG	  = this.aResumoProdutor[j].ELG   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].TIPO   = this.aResumoProdutor[j].TIPO  / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].TrAr   = this.aResumoProdutor[j].TrAr  / this.aResumoProdutor[j].TotalTestadoMistura ; 

                                    this.aResumoProdutor[j].TrCnt	  = this.aResumoProdutor[j].TrCnt   / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].B        = this.aResumoProdutor[j].B       / this.aResumoProdutor[j].TotalTestadoMistura ;
                                    this.aResumoProdutor[j].RS       = this.aResumoProdutor[j].RS      / this.aResumoProdutor[j].TotalTestadoMistura ;                                     
                  
                  
                          
                               }    
                            
                            }                 
                            // Pondera Estoque Produtor
                            for (let j = 0; j < this.aEstoqueProdutor.length; j++) {  
                               
                               //console.log(aFardos[j]);
                               
                               if(this.aEstoqueProdutor[j].TotalTestadoMistura != null && this.aEstoqueProdutor[j].TotalTestadoMistura > 0 ){
                  
                                  
                                    this.aEstoqueProdutor[j].SAC    = this.aEstoqueProdutor[j].SAC   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].TRID   = this.aEstoqueProdutor[j].TRID  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].PIM    = this.aEstoqueProdutor[j].PIM   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].SC     = this.aEstoqueProdutor[j].SC    / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].SCI    = this.aEstoqueProdutor[j].SCI   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].MST    = this.aEstoqueProdutor[j].MST   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].MIC    = this.aEstoqueProdutor[j].MIC   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].MAT    = this.aEstoqueProdutor[j].MAT   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].UHML   = this.aEstoqueProdutor[j].UHML  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].UI     = this.aEstoqueProdutor[j].UI    / this.aEstoqueProdutor[j].TotalTestadoMistura ;                       
                                    this.aEstoqueProdutor[j].SF	    = this.aEstoqueProdutor[j].SF    / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].STR	  = this.aEstoqueProdutor[j].STR   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].ELG	  = this.aEstoqueProdutor[j].ELG   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].TIPO   = this.aEstoqueProdutor[j].TIPO  / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].TrAr   = this.aEstoqueProdutor[j].TrAr  / this.aEstoqueProdutor[j].TotalTestadoMistura ; 

                                    this.aEstoqueProdutor[j].TrCnt	  = this.aEstoqueProdutor[j].TrCnt   / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].B        = this.aEstoqueProdutor[j].B       / this.aEstoqueProdutor[j].TotalTestadoMistura ;
                                    this.aEstoqueProdutor[j].RS       = this.aEstoqueProdutor[j].RS      / this.aEstoqueProdutor[j].TotalTestadoMistura ;                                     
                  
                  
                          
                               }    
                            
                            }  
                            
                            if(this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura != null && this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura > 0 ){ 
                      
                                  this.aEstoqueProdutorTotalizador[0].SAC    = this.aEstoqueProdutorTotalizador[0].SAC   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                                  this.aEstoqueProdutorTotalizador[0].TRID   = this.aEstoqueProdutorTotalizador[0].TRID  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                                  this.aEstoqueProdutorTotalizador[0].PIM    = this.aEstoqueProdutorTotalizador[0].PIM   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;    
                                  this.aEstoqueProdutorTotalizador[0].SC     = this.aEstoqueProdutorTotalizador[0].SC    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].SCI    = this.aEstoqueProdutorTotalizador[0].SCI   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].MST    = this.aEstoqueProdutorTotalizador[0].MST   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].MIC    = this.aEstoqueProdutorTotalizador[0].MIC   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].MAT    = this.aEstoqueProdutorTotalizador[0].MAT   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].UHML   = this.aEstoqueProdutorTotalizador[0].UHML  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].UI     = this.aEstoqueProdutorTotalizador[0].UI    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;                       
                                  this.aEstoqueProdutorTotalizador[0].SF	   = this.aEstoqueProdutorTotalizador[0].SF    / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].STR	   = this.aEstoqueProdutorTotalizador[0].STR   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].ELG	   = this.aEstoqueProdutorTotalizador[0].ELG   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].TIPO   = this.aEstoqueProdutorTotalizador[0].TIPO  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;
                                  this.aEstoqueProdutorTotalizador[0].TrAr   = this.aEstoqueProdutorTotalizador[0].TrAr  / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura    ;   

                                  this.aEstoqueProdutorTotalizador[0].TrCnt	  = this.aEstoqueProdutorTotalizador[0].TrCnt   / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;
                                  this.aEstoqueProdutorTotalizador[0].B        = this.aEstoqueProdutorTotalizador[0].B       / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;
                                  this.aEstoqueProdutorTotalizador[0].RS       = this.aEstoqueProdutorTotalizador[0].RS      / this.aEstoqueProdutorTotalizador[0].TotalTestadoMistura ;                                                                
                  
                            }    
                            
                            
                            if(this.aResumoProdutorTotalizador[0].TotalTestadoMistura != null && this.aResumoProdutorTotalizador[0].TotalTestadoMistura > 0 ){ 
                      
                                this.aResumoProdutorTotalizador[0].SAC    = this.aResumoProdutorTotalizador[0].SAC   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
                                this.aResumoProdutorTotalizador[0].TRID   = this.aResumoProdutorTotalizador[0].TRID  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
                                this.aResumoProdutorTotalizador[0].PIM    = this.aResumoProdutorTotalizador[0].PIM   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;    
                                this.aResumoProdutorTotalizador[0].SC     = this.aResumoProdutorTotalizador[0].SC    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].SCI    = this.aResumoProdutorTotalizador[0].SCI   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].MST    = this.aResumoProdutorTotalizador[0].MST   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].MIC    = this.aResumoProdutorTotalizador[0].MIC   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].MAT    = this.aResumoProdutorTotalizador[0].MAT   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].UHML   = this.aResumoProdutorTotalizador[0].UHML  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].UI     = this.aResumoProdutorTotalizador[0].UI    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;                       
                                this.aResumoProdutorTotalizador[0].SF	   = this.aResumoProdutorTotalizador[0].SF    / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].STR	   = this.aResumoProdutorTotalizador[0].STR   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].ELG	   = this.aResumoProdutorTotalizador[0].ELG   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].TIPO   = this.aResumoProdutorTotalizador[0].TIPO  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;
                                this.aResumoProdutorTotalizador[0].TrAr   = this.aResumoProdutorTotalizador[0].TrAr  / this.aResumoProdutorTotalizador[0].TotalTestadoMistura    ;   

                                this.aResumoProdutorTotalizador[0].TrCnt	  = this.aResumoProdutorTotalizador[0].TrCnt   / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;
                                this.aResumoProdutorTotalizador[0].B        = this.aResumoProdutorTotalizador[0].B       / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;
                                this.aResumoProdutorTotalizador[0].RS       = this.aResumoProdutorTotalizador[0].RS      / this.aResumoProdutorTotalizador[0].TotalTestadoMistura ;                                                                

                  
                            }           
                   
                           
                            this.totalFardosMistura = somaFardosMistura;
                            this.totalFardosEstoque = somaFardosEstoque;
                            this.nPesoMovimento =  pesoMovimento.toFixed(2);
                            this.nPesoMovimento = this.apiFormataNumero(this.nPesoMovimento,2);
                  
                  
                            // Formacao linha resumo mistura/produtor
                            // Formacao linha resumo mistura/produtor          
                            // Formacao linha resumo mistura/produtor
                            // Formacao linha resumo mistura/produtor
                  
                            let objProdutor = this.aResumoProdutor.find(objProdutor => objProdutor.produtor ===  elemento.produt); 
                  
                  
                            //console.log('DDDDDddddsssaa')
                            //console.log(objProdutor)
                            //console.log(elemento)
                            
                  
                            if (objProdutor) { 
                  
                               let objResumoProdutor = {
                                                          
                                          produtor: elemento.produt,                        
                                          SAC:objProdutor.SAC ,
                                          TRID:objProdutor.TRID,
                                          PIM:objProdutor.PIM,
                                          SC:objProdutor.SC,
                                          SCI:objProdutor.SCI,
                                          MST:objProdutor.MST,
                                          MIC:objProdutor.MIC,
                                          MAT:objProdutor.MAT,
                                          UHML:objProdutor.UHML,
                                          UI  :objProdutor.UI,                       
                                          SF	:objProdutor.SF,
                                          STR	:objProdutor.STR,
                                          ELG	:objProdutor.ELG,
                                          TIPO:objProdutor.TIPO,
                                          TrAr:objProdutor.TrAr,  
                                          TrCnt:objProdutor.TrCnt,  
                                          B:objProdutor.B,  
                                          RS:objProdutor.RS,  



                                          TotFardosMistura:objProdutor.TotFardosMistura,
                                          TotFardos_selec:objProdutor.TotFardos_selec,
                                          TotalTestadoMistura:objProdutor.TotalTestadoMistura,
                                          TotFardosEstoque:  objProdutor.TotFardosEstoque,                                       
                  
                                }
                  
                                this.aProdutorSelecionado.push(objResumoProdutor); 
                  
                                //console.log(this.aProdutorSelecionado)
                  
                            } else{
                  
                         
                              if(this.aResumoProdutor.length>0){
                                    let objResumoProdutor = {
                                                              
                                              produtor: this.aResumoProdutor[0].produtor,                        
                                              SAC:this.aResumoProdutor[0].SAC ,
                                              TRID:this.aResumoProdutor[0].TRID,
                                              PIM:this.aResumoProdutor[0].PIM,
                                              SC:this.aResumoProdutor[0].SC,
                                              SCI:this.aResumoProdutor[0].SCI,
                                              MST:this.aResumoProdutor[0].MST,
                                              MIC:this.aResumoProdutor[0].MIC,
                                              MAT:this.aResumoProdutor[0].MAT,
                                              UHML:this.aResumoProdutor[0].UHML,
                                              UI  :this.aResumoProdutor[0].UI,                       
                                              SF	:this.aResumoProdutor[0].SF,
                                              STR	:this.aResumoProdutor[0].STR,
                                              ELG	:this.aResumoProdutor[0].ELG,
                                              TIPO:this.aResumoProdutor[0].TIPO,
                                              TrAr:this.aResumoProdutor[0].TrAr,  
                                              TrCnt:this.aResumoProdutor[0].TrCnt,  
                                              B:this.aResumoProdutor[0].B,
                                              RS:this.aResumoProdutor[0].RS,  
                                              TotFardosMistura:this.aResumoProdutor[0].TotFardosMistura,
                                              TotFardos_selec:this.aResumoProdutor[0].TotFardos_selec,
                                              TotalTestadoMistura:this.aResumoProdutor[0].TotalTestadoMistura,
                                              TotFardosEstoque:  this.aResumoProdutor[0].TotFardosEstoque,                                       
                  
                                    }
                  
                                    this.aProdutorSelecionado.push(objResumoProdutor); 
                              }       
                  
                            }
                  
                  
                  
                            
                            // Final Formacao linha resumo mistura/produtor
                            // Final Formacao linha resumo mistura/produtor          
                            // Final Formacao linha resumo mistura/produtor
                            // Final Formacao linha resumo mistura/produtor
                  
                  
                          },
                  
                            // Final calcula Totais
                            // Final calcula Totais
                            // Final calcula Totais
                            // Final calcula Totais                           




    }
}    