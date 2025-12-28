import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>

      {bookings.map((b, i) => (
        <div key={i}>
          {/* EXACT TEXT Cypress EXPECTS */}
          <h3>{b.hospital}</h3>
          <p>{b.city}, {b.state}</p>
          <p>{b.date} - {b.time}</p>
        </div>
      ))}
    </div>
  );
}
