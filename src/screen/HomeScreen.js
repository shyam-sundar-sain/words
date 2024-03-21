import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../Commen/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../image/menu.png')}
        rightIcon={require('../image/cart.png')}
        title={'Grocery app'}
      />

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.bottomTabIcon}>
          <Image source={require('../image/home.png')} style={styles.homeIma} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTabIcon}>
          <Image source={require('../image/home.png')} style={styles.homeIma} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTabIcon}>
          <Image source={require('../image/home.png')} style={styles.homeIma} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomTabIcon}>
          <Image source={require('../image/home.png')} style={styles.homeIma} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },

  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: wp(4),
  },

  bottomTabIcon: {
    // height: '100%',
    // width: '80%',
    height: hp(10),
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  homeIma: {
    height: hp(3.5),
    width: wp(8),
  },
});
