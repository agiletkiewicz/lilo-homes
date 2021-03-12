import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Airtable from 'airtable';
import axios from 'axios';

const airtableBaseUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}`;
const airtableConfig = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
  } 
};

export default function Home({ records }) {
  return (
    <div>
      {console.log(records)}
    </div>
  )
}

export async function getStaticProps() {

  const response = await axios.get(`${airtableBaseUrl}/home`, airtableConfig );

  const { data } = await response;
  const { records } = await data;

  return {
    props: { records }
  }
}
