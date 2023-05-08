import MenuGroup from "@/ui/menu-group";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <MenuGroup items={[{ name: "Work" }]} path="/work" />
    </div>
  );
}
