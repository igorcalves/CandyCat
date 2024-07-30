import { useState } from 'react';
import { checkInput } from '../../utils/input/inputValitions';
import useToast from './useToast';

export default function useNotifications({
  addFunction,
  deleteFunction,
  updateCompletedFunction,
  updateNameFunction,
}) {

  const {
    addSuccess,
    deleteSuccess,
    editSuccess,
    completeSuccess,
   } = useToast(
   );

  const [textInput, setTextInput] = useState('');
  const [sourceName, setSourceName] = useState('');
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isCompleteModal, setCompleteModal] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [pressed, setPressed] = useState('A fazer');
  
  const toggleCompleteModal = () => {
    setCompleteModal(!isCompleteModal);
  };

  const toggleDeleteModal = () => {
    setDeleteModal(!isDeleteModal);
  };

  const toggleEditModal = () => {
    setEditModal(!isEditModal);
  };

  const handleTextInput = () => {
    {
      if(checkInput(textInput, addSuccess, selected.title)){
        addFunction(textInput);
        setTextInput('');
      }
    }
  }

  const handleEditTextInput = () => {
    if (checkInput(sourceName, editSuccess, selected.title)) {
      updateNameFunction(sourceName, selected.id);
      setSourceName('');
      toggleEditModal();
    }
  };

  const handleDelete = () => {
    deleteFunction(selected.id);
    deleteSuccess(selected.title);
    toggleDeleteModal();
  };

  const handleComplete = () => {
    updateCompletedFunction(selected.id);
    completeSuccess(selected.title);
    toggleCompleteModal();
  };

  return {
    toggleCompleteModal,
    toggleDeleteModal,
    handleTextInput,
    toggleEditModal,
    handleEditTextInput,
    handleDelete,
    handleComplete,
    selected,
    setSelected,
    isDeleteModal,
    isCompleteModal,
    isEditModal,
    sourceName,
    setSourceName,
    setTextInput,
    textInput,
    setPressed,
    pressed,
    sourceName,
    setSourceName,

  };
}