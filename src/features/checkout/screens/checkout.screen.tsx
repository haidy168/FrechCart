'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReceipt, 
  faArrowLeft, 
  faShoppingBag, 
  faTruck, 
  faShieldAlt, 
  faBox 
} from '@fortawesome/free-solid-svg-icons';
import { SubmitErrorHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shippingAddressSchema } from '../schema/checkout.schema';
import ShippingForm, { ShippingAddressFormValues } from '../component/ShipingForm';
import PaymentMethods from '@/features/categories/components/PaymentMethods';
import { useState } from 'react';
import { createCashOrder, createOnlineOrder } from '../sever/checkout.action';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearCart } from '@/features/cart/store/cart.slice';



export default function CheckoutScreen() {
  const dipatch = useAppDispatch();
  const router = useRouter()
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  defaultValues: {
    city: "",
    details: "",
    phone: "",
  },
  resolver: zodResolver(shippingAddressSchema),
  mode: "onSubmit",
  reValidateMode: "onChange",
});

const onSubmit:SubmitErrorHandler<ShippingAddressFormValues> = async(values)=>{
  try{
  if(!cartId){
    return;
  }
    if(paymentMethod==='cash'){
      const response = await createCashOrder({
        cartId,
        shippingAddress:values
      });
      if(response.state==='success'){
        dipatch(clearCart())
        toast.success("order created successfully")
        setTimeout(()=>{
          router.push(`/order`)
        },3000)
      }
    }else{
      const response=await createOnlineOrder({
       cartId,
        shippingAddress:values,
        url:location.origin,
      });
      if(response.status==='success'){
         dipatch(clearCart())
        toast.loading("redirecting you to payment gateway");
         setTimeout(()=>{
          location.href=response.session.url
        },3000)
      }
    }
  }catch(error){

  }

}

const[paymentMethod,setPaymentMethod] = useState<'cash'| 'casrd'>('cash');

const {cartId} = useAppSelector((state)=>state.cart)



  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        
        {/* Checkout Progress Header */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href={`/`} className="hover:text-green-600 transition">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href={`/cart`} className="hover:text-green-600 transition">Cart</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">Checkout</span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <span className="bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                  <FontAwesomeIcon icon={faReceipt} />
                </span>
                Complete Your Order
              </h1>
              <p className="text-gray-500 mt-2">
                Review your items and complete your purchase
              </p>
            </div>
            
            <Link href={`/cart`} className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} />
              Back to Cart
            </Link>
          </div>
        </div>

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-6">
              
            <ShippingForm register={register} errors={errors}/>
            <PaymentMethods
                selectedMethod={paymentMethod} 
  onMethodChange={(method) => setPaymentMethod(method)} 
/>

            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
                
                {/* Header */}
                <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingBag} />
                    Order Summary
                  </h2>
                  <p className="text-green-100 text-sm mt-1">
                  </p>
                </div>

                <div className="p-5">

                  {/* Cart Items Preview */}
                  <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                    
                    {/* Example Item */}
                    {/*
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                        <img 
                          src={item.product.imageCover} 
                          alt={item.product.title} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {item.product.title}
                        </p>
                        <p className="text-xs text-gray-500">Qty: {item.count}</p>
                      </div>
                      <div className="text-sm font-bold text-gray-900">
                        {item.price} EGP
                      </div>
                    </div>
                    */}

                  </div>

                  <hr className="border-gray-100 my-4" />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-gray-900">900 EGP</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faTruck} className="text-gray-400" />
                        Shipping
                      </span>
                      <span>
                        {/* Shipping Price */}
                      </span>
                    </div>
                  </div>

                  <hr className="border-gray-100 my-4" />

                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">
                        123
                      </span>
                      <span className="text-sm text-gray-500 ml-1">EGP</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faShieldAlt} />
                    Proceed to Payment
                  </button>

                  {/* Trust Badges */}
                  <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                    
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FontAwesomeIcon icon={faShieldAlt} className="text-green-500" />
                      <span>Secure</span>
                    </div>

                    <div className="w-px h-4 bg-gray-200"></div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FontAwesomeIcon icon={faTruck} className="text-blue-500" />
                      <span>Fast Delivery</span>
                    </div>

                    <div className="w-px h-4 bg-gray-200"></div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <FontAwesomeIcon icon={faBox} className="text-orange-500" />
                      <span>Easy Returns</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </form>

      </div>
    </div>
  );
}