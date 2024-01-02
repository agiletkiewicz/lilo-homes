import Hero from '../components/home/hero';
import NavBar from '../components/home/navbar';
import Card from '../components/home/card';
import About from '../components/home/about';
import Footer from '../components/home/footer';
import { home } from '../content/texts.js'

export default function Home() {

  return (
    <>
    <NavBar />
    <Hero hero={home.hero} home={home.home} />
    <div className="flex flex-wrap md:flex-nowrap text-md md:text-sm lg:text-md justify-center lg:justify-around gap-2 pt-5 pb-5 lg:pt-20 lg:pb-20 pl-2 pr-2">
      <div className="w-3/5 lg:w-1/4">
        <Card content={home.house} />
      </div>
      <div className="w-3/5 lg:w-1/4">
        <Card content={home.bungalow} />
      </div>
      <div className="w-3/5 lg:w-1/4">
        <Card content={home.residence} />
      </div>
      <div className="w-3/5 lg:w-1/4">
        <Card content={home.flats} />
      </div>
    </div>
    <About content={home.about} />
    <Footer />
  </>
  )
}
