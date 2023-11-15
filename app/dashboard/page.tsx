import SideNav from "@/components/side-nav";
import SignOut from "@/components/sign-out";

export default function DashboardPage() {
  return (
    <div className="flex w-full h-full bg-neutral-100">
      <div className="w-full h-full">
        <div className="flex px-10">
          <div className="w-1/5">
            <SideNav />
          </div>
          <div className="w-4/5 p-3">Dashboard</div>
        </div>
        {/* <SignOut /> */}
      </div>
    </div>
  );
}
