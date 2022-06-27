import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'

const Tab = createBottomTabNavigator();



const BottomTabNavigator= ()=>{
  return (

       <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  
  )
  }
export default BottomTabNavigator

