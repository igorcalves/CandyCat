import React, { useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import TextInputWithButton from '../components/inputs/TextInputWithButton'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import TextName from '../components/pageComponents/TextName'
import Body from '../components/pageComponents/Body'
import CustomAlert from '../components/modals/ActionModal'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../consts/colors'
import useNotifications from '../data/hooks/useNotifications'
import { connect } from 'react-redux'
import {
  getTasksRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskToCompletedRequest,
  updateTaskNameRequest,
} from '../store/tasks/actions'
import List from '../components/data/List'

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

  return (
    <TemplatePage>
      <Header>
        <TextName name="Tarefas" />
      </Header>
      <Body>
        <View style={styles.container}>
          <TextInputWithButton
            placeholder="Adicionar Tarefa"
            inputStyle={styles.input}
            value={textInput}
            onChangeText={setTextInput}
            onPress={() => handleTextInput()}
          />
          <View style={styles.buttons}>
            <PrimaryButton
              title={'A fazer'}
              pressed={pressed === 'A fazer'}
              onPress={() => {
                setPressed('A fazer')
                getTask(false)
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
            <PrimaryButton
              title={'Feitas'}
              pressed={pressed === 'Feitas'}
              onPress={() => {
                setPressed('Feitas')
                getTask(true)
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
          </View>

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
                  onPressed={toggleCompleteModal}
                  toggleDeleteModal={toggleDeleteModal}
                  toggleEditModal={toggleEditModal}
                  selectedSource={setSelected}
                />
              ) : (
                <List
                  sources={tasks}
                  disable={true}
                  editable={false}
                  presseble={false}
                />
              )}
            </ScrollView>
          </View>
        </View>
      </Body>

      <CustomAlert
        text={'Deseja completar a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isCompleteModal}
        toggleModal={toggleCompleteModal}
        actionCallback={handleComplete}
        id={selected.id}
      />

      <CustomAlert
        text={'Deseja editar a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isEditModal}
        toggleModal={toggleEditModal}
        actionCallback={updateTaskName}
        id={selected.id}
        updateTask={true}
        value={sourceName}
        onChangeText={setSourceName}
        onPressToUpdateName={handleEditTextInput}
      />

      <CustomAlert
        text={'Deseja excluir a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isDeleteModal}
        toggleModal={toggleDeleteModal}
        actionCallback={handleDelete}
        id={selected.id}
      />
    </TemplatePage>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 350,
  },
  scroll: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  activityIndicator: {
    marginTop: 50,
  },
})

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
