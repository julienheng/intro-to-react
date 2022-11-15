import ReactMapGl, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css"; // marker
import { FaMapMarkerAlt } from "react-icons/fa"  //importing one icon
import "./Map.css"
import { useState } from "react";
import { useEffect } from "react"

const PARIS = {
  lat: 48.8566,
  lng: 2.3522,
}

const Map = ({ flats, selectedFlat }) => {

  const MAPBOX_TOKEN = "pk.eyJ1IjoianVsaWVuaGVuZzgiLCJhIjoiY2w2ZzF2YmdnMDRwNDNqbjVvNDZhY2VsMyJ9.qDuj7h9PPNH57iiU7R3_VQ";

  const [viewState, setViewState] = useState({
    latitude: PARIS.lat,
    longitude: PARIS.lng,
    zoom: 11,
  });

  useEffect(() => {
    setViewState((prev) => {
      return selectedFlat
      ? {
          ...prev,
          latitude: selectedFlat.lat,
          longitude: selectedFlat.lng,
          zoom: 15,
        }
      : { ...prev, latitude: PARIS.lat, longitude: PARIS.lng, zoom: 11 };
  });
  }, [selectedFlat]);


  return (
    <ReactMapGl
      {...viewState} // spread operator to spread out the viewStates items
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
      onDrag={(viewport) => setViewState(viewport.viewState)}
      onZoom={(viewport) => setViewState(viewport.viewState)}
    >

    <Marker latitude={48.8566} longitude={2.3522}>
	    <FaMapMarkerAlt color="tomato" size="1.5rem" />
	  </Marker>

    {/* Marker */}
    {flats.map((flat) => {
      return (
        <Marker key={flat.id} latitude={flat.lat} longitude={flat.lng}>
          <FaMapMarkerAlt color="tomato" size="1.5rem" />
        </Marker>
      );
    })}

    {/* Popup */}
    {selectedFlat && (
    <Popup latitude={selectedFlat.lat} longitude={selectedFlat.lng}>
      <div className="popup">
        <div className="price">${selectedFlat.price}</div>
        <div className="name">{selectedFlat.name}</div>
      </div>
    </Popup>
    )}

    </ReactMapGl>
  );
};

export default Map;
