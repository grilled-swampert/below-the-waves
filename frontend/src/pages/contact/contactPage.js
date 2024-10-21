import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./contactPage.css";
import { Header } from "../../components/Header";
import contactBg from "../../assets/gifs/fish-contact.gif";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import leaflet icon fix (optional if marker icons don't appear)
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import Footer from "../../components/footer/Footer";

// Fix Leaflet's missing marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to change map center programmatically
const ChangeMapCenter = ({ center }) => {
  const map = useMap();
  map.setView(center, map.getZoom()); // Update the map center
  return null;
};

const ContactPage = () => {
  const earthRef = useRef(null);
  const [mapCenter, setMapCenter] = useState([38.9072, -77.0369]); // Default center (Washington, DC)

  // List of locations with coordinates and details
  const locations = [
    {
      name: "Washington, DC, USA",
      coordinates: [38.9072, -77.0369],
      address: "1025 Connecticut Ave., NW, Suite #200, Washington, DC 20036 USA",
    },
    {
      name: "Juneau, AK, USA",
      coordinates: [58.3019, -134.4197],
      address: "175 South Franklin Street, Juneau, Alaska 99801 USA",
    },
    {
      name: "Monterey, CA, USA",
      coordinates: [36.6002, -121.8947],
      address: "99 Pacific Street, Suite 155C, Monterey, CA 93940 USA",
    },
    // Add more locations as needed
  ];

  const handleLocationClick = (coordinates) => {
    setMapCenter(coordinates); // Update map center when a location is clicked
  };

  return (
    <div className="screen-grid">
      <Header />
      <div className="contact-wrapper">
        <img
          src={contactBg}
          alt="Contact Background"
          className="contact-background"
        />
        <div className="contact-content">
          <div className="contact-details">
            <h2>Contact Us</h2>
            <p>Email: belowthewaves@gmail.com</p>
            <p>Phone: +1 (123) 456-7890</p>

            <h2>Locations</h2>
            <ul>
              {locations.map((location, index) => (
                <li
                  key={index}
                  onClick={() => handleLocationClick(location.coordinates)}
                  style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                >
                  <strong>{location.name}</strong> - {location.address}
                </li>
              ))}
            </ul>
          </div>
          <div className="map-container">
            <MapContainer center={mapCenter} zoom={5} style={{ height: "300px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <ChangeMapCenter center={mapCenter} /> {/* Change map center on click */}
              {locations.map((location, index) => (
                <Marker key={index} position={location.coordinates}>
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div ref={earthRef} className="earth-container"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
