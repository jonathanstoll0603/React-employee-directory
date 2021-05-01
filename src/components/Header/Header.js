import React from "react";
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-div">
        <h1>React Employee Directory</h1>
        <h5>Click on carrets to filter by heading or use the search box to lookup employee by name.</h5>
      </div>
    </header>
  );
}

export default Header;