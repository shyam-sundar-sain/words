import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import Header from '../Commen/Header';

const Cart = () => {
  const items = useSelector(state => state.cart);
  // console.log(JSON.stringify(items) + ' ' + items.data?.lenght);
  const [caritems, setCartItems] = useState(items.data);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header
        title={'Cart items'}
        // leftIcon={require('../image/back.png')}
        //   rightIcon={require('../image/cart.png')}
        // onClickLeftIcon={() => {
        //   navigation.goBack();
        // }}
      />
      <FlatList
        data={caritems}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.itemBox}
              onPress={() => {
                navigation.navigate('ProductDetails', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <Text style={styles.nameText}>
                  {item.title.length > 25
                    ? item.title.substring(0, 325) + '...'
                    : item.title}
                </Text>

                <Text style={styles.descriptionText}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>

                <View style={styles.qry}>
                  <Text style={styles.priceText}>{item.price}</Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize: wp(4), fontWeight: '800'}}>- </Text>
                  </TouchableOpacity>

                  <Text style={{fontSize: wp(5), marginHorizontal: wp(4)}}>
                    {item.qty}
                  </Text>
                  <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize: wp(4), fontWeight: '800'}}> +</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemBox: {
    // width: Dimensions.get('window').width,
    height: hp(14),
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },

  itemImage: {
    height: hp(14),
    width: wp(28),
  },

  nameText: {
    fontSize: wp(4),
    color: '#000',
    fontWeight: '800',
    marginLeft: wp(4),
    marginTop: hp(2),
  },

  descriptionText: {
    fontSize: wp(4),
    color: '#000',
    marginLeft: wp(4),
  },

  priceText: {
    fontSize: wp(4),
    color: 'green',
    fontWeight: '600',
    marginLeft: wp(4),
  },

  qry: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  btn: {
    borderWidth: 1,
    width: wp(10),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
});
