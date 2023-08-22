import Desti from '@components/Desti'
import Footer from '@components/Footer'
import Hero from '@components/Hero'
import Nav from '@components/Nav'
import Offers from '@components/Offers'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
       <header>
          <Nav />
          <Hero />
          <Offers />
          <Desti />
          <Footer />

        </header>
   </div>
  )
}
