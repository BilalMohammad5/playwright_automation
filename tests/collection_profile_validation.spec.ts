import { test, expect, Page,Browser } from '@playwright/test';
import { helper } from "../helper/helper";
import { testdata } from "../utils/test_data";
import{LoginPage} from "../Pages/homeScreen";

let loginPage = new LoginPage();

test.describe('Home_Page', () => {
  
  test.beforeEach(async ({ page }) => {
   
    await page.goto('https://epos.erply.com/latest/');
  
  });
  test('Product_Search', async ({ page }) => {
    
    await page.fill('[name="username"]','testassignment');
    await page.locator('name="password"]').fill('PosTestAssignment123');
    await page.locator('[data-testid="login-clockin-button"]').click();
    await page.locator('[data-testid="pos-name"]').click();
    await page.locator('[placeholder="Products"]').click();
    await page.locator('[placeholder="Products"]').fill('fanta');
    await page.locator('[data-testid="search-result-name"]').click();
    await page.locator('[data-testid="product-name-cell"]').click();
    await page.locator('[data-testid="notes"]').click();
    await page.locator('[data-testid="notes"]').fill('test user search')
    await page.locator('[data-testid="product-order-form"] >> text=Save').click();
    await page.locator('[data-testid="header-user-menu"] >> text=Test User').click();
    await expect(page).toHaveURL('https://epos.erply.com/latest/#');
    await page.locator('a[role="button"]:has-text("Sign out")').click();
  
  });
  test.afterEach(async ({ page }) => {

  });
  test.afterAll(async ({ page }) => {
    
  });

});



