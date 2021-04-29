import React from "react";
import TableBody from "../TableBody/TableBody";
import "./Table.css"

function Table(props) {
    return ( 
        <table className="table table-striped table-light table-hover">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col"> Name
                    <button type="button" className="btn btn-light px-2" onClick={props.handleNameSort}><i className="fas fa-caret-down"></i></button>
                    </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB (YYYY-MM-DD)</th>
                </tr>
            </thead>  
                {props.results.map((result, index) => (
                <TableBody key={index} alt={result.name.first + result.name.last} src={result.picture.thumbnail} firstName={result.name.first} lastName={result.name.last} phoneNumber={result.phone} emailAddress={result.email} dob={result.dob.date}/>
                ))}
        </table>
    )
}

export default Table;
