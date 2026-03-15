"use client";

import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faSpinner, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupFormValues } from "../../schemas/signup.schema";
import { signupSchems } from "../../schemas/signup.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import signupActions from "../../server/signup.actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignupForm() {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<signupFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      phone: "",
      terms: false,
    },
    resolver: zodResolver(signupSchems),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onsubmit: SubmitHandler<signupFormValues> = async (values) => {
    const response = await signupActions(values);

    if (response?.success) {
      toast.success(response.message);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      if (response?.errors) {
        Object.keys(response.errors).forEach((key) => {
          setError(key as keyof signupFormValues, {
            message: response.errors[key],
          });
        });
      }

      if (response?.message) {
        toast.error(response.message);
      }
    }
  };

  return (
    <div className="bg-white shadow-xl space-y-8 rounded-xl p-10">

      <div className="text-center">
        <h2 className="text-3xl font-semibold">Create Your Account</h2>
        <p className="mt-1">Start your fresh journey with us today</p>
      </div>

      <div className="flex *:w-full *:items-center *:flex *:gap-2 *:justify-center gap-2 *:hover:bg-gray-100">
        <button className="btn bg-transparent border border-gray-400/50">
          <FontAwesomeIcon icon={faGoogle} className="text-red-600" />
          <span>Google</span>
        </button>

        <button className="btn bg-transparent border border-gray-400/50">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
          <span>Facebook</span>
        </button>
      </div>

      <div className="w-full h-0.5 bg-gray-400/30 relative">
        <span className="absolute left-1/2 top-1/2 -translate-1/2 px-4 bg-white">
          or
        </span>
      </div>

      <form className="space-y-7" onSubmit={handleSubmit(onsubmit)}>

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name*</label>
          <input
            className="form-control"
            type="text"
            id="name"
            {...register("name")}
            placeholder="Ali"
          />
          {errors.name && (
            <p className="text-red-600">*{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email*</label>
          <input
            className="form-control"
            type="email"
            id="email"
            {...register("email")}
            placeholder="Ali@example.com"
          />
          {errors.email && (
            <p className="text-red-600">*{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password*</label>
          <input
            className="form-control"
            type="password"
            id="password"
            {...register("password")}
            placeholder="Create a strong password"
          />
          {errors.password && (
            <p className="text-red-600">*{errors.password.message}</p>
          )}

          <div className="flex gap-2 items-center">
            <div className="w-full h-1 rounded-xl overflow-hidden bg-gray-200">
              <div className="w-1/4 bg-red-500 h-full"></div>
            </div>
            <span>weak</span>
          </div>

          <p className="text-sm">
            Must be at least 8 characters with numbers and symbols
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirm_password">Confirm Password*</label>
          <input
            className="form-control"
            type="password"
            id="confirm_password"
            {...register("repassword")}
            placeholder="Confirm Password"
          />
          {errors.repassword && (
            <p className="text-red-600">*{errors.repassword.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone">Phone Number*</label>
          <input
            className="form-control"
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="+201234567890"
          />
          {errors.phone && (
            <p className="text-red-600">*{errors.phone.message}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            className="accent-green-600 size-4"
            type="checkbox"
            {...register("terms")}
            id="terms"
          />

          <label htmlFor="terms">
            I agree to the{" "}
            <Link href="/terms" className="text-green-600 underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-green-600 underline">
              Privacy Policy
            </Link>
          </label>
        </div>

        {errors.terms && (
          <p className="text-red-600">*{errors.terms.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn bg-green-600 text-white w-full flex justify-center items-center gap-2 hover:bg-green-700 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <FontAwesomeIcon icon={faSpinner} spin />
              <span>Creating account...</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faUserPlus} />
              <span>Create My Account</span>
            </>
          )}
        </button>

      </form>

      <p className="text-center pt-8 border-t border-gray-300/60">
        Already have an account?
        <Link href="/login" className="text-green-600 underline">
          {" "}Sign in
        </Link>
      </p>
    </div>
  );
}