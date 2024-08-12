import { useState } from 'react'
import { checkInput, checkNumberInput } from '../../utils/input/inputValitions'
import useToast from './useToast'

export default function useNotifications({
  addFunction,
  deleteFunction,
  updateCompletedFunction,
  updateNameFunction,
  email,
  numberInput = false,
}) {
  const { addSuccess, deleteSuccess, editSuccess, completeSuccess, error } =
    useToast()

  const validateInput = numberInput ? checkNumberInput : checkInput

  const [textInput, setTextInput] = useState('')
  const [sourceName, setSourceName] = useState('')
  const [isDeleteModal, setDeleteModal] = useState(false)
  const [isCompleteModal, setCompleteModal] = useState(false)
  const [isEditModal, setEditModal] = useState(false)
  const [selected, setSelected] = useState({})
  const [pressed, setPressed] = useState('A fazer')

  const toggleCompleteModal = () => {
    setCompleteModal(!isCompleteModal)
  }

  const toggleDeleteModal = () => {
    setDeleteModal(!isDeleteModal)
  }

  const toggleEditModal = () => {
    setEditModal(!isEditModal)
  }

  const getFirst = (email) => email.split('@')

  const handleTextInput = () => {
    if (validateInput(textInput, addSuccess, selected.title)) {
      addFunction(
        { title: textInput, email: getFirst(email)[0] },
        addSuccess,
        error
      )
      setTextInput('')
    }
  }

  const handleEditTextInput = () => {
    if (validateInput(sourceName, editSuccess, selected.title)) {
      updateNameFunction(
        {
          title: sourceName,
          id: selected.id,
          email: getFirst(email)[0],
          oldValue: selected.title,
        },
        editSuccess,
        error
      )
      setSourceName('')
      toggleEditModal()
    }
  }

  const handleDelete = () => {
    deleteFunction(
      { id: selected.id, title: selected.title },
      deleteSuccess,
      error
    )
    toggleDeleteModal()
  }

  const handleComplete = () => {
    updateCompletedFunction(
      { id: selected.id, email: getFirst(email)[0] },
      completeSuccess,
      error
    )
    toggleCompleteModal()
  }

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
  }
}
