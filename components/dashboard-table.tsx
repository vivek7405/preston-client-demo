import { DashboardTableContent } from "./dashboard-table-content";
import { DashboardTableFilters } from "./dashboard-table-filters";

export function DashboardTable() {
  return (
    <>
      <div className="w-full h-full bg-white rounded-lg flex flex-col space-y-7 p-5">
        <DashboardTableFilters />
        <DashboardTableContent />
      </div>
    </>
  );
}
