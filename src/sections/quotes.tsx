import { SectionWrapper } from "@/components/section-card";

export const Quotes = () => {
  return (
    <SectionWrapper
      className="!max-w-full flex items-center justify-center bg-gradient-to-b from-base-100 to-transparent !-z-10"
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
        <blockquote className="z-10 text-[clamp(1.4rem,4vw,4rem)] font-extralight px-[clamp(1rem,10vw,8rem)] leading-[1] italic">
          ”Children are our most valuable resource and the best hope for the
          future.”
        </blockquote>
        <div className="font-bold text-[clamp(1rem,3.6vw,4rem)] whitespace-nowrap mt-2">
          John F. Kennedy
        </div>
      </div>
    </SectionWrapper>
  );
};
