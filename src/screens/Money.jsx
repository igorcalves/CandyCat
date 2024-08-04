import React, { useEffect } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import TextInputWithButton from '../components/inputs/TextInputWithButton'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import TextName from '../components/pageComponents/TextName'
import { useFocusEffect } from '@react-navigation/native'
import Body from '../components/pageComponents/Body'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../consts/colors'
import useNotifications from '../data/hooks/useNotifications'
import styles from '../consts/screensStyles'
import fakeDB from '../data/db/fakeDB'
import List from '../components/data/List'
import { connect } from 'react-redux'
import {
  addMoneyRequest,
  getSavedMoneyRequest,
  updateMoneyRequest,
  deleteMoneyRequest,
  getTotalRequest,
} from '../store/money/actions'
import CustomAlert from '../components/modals/ActionModal'
export function Money({
  navigation,
  addMoney,
  moneyState,
  getSavedMoney,
  updateMoney,
  deleteMoney,
  getTotal,
  totalState,
}) {
  const { money } = fakeDB
  const { loading, savedMoneyList } = moneyState

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
    addFunction: addMoney,
    updateNameFunction: updateMoney,
    deleteFunction: deleteMoney,
    email: 'igor193@live.com',
  })

  useFocusEffect(
    React.useCallback(() => {
      setPressed('Guardar')
      getSavedMoney()
      getTotal({ id: '1' })
    }, [navigation])
  )

  const switchList = () => {
    switch (pressed) {
      case 'Guardar':
        return (
          <List
            sources={savedMoneyList}
            isMoney={true}
            iconName={'Money'}
            disable={true}
            toggleDeleteModal={toggleDeleteModal}
            toggleEditModal={toggleEditModal}
            selectedSource={setSelected}
          />
        )
      case 'Desejos':
        return (
          <List
            sources={money.wishList}
            isMoney={true}
            iconName={'Money'}
            total={money.total.savedMoney}
            wish={true}
            onPressed={toggleCompleteModal}
            toggleDeleteModal={toggleDeleteModal}
            toggleEditModal={toggleEditModal}
            selectedSource={setSelected}
          />
        )
      default:
        return (
          <List
            sources={money.spentMoney}
            isMoney={true}
            iconName={'Money'}
            onPressed={toggleCompleteModal}
            toggleDeleteModal={toggleDeleteModal}
            toggleEditModal={toggleEditModal}
            selectedSource={setSelected}
          />
        )
    }
  }
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
            onPress={() => handleTextInput()}
          />
          <View style={[styles.buttons, { paddingHorizontal: 20 }]}>
            <PrimaryButton
              title={'Guardar'}
              pressed={pressed === 'Guardar'}
              onPress={() => {
                setPressed('Guardar')
                getSavedMoney()
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
              Total: R$: {totalState.total.savedMoney}
            </Text>
            <ScrollView style={styles.scroll}>
              {loading ? (
                <ActivityIndicator
                  color={colors.strongBlue}
                  style={styles.activityIndicator}
                  size={70}
                />
              ) : (
                switchList()
              )}
            </ScrollView>
          </View>
        </View>
      </Body>
      <CustomAlert
        text={'Deseja editar a tarefa:'}
        taskTitle={selected.title}
        isModalVisible={isEditModal}
        toggleModal={toggleEditModal}
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

const mapStateToProps = (state) => ({
  moneyState: state.money,
  totalState: state.total,
})

const mapDispatchToProps = (dispatch) => ({
  addMoney: (data) => dispatch(addMoneyRequest(data)),
  getSavedMoney: () => dispatch(getSavedMoneyRequest()),
  updateMoney: (data) => dispatch(updateMoneyRequest(data)),
  deleteMoney: (data) => dispatch(deleteMoneyRequest(data)),
  getTotal: (data) => dispatch(getTotalRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Money)
