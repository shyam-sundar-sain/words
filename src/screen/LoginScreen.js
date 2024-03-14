import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ic_loginIma from '../image/loginIma.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = () => {
  return (
    <ScrollView
      style={styles.homeContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image source={ic_loginIma} style={styles.loginIma} />
      </View>

      <Text style={styles.loginText}>Login</Text>

      <Text style={styles.emailText}>Email</Text>
      <TextInput placeholder="Enter your email" style={styles.enterYourText} />

      <Text style={[styles.emailText, {marginTop: hp(3)}]}>Password</Text>
      <TextInput
        placeholder="Enter your password"
        style={styles.enterYourText}
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: 'rgba(237, 128, 43, 1)',
  },

  loginIma: {
    height: hp(34),
    width: wp(94),
    borderColor: '#000',
    alignSelf: 'center',
    marginTop: hp(6),
  },

  imageContainer: {
    height: hp(48),
    backgroundColor: '#fff',
    borderBottomRightRadius: wp(6),
    borderBottomLeftRadius: wp(6),
    paddingHorizontal: wp(20),
  },

  loginText: {
    fontSize: wp(7),
    alignSelf: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    marginTop: hp(2),
  },

  emailText: {
    fontSize: wp(4),
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '600',
    marginTop: hp(2),
    marginLeft: wp(4),
    marginBottom: hp(1),
  },

  enterYourText: {
    fontSize: wp(4),
    fontWeight: '400',
    color: 'rgba(140, 132, 132, 1)',
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: wp(4),
    elevation: 4,
  },

  loginButton: {
    height: hp(7),
    marginTop: hp(7),
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginBottom: hp(2),
  },

  loginButtonText: {
    fontSize: wp(4.5),
    color: ' rgba(237, 128, 43, 1)',
    fontWeight: '700',
  },
});
