import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext.jsx";

const Users = () => {
  const { users, addUser, editUser, deleteUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    addUser({ name, email });
    setName(""); setEmail("");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>

      <div className="mb-6">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
          className="p-2 border rounded mr-2"/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
          className="p-2 border rounded mr-2"/>
        <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">Add User</button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span>{user.name} ({user.email})</span>
                <div>
                  <button onClick={() => editUser(index)} className="text-yellow-500 mr-2">Edit</button>
                  <button onClick={() => deleteUser(index)} className="text-red-500">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;
