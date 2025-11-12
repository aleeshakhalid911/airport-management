import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers([...users, user]);

  const updateUser = (index, updatedUser) => {
    const newUsers = [...users];
    newUsers[index] = updatedUser;
    setUsers(newUsers);
  };

  const deleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
