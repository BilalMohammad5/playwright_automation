"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const flat_file_data_1 = require("../utils/flat_file_data");
const test_data = require("../utils/test_data.json");
test_1.test.describe('Home_Page', () => {
    const fs = require('fs');
    console.log("DB values is " + test_data.clientCode);
    test_1.test.beforeEach(async ({ page }) => {
        //console.log("Launching the Base Url" + env_variables.url)
        await page.goto(flat_file_data_1.env_variables.url);
    });
    (0, test_1.test)('Product_Search', async ({ page }) => {
        await page.goto(flat_file_data_1.env_variables.url);
        await page.fill('[name="clientCode"]', test_data.clientCode);
        await page.fill('[name="username"]', test_data.userName);
        await page.fill('[name="password"]', test_data.password);
        await page.click('[data-testid="login-clockin-button"]');
        await page.click('[data-testid="pos-name"]');
        await page.click('[placeholder="Products"]');
        await page.fill('[placeholder="Products"]', 'fanta');
        await page.click('[data-testid="search-result-name"]');
        await page.click('[data-testid="product-name-cell"]');
        await page.fill('[data-testid="notes"]', 'test user search');
        await page.locator('[data-testid="product-order-form"] >> text=Save').click();
        await page.locator('[data-testid="header-user-menu"] >> text=Test User').click();
        await (0, test_1.expect)(page).toHaveURL('https://epos.erply.com/latest/#');
        await page.locator('a[role="button"]:has-text("Sign out")').click();
    });
    test_1.test.afterEach(async ({ page }) => {
    });
    test_1.test.afterAll(async ({ page }) => {
    });
});
//# sourceMappingURL=productSearch.spec.js.map