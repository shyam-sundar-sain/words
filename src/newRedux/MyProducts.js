import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToMyCart,
  deletMyCartItem,
  removeMyCartItem,
} from './MyCartSlice';
import {decreaseQty, increaseQty} from './MyproductSlice';

const MyProducts = ({navigation}) => {
  const myProducts = useSelector(state => state.product);
  const myProductscart = useSelector(state => state.cart);
  console.log('cart >>**', myProductscart);

  const myCartItem = useSelector(state => state.cart);
  console.log('myCartItem >>**', myCartItem);

  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    myCartItem.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerBox}>
        <Text style={styles.reduxToolkit}>Redux Toolkit Demo</Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={myProducts}
          renderItem={({item, index}) => {
            const isLastItem = index === myProducts.length - 1;
            return (
              <View
                style={[styles.FlatListItem, isLastItem && styles.lastItem]}>
                <Image source={item?.image} style={styles.itemIma} />
                <View style={{paddingLeft: wp(4)}}>
                  <Text style={styles.itemName}>
                    {item.name.substring(0, 20) + '...'}
                  </Text>
                  <Text style={{fontWeight: '600'}}>{item.brand}</Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      color: 'green',
                      fontSize: wp(4),
                    }}>
                    {'₹' + item.price}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      style={styles.addtoBox}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));
                      }}>
                      <Text
                        style={{
                          fontSize: wp(4),
                          fontWeight: '500',
                          color: '#fff',
                        }}>
                        Add To Cart
                      </Text>
                    </TouchableOpacity>
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                          if (item.qty > 1) {
                            console.log('remove decreaseQty');
                            dispatch(removeMyCartItem(item));
                            dispatch(decreaseQty(item?.id));
                          } else {
                            console.log('delete SS');
                            dispatch(deletMyCartItem(item?.id));
                            dispatch(decreaseQty(item?.id));
                          }
                        }}>
                        <Text style={{fontSize: wp(4), color: '#fff'}}>
                          {' '}
                          -{' '}
                        </Text>
                      </TouchableOpacity>
                    )}

                    {item.qty == 0 ? null : (
                      <Text
                        style={{
                          fontSize: wp(4),
                          fontWeight: '600',
                          marginLeft: wp(4),
                        }}>
                        {item?.qty}
                      </Text>
                    )}

                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => {
                          dispatch(addProductToMyCart(item));
                          dispatch(increaseQty(item.id));
                        }}>
                        <Text style={{fontSize: wp(4), color: '#fff'}}>
                          {' '}
                          +{' '}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      {/* //<<<<<<<<<<<< */}
      {myCartItem.length > 0 ? (
        <View style={styles.bottomButton}>
          <View
            style={{
              width: wp(50),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: wp(4), color: '#000', fontWeight: '600'}}>
              {'Add items' + '(' + myCartItem.length + ')'}
            </Text>

            <Text style={{fontSize: wp(3.5)}}>{'Total :' + getTotal()}</Text>
          </View>
          <View
            style={{
              width: wp(50),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                width: wp(40),
                height: hp(5),
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: wp(2),
                marginBottom: hp(0.5),
              }}
              onPress={() => {
                navigation.navigate('MyCart');
              }}>
              <Text style={{color: '#fff'}}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default MyProducts;
const styles = StyleSheet.create({
  headerBox: {
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },

  lastItem: {
    marginBottom: hp(2),
  },

  reduxToolkit: {
    fontSize: wp(5),
    fontWeight: '700',
    color: '#000',
  },

  FlatListItem: {
    height: hp(15),
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: hp(1),
    elevation: 2,
    borderRadius: wp(2),
    flexDirection: 'row',
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    paddingLeft: wp(4),
  },

  itemIma: {
    height: hp(9),
    width: wp(18),
    borderRadius: wp(2),
  },

  itemName: {
    fontSize: wp(5),
    color: '#000',
    fontWeight: '700',
  },

  addtoBox: {
    width: wp(30),
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1),
    borderRadius: wp(2),
  },

  addButton: {
    width: wp(10),
    borderRadius: wp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: hp(1),
    marginLeft: wp(4),
  },

  bottomButton: {
    height: hp(6),
    backgroundColor: '#fff',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    paddingTop: hp(2),
  },
});
