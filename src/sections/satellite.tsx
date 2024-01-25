import { useLayerStyle, usePopupStore } from "@/stores/map";
import { SectionCard, SectionWrapper } from "@/components/section-card";

export const MethodExplanation = () => {
  return (
    <SectionWrapper
      className="flex flex-row items-center"
      onSectionEnter={(map) => {
        usePopupStore.setState({ active: false });

        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 1 },
          "indonesia-province": {
            ...state["indonesia-province"],
            "fill-opacity": 0,
          },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0,
          },
        }));

        map?.flyTo({
          center: [114.61831, -5.84445],
          zoom: 1,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <SectionCard title="Satellite Imagery">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          officiis velit reprehenderit, laborum repellat exercitationem
          recusandae itaque tempora dolorum ipsum explicabo cumque dolorem
          provident, blanditiis nobis quibusdam animi numquam illo?\
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};

export const YogyakartaRegencies = () => {
  return (
    <SectionWrapper
      className="flex flex-row items-center justify-end"
      onSectionEnter={(map) => {
        usePopupStore.setState({ active: false });

        useLayerStyle.setState((state) => ({
          graticule: { ...state["graticule"], "line-opacity": 0 },
          "yogyakarta-regencies": {
            ...state["yogyakarta-regencies"],
            "fill-opacity": 0.7,
            "fill-color": "#fda772",
            "fill-outline-color": "#7f0000",
          },
        }));

        map?.flyTo({
          center: [110.39413, -7.7754],
          zoom: 9.5,
          bearing: 0,
          pitch: 0,
        });
      }}
    >
      <SectionCard title="D.I Yogyakarta">
        <p>
          The development of Machine Learning and Utilization of Satellite Image
          Data Makes it possible to find child deprivation in the Province of
          D.I Yogyakarta and other regions in Java at the level of estimating
          the one-kilometer square.
        </p>
      </SectionCard>
    </SectionWrapper>
  );
};
