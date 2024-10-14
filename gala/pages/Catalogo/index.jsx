import Image from "next/image"
import styles from "./catalogoStyles.module.css"


export default function Catalogo() {
    return (
        <div>
        <div className={styles.divpric}>
            <div className={styles.divImage}>
                <Image
                    src="/images/Carneseca.jpeg"
                    width={350}
                    height={500}
                />
                 <div className={styles.text}>
                    <h3>Carnes Secas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Recusandae debitis nostrum praesentium 
                        tempore numquam perferendis eius maxime veritatis officia, dolorum sed in voluptates
                         dolore nobis nesciunt, repellendus molestiae, rerum earum.</p>
                </div>
            </div>
            <div className={styles.divImage}>
            <Image
                    src="/images/Machaca.jpeg"
                    width={350}
                    height={500}
                />
                 <div className={styles.text}>
                    <h3>Macahcas</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Recusandae debitis nostrum praesentium 
                        tempore numquam perferendis eius maxime veritatis officia, dolorum sed in voluptates
                         dolore nobis nesciunt, repellendus molestiae, rerum earum.</p>
                </div>
            </div>
            <div className={styles.divImage}>
            <Image
                    src="/images/preparada2.jpeg"
                    width={350}
                    height={500}
                />
                <div className={styles.text}>
                    <h3>Pedidos ESPECIALES</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Recusandae debitis nostrum praesentium 
                        tempore numquam perferendis eius maxime veritatis officia, dolorum sed in voluptates
                         dolore nobis nesciunt, repellendus molestiae, rerum earum.</p>
                </div>

            </div>
        </div>
        </div>


    )
}
