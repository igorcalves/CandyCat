import React from 'react'
import { Modal, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import TextInput from '../inputs/TextInput'
import colors from '../../consts/colors'
import PrimaryButton from '../buttons/PrimaryButton'
import CustomAlert from './ActionModal'
import { convertDate } from '../../utils/date/convert'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function CrudInfoModal({
  isDeleteModal,
  isCompleteModal,
  isEditModal,
  selected,
  toggleDeleteModal,
  toggleCompleteModal,
  toggleEditModal,
  handleComplete,
  handleDelete,
  updateTaskName,
  sourceName,
  setSourceName,
  handleEditTextInput,
  handleTextInput,
  setModalVisible,
  text,
  setText,
}) {
  const toggleModal = () => {
    setModalVisible(false)
  }

  const buttonStyle = {
    flex: 0,
    backgroundColor: 'transparent',
  }

  const buttons = () => {
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 40,
          },
        ]}
      >
        <Icon
          name="edit"
          size={20}
          color={colors.white}
          style={{ marginRight: 10, marginTop: 5 }}
          onPress={toggleEditModal}
        />
        <Icon
          name="delete"
          size={20}
          color={colors.white}
          style={{ marginRight: 10, marginTop: 5 }}
          onPress={toggleDeleteModal}
        />
      </View>
    )
  }

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modal, { width: '80%' }]}>
            <View
              style={{
                backgroundColor: colors.accent,
                width: '100%',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                padding: 5,
              }}
            >
              {buttons()}
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
              }}
            >
              <Text style={[styles.title]}>{selected.title}</Text>
            </View>

            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '100%',
                padding: 10,
              }}
            >
              <Text style={styles.description}>{selected.description}</Text>
              <Text style={styles.date}>
                Criado em: {convertDate(selected.date)}
              </Text>
            </View>

            <View style={[styles.buttons, { padding: 20 }]}>
              <PrimaryButton
                onPress={toggleModal}
                title="Fechar"
                primaryButtonStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.accent,
                }}
                textStyles={{ color: colors.accent }}
              />
              <PrimaryButton
                title="Completar"
                onPress={toggleCompleteModal}
                textStyles={{ color: colors.white }}
              />
            </View>
          </View>
        </View>
      </Modal>
      <CustomAlert
        text={'Deseja excluir a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isDeleteModal}
        toggleModal={toggleDeleteModal}
        mainModal={setModalVisible}
        actionCallback={handleDelete}
        id={selected.id}
      />

      <CustomAlert
        text={'Deseja completar a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isCompleteModal}
        toggleModal={toggleCompleteModal}
        actionCallback={handleComplete}
        mainModal={setModalVisible}
        id={selected.id}
      />

      <CustomAlert
        text={'Deseja editar a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isEditModal}
        mainModal={setModalVisible}
        toggleModal={toggleEditModal}
        actionCallback={updateTaskName}
        id={selected.id}
        updateTask={true}
        value={sourceName}
        onChangeText={setSourceName}
        onPressToUpdateName={handleEditTextInput}
      />
    </View>
  )
}
