import { mapState } from 'vuex'

export default {

  // Dalton - Alterada
  computed:   {...mapState(['usuarioSistema']) ,

    },  
   
    methods:{ 

      campoRequerido(value){
 
        if(!value==''){  
            return true
        }else{
        return '(*)'
        }

    },
  
    campoRequeridoBoolean(value){
 
        if(!value==''){  
            return true
        }else{
        return false
        }

    },


    validaSenha(value){

          if(!value==''){ 

              if (value.includes(" "))  {
                  return 'Informe a senha. Mínimo de 6 caracteres e sem espaços.' 
              }   

              if (value.length<6)  {
                  return 'Informe a senha. Mínimo de 6 caracteres e sem espaços.'
              }else{

                  return true
              }  

          }else{
                return 'Informe a senha. Mínimo de 6 caracteres e sem espaços.'
          }          


      }, 


        validaNovaSenha(value){

            if(!value==''){ 

                if( value != this.usuario.senha){
                    return 'Senha em branco ou senhas não conferem.'
                }else{

                    return true
                }

            }else{
            return 'Nova senha não pode ficar em branco'
            }                

            
        },


        validaLength(value) {
            if (value.length < 8) {
                return "O campo deve ter pelo menos 8 caracteres.";
            }
            return true;
            },

        validaUpperCase(value) {
            if (/[A-Z]/.test(value)) {
                return "O campo não deve conter letras maiúsculas.";
            }
                return true;    
        },

        validaSpecialCharacter(value) {
            if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                return "O campo não deve conter caracteres especiais.";
            }
                return true;
        },

   },


  data: () => ({

  })
}