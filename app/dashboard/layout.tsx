import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16">
        <TopNav />
      </div>
      <div className="flex flex-grow bg-gray-100">
        <div className="w-full h-full flex">
          <div className="w-1/5 h-full">
            <SideNav />
          </div>
          <div className="w-4/5 h-full p-7">{children}</div>
        </div>
      </div>
    </div>
    // <div className="h-screen">
    //   <div className="h-16">
    //     <TopNav />
    //   </div>
    // <div className="h-full">
    //   <div className="flex w-full h-full bg-neutral-100">
    //     <div className="w-full h-full">
    //       <div className="flex h-full">
    //         <div className="w-1/5 h-full">
    //           <SideNav />
    //         </div>
    //         <div className="w-4/5 p-7">{children}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
}
