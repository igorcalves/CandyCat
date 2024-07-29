export default function useToast() {
  const addSuccess = () => {
    Toast.show({
      type: 'success',
      text1: 'Tarefa adicionada',
    });
  }


  const deleteSuccess = () => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${taskSelected.title} deletada`,
    });
  }

  const completeSucess = () => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${taskSelected.title} completa`,
    });
  }

  const editSucess = () => {
    Toast.show({
      type: 'success',
      text1: `Tarefa: ${taskSelected.title} editada`,
    });
  }

  return {
    addSuccess,
    deleteSuccess,
    completeSucess,
    editSucess,
  }
}