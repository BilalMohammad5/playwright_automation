import { test, expect, Page } from '@playwright/test';
import { helper } from "../helper/helper";
import { testdata } from "../utils/test_data"
declare const reporter: any;
import { Browser } from '@playwright/test';


test.describe('validating _book_added_to__collection', () => {
  
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://demoqa.com/books');
  });

  test('added_books', async ({ page }) => {
  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://demoqa.com/login');
  // Click [placeholder="UserName"]
  await page.locator('[placeholder="UserName"]').click();
  // Fill [placeholder="UserName"]
  await page.locator('[placeholder="UserName"]').fill('Bilal@2595');
  // Press Tab
  await page.locator('[placeholder="UserName"]').press('Tab');
  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('Bilal@2595');
  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://demoqa.com/books' }*/),
    page.locator('button:has-text("Login")').click()
  ]);
  // Click li:has-text("Profile")
  await page.locator('li:has-text("Profile")').click();
  await expect(page).toHaveURL('https://demoqa.com/profile');
  // Click text=Git Pocket Guide
  await page.locator('text=Git Pocket Guide').click();
  await expect(page).toHaveURL('https://demoqa.com/profile?book=9781449325862'); //validating the presence of added book
  // Click text=Back To Book Store
  await page.locator('text=Back To Book Store').click();
  await expect(page).toHaveURL('https://demoqa.com/profile');
  // Click text=Log out
  await page.locator('text=Log out').click();
  await expect(page).toHaveURL('https://demoqa.com/login');
  });
});



