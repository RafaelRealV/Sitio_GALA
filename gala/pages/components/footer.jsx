import Link from "next/link"
import styles from "./components.module.css"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContenedor}>
        <div className={styles.footerSeccion}>
          <h4>Nosotros</h4>
          <p>Información sobre la empresa, misión, visión y valores.</p>
        </div>

        <div className={styles.footerSeccion}>
          <h4>Navegación</h4>
          <ul>
            <li>
              <Link href="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/about">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/services">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerSeccion}>
          <h4>Síguenos</h4>
          <ul className={styles.footerSocial}>
            <li>
              <Link href="#">
              <Image 
              src="/images/facebook.png"
              width={40}
              height={40}
              />
              </Link>

            </li>
            <Link href="#">
              <Image 
              src="/images/insta.png"
              width={40}
              height={40}
              />
              </Link>
            <li>
            <Link href="#">
              <Image 
              src="/images/twiter.png"
              width={40}
              height={40}
              />
              </Link>
              </li>
            <li>
              </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
