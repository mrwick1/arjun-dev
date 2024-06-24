import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

interface StarsProps {
  [key: string]: any;
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as any}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;
