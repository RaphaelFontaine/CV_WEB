import Head from 'next/head'
import HeaderAction from '@/components/headers'


export default function Home() {
  return (
    <>
      <Head>
        <title>Raphael Fontaine</title>
        <meta name="description" content="Raphael Fontaine CV Data Engineer Developer" />
        <link rel="icon" href="/letter-R.png" />
      </Head>
      <HeaderAction></HeaderAction>
      <main className='bg-primary'>
        
      </main>
    </>
  )
}
