import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({onPress, bgColor, title, textColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonBox, {backgroundColor: bgColor}]}
        onPress={() => {
          onPress();
        }}>
        <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  buttonBox: {
    height: hp(7),
    borderRadius: wp(2),
    marginHorizontal: wp(4),
    marginTop: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: wp(4),
    // color: textColor,
  },
});
