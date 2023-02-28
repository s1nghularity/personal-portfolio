import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import {animated} from '@react-spring/types';

function Avatar() {
  const faceRef = useRef();

  useFrame(({ mouse, camera }) => {
    // Get the position of the face relative to the camera
    const facePos = faceRef.current.position.clone();
    facePos.project(camera);

    // Map the mouse coordinates to the camera view
    const x = (mouse.x * camera.aspect) / 2;
    const y = (mouse.y * -1) / 2;

    // Set the face position to follow the mouse
    faceRef.current.position.set(x, y, facePos.z);
  });

  return (
    <group position={[0, -2, 0]}>
      {/* Torso */}
      <mesh>
        <boxBufferGeometry args={[3, 5, 2]} />
        <meshStandardMaterial color='orange' />
      </mesh>

      {/* Head */}
      <mesh position={[0, 3, 0]}>
        <icosahedronBufferGeometry args={[2, 0]} />
        <meshStandardMaterial color='lightblue' />
      </mesh>

      {/* Smiling face */}
      <mesh position={[0, 3.2, 1.5]} ref={faceRef}>
        <sphereBufferGeometry
          args={[0.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 4]}
        />
        <meshStandardMaterial color='yellow' />
      </mesh>

      {/* Beard */}
      <mesh position={[0, 1.5, 0.9]}>
        <cylinderBufferGeometry args={[0.3, 0.3, 0.7, 16]} />
        <meshStandardMaterial color='white' />
      </mesh>

      {/* Black hair */}
      <mesh position={[0, 3.5, 0]}>
        <dodecahedronBufferGeometry args={[1, 0]} />
        <meshStandardMaterial color='black' />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <group>
      <OrbitControls />

      {/* Add ground */}
      <mesh>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color='green' />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>

      {/* Add avatar */}
      <Avatar />

      {/* Add trees */}
      <mesh>
        <coneBufferGeometry args={[5, 10, 6]} />
        <meshStandardMaterial color='brown' />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>

      {/* Add green cones to trees */}
      <mesh position={[0, 8, 0]}>
        <coneBufferGeometry args={[5, 10, 6]} />
        <meshStandardMaterial color='green' roughness={0.8} />
      </mesh>

      {/* Add mountains */}
      <mesh>
        <sphereBufferGeometry args={[30, 32, 32]} />
        <meshStandardMaterial color='grey' />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>

      {/* Add light */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
}

function avatarApp() {
  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 60 }}>
      <Scene />
    </Canvas>
  );
}

export default avatarApp;
