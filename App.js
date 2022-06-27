import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import DrawerNavigator from './navigation/DrawerNavigator'

import {NavigationContainer} from '@react-navigation/native'

export default class App extends React.Component{
  render(){
  return (
<NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  )
  }
}
