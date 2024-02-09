import { SectionWrapper } from "@/components/section-card";
import freepikLogo from "/images/freepik.svg";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";

export const Footer = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  return (
    <SectionWrapper
      className="!max-w-full m-auto p-0 relative"
      onSectionEnter={(map) => {
        clearMarkers();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({ active: false });
        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0,
          },
          "klaster-sd": { ...state["klaster-sd"], "line-opacity": 0 },
          "route-klaster-sd": {
            ...state["route-klaster-sd"],
            "line-opacity": 0,
          },
          "klaster-smp": { ...state["klaster-smp"], "line-opacity": 0 },
          "route-klaster-smp": {
            ...state["route-klaster-smp"],
            "line-opacity": 0,
          },
          "klaster-sma": { ...state["klaster-sma"], "line-opacity": 0 },
          "route-klaster-sma": {
            ...state["route-klaster-sma"],
            "line-opacity": 0,
          },
          "klaster-apotek": {
            ...state["klaster-apotek"],
            "line-opacity": 0,
          },
          "route-klaster-apotek": {
            ...state["route-klaster-apotek"],
            "line-opacity": 0,
          },
          "klaster-puskesmas": {
            ...state["klaster-puskesmas"],
            "line-opacity": 0,
          },
          "route-klaster-puskesmas": {
            ...state["route-klaster-puskesmas"],
            "line-opacity": 0,
          },
          "klaster-rumah-sakit": {
            ...state["klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "route-klaster-rumah-sakit": {
            ...state["route-klaster-rumah-sakit"],
            "line-opacity": 0,
          },
          "klaster-bank": { ...state["klaster-bank"], "line-opacity": 0 },
          "route-klaster-bank": {
            ...state["route-klaster-bank"],
            "line-opacity": 0,
          },
          "klaster-tourism": { ...state["klaster-tourism"], "line-opacity": 0 },
          "route-klaster-tourism": {
            ...state["route-klaster-tourism"],
            "line-opacity": 0,
          },
          "klaster-pasar": { ...state["klaster-pasar"], "line-opacity": 0 },
          "route-klaster-pasar": {
            ...state["route-klaster-pasar"],
            "line-opacity": 0,
          },
        }));
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "visible");
        1;
        map?.flyTo({
          duration: 3000,
          center: [96, 30],
          zoom: 3,
          pitch: 0.0,
          bearing: 0.0,
        });
      }}
    >
      <div className="bg-gradient-to-b from-transparent to-foreground/90 h-96 " />
      <div className="bg-foreground/90 p-60 min-h-svh text-center text-background mt-13">
        <div className="font-bold text-[clamp(1rem,3.6vw,4rem)] whitespace-nowrap mt-2 ">
          Special thanks to...
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-10 mt-10">
          <div className="flex items-center justify-center flex-col p-5 rounded-xl bg-white w-[200px] h-[200px]">
            <img
              //   className="h-[clamp(0.8rem,6vw,6rem)] "
              alt="bps"
              src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
            />

            <p className="text-center font-arial font-bold uppercase italic text-blue-500">
              Statistics Indonesia
            </p>
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-xl bg-white w-[200px] h-[200px]">
            <img
              //   className="h-[clamp(0.8rem,1.6vw,2rem)]"
              alt="unicef"
              src="https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/UNICEF_logo_2016.png.webp"
            />
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-xl bg-white w-[200px] h-[200px]">
            <img
              //   className="h-[clamp(0.8rem,1.6vw,2rem)]"
              alt="freepik"
              src={freepikLogo}
            />
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-xl bg-blue-950 w-[200px] h-[200px]">
            <img
              src="https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg"
              title="Flaticon logo"
              alt="Flaticon logo"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};