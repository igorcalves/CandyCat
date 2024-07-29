import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputWithButton from '../components/inputs/TextInputWithButton';
import AtualizationCard from '../components/card/AtualizationCard'
import TemplatePage from './TeamplatePage';
import Header from '../components/pageComponents/Header';
import TextName from '../components/pageComponents/TextName';
import Body from '../components/pageComponents/Body';
import { useTasks } from '../data/hooks/useDB';
import { checkInput } from '../utils/input/inputValitions';
import CustomAlert from '../components/modals/ActionModal';
import List from '../components/data/List';
import PrimaryButton from '../components/buttons/PrimaryButton';
import colors from '../consts/colors';
import Toast from 'react-native-toast-message';

export default function Tasks() {

  const [textInput, setTextInput] = React.useState('');
  const [taskName, setTaskName] = React.useState('');
  const [isDeleteModal, setDeleteModal] = useState(false);
  const [isCompleteModal, setCompleteModal] = useState(false);
  const [isEditModal, setEditModal] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [pressed, setPressed] = useState('A fazer'); 


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

    const toggleCompleteModal = () => {
      setCompleteModal(!isCompleteModal);
    };

    const toggleDeleteModal = () => {
      setDeleteModal(!isDeleteModal);
    };

    const toggleEditModal = () => {
      setEditModal(!isEditModal);
    }

  const { 
    tasks,
    deleteTask, 
    addTask,
    updateTaskToCompleted,
    updateTaskName
   } = useTasks();
   
   const listTodo = tasks.filter((task) => task.completed === false);
    const listDone = tasks.filter((task) => task.completed === true);



  const handleTextInput = () => {
    {
      if(checkInput(textInput, addSuccess  )){
        addTask(textInput);
        setTextInput('');
      }
    }
  }

  const handleEditTextInput = () => {
      if(checkInput(taskName, editSucess )){
        updateTaskName(taskName, taskSelected.id);
        setTaskName('');
        toggleEditModal();
      }
  }




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
            toggleDeleteModal={toggleDeleteModal}
            toggleEditModal={toggleEditModal}
            selectedSource={setTaskSelected}
            editSource={updateTaskName}
            deleteSource={deleteTask}
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
      text={'Deseja excluir a tarefa:'}
      taskTitle={taskSelected.title}
      isModalVisible={isDeleteModal}
      toggleModal={toggleDeleteModal}
      actionCallback={deleteTask}
      callback={deleteSuccess}
      id={taskSelected.id}
      />

    <CustomAlert
      text={'Deseja completar a tarefa:'}
      taskTitle={taskSelected.title}
      isModalVisible={isCompleteModal}
      toggleModal={toggleCompleteModal}
      actionCallback={updateTaskToCompleted}
      callback={completeSucess}
      id={taskSelected.id}
      />

      <CustomAlert
      text={'Deseja editar a tarefa:'}
      taskTitle={taskSelected.title}
      isModalVisible={isEditModal}
      toggleModal={toggleEditModal}
      actionCallback={updateTaskName}
      id={taskSelected.id}
      updateTask={true}
      value={taskName}
      callback={editSucess}
      onChangeText={setTaskName}
      onPressToUpdateName={() =>{
        handleEditTextInput()
      }}
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