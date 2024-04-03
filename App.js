import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LoginScreen from './src/screen/LoginScreen';
import SignUpScreen from './src/screen/SignUpScreen';
// import {store} from './src/redux/slices/Store';

// redux
// import AppNavigator from './src/Navigation/AppNavigator';

// ReduxToolkitCrud
// import {Provider} from 'react-redux';
// import AppNavigator from './src/ReduxToolkitCrud/AppNavigator';
// import {PersistGate} from 'redux-persist/integration/react';
// import { persistor, store } from './src/ReduxToolkitCrud/MyStore';

// newRedux
import AppNavigator from './src/newRedux/AppNavigator';
import {Provider} from 'react-redux';
import {MyStore} from './src/newRedux/MyStore';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <AppNavigator />
    // </View>

    // redux
    // <Provider store={store}>
    //   <AppNavigator />
    // </Provider>

    //ReduxToolkitCrud
    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //     <AppNavigator />
    //   </PersistGate>
    // </Provider>

    // newRedux
    <Provider store={MyStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
