"use client"
import { faShieldHalved, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import  review from "../../../../assets/images/review-author.png"
import React from 'react'

export default function SignupHero() {
  return (
    <>
      <div className='space-y-8 p-10'>
        <div>
          <h2 className="text-4xl font-bold">
            Welcome to <span className="text-green-600">FreshCart</span>
          </h2>
          <p className='text-lg mt-2 text-gray-700'>
            Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
          </p>
        </div>

        <ul className="*:flex *:items-center *:gap-3 space-y-5">
          <li>
            <div className="icon size-12 rounded-full bg-green-300 text-xl flex justify-center items-center text-green-600">
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="content">
              <h3 className="font-semibold">Premium Quality</h3>
              <p className="text-gray-500">
                Premium quality products sourced from trusted suppliers.
              </p>
            </div>
          </li>

          <li>
            <div className="icon size-12 rounded-full bg-green-300 text-xl flex justify-center items-center text-green-600">
              <FontAwesomeIcon icon={faTruckFast} />
            </div>
            <div className="content">
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-gray-500">
                Same-day delivery available in most areas
              </p>
            </div>
          </li>

          <li>
            <div className="icon size-12 rounded-full bg-green-300 text-xl flex justify-center items-center text-green-600">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div className="content">
              <h3 className="font-semibold">Secure Shopping</h3>
              <p className="text-gray-500">
                Your data and payments are completely secure
              </p>
            </div>
          </li>
        </ul>

        <div className="review bg-white  shadow-md rounded-xl p-6">
          <div className="flex gap-3 items-center">
            <Image
              src={review}
              className="size-12 rounded-full"
              alt="Sarah Johnson profile img"
            />
            <div>
              <h3>Sarah Johnson</h3>
              <div className="rating flex gap-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
              </div>
            </div>
          </div>

          <blockquote className="mt-4">
            <p className='text-gray-700 italic mt-4'>
              "FreshCart has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
              Highly recommend!"
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}
