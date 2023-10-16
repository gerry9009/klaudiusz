import React, { useState } from "react";

import { Link } from "gatsby-link";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleDropdown((prev) => !prev);
    console.log("click");
  };
  const Dropdown = () => {
    return (
      <div>
        <button onClick={handleToggleDropdown}>Referenciák</button>
        {toggleDropdown && (
          <ul>
            <li>
              <Link to={"/design/bathroom"}>Fürdőszoba</Link>
            </li>
            <li>
              <Link to={"/design/bedroom"}>Hálószoba</Link>
            </li>
            <li>
              <Link to={"/design/kitchen"}>Konyha</Link>
            </li>
            <li>
              <Link to={"/design/livingroom"}>Nappali</Link>
            </li>
            <li>
              <Link to={"/design/outside"}>Udvar</Link>
            </li>
            <li>
              <Link to={"/design/others"}>Egyéb</Link>
            </li>
          </ul>
        )}
      </div>
    );
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Főoldal</Link>
        </li>
        <li>
          <Link to={"/about"}>Rólam</Link>
        </li>
        <li>
          <Dropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
