"use client";

import DashboardTile from "@/components/dashboard-tile";

export default function DashboardPage() {
  const tilesList = [
    { subHeader: "Links Scraped", color: "blue" },
    { subHeader: "Links Manually Checked", color: "purple" },
    { subHeader: "Link Violations", color: "yellow" },
    { subHeader: "Links Removed", color: "red" },
  ];
  return (
    <div className="w-full h-full">
      <div className="w-full flex space-x-5">
        {tilesList.map((tile, index) => {
          return <DashboardTile key={index} header="252" {...tile} />;
        })}
      </div>
    </div>
  );
}
