import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

export function Product({product}: ProductProps) {
  const [details, setDetails] = useState(false)
  
  const btnBgClassName = details ? 'bg-yellow-300' : 'bg-blue-300'
  const btnClasses = ['py-2 px-4 border', btnBgClassName]
  
  return (
    <div
      className="border px-2 px-4 flex flex-col items-center mb-2"
    >
      <img src={product.image} className="w-1/6" alt={ product.title} />
      <p>{product.title}</p>

      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        {details ? 'Hide details' : 'Show details'}
      </button>
      

      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{ fontWeight: 'bold',}}>{product.rating.rate}</span></p>
      </div>}
      
    </div>
  )
}