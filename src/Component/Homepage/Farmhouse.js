
import './FarmHouse.css'
import React, { useState } from 'react';

const FarmhouseBookingComponent = () => {
 

  
  return (
    <div className="farmhouse-booking-container">
      <h2>Book Your Farmhouse</h2>
      <form className="booking-form">
        <input
          type="date"
          name="checkIn"
          id="checkIn"
          required
        />
        <input
          type="date"
          name="checkOut"
          id="checkOut"
          required
        />
        <input
          type="number"
          name="guests"
          id="guests"
          placeholder="Number of Guests"
          required
        />
        
        <button type="submit">Search</button>
      </form>


      
    </div>
  );
};

export default FarmhouseBookingComponent;









