import { useRouter } from "next/dist/client/router";
import Footer from "./Footer";
import Header from "./Header";
import { format } from "date-fns";
import Head from 'next/head'
import InfoCard from "./InfoCard";

function Search({searchResults}) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedendDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedendDate} `;
console.log({ searchResults });
    return (
        
        <div>
    <Head>
        <title>Airbnb</title>
        <link rel="icon" href="https://icon2.cleanpng.com/20180605/eat/kisspng-airbnb-logo-coupon-privately-held-company-airbnb-logo-5b167f0c27e3e0.6896842915282009721634.jpg" />
      </Head>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests `} />

            <main className="flex">
                <section className="flex-grow pt-14">
                    <p className="text-xs">300+ Stays  {range}  for {noOfGuests}  Guest </p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className=" hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">Cancellation Flexibility</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">Type of place</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">Price</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">Rooms and Beds</p>
                        <p className="px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">More filters</p>
                    </div>

                    <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}

                    </div>
               
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then((res) => res.json());

    return {
        props: {
            searchResults,
        },
    };
}
