"use client";
import { useEffect, useRef, useState } from "react";

import styles from "./page.module.scss";
import { sectionStore } from "@/store/section";
const sections = ["home", "about", "Work", "contact"];
export default function Page() {
  const pageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement[]>(new Array(sections.length));
  const { order, name, setSection } = sectionStore();
  const randomRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? 1 : -1; //휠 위로 올릴때 -1, 아래로 내릴때 1
      const nextIndex = order + direction; //섹션 순서 + 휠 방향값 ex) 초기 0 , 내려서 1 => 0 + 1 = 2

      if (nextIndex >= 0 && nextIndex < sections.length) {
        setSection(nextIndex, sectionRef.current[nextIndex].id);
        sectionRef.current[nextIndex].scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "end",
        });
      }
    };

    pageRef.current?.addEventListener("wheel", handleWheel);

    return () => {
      pageRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, [order]);

  return (
    <div className={styles.wrapper} ref={pageRef}>
      {sections.map((item, index) => (
        <section
          className={styles["main-section"]}
          id={item}
          key={index}
          ref={(el) => (sectionRef.current[index] = el!)}
          style={{ backgroundColor: randomRGB() }}
        >
          <h1>{order}</h1>
        </section>
      ))}
    </div>
  );
}
