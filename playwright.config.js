import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  workers: isCI ? 1 : 1,
  fullyParallel: isCI,

  reporter: [['html', { open: 'never' }]],

  use: {
    browserName: 'chromium',
    headless: isCI,

    trace: isCI ? 'retain-on-failure' : 'off',
    screenshot: isCI ? 'only-on-failure' : 'off',
    video: isCI ? 'retain-on-failure' : 'off',
  },
});
