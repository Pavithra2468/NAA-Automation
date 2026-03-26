// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './src/tests',
  workers: 1,
  //retries: 1,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,


  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 reporter: [
  ['html', { outputFolder: 'src/reporting/html-report' }],
  ['allure-playwright']
],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: false,
    permissions: ['geolocation']
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
      ...devices['Desktop Chrome']
    // ...devices['Galaxy S24'] 
    },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
  ],
});

