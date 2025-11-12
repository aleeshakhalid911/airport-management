import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Context Providers
import { AuthProvider } from "./context/AuthContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { TicketProvider } from "./context/TicketContext.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";

import "./index.css"; // Tailwind or CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <TicketProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </TicketProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
