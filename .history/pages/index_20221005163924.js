import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Hulu-Clone App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/**Header */}
      <Header/>

      {/**Navigation */}
      <Nav/>
      {/**Results */}
      <Results/>
    </div>
  )
}

const async functioon getServerSideProps(context) {
  const genre = context.query.genre ;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  
  ).then
}