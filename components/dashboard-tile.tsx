"use client";

type DashboardTilesProps = {
  icon: any;
  header: string;
  subHeader: string;
  color: string;
};

const getBorderColorFromColor = (color: string) => {
  switch (color) {
    case "blue":
      return "border-blue-500";
    case "red":
      return "border-red-500";
    case "yellow":
      return "border-yellow-500";
    case "purple":
      return "border-purple-500";
    default:
      return "border-blue-500";
  }
};

const getIconColorFromColor = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-blue-100";
    case "red":
      return "bg-red-100";
    case "yellow":
      return "bg-yellow-100";
    case "purple":
      return "bg-purple-100";
    default:
      return "bg-blue-100";
  }
};

export default function DashboardTile({
  icon,
  header,
  subHeader,
  color,
}: DashboardTilesProps) {
  const iconColor = getIconColorFromColor(color);
  const borderColor = getBorderColorFromColor(color);

  return (
    <div
      className={`bg-white rounded-xl px-4 py-3 w-1/4 flex flex-col justify-center space-y-3 h-28 border-b-4 ${borderColor}`}
    >
      <div className="w-full flex items-center justify-between">
        <p className="font-bold text-3xl">{header}</p>
        <div className={`p-1 ${iconColor} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <p className="text-sm text-neutral-600">{subHeader}</p>
    </div>
  );
}
