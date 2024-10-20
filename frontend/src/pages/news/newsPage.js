import React, { useState, useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header } from "../../components/Header";

const newsData = [
  { title: "News 1", location: { lat: 37.7749, lng: -122.4194 }, city: "San Francisco" },
  { title: "News 2", location: { lat: 48.8566, lng: 2.3522 }, city: "Paris" },
  { title: "News 3", location: { lat: 35.6895, lng: 139.6917 }, city: "Tokyo" },
];

const NewsPage = () => {
  const [currentLocation, setCurrentLocation] = useState(newsData[0].location);
  const globeEl = useRef();

  // Disable zoom behavior on scroll
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault(); // Prevent scroll from zooming the globe
    };

    const globeCanvas = globeEl.current?.scene().canvas;
    if (globeCanvas) {
      globeCanvas.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (globeCanvas) {
        globeCanvas.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: currentLocation.lat, lng: currentLocation.lng, altitude: 2.5 },
        1000
      );
    }
  }, [currentLocation]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow flex flex-col">
        <div className="w-full h-[60vh] relative">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            backgroundColor="rgba(0,0,0,0)"
            atmosphereAltitude={0.25}
            enableZoom={false} // Disable zoom with the mouse
            pointsData={newsData}
            pointLat={d => d.location.lat}
            pointLng={d => d.location.lng}
            pointColor={() => "red"}
            pointAltitude={0.1}
            pointRadius={0.5}
            pointLabel={d => d.city}
            onPointClick={(point) => {
              setCurrentLocation(point.location);
            }}
            initialCameraPosition={{ altitude: 2.5 }}
          />
        </div>
        <div className="w-full p-4">
          <Carousel
            showArrows={true}
            onChange={(index) => setCurrentLocation(newsData[index].location)}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoFocus={true}
          >
            {newsData.map((news, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">{news.title}</h3>
                <p className="text-gray-600">{news.city}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
