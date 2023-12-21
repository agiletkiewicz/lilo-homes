import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { house } from '../content/texts.js'

export default function Home() {
  return (
      <>
      <NavBar />
      <Hero content={house.hero} status={house.status} links={house.links} />  
      <Carousel lastIdx={house.images.length - 1} >
          <Carousel.ArrowLeft />
          <Carousel.Image images={house.images}/>
          <Carousel.ArrowRight />
      </Carousel>
      <Features content={house.features} icons={house.icons} />
      <Footer />
    </>
  )
}
