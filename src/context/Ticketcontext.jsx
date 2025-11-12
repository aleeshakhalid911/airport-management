import { createContext, useState } from "react";

export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);
  
  // New: bookings array
  const [bookings, setBookings] = useState([]);

  const addTicket = (ticket) => setTickets([...tickets, ticket]);

  const updateTicket = (index, updated) => {
    const temp = [...tickets];
    temp[index] = updated;
    setTickets(temp);
  };

  const deleteTicket = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
    // Optional: also remove any bookings for deleted ticket
    setBookings(bookings.filter(b => b.ticketIndex !== index));
  };

  // New: bookTicket function
  const bookTicket = (ticketIndex, userIndex) => {
    setBookings([...bookings, { ticketIndex, userIndex }]);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        bookings, // <-- make sure this is exposed
        addTicket,
        updateTicket,
        deleteTicket,
        bookTicket, // <-- make sure this is exposed
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
