import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Loader from './Loader';
import CameraAnimation from './CameraAnimation';
import Orbitem from '../models/Orbitem';

const START_CAMERA_POSITION = [0, 0, 0];
const TARGET_POSITION = new THREE.Vector3(20, 20, 25);
const MODEL_PATHS = [
  './assets/models/Ivory-I.glb',
  './assets/models/Ivory-II.glb',
  './assets/models/Ivory-III.glb',
  './assets/models/Ivory-IV.glb',
  './assets/models/Ivory-V.glb',
  './assets/models/Ivory-VI.glb',
  './assets/models/Ivory-VII.glb',
];
const MODEL_COLORS = [
  0x292928,
  0x212120,
  0x575653,
  0x706f6d,
  0x9e9c96,
  0xb8b7b4,
  0xf7f2e9,
];
const ROTATION_SPEEDS = [
  { x: 0.00025, y: 0.0005 },
  { x: 0.0005, y: -0.00025 },
  { x: -0.00025, y: 0.00075 },
  { x: 0.00075, y: -0.0005 },
  { x: -0.0005, y: 0.00025 },
  { x: 0.00025, y: -0.00075 },
  { x: -0.00075, y: -0.0005 },
];

MODEL_PATHS.forEach((filePath) => {
  useLoader.preload(GLTFLoader, filePath);
});

const UpdateCamera = ({ cameraPosition }) => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...cameraPosition);
    camera.lookAt(0, 0, 0);
  }, [camera, cameraPosition]);
  return null;
};

const LoadedModels = ({ setAnimateCamera }) => {
  const gltfs = useLoader(GLTFLoader, MODEL_PATHS);

  useEffect(() => {
    setAnimateCamera(true);
  }, [setAnimateCamera]);

  return MODEL_PATHS.map((filePath, index) => (
    <Orbitem
      key={filePath}
      object={gltfs[index].scene}
      color={MODEL_COLORS[index]}
      rotationSpeed={ROTATION_SPEEDS[index]}
    />
  ));
};

const Ivory = () => {
  const [animateCamera, setAnimateCamera] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(START_CAMERA_POSITION);
  const [cameraAnimationComplete, setCameraAnimationComplete] = useState(false);

  useEffect(() => {
    if (!cameraAnimationComplete) {
      return undefined;
    }

    const handleScroll = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollFraction = Math.min(window.scrollY / maxScroll, 1);

      setCameraPosition([
        THREE.MathUtils.lerp(TARGET_POSITION.x, START_CAMERA_POSITION[0], scrollFraction),
        THREE.MathUtils.lerp(TARGET_POSITION.y, START_CAMERA_POSITION[1], scrollFraction),
        THREE.MathUtils.lerp(TARGET_POSITION.z, START_CAMERA_POSITION[2], scrollFraction),
      ]);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cameraAnimationComplete]);

  return (
    <div className="fixed inset-0 z-0 bg-transparent">
      <Canvas
        shadows
        className="w-full h-screen opacity-100"
        camera={{ near: 0.1, far: 1000, position: [0, 0, 0] }}
      >
        <Suspense fallback={<Loader />}>
          {/* Lighting */}
          <ambientLight intensity={5.0} />
          <directionalLight position={[0, 0, 1000]} castShadow />
          {/* <pointLight position={[0, 0, 0]} intensity={2.5} /> */}

          {/* Camera animation: Only active while animateCamera is true */}
          {animateCamera && (
            <CameraAnimation
              trigger={animateCamera}
              setTrigger={setAnimateCamera}
              targetPosition={TARGET_POSITION}
              setCameraPosition={setCameraPosition}
              onComplete={() => setCameraAnimationComplete(true)}
            />
          )}

          {!animateCamera && <UpdateCamera cameraPosition={cameraPosition} />}

          <LoadedModels setAnimateCamera={setAnimateCamera} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Ivory;
