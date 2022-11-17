import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function FlagPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(null);

  async function getFlag() {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    console.log(data[0]);
    setFlag(data[0]);
  }

  useEffect(() => {
    getFlag();
  }, []);

  if (!flag) return <div>Loading...</div>;

  return (
    <div className="flag-page">
      <div className="flag-box">
        <img src={flag.flags.png} alt="" />
        <h2>{flag.name.common}</h2>
        <p>Capital: {flag.capital[0]}</p>
        <p>Population: {flag.population}</p>
        <p>Region {flag.region}</p>
        <p>Subregion: {flag.subregion}</p>
        <p>Timezone: {flag.timezones[0]}</p>
        <p>Traffic: {flag.car.side}</p>
        <p>Continent: {flag.continents[0]} </p>
        <p>Demonyms: {flag.demonyms.eng.f}</p>
        <p>Status: {flag.status}</p>
        <p>Start of week: {flag.startOfWeek}</p>

        <button
          onClick={() => {
            navigate("/");
          }}
        >
          &#8629; back
        </button>
      </div>
    </div>
  );
}
