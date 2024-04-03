import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//header
import Header from '../Commen/Header';
import CustomButton from '../Commen/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {additemToWishList} from '../redux/slices/WishlistSlice';
import {additemToCart} from '../redux/CartSlice';
import {useRoute} from '@react-navigation/native';

const ProductDetails = props => {
  const {navigation} = props;
  console.log('props &&', props);
  const route = useRoute();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../image/back.png')}
        rightIcon={require('../image/cart.png')}
        title={'Product detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />

      <ScrollView>
        <View style={styles.maiBox}>
          <Image
            source={{uri: route.params?.data.image}}
            style={styles.bannerIma}
          />

          <TouchableOpacity
            style={styles.wishlistBtn}
            onPress={() => {
              dispatch(additemToWishList(route.params.data));
            }}>
            <Image
              source={require('../image/heart.png')}
              style={styles.heartIma}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>{route.params?.data.title}</Text>
        <Text style={[styles.titleText, {fontSize: wp(3.5), color: '#222'}]}>
          {route.params?.data.description}
        </Text>

        <View
          style={{flexDirection: 'row', marginLeft: wp(4), marginTop: hp(2)}}>
          <Text style={[styles.priceText, {color: '#000'}]}>Price :</Text>
          <Text style={[styles.priceText]}>
            {` $${route.params?.data.price}`}
          </Text>
        </View>

        <CustomButton
          bgColor={'#ff9a0c'}
          textColor={'#fff'}
          title={'Add To Cart'}
          onPress={() => {
            dispatch(additemToCart(route.params.data));
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bannerIma: {
    height: hp(50),
    width: wp(100),
    resizeMode: 'center',
    backgroundColor: '#fff',
  },

  titleText: {
    fontSize: wp(4.5),
    color: '#000',
    fontWeight: '600',
    marginLeft: wp(4),
  },

  priceText: {
    fontSize: wp(4),
    color: 'green',
    fontWeight: '600',
  },

  wishlistBtn: {
    height: hp(4.5),
    width: wp(9),
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    borderRadius: wp(8),
    borderColor: '#000',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: hp(-16),
    right: wp(2),
  },

  heartIma: {
    height: hp(3),
    width: wp(6),
    marginTop: hp(0.5),
  },

  maiBox: {
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
  },
});
