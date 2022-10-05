import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'

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
      {/** */}
    </div>
  )
}
