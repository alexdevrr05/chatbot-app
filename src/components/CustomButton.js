import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { globalStyles } from "../constants/theme";

const CustomButton = (props) => {
    return (
        <TouchableOpacity 
            disabled={props.enable}
            onPress={props.handleOnPress}
            style={
                props.enable ? globalStyles.buttonDisable : globalStyles.buttonEnable
            }
            >
            <Text style={globalStyles.buttonText}> 
                {props.text}
            </Text>        
        </TouchableOpacity>
    );
}

export default CustomButton;