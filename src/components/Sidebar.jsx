import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to="/"
        className="flex justify-start items-center my-8 text-sm font-medium text-gray-800 hover:text-gray-900 md:text-gray-400 hover:md:text-gray-600 "
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className=" w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=" md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#031108] ">
        <img src={logo} alt="logo" className=" w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className=" absolute z-10 md:hidden block top-6 right-4 ">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className=" w-6 h-6 text-white mr-2 cursor-pointer"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className=" w-6 h-6 text-white mr-2 cursor-pointer "
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#1DB954] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : " -left-full"
        }`}
      >
        <img src={logo} alt="logo" className=" w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
