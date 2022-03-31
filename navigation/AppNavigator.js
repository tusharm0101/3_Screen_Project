import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import SignUpScreen from '../screens/SignUpSrcreen';

const AppStack = createStackNavigator();
const AppNavigator = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator headerMode='none'>
                <AppStack.Screen name="Login" component={LoginScreen}/>
                <AppStack.Screen name="Detail" component={DetailScreen}/>
                <AppStack.Screen name="SignUp" component={SignUpScreen}/>               
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;