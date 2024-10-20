import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./contactPage.css";
import { Header } from "../../components/Header";
import contactBg from "../../assets/gifs/fish-contact.gif";

const ContactPage = () => {
  // const modelRef = useRef(null);

  // useEffect(() => {
  //   let scene,
  //     camera,
  //     renderer,
  //     lines = [],
  //     controls;
  //   const numLines = 100;
  //   const numPoints = 100;
  //   const radius = 10;

  //   // Set up the scene
  //   scene = new THREE.Scene();
  //   camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   modelRef.current.appendChild(renderer.domElement);

  //   // Add lighting
  //   const ambientLight = new THREE.AmbientLight(0x404040);
  //   scene.add(ambientLight);
  //   const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  //   directionalLight.position.set(1, 1, 1);
  //   scene.add(directionalLight);

  //   // Create multiple lines to represent ocean waves on a sphere
  //   for (let i = 0; i < numLines; i++) {
  //     const points = [];
  //     for (let j = 0; j < numPoints; j++) {
  //       const phi = (Math.PI * 2 * j) / (numPoints - 1);
  //       const theta = (Math.PI * i) / (numLines - 1);
  //       points.push(
  //         new THREE.Vector3(
  //           radius * Math.sin(theta) * Math.cos(phi),
  //           radius * Math.sin(theta) * Math.sin(phi),
  //           radius * Math.cos(theta)
  //         )
  //       );
  //     }
  //     const geometry = new THREE.BufferGeometry().setFromPoints(points);
  //     const material = new THREE.LineBasicMaterial({
  //       color: 0x0088ff,
  //       linewidth: 1,
  //     });
  //     const line = new THREE.Line(geometry, material);
  //     lines.push(line);
  //     scene.add(line);
  //   }

  //   camera.position.set(0, 0, 30);
  //   camera.lookAt(scene.position);

  //   // Add OrbitControls
  //   controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.05;

  //   // Function to update wave positions
  //   const updateWaves = (time) => {
  //     lines.forEach((line, lineIndex) => {
  //       const positions = line.geometry.attributes.position.array;
  //       for (let i = 0; i < positions.length; i += 3) {
  //         const originalX = positions[i];
  //         const originalY = positions[i + 1];
  //         const originalZ = positions[i + 2];

  //         const distance = Math.sqrt(
  //           originalX ** 2 + originalY ** 2 + originalZ ** 2
  //         );
  //         const normalizedX = originalX / distance;
  //         const normalizedY = originalY / distance;
  //         const normalizedZ = originalZ / distance;

  //         const waveOffset =
  //           Math.sin(
  //             normalizedX * 5 + normalizedY * 3 + normalizedZ * 4 + time * 0.001
  //           ) *
  //           Math.cos(
  //             normalizedX * 2 + normalizedY * 5 + normalizedZ * 3 + time * 0.002
  //           ) *
  //           0.5 *
  //           (1 + Math.sin(lineIndex * 0.1 + time * 0.0005));

  //         positions[i] = (radius + waveOffset) * normalizedX;
  //         positions[i + 1] = (radius + waveOffset) * normalizedY;
  //         positions[i + 2] = (radius + waveOffset) * normalizedZ;
  //       }
  //       line.geometry.attributes.position.needsUpdate = true;
  //     });
  //   };

  //   // Scroll-based wave movement
  //   let scrollY = 0;
  //   const handleScroll = () => {
  //     scrollY = window.scrollY;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Handle window resize
  //   const handleResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Animation loop
  //   const animate = function (time) {
  //     requestAnimationFrame(animate);
  //     updateWaves(time + scrollY * 10);
  //     controls.update();
  //     renderer.render(scene, camera);
  //   };

  //   animate(0);

  //   // Clean up
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleResize);
  //     modelRef.current.removeChild(renderer.domElement);
  //     renderer.dispose();
  //     scene.remove(...lines);
  //     lines.forEach((line) => line.geometry.dispose());
  //     controls.dispose();
  //   };
  // }, []);

  
  return (
    <div className="screen-grid">
      <Header />
      <div className="content-wrapper">
        <img
          src={contactBg}
          alt="Contact Background"
          className="contact-background"
        />
        {/* <div ref={modelRef} className="threejs-container" /> */}
      </div>
    </div>
  );
};

export default ContactPage;
