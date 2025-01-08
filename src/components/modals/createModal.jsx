import React from 'react'
import { Modal, Text, View, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import TextInput from '../inputs/TextInput'
import colors from '../../consts/colors'
import PrimaryButton from '../buttons/PrimaryButton'

export default function CreateModal({
  setModalVisible,
  text,
  setText,
  handleTextInput,
}) {
  const toggleModal = () => {
    setModalVisible(false)
  }

  return (
    <View>
      <Modal
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modal, { width: '80%', padding: 20 }]}>
            <Text style={styles.title}>Criar nova tarefa</Text>
            <TextInput
              placeholder="Titulo da tarefa"
              value={text}
              onChangeText={setText}
              inptuStyle={{
                backgroundColor: colors.background,
              }}
            />
            <View style={styles.buttons}>
              <PrimaryButton
                primaryButtonStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: colors.accent,
                }}
                title="Cancelar"
                onPress={toggleModal}
                style={styles.cancelButton}
              />
              <PrimaryButton
                title="Salvar"
                textStyles={{ color: colors.white }}
                onPress={() => handleTextInput(setModalVisible)}
                style={styles.cancelButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
