import React, {useState} from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import {Text, View} from "react-native";
import {globalStyles} from "../constants/theme";


const CustomSlider = ({Label, OnChange, TagChange, minimumValue, maximumValue}) => {

    const [value, setValue] = useState(0);

    return (
        <View style={globalStyles.input}>
            <Text> {Label}: {value}  </Text>
            <Slider
                step={5}
                minimumValue={minimumValue}
                maximumValue={maximumValue}
                value={value}
                onValueChange={ (duration, talCupo) =>{
                    setValue(duration, talCupo);
                    OnChange(duration, talCupo, TagChange);
                }}/>
        </View>
    );
};

export default CustomSlider;