import SCREEN_KEYS from "../../themes/SCREEN_KEYS";
import React, {useEffect, useState} from "react";
import {Text, SafeAreaView, StatusBar, useColorScheme, ScrollView, View, TouchableOpacity} from 'react-native'
import colors from "../../themes/Colors";
import CustomInput from "../../components/CustomForm/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import AppWrapper from "../../components/AppWrapper/AppWrapper";
import { DropdownInput } from "../../components/CustomForm/Dropdown";

const SignUp = ({navigation}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConpassword] = useState('');
    const [role, setRole] = useState('');

    const backgroundStyle = {
      backgroundColor: "#fff",
      height: '100%'
    };
    return (
        <AppWrapper>
            <View style={{padding: 30, marginTop: 20}} >
                <Text style={{fontSize: 40, fontWeight: "bold", color: colors.DarkTextColorNoOpacity}} >SignUp</Text>
                <View style={{marginVertical: 20, marginTop: 30}}>
                    <CustomInput title={'Name'} placeholder={'Enter your name'} value={name} setValue={(value)=>{
                        setName(value)
                    }} />
                    <CustomInput title={'Email'} placeholder={'Enter your Email'} value={email} setValue={(value)=>{
                        setEmail(value)
                    }} />
                    <DropdownInput label={'Role'} value={role} setValue={setRole} options={["Driver","Aggency","Truck Company"]} />
                    <CustomInput title={'Password'} placeholder={'Enter your password'} value={password} setValue={(value)=>{
                        setPassword(value)
                    }} />
                    <CustomInput title={'Confirm Password'} placeholder={'Enter your password'} value={conpassword} setValue={(value)=>{
                        setConpassword(value)
                    }} />
                    <TouchableOpacity  onPress={()=>navigation.navigate(SCREEN_KEYS.SIGNIN)}>
                        <Text style={{color: colors.appLightGreen, marginVertical: 20}}>Already have an acoount ? Signin</Text>
                    </TouchableOpacity>
                    <View style={{paddingTop: 40}}>
                        <CustomButton title={'SignUp'}/>
                    </View>
                </View>
            </View>
        </AppWrapper>
    );
};
  

export default SignUp;