import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegCopyright, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="relative py-12 flex flex-col items-center justify-center px-4 md:px-96">
                {/* Centered Text */}
                <div className="flex flex-col md:flex-row md:space-x-8 items-center mb-8">
                    <NavLink to="/" className="text-md  mb-2 md:mb-0 hover:text-menu-hover opacity-50  hover:opacity-100 text-[#333333] ">
                        PRESS ROOM
                    </NavLink>
                    <NavLink to="/" className="text-md  mb-2 md:mb-0 hover:text-menu-hover opacity-50  hover:opacity-100 text-[#333333] ">
                        GIFT CERTIFICATES & COOKBOOK
                    </NavLink>
                    <NavLink to="/" className="text-md  mb-2 md:mb-0 hover:text-menu-hover opacity-50 hover:opacity-100  text-[#333333] ">
                        CONTACT
                    </NavLink>
                </div>
                <div className="text-center uppercase  my-4">
              

<p className="text-md text-menu-hover opacity-50 text-[#333333] mb-2">
  <NavLink 
    to="/kokkari" 
    className="hover:text-menu-hover hover:opacity-100"
  >
    KOKKARI
  </NavLink> 
  {' | '}
  <NavLink 
    to="/evvia" 
    className="hover:text-menu-hover hover:opacity-100"
  >
    EVVIA
  </NavLink>
</p>

                    <p className="text-md  opacity-50  text-[#333333]  mb-2">KOKKARI ESTIATORIO 200 </p>
                    <p className="text-md  opacity-50  text-[#333333]  mb-2">Jackson Street (at Front St.)</p>
                    <p className="text-md  opacity-50  text-[#333333]  mb-2">San Francisco, CA 94111</p>
                    <p className="text-md  mb-2">
 <span className=' opacity-50 '>p:</span>  <a href="tel:+14159810983" className="text-[#844e02] opacity-100 ">415.981.0983</a>
</p>

                    <NavLink to="/" className="text-md mb-2 text-[#844e02] ">reservations & hours directions</NavLink>
                </div>


            </footer>
            <div className="bg-black text-[#999999] py-4 opacity-90 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                    {/* Left side: Copyright */}
                    <div className="mb-2 md:mb-0 flex items-center justify-center md:justify-start">
                        <FaRegCopyright size={14} className="mr-1" />
                        <span>2015-2024</span>
                    </div>

                    {/* Right side: Photo and Site Credits */}
                    <div className="text-center text-sm md:text-right">
                        Kokkari Photos by{' '}
                        <NavLink
                            to="/sararemington"
                            className="hover:text-white"
                        >
                            Sara Remington
                        </NavLink>
                        {' '}  | Site by{' '}
                        <NavLink
                            to="/tenayapartners"
                            className="hover:text-white"
                        >
                            Tenaya Partners
                        </NavLink>
                    </div>
                </div>
                {/* Scroll-to-top Button */}
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={24} />
                </button>
            </div>
        </>
    );
};

export default Footer;
