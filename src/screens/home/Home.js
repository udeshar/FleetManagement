import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CustomInput from '../../components/CustomForm/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'
import Menu from '../../assets/icons/image.png'

const Home = ({navigation}) => {
    const [ pickup, setPickup ] = useState('');
    const [ destination, setDestination ] = useState('');
  return (
    <AppWrapper>
        <View style={{padding: 30}} >
            <TouchableOpacity onPress={()=> navigation.openDrawer()} >
                <Image source={Menu} style={{width: 30, height : 30, marginBottom : 75, marginTop : 0}} />
            </TouchableOpacity>
            <Text style={{fontSize: 40, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 35}} >Welcome to the Fleet Management App</Text>
            
            <CustomInput title={'Pickup location'} placeholder={'Enter your pickup location'} value={pickup} setValue={(value)=>{
                setPickup(value)
            }} />

            <CustomInput title={'Destination location'} placeholder={'Enter your Destination location'} value={destination} setValue={(value)=>{
                setDestination(value)
            }} />

            <View style={{paddingTop: 60}}>
                <CustomButton title={'Proceed'} onPress={()=>navigation.navigate(SCREEN_KEYS.BUSINESSINFO)}/>
            </View>

            <TouchableOpacity  onPress={()=>navigation.navigate(SCREEN_KEYS.ONBOARDINGSTACK)}>
                <Text style={{color: colors.appLightGreen, marginVertical: 30, textAlign: 'center'}}>Login / Signup for other user</Text>
            </TouchableOpacity>
        
        </View>
    </AppWrapper>
  )
}

export default Home

const styles = StyleSheet.create({})