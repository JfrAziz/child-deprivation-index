import { SectionWrapper } from "@/components/section-card";

export const Hero = () => {

  return (
    <section className="w-full">
      <div
        className="h-svh bg-base-100"
        style={{
          backgroundImage: `url("https://awv3node-homepage.surge.sh/build/assets/stars.svg")`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero min-h-screen">
          <div className="hero-content flex flex-col gap-y-8">
            {/* <div className="-mt-16 flex flex-auto gap-2 text-center">
              <div className="flex w-72 flex-auto rounded-full bg-background px-6 py-3 drop-shadow-[0_7px_80px_theme(colors.secondary)]">
                <span>
                  <img
                    className="h-8"
                    alt="bps"
                    src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
                  />
                </span>
                <p className="font-arial ml-2 mt-[0.25em] text-[1em] font-bold uppercase italic text-blue-500">
                  Statistics Indonesia
                </p>
              </div>
              <div className="w-72 rounded-full bg-[#00AEEC] px-8 py-3 drop-shadow-[0_7px_80px_theme(colors.secondary)]">
                <span>
                  <img
                    className=""
                    alt="unicef"
                    src="https://www.unicef.org/sites/default/files/styles/logo/public/English_9.png.webp"
                  />
                </span>
              </div>
            </div> */}

            <div className="flex flex-col justify-center gap-y-[clamp(0.2rem,1vw,1rem)] text-center">
              <div className=" drop-shadow-[0_7px_130px_theme(colors.secondary)]">
                <h1 className="font-title !text-center text-[clamp(1rem,4vw,3rem)] font-bold leading-[1.1] mb-[2em">
                  <span className="inline-grid text-center">
                    <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937]">
                    From the Sky to the Ground:
                    </span>
                  </span>
                </h1>
                <h1 className="font-title !text-center text-[clamp(1.3rem,4vw,4rem)] font-black leading-[1.1] ">
                  <span className="inline-grid text-center">
                    <span
                      className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                      aria-hidden="true"
                      data-text="component library"
                    >Mapping Child </span>
                    <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                    Mapping Child Deprivation via Satellite
                    </span>
                  </span>
                </h1>
              </div>
              <div className="flex flex-auto justify-center gap-x-1 rounded-full drop-shadow-[0_7px_10px_theme(colors.secondary)]">
                <span>
                  <img
                    alt="bps"
                    className="h-[clamp(1rem,3vw,2rem)]"
                    src="https://cdn-icons-png.flaticon.com/512/8126/8126435.png"
                  />
                </span>
                <h1 className="text-base-content font-title text-[clamp(0.6rem,2vw,2rem)] font-bold underline underline-offset-[clamp(0.03rem,0.7vw,1rem)]">
                  Application in Java, Indonesia
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionWrapper
        className="!max-w-full bg-gradient-to-b from-base-100 to-transparent"
        onSectionEnter={(map) => {
          map?.flyTo({
            duration: 3000,
            center: [96, 30],
            zoom: 3,
            pitch: 0.0,
            bearing: 0.0,
          });
        }}
      />
    </section>
  );
};
