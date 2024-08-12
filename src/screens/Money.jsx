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
  deleteMoneyRequest,
  getTotalRequest,
} from '../store/money/actions'
import CustomAlert from '../components/modals/ActionModal'
export function Money({
  navigation,
  addMoney,
  moneyState,
  getSavedMoney,
  deleteMoney,
  getTotal,
  totalState,
}) {
  const { money } = fakeDB
  const { loading, savedMoneyList } = moneyState

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
    toggleDeleteModal,
    isDeleteModal,
    selected,
    setSelected,
    sourceName,
    setSourceName,
    handleTextInput,
    handleDelete,
  } = useNotifications({
    addFunction: addMoney,
    deleteFunction: deleteMoney,
    email: 'igor193@live.com',
    numberInput: true,
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
            hasEditButton={false}
            toggleDeleteModal={toggleDeleteModal}
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
            toggleDeleteModal={toggleDeleteModal}
            selectedSource={setSelected}
          />
        )
      default:
        return (
          <List
            sources={money.spentMoney}
            isMoney={true}
            iconName={'Money'}
            toggleDeleteModal={toggleDeleteModal}
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
                getTotal({ id: '1' })
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
              Total: R$:{' '}
              {moneyState.loading ? '----' : totalState.total.savedMoney}
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
  deleteMoney: (data) => dispatch(deleteMoneyRequest(data)),
  getTotal: (data) => dispatch(getTotalRequest(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Money)
