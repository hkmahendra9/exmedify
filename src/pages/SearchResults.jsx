import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HospitalCard from "../components/HospitalCard";

export default function SearchResults() {
  const [centers, setCenters] = useState([]);

  const query = new URLSearchParams(useLocation().search);
  const state = query.get("state");
  const city = query.get("city");

  useEffect(() => {
    if (!state || !city) return;

    fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      .then(res => res.json())
      .then(data => setCenters(data))
      .catch(console.error);
  }, [state, city]);

  return (
    <div>
      <h1>
        {centers.length} medical centers available in {city.toLowerCase()}
      </h1>

      {centers.map(center => (
        <HospitalCard
          key={center["Hospital Name"]}
          data={center}
        />
      ))}
    </div>
  );
}
