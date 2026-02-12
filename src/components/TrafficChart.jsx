import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const TrafficChart = ({ users }) => {
  const chartData = users.slice(0, 6).map(user => ({
    name: user.firstName,
    value: user.age
  }));

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">
        User Age Analytics
      </h3>

      {/* IMPORTANT: Give fixed height */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TrafficChart;
