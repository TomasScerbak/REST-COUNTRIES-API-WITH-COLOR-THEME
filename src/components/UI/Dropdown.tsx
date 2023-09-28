import { useState } from "react";

type DropdownProps {
    countries: []
}

const Dropdown = (props: DropdownProps) => {
  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <div onClick={handleOpen}>
      Filter by Region
      {open ? (
        <div>
          <ul>
            {props.countries.map((country) => <li>{country}</li>)}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
