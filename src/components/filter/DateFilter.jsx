import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native'
import colors from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal'

export default function DateFilter({ date }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="filter-list" size={24} color={colors.black} />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.dropdownText}>Hoje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.dropdownText}>Última semana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.dropdownText}>último mes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownItem} onPress={() => {}}>
            <Text style={styles.dropdownText}>Todas</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  dropdown: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: colors.black,
  },
})
