import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { connect } from 'react-redux'
import TextInputWithButton from '../components/inputs/TextInputWithButton'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import TextName from '../components/pageComponents/TextName'
import Body from '../components/pageComponents/Body'
import PrimaryButton from '../components/buttons/PrimaryButton'
import CustomAlert from '../components/modals/ActionModal'
import useNotifications from '../data/hooks/useNotifications'
import colors from '../consts/colors'
import fakeDB from '../data/db/fakeDB'
import SwitchList from '../utils/lists/SwitchList'
import styles from '../consts/screensStyles'
import textStyles from '../consts/textStyles'

import {
  addMoneyRequest,
  getSavedMoneyRequest,
  deleteMoneyRequest,
  getTotalRequest,
  addToWishlistRequest,
  getWishlistRequest,
} from '../store/money/actions'
import { SpinnerLoading } from '../components/loading/SpinningLoading'

export function Money({
  navigation,
  addMoney,
  moneyState,
  getSavedMoney,
  deleteMoney,
  getTotal,
  totalState,
  wishListState,
  addToWishlist,
  getWishList,
}) {
  const { money } = fakeDB
  const { loading, savedMoneyList } = moneyState

  const del = () => {
    console.log('del')
  }

  const switchListFunctions = (pressed) => {
    switch (pressed) {
      case 'Guardar':
        return {
          addFunction: addMoney,
          deleteFunction: deleteMoney,
          email: 'igor193@live.com',
          numberInput: true,
        }
      case 'Desejos':
        return {
          addFunction: addToWishlist,
          deleteFunction: del,
          email: 'igor193@live.com',
          numberInput: true,
        }

      default:
        return {
          addFunction: addMoney,
          deleteFunction: deleteMoney,
          email: 'igor193@live.com',
          numberInput: true,
        }
    }
  }

  const [pressed, setPressed] = useState('Guardar')
  const [notificationConfig, setNotificationConfig] = useState(
    switchListFunctions(pressed)
  )

  useEffect(() => {
    setNotificationConfig(switchListFunctions(pressed))
  }, [pressed])

  const {
    textInput,
    setTextInput,
    toggleDeleteModal,
    isDeleteModal,
    selected,
    setSelected,
    sourceName,
    setSourceName,
    handleTextInput,
    handleDelete,
  } = useNotifications(notificationConfig)

  useFocusEffect(
    React.useCallback(() => {
      setPressed('Desejos')
      getSavedMoney()
      getTotal({ id: '1' })
      getWishList()
    }, [navigation, getSavedMoney, getTotal])
  )

  const showList = () => {
    return loading || wishListState.loading ? (
      <SpinnerLoading />
    ) : (
      SwitchList({
        savedMoneyList,
        money,
        wishListState,
        setSelected,
        toggleDeleteModal,
        pressed,
      })
    )
  }

  const showToalValue = () => {
    return (
      <Text style={textStyles.moneyText}>
        Total: R$:{' '}
        {moneyState.loading
          ? '----'
          : Number(totalState.total.savedMoney).toFixed(2)}
      </Text>
    )
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
                getWishList()
              }}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
            <PrimaryButton
              title={'Gastos'}
              pressed={pressed === 'Gastos'}
              onPress={() => setPressed('Gastos')}
              primaryButtonStyle={{
                width: 100,
                backgroundColor: colors.background,
              }}
            />
          </View>

          <View style={styles.scroll}>
            {showToalValue()}
            <ScrollView style={styles.scroll}>{showList()}</ScrollView>
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
  wishListState: state.wishList,
})

const mapDispatchToProps = (dispatch) => ({
  addMoney: (data) => dispatch(addMoneyRequest(data)),
  getSavedMoney: () => dispatch(getSavedMoneyRequest()),
  deleteMoney: (data) => dispatch(deleteMoneyRequest(data)),
  getTotal: (data) => dispatch(getTotalRequest(data)),
  addToWishlist: (data) => dispatch(addToWishlistRequest(data)),
  getWishList: () => dispatch(getWishlistRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Money)
