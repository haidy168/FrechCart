'use client'
import { Provider } from "react-redux"  ;
import { AppStore, createStore,PreloadedState } from "@/store/store";

import { ReactNode, useRef } from "react";
import { ToastContainer, Bounce } from 'react-toastify';  

type ProviderProps= {
  children:ReactNode
   preloadedState: PreloadedState;
}
export default function Providers({
  children,
  preloadedState,
}: ProviderProps) {
const storeRef = useRef<null|AppStore>(null)
if(storeRef.current==null){
  storeRef.current=createStore(preloadedState)
}
  return<>
  <Provider store={storeRef.current} >
     {children} 
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/> 
     </Provider>
  </>
}
