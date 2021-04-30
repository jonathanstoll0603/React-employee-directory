import React from "react";

function SearchBar(props) {
  return (
    <form className="search">
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
  );
}

export default SearchBar;
