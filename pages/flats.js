import Hero from '../components/property/hero';
import Carousel from '../components/shared/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { flats } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <Hero content={flats.hero} status={flats.status} links={flats.links} />
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading text-center p-5">Concept Floor Plans</h1>
      <Carousel lastIdx={flats.images.length - 1} >
        <Carousel.ArrowLeft />
        <Carousel.Image images={flats.images}/>
        <Carousel.ArrowRight />
      </Carousel>
      <Footer />
    </>
  )
}
