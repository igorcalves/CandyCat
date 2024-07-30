import Toast from "react-native-toast-message";

export default function useToast() {
  const addSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Tarefa adicionada',
    });
  }


  const deleteSuccess = (sourceName) => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${sourceName} deletada`,
    });
  }

  const completeSuccess = (sourceName) => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${sourceName} completa`,
    });
  }

  const editSuccess = (sourceName) => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${sourceName} editada`,
    });
  }

  return {
    addSuccess,
    deleteSuccess,
    completeSuccess,
    editSuccess,
  }
}