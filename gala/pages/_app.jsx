import Layaout from "./components/layout"
import Link from "next/link"
import Head from "next/head"


export default function MyApp({Component, pageProps}) {
  return (
    <>
    <Head>
    </Head>
    <Layaout>
        <Component {...pageProps}/>
    </Layaout>
  
    </>

  )
}
