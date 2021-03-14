import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Airtable from 'airtable';
import axios from 'axios';
import Hero from '../components/home/hero'
import NavBar from '../components/home/navbar'
import Heading from '../components/home/heading'



const airtableBaseUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}`;
const airtableConfig = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
  } 
};

export default function Home({ about, hero, home }) {
  return (
    <div>
      <NavBar />
      <Hero content={hero} />
      <Heading content={home} />
    </div>
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
