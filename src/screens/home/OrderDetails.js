import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CustomButton from '../../components/CustomButton/CustomButton'
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'

const OrderDetails = ({navigation, route}) => {
    const {item, isShipper} = route.params;
  return (
    <AppWrapper>
        <View style={{padding: 30}} >
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Order Details</Text>
            
            <View>

                <Text style={[styles.text,{fontSize : 22, fontWeight : 'bold', color : colors.accent, marginBottom : 8}]}>{item.name}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Pickup location : {item.from}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Destination location : {item.to}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Payment Status : {item.status}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Pickup Date : {item.pickupDate}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Drop Date : {item.dropDate}</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Price : {item.price} /-</Text>
                <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 8}]}>Delivered : {item.delivered ? "Yes" : "No"}</Text>
            </View>

            <View style={{paddingTop: 100}}>
                {
                    isShipper ? 
                    <View style={{display : 'flex',flexDirection : 'row', flex : 1, justifyContent : 'space-between'}} >
                        <CustomButton title={"Assign to Aggency"} onPress={()=>{}} />
                        <CustomButton title={"Decline"} color  onPress={()=>{}} />
                    </View>
                    :
                    <CustomButton title={ item.status == 'Unpaid' ? 'Proceed To Payment' : "See/Download Invoice"} onPress={()=>{
                        item.status == 'Unpaid' ? navigation.navigate(SCREEN_KEYS.PAYMENT) : navigation.goBack()
                    }} />
                }
            </View>
        
        </View>
    </AppWrapper>
  )
}

export default OrderDetails

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