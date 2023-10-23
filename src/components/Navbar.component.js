import React, { useRef, useState } from "react";

import { Link } from "gatsby-link";

import { v4 as uuidv4 } from "uuid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import useClickOutside from "../hooks/useClickOutside";
import useWindowWith from "../hooks/useWindowWith";

import {
  tab_bar,
  dropdown,
  current,
  show_dropdown,
  hide_dropdown,
  hamburger,
  hamburger_button,
  active,
} from "../styles/navbar.module.css";

import pages from "../data/pages.js";

const Navbar = ({ href }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  const wrapperRef = useRef(null);

  const windowWith = useWindowWith(() => setToggleDropdown(false));
  useClickOutside(wrapperRef, toggleDropdown, () => setToggleDropdown(false));

  if (windowWith > 768 && toggleHamburger) {
    setToggleHamburger(false);
  }

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleToggleHamburger = () => {
    setToggleHamburger(!toggleHamburger);
  };

  const DropdownItem = () => {
    const dropdownClass = toggleDropdown ? show_dropdown : hide_dropdown;

    const Pages = pages.dropdown.map((page) => {
      return (
        <li className={page.path === href ? current : undefined} key={uuidv4()}>
          <Link to={page.path}>{page.name}</Link>
        </li>
      );
    });

    if (windowWith > 768) {
      return (
        <ul className={dropdownClass} ref={wrapperRef}>
          {Pages}
        </ul>
      );
    } else {
      return <ul>{Pages}</ul>;
    }
  };

  const DropdownButton = () => {
    if (windowWith > 768) {
      return (
        <button onClick={handleToggleDropdown}>
          Referenciák{" "}
          {toggleDropdown ? (
            <FontAwesomeIcon icon={faAngleDown} rotation={180} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}
        </button>
      );
    } else {
      return (
        <button>
          Referenciák <FontAwesomeIcon icon={faAngleDown} />
        </button>
      );
    }
  };

  const Dropdown = () => {
    return (
      <div className={dropdown}>
        <DropdownButton />
        <DropdownItem />
      </div>
    );
  };

  const NavigationBar = () => {
    return (
      <ul>
        <li className={pages.home.path === href ? current : undefined}>
          <Link to={pages.home.path}>{pages.home.name}</Link>
        </li>
        <li className={pages.about.path === href ? current : undefined}>
          <Link to={pages.about.path}>{pages.about.name}</Link>
        </li>
        <li>
          <Dropdown />
        </li>
        <li className={pages.contact.path === href ? current : undefined}>
          <Link to={pages.contact.path}>{pages.contact.name}</Link>
        </li>
      </ul>
    );
  };

  const HamburgerButton = () => {
    const hamburgerClass = `${hamburger_button} ${
      toggleHamburger ? active : undefined
    }`;

    return (
      <button className={hamburgerClass} onClick={handleToggleHamburger}>
        <span></span>
      </button>
    );
  };

  const HamburegerMenu = () => {
    return (
      <>
        <HamburgerButton />
        {toggleHamburger && <NavigationBar />}
      </>
    );
  };

  return (
    <nav className={windowWith < 768 ? hamburger : tab_bar}>
      {windowWith < 768 ? <HamburegerMenu /> : <NavigationBar />}
    </nav>
  );
};

export default Navbar;
