import axios from 'axios';
import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/shared/carousel';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import BackToHome from '../components/shared/backToHome'
import { bungalow } from 'content/texts';

export default function Home() {
  return (
      <>
      <NavBar />
      <BackToHome />
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

