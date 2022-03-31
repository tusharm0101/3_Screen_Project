import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from '@expo/vector-icons';

const Gender = () => {

    const gender = ['Male', 'Female']
    return (
        <TouchableOpacity style={styles.Gender} >
        <SelectDropdown 
            data={gender}
            onSelect={() => {(gender)}}
        />
        <AntDesign name="down" size={24} color="black"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Gender: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Gender;