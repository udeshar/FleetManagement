import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CustomButton from '../../components/CustomButton/CustomButton'

const Payment = ({navigation}) => {
  return (
    <AppWrapper>
        <View style={{padding: 30}} >
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Payment</Text>
            
            <View>

                <Text style={[styles.text,{fontSize : 22, fontWeight : 'bold', color : colors.accent, marginBottom : 20}]}>Select Payment Method</Text>
                <TouchableOpacity><Text style={[styles.text,{fontWeight : 'bold',marginBottom : 12}]}>UPI</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[styles.text,{fontWeight : 'bold',marginBottom : 12}]}>Debit / Creadit card</Text></TouchableOpacity>
                <TouchableOpacity><Text style={[styles.text,{fontWeight : 'bold',marginBottom : 12}]}>Paypal</Text></TouchableOpacity>
                
            </View>

            {/* <View style={{paddingTop: 100}}>
                <CustomButton title={ item.status == 'Unpaid' ? 'Proceed To Payment' : "See/Download Invoice"} onPress={()=>{
                    item.status == 'Unpaid' ? navigation.navigate(SCREEN_KEYS.ORDERSUCCESS) : navigation.goBack()
                }} />
            </View> */}
        
        </View>
    </AppWrapper>
  )
}

export default Payment

const styles = StyleSheet.create({
    text : {
        color : colors.black,
        fontSize : 16
    },
    wrapper : {
        borderRadius : 12,
        padding : 20,
        marginBottom : 15
    }
})