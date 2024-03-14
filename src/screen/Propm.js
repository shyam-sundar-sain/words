// import {View, Text} from 'react-native';
// import React from 'react';
// import Propk from './Propk';

// const Propm = () => {
//   const data = 20;
//   return (
//     <View>
//       <Text>data</Text>
//       <Text>Propm</Text>
//       <Text>Propm</Text>
//       <Text>Propm</Text>
//     </View>
//   );
// };

// export default Propm;

// Propm.js

import {View, Text} from 'react-native';
import React from 'react';
import Propk from './Propk';

const Propm = () => {
  const data = 20;
  return (
    <View>
      <Propk data={data} />
      <Text>Propm</Text>
      <Text>Propm</Text>
      <Text>Propm</Text>
    </View>
  );
};

export default Propm;
