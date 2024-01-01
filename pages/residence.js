import Hero from '../components/property/hero';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { residence } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={residence.hero} status={residence.status} links={residence.links} />  
      <Footer />
    </>
  )
}
