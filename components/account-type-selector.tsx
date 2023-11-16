"use client";

import { UserSquareSVG } from "@/lib/assets/user-square-svg";
import { useAuthFlow } from "../app/providers/AuthFlowProvider";
import { BriefCaseSVG } from "@/lib/assets/briefcase-svg";

type SelectorType = "creator" | "agency";
type AccountTypeSelectorProps = {
  // accountType: SelectorType;
  // setAccountType: (accountType: SelectorType) => void;
  selector: SelectorType;
};

export function AccountTypeSelector({
  // accountType,
  // setAccountType,
  selector,
}: AccountTypeSelectorProps) {
  const { accountType, setAccountType } = useAuthFlow();

  return (
    <>
      <button
        onClick={() => setAccountType(selector)}
        className={`w-56 h-20 flex items-center justify-center space-x-4 border border-dashed rounded-lg ${
          accountType === selector ? "border-blue-500 bg-blue-50" : ""
        }`}
      >
        {/* <div className="p-3 bg-blue-500 rounded-lg" /> */}
        {selector === "creator" ? (
          <UserSquareSVG selected={accountType === selector} />
        ) : (
          <BriefCaseSVG selected={accountType === selector} />
        )}
        <div className="flex flex-col space-y-1 items-start">
          <p className="font-medium capitalize">{selector}</p>
          <p className="text-xs text-neutral-400">
            Sign-up as {selector === "creator" ? "a" : "an"} {selector}
          </p>
        </div>
      </button>
    </>
  );
}
