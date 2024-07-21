import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Tasks from './screens/Tasks';
import Money from './screens/Money';
import colors from './consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Shopping from './screens/Shopping';
import Exit from './screens/Exit';

const stack = createStackNavigator();

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
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
  <stack.Navigator initialRouteName='Home'> 
    <stack.Screen 
      name="Login" 
      component={Login}
      options={{ headerShown: false }} 
    />
    <stack.Screen 
      name="Home" 
      component={Home}
      options={{ headerShown: false }} 
    />
    <stack.Screen 
      name="Tasks" 
      component={Tasks} 
      options={{ 
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    />
    <stack.Screen 
      name="Money" 
      component={Money} 
      options={{ 
        headerShown: true, 
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    />
    <stack.Screen 
      name="Shopping" 
      component={Shopping} 
      options={{ 
        headerShown: true, 
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    />
    <stack.Screen 
      name="Exit" 
      component={Exit} 
      options={{ 
        headerShown: true, 
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
        },
      }}
    />
  </stack.Navigator>
</NavigationContainer>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.background
  },
  
});
