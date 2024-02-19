import React, { useState } from 'react';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function PersonalInfo() {
  const [data, setData] = useState(Data);

  return (
    <>
      <div className="container">
        <h1>Personal Information</h1>
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
