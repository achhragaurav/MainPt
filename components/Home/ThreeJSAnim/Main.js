import * as THREE from 'three';
import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { MeshLine, MeshLineMaterial } from './MeshLine';
import { Scene } from './Scene';
import styles from './styles.module.css';

extend({ MeshLine, MeshLineMaterial });

export function Main() {
  return (
    <div style={{ width: '100vw', height: '100vh' }} className={styles["main"]}>
      <Canvas
        pixelRatio={0.1}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl, size, camera }) => {
          if (size.width < 600) {
            camera.position.z = 45;
          }
          gl.setClearColor(new THREE.Color('#020207'));
        }}>
        <Scene />
      </Canvas>
    </div>
  );
}
