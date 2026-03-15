import { faCalendarDays, faCircleCheck, faClock, faCreditCard, faTruck } from "@fortawesome/free-regular-svg-icons";
import { faHashtag, faMapMarkerAlt, faMoneyBill, faPhone, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Order } from "../type/order.type";
import { useState } from "react";

export default function OrderCard({ orderInfo }: { orderInfo: Order }) {
    const[isExpanded,setIsExpanded]=useState(false);
    function getStatus() {
        if (orderInfo.isDelivered) {
            return {
                label: "Delivered",
                icon: faCircleCheck,
                colors: {
                    background: "bg-green-100",
                    text: "text-green-600",
                    border: "border-green-300"
                }
            }
        }
        if (orderInfo.isPaid) {
        return {
            label: "On the way",
            icon: faTruck,
            colors: {
                background: "bg-green-100",
                text: "text-green-600",
                border: "border-green-300"
            }
        };
    }

   
    return {
        label: "Processing",
        icon: faClock,
        colors: {
            background: "bg-orange-100",
            text: "text-orange-600",
            border: "border-orange-300"
        }
    };
}
    const status = getStatus(); 


    return (
        <div className="bg-white rounded-xl border transition-all duration-300 overflow-hidden border-gray-100 shadow-sm hover:shadow-md">
            {/* Main Content */}
            <div className="p-4"> {/* تقليل الـ padding الكلي */}
                <div className="flex gap-4"> {/* تقليل الفراغ بين الصورة والبيانات */}
                    
                    {/* Product Image Stack */}
                    <div className="relative shrink-0">
                        {/* تصغير حجم الحاوية للصورة لتكون متناسقة */}
                        <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                            {orderInfo.cartItems[0] && (
                                <img
                                    src={orderInfo.cartItems[0].product.imageCover}
                                    alt=""
                                    className="w-full h-full object-contain p-1"
                                />
                            )}
                        </div>
                        
                        {/* Multi-item indicator */}
                        {orderInfo.cartItems.length > 1 && (
                            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-gray-900 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                                +{orderInfo.cartItems.length - 1}
                            </div>
                        )}
                    </div>

                    {/* Order Info */}
                    <div className="flex-1 min-w-0">
                        {/* Status & Order Number Row */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                                {/* استخدام الألوان الديناميكية من الـ status */}
                                <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md mb-1 ${status.colors.background}`}>
                                    <FontAwesomeIcon icon={status.icon} className={`text-[10px] ${status.colors.text}`} />
                                    <span className={`text-[11px] font-bold uppercase tracking-wider ${status.colors.text}`}>
                                        {status.label}
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-900 text-base flex items-center gap-1">
                                    <FontAwesomeIcon icon={faHashtag} className="text-[10px] text-gray-400" />
                                    {orderInfo.id || orderInfo._id.slice(-6)}
                                </h3>
                            </div>

                            {/* Payment Method - تصغير الأيقونة */}
                            <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${orderInfo.paymentMethodType === 'card' ? 'bg-purple-50' : 'bg-gray-100'}`}>
                                <FontAwesomeIcon 
                                    icon={orderInfo.paymentMethodType === 'card' ? faCreditCard : faMoneyBill} 
                                    className={`text-sm ${orderInfo.paymentMethodType === 'card' ? 'text-purple-600' : 'text-gray-600'}`}
                                />
                            </div>
                        </div>

                      {/* Date & Items */}
<div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
    <span className="flex items-center gap-1.5">
        <FontAwesomeIcon icon={faCalendarDays} className="text-xs text-gray-400" />
        {new Date(orderInfo.createdAt).toLocaleDateString("en-Us",{
            day:'numeric',
            month:'short',
        })}
    </span>
    <span className="text-gray-300">•</span>
    <span>{orderInfo.cartItems.length} Items</span>
</div>

{/* Total Price Section */}
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
    <div className="text-sm text-gray-500">Total Amount</div>
    <div className="text-lg font-bold text-green-600">
        {orderInfo.totalOrderPrice} EGP
    </div>
</div>

{/* Expanded Details */}
<div className="border-t border-gray-100 bg-gray-50/50">
  
  {/* Products List */}
  <div className="p-5 sm:p-6">
    <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-4">
      <div className="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faReceipt}
          className="text-xs text-primary-600"
        />
      </div>
      Order Items
    </h4>

    <div className="space-y-3">
      {orderInfo.cartItems.map((item) => (
        <div key={item._id} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
          {/* Product Image */}
          <div className="w-16 h-16 rounded-xl bg-gray-50 p-2 shrink-0">
            <img
              src={item.product.imageCover}
              alt={item.product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 truncate">
              {item.product.title}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              <span className="font-medium text-gray-700">{item.count}</span> × {item.price.toLocaleString()} EGP
            </p>
          </div>

          {/* Total Price Per Item */}
          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-gray-900">
              {(item.count * item.price).toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">EGP</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Shipping & Summary */}
  <div className="px-5 sm:px-6 pb-5 sm:pb-6 grid sm:grid-cols-2 gap-4">
    
    {/* Shipping Address */}
    <div className="p-4 bg-white rounded-xl border border-gray-100">
      <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-lg bg-blue-100 flex items-center justify-center">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-xs text-blue-600"
          />
        </div>
        Delivery Address
      </h4>
      <div className="space-y-2">
  <p className="font-medium text-gray-900">{orderInfo.shippingAddress.city}</p>
  <p className="text-sm text-gray-600 leading-relaxed">
    {orderInfo.shippingAddress.details}
  </p>
  <p className="text-sm text-gray-600 flex items-center gap-2 pt-1">
    <FontAwesomeIcon
      icon={faPhone}
      className="text-xs text-gray-400"
    />
    {orderInfo.shippingAddress.phone}
  </p>
</div>

{/* Order Summary */}
<div className={`p-4 rounded-xl bg-blue-100 border border-blue-200`}>
  <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-2 mb-3">
    <div className={`w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center`}>
      <FontAwesomeIcon
        icon={faTruck}
        className="text-xs text-white"
      />
    </div>
    Order Summary
  </h4>

  <div className="space-y-2 text-sm">
    {/* Subtotal */}
    <div className="flex justify-between text-gray-600">
      <span>Subtotal</span>
      <span className="font-medium">{orderInfo.totalOrderPrice} EGP</span>
    </div>

    {/* Shipping Price */}
    <div className="flex justify-between text-gray-600">
      <span>{orderInfo.shippingPrice===0?'free':orderInfo.shippingPrice +'EGP'}</span>
      <span className="font-medium">Shipping Price</span> {/* يمكنك استبدالها بمتغير السعر إذا وجد */}
    </div>

    <hr className="border-gray-200/50 my-2" />

    {/* Total Price */}
    <div className="flex justify-between items-center pt-1">
      <span className="text-gray-900">Total</span>
      <span className="font-semibold text-gray-900 text-lg">
        {orderInfo.totalOrderPrice + orderInfo.shippingPrice} 
        <span className="text-xs ml-1">EGP</span>
      </span>
    </div>
  </div>
</div>
    </div>

  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
}