import Link from "next/link";

export default function PlansPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-sm">This is the plans page</p>
      <Link href="/auth-flow/account-type" className="text-sm text-blue-500">
        Go back
      </Link>
    </div>
  );
}
