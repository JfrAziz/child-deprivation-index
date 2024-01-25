const graticule: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

for (let lng = -170; lng <= 180; lng += 10) {
  graticule.features.push({
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [lng, -90],
        [lng, 90],
      ],
    },
    properties: { value: lng },
  });
}
for (let lat = -80; lat <= 80; lat += 10) {
  graticule.features.push({
    type: "Feature",
    geometry: {
      type: "LineString",
      coordinates: [
        [-180, lat],
        [180, lat],
      ],
    },
    properties: { value: lat },
  });
}

export default graticule;
