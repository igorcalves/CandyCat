import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
} from 'react-native'
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../consts/colors'

export default function SideDrawer({ items }) {
  const [isVisible, setIsVisible] = useState(false)
  const [showFab, setShowFab] = useState(true)
  const translateX = useSharedValue(250)

  const toggleDrawer = () => {
    setShowFab(false)
    setIsVisible(!isVisible)
    translateX.value = withTiming(isVisible ? 250 : 0, {
      duration: 500,
      easing: Easing.out(Easing.exp),
    })
  }

  const closeDrawer = () => {
    translateX.value = withTiming(
      345,
      {
        duration: 500,
        easing: Easing.out(Easing.exp),
      },
      (finished) => {
        if (finished) {
          runOnJS(setIsVisible)(false)
          runOnJS(setShowFab)(true)
        }
      }
    )
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    }
  })

  return (
    <>
      {showFab && (
        <TouchableOpacity style={styles.fab} onPress={toggleDrawer}>
          <Text
            style={{
              color: colors.primary,
              fontSize: 23,
            }}
          >
            {'<'}
          </Text>
        </TouchableOpacity>
      )}
      <Modal
        transparent={true}
        visible={isVisible}
        animationType="fade"
        onRequestClose={closeDrawer}
      >
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.drawer, animatedStyle]}>
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
                {items.map((item, index) => (
                  <View key={index} style={styles.itemContainer}>
                    {item}
                  </View>
                ))}
                {/* </ScrollView> */}
                <View style={styles.leftDecoration} />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 50,
    right: 0,
    backgroundColor: colors.accent,
    width: 20,
    height: 80,
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: 'center',
    elevation: 10,
    zIndex: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  drawer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    maxWidth: '100%',
    marginBottom: 80,
    marginRight: 20,
    elevation: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  leftDecoration: {
    backgroundColor: colors.accent,
    width: 10,
    position: 'absolute',
    left: 0,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
})
