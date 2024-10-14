import styles from "./components.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbarmain}>
      <Link className="navbarlogo" onClick={() => setIsOpen()} href="/">
        <Image
          src="/images/LOGO_GALA.png"
          width={80}
          height={62}
        />
      </Link>
      <ul className={styles.navbarmenu}>
        <li>
          <Link className={styles.navbarlink} href="/Catalogo">
            Catalogo
          </Link>
        </li>
        <li>
          <Link className={styles.navbarlink} href="/Categorias">
            categoria
          </Link>
        </li>
        <li>
          <Link className={styles.navbarlink} href="/services">
            Informacion
          </Link>
        </li>
        <li>
          <Link className={styles.navbarlink} href="/contact">
            contacto
          </Link>
        </li>
      </ul>

      <div className="navbar-toggle" onClick={toggleMenu}>
        <ul className={styles.navbarmenu}>
          <li>
            <div className={styles.searchbar}>
              <input
                type="text"
                placeholder="Buscar..."
                className={styles.searchinput}
              />
              <button >
                <Image
                  src="/images/lupa.ico"
                  width={24}
                  height={24}
                />
              </button>

            </div>
          </li>
          <li>
            <Image
              src="/images/Carrito-compras.ico"
              width={32}
              height={32}
            />
          </li>
          <li>
            <Image
              src="/images/Usuario.ico"
              width={32}
              height={30}
            />
          </li>
        </ul>
      </div>
    </nav>
  )
}
