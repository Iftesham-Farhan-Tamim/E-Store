import React from 'react'
import Slider from './Slider'
import styles from "@/styles/home/hero.module.css";
import Container from '../Container';

export default function HeroSection() {
  return (
    <Container>
      <section className={styles.hero}>
        {/* Text Section */}
        <div className={`${styles.textSection} text-gray-700`}>
          <h1 className='whitespace-nowrap'>
            One stop solution <span className='text-pink-500'>E-Store</span></h1>
          <p className='whitespace-nowrap'>
            Discover the latest headphones, earphones, mobiles, tablets etc.
          </p>
          <p>Exclusive deals just for you!</p>
          <button className={styles.ctaButton}>Shop Now</button>
        </div>
        {/* Image Slider Section */}
        <Slider />
      </section>
    </Container>
  )
}
