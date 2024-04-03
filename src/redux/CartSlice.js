const {createSlice} = require('@reduxjs/toolkit');

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },

  reducers: {
    additemToCart(state, action) {
      let tempData = state.data;

      isItemExist = false;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          isItemExist = true;
          item.qty = item.qty + 1;
        }
      });

      if (!isItemExist) {
        tempData.push(action.payload);
      }

      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const {additemToCart} = CartSlice.actions;
export default CartSlice.reducer;
