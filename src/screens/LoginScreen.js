import React from 'react';
import {Image, KeyboardAvoidingView, Platform, Text, TextInput, View} from "react-native";
import {useForm} from "../hooks/useForm";
import {globalStyles} from "../constants/theme";
import CustomButton from "../components/CustomButton";
import CustomDropdown from "../components/Dropdown";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const profiles = [
    {label: 'Docente', value: 1},
    {label: 'Administrativo', value: 2},
    {label: 'Auxiliar', value: 3},
    {label: 'Ponente', value: 4},
    {label: 'Tallerista', value: 5},
];

const LoginScreen = () => {

    const navigation = useNavigation();

    const {onChange, onReset, statecurrent} = useForm({
        userName: '',
        userPass: '',
        userProfile: 0
    })
    const {userName, userPass, userProfile} = statecurrent;

    const SignIn = () => {
        navigation.navigate('HomeScreen');
    };

    const isValidFields = () => {
        if (
            userName === '' ||
            userPass === '' ||
            userProfile === ''
        )
            return false;
        return true;
    };


    return (
        <View style={{ marginTop:  90, marginHorizontal: 20 }}>
            <View style={globalStyles.loginContainer}>
                <Ionicons name='person-circle-outline' size={120} color={'black'}/>
                <Text style={globalStyles.loginHeader}> Login </Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View>
                    <TextInput
                        style={{...globalStyles.input, color: 'black'}}
                        onChangeText={(value) => {onChange(value, 'userName')}}
                        placeholder='Ingresa tu usuario'
                        value={userName}
                        autoCorrect={false}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={{...globalStyles.input, color: 'black'}}
                        onChangeText={(value) => {onChange(value, 'userPass')}}
                        placeholder='Ingresa tu contaseña'
                        value={userPass}
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />

                    <CustomDropdown
                        Placeholder='Selecciona tu perfil'
                        Data={profiles}
                        OnChange={onChange}
                        TagChange='userProfile'
                        />

                    <CustomButton
                        enable={!isValidFields()}
                        handleOnPress={SignIn}
                        text='Ingresar'/>
                </View>
            </KeyboardAvoidingView>
            <View style={{
                marginTop: 20,
                flexDirection: 'column',
                borderTopWidth: 1,
                maxWidth: '100%',
                height: 200,
                alignItems: 'center'}}>
                <View style={globalStyles.loginContainerLogoTec}>
                    <Image
                        source={require('../../assets/logo-tec.png')}
                        style={globalStyles.loginLogoTec}
                    />
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;