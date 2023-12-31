import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lilohomes.com/" />
        <meta property="og:title" content="Lilo Homes" />
        <meta property="og:description" content="Find Lilo Homes properties and about information" />
        <meta property="og:image" content="./public/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
