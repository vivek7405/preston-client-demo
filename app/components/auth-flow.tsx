"use client";

import { useAuthFlow } from "../providers/AuthFlowProvider";
import { AuthFlowAccountType } from "./auth-flow-account-type";

export function AuthFlow() {
  const { authStage, setAuthStage } = useAuthFlow();

  return (
    <>
      <div className="w-full h-full bg-white flex items-center justify-center">
        {authStage === 1 && <AuthFlowAccountType />}
        {/* <button
          onClick={() => setAuthStage(authStage - 1)}
          disabled={authStage === 1}
        >
          Back
        </button>
        AUTH {authStage}{" "}
        <button
          onClick={() => setAuthStage(authStage + 1)}
          disabled={authStage === 4}
        >
          Next
        </button> */}
      </div>
    </>
  );
}
