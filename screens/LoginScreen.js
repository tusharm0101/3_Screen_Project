import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.text}><Text style={styles.texta}>Hey there,</Text></View>
            <View style={styles.textb}><Text style={styles.textc}>Welcome Back</Text></View>
            <View style={styles.login}>
                <AntDesign name="mail" size={18} color="gray" />
                <TextInput style={styles.TextInput} placeholder="Email" />
            </View>
            <View style={styles.login}>
                <AntDesign name="lock" size={18} color="gray" />
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="password" 

                />
            </View>
            <View style={styles.center}>
                <Text style={styles.forget}>Forget your password?</Text>
            </View>
            <View style={styles.Button}>
                <AntDesign name="login" size={18} color="white" />
                <Button title="Login" color={"white"} onPress={() => {}} />
            </View>
            <View style={styles.line}>
                <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
                <View>
                    <Text style={{ width: 40, textAlign:'center'}}>Or</Text>
                </View>
                <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
            </View>
            <View style={styles.logo}>
                <AntDesign style={styles.logoContainer} name="google" size={24} color='black' />
                <FontAwesome style={styles.logoContainer} name="facebook" size={24} color="blue" />
            </View>
            <View style={styles.end}>
                <Text>Don't have an account yet?</Text>
                <TouchableOpacity onPress={() => {
                        props.navigation.navigate({ routeName: 'Register'});
                    }} 
                ><Text>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'      
    },
    text: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center'
    },
    texta: {
        fontSize: 15,
    },
    textb: {
        marginBottom: 20,
        alignItems: 'center'
    },
    textc: {
        fontSize: 20,
        fontWeight:"bold",
    },
    login: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 20,
        backgroundColor: '#f0f8ff',
        marginBottom: 15,
        borderRadius: 10  
    },
    TextInput: {
        paddingLeft: 15
    },
    center: {
        alignItems: 'center',
    },
    forget: {
        textDecorationLine: "underline",
        color: 'gray'
    },
    Button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 300,
        backgroundColor: '#6495ed',
        padding: 10,
        marginHorizontal: 30,
        borderRadius: 30,
    },
    line: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 30
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    logoContainer: {
        borderColor: 'gray',
        borderWidth: 0.5,
        padding: 15,
        margin: 10,
        borderRadius: 10
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15 
    },
});

export default LoginScreen;