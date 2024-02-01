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
      <div className="text-center text-background">
        <blockquote className="z-10 text-5xl leading-normal font-bold">
          ”Children are our most valuable resource and the best hope for the
          future.”
        </blockquote>
        <div className="font-medium whitespace-nowrap">
          John F. Kennedy
        </div>
      </div>
    </SectionWrapper>
  );
};
