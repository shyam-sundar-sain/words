// import {View, Text} from 'react-native';
// import React from 'react';

// const Propk = () => {
//   return (
//     <View>
//       <Text>yesh</Text>
//       <Text>vishnu</Text>
//     </View>
//   );
// };

// export default Propk;

// Propk.js

import React from 'react';
import {View, Text} from 'react-native';

const Propk = ({data}) => {
  return (
    <View>
      <Text>{data}</Text>
      <Text>yesh</Text>
      <Text>vishnu</Text>
    </View>
  );
};

export default Propk;
