import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";
import { SectionWrapper } from "@/components/section-card";
import { divProps } from "@/App";

export const RemoteSensingLayers = ({ id, className }: divProps) => {
  const pNarative = ` sm:ml-1 mt-[0.8em] !text-left text-[clamp(0.8rem,1.1vw,1.2rem)] font-light`;

  const clearMarkers = markersStore((state) => state.clearMarkers);
  const ref = useRef(null);
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
      <div
        id={id}
        className="bg-foreground/60 text-background min-h-svh flex flex-row w-full"
      >
        <div className="hero min-h-screen">
          <span
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              marginLeft: "10%",
            }}
            className="w-full "
          >
            <h1 className="font-title !text-left text-[clamp(1.3rem,3vw,3rem)] font-black ">
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
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] sm:max-w-[clamp(17rem,52vw,52rem)] w-5/6">
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
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] sm:max-w-[clamp(17rem,52vw,52rem)] w-5/6">
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
                <span className="[&::selection]:text-neutral-content relative col-start-1 row-start-1 text-base-content drop-shadow-[0_3px_4px_#1f2937] sm:max-w-[clamp(17rem,52vw,52rem)] w-5/6">
                  This satellite-derived data, renowned for its precision,
                  serves to pinpoint areas where children are most in need by
                  charting their access to education, healthcare, and economic
                  resources at a 1 km² resolution. Employing machine learning
                  techniques, this innovative approach estimates the proportion
                  of children requiring assistance in these regions, a task
                  traditionally challenging with conventional data collection
                  methods.
                </span>
              </span>
            </p>

            <a
              href="https://geoportal.bps.go.id/maps/sharing/rest/oauth2/authorize?client_id=arcgisonline&display=default&response_type=token&state=%7B%22returnUrl%22%3A%22https%3A%2F%2Fgeoportal.bps.go.id%2Fmaps%2Fapps%2Fwebappviewer%2Findex.html%3Fid%3D204d54c7b2b0430c8a8b959b8d3fca89%22%2C%22useLandingPage%22%3Afalse%7D&expiration=20160&locale=en-us&redirect_uri=https%3A%2F%2Fgeoportal.bps.go.id%2Fmaps%2Fhome%2Faccountswitcher-callback.html&force_login=false&hideCancel=true&showSignupOption=true"
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center justify-center btn btn-circle bg-secondary text-base-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current "
              >
                <path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
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
              className="hidden sm:block"
            />
          </span>
        </div>
      </div>
      <div className="bg-gradient-to-t from-transparent to-foreground/60 h-96" />
    </SectionWrapper>
  );
};
