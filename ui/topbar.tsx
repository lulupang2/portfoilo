"use client";

import { menus } from "@/lib/menus";
import Link from "next/link";
import React from "react";
import { MenuItem } from "./menu-group";
import { useSelectedLayoutSegment } from "next/navigation";
import { lowerCase } from "lodash";
export default function TopBar() {
  return (
    <nav className="nav-top-wrapper">
      {menus.map((menu, index) => (
        <TopBarItem item={menu} key={index} />
      ))}
    </nav>
  );
}

function TopBarItem({ item }: { item: MenuItem }) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  return <Link href={lowerCase(`/${item.slug}`)}>{item.name}</Link>;
}
