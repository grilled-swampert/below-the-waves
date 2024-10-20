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

  useEffect(() => {
    let scene, camera, renderer, earth, controls;

    // Set up the scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    earthRef.current.appendChild(renderer.domElement);

    // Create Earth
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const texture = new THREE.TextureLoader().load('frontendsrc/assets/images/earth.jpg');
    const material = new THREE.MeshPhongMaterial({ map: texture });
    earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 15;

    // Add OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      earthRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      controls.dispose();
    };
  }, []);

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
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Ocean Avenue, Seaside City, Marine State 12345</p>

            <h3>Locations</h3>
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
      </div>
    </div>
  );
};

export default ContactPage;
