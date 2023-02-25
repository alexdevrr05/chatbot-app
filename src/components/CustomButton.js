import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { globalStyles } from "../constants/theme";

const CustomButtom = (props) => {

    return (
        <TouchableOpacity 
            disabled={props.enable}
            style={
                props.enable ? globalStyles.buttonDisable : globalStyles.buttonEnable
            }
            >
            <Text style={globalStyles.buttonText}> 
                {props.text}
            </Text>        

            { console.log("Mis props")}
        </TouchableOpacity>
    );
}

export default CustomButtom;