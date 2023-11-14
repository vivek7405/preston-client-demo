"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type IAuthFlowContext = {
  authStage: number;
  setAuthStage: (stage: number) => void;
  accountType: "creator" | "agency";
  setAccountType: (type: "creator" | "agency") => void;
};

const AuthFlowContext = createContext<IAuthFlowContext>({} as IAuthFlowContext);

export default function AuthFlowProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [authStage, setAuthStage] = useState(1);
  const [accountType, setAccountType] = useState(
    "creator" as "creator" | "agency"
  );
  const value = useMemo(
    () => ({ authStage, setAuthStage, accountType, setAccountType }),
    [authStage, accountType]
  );

  return (
    <AuthFlowContext.Provider value={value}>
      {children}
    </AuthFlowContext.Provider>
  );
}

export function useAuthFlow() {
  const context = useContext(AuthFlowContext);
  if (!context)
    throw new Error("useAuthFlow must be used within an AuthProvider");
  return context;
}
