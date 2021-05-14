import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Airtable from 'airtable';
import axios from 'axios';
import Hero from '../components/home/hero';
import NavBar from '../components/home/navbar';
import Card from '../components/home/card';
import About from '../components/home/about';
import Footer from '../components/home/footer';





const airtableBaseUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}`;
const airtableConfig = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
  } 
};

export default function Home({ about, hero, home, house, bungalow }) {
  return (
      <>
      <NavBar />
      <Hero hero={hero} home={home} />
      <div className="flex flex-wrap justify-center lg:justify-around pt-5 pb-5 lg:pt-20 lg:pb-20">
        <div className="w-3/5 lg:w-1/4">
          <Card content={house} />
        </div>
        <div className="w-3/5 lg:w-1/4">
          <Card content={bungalow} />
        </div>
      </div>
      <About content={about} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const response = await axios.get(`${airtableBaseUrl}/home`, airtableConfig );

  const { data } = await response;
  const { records } = await data;

  let content = {};
  records.forEach((record) => {
    content[record.fields.key] = record.fields
  })

  return {
    props: {...content},
    revalidate: 60
  }
  
}
