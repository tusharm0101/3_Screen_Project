import React, {useState} from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, TextInput, Button, Image, TouchableOpacity} from "react-native";
import { AntDesign,  Ionicons, Entypo } from '@expo/vector-icons';


const SignUpScreen = props => {
    const [tnc , setTnc] = useState(false);
    const tncHandler = () => {
        setTnc(state => !state);
    };
    return (
        <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.key}
    >
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.Center}><Text style={{ fontSize: 15}}>Hey there,</Text></View>
            <View style={styles.Center}><Text style={styles.Bold} >Create an Account</Text></View>
            <View style={styles.Container}>
            <AntDesign name="user" size={18} color="gray" />
                <TextInput style={styles.TextInput} 
                    placeholder="First Name"
                    keyboardType="default"
                    autoCapitalize="none"
                    required 
                />
            </View>
            <View style={styles.Container}>
            <AntDesign name="user" size={18} color="gray" />
                <TextInput style={styles.TextInput} 
                    placeholder="Last Name"
                    keyboardType="default"
                    autoCapitalize="none"
                    required 
                />
            </View>
            <View style={styles.Container}>
                <AntDesign name="mail" size={18} color="gray" />
                <TextInput style={styles.TextInput} 
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    required
                    email
                />
            </View>
            <View style={styles.Container}>
                <AntDesign name="lock" size={18} color="gray" />
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="password" 
                    keyboardType="default"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    required
                    minLength={5} />
                <Entypo style={{marginLeft: 220}} name="eye-with-line" size={18} color="gray" />
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginRight: 100, marginLeft: 15}} >
                    <TouchableOpacity onPress={tncHandler} >
                        { tnc ? 
                            <Ionicons name="checkbox-outline" size={18} color="gray" /> : 
                            <Ionicons name='square-outline' color='gray' size={20}/>}
                    </TouchableOpacity>
                     <Text style={{color: '#797D7f'}}>
                         By continuing you accept our <Text style={{textDecorationLine: 'underline'}}>Privacy Policy </Text>and <Text style={{textDecorationLine: 'underline'}}>Term of Use</Text>
                     </Text>
                </View>
            <TouchableOpacity 
                style={styles.Button}
                onPress={() => {
                    props.navigation.navigate('Detail');
                }}
            >
                <Button  
                    title="Register" 
                    color={"white"} 
                    onPress={() => {
                        props.navigation.navigate('Detail');
                    }}
                />
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
                <Text style={{ fontWeight: '300', fontSize: 15}}>Already have an account?</Text>
                <TouchableOpacity onPress={() => {
                         props.navigation.navigate('Login');
                    }} 
                ><Text style={{marginLeft:5, color:'#dda0dd'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    key: {
        flex: 1
    },
    screen: {
        flex: 1,
        backgroundColor: 'white',  
        paddingVertical: 40,
        justifyContent: 'center',     
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
    end: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
});

export default SignUpScreen;