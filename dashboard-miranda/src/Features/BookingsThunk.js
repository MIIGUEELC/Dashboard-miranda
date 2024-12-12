import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = "./src/data"; 

// Obtener todas las reservas
export const fetchBookings = createAsyncThunk("bookings/fetchBookings", async () => {
  const res = await fetch(`${BASE_URL}/bookings.json`, {  
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error al obtener las reservas");
  return await res.json();
});

// Agregar una nueva reserva
export const addBooking = createAsyncThunk("bookings/addBooking", async (bookingObject) => {
  const res = await fetch(`${BASE_URL}/bookings.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingObject),
  });
  if (!res.ok) throw new Error("Error al agregar la reserva");
  return await res.json();
});

// Obtener una reserva específica por ID
export const getBooking = createAsyncThunk("bookings/getBooking", async (bookingId) => {
  const res = await fetch(`${BASE_URL}/bookings/${bookingId}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error al obtener la reserva");
  return await res.json();
});

// Eliminar una reserva por ID
export const deleteBooking = createAsyncThunk("bookings/deleteBooking", async (bookingId) => {
  const res = await fetch(`${BASE_URL}/bookings/${bookingId}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error("Error al eliminar la reserva");
  return await res.json();
});

// Editar una reserva existente
export const editBooking = createAsyncThunk("bookings/editBooking", async (updatedBookingObject) => {
  const res = await fetch(`${BASE_URL}/bookings/${updatedBookingObject.id}.json`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBookingObject),
  });
  if (!res.ok) throw new Error("Error al editar la reserva");
  return await res.json();
});
