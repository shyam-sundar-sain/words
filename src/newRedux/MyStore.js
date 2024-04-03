import {configureStore} from '@reduxjs/toolkit';
import MyProductReducer from '../newRedux/MyproductSlice';
import MyCartReducer from '../newRedux/MyCartSlice';

export const MyStore = configureStore({
  reducer: {
    product: MyProductReducer,
    cart: MyCartReducer,
  },
});
