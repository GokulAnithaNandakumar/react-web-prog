import React from 'react';
import { Link } from 'react-router-dom';

function EventSelectionPage() {
  return (
    <div>
      <h1>Select Event</h1>
      <Link to="/booking-confirmation">Confirm Booking</Link>
    </div>
  );
}

export default EventSelectionPage;
