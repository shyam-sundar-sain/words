import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ReloadInstructions} from 'react-native/Libraries/NewAppScreen';

const data = [
  {
    id: 1,
    title: 'shyam',
  },
  {
    id: 2,
    title: 'arbaz',
  },
  {
    id: 3,
    title: 'vishnu',
  },
  {
    id: 4,
    title: 'hariom',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={{height: 30, width: 20}}>
      <Text>{item.title}</Text>
    </View>
  );
};

const Hellos = () => {
  return (
    <View>
      <Text>Hellokjs</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        // keyExtractor={(item => item.id}
      />
    </View>
  );
};

export default Hellos;

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   FlatList,
//   StyleSheet,
//   Text,
//   StatusBar,
// } from 'react-native';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({title}) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const Hellos = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({item}) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default Hellos;
