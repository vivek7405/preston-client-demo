"use client";

import { useAuthFlow } from "../providers/AuthFlowProvider";
import { AuthMenuItem } from "./auth-menu-item";

export function AuthMenu() {
  const { authStage, setAuthStage } = useAuthFlow();
  const menuItems = [
    { header: "Account Type", subHeader: "Select your account type" },
    { header: "Account Details", subHeader: "Add your personal info" },
    { header: "Creator Info", subHeader: "Setup your business details" },
    { header: "Completed", subHeader: "Your account is created" },
  ];

  return (
    <>
      <div className="w-full h-full bg-blue-600 flex flex-col space-y-10 items-center justify-center">
        {menuItems.map((item, index) => {
          return (
            <AuthMenuItem
              key={index + 1}
              header={item.header}
              subHeader={item.subHeader}
              index={index + 1}
            />
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
