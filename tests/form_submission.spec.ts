import { test, expect, Page } from '@playwright/test';
import { helper } from "../helper/helper";
import { testdata } from "../utils/test_data"
declare const reporter: any;

// let first_name = 'bilal';
// let last_name ='mohammad';
// let email = 'bilalroshan5@gmail.com'
// let phone = '8008756992'

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
        await page.locator('[placeholder="First Name"]').fill(testdata.first_name);

        console.log("input value is " + page.inputValue('[placeholder="First Name"]'));

        await expect((await page.locator('[placeholder="First Name"]').inputValue())).toBeTruthy() //asserting that first name is not null

        // Fill [placeholder="Last Name"]
        await page.locator('[placeholder="Last Name"]').fill(testdata.last_name);

        await expect((await page.locator('[placeholder="Last Name"]').inputValue())).toBeTruthy() //asserting that last name is not null

        await page.locator('[placeholder="name\\@example\\.com"]').fill(testdata.email);

        await expect((await page.locator('[placeholder="name\\@example\\.com"]').inputValue())).toBeTruthy() //asserting that email id is not null
        // Click text=Male >> nth=1

        await page.locator('text=Male').nth(1).click();

        const checkbox = page.locator('text=Male').nth(1)

        await expect((await page.locator('text=Male').nth(1).inputValue())).toBeTruthy() //asserting that gender is clicked


        // Fill [placeholder="Mobile Number"]
        await page.locator('[placeholder="Mobile Number"]').fill(testdata.phone);

        await expect((await page.locator('[placeholder="Mobile Number"]').inputValue())).toBeTruthy() //asserting that email id is not null
        // Click input[type="file"]

        await page.locator('input[type="file"]').click();
        // Upload imgae.png
        await page.locator('input[type="file"]').setInputFiles(filepath);
        await console.log('image uploaded');

        // click submit button 
        await page.locator('text=Submit').press('Enter');
        await page.locator('text=Thanks for submitting the form').isVisible  //assertion for form submission

        await expect( page.locator(("text=" + testdata.student_name + ""))).toBeVisible();
        await expect( page.locator(("text=" + testdata.email + ""))).toBeVisible();
        await expect( page.locator(("text=" + testdata.phone + ""))).toBeVisible();
        await console.log('Form submitted');

    });
});



