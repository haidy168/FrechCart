"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBillWave,
  faShieldAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

interface PaymentMethodsProps {
  selectedMethod: "cash" | "card";
  onMethodChange: (method: "cash" | "card") => void;
}

export default function PaymentMethods({
  selectedMethod,
  onMethodChange,
}: PaymentMethodsProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      
      {/* Header */}
      <div className="bg-[#4fb44d] p-4 flex items-center gap-3 text-white">
        <FontAwesomeIcon icon={faWallet} className="text-xl" />
        <div>
          <h2 className="font-bold text-lg leading-tight">Payment Method</h2>
          <p className="text-xs text-green-50 opacity-90">
            Select how you like to pay
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">

        {/* Card Payment */}
        <label
          className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
            selectedMethod === "card"
              ? "border-[#4fb44d] bg-green-50/50"
              : "border-gray-100 hover:border-gray-200 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="payment"
              value="card"
              checked={selectedMethod === "card"}
              onChange={() => onMethodChange("card")}
              className="w-5 h-5 text-[#4fb44d] focus:ring-[#4fb44d]"
            />

            <div className="flex flex-col">
              <span className="font-bold text-gray-800">Pay via Card</span>
              <span className="text-xs text-gray-500">
                Credit or Debit Card
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <FontAwesomeIcon icon={faCreditCard} className="text-xl" />
          </div>
        </label>

        {/* Cash Payment */}
        <label
          className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
            selectedMethod === "cash"
              ? "border-[#4fb44d] bg-green-50/50"
              : "border-gray-100 hover:border-gray-200 bg-gray-50/30"
          }`}
        >
          <div className="flex items-center gap-4">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={selectedMethod === "cash"}
              onChange={() => onMethodChange("cash")}
              className="w-5 h-5 text-[#4fb44d] focus:ring-[#4fb44d]"
            />

            <div className="flex flex-col">
              <span className="font-bold text-gray-800">
                Cash on Delivery
              </span>
              <span className="text-xs text-gray-500">
                Pay when you receive your order
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-400">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-xl" />
          </div>
        </label>

        {/* Security Note */}
        <div className="mt-4 flex items-center justify-center gap-2 py-2 px-4 bg-gray-50 rounded-lg border border-gray-100">
          <FontAwesomeIcon icon={faShieldAlt} className="text-green-500 text-sm" />
          <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
            100% Secure & Encrypted Payment
          </span>
        </div>

      </div>
    </div>
  );
}