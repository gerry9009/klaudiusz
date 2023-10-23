import React from "react";

import { Link } from "gatsby-link";

import React from "react";

const Navigation = ({ location }) => {
  console.log(location);

  return (
    <div>
      <p>Ez is érdekelhet</p>
      <Link>Fürdőszoba</Link>
      <Link>Fürdőszoba</Link>
    </div>
  );
};

export default Navigation;
