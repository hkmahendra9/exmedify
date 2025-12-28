import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>XMedify</h2>

      <div className="nav-links">
        <span>Find Doctors</span>
        <span>Hospitals</span>
        <span>Medicines</span>
        <span onClick={() => navigate("/my-bookings")}>
          My Bookings
        </span>
      </div>
    </nav>
  );
}
