import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser} from './UserSlice';

const Users = ({navigation}) => {
  const users = useSelector(state => state.user);

  const dispatch = useDispatch();
  console.log('users ****', users);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={users.data}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                height: hp(13),
                borderWidth: 1,
                marginHorizontal: wp(4),
                marginTop: hp(2),
                borderRadius: wp(2),
                paddingTop: hp(1),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: wp(4),
              }}>
              <View>
                <Text>{'name :' + item.name}</Text>
                <Text>{'email :' + item.email}</Text>
                <Text>{'mobile :' + item.mobileNumber}</Text>
                <Text>{'address :' + item.address}</Text>
              </View>
              <View>
                <Text
                  style={{
                    padding: wp(1.5),
                    borderWidth: wp(0.1),
                    borderColor: 'blue',
                    color: 'blue',
                  }}
                  onPress={() => {
                    navigation.navigate('AddUser', {
                      type: 'edit',
                      data: item,
                      index: index,
                    });
                  }}>
                  Edit
                </Text>
                <Text
                  style={{
                    padding: wp(1.5),
                    borderWidth: wp(0.1),
                    borderColor: 'red',
                    color: 'red',
                    marginTop: hp(1.5),
                  }}
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}>
                  Delete
                </Text>
              </View>
            </View>
          );
        }}
      />

      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: hp(8),
          borderWidth: 1,
          width: wp(100),
          bottom: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}
        onPress={() => {
          navigation.navigate('AddUser');
        }}>
        <Text
          style={{
            fontSize: wp(5),
            color: '#fff',
          }}>
          Add New User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Users;
