// import React, {useState} from 'react';
// import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

// const Word = () => {
//   const [selectedButtonId, setSelectedButtonId] = useState(null);

//   const data = [
//     {id: '1', text: 'Button 1'},
//     {id: '2', text: 'Button 2'},
//     {id: '3', text: 'Button 3'},
//     // Add more buttons as needed
//   ];

//   const renderItem = ({item}) => {
//     const isSelected = item.id === selectedButtonId;
//     const TextColor = item.id === selectedButtonId;
//     return (
//       <TouchableOpacity
//         style={[styles.button, isSelected && styles.selectedButton]}
//         onPress={() => setSelectedButtonId(item.id)}>
//         <Text
//           style={[styles.textColor, TextColor && styles.selectedButtonText]}>
//           {item.text}
//         </Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View>
//       <FlatList
//         data={data}
//         keyExtractor={item => item.id}
//         renderItem={renderItem}
//         // extraData={selectedButtonId}
//         // Helps re-render when selectedButtonId changes
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'gray',
//     backgroundColor: 'white',
//   },
//   selectedButton: {
//     backgroundColor: 'lightblue',
//   },
//   selectedButtonText: {
//     fontWeight: 'bold',
//     color: 'green',
//   },

//   textColor: {
//     fontSize: 20,
//     color: 'red',
//     fontWeight: 'bold',
//   },
// });

// export default Word;

import React, {useState} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
const Word = () => {
  const [selected, setSelected] = useState(null);
  const data = [
    {
      id: 1,
      title: 'shyam',
    },
    {
      id: 2,
      title: 'vishnu',
    },
    {
      id: 3,
      title: 'hariom',
    },
    {
      id: 4,
      title: 'anuj',
    },
  ];

  const renderItem = ({item}) => {
    // const backgroundColor =
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          height: 30,
          width: 300,
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>dsfgd</Text>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
export default Word;
