import React from "react";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">
          <img alt={props.alt} src={props.src} className="img-fluid" />
        </th>
        <td>{props.firstName} {props.lastName}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.emailAddress}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
  )
}

export default TableBody;