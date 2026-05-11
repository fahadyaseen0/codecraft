import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

export default function FloatingIcons({ position, icon, color }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </mesh>
      <Text
        position={[0, 0, 0.26]}
        fontSize={0.3}
        color="#ffffff"
      >
        {icon}
      </Text>
    </group>
  );
}
