import { useState } from "react";
import logo from "../assets/logo.png";

export const Header = () => {
    const [drop, setdrop] = useState(false);
    const [responsiveDrop, setResponsiveDrop] = useState(false);
    
    const dropDownhandle = () => {
        setdrop(!drop);
    };

    const responsiveDropDownHandle = () => {
        setResponsiveDrop(!responsiveDrop);
    };

   

    return (
        <nav className="bg-white border-gray-200">
            <div className="h-16 flex flex-wrap items-center justify-between mx-auto p-4">
                {/* logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8 rounded-full" alt="Shop Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">Shop</span>
                </a>



                {/* responsive button */}

                <button
                    
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                   
                    onClick={responsiveDropDownHandle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>



                <div className={`w-full md:w-auto md:flex md:items-center md:space-x-8 ${responsiveDrop ? 'block' : 'hidden'}`} id="navbar-dropdown">
                      {/* Navigation links */}
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                    <li>
                        <a href="/" className="block py-2 px-3 text-black  rounded hover:bg-gray-400 md:hover:bg-transparent  md:hover:text-blue-700 md:p-0" >Home</a>
                    </li>
                    {/* Category button */}
                    <li>
                        <div className="relative">
                            <button
                                id="dropdownNavbarLink"
                                onClick={dropDownhandle}
                                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                            >
                                Category
                            </button>

                            <div className={`z-10 top-full left-0  w-44 block px-4 ${drop ? '' : 'hidden'}`} >
                                <ul className="py-2 text-sm text-gray-700">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kid</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Contact</a>
                    </li>
                    <li>
                        <form className="flex items-center">   
                            <label className="sr-only">Search</label>
                            <div className="relative w-full px-2">
                                <input type="text" id="search" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block " placeholder="Search Items" required />
                            </div>
                            <button type="submit" className="inline-flex items-center  text-sm font-medium text-white bg-blue-700 rounded border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Search
                            </button>
                        </form>
                </li>
                </ul>
                </div>



              

            </div>
        </nav>
    );
};
