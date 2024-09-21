import React from 'react';

const Products = () => {
  const productList = [
    { id: 1, name: 'Product 1', price: '₹10' },
    { id: 2, name: 'Product 2', price: '₹20' },
    { id: 3, name: 'Product 3', price: '₹30' },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;