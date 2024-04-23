import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Ticket Booking System</h1>
      <Link to="/event-selection">Select Event</Link>
    </div>
  );
}

export default HomePage;
