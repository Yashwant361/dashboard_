import React from "react";

const LeadTable = ({ users }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Age</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, 10).map(user => (
            <tr key={user.id} className="border-t">
              <td className="p-3">{user.firstName}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;
