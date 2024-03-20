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
      <div className="bg-gradient-to-t from-base-100/40 to-base-100/80 pt-48 px-40 min-h-svh text-center text-background mt-13">
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
              Statistics
              <br />
              Indonesia
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
            <img className="w-3/4" alt="freepik" src={freepikLogo} />
          </div>
          {/* <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-blue-950 w-[200px] h-[200px]">
            <img
              className="w-4/5"
              src="https://media.flaticon.com/dist/min/img/logos/flaticon-color-negative.svg"
              title="Flaticon logo"
              alt="Flaticon logo"
            />
          </div> */}
          <div className="flex text-center items-center justify-center flex-col p-5 rounded-3xl bg-black w-[200px] h-[200px]">
            <svg
              className="w-3/4"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 126 28"
              fill="none"
            >
              <path
                d="M93.86 7.669a5.84 5.84 0 0 0-4.187 1.78v-6a.35.35 0 0 0-.35-.346H87.19a.35.35 0 0 0-.35.346V19.67a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-1.118a5.81 5.81 0 0 0 4.187 1.779c3.327 0 6.017-2.835 6.017-6.331s-2.69-6.331-6.017-6.331zm-.493 10.126c-2.022 0-3.662-1.669-3.677-3.748v-.095c.032-2.079 1.656-3.748 3.677-3.748 2.038 0 3.677 1.701 3.677 3.795s-1.656 3.795-3.677 3.795zm14.359-10.126c-3.598 0-6.511 2.835-6.511 6.331s2.913 6.331 6.511 6.331 6.511-2.835 6.511-6.331-2.913-6.331-6.511-6.331zm-.016 10.126c-2.038 0-3.677-1.701-3.677-3.795s1.655-3.795 3.677-3.795 3.677 1.701 3.677 3.795-1.655 3.795-3.677 3.795zM67.912 7.984h-2.133a.35.35 0 0 0-.35.346v1.118a5.81 5.81 0 0 0-4.187-1.78c-3.327 0-6.017 2.835-6.017 6.331s2.69 6.331 6.017 6.331a5.84 5.84 0 0 0 4.187-1.78v1.118a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346V8.331a.35.35 0 0 0-.35-.346zm-6.177 9.811c-2.038 0-3.677-1.701-3.677-3.795s1.656-3.795 3.677-3.795 3.661 1.669 3.677 3.748v.095c-.016 2.079-1.656 3.748-3.677 3.748zM78.562 7.669a5.84 5.84 0 0 0-4.187 1.78V8.331a.35.35 0 0 0-.35-.346h-2.133a.35.35 0 0 0-.35.346v16.22a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-6a5.81 5.81 0 0 0 4.187 1.78c3.327 0 6.017-2.835 6.017-6.331s-2.69-6.331-6.017-6.331zm-.493 10.126c-2.022 0-3.662-1.669-3.677-3.748v-.095c.032-2.079 1.656-3.748 3.677-3.748 2.038 0 3.677 1.701 3.677 3.795s-1.64 3.795-3.677 3.795zM48.841 7.669a4.17 4.17 0 0 0-3.725 2.362c-.78-1.465-2.34-2.378-4.012-2.362a4.1 4.1 0 0 0-3.295 1.669V8.331a.35.35 0 0 0-.35-.346h-2.133a.35.35 0 0 0-.35.346V19.67a.35.35 0 0 0 .35.346h2.133a.35.35 0 0 0 .35-.346v-6.787c.08-1.512 1.146-2.724 2.452-2.724 1.353 0 2.483 1.118 2.483 2.583v6.929a.35.35 0 0 0 .35.346h2.149a.35.35 0 0 0 .35-.346l-.016-7.055c.191-1.386 1.194-2.457 2.42-2.457 1.353 0 2.483 1.118 2.483 2.583v6.929a.35.35 0 0 0 .35.346h2.149a.35.35 0 0 0 .35-.346l-.016-7.795c0-2.331-2.006-4.205-4.473-4.205zm76.873 11.858l-3.693-5.559 3.661-5.512c.096-.142.048-.346-.095-.441-.048-.032-.111-.047-.175-.047h-2.468c-.191 0-.366.094-.461.252l-2.149 3.575-2.15-3.559c-.095-.157-.27-.252-.461-.252h-2.468c-.175 0-.318.142-.318.315 0 .063.016.126.048.173l3.661 5.512-3.693 5.559c-.096.142-.048.346.095.441a.33.33 0 0 0 .175.047h2.468c.191 0 .366-.095.462-.252l2.196-3.622 2.197 3.622c.096.158.271.252.462.252h2.436c.175 0 .318-.142.318-.315 0-.063-.016-.126-.048-.189zM14.152 0C6.336 0 0 6.268 0 14s6.336 14 14.152 14 14.152-6.268 14.152-14S21.969 0 14.152 0zm6.718 17.433c-4.84 4.787-13.484 3.26-13.484 3.26s-1.56-8.535 3.295-13.339c2.69-2.661 7.148-2.551 9.966.22s2.913 7.197.223 9.858zm-5.094-9.228l-1.385 2.819-2.849 1.37 2.849 1.37 1.385 2.819 1.385-2.819 2.85-1.37-2.85-1.37-1.385-2.819z"
                fill="currentColor"
              ></path>
              <defs></defs>
            </svg>
          </div>
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-neutral-50/70 text-base-300 inline-flex">
        <aside className="inline-flex justify-center items-center text-center footer footer-center ">
          <img
            alt="logoDAPS"
            src="/images/poverty/logoDAPS.png"
            className="h-10"
          />
          <div className="text-left flex flex-col justify-start items-start gap-0">
            <span className="font-bold -mb-1">
              Directorate of Statistical Analysis and Development{" "}
            </span>
            <span>BPS - Statistics Indonesia | <a href="https://bps.go.id" className="hover:underline" target="_blank">bps.go.id</a></span>
          </div>
        </aside>
      </footer>
    </SectionWrapper>
  );
};
