"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { useState } from "react";

export function DashboardSortBy() {
  const [selected, setSelected] = useState("Today");

  const filters = [
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "Select Date",
  ];

  return (
    <>
      <div className="w-full">
        <div className="w-fit float-right flex items-center justify-center space-x-2">
          <label className="whitespace-nowrap">Sort by</label>
          <Select
            defaultValue="Today"
            onValueChange={(value) => {
              setSelected(value);
            }}
          >
            <SelectTrigger id="area" className="bg-white">
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
      </div>
    </>
  );
}
