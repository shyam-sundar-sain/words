import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from './UserSlice';
import {useRoute} from '@react-navigation/native';

const AddUser = ({navigation}) => {
  let route = useRoute();
  const [name, setName] = useState(
    route.params?.type == 'edit' ? route.params.data.name : '',
  );
  const [email, setEmail] = useState(
    route.params?.type == 'edit' ? route.params.data.email : '',
  );
  const [mobileNumber, setMobileNumber] = useState(
    route.params?.type == 'edit' ? route.params.data.mobileNumber : '',
  );
  const [address, setAddress] = useState(
    route.params?.type == 'edit' ? route.params.data.address : '',
  );

  const dispatch = useDispatch();

  const validata = () => {
    let valid = true;
    if ((name = '')) {
      valid = false;
      return;
    }
    if ((email = '')) {
      valid = false;
    }
    if ((mobileNumber = '')) {
      valid = false;
    }
    if ((address = '')) {
      valid = false;
    }
  };

  return (
    <View style={{flex: 1}}>
      {/* <TextInput
        placeholder="Enter User Name"
        style={{
          height: hp(7),
          borderWidth: 1,
          marginHorizontal: wp(4),
          paddingLeft: wp(4),
          borderRadius: wp(2),
          marginTop: hp(2),
        }}
      /> */}
      <TextInput
        placeholder="Enter User Name"
        value={name}
        onChangeText={text => setName(text)}
        style={{
          height: hp(7),
          borderWidth: 1,
          marginHorizontal: wp(4),
          paddingLeft: wp(4),
          borderRadius: wp(2),
          marginTop: hp(2),
        }}
      />
      <TextInput
        placeholder="Enter User Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{
          height: hp(7),
          borderWidth: 1,
          marginHorizontal: wp(4),
          paddingLeft: wp(4),
          borderRadius: wp(2),

          marginTop: hp(2),
        }}
      />
      <TextInput
        placeholder="Enter User Mobile"
        keyboardType="number-pad"
        maxLength={10}
        value={mobileNumber}
        onChangeText={text => setMobileNumber(text)}
        style={{
          height: hp(7),
          borderWidth: 1,
          marginHorizontal: wp(4),
          paddingLeft: wp(4),
          borderRadius: wp(2),

          marginTop: hp(2),
        }}
      />
      <TextInput
        placeholder="Enter User Address"
        value={address}
        onChangeText={text => setAddress(text)}
        style={{
          height: hp(7),
          borderWidth: 1,
          marginHorizontal: wp(4),
          paddingLeft: wp(4),
          borderRadius: wp(2),
          marginTop: hp(2),
        }}
      />

      <TouchableOpacity
        style={{
          height: hp(8),
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          marginHorizontal: wp(4),
          marginTop: hp(4),
          borderRadius: wp(2),
        }}
        onPress={() => {
          if (validata) {
            if (route.params?.type == 'edit') {
              dispatch(
                updateUser({
                  name: name,
                  email: email,
                  mobileNumber: mobileNumber,
                  address: address,
                  index: route.params.index,
                }),
              );
            } else {
              dispatch(addUser({name, email, mobileNumber, address}));
            }
            navigation.goBack();
          } else {
            Alert.alert('', 'Please enter correct data');
          }
        }}>
        <Text style={{fontSize: wp(4), color: '#fff'}}>Save User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
