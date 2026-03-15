'use client'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLock, faSpinner, faStar,faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Link from 'next/link'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { SubmitHandler, useForm } from 'react-hook-form'

import {LoginFormValues, loginSchema} from '../../schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import loginAction from '../../server/login.actions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { object } from 'zod'
import { setToken } from '../../server/auth.action'
import { setAuthInfo } from '../../store/auth.slice'
import { useDispatch } from 'react-redux'

export default function LoginForm() {
const router = useRouter();
const dispatch = useDispatch();
  const {register, handleSubmit,formState:{errors, isSubmitting},setError  } = useForm<LoginFormValues>({
    defaultValues:{
      email:'',
      password:'' ,
      rememberMe: false,
    },
    resolver:zodResolver(loginSchema),
    mode:'onSubmit',
    reValidateMode:'onChange'
  })
  const onSubmit:SubmitHandler<LoginFormValues>=async (values)=>{
    try{
      const response= await loginAction(values);


      if(response?.success){
        // ^ set token
        await setToken(response.data.token,values.rememberMe)
 dispatch(
  setAuthInfo({
    isAuthenticated: true,
    userInfo: response.data.user
  })
);    toast.success(response?.message);
        setTimeout(() => {
          router.push('/')
        },3000);
      }


     else{
           if (response?.errors) {
             Object.keys(response.errors).forEach((key) => {
               setError(key as keyof LoginFormValues, {
                 message: response.errors[key],
               });
             });
           }
     
           if (response?.message) {
             toast.error(response.message);
           }
         }
    }catch(error){

    }
  };
  return <>
      <div className='w-full'>
        <div className='bg-white rounded-2xl shadow-xl p-8 lg:p-12'>
          <div className='text-center mb-8'>
            <div className='flex items-center justify-center mb-4'  >
              <span className='text-3xl font-bold text-green-600'>
                Fresh<span className='text-gray-800'>Cart</span>
              </span>
            </div>
            <h1 className='text-2xl font-bold text-gray-800 mb-2'> Welcome Back!</h1>
            <p className='text-gray-600'>Sign in to continue your fresh shopping experience</p>
          </div>
          <div className='space-y-3 mb-6'>
            <button type='button' className='flex items-center w-full justify-center gap-3 border-2 btn border-gray-100'>
              <FontAwesomeIcon icon={faGoogle}className='text-red-600 text-lg'/>
              <span className='font-medium text-gray-600'>Continue With Google </span>
            </button>
            <button type='button' className='flex items-center w-full justify-center gap-3 border-2 btn border-gray-100'>
              <FontAwesomeIcon icon={faFacebook}className='text-blue-600 text-lg'/>
              <span className='font-meduim text-gray-600'>Continue With Google </span>
            </button>
          </div>

          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='px-4 bg-white text-gray-500 font-medium'>
                OR CONTINUE WITH EMAIL
              </span>
            </div>
          </div>
          <form className='space-y-8'onSubmit={handleSubmit(onSubmit)} >
            <div >
              <label htmlFor='email' className='block text-sm mb-2 font-semibold text-gray-700'>
                Email Adress
              </label>
              <div className='relative'>
                <input  {...register('email')} className='w-full px-4 py-3 pl-8 rounded-xl border border-gray-400 focus:outline-gray-500 p-5 ' placeholder='Enter Your Email' id="email" type='email' />
                  <FontAwesomeIcon icon={faEnvelope} className='absolute left-4 top-1/2 -translate-1/2 text-gray-400'/>
              
            </div>
            {errors.email && <p className='text-red-500 mt-1'>*{errors.email?.message}</p>}
            </div>
            <div >
              <div className="flex justify-between items-center mb-2 mt-10">
  <label
    htmlFor="password"
    className="block text-sm font-semibold text-gray-700"
  >
    Password
  </label>

  <Link
    href="/forgetPassword"
    className="text-sm text-green-600 hover:text-green-700 font-semibold"
  >
    Forgot Password?
  </Link>
</div>
<div>
   <label htmlFor='password' className='block text-sm mb-2 font-semibold text-gray-700'>
              </label>
              <div className='relative'>
                <input {...register('password')} className='w-full px-4 py-3 pl-8 rounded-xl border border-gray-400 focus:outline-none' placeholder='Enter Your Password' id="password" type='password' />
                  <FontAwesomeIcon icon={faLock} className='absolute left-4 top-1/2 -translate-1/2 text-gray-400'/>
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500" >
                  <FontAwesomeIcon icon={faEye}/>
                  
                  </button>
            </div>
     {errors.password && <p className='text-red-500 mt-1'>*{errors.password?.message}</p>}
            </div>
            <div className='flex items-center  mt-5'>
              <label className='flex items-center '>
                <input type='checkbox' {...register('rememberMe')}  className='h-4 w-4 text-green-600  accent-green-600 border-2 border-gray-200' />
             <span className='text-gray-700 ml-3 text-sm' >Keep me signed in</span>
              </label>
            </div>
            <button type='submit'disabled={isSubmitting}  className='w-full mt-5 bg-green-600 text-white py-3 px-4 rounded-xl cursor-pointer disabled:opacity-50 hover:bg-green-700 disabled:cursor-not-allowed' >
              {isSubmitting? <>
              <FontAwesomeIcon icon={faSpinner} spin className='me-2' />
              <span>Signning In...</span>
              </>:(<> Sign In</>)}
            </button>
             
           </div>
          </form>

          <div className='mt-8 border-t text-center border-gray-100'>
          <p className='text-gray-600'>
          New to FreshCart?
          <Link href='/signup' className='text-green-600 font-semibold cursor-pointer hover:text-green-300'>Create an account</Link>
          </p>
          </div>

          <div className='flex items-center justify-center space-x-6 text-xs mt-6 text-gray-500'>
          <div className='flex items-center'>
          <FontAwesomeIcon icon={faLock} className='mr-1'/>
          SSL Secured
          </div>
          <div className='flex items-center'>
          <FontAwesomeIcon icon={faUsers} className='mr-1'/>
          50K+ Users
          </div>
          <div className='flex items-center'>
          <FontAwesomeIcon icon={faStar} className='mr-1'/>
          4.9 Rating
          </div>

          </div>
             
        </div>
      </div>
    </>
  
}
