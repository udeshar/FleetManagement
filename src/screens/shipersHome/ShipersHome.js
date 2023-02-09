import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CountCard from '../../components/ShipersHome/CountCard'
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'
import Header from '../../components/header/Header'

const ShipersHome = ({navigation}) => {
  return (
    <AppWrapper>
        <Header title={"Shipers Dashboard"} navigation={navigation} />
        <View style={{padding: 30, paddingTop : 0}} >
            <Text></Text>
            {/* <Text style={{fontSize: 20, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Shipers Dashboard</Text> */}
            
            <Text style={{color : colors.black, fontSize : 18, fontWeight : "bold", marginBottom : 10}} >Orders</Text>
            <View style={{display : "flex", flexDirection : 'row', justifyContent: "space-between"}} >
                <CountCard title={"New Orders"} count={20} onClick={()=>navigation.navigate(SCREEN_KEYS.ASSIGNORDERS)}  />
                <CountCard title={"All Orders"} count={10} />
            </View>
        
        </View>
    </AppWrapper>
  )
}

export default ShipersHome

const styles = StyleSheet.create({})