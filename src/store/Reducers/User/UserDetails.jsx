import { createSlice } from "@reduxjs/toolkit";

// Initial state for the current user
const initialState = {
  userName: null,
  userProfileImg: null,
  userEmail: null,
  userID: null,
  loading: false,
  error: null,
  isLogedIn: false,
};

// User details slice
const UserDetails = createSlice({
  name: "UserDetails",
  initialState,
  reducers: {
    getData: (state, action) => {
      const { userName, userProfileImg, userEmail, userID } =
        action.payload || {};
      state.userName = userName;
      state.userProfileImg = userProfileImg;
      state.userEmail = userEmail;
      state.userID = userID;
      state.loading = false;
      state.error = null;
      state.isLogedIn;
    },
  },
});

export default UserDetails.reducer;
export const { getData } = UserDetails.actions;
