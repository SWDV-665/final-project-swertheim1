import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.math-app',
  appName: 'math-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
