
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCreditCard, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {  faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image" 
import logo from  "@/assets/images/freshcart-logo.svg"
import Link from "next/link"
export default function Footer() {
  return <>
    <footer className="*:text-white bg-gray-900  py-10">
      <div className="container">
         <div className="grid md:grid-cols-2 xl:grid-cols-6 gap-10 space-y-2 pb-10">
         <div className="xl:col-span-2 space-y-5  *:text-gray-400 font-medium">
        <Image src={logo} alt="FreshCart Logo" className="bg-white p-3 rounded-xl w-max" />
        <p className="text-lg font-mono py-2">FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience. </p>
        <ul >
          <li className="*:hover:text-green-500 pt-2transition-colors duration-100" >
            <a href="#" className="space-x-2">
              <FontAwesomeIcon icon={faPhone} />
              <span>+1 (123) 456-7890</span>
            </a>
          </li>
          <li className="*:hover:text-green-500 pt-2 transition-colors duration-100" >
            <a href="#" className="space-x-2">
           <FontAwesomeIcon icon={faEnvelope} />  
              <span>support@freshcart.com</span>
            </a>
          </li>
          <li className="*:hover:text-green-500 transition-colors pt-2 duration-100 " >
            <a href="#" className="space-x-2">
           <FontAwesomeIcon icon={faLocationDot} />
              <span>123 Commerce Street, New York, NY 10001</span>
            </a>
          </li>
        </ul> 

        <ul className="flex gap-4 items-center *:text-xl *:rounded-full  ">
          <li className="*:hover:text-green-600 transition-colors duration-100" >
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li className="*:hover:text-green-600 transition-colors duration-100" >
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="*:hover:text-green-600 transition-colors duration-100" >
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="*:hover:text-green-600 transition-colors duration-100" >
            <a href="#">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </li>
        </ul>
         </div>

         <div className="space-y-5 ">
          <h2 className="font-bold text-2xl mt-2 ">Shop</h2>
          <ul className="space-y-4 text-gray-400 font-semibold *:hover:text-green-500 transition-colors duration-100 *:cursor-pointer *:text-xl">
          <li>
            <Link href={``}>All Products</Link>
          </li>
          <li>
            <Link href={``}>Categories</Link>
          </li>
          <li>
            <Link href={``}>Brands</Link>
          </li>
          <li>
            <Link href={``}>Electronics</Link>
          </li>
          <li>
            <Link href={``}>Men's Fashion</Link>
          </li>
          <li>
            <Link href={``}>Women's Fashion</Link>
          </li>
          </ul>
         </div>


         <div  className="space-y-5 ">
          <h2  className="font-bold text-2xl mt-2 ">Account</h2>
          <ul className="space-y-4 text-gray-400 font-semibold *:hover:text-green-500 transition-colors duration-100 *:cursor-pointer *:text-xl">
          <li>
            <Link href={`/profile`}>My Account</Link>
          </li>
          <li>
            <Link href={``}>Order History</Link>
          </li>
          <li>
            <Link href={`/wishlist`}>Wishlist</Link>
          </li>
          <li>
            <Link href={`/cart`}>Shopping Cart</Link>
          </li>
          <li>
            <Link href={`/sign-in`}>Sign In</Link>
          </li>
          <li>
            <Link href={`/create-account`}>Create Account</Link>
          </li>
          </ul>
         </div>


         <div  className="space-y-5 ">
          <h2  className="font-bold text-2xl mt-2 ">Support</h2>
          <ul className="space-y-4 text-gray-400 font-semibold *:hover:text-green-500 transition-colors duration-100 *:cursor-pointer *:text-xl">
          <li>
            <Link href={`/contact`}>Contact Us</Link>
          </li>
          <li>
            <Link href={``}>Help Center</Link>
          </li>
          <li>
            <Link href={``}>Shipping Info</Link>
          </li>
          <li>
            <Link href={``}>Track Order</Link>
          </li>
         
          </ul>
         </div>

         <div  className="space-y-5 ">
          <h2  className="font-bold text-2xl mt-2 ">Legal</h2>
          <ul className="space-y-4 text-gray-400 font-semibold *:hover:text-green-500 transition-colors duration-100 *:cursor-pointer *:text-xl">
          <li>
            <Link href={`/privacy-policy`}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={`/terms`}>Terms of Service</Link>
          </li>
          <li>
            <Link href={``}>Cookie Policy</Link>
          </li>
         
          </ul>
         </div>

       
      </div>

      <div className="flex justify-between items-center py-3 border-t border-gray-600/30 w-full *:text-gray-400">
        <p>&copy; {new Date().getFullYear()} FreshCart. All rights reserved.</p>
         <ul className="flex gap-5 items-center **:space-x-2 py-5 ">
          <li>
           <FontAwesomeIcon icon={faCreditCard}   />
            <span>Visa</span>
          </li>
          <li>
           <FontAwesomeIcon icon={faCreditCard} />
            <span>Mastercard</span>
          </li>
          <li>
           <FontAwesomeIcon icon={faCreditCard} />
            <span>PayPal</span>
          </li>
         </ul>
      </div></div>
     
    </footer>
     
    </>

}
