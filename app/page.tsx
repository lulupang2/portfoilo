"use client";
import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";
import styles from "./page.module.scss";

export default function Page() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const wheel$ = fromEvent<WheelEvent>(window, "wheel", { passive: false });
    const handleScroll = (delta: number) => {
      const currentPage = Math.floor(page.scrollTop / window.innerHeight);
      const nextPage = delta > 0 ? currentPage + 1 : currentPage - 1;
      page.scrollTo({
        top: nextPage * window.innerHeight,
        behavior: "smooth",
      });
      const sections = page.querySelectorAll("section");
      const nextSection = sections[nextPage];
      if (nextSection?.id === "home") {
        window.location.hash = "";
      } else if (nextSection) {
        window.location.hash = `#${nextSection.id}`;
      }
    };
    const subscription = wheel$
      .pipe(
        scan((acc, event) => {
          event.preventDefault();
          return acc + event.deltaY;
        }, 0)
      )
      .subscribe((delta) => handleScroll(delta));

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  const randomRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };
  return (
    <div className={styles.wrapper} ref={pageRef}>
      <section
        className={styles["main-section"]}
        id="home"
        style={{ backgroundColor: randomRGB() }}
      >
        <h1>home</h1>
      </section>

      <section
        className={styles["main-section"]}
        id="about"
        style={{ backgroundColor: randomRGB() }}
      >
        <h1>About</h1>
      </section>

      <section
        className={styles["main-section"]}
        id="work"
        style={{ backgroundColor: randomRGB() }}
      >
        <h1>Work</h1>
      </section>
      <section
        className={styles["main-section"]}
        id="contact"
        style={{ backgroundColor: randomRGB() }}
      >
        {" "}
        <h1>Page44</h1>
      </section>
    </div>
  );
}
