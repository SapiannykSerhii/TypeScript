import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
      <Product product={products[3]} />
      <Product product={products[4]} />
    </div>
  );
}

export default App;
