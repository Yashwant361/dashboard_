import { useNavigate } from "react-router-dom";
import React from "react";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Admin Login</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
