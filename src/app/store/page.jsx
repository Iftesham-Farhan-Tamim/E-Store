import ProductBox from '@/components/ProductBox'
import { getProducts } from '@/library'
import React from 'react'

export default function StorePage() {
  return (
    <ProductListing />
  )
}



const ProductListing = async () => {
  const data = await getProducts();
  return <div className='col-span-4 grid grid-cols-3 gap-5 mt-3'>
    {
      data.map(
        (d) => <ProductBox product={d} key={"product-" + d.id} />
      )
    }
  </div>
}