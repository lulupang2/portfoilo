"use client";
import { menus } from "@/lib/menus";
import { motion } from "framer-motion";
import { lowerCase } from "lodash";
import Link from "next/link";
import React, { useEffect } from "react";
import { MenuItem } from "./menu-group";
export default function Boundary({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    window.onhashchange = () => {
      setIsActive(true);
      if (window.location.hash.length > 1) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };
  }, []);
  return (
    <div
      className="boundary"
      style={isActive ? { flexDirection: "column" } : { flexDirection: "row" }}
    >
      <div
        className="boundary-nav-wrapper"
        style={
          isActive ? { flexDirection: "row" } : { flexDirection: "column" }
        }
      >
        {menus.map((menu, index) => (
          <MenuItem item={menu} key={index} />
        ))}
      </div>
      <div className="boundary-section">{children}</div>
    </div>
  );
}

function MenuItem({ item }: { item: MenuItem }) {
  return (
    <motion.div
      layout
      transition={{ type: "spring", bounce: 0.5 }}
      className="boundary-item"
    >
      <Link className="nav-item" href={`#${item.section}`}>
        {item.name}
      </Link>
    </motion.div>
  );
}
