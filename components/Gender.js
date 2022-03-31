import React, {useState} from "react";
import { View } from "react-native";
import { RadioButton} from 'react-native-paper';

const Gender = () => {
    const [checked, setChecked] = useState('Male');

    return (
        <View>
            <RadioButton 
                placeholder='choose Gender'
                value={'Male'}
                color="black"
                status={ checked === 'Male' ? 'checked' : 'unchecked'}
                onPress={(value) => {setChecked(value)}}
            />
            <RadioButton 
                value={'Female'}
                status={ checked === 'Female' ? 'checked' : 'unchecked'}
                onPress={(value) => {setChecked(value)}}
            />
        </View>
    );
};

export default Gender;