import { useAuthFlow } from "../providers/AuthFlowProvider";

type AuthMenuItemProps = {
  index: number;
  header: string;
  subHeader: string;
};

export function AuthMenuItem({ index, header, subHeader }: AuthMenuItemProps) {
  const { authStage, setAuthStage } = useAuthFlow();

  return (
    <>
      <div className="w-48 flex items-center space-x-2">
        <button
          onClick={() => setAuthStage(index)}
          className={`px-3 py-1 rounded-lg text-white ${
            authStage === index
              ? "bg-green-500 border border-green-500"
              : "border border-dashed"
          }`}
        >
          {index}
        </button>
        <div>
          <div
            className={`text-sm ${
              authStage === index ? "text-white" : "text-blue-100"
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
