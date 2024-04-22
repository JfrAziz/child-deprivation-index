import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { divProps } from "@/App";

export const Cityscape = ({ className, isMobile }: divProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);
  console.log(isMobile);
  const cloudNarative = `z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
      bg-base-200/90 p-[clamp(1.4rem,2.5vw,2.2rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em]
      drop-shadow-[0px_2px_15px_theme(colors.neutral-content)]`;

  return (
    <section className={cn("w-full ", className)}>
      <div
        className="z-20 bg-base-100 "
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
          marginTop: "-25%",
        }}
      >
        <div className="hero min-h-screen">
          <motion.div
            style={{ y: useTransform(scrollY, [0, 2200], [0, 250]) }}
            className="flex justify-center"
          >
            <img
              alt="base_island"
              src="/images/poverty/base_island0.png"
              style={{
                width: "90%",
                marginBottom: "-15%",
              }}
            />
          </motion.div>

          <span id="cityscape" className="scroll-mt-16"></span>
          
          <motion.div
            style={{ y: useTransform(scrollY, [100, 2500], [0, 400]) }}
            className="flex justify-center"
          >
            <img
              alt="city1"
              src="/images/poverty/city_1.png"
              style={{
                width: "90%",
                marginBottom: "15%",
              }}
            />
          </motion.div>
          
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-60%",
              marginBottom: "12%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tl-none"}
            >
              In the sprawling tapestry of a vibrant cityscape, where
              skyscrapers reached for the heavens and the streets pulsated with
              the lively rhythm of urban life, an unseen narrative wove its
              story beneath the shadows.
            </motion.h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [100, 2000], [0, 400]) }}
            className="flex justify-center"
          >
            <img
              alt="city2"
              id="city2"
              src="/images/poverty/city_2.png"
              style={{
                width: "90%",
                // marginBottom: "25%"
              }}
            />
          </motion.div>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-55%",
              marginBottom: "5%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tr-none"}
            >
              Narrow alleyways crisscrossed through the shadows of towering
              structures, revealing a world of economic struggle and unyielding
              dreams.
            </motion.h1>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-45%",
              marginBottom: "-25%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tl-none"}
            >
              In our exploration, we shed light on the interconnected
              challenges that arise when children lack access to basic needs
              like education, health services, and economic support.
            </motion.h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [100, 2000], [100, 500]) }}
            className="flex justify-center"
          >
            <img
              alt="poor"
              id="poor"
              src="/images/poverty/poor_area_0.png"
              style={{
                width: "90%",
                marginBottom: "15%",
              }}
            />
          </motion.div>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-45%",
              marginBottom: "-35%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tr-none"}
            >
              It emphasizes the pressing need to address these issues for a
              brighter, more equitable future, where the insights gained from
              satellite imagery serve as a catalyst for positive change.
            </motion.h1>
          </span>
        </div>
      </div>
    </section>
  );
};
