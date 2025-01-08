import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, ScrollView, ActivityIndicator, Image } from 'react-native'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import TextName from '../components/pageComponents/TextName'
import Body from '../components/pageComponents/Body'
import CustomAlert from '../components/modals/ActionModal'
import colors from '../consts/colors'
import useNotifications from '../data/hooks/useNotifications'
import { connect } from 'react-redux'
import styles from '../consts/screensStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskToCompletedRequest,
  updateTaskNameRequest,
} from '../store/tasks/actions'
import List from '../components/data/List'
import SideDrawer from './SideDrawer'
import AddSource from '../components/AddSource'
import CreateModal from '../components/modals/createModal'
import CrudInfoModal from '../components/modals/CrudInfoModal'

const Tasks = ({
  getTask,
  tasks,
  addTask,
  deleteTask,
  updateTaskToCompleted,
  updateTaskName,
  email,
  loading,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [infoModal, setInfoModal] = useState(false)

  const {
    textInput,
    setTextInput,
    pressed,
    setPressed,
    toggleCompleteModal,
    toggleEditModal,
    toggleDeleteModal,
    isCompleteModal,
    isEditModal,
    isDeleteModal,
    selected,
    setSelected,
    handleComplete,
    sourceName,
    setSourceName,
    handleTextInput,
    handleEditTextInput,
    handleDelete,
  } = useNotifications({
    addFunction: addTask,
    updateNameFunction: updateTaskName,
    updateCompletedFunction: updateTaskToCompleted,
    deleteFunction: deleteTask,
    email,
  })

  useFocusEffect(
    React.useCallback(() => {
      getTask(false)
    }, [getTask])
  )

  const actions = [
    <AddSource
      key="create"
      title="Criar"
      icon={<Icon name="add" style={styles.buttonIcon} />}
      onPress={() => {
        setShowModal(true)
      }}
    />,
    <AddSource
      key="list"
      title="A fazer"
      icon={<Icon name="list" style={styles.buttonIcon} />}
      onPress={() => {
        setPressed('A fazer')
        getTask(false)
      }}
    />,
    <AddSource
      key="check"
      title="Feitas"
      icon={<Icon name="check" style={styles.buttonIcon} />}
      onPress={() => {
        setPressed('Feitas')
        getTask(true)
      }}
    />,
  ]

  return (
    <TemplatePage>
      <Header>
        <TextName name={'Tarefas'} />
      </Header>

      <SideDrawer items={actions} />

      <Body>
        <View style={styles.bodyTitleContainer}>
          <TextName name={pressed} />
        </View>
        <View style={styles.container}>
          <View style={styles.scroll}>
            <ScrollView
              style={styles.scroll}
              showsVerticalScrollIndicator={false}
            >
              {loading ? (
                <ActivityIndicator
                  color={colors.strongBlue}
                  style={styles.activityIndicator}
                  size={70}
                />
              ) : pressed === 'A fazer' ? (
                <List
                  sources={tasks}
                  onPressed={setInfoModal}
                  toggleDeleteModal={toggleDeleteModal}
                  toggleEditModal={toggleEditModal}
                  selectedSource={setSelected}
                  iconName={'Tasks'}
                />
              ) : (
                <List
                  sources={tasks}
                  disable={true}
                  editable={false}
                  iconName={'Check'}
                  presseble={false}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </Body>

      {showModal && (
        <CreateModal
          text={textInput}
          setText={setTextInput}
          handleTextInput={handleTextInput}
          setModalVisible={setShowModal}
        />
      )}

      {infoModal && (
        <CrudInfoModal
          isDeleteModal={isDeleteModal}
          isCompleteModal={isCompleteModal}
          isEditModal={isEditModal}
          selected={selected}
          toggleDeleteModal={toggleDeleteModal}
          toggleCompleteModal={toggleCompleteModal}
          toggleEditModal={toggleEditModal}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          updateTaskName={updateTaskName}
          sourceName={sourceName}
          setSourceName={setSourceName}
          handleEditTextInput={handleEditTextInput}
          handleTextInput={handleTextInput}
          setModalVisible={setInfoModal}
          text={textInput}
          setText={setTextInput}
        />
      )}
    </TemplatePage>
  )
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  loading: state.tasks.loading,
  email: state.login.user.email,
})

const mapDispatchToProps = (dispatch) => ({
  getTask: (status) => dispatch(getTasksRequest(status)),
  addTask: (data, callback, callbackError) =>
    dispatch(createTaskRequest(data, callback, callbackError)),
  deleteTask: (data, callback, callbackError) =>
    dispatch(deleteTaskRequest(data, callback, callbackError)),
  updateTaskToCompleted: (data, callback, callbackError) =>
    dispatch(updateTaskToCompletedRequest(data, callback, callbackError)),
  updateTaskName: (data, callback, callbackError) =>
    dispatch(updateTaskNameRequest(data, callback, callbackError)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)
