'use client'

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt, faArrowLeft, faShoppingBag, faTruck, faShieldAlt, faBox } from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { shippingAddressSchema } from '../schema/checkout.schema';
import ShippingForm, { ShippingAddressFormValues } from '../component/ShipingForm';
import PaymentMethods from '@/features/categories/components/PaymentMethods';
import { useState } from 'react';
import { createCashOrder, createOnlineOrder } from '../sever/checkout.action';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { clearCart } from '@/features/cart/store/cart.slice';

export default function CheckoutScreen() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { cartId } = useAppSelector((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<ShippingAddressFormValues>({
    defaultValues: {
      city: "",
      details: "",
      phone: "",
    },
    resolver: zodResolver(shippingAddressSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<ShippingAddressFormValues> = async (values) => {
    try {
      if (!cartId) return;

      // تأكد إن كل قيمة موجودة string
      const shippingAddress = {
        city: values.city || '',
        details: values.details || '',
        phone: values.phone || '',
      };

      if (paymentMethod === 'cash') {
        const response = await createCashOrder({
          cartId,
          shippingAddress
        });

        if (response.state === 'success') {
          dispatch(clearCart());
          toast.success("Order created successfully");
          setTimeout(() => router.push(`/order`), 3000);
        }
      } else {
        const response = await createOnlineOrder({
          cartId,
          shippingAddress,
          url: location.origin,
        });

        if (response.status === 'success') {
          dispatch(clearCart());
          toast.loading("Redirecting you to payment gateway");
          setTimeout(() => location.href = response.session.url, 3000);
        }
      }

    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* ... باقي الكود زي ما هو ... */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <ShippingForm register={register} errors={errors} />
              <PaymentMethods
                selectedMethod={paymentMethod}
                onMethodChange={(method) => setPaymentMethod(method)}
              />
            </div>
            {/* Right Column - Order Summary ... */}
          </div>
        </form>
      </div>
    </div>
  );
}