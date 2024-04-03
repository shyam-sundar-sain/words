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

const MyCart = ({navigation}) => {
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerBox}>
        <Text style={styles.reduxToolkit}>Redux Toolkit Demo</Text>
      </View>

      <FlatList
        data={myCartItems}
        renderItem={({item, index}) => {
          return (
            <View style={styles.FlatListItem}>
              <Image source={item?.image} style={styles.itemIma} />

              <View style={{paddingLeft: wp(4)}}>
                <Text style={styles.itemName}>
                  {item.name.substring(0, 20) + '...'}
                </Text>
                <Text style={{fontWeight: '600'}}>{item.brand}</Text>
                <Text
                  style={{fontWeight: '600', color: 'green', fontSize: wp(4)}}>
                  {'₹' + item.price}
                </Text>

                <View style={{flexDirection: 'row'}}>
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
                      <Text style={{fontSize: wp(4), color: '#fff'}}> - </Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text
                      style={{
                        fontSize: wp(4),
                        fontWeight: '600',
                        marginLeft: wp(4),
                        marginTop: hp(1.2),
                      }}>
                      {item.qty}
                    </Text>
                  )}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));
                      }}>
                      <Text style={{fontSize: wp(4), color: '#fff'}}> + </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyCart;
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
});
