import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from '../screens/RegisterScreen';
import EndRegisterScreen from "../screens/EndRegisterScreen";

const LoginNavigator = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    EndRegister: EndRegisterScreen,
});

export default createAppContainer(LoginNavigator);
