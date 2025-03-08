import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/M.png";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-black/30 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-40 mr-2" src={logo} alt="Logo" style={{ cursor: 'pointer' }}/>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li id="navlink" key={index}>
                <Link 
                  to={item.href} 
                  smooth={true} 
                  duration={800}
                  offset={item.offset}>
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <Link 
              to="upcoming-events"
              smooth={true} 
              duration={500}
              offset={-50}
              id="navbutton"
              className="py-2 px-3 border rounded-md">
                View Schedule
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf6ol2nHMR6Dlj2s8RkiPss9rL1b3GlQIF1ZP0U3bZDsBkylg/viewform?usp=sf_link"
              id="navbutton"
              className="bg-gradient-to-r from-red-600 to-red-700 py-2 px-3 rounded-md"
            >
              Register Now
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black border-b-1 border-neutral-700/80 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li className="pb-2" key={index}>
                <Link 
                  to={item.href} 
                  smooth={true} 
                  duration={800}
                  offset={item.offset}>
                    {item.label}
                </Link>
              </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link 
              to="upcoming-events"
              smooth={true} 
              duration={500}
              offset={-50}
              className="py-2 px-3 border rounded-md">
                View Schedule
            </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ol2nHMR6Dlj2s8RkiPss9rL1b3GlQIF1ZP0U3bZDsBkylg/viewform?usp=sf_link"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-red-600 to-red-700"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
