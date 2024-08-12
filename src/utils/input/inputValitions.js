import Toast from 'react-native-toast-message'

export const checkInput = (textInput) => {
  if (textInput === '') {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'O campo não pode estar vazio',
    })
    return false
  }

  if (textInput.length < 3) {
    Toast.show({
      type: 'error',
      text1: 'Erro: Poucos caracteres',
      text2: 'Digite pelo menos 3 caracteres',
    })
    return false
  }

  return true
}

export const checkNumberInput = (textInput) => {
  if (textInput === '') {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'O campo não pode estar vazio',
    })
    return false
  }

  if (isNaN(textInput)) {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'Digite apenas números',
    })
    return false
  }

  return true
}
