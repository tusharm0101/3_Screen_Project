import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, EvilIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

import Gender from "../components/Gender";
import DOB from "../components/DOB";

const DetailScreen = props => {
    return(
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={50}
      style={styles.Container}
    >
        <View style={styles.screen}>
            <ScrollView>
            <Image source={require('../assets/Vector-Section.png')} style={styles.Image} />
            <View style={styles.Center}><Text style={styles.bold}>Let's complete your profile</Text></View>
            <View style={styles.Center}><Text style={styles.Text}>It will help us to know more about you!</Text></View>
           
           <View>
            <View style={styles.Row}>
                <MaterialCommunityIcons name="gender-male-female-variant" size={24} color="gray" />
                <Gender  />
            </View>
            </View>
            <View style={styles.Row}>
                <EvilIcons name="calendar" size={24} color="gray" />
                <DOB />
            </View>
            <View style={{...styles.Row,justifyContent:'space-evenly'}}>
                <MaterialCommunityIcons name="weight-kilogram" size={24} color="gray" />
                <TextInput 
                    placeholder="Your Weight" 
                    keyboardType="decimal-pad"  
                    maxLength={3}  
                />
                <Text style={styles.End}>KG</Text>
            </View>
            <View style={{...styles.Row,justifyContent:'space-evenly'}}>
                <MaterialIcons name="height" size={24} color="gray" />
                <TextInput 
                    placeholder="Your Height" 
                    keyboardType="decimal-pad"  
                    maxLength={3}   
                />
                <Text style={styles.End}>CM</Text>
            </View>
            <TouchableOpacity style={styles.Button}>
                <Button title="Next" color={"white"} onPress={() => {}} />
                <AntDesign name="right" size={24} color="white" />
            </TouchableOpacity>
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
        backgroundColor: 'white'
    },
    Image: {
        width: '100%',
        height: 400
    },
    Center: {
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    Text: {
        fontSize: 12,
        fontWeight: '300',
        marginBottom: 30,
    },
    Row: {
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 20,
        backgroundColor: '#f0f8ff',
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    End: {
        marginLeft: 200,
        backgroundColor: '#dda0dd',
        color: 'white',
        fontSize: 12,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden',
        
    },
    Button: {
        backgroundColor: '#6495ed',
        padding: 10,
        marginHorizontal: 30,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
});
 
export default DetailScreen;