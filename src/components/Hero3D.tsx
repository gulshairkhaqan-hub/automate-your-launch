import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";
import { useIsMobile } from "@/hooks/use-mobile";

function Icosphere() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.4, 2]} />
      <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export function Hero3D() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Icosphere />
        </Suspense>
      </Canvas>
    </div>
  );
}