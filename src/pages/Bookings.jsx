import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { TicketContext } from "../context/TicketContext.jsx";
import { BookingContext } from "../context/BookingContext.jsx";

const Bookings = () => {
  const { users } = useContext(UserContext);
  const { tickets } = useContext(TicketContext);
  const { bookings, addBooking } = useContext(BookingContext);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedTicket, setSelectedTicket] = useState("");

  const handleBook = () => {
    if (selectedUser && selectedTicket) {
      addBooking({ user: selectedUser, ticket: selectedTicket });
      setSelectedUser(""); setSelectedTicket("");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Manage Bookings</h1>

      {/* Booking Form */}
      <div className="mb-6 flex flex-col md:flex-row gap-2">
        <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)} className="p-2 border rounded">
          <option value="">Select User</option>
          {users.map((user, i) => <option key={i} value={user.name}>{user.name}</option>)}
        </select>

        <select value={selectedTicket} onChange={e => setSelectedTicket(e.target.value)} className="p-2 border rounded">
          <option value="">Select Ticket</option>
          {tickets.map((ticket, i) => <option key={i} value={ticket.flightNumber}>{ticket.flightNumber}</option>)}
        </select>

        <button onClick={handleBook} className="bg-yellow-500 text-white p-2 rounded">Book Ticket</button>
      </div>

      {/* Bookings List */}
      <div className="bg-white p-4 rounded shadow">
        {bookings.length === 0 ? (
          <p className="text-gray-500">No bookings yet.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {bookings.map((b, i) => (
              <li key={i} className="py-2 flex justify-between">
                <span>{b.user} booked {b.ticket}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Bookings;
