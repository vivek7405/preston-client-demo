"use client";

import AuthFlowProvider from "../providers/AuthFlowProvider";
import { AuthMenu } from "../../components/auth-menu";

export default function AuthFlowLayout({ children }) {
  return (
    <>
      <AuthFlowProvider>
        <div className="flex h-screen">
          <div className="w-1/4 h-full">
            <AuthMenu />
          </div>
          <div className="w-3/4 h-full">{children}</div>
        </div>
      </AuthFlowProvider>
    </>
  );
}
