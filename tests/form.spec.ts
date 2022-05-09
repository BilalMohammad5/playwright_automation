import { test, expect, Page } from '@playwright/test';
import { helper } from "../helper/helper";
import { Env } from "../utils/test_data"
declare const reporter: any;
import { Browser } from '@playwright/test';

const filepath = 'image.png'

test.describe('Form_filling_feature', () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('https://demoqa.com/automation-practice-form');
    });

    test('form_submit', async ({ page }) => {
        // Assertions use the expect API.
        // Click [placeholder="First Name"]
        await page.locator('[placeholder="First Name"]').click();
        // Fill [placeholder="First Name"]
        await page.locator('[placeholder="First Name"]').fill('bilal');
        // Press Tab
        await page.locator('[placeholder="First Name"]').press('Tab');
        // Fill [placeholder="Last Name"]
        await page.locator('[placeholder="Last Name"]').fill('mohammad');
        // Press Tab
        await page.locator('[placeholder="Last Name"]').press('Tab');
        // Fill [placeholder="name\@example\.com"]
        await page.locator('[placeholder="name\\@example\\.com"]').fill('bilalroshan5@gmail.com');
        // Press Tab
        await page.locator('[placeholder="name\\@example\\.com"]').press('Tab');
        // Click text=Male >> nth=1
        await page.locator('text=Male').nth(1).click();
        // Click [placeholder="Mobile Number"]
        await page.locator('[placeholder="Mobile Number"]').click();
        // Fill [placeholder="Mobile Number"]
        await page.locator('[placeholder="Mobile Number"]').fill('8008756992');
        // Click input[type="file"]
        await page.locator('input[type="file"]').click();
        // Upload imgae.png
        await page.locator('input[type="file"]').setInputFiles(filepath);
        await console.log('image uploaded');

        // click submit button 
        await page.locator('text=Submit').press('Enter');
        expect(page.locator(('text=Thanks for submitting the form'))).toHaveText('Thanks for submitting the form');
        await page.locator('text=Thanks for submitting the form').isVisible
        expect(page.locator(('text=bilal mohammad'))).toHaveText('bilal mohammad');
        expect(page.locator(('text=bilalroshan5@gmail.com'))).toHaveText('bilalroshan5@gmail.com');
        await console.log('Form submitted');

    });
});



