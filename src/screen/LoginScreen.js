import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomTextInput from '../Commen/CustomTextInput';
import CustomButton from '../Commen/CustomButton';

// image
import ic_logo from '../image/logo.png';
import ic_email from '../image/email.png';
import ic_padlock from '../image/padlock.png';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={ic_logo} style={styles.logoIma} />
      {/* <TextInput placeholder="email" style={styles.emialInputBox} />
      <TextInput placeholder="passwprd" style={styles.emialInputBox} /> */}
      <Text style={styles.loginText}>Login</Text>
      <CustomTextInput placeholder={'email'} icon={ic_email} />
      <CustomTextInput placeholder={'password'} icon={ic_padlock} />

      <CustomButton title={'Login'} bgColor={'#000'} textColor={'#fff'} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.createNewText}>Create New Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoIma: {
    height: hp(20),
    width: wp(40),
    alignSelf: 'center',
    marginTop: hp(2),
  },

  emialInputBox: {
    height: hp(7),
    borderWidth: wp(0.1),
    borderRadius: wp(2),
    marginHorizontal: wp(4),
    paddingLeft: wp(4),
    marginTop: hp(2),
  },

  createNewText: {
    fontSize: wp(4),
    fontWeight: '800',
    marginTop: hp(4),
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },

  loginText: {
    fontSize: wp(4),
    color: '#000',
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: hp(4),
  },
});
