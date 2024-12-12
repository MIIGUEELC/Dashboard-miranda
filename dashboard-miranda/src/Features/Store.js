import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './LoginSlice';
import { bookingsSlice } from './BookingSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer, 
    bookings:bookingsSlice.reducer
  },
});





