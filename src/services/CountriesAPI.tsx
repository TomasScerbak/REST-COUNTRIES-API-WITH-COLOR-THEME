import axios from "axios";

let URL = "https://restcountries.com/v3.1/all?fields=name,flags`";

const fetchCountriesAPI = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log("Error from API", error);
  }
};

export default fetchCountriesAPI;
