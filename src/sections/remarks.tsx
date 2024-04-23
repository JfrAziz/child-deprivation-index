import { SectionWrapper } from "@/components/section-card";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Remarks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <SectionWrapper
      className="!max-w-full flex items-center justify-center bg-gradient-to-t from-base-100/80 to-transparent !-z-10"
      onSectionEnter={(map) => {
        map?.flyTo({
          duration: 4000,
          center: [-6, 30],
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
          <blockquote className="z-10 text-[clamp(1.3rem,1.9vw,2rem)] font-light sm:px-[clamp(1rem,20vw,18rem)] leading-[1.3] italic">
          The utilization of satellite imagery data and machine learning modeling can pinpoint the locations of deprived children in basic needs at a granular level and potentially serve as a supportive dataset for more detailed official statistical data.
          </blockquote>
        </span>
      </div>
    </SectionWrapper>
  );
};
