"use client";

import React from "react";
import Menu from "./menu";

export type MenuItem = {
  name: string;
  icon?: string;
  slug?: string;
  section?: string;
};

export default function MenuGroup({
  items,
  path,
}: {
  items: MenuItem[];
  path: string;
}) {
  const [isSide, setSide] = React.useState(false);

  return (
    <div>
      {items.map((item, index) => (
        <Menu item={item} path={path} key={index} />
      ))}
    </div>
  );
}
