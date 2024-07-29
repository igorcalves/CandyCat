import { useState } from 'react';

export default function useNotifications({
  addFunction,
  deleteFunction,
  updateCompletedFunction,
  updateNameFunction,
  getData,
}) {

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

  const handleEditTextInput = () => {
    if (checkInput(taskName, editSuccess)) {
      updateNameFunction(taskName, selected.id);
      setTaskName('');
      toggleEditModal();
      getData();
    }
  };

  const handleDelete = () => {
    deleteFunction(selected.id);
    toggleDeleteModal();
    getData();
  };

  const handleComplete = () => {
    console.log('selected', selected);
    // updateCompletedFunction(selected.id);
    // toggleCompleteModal();
    // getData();
  };

  return {
    toggleCompleteModal,
    toggleDeleteModal,
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
  };
}