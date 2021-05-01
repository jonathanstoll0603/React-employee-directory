import React from "react";
import "./Search.css"

function SearchBar(props) {
  return (
    <div className="searchbar-div">
      <form className="search search-form">
        <div className="form-group">
          <input
            value={props.search}
            onChange={props.handleNameSearch}
            name="employees"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Search By Name"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
