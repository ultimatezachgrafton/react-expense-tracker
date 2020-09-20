import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ExpenseTable(props) {

  const rows = [];

  for (let i = 1; i < props.items.length; i++) {
    let item = props.items[i];
    rows.unshift(<tr key={item.id}>
      <td>${item.amount}</td>
      <td>{item.paymentType}</td>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.location}</td>
      <td><Button variant="outline-light" id="btn-del" onClick={(e) => props.handleDelete(item.id)}>Delete</Button></td>
    </tr>);
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Payment Type</th>
          <th>Date</th>
          <th>Description</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
}

export default ExpenseTable