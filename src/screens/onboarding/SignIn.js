import SCREEN_KEYS from "../../themes/SCREEN_KEYS";
import React, {useEffect, useState} from "react";
import {Text, SafeAreaView, StatusBar, useColorScheme, ScrollView, View, TouchableOpacity} from 'react-native'
import colors from "../../themes/Colors";
import CustomInput from "../../components/CustomForm/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import AppWrapper from "../../components/AppWrapper/AppWrapper";

const SignIn = ({navigation}) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const backgroundStyle = {
      backgroundColor: "#fff",
      height: '100%'
    };

    const login = () => {
        if(email == "shipers" && password == "shipers"){
            navigation.navigate(SCREEN_KEYS.SHIPERSHOME);
        }
    }

    return (
        <AppWrapper>
            <View style={{padding: 30, marginTop: 70}} >
                <Text style={{fontSize: 40, fontWeight: "bold", color: colors.DarkTextColorNoOpacity}} >Signin</Text>
                <View style={{marginVertical: 20, marginTop: 60}}>
                    <CustomInput title={'Email'} placeholder={'Enter your email'} value={email} setValue={(value)=>{
                        setEmail(value)
                    }} />
                    <CustomInput title={'Password'} placeholder={'Enter your password'} value={password} setValue={(value)=>{
                        setPassword(value)
                    }} />
                    <TouchableOpacity  onPress={()=>navigation.navigate(SCREEN_KEYS.SIGNUP)}>
                        <Text style={{color: colors.appLightGreen, marginVertical: 20}}>Dont have an acoount ? Register</Text>
                    </TouchableOpacity>
                    <View style={{paddingTop: 40}}>
                        <CustomButton title={'Signin'} onPress={login} />
                    </View>
                </View>
            </View>
        </AppWrapper>
    );
};
  

export default SignIn;