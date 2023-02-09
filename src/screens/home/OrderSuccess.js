import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CustomInput from '../../components/CustomForm/CustomInput'
import CustomButton from "../../components/CustomButton/CustomButton";
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'

const OrderSuccess = ({navigation}) => {
  return (
    <AppWrapper>
        <View style={{padding: 30, paddingTop: 50}} >
            <Text style={{color: colors.BorderShade, fontSize: 30, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 40}} >
                Your order has been added successfully
            </Text>
            <Text style={{color: colors.BorderShade, fontSize: 20, color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >
                Shippers will review your order. You will get notification once it got reviewed from them
            </Text>
            <Text style={{color: colors.BorderShade, fontSize: 20, color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >
                You can make payment after that.
            </Text>

            <View style={{paddingTop: 100}}>
                <CustomButton title={'My Orders'} onPress={()=>navigation.navigate(SCREEN_KEYS.MYORDERS)} />
            </View>
        </View>
    </AppWrapper>
  )
}

export default OrderSuccess

const styles = StyleSheet.create({})