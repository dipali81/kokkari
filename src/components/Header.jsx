import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Cuisine', path: '/cuisine' },
    {
      name: 'Menus', path: '/menus', subMenu: [
        { name: 'Lunch Menu', path: '/pdfs/kokkari-lunch-menu-2.pdf' },
        { name: 'Dinner Menu', path: '/pdfs/kokkari-dinner-menu-2.pdf' },
        { name: 'Wine List', path: '/pdfs/kokkari-wine-list.pdf' }
      ]
    },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Private Dining', path: '/private-dining' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (!event.target.classList.contains('submenu-item')) {
          setOpenMenu(null);
          setIsHovering(false);
          // setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-beige py-12 bg-white md:bg-[#eae2c8]">
      <div className="container mx-auto flex md:flex-col flex-row items-center">
        {/* Logo */}
        <div className="mb-4 flex-grow md:flex-grow-0 flex items-center">
          <NavLink to="/">
            <img src="/images/logo.png" alt="Logo" className="h-12 md:h-24" />
          </NavLink>
        </div>

        {/* Hamburger Menu for Small Devices */}
        <div className="md:hidden flex items-center ml-auto mr-2">
          <button
            onClick={handleMobileMenuToggle}
            className="text-menu-hover">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items for Medium Devices */}
        <ul className="hidden md:flex flex-col md:flex-row md:space-x-12 text-lg text-brown uppercase tracking-wide">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => item.subMenu && setOpenMenu(item.name)}
              onMouseLeave={() => !isHovering && setOpenMenu(null)}
              ref={item.subMenu ? dropdownRef : null}
            >
              <NavLink
                to={item.path}
                className={`hover:text-menu-hover hover:opacity-100 ${location.pathname.startsWith(item.path) ? 'text-menu-hover opacity-100' : 'opacity-50'}`}
                onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
              >
                {item.name}
              </NavLink>
              {item.subMenu && openMenu === item.name && (
                <div
                  className="absolute left-0 w-48 bg-white shadow-md"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => {
                    setIsHovering(false);
                    setOpenMenu(null);
                  }}
                >
                  {/* Brown div on top */}
                  <div className="bg-menu-hover h-1"></div>
                  {/* Dropdown items */}
                  <div className="border-t border-gray-200">
                  {item.subMenu.map((subItem, index) => (
                      <React.Fragment key={subItem.name}>
                        <NavLink
                          to={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 submenu-item"
                        >
                          {subItem.name}
                        </NavLink>
                        {index < item.subMenu.length - 1 && <hr className="my-0 border-gray-200" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 uppercase z-50 flex flex-col items-start pt-24">
            {menuItems.map((item) => (
              <div key={item.name} className="relative bg-[#844e02] w-full">
                <NavLink
                  to={item.path}
                  className={`block text-sm uppercase text-white p-2 w-full ${location.pathname.startsWith(item.path) ? 'font-bold bg-[#6d4412]' : ''} hover:bg-[#6d4412] hover:opacity-100`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
                <hr className="border-white w-full" />

                {item.subMenu && (
                  <div className="">
                    {item.subMenu.map((subItem) => (
                      <div key={subItem.name} className='hover:bg-[#6d4412]'>
                        <NavLink
                          to={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block ml-4 text-sm text-white w-full p-2 hover:opacity-100 submenu-item"
                        >
                          - {subItem.name}
                        </NavLink>
                        <hr className="border-white w-full" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;