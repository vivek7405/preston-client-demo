import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="text-sm">This is the terms page</p>
      <Link href="/auth-flow/account-type" className="text-sm text-blue-500">
        Go back
      </Link>
    </div>
  );
}
