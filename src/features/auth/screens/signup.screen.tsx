"use client"
import SignupForm from "../components/signup/SignupForm";
import SignupHero from "../components/signup/SignupHero";
import React from "react";

export default function SignupScreen() {
  return <>
  <div className="main py-12">
     <div className="signup-container container grid lg:grid-cols-2 lg:gap-12 ">
        <SignupHero />
        <SignupForm />
      </div>
    </div>
     
    </>
  
}
