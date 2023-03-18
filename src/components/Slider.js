import React, {useState} from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import {Text, View} from "react-native";
import {globalStyles} from "../constants/theme";


const CustomSlider = ({Label, OnChange, TagChange}) => {

    const [value, setValue] = useState(0);

    return (
        <View style={globalStyles.slider}>
            <Text style={globalStyles.sliderText}>
                {Label}: {value} minutos
            </Text>
            <Slider
                step={5}
                minimumValue={0}
                maximumValue={180}
                value={value}
                onValueChange={ (duration) =>{
                    setValue(duration);
                    OnChange(duration, TagChange);
                }}/>
        </View>
    );
};

export default CustomSlider;