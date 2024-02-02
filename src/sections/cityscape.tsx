import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type CityscapeProps = React.ComponentPropsWithRef<"div"> & {
  isMobile?: boolean;
};

export const Cityscape = ({ className, isMobile }: CityscapeProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);

  return (
    <section className={cn("w-full ", className)}>
      <div
        className="z-20 bg-base-100 "
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
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

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-60%",
              marginTop: "-10%",
            }}
          >
            <h1
              className="z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
                  bg-base-200/90 p-[clamp(1.4rem,2.5vw,2.2rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em] rounded-tl-none
                  drop-shadow-[0px_2px_15px_theme(colors.neutral-content)]
                  "
            >
              In the sprawling tapestry of a vibrant cityscape, where
              skyscrapers reached for the heavens and the streets pulsated with
              the lively rhythm of urban life, an unseen narrative wove its
              story beneath the shadows.
            </h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [100, 2000], [0, 400]) }}
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

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-55%",
              marginTop: "8%",
            }}
          >
            <h1
              className="z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
                  bg-base-200/90 p-[clamp(1.4rem,2.5vw,2.2rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em] rounded-tr-none
                  drop-shadow-[0px_2px_15px_theme(colors.neutral-content)]
                  "
            >
              Narrow alleyways crisscrossed through the shadows of towering
              structures, revealing a world of economic struggle and unyielding
              dreams.
            </h1>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-40%",
              marginTop: "30%",
            }}
          >
            <h1
              className="z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
                  bg-base-200/90 p-[clamp(1.4rem,2.5vw,2.2rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em] rounded-tl-none
                  drop-shadow-[0px_2px_15px_theme(colors.neutral-content)]
                  "
            >
              In our exploration, we sheds light on the interconnected
              challenges that arise when children lack access to basic needs
              like education, health services, and economic support.
            </h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [300, 2100], [0, 650]) }}
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

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-45%",
              marginTop: "50%",
            }}
          >
            <h1
              className="z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
                  bg-base-200/90 p-[clamp(1.4rem,2.5vw,2.2rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em] rounded-tr-none
                  drop-shadow-[0px_2px_15px_theme(colors.neutral-content)]
                  "
            >
              It emphasizes the pressing need to address these issues for a
              brighter, more equitable future, where the insights gained from
              satellite imagery serve as a catalyst for positive change.
            </h1>
          </span>
        </div>
      </div>
    </section>
  );
};
