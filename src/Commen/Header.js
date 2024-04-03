import {Image} from '@rneui/base';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');

// image
import ic_back from '../image/back.png';
import {useSelector} from 'react-redux';

// navigation
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  isCart,
}) => {
  const cartItems = useSelector(state => state.cart);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          onClickLeftIcon();
        }}>
        {leftIcon ? <Image source={leftIcon} style={styles.backIma} /> : null}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: wp(5),
          color: '#fff',
          fontWeight: '700',
        }}>
        {title}
      </Text>
      {/* {!isCart && <View></View>} */}
      {/* {isCart && ( */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        {rightIcon ? <Image source={rightIcon} style={styles.backIma} /> : null}
        <View style={styles.cartlenght}>
          <Text style={styles.cartlentText}>{cartItems?.data.length}</Text>
        </View>
      </TouchableOpacity>
      {/* // )} */}
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
    height: hp(3),
    width: wp(6),
    tintColor: '#fff',
  },

  cartlenght: {
    height: hp(3),
    width: wp(6),
    borderRadius: wp(4),
    backgroundColor: '#fff',
    position: 'absolute',
    right: wp(-3),
    top: hp(-1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  cartlentText: {
    fontSize: wp(4),
    color: '#000',
  },
});
