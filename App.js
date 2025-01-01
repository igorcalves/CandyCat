import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import store from './src/store'
import Toast from 'react-native-toast-message'
import toastConfig from './src/utils/toast/customToast'
import AppNavigator from './src/screens/BottomTab'
import colors from './src/consts/colors'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    'Inter-ExtraBold': require('./assets/fonts/static/Inter-ExtraBold.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <AppNavigator />
            <Toast config={toastConfig} />
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
