"use client";
import React from "react";
import Navigation from "./navigation";

export default function Boundary({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = React.useState(false);
  const boundaryRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    isActive
      ? boundaryRef.current?.classList.toggle("boundary--active")
      : boundaryRef.current?.classList.remove("boundary--active");
  }, [isActive]);
  return (
    <div className="boundary" ref={boundaryRef}>
      <Navigation isActive={isActive} />
      <div className="boundary-item">{children}</div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive.toString()}
      </button>
    </div>
  );
}
