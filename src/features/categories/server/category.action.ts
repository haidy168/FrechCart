'use server'

import axios, { AxiosRequestConfig } from "axios"
import { CategoriesResponse } from "../types/category.type";

export async function getAllcategories(): Promise<CategoriesResponse>{
  try{
    const options: AxiosRequestConfig ={
      url:`https://ecommerce.routemisr.com/api/v1/categories`,
      method:"GET",
    }
    const {data} = await axios.request(options);
    return data ; 
  }catch(error ){
throw error ; 
  }
}