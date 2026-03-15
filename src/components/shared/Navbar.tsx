"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
  faPhone,
  faRightFromBracket,
  faUserPlus,
  faBars,
  faChevronDown,
  faPerson,
  faPersonDress,
  faBabyCarriage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/images/freshcart-logo.svg";
import { AppState, useAppSelector } from "@/store/store";
import { useSelector } from "react-redux";
import useLogout from "@/features/auth/hooks/useLogout";

export default function Navbar() {
  const pathname = usePathname(); 
  const [isMenuOpen, setMenuOpen]=useState(false);
  function toggleMenu(){
    setMenuOpen(!isMenuOpen)
  }

  const getLinkClass = (href: string) => {
    return `${pathname === href ? "text-green-600 font-bold" : "text-gray-700"} 
            flex flex-col items-center gap-1 hover:text-green-600 transition-colors duration-200 text-center`;
  };
  const {isAuthenticated}= useSelector((appState:AppState)=>appState.auth)
  const {logout}=useLogout();
  const {numOfCartItems} = useAppSelector((state)=>state.cart)
  return (
    <>
      <header>
        <div className="container">
          {/* Top Bar */}
          <div className="border-b border-gray-300/30 hidden py-2 lg:flex justify-between items-center text-sm">
            <ul className="flex gap-5 items-center *:flex *:items-center *:gap-2">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </li>

              <li className="flex items-center gap-1">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">
                  support@freshcart.com
                </a>
              </li>
            </ul>

            <ul className="flex items-center gap-3">
              <li>
                <Link href={`/track-order`} className={getLinkClass(`/track-order`)}>
                  Track Order
                </Link>
              </li>

              <li>
                <Link href={`/about`} className={getLinkClass(`/about`)}>
                  About Us
                </Link>
              </li>

              <li>
                <Link href={`/contact`} className={getLinkClass(`/contact`)}>
                  Contact Us
                </Link>
              </li>

              <li>
                <select className="border px-2 py-1 rounded">
                  <option>EGP</option>
                  <option>SAR</option>
                  <option>AED</option>
                </select>
              </li>

              <li>
                <select className="border px-2 py-1 rounded">
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select>
              </li>
            </ul>
          </div>

          {/* Main Navbar */}
          <nav className="flex justify-between items-center py-6 mx-auto">
            <h1>
              <Link href={`/`}>
                <Image src={logo} alt="FreshCart Logo" width={120} height={40} />
              </Link>
            </h1>

            <div className="relative hidden lg:block">
              <input
                type="text"
                placeholder="Search for products..."
                className="form-control min-w-96"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
              />
            </div>

            <ul className="hidden lg:flex gap-6 items-center">
              <li>
                <Link href={`/wishlist`} className={getLinkClass(`/wishlist`)}>
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  <span>Wishlist</span>
                </Link>
              </li>

              <li>
                <Link href={`/cart`} className={getLinkClass(`/cart`)}>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                    <span className="absolute  rounded-full bg-green-600 text-white text-sm -right-1 size-4.5 -top-1 flex justify-center items-center -translate-y-1/2">
                      {numOfCartItems}
                    </span>
                  </div>
                  <span>Cart</span>
                </Link>
              </li>

              <li>
                <Link href={`/profile`} className={getLinkClass(`/profile`)}>
                  <FontAwesomeIcon icon={faUser} className="text-xl"/>
                  <span>Account</span>
                </Link>
              </li>
              {
                isAuthenticated?  <li className="flex flex-col items-center gap-1 cursor-pointer" onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
                <span>Logout</span>
              </li> : (<>  <li>
                <Link href={`/signup`} className={getLinkClass(`/signup`)}>
                  <FontAwesomeIcon icon={faUserPlus} className="text-xl"/>
                  <span>Sign Up</span>
                </Link>
              </li>

              <li>
                <Link href={`/login`} className={getLinkClass(`/login`)}>
                  <FontAwesomeIcon icon={faAddressCard} className="text-xl"/>
                  <span>Login</span>
                </Link>
              </li>
</>)
              }

            
             
            </ul>

            {/* Mobile Menu Button */}
            <button className="lg:hidden btn bg-green-600 text-white" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </nav>
        </div>

        {/* Sub Navbar */}
        <nav className="hidden lg:block bg-gray-200 py-1">
          <div className="container flex items-center gap-6 py-3">
            <div className="relative group">
              <button className="btn flex items-center gap-3 bg-green-500 text-white hover:bg-green-600/50">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>
              <ul className="hidden group-hover:block bg-white absolute shadow rounded-lg divide-y-2 divide-gray-300/20">
                <li className="py-3 px-3 hover:bg-gray-100">
                  <Link href={`/categories/men-fashion`} className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faPerson} className="text-green-600 w-5" />
                    <span>Men fashion</span>
                  </Link>
                </li>
                <li className="py-3 px-3 hover:bg-gray-100">
                  <Link href={`/categories/women-fashion`} className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faPersonDress} className="text-green-600 w-5" />
                    <span>Women fashion</span>
                  </Link>
                </li>
                <li className="py-3 px-3 hover:bg-gray-100">
                  <Link href={`/categories/baby-toys`} className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faBabyCarriage} className="text-green-600 w-5" />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
              </ul>
            </div>

            <ul className="flex gap-5">
              <li>
                <Link href="/" className={getLinkClass(`/`)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/recently-added`} className={getLinkClass(`/recently-added`)}>
                  Recently Added
                </Link>
              </li>
              <li>
                <Link href={`/featured-products`} className={getLinkClass(`/featured-products`)}>
                  Featured Products
                </Link>
              </li>
              <li>
                <Link href={`/offers`} className={getLinkClass(`/offers`)}>
                  Offers
                </Link>
              </li>
              <li>
                <Link href={`/brands`} className={getLinkClass(`/brands`)}>
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Offcanvas Sidebar */}
        <div
          className={`fixed inset-0 z-30 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 pointer-events-auto bg-black/50" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        <div
          className={`fixed top-0 bottom-0 left-0 z-40 w-72 bg-white p-5 space-y-5 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo + Close */}
          <div className="flex justify-between items-center border-b border-gray-300/50 pb-4">
            <Image src={logo} alt="FreshCart Logo" width={120} height={40} />
            <button className="btn rounded-full" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Search */}
          <div className="relative mt-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="form-control w-full"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Main Menu */}
          <div className="main-menu mt-4">
            <h2 className="font-bold">Main Menu</h2>
            <ul className="space-y-4 mt-4">
              <li>
                <Link href={`/wishlist`} className={`${getLinkClass(`/wishlist`)} !flex-row !items-center gap-2`}>
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  <span>Wishlist</span>
                </Link>
              </li>
              <li>
                <Link href={`/cart`} className={`${getLinkClass(`/cart`)} !flex-row !items-center gap-2`}>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                    <span className="absolute rounded-full bg-green-600 text-white text-sm -right-1 size-4.5 -top-1  flex justify-center items-center -translate-y-1/2">
                      {numOfCartItems}
                    </span>
                  </div>
                  <span>Cart</span>
                </Link>
              </li>
              <li>
                <Link href={`/profile`} className={`${getLinkClass(`/profile`)} !flex-row !items-center gap-2`}>
                  <FontAwesomeIcon icon={faUser} className="text-xl"/>
                  <span>Account</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="border-t-2 border-gray-300/50 mt-4 pt-4">
            <h2 className="font-bold">Account</h2>
            <ul className="space-y-4 mt-4">
              {
                isAuthenticated?  <li className="flex items-center gap-2 cursor-pointer" onClick={logout}>
                <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
                <span>Logout</span>
              </li> : <> 
               <li>
                <Link href={`/signup`} className={`${getLinkClass(`/signup`)} !flex-row !items-center gap-2`}>
                  <FontAwesomeIcon icon={faUserPlus} className="text-xl"/>
                  <span>Sign Up</span>
                </Link>
              </li>
              <li>
                <Link href={`/login`} className={`${getLinkClass(`/login`)} !flex-row !items-center gap-2`}>
                  <FontAwesomeIcon icon={faAddressCard} className="text-xl"/>
                  <span>Login</span>
                </Link>
              </li>
              </>
              }
              
            
             
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}