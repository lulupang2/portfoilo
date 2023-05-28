"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const delta = event.deltaY;
      const page = pageRef.current;
      if (page) {
        const currentPage = Math.floor(page.scrollTop / window.innerHeight);
        const nextPage = delta > 0 ? currentPage + 1 : currentPage - 1;
        page.scrollTo({
          top: nextPage * window.innerHeight,
          behavior: "smooth",
        });
        const sections = page.querySelectorAll("section");
        const nextSection = sections[nextPage];
        console.log(window.location.hash === "");

        if (nextSection?.id === "home") {
          window.location.hash = "";
        } else if (nextSection) {
          window.location.hash = `#${nextSection.id}`;
        }
      }
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className={styles.wrapper} ref={pageRef}>
      <section className={styles["main-section"]} id="home">
        <h1>home</h1>
      </section>

      <section className={styles["main-section"]} id="about">
        <h1>About</h1>
      </section>

      <section className={styles["main-section"]} id="work">
        <h1>Page33</h1>
      </section>
      <section className={styles["main-section"]} id="contact">
        <h1>Page44</h1>
      </section>
    </div>
  );
}
