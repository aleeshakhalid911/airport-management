import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  // Add a booking
  const addBooking = (user, ticket) => {
    setBookings([...bookings, { user, ticket }]);
  };

  // Remove a booking
  const removeBooking = (index) => {
    const newBookings = [...bookings];
    newBookings.splice(index, 1);
    setBookings(newBookings);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingContext.Provider>
  );
};
