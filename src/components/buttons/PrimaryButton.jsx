import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import colors from '../../consts/colors'

export default function PrimaryButton({
  title,
  onPress,
  primaryButtonStyle,
  textStyles,
  loading,
  pressed,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, primaryButtonStyle, pressed && styles.pressed]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.accent} />
      ) : (
        <Text
          style={[styles.title, textStyles, pressed && styles.titlePressed]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 20,
    width: 300,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: colors.black,
    fontFamily: 'Inter-ExtraBold',
    fontSize: 16,
  },
  titlePressed: {
    color: colors.black,
  },
  pressed: {
    backgroundColor: colors.accent,
  },
})
