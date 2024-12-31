import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { useFocusEffect } from '@react-navigation/native'

const { height } = Dimensions.get('window')

export default function AnimatedBody({ children }) {
  const translateY = useSharedValue(height)

  useFocusEffect(
    React.useCallback(() => {
      translateY.value = height

      translateY.value = withTiming(0, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      })
    }, [])
  )

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
