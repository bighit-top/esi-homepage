import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


export const Navbar = () => {

    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    return (
        <nav className="flex gap-5 justify-around fixed w-full p-8 -mt-3 z-10 font-extrabold text-center text-blue-800 bg-white whitespace-nowrap max-lg:justify-between">
            <div className="text-4xl leading-6 mt-5"><a href="/">ESI</a></div>

            <div className="flex gap-5 justify-between self-start mt-5 text-2xl leading-6 max-md:flex-wrap max-md:max-w-full max-lg:hidden">
                <ul className="text-md justify-center w-full flex gap-4 items-center">
                    <li className="group relative dropdown cursor-pointer">
                        <a href="/company">Company</a>
                        <div className="group-hover:block dropdown-menu absolute hidden h-auto bg-white p-3 rounded shadow-lg z-10">
                            <ul className="text-lg flex flex-col items-start mt-5">
                                <li className="p-1"><a href="/company">About us</a></li>
                                <li className="p-1"><a href="/history">Inspection History</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative dropdown">
                        <a href="/service">Services</a>
                        <div className="group-hover:block dropdown-menu absolute hidden h-auto bg-white p-3 rounded shadow-lg z-10">
                            <ul className="text-lg flex flex-col items-start mt-5">
                                <li className="p-1"><a href="/service">Our services</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="group relative dropdown">
                        <a href="/contact">Contact</a>
                        <div className="group-hover:block dropdown-menu absolute hidden h-auto bg-white p-3 rounded shadow-lg z-10">
                            <ul className="text-lg flex flex-col items-start mt-5">
                                <li className="p-1"><a href="/contact">Contact</a></li>
                                {/* <li className="p-1"><a href="/inquiry">Inspection Inquiry</a></li> */}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={`${isMobileMenuShown === false && "hidden"
                } absolute gap-5 justify-between self-start mt-5 text-2xl leading-3 max-md:flex-wrap max-md:max-w-full`}>
                <ul className="text-md flex flex-col absolute border-4 mx-[100%] my-5 gap-2 text-center bg-white">
                    <li className="mt-5">
                        <a href="/company">Company</a>
                        <div className="group-hover:block p-3">
                            <ul className="text-lg flex flex-col">
                                <li className="p-1"><a href="/company">About us</a></li>
                                <li className="p-1"><a href="/history">Inspection History</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="">
                        <a href="/service">Services</a>
                        <div className="group-hover:block p-3">
                            <ul className="text-lg flex flex-col">
                                <li className="p-1"><a href="/service">Our services</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="">
                        <a href="/contact">Contact</a>
                        <div className="group-hover:block p-3">
                            <ul className="text-lg flex flex-col">
                                <li className="p-1"><a href="/contact">Contact</a></li>
                                {/* <li className="p-1"><a href="/inquiry">Inspection Inquiry</a></li> */}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Menu Button */}
            <button
                onClick={() => {
                    setIsMobileMenuShown(!isMobileMenuShown);
                }}
                className="dark:text-gray-400 hover:dark:bg-gray-700 hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden"
            >
                <RxHamburgerMenu size={25} />
            </button>

        </nav>
    );
}