"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useAuthFlow } from "../app/providers/AuthFlowProvider";

// type AuthFlowContinueButtonProps = {
//   onClick: () => void;
// };

export function AuthFlowContinueButton() {
  // const params = useParams();
  // const routeIndex = parseInt(params.index as string);
  const { accountType } = useAuthFlow();

  return (
    <>
      <Link
        href={`/auth-flow/account-details/${accountType}`}
        className="float-right rounded bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2"
      >
        Continue {">"}
      </Link>
    </>
  );
}
