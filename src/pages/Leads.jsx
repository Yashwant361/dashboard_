import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LeadTable from "../components/LeadTable";

const Leads = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">All Leads</h1>
        <LeadTable users={users} />
      </div>
    </>
  );
};

export default Leads;

