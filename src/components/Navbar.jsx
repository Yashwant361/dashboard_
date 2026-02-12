import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="flex gap-6">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leads">Leads</Link>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
