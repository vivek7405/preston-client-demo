"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-red-500 hover:text-red-600 transition-all"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
