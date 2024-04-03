// const {configureStore} = require('@reduxjs/toolkit');
// // import {configureStore} from '@reduxjs/toolkit';
// import {combineReducers} from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // import storage from 'redux-persist/lib/storage';

// import UserReducer from './UserSlice';

// let persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// let rootReducer = combineReducers({user: UserReducer});
// const store = configureStore({reducer: reducers});

// let persistedReducer = persistReducer(persistConfig, rootReducer);

// const MyStore = configureStore({
//   persistedReducer,
//   // reducer: {
//   //   user: UserReducer,
//   // },
// });

// export default MyStore;
import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './UserSlice';
import storage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

let persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, UserReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  }, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
