import{email, z} from "zod" ;
export const signupSchems = z.object({
  name: z.string().nonempty('name is required').min(3,"name must be at least 3 letter ").max(25, "name must be less than 25 characher"),
  email: z.string("invalid eamil address").nonempty('email is required').pipe(z.email('invalid email address')),
  password: z.string().min(8, "password must contain at least 8 character").regex(/[A-Z]/,"password must contain at least one Uppercase letter")
 .regex(/[a-z]/, "passwoard must contain at least one lowercase letter")

 .regex(/[!@#$%^&*()-,.?:{}|<>]/, "password must contain at least one special character")
 .nonempty('Password is required'),

 repassword: z.string().nonempty("repassword is required") ,
 phone:z.string().regex(/^(\+2)?01[0125][0-9]{8}$/, "only Egyption Phone numbers are allowed").nonempty('phone is required'),
 terms:z.boolean().refine((value)=>value===true,{
  message:"you must accept the terms and condition "
 })
}).refine((data)=>data.password===data.repassword,{
  path:['repassword'],
  message:"password and confirm password must be match"
})
export type signupFormValues = z .infer<typeof signupSchems>    