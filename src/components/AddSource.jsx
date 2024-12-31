import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../consts/colors'

export default function AddSource({ title, style, icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.mainContainer, style]}>
        <View style={styles.iconContainer}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  iconContainer: {
    backgroundColor: colors.strongGray,
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  icon: {
    color: 'black',
  },
})
