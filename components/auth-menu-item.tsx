"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useAuthFlow } from "../app/providers/AuthFlowProvider";
import Link from "next/link";

type AuthMenuItemProps = {
  index: number;
  header: string;
  subHeader: string;
  route: string;
};

export function AuthMenuItem({
  index,
  header,
  subHeader,
  route,
}: AuthMenuItemProps) {
  // const { authStage, setAuthStage } = useAuthFlow();
  // const params = useParams();
  // const routeIndex = parseInt(params.index as string);
  const path = usePathname();

  return (
    <>
      <div className="w-48 flex items-center space-x-2">
        {/* <button
          onClick={() => setAuthStage(index)}
          className={`px-3 py-1 rounded-lg text-white ${
            authStage === index
              ? "bg-green-500 border border-green-500"
              : "border border-dashed"
          }`}
        >
          {index}
        </button> */}
        <Link
          href={`/auth-flow/${route}`}
          className={`px-3 py-1 rounded-lg text-white ${
            path.includes(route)
              ? "bg-green-500 border border-green-500"
              : "border border-dashed"
          }`}
        >
          {index}
        </Link>
        <div>
          <div
            className={`text-sm ${
              path.includes(route) ? "text-white" : "text-blue-100"
            }`}
          >
            {header}
          </div>
          <div className="text-xs text-blue-400">{subHeader}</div>
        </div>
      </div>
    </>
  );
}
