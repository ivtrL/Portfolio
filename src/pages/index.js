import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Profile from '@/components/Profile'
import Projects from '@/components/Projects'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width"/>
        <title>Portfolio</title>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css?_cacheOverride=1678828602070" rel="stylesheet"/>
      </Head>
      <main>
        <div>
          <Navbar/>
          <section id='home'>
            <Header/>          
          </section>
          <section id='profile'>
            <Profile/>
          </section>
          <section id='projects'>
            <Projects/>
          </section>
        </div>
      </main>
    </>
  )
}
