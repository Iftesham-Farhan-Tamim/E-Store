import React from 'react'
import Slider from './Slider'
import styles from "@/styles/home/hero.module.css";
import Container from '../Container';

export default function HeroSection() {
  return (
    <Container>
      <section className={`${styles.hero} flex flex-col lg:flex-row items-center gap-8 lg:gap-0`}>
        {/* Text Section */}
        <div className={`${styles.textSection} text-gray-700 w-full lg:w-1/2 px-4 lg:px-0`}>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap'>
            One stop solution <span className='text-pink-500'>E-Store</span></h1>
          <p className='text-sm sm:text-base md:text-lg whitespace-nowrap'>
            Discover the latest headphones, earphones, mobiles, tablets etc.
          </p>
          <p className='text-sm sm:text-base md:text-lg'>Exclusive deals just for you!</p>
          <button className={`${styles.ctaButton} mt-4`}>Shop Now</button>
        </div>
        {/* Image Slider Section */}
        <div className='w-full lg:w-1/2'>
          <Slider />
        </div>
      </section>
    </Container>
  )
}