import { divProps } from "@/App";
import { SectionWrapper } from "@/components/section-card";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Quotes = ({ className }: divProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SectionWrapper
      className={cn(className, "!max-w-full flex items-center justify-center bg-gradient-to-b from-base-100 to-transparent !-z-10")}
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 3000,
          center: [96, 30],
          zoom: 3,
          pitch: 0.0,
          bearing: 0.0,
        });
      }}
    >
      <div className="text-center text-background mt-52">
        <span
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100%)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex justify-center flex-col items-center"
        >
          <blockquote className="z-10 text-[clamp(1.4rem,4vw,4rem)] font-extralight sm:px-[clamp(1rem,10vw,8rem)] leading-[1] italic">
            ”Children are our most valuable resource and the best hope for the
            future.”
          </blockquote>
          <div className="font-bold text-[clamp(1rem,3.6vw,4rem)] whitespace-nowrap mt-2">
            John F. Kennedy
          </div>
        </span>
      </div>
    </SectionWrapper>
  );
};
