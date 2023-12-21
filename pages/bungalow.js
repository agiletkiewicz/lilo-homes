import axios from 'axios';
import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import { bungalow } from 'content/texts';

export default function Home() {
  return (
      <>
      <NavBar />
      <Hero content={bungalow.hero} status={bungalow.status} links={bungalow.links}/>  
      <Carousel lastIdx={bungalow.images.length - 1} >
          <Carousel.ArrowLeft />
          <Carousel.Image images={bungalow.images}/>
          <Carousel.ArrowRight />
      </Carousel>
      <Features content={bungalow.features} icons={bungalow.icons} />
      <Footer />
    </>
  )
}

