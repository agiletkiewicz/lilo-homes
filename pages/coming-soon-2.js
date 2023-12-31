import Hero from '../components/property/hero';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { comingSoon2 } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={comingSoon2.hero} status={comingSoon2.status} links={comingSoon2.links} />  
      <Carousel lastIdx={comingSoon2.images.length - 1} >
        <Carousel.Image images={comingSoon2.images}/>
      </Carousel>
      <Footer />
    </>
  )
}
