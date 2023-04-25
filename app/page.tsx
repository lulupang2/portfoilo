"use client";
import React, { useRef, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.scss";
export default function Page() {
  SwiperCore.use([Navigation, Pagination]);
  const [height, setHeight] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0);
  }, []);

  return (
    <main className={styles.wrapper} ref={ref}>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          return (
            <SwiperSlide className={styles.swiperSlide} key={i} id={`${i}`}>
              {height}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
