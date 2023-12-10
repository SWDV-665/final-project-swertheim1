import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mathapp.app',
  appName: 'mathapp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
