import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'

export const AppWrapper = ({children}) => {

    const backgroundStyle = {
        backgroundColor: "#fff",
        height: '100%'
      };
      
  return (
    <SafeAreaView style={backgroundStyle}>
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'#fff'}
        />
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}
        >
          {children}
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppWrapper