import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="employee_home"
            src="https://www.codester.com/static/uploads/items/000/028/28925/icon.png"
            alt="EMS Home"
          />
        </Link>
      </div>
      <nav className="nav_bar ">
        <Link to="/">Home</Link>
        <Link to="/add-employee">Add Employee</Link>
      </nav>
    </header>
  );
};

export default Header;
