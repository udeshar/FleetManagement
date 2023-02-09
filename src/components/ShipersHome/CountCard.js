import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../themes/Colors'

const CountCard = ({title,count, onClick}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick} >
      <Text style={styles.text} >{title}</Text>
      <Text style={styles.text}>{count}</Text>
    </TouchableOpacity>
  )
}

export default CountCard

const styles = StyleSheet.create({
    container:{
        backgroundColor : colors.darkgrey,
        padding : 25,
        borderRadius : 15,
        elevation : 5,
        flex : 1,
        marginHorizontal : 5
    },
    text : {
        color : colors.white,
        fontWeight : "bold"
    }
})