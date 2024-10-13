import Navbar from "./navbar"
import Footer from "./footer"
import Image from "next/image"
import { useState } from "react"

export default function Layout() {
    const [ruleta, setRuleta] = useState('rogo');
    return (
        <div>
            <Navbar />
            <div>
            <Image
            src=""
            width={1000}
            height={1000}
            />
            </div>
            <Footer />
        </div>
    )
}
