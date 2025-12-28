// src/components/StateCitySearch.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StateCitySearch() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then(res => res.json())
      .then(setStates);
  }, []);

  useEffect(() => {
    if (!selectedState) return;
    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then(res => res.json())
      .then(setCities);
  }, [selectedState]);

  const handleSearch = () => {
    if (!selectedState || !selectedCity) return;
    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <div>
      {/* STATE */}
      <div id="state" style={{ minHeight: "40px" }}>
        <ul>
          {states.map(state => (
            <li
              key={state}
              onClick={() => {
                setSelectedState(state);
                setSelectedCity("");
              }}
            >
              {state}
            </li>
          ))}
        </ul>
      </div>

      {/* CITY */}
      <div id="city" style={{ minHeight: "40px" }}>
        <ul>
          {cities.map(city => (
            <li
              key={city}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      <button id="searchBtn" type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
