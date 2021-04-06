import axios from 'axios';
import Hero from '../components/property/hero';
import Features from '../components/property/features';
import Carousel from '../components/property/carousel';
import NavBar from '../components/home/navbar';


const airtableBaseUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}`;
const airtableConfig = {
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
  } 
};
const icons = ['/living.png', '/washing.png', '/smart.png', '/kitchen.png'];
const links = [{url: "https://rental.turbotenant.com/p/storrs-ave-utica-ny/296545", content: "Rent"}, {url: "https://www.airbnb.com/rooms/46414569?s=67&unique_share_id=373fdc1f-4d39-4215-a425-1fc7b1220946&source_impression_id=p3_1613800287_TYMeMLTQ2RafXIxU", content: "Airbnb"}]

export default function Home({ hero, features, images, status }) {
  return (
      <>
      <NavBar />
      <Hero content={hero} status={status} links={links}/>  
      <Carousel lastIdx={images.image.length - 1} >
          <Carousel.ArrowLeft />
          <Carousel.Image images={images.image}/>
          <Carousel.ArrowRight />
      </Carousel>
      <Features content={features} icons={icons} />
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
