import { SectionWrapper } from "@/components/section-card";
import freepikLogo from "/images/freepik.svg";
import { markersStore, useLayerStyle, usePopupStore } from "@/stores/map";

export const Footer = () => {
  const clearMarkers = markersStore((state) => state.clearMarkers);
  const resetRouteStyles = useLayerStyle((state) => state.resetRouteStyles);
  return (
    <SectionWrapper
      className="!max-w-full m-auto p-0 relative"
      onSectionEnter={(map) => {
        clearMarkers();
        resetRouteStyles();
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        usePopupStore.setState({ active: false });
        
        map?.moveLayer("cdi");
        map?.getMap().setLayoutProperty("cdi", "visibility", "none");
        map?.getMap().setLayoutProperty("cdi-3d", "visibility", "none");
        map?.flyTo({
          duration: 3000,
          center: [120, 6],
          zoom: 3,
          pitch: 0.0,
          bearing: 0.0,
        });
      }}
    >
      <div className="bg-gradient-to-t from-base-100/40 to-base-100/80 py-60 px-40 min-h-svh text-center text-background mt-13">
        <div className="font-bold text-[clamp(1rem,3.6vw,4rem)] whitespace-nowrap mt-2 ">
          Special thanks to...
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 xs:grid-cols-1 gap-10 mt-10">
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-black w-[200px] h-[200px]">
            <img
              className="w-[120%]"
              src="https://unsplash.com/blog/content/images/max/2560/1-vQ5EsgnJkANWb5fktHPwnw.jpeg"
              title="Flaticon logo"
              alt="Flaticon logo"
            />
          </div>
          <div className="flex items-center justify-center flex-col p-5 rounded-3xl bg-white w-[200px] h-[200px]">
            <img
              className="w-2/5"
              alt="bps"
              src="https://www.bps.go.id/_next/image?url=%2Fassets%2Flogo-bps.png&w=1080&q=75"
            />

            <p className="text-center font-arial font-bold uppercase italic text-blue-500 leading-[1] mt-2 text-[clamp(0.8rem,1.5vw,1rem)]">
              Statistics<br />Indonesia
            </p>
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-[#00AEEC] w-[200px] h-[200px]">
            <img
              className="w-full"
              alt="unicef"
              src="https://www.unicef.org/sites/default/files/styles/large/public/UN0369246.jpg.webp"
            />
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-white w-[200px] h-[200px]">
            <img
              className="w-3/4"
              alt="freepik"
              src={freepikLogo}
            />
          </div>
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-blue-950 w-[200px] h-[200px]">
            <img
              className="w-4/5"
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
