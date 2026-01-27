import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const loadBookings = () => {
      try {
        const stored = JSON.parse(
          localStorage.getItem("bookings") || "[]"
        );
        setBookings(stored);
      } catch {
        setBookings([]);
      }
    };

    loadBookings();

    // 👇 runs again after Cypress reload
    window.addEventListener("focus", loadBookings);

    return () => {
      window.removeEventListener("focus", loadBookings);
    };
  }, []);

  return (
    <div>
      <h1>My Bookings</h1>

      <div id="bookings">
        {bookings.map((b, i) => (
          <h3 key={i}>{b.hospital}</h3>
        ))}
      </div>
    </div>
  );
}
