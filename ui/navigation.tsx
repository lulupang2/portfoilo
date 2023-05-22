"use client";

import { menus } from "@/lib/menus";
import Link from "next/link";
import React from "react";
import { MenuItem } from "./menu-group";
import { useSelectedLayoutSegment } from "next/navigation";
import { lowerCase } from "lodash";

export default function Navigation({ isActive }: { isActive: boolean }) {
  const navRef = React.useRef<HTMLDivElement>(null);

  const navChangeHandler = () => {
    const nav = navRef.current;

    nav?.animate(
      [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
      {
        duration: 500,
        easing: "ease-in-out",
      }
    );
  };
  const navCloseHandler = () => {
    const nav = navRef.current;
    isActive
      ? nav?.classList.add("nav-side-wrapper")
      : nav?.classList.remove("nav-side-wrapper");
    !isActive
      ? nav?.classList.add("nav-top-wrapper")
      : nav?.classList.remove("nav-top-wrapper");
  };
  React.useEffect(() => {
    navCloseHandler();
    navChangeHandler();
  }, [isActive]);
  return (
    <nav ref={navRef} className="nav">
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
