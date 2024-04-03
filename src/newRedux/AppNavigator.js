import {NavigationContainer} from '@react-navigation/native';
const {createNativeStackNavigator} = require('@react-navigation/native-stack');
import MyProducts from './MyProducts';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {addMyProducts} from './MyproductSlice';

// image
import ima_shoes1 from '../image/shoes1.jpeg';
import ima_shoes2 from '../image/shoes2.jpeg';
import ima_shoes3 from '../image/shoes3.jpeg';
import ima_shoes4 from '../image/shoes4.jpeg';
import ima_shoes5 from '../image/shoes5.jpeg';
import ima_shoes6 from '../image/shoes6.jpeg';
import MyCart from './MyCart';
import {async_keys, getItem, storeData} from './Api/UserPreference';

const Stack = createNativeStackNavigator();

let items = [
  {
    id: 0,
    image: ima_shoes1,
    name: 'Sner for men',
    brand: 'PUMA',
    price: 2500,
    qty: 0,
  },
  {
    id: 2,
    image: ima_shoes2,
    name: 'Sner for men',
    brand: 'SONEY',
    price: 500,
    qty: 0,
  },
  {
    id: 3,
    image: ima_shoes3,
    name: 'Sner for men',
    brand: 'PUMA',
    price: 200,
    qty: 0,
  },
  {
    id: 4,
    image: ima_shoes4,
    name: 'Sner for men',
    brand: 'PUMA',
    price: 300,
    qty: 0,
  },
  {
    id: 5,
    image: ima_shoes5,
    name: 'Sner for men',
    brand: 'PUMA',
    price: 400,
    qty: 0,
  },
  {
    id: 6,
    image: ima_shoes6,
    name: 'Sner for women',
    brand: 'PUMA',
    price: 400,
    qty: 0,
  },
];
const AppNavigator = () => {
  const dispatch = useDispatch();
  const [itemsAdded, setItemsAdded] = useState(false);

  // useEffect(() => {
  //   items?.map(item => {
  //     dispatch(addMyProducts(item));
  //   });
  // }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsAddedPreviously = await getItem(async_keys?.itemsAdded);
        setItemsAdded(itemsAddedPreviously);
        if (!itemsAdded) {
          items.forEach(item => dispatch(addMyProducts(item)));
          await storeData(async_keys.itemsAdded, true);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyProducts" component={MyProducts} />
        <Stack.Screen name="MyCart" component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
