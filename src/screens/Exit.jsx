import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import Body from '../components/pageComponents/Body'
import PrimaryButton from '../components/buttons/PrimaryButton'
import colors from '../consts/colors'
import { logout } from '../store/user/actions'
import { connect } from 'react-redux'
import { useState } from 'react'
import TextName from '../components/pageComponents/TextName'

export const Exit = ({ logout }) => {
  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    setLoading(true)
    logout(
      () => {
        navigation.navigate('Login')
        setLoading(false)
      },
      () => {
        setLoading(false)
      }
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <TemplatePage>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.profileContainer}
          >
            <Text style={styles.text}>Maria pepeta</Text>
            <Image
              source={require('../../assets/images/pepeta.png')}
              style={{ width: 150, height: 150, borderRadius: 100 }}
            />
          </TouchableOpacity>
        </View>
        <Body>
          <View style={{ flex: 1 }}>
            <PrimaryButton
              primaryButtonStyle={styles.exitButton}
              onPress={() => navigation.navigate('Login')}
              title="Perfil"
            />
            <View style={styles.divider} />
            <PrimaryButton
              primaryButtonStyle={styles.exitButton}
              onPress={() => navigation.navigate('Login')}
              title="Alterar Senha"
            />
            <View style={styles.divider} />
            <PrimaryButton
              primaryButtonStyle={styles.exitButton}
              onPress={handleLogout}
              title="Sair"
              loading={loading}
            />
          </View>
        </Body>
      </TemplatePage>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  exitButton: {
    padding: 10,
    marginLeft: 20,
    backgroundColor: colors.secondary,
    width: 130,
    alignItems: 'flex-start',
  },
  text: {
    color: colors.black,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 20,
    marginBottom: 30,
  },
  container: {
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    padding: 50,
  },
  divider: {
    height: 1.5,
    backgroundColor: colors.softGray,
    marginVertical: 10,
  },
})

const mapDispatchToProps = (dispatch) => ({
  logout: (callback) => dispatch(logout(callback)),
})

export default connect(null, mapDispatchToProps)(Exit)
