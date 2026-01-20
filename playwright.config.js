// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect:{
    timeout: 40 * 1000,
  },
  reporter: 'html',
  use :{
    browserName: 'chromium',
    headless: false,
    viewport: null,
    launchOptions:{
      args: ['--start-maximized']
    }
  }
});
 
module.exports = config