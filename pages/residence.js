import Hero from '../components/property/hero';
import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import Carousel from '../components/shared/carousel';
import BackToHome from '../components/shared/backToHome'
import { residence } from '../content/texts.js'

export default function ComingSoon() {
  return (
      <>
      <NavBar />
      <BackToHome />
      <Hero content={residence.hero} status={residence.status} links={residence.links} />
      <h1 className="text-3xl lg:text-5xl text-main-blue p-2 lg:p-6 font-heading text-center p-5">Concept Floor Plans</h1>
      <Carousel lastIdx={residence.images.length - 1} >
        <Carousel.Image images={residence.images}/>
      </Carousel>
      <Footer />
    </>
  )
}
