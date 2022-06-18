"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    timeout: 100000,
    globalTimeout: 600000,
    testDir: './tests',
    fullyParallel: true,
    /* Maximum time one test can run for. */
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 1 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 3 : undefined,
    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium',
                headless: true,
                ignoreHTTPSErrors: true,
                video: 'on',
                geolocation: { longitude: 22, latitude: 57.5 },
                permissions: ['geolocation'],
                screenshot: 'on',
                trace: 'on',
            },
        },
        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
                headless: true,
                ignoreHTTPSErrors: true,
                video: 'on',
                geolocation: { longitude: 22, latitude: 57.5 },
                permissions: ['geolocation'],
                screenshot: 'on',
                trace: 'on',
            }
        }
    ],
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],
        ['json', { outputFile: 'json_test_report.json' }],
        ['html', { outputFolder: 'playwright-report' }],
        ['dot']
    ],
    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: 'test-results/',
};
exports.default = config;
//# sourceMappingURL=playwright.config.js.map