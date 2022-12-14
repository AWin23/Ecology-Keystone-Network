mapboxgl.accessToken =
  "pk.eyJ1IjoiYS13aW4yMyIsImEiOiJjbDlrZXk4b2UxYTAwM3VtdzRhMnV5bDZnIn0.U-KKOGqWyAgywbl57Vo-oA";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/a-win23/cl9kgfho5000115pe420dn38j",
  center: [-96, 37.8],
  zoom: 3,
});

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature Firefirest Test",
      geometry: {
        type: "Point",
        coordinates: [-121.346, 47.728],
      },
      properties: {
        title: "Forest Fire",
        dateoforigin: "Date of Origin: September 10th, 2022",
        location: "Location: Bolt Creek, Washington",
        description: "Status: Hazardous air quality within this vicinity",
        prevention:
          "Safety Precaution: Create a fire-resistant zone that is free of leaves, debris or flammable materials for at least 30 feet from your home",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html"> RedCross Website</a>',
      },
    },

    {
      type: "Feature Firefirest Test",
      geometry: {
        type: "Point",
        coordinates: [-114.0878, 44.0682],
      },
      properties: {
        title: "Forest Fire",
        dateoforigin: "Date of Origin: August 29nd, 2022",
        location: "Location: Williams Creek, Idaho",
        description: "Status: Thousands of acres are burnt",
        prevention:
          "Safety Precaution: Create a fire-resistant zone that is free of leaves, debris or flammable materials for at least 30 feet from your home",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html"> RedCross Website</a>',
      },
    },

    {
      type: "Feature Firefirest Test",
      geometry: {
        type: "Point",
        coordinates: [-105.2253, 20.6534],
      },
      properties: {
        title: "Tornado",
        dateoforigin: "Date of Origin: October 9th, 2022 ",
        location: "Location: Puerto Vallarta, Mexico",
        description: "Status: Pending extensive damage",
        prevention:
          "Safety Precaution: Go to the basement or an inside room without windows on the lowest floor",
        guideline:
          'Additional Guidelines: <a href="https://www.nhc.noaa.gov/refresh/graphics_ep4+shtml/145932.shtml?cone"> Link to NOAA website for live updates</a>',
      },
    },

    {
      type: "WildFire",
      geometry: {
        type: "Point",
        coordinates: [-121, 47],
      },
      properties: {
        title: "Forest Fire",
        dateoforigin: "Date of Origin: September 10th, 2022",
        location: "Location: Skykomish, Washington",
        description: "Status: Smoldered 14,000 acres of lands",
        prevention:
          "Safety Precaution: Create a fire-resistant zone that is free of leaves, debris or flammable materials for at least 30 feet from your home",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/wildfire.html"> RedCross Website</a>',
      },
    },

    {
      type: "Feature Firefirest Test",
      geometry: {
        type: "Point",
        coordinates: [-175.38, 20.57],
      },
      properties: {
        title: "Eruption",
        dateoforigin: "Date of Origin: January 15th, 2022",
        location: "Location: Hunga Tonga-Hunga Ha apai, Tonga",
        description:
          "Status: Tongo volcano erupted spewing volcanic plumes that reached 58km",
        prevention:
          "Safety Precaution: Stay away from vicinity of eruption to ensure max saftey",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/volcano.html#:~:text=Prepare%20in%20Advance&text=Assembling%20an%20emergency%20preparedness%20kit,are%20separated%20during%20an%20emergency."> RedCross Website</a>',
      },
    },

    {
      type: "Feature Firefirest Test",
      geometry: {
        type: "Point",
        coordinates: [101.9625, 30.0493],
      },
      properties: {
        title: "Earthquake",
        dateoforigin: "Date of Origin: October 21st, 2022",
        location: "Location: Garze Tibetan Autonomous Prefecture, China",
        description: "Status: Magnitude 5.3 earthquake",
        prevention:
          "Safety Precaution: Stay safe and make sure to hide under solid large objects",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/volcano.html#:~:text=Prepare%20in%20Advance&text=Assembling%20an%20emergency%20preparedness%20kit,are%20separated%20during%20an%20emergency."> RedCross Website</a>',
      },
    },

    {
      type: "Flood",
      geometry: {
        type: "Point",
        coordinates: [7.3986, 9.0765],
      },
      properties: {
        title: "Flood",
        dateoforigin: "Date of Origin: October 22st, 2022",
        location: "Location: Abuja, Nigeria",
        description:
          "Status: Almost 800,000 people displaced and 500 found dead",
        prevention: "Safety Precaution: Stay on higher attitude ground",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/flood.html"> RedCross Website</a>',
      },
    },

    {
      type: "Flood",
      geometry: {
        type: "Point",
        coordinates: [-81.8661, 28.0583],
      },
      properties: {
        title: "Flood",
        dateoforigin: "Date of Origin: October 2nd, 2022",
        location: "Location: Central Florida, Florida",
        description: "Status: 80 people found dead",
        prevention: "Safety Precaution: Stay on higher attitude ground",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/flood.html"> RedCross Website</a>',
      },
    },

    {
      type: "Eruption",
      geometry: {
        type: "Point",
        coordinates: [-22.365, 64.9155],
      },
      properties: {
        title: "Eruption",
        dateoforigin: "Date of Origin: September 29th, 2022",
        location: "Location: Reykjanes Peninsula, Iceland",
        description: "Status: Fagradalsfjall volcano is currently erupting",
        prevention:
          "Safety Precaution: Stay away from vicinity of eruption to ensure max saftey",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/volcano.html#:~:text=Prepare%20in%20Advance&text=Assembling%20an%20emergency%20preparedness%20kit,are%20separated%20during%20an%20emergency."> RedCross Website</a>',
      },
    },

    {
      type: "Landslide",
      geometry: {
        type: "Point",
        coordinates: [-67.2195, 10],
      },
      properties: {
        title: "Landslide",
        dateoforigin: "Date of Origin: October 9th, 2022",
        location: "Location: Las Tejerias, Venezuela",
        description:
          "Status: Recent landslide has left 22 people dead and 52 people missing",
        prevention:
          "Safety Precaution: Stay away from steep hills whether on top or below",
        guideline:
          'Additional Guidelines: <a href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/landslide.html"> RedCross Website</a>',
      },
    },
  ],
};

for (const feature of geojson.features) {
  const el = document.createElement("div");
  if (feature.properties.title == "Tornado") el.className = "marker2";
  else if (feature.properties.title == "Forest Fire") el.className = "marker3";
  else if (feature.properties.title == "Landslide") el.className = "marker4";
  else if (feature.properties.title == "Flood") el.className = "marker5";
  else if (feature.properties.title == "Earthquake") el.className = "marker6";
  else if (feature.properties.title == "Eruption") el.className = "marker7";
  else el.className = "marker";
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .addTo(map)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.dateoforigin}</p><p>${feature.properties.location}</p><p>${feature.properties.description}</p><p>${feature.properties.prevention}</p><p>${feature.properties.guideline}</p`
      )
    )
    .addTo(map);
}
