import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null, 
  loginError: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signIn(state, action) {
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      state.loginError = null;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("currentUser");
      state.loginError = null;
    },
    setLoginError(state, action) {
      state.loginError = action.payload;
    },
  },
});

export const { signIn, signOut, setLoginError } = loginSlice.actions;
export default loginSlice.reducer;
