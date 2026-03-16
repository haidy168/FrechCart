'use server'
import { success } from "zod";
import { LoginFormValues,loginSchema } from "../schemas/login.schema"
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { fa } from "zod/v4/locales";
export default async function loginAction(values:LoginFormValues){
  const validationResult= loginSchema.safeParse(values);
  if(!validationResult.success){
   const errors:Record<string,string> ={}

    validationResult.error.issues.forEach((issue)=>{
      const key = issue.path[0] as string;
      const message = issue.message;
      if(!errors['password']){
        errors['password'] = message;
      }
    })
    return{
      success:false, 
      message:"validation errors",
      errors,
    }
  }
  try{
    const { rememberMe, ...requestData} = values
  const options:AxiosRequestConfig={
    url:"https://ecommerce.routemisr.com/api/v1/auth/signin",
    method:'POST',
    data: requestData
  }
  const {data} = await axios.request(options) ; 
  if(data.message==='success'){
    return{
    success:true,
    message: 'User logged in successfuly',
    data
  }}
  return{
    success:false, 
    message:"Login failed"
  }
  }catch(error){
    if(error instanceof AxiosError){
      const errorMessage = error.response?.data.message;
      if(errorMessage=='Incorrect email or password'){
        return{
          success: false,
          message:'wrong credentails',
          errors:{
           password:'Incorrect email or password',
          }
        }
      }
    }
 return{
    success:false, 
    message:"Login failed"
  }
  }
}