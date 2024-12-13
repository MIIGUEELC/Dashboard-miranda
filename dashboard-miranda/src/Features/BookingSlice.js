import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBookings,
  addBooking,
  getBooking,
  deleteBooking,
  editBooking,
} from "./BookingsThunk";

 const initialState = {
  bookings: [], // Lista de reservas
  selectedBooking: null, 
  loading: false, 
  status: 'idle',
  error: null, 
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    clearSelectedBooking(state) {
      state.selectedBooking = null; // Limpiar la reserva seleccionada
    },
  },
  extraReducers: (builder) => {
    builder
      // Obtener todas las reservas
      .addCase(fetchBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Agregar una nueva reserva
      .addCase(addBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload); // Añadir la nueva reserva al estado
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Obtener una reserva específica
      .addCase(getBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBooking = action.payload;
      })
      .addCase(getBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Eliminar una reserva
      .addCase(deleteBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== action.meta.arg // Filtrar reservas
        );
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Editar una reserva existente
      .addCase(editBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editBooking.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.bookings.findIndex(
          (booking) => booking.id === action.payload.id
        );
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(editBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSelectedBooking } = bookingsSlice.actions;

export default bookingsSlice.reducer;
