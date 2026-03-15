import { ReactNode } from "react";
import '../styles/globals.css';
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {Exo} from 'next/font/google'
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer, Bounce } from 'react-toastify';  
import Providers from "@/components/providers/Providers";
import { verifytoken } from "@/features/auth/server/auth.action";
import { getLoggedUserCard } from "@/features/cart/server/cart.action";
import { CartState } from "@/features/cart/type/cart.type";
import { error } from "console";

config.autoAddCss = false;

const exo = Exo({ subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable:"--font-exo"
});

let defaultCartState: CartState={
   cartId :'',
   numOfCartItems:0, 
  products: [],
     totalCartPrice: 0,
    isLoading: false,
    error: null ,
};




export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const authValues = await verifytoken();
  let cartState= defaultCartState;
  if(authValues.isAuthenticated){
    try{
      const cartResponse= await getLoggedUserCard();
      cartState={
        cartId:cartResponse.cartId, 
        numOfCartItems: cartResponse.numOfCartItems, 
        products:cartResponse.data.products,
        totalCartPrice: cartResponse.data.totalCartPrice,
        isLoading: false,
        error:null,


      }
    }catch(error ){
     cart:defaultCartState;
    }
  }
 
  return (
    <html lang="en">
      <body className={`${exo.className} font-medium`}>
        <Providers  preloadedState={{auth: authValues, cart: cartState}}>
        <Navbar />
        {children}
        <Footer />
       
        </Providers>
     
      </body>
    </html>
  );
}