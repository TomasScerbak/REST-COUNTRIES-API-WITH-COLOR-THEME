import { Fragment, useEffect, useState } from "react";

import Header from "./components/UI/Header";
import SearchBar from "./components/UI/SearchBar";
import Dropdown from "./components/UI/Dropdown";
import Container from "./components/UI/Container";
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
  const [searchedValue, setSearchedValue] = useState("");

  const searchInputHandler = (event: any) => {
    setSearchedValue(event.target.value);
  };

  useEffect(() => {
    fetchCountriesAPI().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <SearchBar
        value={searchedValue}
        searchInputHandler={searchInputHandler}
      />
      <Dropdown />
      <Container>
        <>
          {countries?.map((country, id) =>
            country.name.common
              .toLowerCase()
              .match(searchedValue.toLowerCase()) ? (
              <Card
                image={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
                key={id}
              />
            ) : null
          )}
        </>
        <>
          {!searchedValue
            ? countries?.map((country, id) => (
                <Card
                  image={country.flags.svg}
                  name={country.name.common}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  key={id}
                />
              ))
            : null}
        </>
      </Container>
    </Fragment>
  );
}

export default App;
