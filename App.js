import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from './src/consts/colors';
import { StyleSheet } from 'react-native';
import Routers from './src/screens/Routers';
import { Provider } from 'react-redux';
import store from './src/store';
import Toast from 'react-native-toast-message';
import toastConfig from './src/utils/toast/customToast';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Inter-ExtraBold': require('./assets/fonts/static/Inter-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Routers />
        <Toast config={toastConfig}/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});