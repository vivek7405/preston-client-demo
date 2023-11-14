import Image from "next/image";
import Link from "next/link";
import { AuthMenu } from "./components/auth-menu";
import { AuthFlow } from "./components/auth-flow";
import AuthProvider from "./providers/AuthFlowProvider";

export default function Home() {
  return (
    <>
      <AuthProvider>
        <div className="flex h-screen">
          <div className="w-1/4 h-full">
            <AuthMenu />
          </div>
          <div className="w-3/4 h-full">
            <AuthFlow />
          </div>
        </div>
      </AuthProvider>
    </>
  );
}
