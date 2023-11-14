import { useAuthFlow } from "../providers/AuthFlowProvider";
import { AccountTypeSelector } from "./account-type-selector";
import { AuthFlowContinueButton } from "./auth-flow-continue-button";
import { AccountTypeSelectorHeader } from "./account-type-selector-header";

export function AuthFlowAccountType() {
  const { authStage, setAuthStage } = useAuthFlow();

  return (
    <>
      <div className="flex flex-col space-y-7">
        <AccountTypeSelectorHeader />

        <div className="flex items-center justify-center space-x-3">
          <AccountTypeSelector selector="creator" />
          <AccountTypeSelector selector="agency" />
        </div>

        <div className="w-full">
          <AuthFlowContinueButton onClick={() => setAuthStage(authStage + 1)} />
        </div>
      </div>
    </>
  );
}
