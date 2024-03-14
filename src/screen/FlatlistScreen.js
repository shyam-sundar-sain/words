// import React, {useState} from 'react';
// import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

// const FlatlistScreen = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const data = [
//     {id: '1', label: 'Button 1'},
//     {id: '2', label: 'Button 2'},
//     {id: '3', label: 'Button 3'},
//     // Add more items as needed
//   ];

//   const handleButtonPress = item => {
//     setSelectedItem(item.id);
//   };

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={[
//         styles.button,
// {backgroundColor: selectedItem === item.id ? 'blue' : 'gray'},
//       ]}
//       onPress={() => handleButtonPress(item)}>
//       <Text style={styles.buttonText}>{item.label}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   button: {
//     marginVertical: 8,
//     padding: 12,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default FlatlistScreen;

// added by shyam
// import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import React, {Children, useState} from 'react';
// const FlatlistScreen = () => {
//   const [selected, setSelected] = useState('');
//   const handleSelected = item => setSelected(item.id);
//   const data = [
//     {id: 1, title: 'helo'},
//     {id: 2, title: 'shyam'},
//     {id: 3, title: 'vishnu'},
//     {id: 4, title: 'mansi'},
//   ];

//   const renderItem = ({item}) => (
//     <TouchableOpacity
//       style={[
//         styles.button,
//         {backgroundColor: selected === item.id ? 'green' : 'yellow'},
//       ]}
//       onPress={() => handleSelected(item)}>
//       <Text>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View>
//       <Text>sdfvdfasfasdf</Text>
//       <FlatList data={data} renderItem={renderItem} />
//     </View>
//   );
// };

// export default FlatlistScreen;
// const styles = StyleSheet.create({
//   cotainer: {
//     flex: 1,
//   },
// });

// pratical

import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({wh}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{wh}</Text>
  </View>
);

// const renderItem = ({item}) => (
//   <View
//     style={{
//       backgroundColor: 'red',
//       paddingHorizontal: 100,
//       paddingVertical: 20,
//     }}>
//     <Text>{item.title}</Text>
//   </View>
// );
const FlatlistScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item wh={item.title} />}
        // renderItem={renderItem}
        // keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatlistScreen;
