// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 100000,
  globalTimeout: 600000,
  testDir: './tests',
  fullyParallel: true, //by default all test will run in parallel
  /* Maximum time one test can run for. */

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,  
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined, //assigning number of workers for parallel execution
  projects: [
    {
      name: 'chromium',
      use: {
        
         browserName: 'chromium',
        headless: true,
        //viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on',
       // baseURL : ' https://demoqa.com/automation-practice-form',
        geolocation: { longitude:22, latitude: 57.5 },
        permissions: ['geolocation'],
        screenshot: 'on',
        trace:'on',
        },
    },
    {
      name: 'firefox',
      use: {
        
        browserName: 'firefox',
        headless: true,
        ignoreHTTPSErrors: true,
        video: 'on',
        geolocation: { longitude:22, latitude: 57.5 },
        permissions: ['geolocation'],
        screenshot: 'on',
        trace:'on',
    }
  }

  ],
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['json', {  outputFile: 'json_test_report.json' }],
    ['html',{ outputFolder: 'html_test_report' }],
    ['dot']
  ],
  

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results/',
};
export default config;