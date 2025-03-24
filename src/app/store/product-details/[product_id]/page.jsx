import Container from '@/components/Container';
import { getProducts } from '@/library'
import React from 'react'
import styles from "@/styles/product-details/ProductDetail.module.css"

export default async function ProductDetails({ params }) {
  const product = await getProducts(params.product_id);
  return (
    <Container className="col-span-4">
      <div className='py-12 px-4'>
        <div className='flex flex-col md:flex-row items-start bg-white'>
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className={`${styles.productImaga} w-full md:w-1/2 object-cover`}
          />

          {/* Product Details */}
          <div className='p-6 md:w-1/2'>
            <h1 className='text-xl font-semibold text-gray-800 mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-4 h-[150px] overflow-clip'>{product.description}</p>
            <p className='text-lg font-semibold text-gray-900 mb-4'>Price: ${product.price}</p>
            {product.discount && (
              <p className='text-md text-red-500 mb-4'>Discount: {product.discount}% off</p>
            )}

            <ul className='text-gray-700 space-y-2'>
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Model:</strong> {product.model}</li>
              <li><strong>Color:</strong> {product.color}</li>
              <li><strong>Category:</strong> {product.category}</li>
            </ul>

            <button className='mt-6 px-6 py-3 bg-blue-500 text-white font-semibold 
            rounded-lg cursor-pointer hover:bg-blue-600'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
