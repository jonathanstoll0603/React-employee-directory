import React from "react";
import TableBody from "../TableBody/TableBody";
import "./Table.css"

function Table(props) {
    return ( 
        <table className="table table-striped table-light table-hover text-center">
            <thead>
                <tr>
                    <th scope="col"><div>Image</div></th>
                    <th scope="col" type="button" onClick={props.handleNameSort}>
                        <div type="button">Name <i className="fas fa-sort"></i></div>
                    </th>
                    <th scope="col"><div>Phone</div></th>
                    <th scope="col" onClick={props.handleEmailSort}>
                        <div type="button">Email <i className="fas fa-sort"></i></div>
                    </th>
                    <th scope="col" type="button" onClick={props.handleDOBSort}>
                        <div type="button">Date of Birth <i className="fas fa-sort"></i></div>
                    </th>
                </tr>
            </thead>  
                {props.results.map((result, index) => (
                    <TableBody key={index} alt={result.name.first + result.name.last} src={result.picture.thumbnail} firstName={result.name.first} lastName={result.name.last} phoneNumber={result.phone} emailAddress={result.email} dob={result.dob.date}/> ))
                }
        </table>
    )
}

export default Table;
