import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'

const MyOrders = ({navigation}) => {

    const data = [
        {
            name : "Tyres",
            from : "Delhi",
            to : "Mumbai",
            status : "Paid",
            delivered : true,
            pickupDate : '12-11-2023',
            dropDate : '15-11-2023',
            price : 20000
        },
        {
            name : "Basmati Rice",
            from : "Punjab",
            to : "Goa",
            status : "Unpaid",
            delivered : false,
            pickupDate : '12-11-2023',
            dropDate : '15-11-2023',
            price : 20000
        },
        {
            name : "Sugarcane",
            from : "Karnataka",
            to : "Bihar",
            status : "Paid",
            delivered : false,
            pickupDate : '12-11-2023',
            dropDate : '15-11-2023',
            price : 20000
        },
    ]

  return (
    <AppWrapper>
        <View style={{padding: 30}} >
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Your Orders</Text>
            
            <FlatList 
                data={data}
                keyExtractor={(id)=>id}
                renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_KEYS.ORDERDETAILS,{item : item})} >
                        <View style={[styles.wrapper,{backgroundColor : item.delivered == true ? colors.input_background : colors.input_err_background}]} >
                            <Text style={[styles.text,{fontSize : 22, fontWeight : 'bold', color : colors.accent, marginBottom : 3}]} >{item.name}</Text>
                            <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 3}]} >{`From: ${item.from}  to   ${item.to}`}</Text>
                            <View style={{display : 'flex', flexDirection : 'row'}} >
                                <Text style={[styles.text,{marginBottom : 3}]} >{`Status : ${item.status}`}</Text>
                                <Text style={[styles.text,{marginBottom : 3, marginLeft : 25}]} >{`Delivered : ${item.delivered == true ? 'Yes' : 'No'}`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        
        </View>
    </AppWrapper>
  )
}

export default MyOrders

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