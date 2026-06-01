"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function InternalWellnessWorld() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Çok yavaş, rüya gibi bir dönüş ve şekil değiştirme
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      meshRef.current.rotation.y += 0.0005;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      {/* Objenin boyutunu scale={3} ile iyice büyüttük */}
      <mesh ref={meshRef} position={[0, 0, 0]} scale={3}>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={5}
          roughness={0.05}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.08}
          color="#ffffff" // Tamamen parlak
          clearcoat={1}
          clearcoatRoughness={0}
          envMapIntensity={3} // Çevreden aldığı ışığı artırdık
        />
      </mesh>
    </Float>
  );
}

// Sahnenin interaktif partikülleri ve atmosferi
function Atmosphere() {
  return (
    <>
      {/* Buz mavisi ve lavanta partiküller */}
      <Sparkles count={100} scale={15} size={3} speed={0.2} opacity={0.5} color="#1c648e" />
      <Sparkles count={80} scale={15} size={2} speed={0.3} opacity={0.4} color="#e1e1f5" />
      <Sparkles count={50} scale={15} size={4} speed={0.1} opacity={0.6} color="#7cb9e8" />
      
      {/* Volumetrik Işık Etkisi - Hafif bir glow */}
      <mesh position={[0,0,-5]}>
         <sphereGeometry args={[10,16,16]} />
         <meshBasicMaterial color="#e1e1f5" opacity={0.1} transparent={true} />
      </mesh>
    </>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={2} />
        
        {/* Sinematik Işık Düzeni: Beyaz, buz mavisi ve lavanta */}
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#1c648e" />
        <directionalLight position={[0, -10, 5]} intensity={1.5} color="#e1e1f5" />
        
        <InternalWellnessWorld />
        <Atmosphere />
        
        {/* Aydınlık stüdyo ortamı ile yumuşak yansımalar */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
