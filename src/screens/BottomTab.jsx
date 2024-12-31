import Tasks from './Tasks'
import Money from './Money'
import Shopping from './Shopping'
import Exit from './Exit'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import colors from '../consts/colors'
import { Image, Pressable } from 'react-native'

export default function BottomTab() {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: { backgroundColor: colors.secondary },
        tabBarItemStyle: { paddingVertical: 5 },
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
          tabBarLabel: () => null,
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: colors.lightGray }}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.style,
              ]}
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
          tabBarLabel: () => null,
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: colors.lightGray }}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.style,
              ]}
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
          tabBarLabel: () => null,
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: colors.lightGray }}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.style,
              ]}
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
          tabBarLabel: () => null,
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: colors.lightGray }}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.style,
              ]}
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
              style={{
                width: size,
                height: size,
                borderRadius: 50,
              }}
            />
          ),
          tabBarLabel: () => null,
          tabBarButton: (props) => (
            <Pressable
              {...props}
              android_ripple={{ color: colors.lightGray }}
              style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1 },
                props.style,
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
