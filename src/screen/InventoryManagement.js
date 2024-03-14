import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';

import menu from '../image/menu.png';
import plus from '../image/plus.png';
import magnifyingGlass from '../image/magnifying-glass.png';
import adjust from '../image/adjust.png';
import call from '../image/call.png';

const InventoryManagement = () => {
  const DATA = [
    {
      key: 1,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 2,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 3,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 4,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 5,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 6,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 7,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 8,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 9,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 10,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 10,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
    {
      key: 10,
      productname: 'smartphone',
      price: '₹26,999',
      quantity: 15,
      image: call,
    },
  ];
  const headers = ['Product Name', 'Price', 'Quantity', 'Image'];

  const renderItem = ({item}) => (
    <View
      style={{
        borderColor: '#ccc',
        flexDirection: 'column',
        // borderRadius: wp(2),
        alignSelf: 'center',
        width: '100%', // Set the width to 90% of the screen width
        marginHorizontal: '5%', // Add horizontal margin to center the table
      }}>
      <TouchableOpacity
        key={item.key}
        style={{
          flexDirection: 'row',
          // marginTop: hp(2),
          // borderBottomWidth: wp(0.4),
          borderBottomColor: '#eee',
        }}>
        <View style={[styles.cell, styles.monthCell]}>
          {/* Apply monthCell styles */}
          <Text style={styles.cellText}>{item.productname}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellText}>{item.price}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellText}>{item.quantity}</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.dataImage}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={menu} resizeMode="cover" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add New Product</Text>
        <TouchableOpacity>
          <Image source={plus} resizeMode="cover" style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginHorizontal: wp(3),
        }}>
        <View style={styles.searchContainer}>
          <TextInput placeholder="search" style={{flex: 1}} />
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Image
              source={magnifyingGlass}
              resizeMode="cover"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image source={adjust} resizeMode="cover" style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          // marginBottom: hp(2),
          // paddingBottom: hp(4),
          backgroundColor: '#fff',
          // paddingHorizontal: wp(3),
          // borderTopLeftRadius: hp(3),
          // borderTopRightRadius: hp(3),
          elevation: 2,
          //   borderWidth: 0.5,
          //   borderColor: '#aaa',
        }}>
        <View style={styles.table}>
          <View style={styles.headerRow}>
            {headers.map((header, index) => (
              <View style={styles.headerCell} key={index}>
                <Text style={styles.headerText1}>{header}</Text>
              </View>
            ))}
          </View>
        </View>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.productname.toString()}
        />
      </View>
    </View>
  );
};
export default InventoryManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#718AFF',
    // height: hp(8),
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: wp(5),
    flexDirection: 'row',
  },
  backIcon: {
    // height: hp(4),
    aspectRatio: 1 / 1,
  },
  searchIcon: {
    // height: hp(2.5),
    aspectRatio: 1 / 1,
  },
  headerText: {
    color: '#fff',
    fontWeight: '500',
  },
  searchContainer: {
    // width: wp(80),
    // paddingRight: wp(3),
    // marginHorizontal: wp(2),
    // marginVertical: hp(2),
    borderWidth: 0.5,
    borderColor: '#aaa',
    // borderRadius: wp(2),
    flexDirection: 'row',
  },
  filterIcon: {
    // height: hp(5.5),
    aspectRatio: 1 / 1,
    // borderRadius: wp(1),
  },
  table: {
    // borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#eee',
    flexDirection: 'column',
    // borderRadius: wp(3),
    alignSelf: 'center',
    width: '100%', // Set the width to 90% of the screen width
    marginHorizontal: '5%', // Add horizontal margin to center the table
    borderWidth: 0.5,
    borderColor: '#aaa',
  },
  headerRow: {
    flexDirection: 'row',
    // backgroundColor: 'rgba(0, 71, 171, 0.25)',
    // borderTopRightRadius: wp(2),
    // borderTopLeftRadius: wp(2),
  },
  headerCell: {
    flex: 1,
    padding: 10,
  },
  headerText1: {
    // fontSize: wp(4),
    fontFamily: 'Roboto-Bold',
    color: '#aaa',
    textAlign: 'center',
  },
  dataImage: {
    // height: hp(5),
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  cell: {
    flex: 1, // Match the flex property with header cells
    padding: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: 'black',
    // borderRightWidth: 1,
    // borderRightColor: 'black',
    // Add any additional styles you need for data cells here
  },
  monthCell: {
    // width: wp(5),
    // borderWidth: 1,
    // marginLeft: wp(-2), // Set a fixed width for the "Month" column
  },
  cellText: {
    alignSelf: 'center',
    color: '#23416E',
    // Add any additional styles you need for text in data cells here
  },
});
