import NavBar from '../components/home/navbar';
import Footer from '../components/home/footer';
import Contact from '../components/contact/contact.js';
import Testimonials from '../components/contact/testimonials.js';
import FAQs from '../components/contact/faqs.js';

export default function Home({ }) {
  return (
    <>
      <NavBar />
      <Contact />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  )
}