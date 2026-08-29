import { useFrame, useThree } from '@react-three/fiber';

const CameraAnimation = ({ trigger, setTrigger, targetPosition, setCameraPosition, onComplete }) => {
    const { camera } = useThree();

    useFrame(() => {
        if (trigger) {
            camera.position.lerp(targetPosition, 0.05);
            camera.lookAt(0, 0, 0);

            if (camera.position.distanceTo(targetPosition) < 0.1) {
                setCameraPosition([targetPosition.x, targetPosition.y, targetPosition.z]);
                setTrigger(false);
                onComplete();
            }
        }
    });

    return null;
};

export default CameraAnimation;
