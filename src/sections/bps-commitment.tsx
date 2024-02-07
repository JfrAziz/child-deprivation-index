import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type BPSCommitmentProps = React.ComponentPropsWithRef<"div">;

export const BPSCommitment = ({ className }: BPSCommitmentProps) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);

  return (
    <section className={cn("w-full mt-24 ", className)}>
      <div
        className="z-50 bg-base-100 "
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero min-h-screen">
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            className="flex justify-center flex-col items-center"
          >
            <span className="flex text-center items-center flex-col">
              <img
                className="h-[clamp(0.8rem,6vw,6rem)] "
                alt="bps"
                src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
              />
              
              <p className="font-arial mt-[clamp(0.4rem,0.6vw,1rem)] text-[clamp(0.5rem,2vw,1.2rem)] font-bold uppercase italic text-blue-500">
                    Statistics Indonesia
                  </p>
            </span>

            <h1 className="font-title !text-center text-[clamp(1.2rem,1.6vw,2rem)] font-bold leading-[1.1] mt-[0.8em]">
              <span className="inline-grid text-center">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,70vw,52rem)]">
                  As a commitment to sustainable development, BPS-Statistics
                  Indonesia provides poverty data to support the first goal of
                  the SDGs. However, the currently available data cannot
                  accurately identify child deprivation in poor households,
                  making it challenging to implement targeted assistance.
                </span>
              </span>
            </h1>
          </span>

          <motion.div
            style={{ y: useTransform(scrollY, [0, 400], [0, 300]) }}
            className="flex justify-center"
          >
            <img
              alt="poor_island"
              src="/images/poverty/city-img.png"
              style={{
                width: "50%",
              }}
              className="z-50"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
