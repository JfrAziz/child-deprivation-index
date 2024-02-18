import { useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";
import { SectionWrapper } from "@/components/section-card";

type ChildDeprivationProps = React.ComponentPropsWithRef<"div">;

export const RemoteSensingLayers = ({ className }: ChildDeprivationProps) => {
  const pNarative = ` ml-1 mt-[0.8em] !text-left text-[clamp(1.2rem,1vw,1rem)] font-light`;

  const clearMarkers = markersStore((state) => state.clearMarkers);
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const isInView = useInView(ref);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);

  return (
    <SectionWrapper
      className={cn("!max-w-full m-auto p-0 relative ", className)}
      onSectionEnter={(map) => {
        clearMarkers();
        /**
         * reset any mapbox style layer
         */
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");

        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");

        usePopupStore.setState({ active: false });

        resetRouteStyles();

        map?.flyTo({
          center: [114.61831, -5.84445],
          zoom: 1,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <div className="bg-gradient-to-b from-transparent to-foreground/60 h-96" />
      <div className="bg-foreground/60 text-background min-h-svh flex flex-row w-full">
        <div className="hero min-h-screen">
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "10%",
              // marginTop: "15%",
            }}
            className="w-full pt-20"
          >
            <h1 className="font-title !text-left text-[clamp(1.3rem,4vw,4rem)] font-black ">
              <span className="inline-grid text-left">
                <span
                  className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                  aria-hidden="true"
                  data-text="component library"
                ></span>
                <span className="[&::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text drop-shadow-[0_0.1em_0.1em_theme(colors.base-300)] [-webkit-text-fill-color:transparent] [&::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                  Satellite Imagery
                </span>
              </span>
            </h1>

            <p className={` ` + pNarative}>
              <span className="inline-grid text-left">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,55vw,52rem)]">
                  The Copernicus Earth Observation Program, initiated by the
                  European Space Agency on March 22, 2014, allows for detailed
                  study of the Earth's surface. Using sensors on the Sentinel
                  satellites, this program collects images to analyze
                  vegetation, land use, and water bodies. For example, the
                  Sentinel-2 satellite helps identify areas of vegetation, land
                  usage, and water, while night light data from the VIIRS
                  satellite indicates economic activities in 1 km² areas. This
                  is especially useful for overcoming limitations in survey data
                  collection.
                </span>
              </span>
            </p>
            <p className={` ` + pNarative}>
              <span className="inline-grid text-left">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,52vw,52rem)]">
                  The program uses the Normalized Difference Vegetation Index
                  (NDVI) from Sentinel-2 to monitor land uses like residential,
                  industrial, and agricultural areas and observe changes such as
                  urban growth. NDVI can even locate agricultural areas within a
                  1 km² range. Similarly, the Normalized Difference Built-up
                  Index (NDBI) from Sentinel-2 maps urban areas and changes in
                  land use, indicating children's access to public facilities.
                  The Normalized Difference Water Index (NDWI) is used to detect
                  water bodies and assess water quality for child development.
                </span>
              </span>
            </p>
            <p className={` ` + pNarative}>
              <span className="inline-grid text-left">
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] max-w-[clamp(17rem,56vw,60rem)]">
                  Air quality is monitored using the Sentinel-5P Satellite,
                  which measures pollutants like carbon monoxide and sulfur
                  dioxide. The MODIS satellite's geothermal heat data also helps
                  assess environmental conditions beneficial for child
                  development. This satellite data, with its high precision,
                  helps identify where children are most in need by mapping
                  their access to education, health, and economic facilities on
                  a 1 km² scale. With the aid of machine learning, this
                  innovative approach estimates the percentage of children in
                  need in these areas, a task difficult with traditional data
                  collection methods.
                </span>
              </span>
            </p>
          </span>

          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <img
              alt="base_layer"
              src="/images/poverty/base-layer.png"
              style={{
                width: "100%",
                marginTop: "38%",
                marginLeft: "65%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            <img
              alt="NDVI"
              src="/images/poverty/NDVI.png"
              style={{
                width: "100%",
                marginTop: "42%",
                marginLeft: "66%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
          >
            <img
              alt="NDBI"
              src="/images/poverty/NDBI.png"
              style={{
                width: "100%",
                marginTop: "35%",
                marginLeft: "67%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
          >
            <img
              alt="NDWI"
              src="/images/poverty/NDWI.png"
              style={{
                width: "100%",
                marginTop: "25%",
                marginLeft: "69%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
            }}
          >
            <img
              alt="LST"
              src="/images/poverty/LST.png"
              style={{
                width: "100%",
                marginTop: "20%",
                marginLeft: "70%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 3s",
            }}
          >
            <img
              alt="CO"
              src="/images/poverty/CO.png"
              style={{
                width: "100%",
                marginTop: "10%",
                marginLeft: "71%",
              }}
            />
          </span>
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(-100%)",
              opacity: isInView ? 1 : 0,
              transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3.5s",
            }}
          >
            <img
              alt="SO2"
              src="/images/poverty/SO2.png"
              style={{
                width: "100%",
                marginTop: "1%",
                marginLeft: "73%",
              }}
            />
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-t from-transparent to-foreground/60 h-96" />
    </SectionWrapper>
  );
};
