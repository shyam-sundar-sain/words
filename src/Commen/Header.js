import {Image} from '@rneui/base';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');

// image
import ic_back from '../image/back.png';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image source={leftIcon} style={styles.backIma} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={rightIcon} style={styles.backIma} />
      </TouchableOpacity>
      {/* <Text>Header</Text> */}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    height: hp(8),
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
  },

  btn: {
    // height: hp(15),
    // width: wp(15),
    // alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 1,
  },

  backIma: {
    height: hp(4),
    width: wp(8.5),
    tintColor: '#fff',
  },
});
