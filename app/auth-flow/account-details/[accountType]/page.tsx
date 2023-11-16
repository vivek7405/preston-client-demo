"use client";

import Form from "@/components/form";
import RegisterForm from "@/components/register-form";
import { useParams } from "next/navigation";

export default function AuthFlowAccountDetails() {
  const params = useParams();
  const accountType = params.accountType as string;

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-3 items-center justify-center">
        <div className="flex flex-col space-y-1 items-center justify-center">
          <p className="font-medium text-xl">Account Details</p>
          <p className="text-xs text-neutral-400">Add your personal info</p>
        </div>
        <div className="flex space-x-3 pt-5">
          <button
            onClick={() => {
              alert(
                "Google Sign In is not yet implemented. Please use email sign in below."
              );
            }}
            className="flex space-x-3 border rounded-lg p-2 hover:bg-neutral-50"
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="Google"
            />
            <p className="pl-5 pr-8">Sign in with Google</p>
          </button>
          <button
            onClick={() => {
              alert(
                "Apple Sign In is not yet implemented. Please use email sign in below."
              );
            }}
            className="flex space-x-3 border rounded-lg p-2 hover:bg-neutral-50"
          >
            <img src="/apple_icon.png" alt="Apple" />
            <p className="pl-5 pr-8">Sign in with Apple</p>
          </button>
        </div>
        <div className="pt-7 flex items-center justify-center space-x-2">
          <hr className="w-28" />
          <p className="text-neutral-400 text-sm">Or with email</p>
          <hr className="w-28" />
        </div>
        {/* <p>{accountType}</p> */}
        {/* <Form type="login" /> */}
        <RegisterForm />
      </div>
    </>
  );
}
