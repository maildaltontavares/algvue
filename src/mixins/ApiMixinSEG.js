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
   
       populaSistema(){
        /* DALTON */
               this.resultado = ""; 
               this.sistema = []; 
       
               // Carrega tipo Maquina
               let url = `${process.env.VUE_APP_BASE_URL}/sistema`; 

               //console.log(url);
               
               this.axios.get(url,this.apiTokenHeader())
               .then(response => { 
                   this.resultado = response.data;     

                   //console.log(this.resultado );
                   
                   this.sistema = [];
                   this.resultado.forEach((sys ) => {     
 
                   
                       this.sistemaTemp.id = (sys.id != null ? sys.id  : null)  ; 
                       this.sistemaTemp.nome = (sys.nome != null ? sys.nome.trim()  : null)  ;   
                       this.sistemaTemp.sigla = (sys.sigla != null ? sys.sigla  : null)  ; 
                       this.sistemaTemp.tipoLogin = (sys.tipoLogin != null ? sys.tipoLogin.trim()  : null)  ; 
                       this.sistemaTemp.tipoCodificacaoSenha = (sys.tipoCodificacaoSenha != null ? sys.tipoCodificacaoSenha.trim()  : null)  ; 

                       this.sistema.push({
                         id:this.sistemaTemp.id,
                         nome:this.sistemaTemp.nome ,
                         sigla:this.sistemaTemp.sigla,
                         tipoLogin:this.sistemaTemp.tipoLogin,
                         tipoCodificacaoSenha:this.sistemaTemp.tipoCodificacaoSenha
                        }); 


       
                   });   

                   //this.selectedItem = this.items.find(item => item.id === 4);
       
               })
               .catch(error => {
               console.log("Erro: ", error);
               this.haErros = true
               });
           },

           checkDispositivo() {  
          

            if(window.innerWidth <= 560){
                this.$store.state.tipoDispositivo= 'mobile';
                this.$store.state.configuracaoTela.marginBottomTela='120px';
                this.tamanhoLogin = '360px'
                this.marginLeftLogin =  ((window.innerWidth-360 )/2)+'px'
                this.$store.state.configuracaoTela.marginBottomTela
                this.marginTopLogin = '20%'
                this.$store.state.configuracaoTela.marginLeftRodape='1px',
                this.$store.state.configuracaoTela.tamanhoRodape='99%'     
                this.$store.state.configuracaoTela.alturaRodape='8%'   
                this.$store.state.alturaCard = '3000px'            
                this.$store.state.larguraCard = '98%'        
                this.$store.state.alturaCardPesq = '2000px'            
                this.$store.state.larguraCardPesq = '98%'   ;                 
                this.$store.state.expandOnHover= false;
                this.$store.state.rail= false;  
                this.$store.state.tituloPrincipal= 'ALG';                    
                                        
  
            }else if(window.innerWidth <= 790){
                this.$store.state.tipoDispositivo= 'tablet';
                this.$store.state.configuracaoTela.marginBottomTela='120px';
                this.tamanhoLogin = '400px'
                this.marginLeftLogin =  ((window.innerWidth-400 )/2)+'px'
                this.$store.state.configuracaoTela.marginBottomTela
                this.marginTopLogin = '20%'
                this.$store.state.configuracaoTela.marginLeftRodape='2px',
                this.$store.state.configuracaoTela.tamanhoRodape='98%'                  
                this.$store.state.configuracaoTela.alturaRodape='6%'
                this.$store.state.alturaCard = '3000px'            
                this.$store.state.larguraCard = '98%'     
                this.$store.state.alturaCardPesq = '1200px'            
                this.$store.state.larguraCardPesq = '98%'     
                this.$store.state.expandOnHover= false;
                this.$store.state.rail= false; 
                this.$store.state.tituloPrincipal= 'ALG';                                  
                
            } 
            else  {
  
              
                  this.$store.state.tipoDispositivo= 'desktop';
                  this.$store.state.configuracaoTela.marginBottomTela='60px';
                  this.tamanhoLogin = '400px'
                  this.marginLeftLogin =  ((window.innerWidth-400 )/2)+'px'
                  this.marginTopLogin = '9%'
                  this.$store.state.configuracaoTela.marginLeftRodape='0px',
                  
                  this.$store.state.configuracaoTela.alturaRodape='6%'  
                  this.$store.state.alturaCard = '800px'            
                  //this.$store.state.larguraCard = '1600px'        
                  this.$store.state.larguraCard = '1600px'        
                  this.$store.state.alturaCardPesq = '800px'            
                  this.$store.state.larguraCardPesq = '1600px'   
  
                  //this.$store.state.configuracaoTela.tamanhoRodape='1630px' 

                  this.$store.state.configuracaoTela.tamanhoRodape='97%' 
                  
                  this.$store.state.expandOnHover= true;  
                  this.$store.state.rail= true;         
                 


                  this.$store.state.tituloPrincipal= 'Controle de Matéria-prima';   


                  //if (!this.$store.state.pinOff){
                    //this.$store.state.configuracaoTela.tamanhoRodape='1630px' 
                // }else{  
                  //  this.$store.state.configuracaoTela.tamanhoRodape='99%' 
                // }
  
  
  
            }
  
            //console.log(this.marginLeftLogin ) ;
  
  
  
        }           




    }
}    