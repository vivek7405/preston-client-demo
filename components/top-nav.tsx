import { ChevronDownIcon, SearchIcon } from "lucide-react";
import MetronicLogo from "@/lib/assets/metronic-logo";
import UserIconSVG from "@/lib/assets/user-icon-svg";
import BellIconSVG from "@/lib/assets/bell-icon-svg";
import SignOut from "./sign-out";

export default function TopNav() {
  return (
    <div className="px-10 w-full h-full border-b shadow flex justify-between items-center">
      <div className="flex space-x-3">
        <MetronicLogo />
      </div>
      <div className="flex space-x-5 items-center justify-center">
        <BellIconSVG />
        <SearchIcon className="w-5 h-5 text-gray-400" strokeWidth={3} />
        <UserIconSVG />
        <button>
          <ChevronDownIcon className="w-5 h-5 text-neutral-500" />
        </button>
        <SignOut />
      </div>
    </div>
  );
}
