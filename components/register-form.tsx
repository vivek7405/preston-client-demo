"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (
          e.currentTarget.password.value !==
          e.currentTarget.confirmPassword.value
        ) {
          alert("Passwords do not match");
          return;
        }
        setLoading(true);
        fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: e.currentTarget.firstName.value,
            lastName: e.currentTarget.lastName.value,
            creatorName: e.currentTarget.creatorName.value,
            email: e.currentTarget.email.value,
            phoneNumber: e.currentTarget.phoneNumber.value,
            password: e.currentTarget.password.value,
          }),
        }).then(async (res) => {
          setLoading(false);
          if (res.status === 200) {
            toast.success("Account created! Redirecting to login...");
            setTimeout(() => {
              router.push("/login");
            }, 2000);
          } else {
            const { error } = await res.json();
            toast.error(error);
          }
        });
      }}
      className="flex flex-col space-y-4 px-4 py-8 sm:px-16"
    >
      <div className="w-full flex space-x-3">
        <input
          id="firstName"
          name="firstName"
          type="string"
          placeholder="First Name"
          required
          className="w-1/2 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
        <input
          id="lastName"
          name="lastName"
          type="string"
          placeholder="Last Name"
          required
          className="w-1/2 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="creatorName"
          name="creatorName"
          type="string"
          placeholder="Creator Name"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="string"
          placeholder="Phone Number"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div className="py-2 flex space-x-2 items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="w-5 h-5"
        />
        <label htmlFor="terms" className="text-sm text-neutral-500 font-medium">
          I Accept the{" "}
          <Link href="/terms" className="text-blue-500">
            Terms
          </Link>
        </label>
      </div>
      <button
        disabled={loading}
        type="submit"
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "bg-blue-500 text-white hover:bg-blue-600"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? <LoadingDots color="#808080" /> : <p>Continue</p>}
      </button>
      <p className="text-center text-sm text-neutral-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-400 hover:text-blue-500"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}
