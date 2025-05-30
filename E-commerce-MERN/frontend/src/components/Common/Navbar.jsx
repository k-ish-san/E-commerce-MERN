
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const {cart} = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.auth);

  const cartItemCount = cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0;

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };
  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container  mx-auto flex justify-between  items-center py-4 px-6">
        {/* Left-Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium font-mono">
            Rabbit
          </Link>
        </div>

        {/* Center - Navigation Links */}

        <div className="hidden md:flex space-x-6">
          <Link
            to="collections/all?gender=Men"
            className=" text-gray-700 hover:text-black hover:bg-orange-300 p-2 text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="collections/all?gender=Women"
            className=" text-gray-700 hover:text-black hover:bg-orange-300 p-2  text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="collections/all?category=Top Wear"
            className=" text-gray-700 hover:text-black hover:bg-orange-300 p-2 text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to="collections/all?category=Bottom Wear"
            className=" text-gray-700 hover:text-black hover:bg-orange-300 p-2 text-sm font-medium uppercase"
          >
            Bottom Wear
          </Link>
        </div>

        {/* Right - Icons */}

        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 rounded-xl ${
          navDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-white bg-black rounded hover:bg-rabbit-red  hover:text-white" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-white py-6 font-bold mb-6 p-4 rounded text-center  bg-black  ">
            MENU
          </h2>
          <nav className="space-y-4 font-sans">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block py-3 text-center font-semibold  rounded text-black bg-gray-200 hover:text-orange-800 hover:bg-orange-200" 
            >
              Men
            </Link>
            <Link
              to="collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block py-3 text-center font-semibold  rounded text-black bg-gray-200 hover:text-orange-800 hover:bg-orange-200"
            >
              Women
            </Link>
            <Link
              to="collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block py-3 text-center font-semibold  rounded text-black bg-gray-200 hover:text-orange-800 hover:bg-orange-200"
            >
              Top Wear
            </Link>
            <Link
              to="collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block py-3 text-center font-semibold  rounded text-black bg-gray-200 hover:text-orange-800 hover:bg-orange-200"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
