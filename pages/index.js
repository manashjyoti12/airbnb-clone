import Head from "next/head";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import LargeCard from "./LargeCard";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import { exploreData, cardData } from "./demo_data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://icon2.cleanpng.com/20180605/eat/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c27e3e0.6896842915282009721634.jpg"
        />
      </Head>

      {/*header */}
      <Header />
      {/*header */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/*FIRST SECTION*/}
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Data from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        {/*SECOND SECTION*/}
        <section className="">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          {/* Data from API */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {cardData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist created by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
