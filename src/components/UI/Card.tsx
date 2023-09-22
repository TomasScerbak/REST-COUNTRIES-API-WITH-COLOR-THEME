type CardProps = {
  image: string;
  name: string;
  population: string;
  region: string;
  capital: string[];
};

const Card = (props: CardProps) => {
  return (
    <div>
      <header>
        <img src={props.image} alt="country flag" />
      </header>
      <div>
        <h1>{props.name}</h1>
        <p>{props.population}</p>
        <p>{props.region}</p>
        <p>{props.capital}</p>
      </div>
    </div>
  );
};

export default Card;
