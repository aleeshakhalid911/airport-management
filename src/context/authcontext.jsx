import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function
  const login = (email, password) => {
    // For now, allow any non-empty input as valid
    if (email && password) {
      setUser({ email }); // Store logged-in user
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
