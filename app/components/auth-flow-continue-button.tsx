type AuthFlowContinueButtonProps = {
  onClick: () => void;
};

export function AuthFlowContinueButton({
  onClick,
}: AuthFlowContinueButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className="float-right rounded bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2"
      >
        Continue {">"}
      </button>
    </>
  );
}
