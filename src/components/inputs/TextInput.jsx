import { StyleSheet, TextInput as TextInputComponent } from 'react-native'
import colors from '../../consts/colors'
export default function TextInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  inptuStyle,
}) {
  return (
    <TextInputComponent
      style={[styles.input, inptuStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 47,
    margin: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.background,
    fontFamily: 'Inter-ExtraBold',
    paddingLeft: 20,
  },
})
