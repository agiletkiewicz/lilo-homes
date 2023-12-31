import Hero from '../components/property/hero';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { comingSoon1 } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={comingSoon1.hero} status={comingSoon1.status} links={comingSoon1.links} />  
      <Footer />
    </>
  )
}
