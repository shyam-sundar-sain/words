import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
// header
import Header from '../Commen/Header';

// global navigation
import {useNavigation} from '@react-navigation/native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {addProducts} from '../redux/slices/ProductSlices';

const Home = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProduct(json),
          json.map(item => {
            item.qty = 1;
          });
        dispatch(addProducts(json));
      });
  };

  const renderItem = ({item}) => {
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
              ? item.title.substring(0, 25) + '...'
              : item.title}
          </Text>

          <Text style={styles.descriptionText}>
            {item.description.length > 30
              ? item.description.substring(0, 30) + '...'
              : item.description}
          </Text>

          <Text style={styles.priceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../image/menu.png')}
        rightIcon={require('../image/cartshow.png')}
        title={'Grocery app'}
        onClickLeftIcon={() => navigation.openDrawer()}
      />

      <View style={styles.homeContainer}>
        <FlatList data={product} renderItem={renderItem} />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  homeContainer: {
    flex: 1,
  },

  itemBox: {
    width: Dimensions.get('window').width,
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
});
