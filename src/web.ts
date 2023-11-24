import { WebPlugin } from '@capacitor/core';

import type { TestFlightDetectorPlugin } from './definitions';

export class TestFlightDetectorWeb
  extends WebPlugin
  implements TestFlightDetectorPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async isTestFlight(): Promise<{ isTestFlight: boolean }> {
    console.log('isTestFlight');
    let isTestFlight = false;
    return { isTestFlight: isTestFlight };
  }
}
