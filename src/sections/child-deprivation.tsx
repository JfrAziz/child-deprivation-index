import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ChildDeprivationProps = React.ComponentPropsWithRef<"div"> 
// & {
//   isMobile?: boolean;
// };

export const ChildDeprivation = ({ className }: ChildDeprivationProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);

  return (
    <section className={cn("w-full ", className)}>
      <div className="z-20 bg-base-100 ">
        <div className="hero min-h-screen">
          <span ref={ref} 
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-40%",
              marginTop: "7%"
            }}
          >
            <h1 className="font-title !text-left text-[clamp(1.3rem,4vw,4rem)] font-black leading-[1.1] ">
              <span className="inline-grid text-left">
                <span
                  className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                  aria-hidden="true"
                  data-text="component library"
                ></span>
                <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                  Child Deprivation
                </span>
              </span>
            </h1>

            <h1 className="font-title !text-left text-[clamp(1.2rem,1.6vw,2rem)] font-bold leading-[1.1] mt-[0.8em]">
              <span className="inline-grid text-left">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,50vw,42rem)]">
                  Child deprivation is closely related to poverty. Poverty can
                  cause children to not have access to various basic needs, such
                  as education, health, economic and social services.
                </span>
              </span>
            </h1>
          </span>
          {/* <AnimatePresence mode="wait">
            <motion.article
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                y: useTransform(scrollY, [600, 200], [-100, 1000]),
              }}
              exit={{ opacity: 1, transition: { duration: 20 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 1,
                    x: "-1000%",
                    y: isMobile ? "-95%" : "40%",
                  },
                  visible: {
                    opacity: 1,
                    x: isMobile ? "-15%" : "-35%",
                    y: isMobile ? "-95%" : "40%",
                    transition: { duration: 2 },
                  },
                }}
              >
                <h1 className="font-title !text-left text-[clamp(1.3rem,4vw,4rem)] font-black leading-[1.1] ">
                  <span className="inline-grid text-left">
                    <span
                      className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      aria-hidden="true"
                      data-text="component library"
                    ></span>
                    <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                      Child Deprivation
                    </span>
                  </span>
                </h1>

                <h1 className="font-title !text-left text-[clamp(1.2rem,2vw,2rem)] font-bold leading-[1.1] mt-[0.8em]">
                  <span className="inline-grid text-left">
                    <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,50vw,42rem)]">
                      Child deprivation is closely related to poverty. Poverty
                      can cause children to not have access to various basic
                      needs, such as education, health, economic and social
                      services.
                    </span>
                  </span>
                </h1>
              </motion.h1>
            </motion.article>
          </AnimatePresence> */}

          {/* 
          <AnimatePresence mode="wait">
            <motion.article
              style={{ y: useTransform(scrollY, [600, 200], [-100, 1000]) }}
              initial="hidden"
              whileInView="visible"
              viewport={{ root: ref }}
              exit={{ opacity: 1, transition: { duration: 20 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.h1
                variants={{
                  hidden: {
                    opacity: 1,
                    x: "-1000%",
                    y: isMobile ? "-95%" : "160%",
                  },
                  visible: {
                    opacity: 1,
                    x: isMobile ? "-15%" : "-30%",
                    y: isMobile ? "-95%" : "160%",
                    transition: { duration: 3 },
                  },
                }}
                className="font-title !text-left text-[clamp(1.2rem,2vw,2rem)] font-bold leading-[1.1] mb-[2em]">
                <span className="inline-grid text-left">
                  <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,50vw,62rem)]">
                  Child deprivation is closely related to poverty. Poverty can cause children to not have access to various basic needs, such as education, health, economic and social services.
                  </span>
                </span>
              </motion.h1>
            </motion.article>
          </AnimatePresence> */}

          <motion.div
            style={{ y: useTransform(scrollY, [100, 200], [0, 400]) }}
            className="flex justify-center"
          >
            <img
              alt="city1"
              src="/images/poverty/children.jpg"
              style={{
                marginTop: "0%",
              }}
              className="z-20 object-cover w-lvw h-[55vh]"
            />
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 400], [0, 300]) }}
            className="flex justify-end"
          >
            <img
              alt="poor_island"
              src="/images/poverty/poor-island.png"
              style={{
                width: "42%",
                marginTop: "10%",
                marginRight: "-3%",
              }}
              className="z-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
