import Vuex from 'vuex'

export default new Vuex.Store({
  state: {
    usuarioSistema: { empresa: '', idfil: '', codigo: '', nome: ''  ,id:'' },
    permissoesUsuario: [],
    permissaoUsuario: {},
    _token: '',
    configuracaoTela:{marginBottomTela:'120px',tamanhoRodape:'87%',marginLeftRodape:'5%',marginRightRodape:'5%',alturaRodape:'6%'},
    tipoDispositivo:'',
    alturaCard:0,
    larguraCard:0,
    alturaCardPesq:0,
    larguraCardPesq:0,    
    haErrosStore:false,
    haSucessoStore:false,
    mensagemErroStore:'',
    mensagemSucessoStore:'',
    pinOff:true,
    vDebug: '',
    expandOnHover: false,
    rail: false,
    tituloPrincipal:''   ,
  } ,
  mutations: {
      setUsuarioEmpresa(state, empresa) {
          state.usuarioSistema.empresa = empresa
      },
      setUsuarioIdfil(state, idfil) {
          state.usuarioSistema.idfil = idfil
      },
      setUsuarioCodigo(state, codigo) {
          state.usuarioSistema.codigo = codigo
      },
      setUsuarioNome(state, nome) {
          state.usuarioSistema.nome = nome
      }  ,
      setUsuarioId(state, id) {
        state.usuarioSistema.id = id
      }  ,     
      setTipoDispositivo(state, tipoDispositivo) {
        state.tipoDispositivo = tipoDispositivo
      } ,
      setConfiguracaoTelaMarginBottomTela(state, marginBottomTela) {
        state.configuracaoTela.marginBottomTela = marginBottomTela
      } ,
      setConfiguracaoTelaTamanhoRodape(state, tamanhoRodape) {
        state.configuracaoTela.tamanhoRodape = tamanhoRodape
      } ,         
      setConfiguracaoTelaMarginLeftRodape(state, marginLeftRodape) {
        state.configuracaoTela.marginLeftRodape = marginLeftRodape
      } ,     
      setConfiguracaoTelaMarginRightRodape(state, marginRightRodape) {
        state.configuracaoTela.marginRightRodape = marginRightRodape
      } ,        
      setConfiguracaoTelaAlturatRodape(state, alturatRodape) {
        state.configuracaoTela.alturatRodape = alturatRodape
      } ,            
      setToken(state, token) {
          state._token = token
      }     ,
      setHaErrosStore(state, haErrosStore) {
        state.haErrosStore = haErrosStore
      },
      setHaSucessoStore(state, haSucesssoStore) {
        state.haSucesssoStore = haSucesssoStore
      }   ,
      
      setMensagemErroStore(state, mensagemErroStore) {
        state.mensagemErroStore = mensagemErroStore
      },
      setMensagemSucessoStore(state, mensagemSucessoStore) {
        state.mensagemSucessoStore = mensagemSucessoStore
      },    
      setAlturaCard(state, alturaCard) {
        state.alturaCard = alturaCard
      },         
      setLarguraCard(state, larguraCard) {
        state.larguraCard = larguraCard
      },          
      setAlturaCardPesq(state, alturaCardPesq) {
        state.alturaCardPesq = alturaCardPesq
      },         
      setLarguraCardPesq(state, larguraCardPesq) {
        state.larguraCardPesq = larguraCardPesq
      },   
            
      setVDebug(state, vDebug) {
        state.vDebug = vDebug
      },

      setPinOff(state, pinOff) {
        state.pinOff = pinOff
      },
      setExpandOnHover(state, expandOnHover) {
        state.pinOff = expandOnHover
      }      ,
      setRail(state, rail) {
        state.pinOff = rail
      }     ,
     
      setTituloPrincipal(state, tituloPrincipal) {
        state.tituloPrincipal =  tituloPrincipal

      }     
      
      
          
 

  }


})
