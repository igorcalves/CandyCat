import Toast from "react-native-toast-message";

export default function useToast() {
  const addSuccess = (type) => {
    Toast.show({
      type: 'success',
      text1: `${type} adicionada`,
    });
  }


  const deleteSuccess = (type) => {
    Toast.show({
      type: 'success',
      text1: `${type} deletada`,
    });
  }


  const completeSuccess = (type) => {
    Toast.show({
      type: 'success',
      text1: `${type} concluída`,
    });
  }

  const editSuccess = (type) => {
    Toast.show({
      type: 'success',
      text1: `${type} editada`,
    });
  }

  const error = (sourceName) => {
    Toast.show({
      type: 'error',
      text1: sourceName,
    });
  }

  return {
    addSuccess,
    deleteSuccess,
    completeSuccess,
    editSuccess,
    error
  }
}