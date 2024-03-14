// import React, {useState} from 'react';
// import {
//   View,
//   Button,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// const Flatlist1 = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   // const data = [
//   //   {id: 'button1', label: 'Button 1'},
//   //   {id: 'button2', label: 'Button 2'},
//   //   {id: 'button3', label: 'Button 3'},
//   //   // Add more buttons here
//   // ];

//   // const handleButtonPress = id => {
//   //   setSelectedButton(id);
//   // };

//   // const renderItem = ({item}) => (
//   //   <Button
//   //     title={item.label}
//   //     onPress={() => handleButtonPress(item.id)}
//   //     color={selectedButton === item.id ? 'blue' : 'gray'}
//   //   />
//   // );

//   const handlePress = id => {
//     setSelectedButton(id);
//   };

//   const data = [
//     {id: 1, name: 'shyam'},
//     {id: 2, name: 'ram'},
//     {id: 3, name: 'vishnu'},
//     {id: 4, name: 'manish'},
//   ];

//   const renderItem = ({item, index}) => {
//     return (
//       <TouchableOpacity
//         style={[
//           styles.item,
//           {backgroundColor: selectedButton === item.id ? 'red' : 'green'},
//         ]}
//         onPress={() => handlePress(item.id)}>
//         <Text>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderHeader = () => {
//     return (
//       <View>
//         <Text>dfasasdfasd</Text>
//       </View>
//     );
//   };

//   const renderFooter = () => {
//     return (
//       <View>
//         <Text>nkklkj;kjl;</Text>
//       </View>
//     );
//   };
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <View>
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={item => item.id}
//           ListHeaderComponent={renderHeader}
//           ListFooterComponent={renderFooter}
//           numColumns={2}
//         />
//       </View>
//     </View>
//   );
// };

// export default Flatlist1;
// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: 'blue',
//     borderWidth: 5,
//     borderColor: '#fff',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
// });

import React, {useState} from 'react';
import {
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Flatlist1 = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '3', text: 'Item 3'},
    {id: '4', text: 'Item 4'},
    {id: '5', text: 'Item 5'},
    {id: '6', text: 'Item 6'},
    {id: '7', text: 'Item 7'},
    {id: '8', text: 'Item 8'},
    {id: '9', text: 'Item 9'},
    {id: '130', text: 'Item 310'},
    {id: '13', text: 'Item 13'},
    {id: '23', text: 'Item 23'},
    {id: '33', text: 'Item 33'},
    {id: '43', text: 'Item 43'},
    {id: '53', text: 'Item 53'},
    {id: '63', text: 'Item 63'},
    {id: '73', text: 'Item 73'},
    {id: '83', text: 'Item 83'},
    {id: '93', text: 'Item 93'},
    {id: '130', text: 'Item 310'},
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulating data fetching delay
    setTimeout(() => {
      setData([
        ...data,
        {id: String(data.length + 1), text: `Item ${data.length + 2}`},
      ]);
      setRefreshing(false);
    }, 1500);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const onEndReached = () => {
    // Simulating loading more data
    setData([
      ...data,
      {id: String(data.length + 1), text: `Item ${data.length + 1}`},
    ]);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListHeaderComponent={<Text style={styles.header}>Header Component</Text>}
      ListFooterComponent={<Text style={styles.footer}>Footer Component</Text>}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      initialNumToRender={4}
      maxToRenderPerBatch={5}
      windowSize={10}
      removeClippedSubviews={false}
      inverted={false}
      invertedScroll={false}
      keyboardDismissMode="on-drag"
      onScroll={() => console.log('Scrolling')}
      scrollEventThrottle={16}
      scrollIndicatorInsets={{top: 50, bottom: 50}}
      getItemLayout={(data, index) => ({length: 50, offset: 50 * index, index})}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    margin: 5,
  },
  itemText: {
    fontSize: 18,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 10,
  },
  footer: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ccc',
    paddingVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingVertical: 20,
  },
});

export default Flatlist1;
