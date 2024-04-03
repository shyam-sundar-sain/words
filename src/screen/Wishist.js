import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../Commen/Header';

const Wishist = () => {
  const items = useSelector(state => state.wishlist);
  // console.log(JSON.stringify(items) + ' ' + items.data?.lenght);
  const [wishlistItem, setWishlistItem] = useState(items.data);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header
          title={'Wishlist items'}
          // leftIcon={require('../image/back.png')}
          rightIcon={require('../image/cart.png')}
          // onClickLeftIcon={() => {
          //   navigation.goBack();
          // }}
        />
        <FlatList
          data={wishlistItem}
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

                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Wishist;
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
});
