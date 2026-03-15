'use server'

import { signupFormValues } from "../schemas/signup.schema";
import { signupSchems } from "../schemas/signup.schema";
import axios, { AxiosRequestConfig } from "axios";

export default async function signupActions(values: signupFormValues) {

  const validationResult = signupSchems.safeParse(values)

  if (!validationResult.success) {

    const errors: Record<string, string> = {}

    validationResult.error.issues.forEach((issue) => {
      const field = issue.path[0] as string
      const message = issue.message

      if (!errors[field]) {
        errors[field] = message
      }
    })

    return {
      success: false,
      message: 'validation errors',
      errors
    }
  }

  const { terms, repassword, ...rest } = values

  const requestBody = {
    ...rest,
    rePassword: repassword
  }

  try {

    const options: AxiosRequestConfig = {
      url: 'https://ecommerce.routemisr.com/api/v1/auth/signup',
      method: 'POST',
      data: requestBody,
    }

    const { data } = await axios.request(options)

    if (data.message === 'success') {
      return {
        success: true,
        message: 'account created successfully',
        data
      }
    }

    return {
      success: false,
      message: data.message || 'signup failed'
    }

  }
catch(error: any){
  console.log(error.response?.data || error.message)
  return {
    success: false,
    message: error.response?.data?.message || 'something went wrong'
  }
}

}