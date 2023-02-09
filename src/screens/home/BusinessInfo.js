import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CustomInput from '../../components/CustomForm/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'

const BusinessInfo = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [goods, setGoods] = useState('');
    const [goodsq, setGoodsq] = useState('');
  return (
    <AppWrapper>
        <View style={{padding: 30}} >
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >We need some info about your business</Text>
            
            <CustomInput title={'Business Name'} placeholder={'Enter your business name'} value={name} setValue={(value)=>{
                setName(value)
            }} />
            <CustomInput title={'Email'} placeholder={'Enter your Email'} value={email} setValue={(value)=>{
                setEmail(value)
            }} />
            <CustomInput title={'Phone'} placeholder={'Enter your Phone'} value={phone} setValue={(value)=>{
                setPhone(value)
            }} />
            <CustomInput title={'Goods'} placeholder={'What goods you want to carry ?'} value={goods} setValue={(value)=>{
                setGoods(value)
            }} />
            <CustomInput title={'Quantity'} placeholder={'Enter the quantity of goods in kg'} value={goodsq} setValue={(value)=>{
                setGoodsq(value)
            }} />

            <View style={{paddingTop: 60}}>
                <CustomButton title={'Proceed'} onPress={()=>navigation.navigate(SCREEN_KEYS.ORDERSUCCESS)} />
            </View>
        
        </View>
    </AppWrapper>
  )
}

export default BusinessInfo

const styles = StyleSheet.create({})