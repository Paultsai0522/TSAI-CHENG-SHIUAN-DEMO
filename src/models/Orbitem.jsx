import React, { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const applyColorToMaterial = (material, color) => {
    if (!material || !('color' in material)) {
        return material;
    }

    const clonedMaterial = material.clone();
    clonedMaterial.color.setHex(color);
    return clonedMaterial;
};

const Orbitem = ({ object, color, rotationSpeed }) => {
    const meshRef = useRef();
    const scene = useMemo(() => object.clone(true), [object]);

    useEffect(() => {
        scene.traverse((child) => {
            if (!child.isMesh) {
                return;
            }

            child.castShadow = true;
            child.receiveShadow = true;

            if (Array.isArray(child.material)) {
                child.material = child.material.map((material) => applyColorToMaterial(material, color));
                return;
            }

            child.material = applyColorToMaterial(child.material, color);
        });
    }, [scene, color]);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed.x;
            meshRef.current.rotation.y += rotationSpeed.y;
        }
    });

    return (
        <group ref={meshRef}>
            <primitive object={scene} />
        </group>
    );
};

export default Orbitem;
