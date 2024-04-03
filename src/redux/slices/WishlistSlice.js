const {createSlice} = require('@reduxjs/toolkit');

const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },

  reducers: {
    additemToWishList(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const {additemToWishList} = WishlistSlice.actions;
export default WishlistSlice.reducer;
