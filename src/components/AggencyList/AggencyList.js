import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import AppWrapper from '../../components/AppWrapper/AppWrapper'
import colors from '../../themes/Colors'
import CountCard from '../../components/ShipersHome/CountCard'
import SCREEN_KEYS from '../../themes/SCREEN_KEYS'
import Header from '../../components/header/Header'

const data = [
    {
        name : "name",
        location : "mapusa"
    },
    {
        name : "udesh",
        location : "mapusa"
    },
    {
        name : "ejdbc edjc",
        location : "mapusa"
    },
    {
        name : "name dhd",
        location : "mapusa"
    },
]

const AggencyList = ({navigation}) => {

  return (
    // <AppWrapper>
        // <Text style={styles.text}>Hello</Text>
        <View >
            {/* <Text style={{fontSize: 20, fontWeight: "bold", color: colors.DarkTextColorNoOpacity, marginBottom : 20}} >Shipers Dashboard</Text> */}
            <FlatList 
                data={data}
                renderItem={({item,index})=>(
                    <View style={{backgroundColor: colors.input_background, borderRadius : 12, flex : 1, padding : 15, marginVertical : 5}} >
                        <Text style={[styles.text,{fontWeight : '800', fontSize : 18}]} >{item.name}</Text>
                        <Text style={styles.text}>{item.location}</Text>
                    </View>
                )}
            />
        </View>
    // </AppWrapper>
  )
}

export default AggencyList

const styles = StyleSheet.create({
    text : {
        color : colors.black
    }
})