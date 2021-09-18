import Image from "next/image";
import { SearchIcon,GlobalAltIcon,MenuIcon,UserCircleIcon, GlobeIcon, GlobeAltIcon } from '@heroicons/react/solid';


export default function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
        md:px-10">
            {/*right */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png'
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
            </div>


            {/*middle */}
            <div className="flex item-center md:border-2 rounded-full py-2
            md:shadow-sm p-2">
                <input
                    className="flex-grow outline-none pl-4 rounded-full 
                    bg-transparent "
                    type="text"
                    placeholder="Start your search"
                />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white
                rounded-full p-2 cursor-pointer" />
            </div>


            {/*left */}
            <div className="flex items-center justify-end space-x-4 text-gray-500" >
                <p className="hidden md:inline cursor-pointer">Become a host </p>
                <GlobeAltIcon className="h-6 cursor-pointer pl-2" />

                <div className="flex items-center space-x-2 border-2 rounded-full p-2 ">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>

        </header>
    )
}
