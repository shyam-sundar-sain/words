import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from '../Commen/Header';

// redux
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  // navigation
  const navigation = useNavigation();

  const product = useSelector(state => state);
  console.log('product LL', JSON.stringify(product.product.data));

  // state
  const [search, setSearch] = useState('');
  const [oldData, setOldData] = useState(product.product.data);
  const [searchList, setSearchLisr] = useState([]);
  const filterData = text => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    setSearchLisr(newData);
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
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
      <Header title={'Search Item'} />

      <View style={styles.SearchBox}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../image/search.png')}
            style={styles.searchIma}
          />

          <TextInput
            placeholder="Search item here..."
            value={search}
            onChangeText={text => {
              setSearch(text), filterData(text);
            }}
            style={styles.searchItemInput}
          />
        </View>

        {search !== '' && (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
              filterData('');
            }}>
            <Image
              source={require('../image/close.png')}
              style={[styles.searchIma, {marginRight: wp(4)}]}
            />
          </TouchableOpacity>
        )}
      </View>

      <FlatList data={searchList} renderItem={renderItem} />
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  SearchBox: {
    height: hp(5.5),
    backgroundColor: '#fff',
    borderRadius: wp(4),
    marginHorizontal: wp(4),
    marginTop: hp(2),
    paddingLeft: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchIma: {
    height: hp(3),
    width: wp(6),
  },

  searchItemInput: {
    fontSize: wp(4),
    color: '#000',
    paddingLeft: wp(4),
    width: wp(70),
  },

  //
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
