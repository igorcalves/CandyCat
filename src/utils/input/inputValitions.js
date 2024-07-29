import Toast from 'react-native-toast-message';


export const checkInput = (textInput, callback) => {
    if (textInput === '') {

      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'O campo não pode estar vazio',
      });
      return false;
    }
  
    if (textInput.length < 3) {
      Toast.show({
        type: 'error',
        text1: 'Erro: Poucos caracteres',
        text2: 'Digite pelo menos 3 caracteres',
      });
      return false;
    }
  
    callback && callback();
    return true;
  }