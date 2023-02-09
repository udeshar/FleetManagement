import SCREEN_KEYS from "../../themes/SCREEN_KEYS";
import React, { useEffect } from "react";
import { View, Image, Text } from 'react-native'
import styles from "./Styles";
import Logo from '../../assets/icons/logo.png';
import SignIn from "./SignIn";


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => navigation.replace(SCREEN_KEYS.SIGNIN), 3000);
    }, []);

  return (
    <View style={[styles.container]}>
      <Image source={Logo} style={{width: 250, height:200}}/> 
      <Text style={{color: "#000", fontWeight: "bold", fontSize: 20}} >Fleet Management App</Text>
    </View>
  );
};

export default SplashScreen;
