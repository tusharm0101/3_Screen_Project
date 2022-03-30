import React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const EndRegister = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.Center}><Text style={{ fontSize: 15}}>Hey there,</Text></View>
            <View style={styles.Center}><Text style={styles.Bold} >Create an Account</Text></View>
            <View style={styles.Container}>
            <AntDesign name="user" size={18} color="gray" />
                <TextInput style={styles.TextInput} placeholder="First Name" />
            </View>
            <View style={styles.Container}>
            <AntDesign name="user" size={18} color="gray" />
                <TextInput style={styles.TextInput} placeholder="Last Name" />
            </View>
            <View style={styles.Container}>
                <AntDesign name="mail" size={18} color="gray" />
                <TextInput style={styles.TextInput} placeholder="Email" />
            </View>
            <View style={styles.Container}>
                <AntDesign name="lock" size={18} color="gray" />
                <TextInput style={styles.TextInput} placeholder="password" />
            </View>
            <View style={styles.Button}>
                <Button  
                    title="Register" 
                    color={"white"} 
                    onPress={() => {}}
                />
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
                <Text style={{ fontWeight: '300', fontSize: 15}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => {
                        props.navigation.navigate({ routeName: 'Login'});
                    }} 
                ><Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white',      
    },
    Center: {       
        marginBottom: 10,
        alignItems: 'center'
    },
    Bold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Container: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 20,
        backgroundColor: '#f0f8ff',
        marginBottom: 15,
        borderRadius: 10,  
    },
    TextInput: {
        paddingLeft: 15
    },
    Button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 200,
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
        marginTop: 20,
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
        marginTop: 15
    },
});

export default EndRegister;