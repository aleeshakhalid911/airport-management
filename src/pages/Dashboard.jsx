import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { TicketContext } from "../context/TicketContext.jsx";
import { BookingContext } from "../context/BookingContext.jsx";

const Dashboard = () => {
  const { users } = useContext(UserContext);
  const { tickets } = useContext(TicketContext);
  const { bookings } = useContext(BookingContext);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-2">Welcome to Airport Management System</h1>
      <p className="text-gray-700 text-lg mb-6">
        Select an option below to manage the system.
      </p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-gray-600 font-semibold mb-2">Users</h3>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-gray-600 font-semibold mb-2">Tickets</h3>
          <p className="text-2xl font-bold">{tickets.length}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <h3 className="text-gray-600 font-semibold mb-2">Bookings</h3>
          <p className="text-2xl font-bold">{bookings.length}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/users" className="bg-blue-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-blue-600 transition">Manage Users</Link>
        <Link to="/tickets" className="bg-green-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-green-600 transition">Manage Tickets</Link>
        <Link to="/bookings" className="bg-yellow-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-yellow-600 transition">Manage Bookings</Link>
        <Link to="/flights" className="bg-purple-500 text-white p-4 rounded-lg text-center font-semibold hover:bg-purple-600 transition">View Flights</Link>
      </div>
    </div>
  );
};

export default Dashboard;
