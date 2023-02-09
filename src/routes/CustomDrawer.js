import React from "react";
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../themes/Colors";
import SCREEN_KEYS from "../themes/SCREEN_KEYS";
import Logo from '../assets/icons/logo.png';

function CustomDrawerContent({
  navigation,
  profile,
  focused,
  state,
  userInfo,
  ...rest
}) {
  let screens = [
    { title: "Home", navigate: SCREEN_KEYS.HOMESCREEN, id: 0 },
    { title: "My Orders", navigate: SCREEN_KEYS.MYORDERS, id: 1 },
  ];
  return (
    <View style={styles.containerDrawer}>
      <View style={{ marginHorizontal: 25, marginTop : 70 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={Logo} style={{width : 150, height : 100}} />
            <Text style={{color : colors.black, fontSize : 18, fontWeight : 'bold', marginBottom : 50}}> Fleet Management App</Text>
          {screens.map((item, index) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate(item.navigate)}>
                    <View style={{paddingVertical : 10}}>
                        <View>
                            <Text style={{color : colors.DarkTextColor, fontSize : 22, fontWeight : '500'}}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDrawer: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  header: {
    paddingHorizontal: 28,
    paddingTop: 5 * 3,
    justifyContent: "center",
    fontSize: 18,
    color: "white",
  },
});

export default CustomDrawerContent;
