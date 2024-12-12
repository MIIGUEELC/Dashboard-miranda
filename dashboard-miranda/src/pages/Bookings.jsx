// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookings } from '../Features/BookingsThunk';

// export const BookingList = () => {
//   const dispatch = useDispatch();
//   const { bookings, status, error } = useSelector((state) => state.bookings);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchBookings());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') {
//     return <p>Loading bookings...</p>;
//   }

//   if (status === 'failed') {
//     return <p>Error loading bookings: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>Booking List</h1>
//       <ul>
//         {bookings.map((booking, id) => (
//           <li key={id}>
//             <p>Name: {booking.name}</p>
//             <p>Order Date: {booking.orderDate}</p>
//             <p>Check-In: {booking.checkIn}</p>
//             <p>Check-Out: {booking.checkOut}</p>
//             <p>Special Request: {booking.specialRequest}</p>
//             <p>Room Type: {booking.room_type}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../Features/BookingsThunk';

export const BookingList = () => {
  const dispatch = useDispatch();
  const { bookings, status, error } = useSelector((state) => state.bookings);

  console.log("Bookings:", bookings); // Para ver los datos cargados
  console.log("Status:", status); // Para ver el estado de la carga
  console.log("Error:", error); // Para ver si hay algún error

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBookings());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <p>Loading bookings...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading bookings: {error}</p>;
  }

  return (
    <div>
      <h1>Booking List</h1>
      <ul>
        {bookings.map((booking, id) => (
          <li key={id}>
            <p>Name: {booking.name}</p>
            <p>Order Date: {booking.orderDate}</p>
            <p>Check-In: {booking.checkIn}</p>
            <p>Check-Out: {booking.checkOut}</p>
            <p>Special Request: {booking.specialRequest}</p>
            <p>Room Type: {booking.room_type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};



