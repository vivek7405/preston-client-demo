import HomeIconSVG from "@/lib/assets/home-icon-svg";
import SideNavItem from "./side-nav-item";
import SubmitViolationsSVG from "@/lib/assets/submit-violations-svg";
import BillingSVG from "@/lib/assets/billing-svg";
import WhitelistSVG from "@/lib/assets/whitelist-svg";
import AffiliateProgramSVG from "@/lib/assets/affiliate-program-svg";
import SettingsSVG from "@/lib/assets/settings-svg";
import FAQSVG from "@/lib/assets/faq-svg";
import SupportSVG from "@/lib/assets/affiliate-svg";

export default function SideNav() {
  return (
    <>
      <div className="bg-white flex flex-col space-y-2 w-full h-full p-5 border-r">
        <SideNavItem icon={<HomeIconSVG />} text="Home" href="/dashboard" />
        <SideNavItem
          icon={<SubmitViolationsSVG />}
          text="Submit Violations"
          href="/dashboard/submit-violations"
        />
        <SideNavItem
          icon={<WhitelistSVG />}
          text="Whitelist"
          href="/dashboard/whitelist"
        />
        <SideNavItem
          icon={<BillingSVG />}
          text="Billing"
          href="/dashboard/billing"
        />
        <SideNavItem
          icon={<AffiliateProgramSVG />}
          text="Affiliate Program"
          href="/dashboard/affiliate-program"
        />
        <SideNavItem
          icon={<SettingsSVG />}
          text="Settings"
          href="/dashboard/settings"
        />
        <SideNavItem icon={<FAQSVG />} text="FAQ" href="/dashboard/faq" />
        <SideNavItem
          icon={<SupportSVG />}
          text="Support"
          href="/dashboard/support"
        />
      </div>
    </>
  );
}
