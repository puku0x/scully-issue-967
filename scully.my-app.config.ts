import { ScullyConfig } from '@scullyio/scully';
import { criticalCSS } from '@scullyio/scully-plugin-critical-css';

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-app",
  outDir: './dist/static',
  routes: {},
  defaultPostRenderers: [criticalCSS],
};
