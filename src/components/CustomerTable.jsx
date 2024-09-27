import React from 'react';
import '../styles/DataFetcher.css';

const CustomerTable = ({ data }) => {
  return (
    <div className="table-container">
        <h1>Customer Data</h1> {/* Moved heading here */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.name}</td>
              <td>{customer.age}</td>
              <td>{customer.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
