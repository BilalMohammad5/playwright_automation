"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe('validating _book_added_to__collection', () => {
    test_1.test.beforeEach(async ({ page }) => {
        await page.goto('https://epos.erply.com/latest/');
    });
    (0, test_1.test)('added_books', async ({ page }) => {
        await page.locator('[data-testid="clientCode"]').fill('104572');
        await page.locator('[data-testid="username"]').fill('testassignment');
        await page.locator('[data-testid="password"]').fill('PosTestAssignment123');
        await page.locator('[data-testid="pos-item"]').click();
        await page.locator('[placeholder="Products"]').click();
        await page.locator('[placeholder="Products"]').fill('fanta');
        await page.locator('[data-testid="search-result-name"]').click();
        await page.locator('[data-testid="product-name-cell"]').click();
        await page.locator('[data-testid="notes"]').click();
        await page.locator('[data-testid="notes"]').fill('test user search');
        await page.locator('[data-testid="product-order-form"] >> text=Save').click();
        await page.locator('[data-testid="header-user-menu"] >> text=Test User').click();
        await (0, test_1.expect)(page).toHaveURL('https://epos.erply.com/latest/#');
        await page.locator('a[role="button"]:has-text("Sign out")').click();
    });
});
//# sourceMappingURL=collection_profile_validation.spec.js.map