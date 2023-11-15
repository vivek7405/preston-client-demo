"use client";

import { useAuthFlow } from "@/app/providers/AuthFlowProvider";
import { useRouter } from "next/navigation";

export default function AuthFlowAccountDetailsHome() {
  const router = useRouter();
  const { accountType } = useAuthFlow();
  return router.replace(`/auth-flow/account-details/${accountType}`);
}
