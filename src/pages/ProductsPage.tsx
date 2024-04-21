import { ModalContext } from '../context/modalContext';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { useProduct } from '../hooks/products';
import { IProduct } from '../models';
// import { ModalContext } from './context/modalContext';
import { useContext } from 'react';

export function ProductsPage() {

  const { loading, error, products, addProduct } = useProduct()
  const {modal, openModal, closeModal} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    closeModal()
    addProduct(product)
  }
  
  return (
    <div className='container mx-auto max-w-2xl pt-5'>

      { loading && <Loader /> }
      {error && <ErrorMessage error={error} />}
      
      { products.map(product => <Product key={product.id} product={product} />) }
      
      {modal && <Modal title='Create new product' onClose={() => closeModal}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}

      <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-6 py-2'
        onClick={openModal}
      >+</button>
    </div>
  );
}