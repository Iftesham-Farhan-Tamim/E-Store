import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from "@/styles/product.module.css";

export default function ProductBox({ product }) {
  return (
    <div className={`${styles.card} bg-white p-4 m-1 rounded-lg shadow-lg`}>
      <Link href={"/store/product-details/" + product.id}>
        <Image
          width={300}
          height={150}
          alt={"product-" + product.id}
          // src={'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg'}
          src={product.image}
          className={`${styles.productImage} w-full h-48 object-cover rounded-md`}
        />

      </Link>
      <div className='mt-4'>
        <h3 className='text-sm font-semibold text-gray-800 line-clamp-3'>
          {/* Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver) */}
          {product.title}
        </h3>
        <p className='text-gray-900 font-semibold mt-2'>
          ${product.price}
        </p>
        <button className='mt-4 bg-pink-500 text-white px-4 py-2 
        rounded hover:bg-pink-600 transition duration-300'>
          Buy Now
        </button>
      </div>
    </div>
  )
}
