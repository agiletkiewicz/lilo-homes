import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import Heading from '../components/location/heading';
import BackToHome from '../components/shared/backToHome'

export default function Home({ }) {
  return (
      <>
      <NavBar />
      <BackToHome />
      <Heading />
      <Footer />
    </>
  )
}

