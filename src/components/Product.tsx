import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

export function Product(props: ProductProps) {
  
  
  return (
    <div
      className="border px-2 px-4 flex flex-col items-center mb-2"
    >
      Product!
    </div>
  )
}