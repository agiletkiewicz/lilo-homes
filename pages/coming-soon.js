import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { comingSoon } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={comingSoon.hero} status={comingSoon.status} links={comingSoon.links} />  
      <Footer />
    </>
  )
}
