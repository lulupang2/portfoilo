import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { MenuItem } from "./menu-group";
import Link from "next/link";

export default function Menu({ item, path }: { item: MenuItem; path: string }) {
  const segment = useSelectedLayoutSegment();
  const [isSide, setSide] = React.useState(false);
  const href = item.slug ? path + "/" + item.slug : path;

  return <Link href={path}>{item.name}</Link>;
}
