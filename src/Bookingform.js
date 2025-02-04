import React, { useState } from 'react';

const Bookingform = () => {
   
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

   
  const handleSubmit = (event) => {
    event.preventDefault();
  
    alert(`Reservation Confirmed!\nName: ${name}\nEmail: ${email}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
    
     
    setName('');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(1);
  };

  return (
    <div className="booking-container">
      <h2>Book a Table at Little Lemon</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Number of Guests:</label>
          <input
            type="number"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit">Reserve Table</button>
      </form>
    </div>
  );
};

export default Bookingform;
