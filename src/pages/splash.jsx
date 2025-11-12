import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/login"), 2000);
  }, [navigate]);

  return <div className="flex items-center justify-center h-screen bg-blue-500 text-white text-4xl font-bold">Welcome to Airport Management</div>;
};

export default Splash;
