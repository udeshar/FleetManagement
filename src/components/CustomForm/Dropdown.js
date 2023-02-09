import React, {useEffect, useState} from "react";
import {View, TouchableOpacity, TextInput, FlatList, Text,StyleSheet} from 'react-native'
import colors from "../../themes/Colors";

export const DropdownInput = ({label, onFocus, options, value, setValue, showError, errorText, customStyles, customTextboxStyle}) => {
    const [isOpen, setIsOpen] = useState(false);
    return(
      <>
        {label && <Text style={{color: colors.DarkTextColor, paddingLeft : 10, paddingBottom: 5, fontWeight: "bold", fontSize: 16}}>{label}</Text>}
        <View style={{}}>
          <View style={{  height : null}} >
            <TouchableOpacity style={{}} onPress={()=>setIsOpen(!isOpen)} >
              <TextInput
                pointerEvents='none'
                placeholder={'select'}
                placeholderTextColor={colors.dimgray}
                style={[styles.input,{width : '100%'}]}
                onChangeText={setValue}
                value={value}
                // onFocus={onFocus}
                editable={false}
            /> 
            {/* <DownArrow /> */}
            </TouchableOpacity>
  
            { isOpen && <View style={{paddingBottom : 10, borderRadius: 10}} >
                <FlatList
                  data={options}
                  keyExtractor={(i)=>i}
                  renderItem={({item,index})=>{
                  return(
                    <TouchableOpacity onPress={()=> {
                      setValue(item)
                      setIsOpen(false)
                    }}
                    style={[styles.drp]} 
                    >
                      <Text style={[ {color : colors.DarkTextColor}]} >{item}</Text>
                    </TouchableOpacity>
                  )}}
                />
              </View>
            }
          </View>
        </View>
          {/* { showError  ? <Text style={ApplicationStyles.inputErrorText}>{errorText}</Text> : null} */}
      </>
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
    drp: {
      height: 40,
      borderWidth: 0,
      backgroundColor: colors.input_background,
      color: colors.black,
      paddingHorizontal: 20,
      paddingVertical: 5
    },
  });