import Link from "next/link";
import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { MdContacts, MdMiscellaneousServices } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen); // Toggle menu
  };
  return (
    // bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-sm rounded-xl shadow-xl mx-12
    // {` ${isOpen ? "bg-transparent" : "bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-10 border text-sm rounded-xl shadow-xl"}`}
    <div className="container mx-auto fixed left-0 right-0 z-20 pt-12">
      <div
        className={` ${
          isOpen
            ? "bg-transparent"
            : "bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 text-sm rounded-xl shadow-xl sm:mx-12"
        }`}
      >
        <div className="flex justify-between p-4 2xl:py-4 2xl:px-5">
          <img
            src="/images/Logo2.png"
            alt="Logo"
            className={`h-8 drop-shadow-img ${
              isOpen ? "hidden" : "block"
            } sm:block`}
          />

          <div className="hidden sm:flex sm:gap-8 items-center">
            <Link href="/">
              <div className="flex gap-1 items-center text-white hover:text-sky-300 transition duration-200 transform">
                <div className="">
                  <IoHome />
                </div>
                <p className="font-bold">Home</p>
              </div>
            </Link>
            <Link href="/#about">
              <div className="flex gap-1 items-center text-white hover:text-sky-500 transition duration-200">
                <div className="text-md">
                  <BsFillPersonFill />
                </div>
                <p className="font-bold">About</p>
              </div>
            </Link>
            <Link href="/#services">
              <div className="flex gap-1 items-center text-white hover:text-sky-500 transition duration-300">
                <div className="text-md">
                  <MdMiscellaneousServices />
                </div>
                <p className="font-bold">Services</p>
              </div>
            </Link>
            <Link href="projects">
              <div className="flex gap-1 items-center text-white hover:text-sky-500 transition duration-300">
                <div className="text-md">
                  <GrProjects />
                </div>
                <p className="font-bold">Projects</p>
              </div>
            </Link>
          </div>

          <button className="hidden sm:flex text-white bg-gradient-to-r from-violet-500 to-sky-500 hover:from-sky-500 hover:to-violet-500 transition duration-200 hover:scale-105 px-5 py-2 rounded-lg">
            <div className="flex gap-1 items-center">
              <span>
                <MdContacts />
              </span>
              <Link href="/#contact">Contact</Link>
            </div>
          </button>

          {/* Hamburger Menu */}
          <div className={`sm:hidden ${isOpen ? "hidden" : "flex"}`}>
            <button className="" onClick={handleOpen}>
              <GiHamburgerMenu className="text-white w-8" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`block sm:hidden fixed top-0 left-0 h-full w-full bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-10 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center">
              <img src="/images/Logo2.png" alt="Logo" className="h-8" />
              <div className="flex">
                <button className="" onClick={handleOpen}>
                  <RxCross2 className="text-white w-10" />
                </button>
              </div>
            </div>
            <ul className="text-white p-5 text-center">
              <li className="mb-3">
                <div className="flex gap-1 justify-center items-center text-white hover:text-sky-300 transition duration-200 transform">
                  <div className="">
                    <IoHome />
                  </div>
                  <p className="font-bold">Home</p>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex gap-1 justify-center items-center text-white hover:text-sky-500 transition duration-200">
                  <div className="text-md">
                    <BsFillPersonFill />
                  </div>
                  <p className="font-bold">About</p>
                </div>
              </li>
              <li className="mb-3">
                <div className="flex gap-1 justify-center items-center text-white hover:text-sky-500 transition duration-300">
                  <div className="text-md">
                    <MdMiscellaneousServices />
                  </div>
                  <p className="font-bold">Services</p>
                </div>
              </li>
              <div className="flex gap-1 justify-center items-center text-white hover:text-sky-500 transition duration-300">
                <div className="text-md">
                  <GrProjects />
                </div>
                <p className="font-bold">Projects</p>
              </div>
            </ul>
            {/* Contact Button */}
            <div className="flex gap-2 justify-center sm:hidden">
              <button className="text-white bg-gradient-to-r from-violet-500 to-sky-500 hover:from-sky-500 hover:to-violet-500 transition duration-200 hover:scale-105 px-5 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <span>
                    <MdContacts />
                  </span>
                  <Link href="/#contact">Contact</Link>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
