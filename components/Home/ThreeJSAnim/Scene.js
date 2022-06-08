import React, { Suspense } from 'react';
import { SpaceDust } from './SpaceDust';

const colors = {
  malevolentIllusion: [
    '#c06995',
    '#de77c7',
    '#df86df',
    '#d998ee',
    '#ceadf4',
    '#c6bff9',
  ],
  sunnyRainbow: [
    '#fbe555',
    '#fb9224',
    '#f45905',
    '#be8abf',
    '#ffeed0',
    '#feff89',
  ],
};



export function Scene() {
  return (
    <Suspense fallback={null}>
      <>
        <pointLight distance={100} intensity={4} color="white" />
        <group>
          {/* <Planet /> */}
          <SpaceDust count={1500} />
        </group>
      </>
    </Suspense>
  );
}
