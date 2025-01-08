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
  getSource,
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

  const handleTextInput = (callBack) => {
    const callBakcFunction = () => {
      callBack(false)
      addSuccess(textInput)
      setTextInput('')
    }
    if (validateInput(textInput, addSuccess, selected.title)) {
      addFunction(
        { title: textInput, email: getFirst(email)[0] },
        callBakcFunction,
        error
      )
      setTextInput('')
    }
  }

  const handleEditTextInput = (showModal) => {
    if (validateInput(sourceName, editSuccess, selected.title)) {
      const callBack = () => {
        editSuccess(sourceName)
        showModal(false)
        getSource()
      }
      updateNameFunction(
        {
          title: sourceName,
          id: selected.id,
          email: getFirst(email)[0],
          oldValue: selected.title,
        },
        callBack,
        error
      )
      setSourceName('')
      toggleEditModal()
    }
  }

  const handleDelete = (id, title, showModal) => {
    const callBack = () => {
      deleteSuccess(title)
      showModal(false)
      getSource()
    }
    deleteFunction({ id: selected.id, title: selected.title }, callBack, error)
    toggleDeleteModal()
  }

  const handleComplete = (id, title, showModal) => {
    const callBack = () => {
      completeSuccess(title)
      showModal(false)
      getSource()
    }
    updateCompletedFunction(
      { id: selected.id, email: getFirst(email)[0] },
      callBack,
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
