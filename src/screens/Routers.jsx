import Login from './Login'
import Home from './Home'
import Tasks from './Tasks'
import Money from './Money'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Shopping from './Shopping'
import Exit from './Exit'
import colors from '../consts/colors'

export default function Routers() {
  const stack = createStackNavigator()

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
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
  )
}
