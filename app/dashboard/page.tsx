"use client";

import { DashboardSortBy } from "@/components/dashboard-sortby";
import { DashboardTable } from "@/components/dashboard-table";
import DashboardTile from "@/components/dashboard-tile";
import { DashboardTiles } from "@/components/dashboard-tiles";
import DashboardTile1SVG from "@/lib/assets/dashboard-tile-1-svg";
import DashboardTile2SVG from "@/lib/assets/dashboard-tile-2-svg";
import DashboardTile3SVG from "@/lib/assets/dashboard-tile-3-svg";
import DashboardTile4SVG from "@/lib/assets/dashboard-tile-4-svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { useState } from "react";

export default function DashboardPage() {
  return (
    <div className="w-full h-full flex flex-col space-y-7">
      <DashboardSortBy />
      <DashboardTiles />
      <DashboardTable />
    </div>
  );
}
