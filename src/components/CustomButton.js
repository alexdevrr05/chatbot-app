import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { globalStyles } from "../constants/theme";

const CustomButtom = (props) => {

    return (
        <TouchableOpacity style={globalStyles.button}>
            <Text style={globalStyles.buttonText}> 
                {props.text}
            </Text>        
        </TouchableOpacity>
    );
}

export default CustomButtom;