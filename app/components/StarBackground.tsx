"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <Stars
        radius={10}
        depth={40}
        count={4000}
        factor={4}
        fade
        speed={0.5} // slow = cinematic
        
      />

<ambientLight intensity={8.5} />
    </Canvas>
  );
}