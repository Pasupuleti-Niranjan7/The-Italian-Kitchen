import { IoFastFoodOutline, IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router";

let Navbar = () => {

  let [menu, setMenu] = useState(false)

  let updateMenu = () => {
    setMenu(!menu)
  }


  return (
    <>
      <header className="shadow-base sticky top-0 max-sm:-mt-2 bg-white">
        <section className="px-5 h-10 flex justify-between md:gap-10 items-center relative py-10 sm:px-8 md:px-10">
          {/* For Mobile View */}
          {/* Menu open and close icons*/}
          <div onClick={updateMenu} className="md:hidden">
            {!menu ? <IoIosMenu size={25} /> : <IoClose size={25} />}
          </div>
          {/* Logo and links */}
          <div
            className={
              menu
                ? "md:hidden list-none gap-5 fixed top-0 right-0 bg-white border-l-gray-300 border-l text-xl h-full w-[65%] sm:w-[50%] duration-800"
                : "fixed top-0 -right-full bg-white w-[50%] h-full list-none border-l border-l-gray-300 duration-800 ease-in"
            }
          >
            {/* Logo */}
            <div className="flex gap-2 text-xl md:text-2xl mt-5 justify-center">
              <IoFastFoodOutline size={25} />
              <h3 className="tracking-wider font-semibold">Niranjan's Food</h3>
            </div>

            {/* links */}
            <nav className="flex flex-col gap-6 mt-5 text-center font-[Radio Canada] font-semibold m-4">
              <li className="p-3 border-b border-b-gray-300">
                <Link to="/">Home</Link>
              </li>
              <li className="p-3 border-b border-b-gray-300">
                <Link to="about">About</Link>
              </li>
              <li className="p-3 border-b border-b-gray-300">Menu</li>
              <li className="p-3 border-b border-b-gray-300">Services</li>
              <li className="p-3 border-b border-b-gray-300">Testimonials</li>
              <li className="p-3 ">Contact</li>
            </nav>

            {/* Email and phone icons */}
            <div className="flex gap-5 items-center justify-center mt-5">
              <div className="flex items-center justify-center bg-white h-10 w-10 rounded-full shadow-[0_0_1px_2px_#f0f0f0]">
                <MdEmail size={22} />
              </div>

              <div className="flex items-center justify-center bg-white h-10 w-10 rounded-full shadow-[0_0_1px_2px_#f0f0f0]">
                <FaPhoneAlt size={22} />
              </div>
            </div>

            {/* Reservation Button */}
            <div className="flex items-center justify-center my-8">
              <button className="bg-[#000300] text-white px-3 py-2 rounded-2xl max-sm:text-base max-sm:rounded-lg font-semibold">
                Make a Reservation
              </button>
            </div>
          </div>

          {/* From medium screens */}
          <div
            className={
              !menu
                ? "flex gap-2 text-md sm:text-base md:text-base lg:text-xl items-center"
                : "hidden"
            }
          >
            <IoFastFoodOutline size={25} />
            <h3 className="tracking-wider font-semibold">Niranjan's Food</h3>
          </div>

          <nav className="hidden md:flex list-none gap-3">
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              <Link to="about">About</Link>
            </li>
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              Menu
            </li>
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              Services
            </li>
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              Testimonials
            </li>
            <li className="md:text-base lg:text-lg font-[Radio Canada] font-semibold">
              Contact
            </li>
          </nav>

          {/* md:text-lg font-[Radio Canada] font-semibold */}
          <div className="sm:flex gap-4 items-center sm:flex-row">
            <div className="flex gap-3 max-md:hidden">
              <MdEmail size={17} />
              <FaPhoneAlt size={15} />
            </div>

            <button className="bg-[#000300] text-white px-3 py-2 rounded-2xl font-medium text-sm lg:text-base max-md:hidden max-lg:hidden">
              Make a Reservation
            </button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Navbar;
