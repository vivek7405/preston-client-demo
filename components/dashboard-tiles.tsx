import DashboardTile1SVG from "@/lib/assets/dashboard-tile-1-svg";
import DashboardTile2SVG from "@/lib/assets/dashboard-tile-2-svg";
import DashboardTile3SVG from "@/lib/assets/dashboard-tile-3-svg";
import DashboardTile4SVG from "@/lib/assets/dashboard-tile-4-svg";
import DashboardTile from "./dashboard-tile";

export function DashboardTiles() {
  const tilesList = [
    { subHeader: "Links Scraped", color: "blue" },
    { subHeader: "Links Manually Checked", color: "purple" },
    { subHeader: "Link Violations", color: "yellow" },
    { subHeader: "Links Removed", color: "red" },
  ];

  const getIconFromIndex = (index: number) => {
    switch (index) {
      case 0:
        return <DashboardTile1SVG />;
      case 1:
        return <DashboardTile2SVG />;
      case 2:
        return <DashboardTile3SVG />;
      case 3:
        return <DashboardTile4SVG />;
      default:
        return <DashboardTile1SVG />;
    }
  };

  return (
    <>
      <div className="w-full flex space-x-5">
        {tilesList.map((tile, index) => {
          return (
            <DashboardTile
              key={index}
              icon={getIconFromIndex(index)}
              header="252"
              {...tile}
            />
          );
        })}
      </div>
    </>
  );
}
