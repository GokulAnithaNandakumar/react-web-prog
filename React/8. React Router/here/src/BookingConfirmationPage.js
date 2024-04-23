import React from 'react';
import { Link } from 'react-router-dom';

function BookingConfirmationPage() {
  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Your booking has been confirmed!</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default BookingConfirmationPage;
