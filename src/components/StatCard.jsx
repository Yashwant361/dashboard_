import React from "react";
const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h4 className="text-gray-500">{title}</h4>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;
