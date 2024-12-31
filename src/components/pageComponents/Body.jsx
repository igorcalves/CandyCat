import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../../consts/colors'
import AnimatedBody from '../AnimatedBody'

export default function Body({ children }) {
  return (
    <AnimatedBody>
      <View style={styles.container}>{children}</View>
    </AnimatedBody>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    backgroundColor: colors.secondary,
  },
})
