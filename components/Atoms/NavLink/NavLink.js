"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? "active" : undefined}>
      {children}
    </Link>
  );
};
