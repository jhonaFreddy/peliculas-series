"use client";

import React from 'react';
import Product from './Product';

export default function ProductList({ products }) {
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {products.map((product) => (
        <Product
          key={product.title} 
          title={product.title} 
          image={product.images['Poster Art'].url} 
          programType={product.programType} 
        />
      ))}
    </div>
  );
}
