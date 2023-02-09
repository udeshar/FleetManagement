import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 5,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });