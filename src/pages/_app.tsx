
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

    <Head>
      <title>My Trips</title>
      <link rel="shortcut icon" href="" />
      <link rel="apple-touch-icon" href="" />
      <meta 
      name='description' 
      content=' A simples project starter to work with typescript, React, Next.js'
       />
    </Head>
    <GlobalStyles/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
