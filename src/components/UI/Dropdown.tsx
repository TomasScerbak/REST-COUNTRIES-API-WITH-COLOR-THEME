import { useState } from "react";

const Dropdown = () => {
  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen(!open);
  };

  return (
    <div onClick={handleOpen}>
      FilterByRegion
      {open ? (
        <div>
          <ul>
            <li>Option1</li>
            <li>Option2</li>
            <li>Option3</li>
            <li>Option4</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
