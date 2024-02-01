import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

export const Cityscape = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });

  return (
    <section className="w-full ">
      <div
        className="z-20 bg-base-100 "
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero min-h-screen">
          <motion.div
            style={{ y: useTransform(scrollY, [0, 2200], [0, 300]) }}
            className="flex justify-center"
          >
            <img
              alt="base_island"
              src="/images/poverty/base_island0.png"
              style={{
                width: "90%",
                marginTop: "-10%",
              }}
            />
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollY, [100, 2500], [0, 400]) }}
            className="flex justify-center"
          >
            <img
              alt="city1"
              src="/images/poverty/city_1.png"
              style={{
                width: "90%",
                marginTop: "-40%",
              }}
            />
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollY, [100, 2000], [0, 500]) }}
            className="flex justify-center"
          >
            <img
              alt="city2"
              src="/images/poverty/city_2.png"
              style={{
                width: "90%",
                marginTop: "-30%",
              }}
            />
          </motion.div>
          <motion.div
            style={{ y: useTransform(scrollY, [300, 2100], [0, 750]) }}
            className="flex justify-center"
          >
            <img
              alt="poor"
              src="/images/poverty/poor_area_0.png"
              style={{
                width: "90%",
                marginTop: "-40%",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
