import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import Home from '../../src/screen/Home';
import ProductDetails from './ProductDetails';
import Notifaction from './Notifaction';

const Drawer = createDrawerNavigator();

const Main = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="Notifaction"
        component={Notifaction}
        // options={{headerShown: false}}s
      />
      {/* <Drawer.Screen name="Home" component={Home} /> */}
    </Drawer.Navigator>
  );
};

export default Main;
