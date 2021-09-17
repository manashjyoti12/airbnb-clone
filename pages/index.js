import Head from 'next/head'
import Header from './Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://icon2.cleanpng.com/20180605/eat/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c27e3e0.6896842915282009721634.jpg" />
      </Head>


      {/*header */}
      <Header/>
    </div>
  )
}
