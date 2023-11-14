import { useAuthFlow } from "../providers/AuthFlowProvider";

type AccountTypeSelectorProps = {
  selector: "creator" | "agency";
};

export function AccountTypeSelector({ selector }: AccountTypeSelectorProps) {
  const { accountType, setAccountType } = useAuthFlow();

  return (
    <>
      <button
        onClick={() => setAccountType(selector)}
        className={`w-56 h-20 flex items-center justify-center space-x-4 border border-dashed rounded-lg ${
          accountType === selector ? "border-blue-500 bg-blue-50" : ""
        }`}
      >
        <div className="p-3 bg-blue-500 rounded-lg" />
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
