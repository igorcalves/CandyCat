import React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from '../../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function PrimaryButton({
  title,
  onPress,
  primaryButtonStyle,
  textStyles,
  loading,
  pressed,
  icon,
  iconName,
  iconSize = 20,
  iconColor = colors.black,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, primaryButtonStyle, pressed && styles.pressed]}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={colors.accent} />
      ) : (
        <View style={styles.content}>
          {icon && (
            <Icon
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            />
          )}
          <Text
            style={[styles.title, textStyles, pressed && styles.titlePressed]}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
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
