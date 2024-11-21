import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import FrontScreen from '../Screen/FrontScreen';
import Dashbord from '../Screen/Dashbord';


const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>      
        <Stack.Navigator initialRouteName='Mainscreen'>
          <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown:false}}/> 
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name='Dashbord' component={Dashbord} options={{headerShown:false}}/>
          <Stack.Screen name='Mainscreen' component={FrontScreen} options={{headerShown:false}}/>
       </Stack.Navigator>
       </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});


      
  