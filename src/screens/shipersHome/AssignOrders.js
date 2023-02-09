import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CountCard from '../../components/ShipersHome/CountCard'
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'
import Header from '../../components/header/Header'
import AggencyList from '../../components/AggencyList/AggencyList'

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

const AssignOrders = ({navigation}) => {
  return (
    <AppWrapper>
        <Header title={"All Orders"} navigation={navigation} />
        <View style={{padding: 30, paddingTop : 0}} >
            <Text></Text>

            <FlatList 
                data={data}
                keyExtractor={(id)=>id}
                renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate(SCREEN_KEYS.ORDERDETAILS,{item : item, isShipper : true})} >
                        <View style={[styles.wrapper,{backgroundColor : item.delivered == true ? colors.input_background : colors.input_err_background}]} >
                            <Text style={[styles.text,{fontSize : 22, fontWeight : 'bold', color : colors.accent, marginBottom : 3}]} >{item.name}</Text>
                            <Text style={[styles.text,{fontWeight : 'bold',marginBottom : 3}]} >{`From: ${item.from}  to   ${item.to}`}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            {/* <Text style={{fontSize: 20, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Assign Orders</Text> */}
            {/* <AggencyList /> */}
        </View>
    </AppWrapper>
  )
}

export default AssignOrders

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