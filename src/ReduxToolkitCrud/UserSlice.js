import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'addslice',
  initialState: {
    data: [],
  },

  reducers: {
    addUser(state, action) {
      state.data.push(action.payload);
    },

    updateUser(state, action) {
      let tempdata = state.data;
      tempdata.map((item, index) => {
        if (index == action.payload.index) {
          item.name = action.payload.name;
          item.email = action.payload.email;
          item.mobileNumber = action.payload.mobileNumber;
          item.address = action.payload.address;
        }
      });

      state.data = tempdata;
    },

    deleteUser(state, action) {
      let tempdata = state.data;
      let final = tempdata.filter((item, index) => {
        return index != action.payload;
      });
      state.data = final;
    },
  },
});

export const {addUser, updateUser, deleteUser} = UserSlice.actions;
export default UserSlice.reducer;
