// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  // ✅ IMPORTANT SETTINGS
  workers: 1,              // Run tests one-by-one
  fullyParallel: false,    // Disable parallel execution

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    viewport: null,
    // ❌ Disable test-results folder
  outputDir: 'test-results-disabled',
    // ❌ Disable all artifacts
    trace: 'off',
    screenshot: 'off',
    video: 'off',
    launchOptions: {
      args: ['--start-maximized'],
    },
  },
});
