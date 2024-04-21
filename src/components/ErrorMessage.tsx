import { useProduct } from "../hooks/products";
interface ErrorMassageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMassageProps) {

  return (
    <h1 className='text-center text-red-600'>{error}</h1> 
  )
}
