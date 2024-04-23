import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage';
import EventSelectionPage from './EventSelectionPage';
import BookingConfirmationPage from './BookingConfirmationPage';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/event-selection" element={<EventSelectionPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
