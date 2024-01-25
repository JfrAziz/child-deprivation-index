import { SectionWrapper } from "@/components/section-card";

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="h-svh bg-white">hero 1</div>
      <div className="h-svh bg-orange-400">hero 2</div>
      <div className="h-svh bg-sky-300">hero 3</div>
      <SectionWrapper
        className="flex items-center justify-center"
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
        <div className="bg-black text-white w-96 h-48">Just example hero</div>
      </SectionWrapper>
    </section>
  );
};
