'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

function Box({ position, color }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function CodeScene3D() {
  return (
    <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <OrbitControls enableZoom={false} />

          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

          <Box position={[-2, 0, 0]} color="#00db7d" />
          <Box position={[2, 0, 0]} color="#61dafb" />
          <Box position={[0, 2, 0]} color="#cc0000" />
          <Box position={[0, -2, 0]} color="#8cc84b" />
        </Suspense>
      </Canvas>
    </div>
  );
}
