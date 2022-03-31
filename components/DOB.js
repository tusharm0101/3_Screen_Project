import React, {useState} from "react";
import { View } from "react-native";

import DatePicker from "react-native-datepicker";

const DOB = () => {
    const [date, setDate] = useState('');

    return (
        <View>
            <DatePicker  
                format="DD-MM-YYYY"
                mode="date"
                placeholder="Date of Birth"
                date={date}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                onDateChange={(date) => {setDate(date);
                }}
                customStyles={{
                    dateIcon: {display: 'none'}
                }}
            />
        </View>
    );
};

export default DOB;