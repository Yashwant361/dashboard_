import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import TrafficChart from "../components/TrafficChart";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 className="text-center mt-10 text-xl">Loading...</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Marketing Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Leads" value={users.length} />
          <StatCard title="Users Age > 25" value={users.filter(u => u.age > 25).length} />
          <StatCard title="Conversion Rate" value="4.2%" />
        </div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow">
          <TrafficChart users={users} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
