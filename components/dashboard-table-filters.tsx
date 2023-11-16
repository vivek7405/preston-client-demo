import { ExportIconSVG } from "@/lib/assets/export-icon-svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { useState } from "react";

export function DashboardTableFilters() {
  const [selected, setSelected] = useState("Today");
  const filters = [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "Select Date",
  ];

  const [selected2, setSelected2] = useState("Status");
  const filters2 = ["Status"];

  return (
    <>
      <div className="w-full h-16 flex items-center justify-between">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-64 h-10 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div>
            <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-500 text-sm rounded-lg font-semibold flex items-center justify-center space-x-3">
              <ExportIconSVG />
              <p>Export</p>
            </button>
          </div>

          <div>
            <Select
              defaultValue="Today"
              onValueChange={(value) => {
                setSelected(value);
              }}
            >
              <SelectTrigger
                id="area"
                className="bg-neutral-100 border-neutral-100"
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {filters.map((filter) => {
                  return (
                    <SelectItem
                      value={filter}
                      className={`${
                        selected === filter
                          ? "bg-blue-50 text-blue-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {filter}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select
              defaultValue="Status"
              onValueChange={(value) => {
                setSelected2(value);
              }}
            >
              <SelectTrigger
                id="area"
                className="bg-neutral-100 border-neutral-100"
              >
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {filters2.map((filter) => {
                  return (
                    <SelectItem
                      value={filter}
                      className={`${
                        selected2 === filter
                          ? "bg-blue-50 text-blue-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {filter}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
}
