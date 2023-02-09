import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import colors from '../../themes/Colors';
import Back from '../../assets/icons/back-arrow.png';
import Avatar from '../../assets/icons/avatar.png';

const Header = ({title, onClick, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex',flexDirection: 'row',}} >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} style={{width: 25, height: 25}} />
        </TouchableOpacity>
        <Text style={[styles.text, {fontSize: 18, paddingLeft: 15}]}>
          {title}
        </Text>
      </View>
      <View>
        <Image source={Avatar} style={{width: 30, height: 30}} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flex: 1,
    elevation: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent : "space-between"
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
  },
});
