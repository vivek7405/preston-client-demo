import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback="Loading...">
      {/* @ts-expect-error Async Server Component */}
      <AuthStatus />
    </Suspense>
  );
}
