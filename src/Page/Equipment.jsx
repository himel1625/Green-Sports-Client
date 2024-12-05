import React from 'react';
import { Helmet } from 'react-helmet-async';

const Equipment = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | Equipment</title>
      </Helmet>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name  </th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
              </tr>   
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Equipment;
