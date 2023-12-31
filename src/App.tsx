import { Fragment, useEffect, useState } from "react";

import Header from "./components/UI/Header";
import InputsContainer from "./components/UI/InputsContainer";
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

const App = () => {
  const [cardClicked, setCardClicked] = useState(false);
  const [countries, setCountries] = useState<CountryData>();
  const [continent, setContinent] = useState("");
  const [searchedValue, setSearchedValue] = useState("");

  console.log(cardClicked);

  //function that is watching whether card component was clicked
  //to show country details
  const isCardClicked = () => {
    setCardClicked(!cardClicked);
  };

  // function that is filtering countries by continent
  const countriesByContinent = countries?.filter(
    (country) => country.region === continent
  );

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
      <InputsContainer>
        <SearchBar
          value={searchedValue}
          searchInputHandler={searchInputHandler}
        />
        <Dropdown handleContinent={handleContinent} continent={continent} />
      </InputsContainer>
      <Container>
        <>
          {searchedValue
            ? countries?.map((country, id) =>
                country.name.common
                  .toLowerCase()
                  .match(searchedValue.toLowerCase()) ? (
                  <Card
                    isCardClicked={isCardClicked}
                    image={country.flags.svg}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    key={id}
                  />
                ) : null
              )
            : null}
        </>
        <>
          {countriesByContinent
            ? countriesByContinent?.map((country, id) => (
                <Card
                  isCardClicked={isCardClicked}
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
        <>
          {countries?.map((country, id) => (
            <Card
              isCardClicked={isCardClicked}
              image={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              key={id}
            />
          ))}
        </>
      </Container>
    </Fragment>
  );
};

export default App;
