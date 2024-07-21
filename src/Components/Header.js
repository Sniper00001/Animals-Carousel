import React from "react";
import '../App.css';
const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <a href="/">Home</a>
          <a href="/contacts">Contacts</a>
          <a href="/info">Info</a>
        </nav>
      </header>
    </>
  );
};

export default Header;