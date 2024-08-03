import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native'
import TextInputWithButton from '../components/inputs/TextInputWithButton'
import AtualizationCard from '../components/card/AtualizationCard'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import TextName from '../components/pageComponents/TextName'
import Body from '../components/pageComponents/Body'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../consts/colors'
import useNotifications from '../data/hooks/useNotifications'
import styles from '../consts/screensStyles'
import fakeDB from '../data/db/fakeDB'
import List from '../components/data/List'
export default function Money() {
  const { money } = fakeDB

  const total = money.savedMoney
    .reduce((acc, curr) => acc + Number(curr.title), 0)
    .toFixed(2)
  const add = () => {
    console.log('add')
  }

  const del = () => {
    console.log('del')
  }

  updateName = () => {
    console.log('updateName')
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
    handleDelete,
  } = useNotifications({
    addFunction: add,
    updateNameFunction: null,
    updateCompletedFunction: del,
    deleteFunction: del,
  })
  return (
    <TemplatePage>
      <Header>
        <TextName name="Dinheiro" />
      </Header>
      <Body>
        <View style={styles.container}>
          <TextInputWithButton
            placeholder={`Adicionar ${
              pressed == 'Guardar' ? 'Dinheiro' : pressed
            }`}
            inputStyle={styles.input}
            value={textInput}
            onChangeText={setTextInput}
            onPress={() => console.log('add')}
          />
          <View style={[styles.buttons, { paddingHorizontal: 20 }]}>
            <PrimaryButton
              title={'Guardar'}
              pressed={pressed === 'Guardar'}
              onPress={() => {
                setPressed('Guardar')
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
            <PrimaryButton
              title={'Desejos'}
              pressed={pressed === 'Desejos'}
              onPress={() => {
                setPressed('Desejos')
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
            <PrimaryButton
              title={'Gastos'}
              pressed={pressed === 'Gastos'}
              onPress={() => {
                setPressed('Gastos')
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
          </View>

          <View style={styles.scroll}>
            <Text
              style={{
                color: colors.white,
                fontSize: 20,
                fontFamily: 'Inter-ExtraBold',
                justifyContent: 'flex-start',
                width: '100%',
                marginLeft: 20,
                marginBottom: 10,
              }}
            >
              Total: R$: {total}
            </Text>
            <ScrollView style={styles.scroll}>
              <List
                sources={money.wishList}
                isMoney={true}
                iconName={'Money'}
                total={total}
                wish={true}
                onPressed={toggleCompleteModal}
                toggleDeleteModal={toggleDeleteModal}
                toggleEditModal={toggleEditModal}
                selectedSource={setSelected}
              />
            </ScrollView>
          </View>
        </View>
      </Body>
    </TemplatePage>
  )
}
