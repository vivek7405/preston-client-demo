"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SideNavItemProps = {
  icon: any;
  text: string;
  href: string;
};

export default function SideNavItem({ text, href, icon }: SideNavItemProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <>
      <Link
        href={href}
        className={`${
          isActive
            ? "bg-blue-50 text-blue-500"
            : "text-neutral-500 hover:bg-neutral-50"
        } font-medium text-sm px-3 py-2 rounded-lg flex items-center space-x-3`}
      >
        {icon}
        <p>{text}</p>
      </Link>
    </>
  );
}
