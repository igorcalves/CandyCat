import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../consts/colors'

export default function AddSource({ title, style, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
        {icon}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent,
    padding: 10,
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
  icon: {
    color: 'black',
  },

  buttonText: {
    color: 'black',
    fontSize: 25,
  },
})
