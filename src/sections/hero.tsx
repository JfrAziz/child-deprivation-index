import { divProps } from "@/App";
import { cn } from "@/lib/utils";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export const Hero = ({ className, isMobile }: divProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);

  const scrollInto = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <section className={cn("w-full ", className)}>
      <div
        className="h-svh bg-base-100"
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero max-h-screen relative">
          <img
            alt="satellite"
            src="/images/poverty/satelit.png"
            className="swing-left justify-start"
            style={{
              width: "clamp(7rem,17vw,17rem)",
              marginBottom: cn(
                `clamp(`,
                isMobile ? `13rem` : `14rem`,
                `,35vw,37rem)`
              ),
              marginRight: "65%",
            }}
          />
          <img
            alt="satellite"
            src="/images/poverty/satelit.png"
            className="swing"
            style={{
              width: "clamp(7rem,17vw,17rem)",
              marginBottom: cn(
                `clamp(`,
                isMobile ? `5rem` : `20rem`,
                `,20vw,15rem)`
              ),
              marginLeft: "60%",
              transform: "rotate(-15deg)",
            }}
          />

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.div
              style={{
                y: useTransform(
                  scrollY,
                  [0, isMobile ? 0 : 900],
                  [0, isMobile ? 200 : 300]
                ),
                x: 0,
              }}
              className=" hero-content flex flex-col gap-y-[clamp(1.4rem,3vw,3rem)]"
            >
              <div className="flex justify-evenly gap-[clamp(0.2rem,2vw,1rem)]">
                <div className="px-[clamp(0.2rem,6vw,2rem)] py-[clamp(0.5rem,3vw,1rem)] bg-background flex rounded-full">
                  <span>
                    <img
                      className="h-[clamp(0.8rem,1.6vw,2rem)]"
                      alt="bps"
                      src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
                    />
                  </span>
                  <p className="font-arial ml-[clamp(0.4rem,0.6vw,1rem)] text-[clamp(0.5rem,1vw,1rem)] font-bold uppercase italic text-blue-500">
                    Statistics Indonesia
                  </p>
                </div>

                <div className="px-[clamp(0.2rem,6vw,2rem)] py-[clamp(0.5rem,3vw,1rem)] bg-[#00AEEC] flex rounded-full">
                  <span>
                    <img
                      className="h-[clamp(0.8rem,1.6vw,2rem)]"
                      alt="unicef"
                      src="https://www.unicef.org/sites/default/files/styles/logo/public/English_9.png.webp"
                    />
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-y-[clamp(0.2rem,1vw,1rem)] text-center">
                <div className=" drop-shadow-[0_7px_130px_theme(colors.secondary)]">
                  <h1
                    className={cn(
                      `font-title !text-center font-black`,
                      isMobile
                        ? ` text-[clamp(1.4rem,4vw,4rem)]`
                        : ` text-[clamp(1.3rem,4vw,4rem)]`
                    )}
                  >
                    <span className="inline-grid text-center">
                      <span
                        className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                        aria-hidden="true"
                        data-text="component library"
                      >
                        Mapping 
                      </span>
                      <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)] leading-[1.1]">
                      Mapping of Child Welfare
                      </span>
                    </span>
                  </h1>
                  <h1
                    className={cn(
                      `font-title !text-center font-bold `,
                      isMobile
                        ? ` -mt-3 mb-2 text-[clamp(1.15rem,4vw,3rem)] `
                        : ` -mt-8 leading-[1.3] text-[clamp(1.2rem,4vw,3rem)] `
                    )}
                  >
                    <span className="inline-grid text-center">
                      <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937]">
                        by Using Satellite Imagery
                      </span>
                    </span>
                  </h1>
                </div>
                <div className="flex flex-auto justify-center gap-x-1 rounded-full drop-shadow-[0_7px_10px_theme(colors.secondary)]">
                  <span>
                    <img
                      alt="tag"
                      className="h-[clamp(1rem,3vw,3rem)]"
                      src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                    />
                  </span>
                  <h1 className="text-base-content font-title text-[clamp(0.6rem,2vw,2rem)] font-bold underline underline-offset-[clamp(0.03rem,0.7vw,1rem)]">
                    Application in Java, Indonesia
                  </h1>
                </div>
              </div>
            </motion.div>
          </span>

          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className={cn(
              ` absolute top-[80vh] flex justify-center flex-col items-center z-50 `
            )}
          >
            <button
              onClick={() => scrollInto("cityscape")}
              className="hidden sm:block pt-1 pb-5 px-3 rounded-full bg-transparent border-2 border-white opacity-60 border-spacing-8"
            >
              <span
                className=" inline-flex h-3 w-1 rounded-full bg-white "
                style={{
                  animation: "animated-mouse 1s ease infinite",
                }}
              ></span>
            </button>

            <button
              onClick={() => scrollInto("cityscape")}
              className="flex justify-center items-center sm:hidden  bg-transparent "
            >
              <img
                alt="scroll"
                src="/images/scroll.png"
                style={{
                  width: "8%",
                  marginBottom: "3%",
                  animation: "animated-mouse 1.2s ease infinite",
                }}
              />
            </button>

            <button
              onClick={() => scrollInto("cityscape")}
              className="arrow mt-1"
            >
              <span className="down-arrow-1"></span>
              <span className="down-arrow-2"></span>
              <span className="down-arrow-3"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
