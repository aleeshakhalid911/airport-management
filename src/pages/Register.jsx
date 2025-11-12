import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { users, addUser } = useContext(AuthContext); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email) return alert("Enter name and email");
    if (users.some(u => u.email === email)) return alert("Email already exists");
    addUser({ name, email });
    alert("Registered successfully!");
    navigate("/login");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
