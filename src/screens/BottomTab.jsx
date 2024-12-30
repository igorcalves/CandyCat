import Tasks from './Tasks'
import Money from './Money'
import Shopping from './Shopping'
import Exit from './Exit'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import colors from '../consts/colors'
import { Image } from 'react-native'

export default function BottomTab() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.strongBlue,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { backgroundColor: colors.background },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/Home.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/Tasks.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/Money.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/icons/Shopping.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Exit}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/pepeta.png')}
              style={{ width: size, height: size, borderRadius: 50 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
