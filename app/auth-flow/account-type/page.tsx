import { AccountTypeSelector } from "@/components/account-type-selector";
import { AccountTypeHeader } from "@/components/account-type-header";
import { AuthFlowContinueButton } from "@/components/auth-flow-continue-button";

export default function AccountType() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col space-y-7">
        <AccountTypeHeader />

        <div className="flex items-center justify-center space-x-3">
          <AccountTypeSelector selector="creator" />
          <AccountTypeSelector selector="agency" />
        </div>

        <div className="w-full">
          <AuthFlowContinueButton />
        </div>
      </div>
    </div>
  );
}
