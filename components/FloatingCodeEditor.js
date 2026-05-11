import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';

export default function FloatingCodeEditor({ position }) {
  const meshRef = useRef();
  const codeRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Code Editor Screen */}
      <RoundedBox args={[2, 1.5, 0.1]} radius={0.05}>
        <meshStandardMaterial color="#1e1e1e" metalness={0.5} roughness={0.2} />
      </RoundedBox>

      {/* Code Lines */}
      <Text
        position={[-0.7, 0.4, 0.06]}
        fontSize={0.08}
        color="#569cd6"
        anchorX="left"
      >
        {'const coder = {'}
      </Text>
      <Text
        position={[-0.6, 0.2, 0.06]}
        fontSize={0.08}
        color="#9cdcfe"
        anchorX="left"
      >
        {'  skills: [\'MERN\'],'}
      </Text>
      <Text
        position={[-0.6, 0, 0.06]}
        fontSize={0.08}
        color="#ce9178"
        anchorX="left"
      >
        {'  passion: \'coding\''}
      </Text>
      <Text
        position={[-0.7, -0.2, 0.06]}
        fontSize={0.08}
        color="#569cd6"
        anchorX="left"
      >
        {'};'}
      </Text>
    </group>
  );
}
