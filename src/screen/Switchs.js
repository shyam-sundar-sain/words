import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Switchs = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  // toggleSwitch

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: 'green', true: 'red'}}
        thumbColor={isEnabled ? 'blue' : 'black'}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Switchs;
