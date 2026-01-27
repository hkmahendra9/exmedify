import { useState } from "react";

export default function HospitalCard({ data }) {
  const [showBooking, setShowBooking] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    if (!date || !time) return;

    let existing = [];
    try {
      existing = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );
    } catch {
      existing = [];
    }

    const newBooking = {
      hospital: data["Hospital Name"].trim().toLowerCase(), // ✅ lowercase for Cypress
      city: data.City,
      state: data.State,
      date,
      time,
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );

    setShowBooking(false);
  };

  return (
    <div className="hospital-card">
      <h3>{data["Hospital Name"]}</h3>
      <p>{data.Address}</p>

      <button type="button" onClick={() => setShowBooking(true)}>
        Book FREE Center Visit
      </button>

      {showBooking && (
        <div className="booking-section">
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />

          <p>Today</p>
          <p>Morning</p>
          <button onClick={() => setTime("09:00 AM")}>09:00 AM</button>
          <button onClick={() => setTime("10:00 AM")}>10:00 AM</button>

          <p>Afternoon</p>
          <button onClick={() => setTime("01:00 PM")}>01:00 PM</button>
          <button onClick={() => setTime("03:00 PM")}>03:00 PM</button>

          <p>Evening</p>
          <button onClick={() => setTime("06:00 PM")}>06:00 PM</button>
          <button onClick={() => setTime("07:00 PM")}>07:00 PM</button>

          <button onClick={handleBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
}
