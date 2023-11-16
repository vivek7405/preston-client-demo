"use client";

import { usePathname } from "next/navigation";
// import { useAuthFlow } from "../providers/AuthFlowProvider";
import { AuthMenuItem } from "./auth-menu-item";
import MetronicAuthFlowLogo from "@/lib/assets/metronic-auth-flow-logo";
import StepVerticalLineSVG from "@/lib/assets/step-vertical-line-svg";

export function AuthMenu() {
  const path = usePathname();
  // const { authStage, setAuthStage } = useAuthFlow();
  const menuItems = [
    {
      header: "Account Type",
      subHeader: "Select your account type",
      route: "account-type",
    },
    {
      header: "Account Details",
      subHeader: "Add your personal info",
      route: "account-details",
    },
    {
      header: "Creator Info",
      subHeader: "Setup your business details",
      route: "creator-info",
    },
    {
      header: "Completed",
      subHeader: "Your account is created",
      route: "completed",
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-blue-600 flex flex-col space-y-2 items-center justify-center">
        <div className="relative -top-20">
          <MetronicAuthFlowLogo />
        </div>
        {/* <div className="h-20"></div> */}
        {menuItems.map((item, index) => {
          return (
            <div className="flex flex-col space-y-2">
              <AuthMenuItem
                key={item.route}
                header={item.header}
                subHeader={item.subHeader}
                index={index + 1}
                route={item.route}
              />
              {index !== menuItems.length - 1 && (
                <div className="ml-4">
                  <StepVerticalLineSVG />
                </div>
              )}
            </div>
          );
        })}

        {/* <AuthMenuItem
          authStage={authStage}
          header="Account Type"
          subHeader="Select your account type"
          index={1}
        />

        <AuthMenuItem
          authStage={authStage}
          header="Account Details"
          subHeader="Add your personal info"
          index={2}
        />

        <AuthMenuItem
          authStage={authStage}
          header="Creator Info"
          subHeader="Setup your business details"
          index={3}
        />

        <AuthMenuItem
          authStage={authStage}
          header="Completed"
          subHeader="Your account is created"
          index={4}
        /> */}
      </div>
    </>
  );
}
