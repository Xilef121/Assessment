import React from 'react';

function Dashboard({ user }) {
  if (!user) return <div>Loading user data...</div>;

  const formattedDate = new Date(user.date_of_birth).toLocaleDateString('en-CA');

  return (
    <div>
      <h2>User Dashboard</h2>
      <p><strong>NRIC:</strong> {user.nric}</p>
      <p><strong>First Name:</strong> {user.first_name}</p>
      <p><strong>Last Name:</strong> {user.last_name}</p>
      <p><strong>Date of Birth:</strong> {formattedDate}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
    </div>
  );
}

export default Dashboard;
