import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Splash from "./pages/Splash.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";
import Tickets from "./pages/Tickets.jsx";
import Bookings from "./pages/Bookings.jsx";
import FlightView from "./pages/FlightView.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Initial splash screen */}
        <Route path="/" element={<Splash />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* CRUD Pages */}
        <Route path="/users" element={<Users />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/flightview" element={<FlightView />} />
      </Routes>
    </Router>
  );
}

export default App;
