import React from 'react';

const Table = () => {
  // Sample data for the table
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 14.99 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 9.99 },
  ];

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
