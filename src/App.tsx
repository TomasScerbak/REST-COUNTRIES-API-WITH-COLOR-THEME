import { Fragment, useEffect, useState } from "react";
import fetchCountriesAPI from "./services/CountriesAPI";

type CountryData = {
  name: {
    common: string;
  };
  population: string;
  region: string;
  capital: string[];
  flags: {
    svg: string;
  };
}[];

function App() {
  const [countries, setCountries] = useState<CountryData>();
  console.log(countries?.map((country) => console.log(country)));

  useEffect(() => {
    fetchCountriesAPI().then((data) => {
      setCountries(data);
    });
  }, []);
  return (
    <Fragment>
      {countries?.map((country, id) => (
        <div key={id}>
          <h1>{country.name.common}</h1>
          <p>{country.population}</p>
          <p>{country.region}</p>
          <p>{country.capital}</p>
          <img src={country.flags.svg} alt="" />
        </div>
      ))}
    </Fragment>
  );
}

export default App;
