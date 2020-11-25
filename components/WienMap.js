import React from "react";
import { MapContainer, Marker, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";
import { MapText } from "../styles/WienMap";
import Fade from "react-reveal/Fade";

import markerIcon from "../assets/marker.svg";

const icon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon,
  iconSize: [55, 95],
});

function Map() {
  return (
    <div className="container">
      <Fade>
        <MapContainer
          center={[48.167263, 16.308303]}
          zoom={18}
          attributionControl={true}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVuYWRtYXJpbmtvdmljIiwiYSI6ImNrODVuYzI4ajAyNGIzbGtzbDhpOXB1MG0ifQ.5jlOark-VubVaRu-2wLLMA" />

          <Marker position={[48.167263, 16.308303]} icon={icon}>
            <Tooltip permanent>
              <MapText>
                Fahrradwerkstatt Flickschuh Hetzendorfer Straße 81, 1120 Wien
              </MapText>
            </Tooltip>
          </Marker>
        </MapContainer>
      </Fade>
    </div>
  );
}

export default Map;
