import { useState } from 'react'
import { checkInput } from '../../utils/input/inputValitions'
import useToast from './useToast'

export default function useNotifications({
  addFunction,
  deleteFunction,
  updateCompletedFunction,
  updateNameFunction,
  email,
}) {
  const { addSuccess, deleteSuccess, editSuccess, completeSuccess, error } =
    useToast()

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
    if (checkInput(textInput, addSuccess, selected.title)) {
      addFunction(
        { title: textInput, email: getFirst(email)[0] },
        addSuccess,
        error
      )
      setTextInput('')
    }
  }

  const handleEditTextInput = () => {
    if (checkInput(sourceName, editSuccess, selected.title)) {
      updateNameFunction(
        { title: sourceName, id: selected.id, email: getFirst(email)[0] },
        editSuccess,
        error
      )
      setSourceName('')
      toggleEditModal()
    }
  }

  const handleDelete = () => {
    deleteFunction(selected.id, deleteSuccess, error)
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
