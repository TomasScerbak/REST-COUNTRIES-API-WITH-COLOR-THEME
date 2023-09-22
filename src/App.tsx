import { Fragment, useEffect, useState } from "react";

import Card from "./components/UI/Card";

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
        <Card
          image={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          key={id}
        />
      ))}
    </Fragment>
  );
}

export default App;
