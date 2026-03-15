'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faShareNodes,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { Product } from "@/features/products/types/Product.types";
import { useState } from "react";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {

  const {
    images,
    title,
    price,
    priceAfterDiscount,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    description,
    category,
    brand,
  } = product;

  const [count, setCount] = useState(1);

  const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;

  const discountPercentage = priceAfterDiscount
    ? Math.round(((price - priceAfterDiscount) / price) * 100)
    : 0;

  const isLowStock = quantity > 0 && quantity < 10;

  const finalPrice = priceAfterDiscount || price;

  const increment = () => {
    if (count < quantity) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <section id="product-detail" className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Product Images */}
          <div id="product-images" className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">

              <ImageGallery
                items={images.map((image) => ({
                  original: image,
                  thumbnail: image,
                }))}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                thumbnailPosition="bottom"
              />

            </div>
          </div>

          {/* Product Info */}
          <div id="product-info" className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-sm p-6">

              {/* Category & Brand */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  href="#"
                  className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition"
                >
                  {category.name}
                </Link>

                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                  {brand.name}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                {title}
              </h1>

              {/* Ratings */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-gray-600">
                  {ratingsAverage} ({ratingsQuantity} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center flex-wrap gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  {finalPrice} EGP
                </span>

                {onSale && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {price} EGP
                    </span>

                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                      Save {discountPercentage}%
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full ${
                    isLowStock
                      ? "bg-yellow-50 text-yellow-700"
                      : quantity > 0
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isLowStock
                        ? "bg-yellow-600"
                        : quantity > 0
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></span>

                  {isLowStock
                    ? `Only ${quantity} left. Order soon!`
                    : quantity > 0
                    ? "In Stock"
                    : "Out of Stock"}
                </span>
              </div>

              {/* Description */}
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>

                <div className="flex items-center gap-4">

                  <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">

                    <button
                      onClick={decrement}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>

                    <input
                      type="number"
                      min={1}
                      max={quantity}
                      value={count}
                      onChange={(e) => setCount(+e.target.value)}
                      className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                    />

                    <button
                      onClick={increment}
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>

                  </div>

                  <span className="text-sm text-gray-500">
                    ({quantity}) available
                  </span>

                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Price:</span>

                  <span className="text-2xl font-bold text-primary-600">
                    {finalPrice * count} EGP
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">

                <button className="flex-1 bg-green-600 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-green-700 transition flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>

                <button className="flex-1 bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faBolt} />
                  Buy Now
                </button>

              </div>

              {/* Wishlist & Share */}
              <div className="flex gap-3">

                <button className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-600">
                  <FontAwesomeIcon icon={faHeart} />
                  Wishlist
                </button>

                <button className="flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-500 hover:text-primary-600">
                  <FontAwesomeIcon icon={faShareNodes} />
                  Share
                </button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}