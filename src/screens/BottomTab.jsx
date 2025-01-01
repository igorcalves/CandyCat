import React from 'react'
import { Image, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from './Tasks'
import Money from './Money'
import Shopping from './Shopping'
import Exit from './Exit'
import Home from './Home'
import Login from './Login' // Importe a tela de login
import colors from '../consts/colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function BottomTabNavigator() {
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
        name="HomeTab"
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
        name="TasksTab"
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
        name="MoneyTab"
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
        name="ShoppingTab"
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
        name="ProfileTab"
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

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
