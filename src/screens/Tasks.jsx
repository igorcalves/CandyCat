import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputWithButton from '../components/inputs/TextInputWithButton';
import TemplatePage from './TeamplatePage';
import Header from '../components/pageComponents/Header';
import TextName from '../components/pageComponents/TextName';
import Body from '../components/pageComponents/Body';
import { useTasks } from '../data/hooks/useDB';
import CustomAlert from '../components/modals/ActionModal';
import List from '../components/data/List';
import PrimaryButton from '../components/buttons/PrimaryButton';
import colors from '../consts/colors';
import useNotifications from '../data/hooks/useNotifications';
import useToast from '../data/hooks/useToast';
export default function Tasks() {
  
  const {
    textInput,
    setTextInput,
    pressed,
    setPressed,
    toggleCompleteModal,
    isCompleteModal,
    setCompleteModal,
    selected,
    setSelected,
    handleComplete,
    sourceName,
    setSourceName,
    
  } = useNotifications({
  });
   

  const { 
    addTask,
    deleteTask,
    listDone,
    listTodo,
    getData,
    updateTaskName,
    updateTaskToCompleted,
    tasks,
   } = useTasks({});

   const {
    addSuccess,
    deleteSuccess,
    editSucess,
    completeSuccess,
   } = useToast();

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
                getData(); 
              }}
              primaryButtonStyle={{width: 100, backgroundColor:colors.background}}
            />
            <PrimaryButton
              title={'Feitas'}
              pressed={pressed === 'Feitas'} 
              onPress={() =>{
                setPressed('Feitas');
                getData(); 
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
            toggleEditModal={toggleCompleteModal}
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
      text={'Deseja excluir a tarefa:'}
      taskTitle={selected.title}
      isModalVisible={isCompleteModal}
      toggleModal={toggleCompleteModal}
      actionCallback={handleComplete}
      callback={deleteSuccess}
      id={selected.id}
      />

    <CustomAlert
      text={'Deseja completar a tarefa:'}
      taskTitle={selected.title}
      isModalVisible={isCompleteModal}
      toggleModal={toggleCompleteModal}
      actionCallback={updateTaskToCompleted}
      callback={handleComplete}
      id={selected.id}
      />

      <CustomAlert
      text={'Deseja editar a tarefa:'}
      taskTitle={selected.title}
      isModalVisible={isCompleteModal}
      toggleModal={toggleCompleteModal}
      actionCallback={updateTaskName}
      id={selected.id}
      updateTask={true}
      value={sourceName}
      callback={editSucess}
      onChangeText={setSourceName}
      onPressToUpdateName={handleComplete}
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