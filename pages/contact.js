import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import Contact from '../components/contact/contact.js';
import Testimonials from '../components/contact/testimonials.js';
import FAQs from '../components/contact/faqs.js';
import Offers from '../components/contact/offers.js'
import BackToHome from '../components/shared/backToHome'

export default function Home({ }) {
  return (
    <>
      <NavBar />
      <BackToHome />
      <Contact />
      <Testimonials />
      <FAQs />
      <Offers />
      <Footer />
    </>
  )
}