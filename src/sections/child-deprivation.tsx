import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type ChildDeprivationProps = React.ComponentPropsWithRef<"div">;

export const ChildDeprivation = ({ className }: ChildDeprivationProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);

  const cloudNarative = `z-50 text-neutral-content font-bold text-[clamp(0.8rem,1.5vw,1rem)] mt-2                 
      bg-base-200/90 px-[clamp(1.4rem,1.6vw,2.2rem)] py-[clamp(1rem,1vw,1.5rem)] max-w-[clamp(17rem,30vw,32rem)] rounded-[3em]
      drop-shadow-[0px_2px_10px_theme(colors.neutral-content)]`;

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
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "-45%",
              marginTop: "15%",
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

            <h1 className="ml-1 font-title !text-left text-[clamp(1.2rem,1.6vw,2rem)] font-bold leading-[1.1] mt-[0.8em]">
              <span className="inline-grid text-left">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,45vw,42rem)]">
                  Child deprivation is closely related to poverty. Poverty can
                  cause children to not have access to various basic needs, such
                  as education, health, economic and social services.
                </span>
              </span>
            </h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [100, 200], [0, 400]) }}
            className="flex justify-center"
          >
            <img
              alt="city1"
              src="/images/poverty/children.jpg"
              style={{
                // marginTop: "5%",
              }}
              className="z-20 object-cover w-lvw h-[45vh]"
            />
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 2200], [-500, 300]) }}
            className="flex justify-end"
          >
            <img
              alt="poor_island"
              src="/images/poverty/poor-island_2.png"
              style={{
                width: "38%",
                // marginBottom: "1%",
                marginRight: "5%",
              }}
              className="z-10"
            />
          </motion.div>
          
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(10%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              alt="curve-arrow"
              src="/images/poverty/curve-arrow.png"
              style={{
                width: "23%",
                marginTop: "102%",
                marginLeft: "120%",
              }}
              className="z-50 invert"
            />
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(10%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              alt="curve-arrow"
              src="/images/poverty/curve-arrow.png"
              style={{
                width: "23%",
                marginTop: "102%",
                marginLeft: "85%",
              }}
              className="z-50 invert scale-x-[-1]"
            />
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-48%",
              marginTop: "27%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={" text-2xl font-semibold "}
            >
              LACKING IN <br />
              ACCESS TO
            </motion.h1>
          </span>
          
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(5%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              alt="curve-arrow"
              src="/images/poverty/curve-arrow.png"
              style={{
                width: "23%",
                marginTop: "165%", 
                marginLeft: "120%",
              }}
              className="z-50 invert rotate-180 scale-x-[-1]"
            />
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(5%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              alt="curve-arrow"
              src="/images/poverty/curve-arrow.png"
              style={{
                width: "23%",
                marginTop: "165%",
                marginLeft: "85%",
              }}
              className="z-50 invert rotate-180"
            />
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-17%",
              marginBottom: "-10%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tl-none"}
            >
              Economy
            </motion.h1>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-80%",
              marginBottom: "-10%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-tr-none"}
            >
              Education
            </motion.h1>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-18%",
              marginBottom: "-43%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-bl-none"}
            >
              Health
            </motion.h1>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(200%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginRight: "-82%",
              marginBottom: "-43%",
            }}
          >
            <motion.h1
              style={{ y: useTransform(scrollY, [100, 10000], [200, 0]) }}
              className={cloudNarative + " rounded-br-none"}
            >
              Social Services
            </motion.h1>
          </span>
        </div>
      </div>
    </section>
  );
};
