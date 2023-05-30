"use client";
import { menus } from "@/lib/menus";
import { motion } from "framer-motion";
import { lowerCase } from "lodash";

import React, { useEffect } from "react";
import { MenuItem } from "./menu-group";
import { sectionStore } from "@/store/section";
export default function Boundary({ children }: { children: React.ReactNode }) {
  const { order, name } = sectionStore();
  const isActive = order <= 0 && true;
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
          <MenuItem
            item={menu}
            key={index}
            isSelected={order === index}
            index={index}
          />
        ))}
      </div>
      <div className="boundary-section">{children}</div>
    </div>
  );
}

function MenuItem({
  item,
  isSelected,
  index,
}: {
  item: MenuItem;
  index: number;
  isSelected: boolean;
}) {
  const { setSection } = sectionStore();
  const handleClick = () => {
    setSection(index, item.section!);
  };
  return (
    <motion.div
      layout
      transition={{ type: "spring", bounce: 0.5 }}
      className="boundary-item"
      style={isSelected ? { opacity: 1 } : { opacity: 0.5 }}
      onClick={handleClick}
    >
      <span className="nav-item">{item.name}</span>
    </motion.div>
  );
}
