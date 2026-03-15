"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faCity,
  faHome,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FieldErrors, UseFormRegister } from "react-hook-form";
export interface ShippingAddressFormValues {
  city: string;
  details: string;
  phone: string;
}

interface ShippingAddressProps {
  register: UseFormRegister<ShippingAddressFormValues>;
  errors: FieldErrors<ShippingAddressFormValues>;
}

export default function ShippingForm({ register, errors }: ShippingAddressProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      {/* Header Section */}
      <div className="bg-green-600 p-4 flex items-center gap-3 text-white">
        <FontAwesomeIcon icon={faHome} />
        <div>
          <h2 className="font-bold text-lg">Shipping Address</h2>
          <p className="text-xs text-green-100">Where should we deliver your order?</p>
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Info Alert */}
        <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl">
          <FontAwesomeIcon icon={faInfoCircle} className="text-blue-500 mt-1" />
          <div>
            <p className="text-sm text-blue-800 font-medium">Delivery Information</p>
            <p className="text-xs text-blue-600">Please ensure your address is accurate for smooth delivery</p>
          </div>
        </div>

        {/* City Field */}
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
            City <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
              <FontAwesomeIcon icon={faCity} />
            </div>
            <input
              type="text"
              id="city"
              placeholder="e.g. Cairo, Alexandria, Giza"
              {...register("city")}
              className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                errors.city
                  ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              }`}
            />
          </div>
          {errors.city && (
            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
              {errors.city.message}
            </p>
          )}
        </div>

        {/* Street Address (Details) Field */}
        <div>
          <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-2">
            Street Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <input
              type="text"
              id="details"
              placeholder="Street name, building number, floor, apartment..."
              {...register("details")}
              className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                errors.details
                  ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              }`}
            />
          </div>
          {errors.details && (
            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
              {errors.details.message}
            </p>
          )}
        </div>

        {/* Phone Number Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <input
              type="tel"
              id="phone"
              placeholder="01xxxxxxxxx"
              {...register("phone")}
              className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                errors.phone
                  ? "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                  : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
              }`}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">
              Egyptian numbers only
            </span>
          </div>
          {errors.phone && (
            <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}