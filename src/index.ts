import { registerPlugin } from '@capacitor/core';

import type { TestFlightDetectorPlugin } from './definitions';

const TestFlightDetector = registerPlugin<TestFlightDetectorPlugin>(
  'TestFlightDetector',
  {
    web: () => import('./web').then(m => new m.TestFlightDetectorWeb()),
  },
);

export * from './definitions';
export { TestFlightDetector };
