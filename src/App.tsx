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
  const [continent, setContinent] = useState("");
  const [searchedValue, setSearchedValue] = useState("");

  // function that is handeling search input
  const searchInputHandler = (event: any) => {
    setSearchedValue(event.target.value);
  };

  // state that is fetching data from countries API
  useEffect(() => {
    fetchCountriesAPI().then((data) => {
      setCountries(data);
    });
  }, []);

  // function that handles state from child dropdown component to parent
  // to see which continent user filtered
  const handleContinent = (event: any) => {
    setContinent(event.target.innerHTML);
  };

  return (
    <Fragment>
      <Header />
      <SearchBar
        value={searchedValue}
        searchInputHandler={searchInputHandler}
      />
      <Dropdown handleContinent={handleContinent} continent={continent} />
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
