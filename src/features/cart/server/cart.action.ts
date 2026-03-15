"use server"

import axios, { AxiosRequestConfig } from "axios";
import { error } from "console";
import { METHODS } from "http";
import { Erica_One } from "next/font/google";
import { cookies } from "next/headers"
import { CartResponse } from "../type/cart.type";

export async function addProductToCart({productId}:{productId:string}) {
  const cookieStore= await cookies();
  const token = cookieStore.get("token")?.value||null;
  if(!token){
    console.log(cookieStore.getAll())
    throw new Error ("Authentication required");
  }
  try{
    const options:AxiosRequestConfig={
      url:`https://ecommerce.routemisr.com/api/v1/cart`,
      method:"POST",
      headers:{
        token
      },
      data:{
        productId,
      }
    }
    const {data} = await axios.request(options);
    return data;
  }catch(error){
    throw error
  }
}

export async function getLoggedUserCard():Promise<CartResponse>{
  const cookiesStore= await cookies() ; 
  const token = cookiesStore.get("token")?.value||null;
  if(!token){
    throw new Error("Authentication requirde")
  }
  try{
    const options:AxiosRequestConfig ={
      url:`https://ecommerce.routemisr.com/api/v1/cart` ,
      method:"GET",
      headers:{
        token,
      }
    }
    const {data} = await axios.request(options) ;
    return data;
  }catch(erroe){
    throw error ; 
  }
}

export async function removeProductFromCart(productId:string):Promise<CartResponse>{
   const cookiesStore= await cookies() ; 
  const token = cookiesStore.get("token")?.value||null;
  if(!token){
    throw new Error("Authentication requirde")
  }
  try{
    const options:AxiosRequestConfig ={
      url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
      method:"DELETE",
      headers:{
        token,
      }
    }
    const {data} = await axios.request(options) ;
    return data;
  }catch(erroe){
    throw error ; 
  }
}
export async function updateProductFromCart(productId:string, count: number):Promise<CartResponse>{
   const cookiesStore= await cookies() ; 
  const token = cookiesStore.get("token")?.value||null;
  if(!token){
    throw new Error("Authentication requirde")
  }
  try{
    const options:AxiosRequestConfig ={
      url:`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
      method:"PUT",
      headers:{
        token,
      },
      data:{
        count,
      }
    }
    
    const {data} = await axios.request(options) ;
    return data;
  }catch(erroe){
    throw error ; 
  }
}