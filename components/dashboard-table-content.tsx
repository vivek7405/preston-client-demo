"use client";

import { useState } from "react";

export function DashboardTableContent() {
  const rowsArr = [
    {
      selected: false,
      id: 148525,
      dateRemoved: "10 Sep 2023",
      link: "https://google.com",
      source: "Google",
      action: "Removed",
    },
    {
      selected: false,
      id: 148526,
      dateRemoved: "15 Sep 2023",
      link: "https://google.com",
      source: "Google",
      action: "Delisted",
    },
    {
      selected: false,
      id: 148527,
      dateRemoved: "20 Sep 2023",
      link: "https://google.com",
      source: "Google",
      action: "Removed",
    },
  ];

  const [rows, setRows] = useState(rowsArr);

  return (
    <>
      <div className="w-full">
        <div className="w-full h-16 flex items-center justify-center border-b border-dashed">
          <input
            onChange={(e) => {
              const checked = e.currentTarget.checked;
              rows.forEach((row) => {
                row.selected = checked;
              });
              setRows([...rows]);
            }}
            type="checkbox"
            checked={rows.every((row) => row.selected)}
            className="w-10 h-10"
          />
          <div className="w-full h-full flex items-center justify-between text-sm text-gray-500 font-medium">
            <p className="w-1/5">ID</p>
            <p className="w-1/5">DATE REMOVED</p>
            <p className="w-1/5">LINK</p>
            <p className="w-1/5 text-center">SOURCE</p>
            <p className="w-1/5 flex items-center justify-end">ACTION</p>
          </div>
        </div>
        {rows.map((row, index) => {
          return (
            <div
              key={index}
              className="w-full h-16 flex items-center justify-center border-b"
            >
              <input
                onChange={() => {
                  row.selected = !row.selected;
                  setRows([...rows]);
                }}
                type="checkbox"
                checked={row.selected}
                className="w-10 h-10"
              />
              <div className="w-full h-full flex items-center justify-between text-sm">
                <p className="w-1/5 font-medium">{row.id}</p>
                <p className="w-1/5 text-gray-500">{row.dateRemoved}</p>
                <a
                  href={row.link}
                  target="_blank"
                  className="w-1/5 font-medium text-blue-400 hover:text-blue-500"
                >
                  {row.link}
                </a>
                <p className="w-1/5 text-gray-500 text-center">{row.source}</p>
                <div className="w-1/5 flex items-center justify-end">
                  <p
                    className={`w-24 px-3 py-1 rounded-lg ${
                      row.action === "Delisted"
                        ? "bg-red-50 text-red-500"
                        : "bg-green-50 text-green-500"
                    } flex items-center justify-center`}
                  >
                    {row.action}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
