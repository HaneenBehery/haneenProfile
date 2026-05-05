"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CameraMove() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      z: 2, // zoom in (كان 8)
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [camera]);

  return null;
}

export default function StarBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <CameraMove />
      <Stars radius={50} depth={40} count={4000} factor={4} fade speed={2} />
    </Canvas>
  );
}