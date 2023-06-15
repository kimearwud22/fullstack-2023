//import { SessionProvider, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Card from "../component/user/Card";
import Navbar from "../component/user/Navbar";
import Content from "../component/user/Body";
// import ContentDua from "../component/user/ContentDua";
import Footer from "../component/user/Footer";
// import LogoPertamini from '../src/assets/images/logos/logopertamina2.svg'


export default function Home() {

  return (
    <>
      <div >
        <Head>
          <title>Studio-Mu</title>
        </Head>
        <Navbar/>
        <Content/>
        <Footer/>
      </div>
    </>
  );
}





