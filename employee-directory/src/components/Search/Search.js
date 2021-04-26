import React from "react";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employees"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
        {/* <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
