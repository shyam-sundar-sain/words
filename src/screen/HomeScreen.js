import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../Commen/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import Home from './Home';
import Search from './Search';
import Notifaction from './Notifaction';
import User from './User';
import Wishist from './Wishist';

const HomeScreen = ({navigation}) => {
  // state
  const [selectedTab, setSelectedTab] = useState(0);

  const [iskeuBoardVisible, setIskeyBoardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIskeyBoardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIskeyBoardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require('../image/menu.png')}
        rightIcon={require('../image/cart.png')}
        title={'Grocery app'}
      /> */}

      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Text>Home screen dfgdsgdgfd</Text>
      </TouchableOpacity>

      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Wishist />
      ) : selectedTab == 3 ? (
        <Notifaction />
      ) : (
        <User />
      )}

      {!iskeuBoardVisible && (
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.bottomTabIcon}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <Image
              source={
                selectedTab == 0
                  ? require('../image/home_fill.png')
                  : require('../image/home.png')
              }
              style={styles.homeIma}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTabIcon}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <Image
              source={
                selectedTab == 1
                  ? require('../image/search_fill.png')
                  : require('../image/search.png')
              }
              style={styles.homeIma}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTabIcon}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <Image
              source={
                selectedTab == 2
                  ? require('../image/heart_fill.png')
                  : require('../image/heart.png')
              }
              style={styles.homeIma}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTabIcon}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <Image
              source={
                selectedTab == 3
                  ? require('../image/noti_fill.png')
                  : require('../image/noti.png')
              }
              style={styles.homeIma}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTabIcon}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <Image
              source={
                selectedTab == 4
                  ? require('../image/user_fill.png')
                  : require('../image/user.png')
              }
              style={styles.homeIma}
            />
          </TouchableOpacity>
        </View>
      )}
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
    height: hp(4),
    width: wp(8),
  },
});
