import { useContext } from "react";
import { TicketContext } from "../context/TicketContext.jsx";
import { BookingContext } from "../context/BookingContext.jsx"; // Only once!

const FlightView = () => {
  const { tickets } = useContext(TicketContext);
  const { bookings } = useContext(BookingContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Flight View</h1>
      {tickets.map((ticket, index) => {
        const bookedUsers = bookings
          .filter((b) => b.ticket === ticket.name)
          .map((b) => b.user)
          .join(", ");

        return (
          <div key={index} className="border p-4 mb-2 rounded shadow">
            <h2 className="font-semibold">{ticket.name}</h2>
            <p>Time: {ticket.time}</p>
            <p>Gate: {ticket.gate}</p>
            <p>Status: {ticket.status}</p>
            <p>Booked by: {bookedUsers || "No bookings yet"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FlightView;
