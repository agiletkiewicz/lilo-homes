import Hero from '../components/property/hero';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import Carousel from '../components/shared/carousel';
import { residence } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={residence.hero} status={residence.status} links={residence.links} />
      <Carousel lastIdx={residence.images.length - 1} >
        <Carousel.Image images={residence.images}/>
      </Carousel>
      <Footer />
    </>
  )
}
