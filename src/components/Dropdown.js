import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { globalStyles } from "../constants/theme";

const CustomDropdown = ({Placeholder, Data, OnChange, TagChange}) => {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View>
            <Dropdown
                style={[globalStyles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={globalStyles.dropdownPlaceholderStyle}
                data={Data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? Placeholder : '...'}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={()=> setIsFocus(false)}
                onChange={ item => {
                    setValue(item.value);
                    setIsFocus(false);
                    OnChange(item.value, TagChange);
                }}/>
        </View>
    );
}

export default CustomDropdown;