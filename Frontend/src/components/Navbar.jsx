import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaAngleDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");

  const toggleSearch = () => setShowSearch(!showSearch);
  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const shopCategories = {
    "Shop By Category": [
      "Acne + Pore Activists",
      "Age Activists",
      "Cleansers + Toners",
    ],
    "Shop By Concern": ["Breakouts", "Dark Circles", "Dull Skin"],
  };

  const skinCategories = {
    "Skin Type": ["Oily Skin", "Dry Skin", "Combination Skin"],
    "Skin Goals": ["Hydration", "Anti-Aging"],
  };

  return (
    <>
      {/* Top Bar: Social Icons + Links */}
      <div className="w-full text-sm">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-2">
          {/* Left Links */}
          <div className="flex space-x-5">
            {["Pro Site", "About", "Customer Service", "Offers + Codes"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative group transition-colors duration-200 text-black"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
                </a>
              )
            )}
          </div>

          {/* Right Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <FaPinterestP size={16} />
            </a>
            <a href="#" className="hover:text-pink-600 transition-colors">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Logo (Not Sticky) */}
      <div className="hidden md:flex justify-center py-2 bg-white z-40">
        <a href="/">
          <img src="/logo.avif" alt="Logo" className="h-14 w-auto" />
        </a>
      </div>

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        {/* Search Overlay */}
        {showSearch && (
          <div className="fixed top-0 left-0 h-full w-[100%] max-w-sm bg-white z-50 p-4 shadow-xl border-r border-gray-300">
            <div className="flex items-center border-b pb-2">
              <FaSearch className="mr-5 text-gray-600" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full p-2 outline-none"
                autoFocus
              />
              <FaTimes
                className="text-gray-600 cursor-pointer ml-2"
                onClick={toggleSearch}
              />
            </div>
          </div>
        )}

        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 py-2 md:px-16">
          {/* Left: Hamburger & Search */}
          <div className="flex items-center space-x-4">
            <button className="md:hidden" onClick={toggleMobileMenu}>
              {showMobileMenu ? <FaTimes /> : <FaBars />}
            </button>
            <FaSearch
              className="text-gray-700 cursor-pointer"
              onClick={toggleSearch}
            />
          </div>

          {/* Center: Logo on mobile only */}
          <div className="md:hidden">
            <img src="/logo.avif" alt="Logo" className="h-12 mx-auto" />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4">
            <FaUser className="text-gray-700 cursor-pointer" />
            <div className="relative">
              <FaShoppingCart className="text-gray-700 cursor-pointer" />
              <span className="absolute -bottom-2 -left-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex justify-center space-x-6 py-2 font-semibold text-sm text-gray-700">
          {/* Shop */}
          <div className="group relative">
            <span className="cursor-pointer flex items-center">
              Shop <FaAngleDown className="ml-1" />
            </span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white border shadow-lg z-30 w-[800px] p-6">
              {Object.entries(shopCategories).map(([heading, items], idx) => (
                <div
                  key={heading}
                  className={`flex-1 ${idx !== 0 ? "pl-6 border-l" : "pr-6"}`}
                >
                  <h4 className="font-bold mb-2">{heading}</h4>
                  <ul>
                    {items.map((item) => (
                      <li key={item} className="hover:underline text-sm">
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skin Type */}
          <div className="group relative">
            <span className="cursor-pointer flex items-center">
              Skin Type <FaAngleDown className="ml-1" />
            </span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white border shadow-lg z-30 w-[600px] p-6">
              {Object.entries(skinCategories).map(([heading, items], idx) => (
                <div
                  key={heading}
                  className={`flex-1 ${idx !== 0 ? "pl-6 border-l" : "pr-6"}`}
                >
                  <h4 className="font-bold mb-2">{heading}</h4>
                  <ul>
                    {items.map((item) => (
                      <li key={item} className="hover:underline text-sm">
                        <a href="#">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Static links */}
          {["Best Sellers", "What's New", "Skin Quizzes", "Find a Spa"].map(
            (link) => (
              <a key={link} href="#" className="hover:underline">
                {link}
              </a>
            )
          )}
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white shadow-md border-t text-sm">
            {/* Shop */}
            <div>
              <button
                className="w-full text-left px-4 py-2 flex justify-between items-center font-semibold"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === "shop" ? "" : "shop")
                }
              >
                Shop <FaAngleDown />
              </button>
              {mobileDropdown === "shop" &&
                Object.entries(shopCategories).map(([heading, items]) => (
                  <div key={heading} className="pl-6">
                    <h4 className="font-semibold mt-2">{heading}</h4>
                    <ul>
                      {items.map((item) => (
                        <li key={item} className="py-1">
                          <a href="#" className="block hover:underline">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            {/* Skin Type */}
            <div>
              <button
                className="w-full text-left px-4 py-2 flex justify-between items-center font-semibold"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === "skin" ? "" : "skin")
                }
              >
                Skin Type <FaAngleDown />
              </button>
              {mobileDropdown === "skin" &&
                Object.entries(skinCategories).map(([heading, items]) => (
                  <div key={heading} className="pl-6">
                    <h4 className="font-semibold mt-2">{heading}</h4>
                    <ul>
                      {items.map((item) => (
                        <li key={item} className="py-1">
                          <a href="#" className="block hover:underline">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>

            {/* Static links */}
            {["Best Sellers", "What's New", "Skin Quizzes", "Find a Spa"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="block px-4 py-2 hover:underline font-semibold"
                >
                  {link}
                </a>
              )
            )}
          </div>

        
        )}
          <Link to="/Login">
            <div className="flex items-center cursor-pointer space-x-2 border border-black px-4 py-2 hover:bg-black">
              <FaUser className="text-[#e455c5] hover:text-blue-900 transition duration-300" />
              <span className="text-black hover:text-blue-900 transition duration-300 font-semibold">
                Login
              </span>

            </div>
            </Link>
      </div>
    </>
  );
};

export default Navbar;
