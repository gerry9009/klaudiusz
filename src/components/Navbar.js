import React, { useEffect, useRef, useState } from "react";

import { Link } from "gatsby-link";

import {
  navbar,
  dropdown,
  current,
  show_dropdown,
  hide_dropdown,
} from "../styles/navbar.module.css";
import { graphql } from "gatsby";

const Navbar = ({ data, href }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  //TODO: KI KELL MÉG TALÁLNI HOGYAN TUDOM A JSON-T BEIMPORTÁLNI
  const pages = {
    dropdown: [
      {
        path: "/design/bathroom/",
        name: "Fürdőszoba",
      },
      {
        path: "/design/bedroom/",
        name: "Hálószoba",
      },
      {
        path: "/design/kitchen/",
        name: "Konyha",
      },
      {
        path: "/design/livingroom/",
        name: "Nappali",
      },
    ],
    home: {
      path: "/",
      name: "Főoldal",
    },
    about: {
      path: "/about/",
      name: "Rólam",
    },
    contact: {
      path: "/contact/",
      name: "Kapcsolat",
    },
  };

  const wrapperRef = useRef(null);

  //https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
  useEffect(() => {
    const handleClickOutsideDropdown = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setToggleDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDropdown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, [toggleDropdown]);

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const Dropdown = () => {
    return (
      <div className={dropdown}>
        <button onClick={handleToggleDropdown}>
          Referenciák {toggleDropdown ? "<" : ">"}
        </button>
        <ul
          className={toggleDropdown ? show_dropdown : hide_dropdown}
          ref={wrapperRef}
        >
          {pages.dropdown.map((page) => {
            return (
              <li
                className={page.path === href ? current : undefined}
                key={page.path}
              >
                <Link to={page.path}>{page.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <nav className={navbar}>
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
    </nav>
  );
};

export const query = graphql`
  query MyQuery {
    allFile(filter: { extension: { regex: "/(json)/" } }) {
      edges {
        node {
          childDataJson {
            pages {
              about {
                name
                path
              }
              contact {
                name
                path
              }
              dropdown {
                name
                path
              }
              home {
                name
                path
              }
            }
          }
        }
      }
    }
  }
`;

export default Navbar;

// pages {
//     about {
//       name
//       path
//     }
//     contact {
//       name
//       path
//     }
//     dropdown {
//       name
//       path
//     }
//     home {
//       name
//       path
//     }
//   }
