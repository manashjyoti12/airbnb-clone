import Image from "next/image";

export default function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[700px] 2xl:h-[900px] 3xl:h-[1000]">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
            />

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg font-semibold ">Not sure where to go?Perfect.</p>
               
                <button className="text-purple-600 bg-white px-10 py-4 rounded-full shadow-md font-bold m-3
                hover:shadow-xl active:scale-90 transitiom duration-300 ease-out ">I'm flexible </button>
            </div>

            
        </div>
    )
}
