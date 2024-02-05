import React from "react";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = () => {
  
  return (
    <nav>
      <h1>Note.</h1>
      <Link to={"/add"}><CgAdd /></Link>
    </nav>
  );
};

export default Header;
