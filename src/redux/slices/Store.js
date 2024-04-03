const {configureStore} = require('@reduxjs/toolkit');

import ProductReducr from '../slices/ProductSlices';
import WishlistReducer from '../slices/WishlistSlice';
import CartReducer from '../CartSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducr,
    wishlist: WishlistReducer,
    cart: CartReducer,
  },
});
