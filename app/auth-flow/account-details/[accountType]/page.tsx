"use client";

import Form from "@/components/form";
import { useParams } from "next/navigation";

export default function AuthFlowAccountDetails() {
  const params = useParams();
  const accountType = params.accountType as string;

  return (
    <>
      <div className="w-full h-full flex flex-col space-y-3 items-center justify-center">
        <p>{accountType}</p>
        <Form type="login" />
      </div>
    </>
  );
}
