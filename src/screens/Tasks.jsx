import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TextInputWithButton from '../components/inputs/TextInputWithButton';
import TemplatePage from './TeamplatePage';
import Header from '../components/pageComponents/Header';
import TextName from '../components/pageComponents/TextName';
import Body from '../components/pageComponents/Body';
import CustomAlert from '../components/modals/ActionModal';
import PrimaryButton from '../components/buttons/PrimaryButton';
import colors from '../consts/colors';
import useNotifications from '../data/hooks/useNotifications';
import { connect } from 'react-redux';
import { getTasksRequest } from '../store/tasks/actions';
import useTasks from '../data/hooks/useTasks';
import List from '../components/data/List';


const Tasks = ({
  getTask,
  tasks,

}) => {

  const {
    listTodo,
    listTodoFunction,
    listDone,
    listDoneFunction,
  } = useTasks();



  useEffect(() => {
    getTask();
    
  }, []);

  useEffect(() => {
    listTodoFunction(tasks.tasks);
    listDoneFunction(tasks.tasks);
    console.log(listDone)
  }, [tasks]);




  const addTask = () =>{
    console.log("addTaskAction")
  }

  const deleteTask = () =>{
    console.log("deleteTaskAction")
  }

  const updateTaskName = () =>{
    console.log("updateTaskNameAction")
  }

  const updateTaskToCompleted = () =>{
    console.log("updateTaskToCompletedAction")
  }

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
    handleDelete
  } = useNotifications({
    addFunction: addTask,
    updateNameFunction: updateTaskName,
    updateCompletedFunction: updateTaskToCompleted,
    deleteFunction: deleteTask,
  });
 
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
                setPressed('A fazer');
              }}
              primaryButtonStyle={{width: 100, backgroundColor:colors.background}}
            />
            <PrimaryButton
              title={'Feitas'}
              pressed={pressed === 'Feitas'} 
              onPress={() =>{
                setPressed('Feitas');
              }}
              primaryButtonStyle={{width: 100, backgroundColor:colors.background}}
            />
          </View>



      <View style={styles.scroll}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {pressed === 'A fazer' ? (
            <List
            sources={listTodo}
            onPressed={toggleCompleteModal}
            toggleDeleteModal={toggleCompleteModal}
            toggleEditModal={toggleEditModal}
            selectedSource={setSelected}
            editSource={updateTaskName}
            deleteSource={toggleCompleteModal}

            />
          ): (
            <List
            sources={listDone}
            disable={true}
            editable={false}
            presseble={false}
            />
          )
          }

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

  );

   }
   


const styles = StyleSheet.create({
  container:{
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
  }
})

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  loading: state.loading,
});


const mapDispatchToProps = (dispatch) => ({
  getTask: () => dispatch(getTasksRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);