import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <div className="container">
      <MapContainer
        center={[48.167263, 16.308303]}
        zoom={19}
        attributionControl={true}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmVuYWRtYXJpbmtvdmljIiwiYSI6ImNrODVuYzI4ajAyNGIzbGtzbDhpOXB1MG0ifQ.5jlOark-VubVaRu-2wLLMA" />

        <Marker position={[51.505, -0.09]}>
          <Popup>
          Fahrradwerkstatt Flickschuh, Hetzendorfer Straße 81, 1120 Wien
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
