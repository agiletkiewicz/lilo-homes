import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Airtable from 'airtable';
import axios from 'axios';
import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';
import Heading from '../components/home/heading';
import Card from '../components/home/card';
import About from '../components/home/about';




const airtableBaseUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}`;
const airtableConfig = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
  } 
};

export default function Home({ hero, features, images, status }) {
  return (
      <>
      <NavBar />
      <Hero content={hero} status={status} />  
      <Carousel images={images.image} />
      <Features content={features} />
      {/* {console.log(images.image)} */}
    </>
  )
}

export async function getStaticProps() {

  const response = await axios.get(`${airtableBaseUrl}/bungalow`, airtableConfig );

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
