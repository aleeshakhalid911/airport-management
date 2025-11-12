import { useContext, useState } from "react";
import { TicketContext } from "../context/TicketContext.jsx";

const Tickets = () => {
  const { tickets, addTicket, editTicket, deleteTicket } = useContext(TicketContext);
  const [flightNumber, setFlightNumber] = useState("");
  const [time, setTime] = useState("");
  const [gate, setGate] = useState("");

  const handleAdd = () => {
    addTicket({ flightNumber, time, gate });
    setFlightNumber(""); setTime(""); setGate("");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Manage Tickets</h1>

      {/* Add Ticket Form */}
      <div className="mb-6">
        <input type="text" placeholder="Flight Number" value={flightNumber} onChange={e => setFlightNumber(e.target.value)}
          className="p-2 border rounded mr-2"/>
        <input type="text" placeholder="Time" value={time} onChange={e => setTime(e.target.value)}
          className="p-2 border rounded mr-2"/>
        <input type="text" placeholder="Gate" value={gate} onChange={e => setGate(e.target.value)}
          className="p-2 border rounded mr-2"/>
        <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded">Add Ticket</button>
      </div>

      {/* Ticket List */}
      <div className="bg-white p-4 rounded shadow">
        {tickets.length === 0 ? (
          <p className="text-gray-500">No tickets found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {tickets.map((ticket, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{ticket.flightNumber} | {ticket.time} | Gate: {ticket.gate}</span>
                <div>
                  <button onClick={() => editTicket(index)} className="text-yellow-500 mr-2">Edit</button>
                  <button onClick={() => deleteTicket(index)} className="text-red-500">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tickets;
