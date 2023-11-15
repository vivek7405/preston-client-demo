import TopNav from "@/components/top-nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen">
      {/* <p>Dashboard Layout</p> */}
      <div className="h-16">
        <TopNav />
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
