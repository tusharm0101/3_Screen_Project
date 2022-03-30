import React from "react";
import { View, Text, TextInput, StyleSheet, Button, Image } from "react-native";
import { MaterialCommunityIcons, EvilIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';

const Register = props => {
    return(
        <View style={styles.screen}>
            <Image source={require('../assets/Vector-Section.png')} style={styles.Image} />
            <View style={styles.Center}><Text style={styles.bold}>Let's complete your profile</Text></View>
            <View style={styles.Center}><Text style={styles.Text}>It will help us to know more about you!</Text></View>
            <View style={styles.Row}>
                <MaterialCommunityIcons name="gender-male-female-variant" size={24} color="gray" />
                <TextInput placeholder="Choose Gender"/>
            </View>
            <View style={styles.Row}>
                <EvilIcons name="calendar" size={24} color="gray" />
                <TextInput placeholder="Date of Birth" />
            </View>
            <View style={styles.Row}>
                <MaterialCommunityIcons name="weight-kilogram" size={24} color="gray" />
                <TextInput placeholder="Your Weight" />
                <Text style={styles.End}>KG</Text>
            </View>
            <View style={styles.Row}>
                <MaterialIcons name="height" size={24} color="gray" />
                <TextInput placeholder="Your Height" />
                <Text style={styles.End}>CM</Text>
            </View>
            <View style={styles.Button}>
                <Button title="Next" color={"white"} onPress={() => {
                    props.navigation.navigate({ routeName: 'EndRegister'});
                }} />
                <AntDesign name="right" size={24} color="white" />
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
    Image: {
        height: '100%',
        width: '100%',
        flex: 1,
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
        alignItems: 'center'
    },
    End: {
        marginLeft: 200,
        backgroundColor: '#dda0dd',
        color: 'white',

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
 
export default Register;