import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../consts/colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Header({ children }) {
  const navigation = useNavigation()

  return (
    <>
      <View style={styles.column}>{children}</View>
    </>
  )
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    paddingBottom: 14,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  data: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    textAlign: 'center',
  },
})
