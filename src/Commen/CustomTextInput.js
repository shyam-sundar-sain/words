import {Image} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.container}>
      {/* <Text>CustomTextInput</Text> */}

      <View style={styles.emialInputBox}>
        <Image source={icon} style={styles.image} />
        <TextInput placeholder={placeholder} style={styles.textInput} />
      </View>
    </View>
  );
};

export default CustomTextInput;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  emialInputBox: {
    height: hp(7),
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    marginHorizontal: wp(4),
    paddingLeft: wp(4),
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  textInput: {
    fontSize: wp(4),
    color: '#000',
    marginLeft: wp(2),
  },

  image: {
    height: hp(4),
    width: wp(8),
  },
});
