"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/styles/home/hero.module.css";
import Image from "next/image";

const images = [
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg',
  'https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1694100438525-51Prg4Smx-L._SL1500_.jpg'
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(
    () => {
      const interval = setInterval(
        () => {
          setCurrentSlide(
            (currentValue) => {
              if (currentValue == images.length - 1) {
                return 0;
              } else {
                return currentValue + 1;
              }
            }
          );
        }, 3000
      )

      return () => {
        clearInterval(interval);
      }
    }, []
  )

  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <Image
            alt={`Slider ${index + 1}`}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
            src={image}
            key={index}
            fill
          />
        ))}
      </div>
    </div>
  )
}



// useEffect(() => {
//   const interval = setInterval(() => {
//     if (currentSlide == images.length - 1) {
//       setCurrentSlide(0);
//     } else {
//       setCurrentSlide(prevValue => prevValue + 1);
//     }
//   }, 3000
//   )
// }, []
// )



// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentSlide((prevValue) => (prevValue === images.length - 1 ? 0 : prevValue + 1));
//   }, 4000); // Increased to 3000ms (3 seconds) for a better effect.

//   return () => clearInterval(interval); // ✅ Cleanup function to prevent multiple intervals.
// }, [currentSlide]); // ✅ Added dependency to update correctly.


// useEffect(
//   () => {
//     const interval = setInterval(
//       () => {
//         setCurrentSlide(
//           (currentValue) => {
//             if (currentValue == images.length - 1) {
//               return 0;
//             } else {
//               return currentValue + 1;
//             }
//           }
//         );
//       }, 2000
//     )

//     return () => {
//       clearInterval(interval);
//     }
//   }, []
// )