import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import PrimaryButton from '../buttons/PrimaryButton'
import TextInput from '../inputs/TextInput'
import { styles } from './styles'
export default function CustomAlert({
  isModalVisible,
  toggleModal,
  actionCallback,
  id,
  taskTitle,
  text,
  value,
  onChangeText,
  updateTask = false,
  onPressToUpdateName,
  mainModal,
}) {
  const buttons = () => {
    return (
      <View style={styles.buttons}>
        <PrimaryButton
          title="Sim"
          primaryButtonStyle={{ width: 100 }}
          onPress={() => {
            actionCallback(id, taskTitle, mainModal)
            toggleModal()
          }}
        />
        <PrimaryButton
          title={'Não'}
          primaryButtonStyle={{ width: 100 }}
          onPress={() => toggleModal()}
        />
      </View>
    )
  }

  const edit = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          inptuStyle={{
            width: 300,
          }}
          placeholder={'Novo nome'}
        />
        <View style={styles.buttons}>
          <PrimaryButton
            title={'Salvar'}
            onPress={() => {
              onPressToUpdateName(mainModal)
            }}
          />
          <PrimaryButton
            title={'Cancelar'}
            onPress={() => {
              toggleModal()
              onChangeText('')
            }}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible}>
        <View style={[styles.modal, { padding: 20 }]}>
          <Text style={styles.title}>{`${text} ${taskTitle}`}</Text>
          {updateTask ? edit() : buttons()}
        </View>
      </Modal>
    </View>
  )
}
