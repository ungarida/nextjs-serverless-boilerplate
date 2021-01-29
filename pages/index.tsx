import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>NextJS Boilerplate</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h2>This is just a boilerplate</h2>
  </div>
)

export default Home
