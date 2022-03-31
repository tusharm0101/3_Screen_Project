import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';


const LoginScreen = props => {
    return (
        
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.Container}
    >
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.text}><Text style={styles.texta}>Hey there,</Text></View>
            <View style={styles.textb}><Text style={styles.textc}>Welcome Back</Text></View>
            <View style={styles.login}>
                <AntDesign name="mail" size={18} color="gray" />
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    required
                    email 
                />        
            </View>     
            <View style={styles.login}>
                <AntDesign name="lock" size={18} color="gray" />
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="password" 
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    required
                    minLength={5}
                /> 
                <Entypo style={{marginLeft: 220}} name="eye-with-line" size={18} color="gray" />
            </View>    
            <TouchableOpacity style={styles.center}>
                <Text style={styles.forget}>Forget your password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => {
                props.navigation.navigate('Detail');
                }}
            >
                <AntDesign name="login" size={18} color="white" />
                <Button title="Login" color={"white"} onPress={() => {
                    props.navigation.navigate('Detail');
                }} />
            </TouchableOpacity>
            <View style={styles.line}>
                <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
                <View>
                    <Text style={{ width: 40, textAlign:'center'}}>Or</Text>
                </View>
                <View style={{ flex: 1, height: 0.5, backgroundColor: 'gray' }} />
            </View>
            <View style={styles.logo}><TouchableOpacity >
                <Image source={require('../assets/download.png')} style={styles.Image} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/facebook.png')} style={styles.Image} />
            </TouchableOpacity></View>
            <View style={styles.end}>
                <Text>Don't have an account yet?</Text>
                <TouchableOpacity onPress={() => {
                         props.navigation.navigate('SignUp');
                    }} 
                ><Text style={{marginLeft:5, color:'#dda0dd'}}>Register</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        
        </KeyboardAvoidingView>
       
    );
    
};

const styles = StyleSheet.create({
    Container: {
        flex: 1     
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 40     
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
    Image: {
        height: 50,
        width: 50,
        borderColor: 'gray',
        borderWidth: 0.4,
        borderRadius: 10,
        marginHorizontal: 20
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