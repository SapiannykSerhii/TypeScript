import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProduct } from './hooks/products';

function App() {
  const { loading, error, products } = useProduct()
  
  return (
    <div className='container mx-auto max-w-2xl pt-5'>

      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      
      { products.map(product =>  <Product key={product.id} product={product} />) }
    </div>
  );
}

export default App;
