import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.vercel.ecosquad.greenware',
  appName: 'Greenware',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
