// import React from 'react';
// import {Text, View} from 'react-native';

// const Greeting = props => {
//   return (
//     <View style={{alignItems: 'center'}}>
//       <Text>Hello {props.name}!</Text>
//     </View>
//   );
// };

// const LotsOfGreetings = () => {
//   return (
//     <View style={{alignItems: 'center', top: 50}}>
//       <Greeting name="Rexxar" />
//       <Greeting name="Jaina" />
//       <Greeting name="Valeera" />
//       <Greeting name="Valeera" />
//       <Greeting name="Valeera" />
//       <Greeting name="Valeera" />
//     </View>
//   );
// };

// export default LotsOfGreetings;

import {View, Text} from 'react-native';
import React from 'react';

const Gams = ({name, Class, month}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{Class}</Text>
      <Text>{month}</Text>
    </View>
  );
};

const Hello = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Gams name={'shyam'} Class={'25th'} month={'dicheember'} />
    </View>
  );
};

export default Hello;
