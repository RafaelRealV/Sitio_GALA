import Image from "next/image"
import { Children, useState } from "react"
import styles from "./components/components.module.css"

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
      '/images/preparada1.jpeg',
      '/images/preparada2.jpeg',
  ];

  const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
   <div>
    <div>
                <div className={styles.carusel}>
                    <button className={styles.prev} onClick={goToPrevSlide}>
                        &#10094;
                    </button>
                    <div className={styles.caruselImages}>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={` ${index === currentIndex ? 'active' : ''}`}
                            >
                                {index === currentIndex && (
                                    <Image src={image} alt={`Imagen ${index + 1}`} width={1000} height={500} />
                                )}
                            </div>
                        ))}
                    </div>
                    <button className={styles.next} onClick={goToNextSlide}>
                        &#10095;
                    </button>
                </div>
            </div>
            <div className={styles.categoriasPrinc}>
                <div className={styles.divImagePrinc}>
                    <Image
                        src="/images/Machaca.jpeg"
                        width={250}
                        height={200}
                        className={styles.imagecatPric}
                    />

                </div>
                <div>
                <Image
                        src="/images/Carneseca.jpeg"
                        width={250}
                        height={200}
                        className={styles.imagecatPric}
                    />
                </div>
                <div>
                <Image
                        src="/images/preparada2.jpeg"
                        width={250}
                        height={200}
                        className={styles.imagecatPric}
                    />
                </div>
            </div>
            </div>
  )
}