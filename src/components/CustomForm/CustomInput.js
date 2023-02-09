import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import colors from '../../themes/Colors';

export const CustomInput = ({title, placeholder, value, setValue}) => {
    const [text, onChangeText] = React.useState('');
    return (
      <View style={{marginVertical: 10}}>
        <Text style={{color: colors.DarkTextColor, paddingLeft : 10, paddingBottom: 5, fontWeight: "bold", fontSize: 16}} >{title}</Text>
        <TextInput
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholderTextColor={colors.dimgray}
            placeholder={placeholder}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 60,
      borderWidth: 0,
      backgroundColor: colors.input_background,
      color: colors.black,
      padding: 20,
      borderRadius: 10
    },
  });

export default CustomInput