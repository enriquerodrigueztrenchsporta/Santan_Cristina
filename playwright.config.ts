import { defineConfig, devices } from '@playwright/test';

const PORT = 4400;

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 60_000,
  fullyParallel: true,
  workers: 2,
  // Un reintento: en equipos lentos la primera carga en frío puede superar el timeout.
  retries: 1,
  reporter: [['list']],
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['Pixel 7'] }, testMatch: /(navigation|booking|responsive)\.spec\.ts/ },
  ],
  webServer: {
    command: `node scripts/serve.mjs ${PORT}`,
    url: `http://127.0.0.1:${PORT}/`,
    reuseExistingServer: !process.env.CI,
  },
});
