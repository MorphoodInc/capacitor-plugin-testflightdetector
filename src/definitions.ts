export interface TestFlightDetectorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  isTestFlight(): Promise<{ isTestFlight: boolean }>;
}
