import { test, expect, Page } from '@playwright/test';
import { helper } from "../helper/helper";
import { Env } from "../utils/test_data"
declare const reporter: any;
import { Browser } from '@playwright/test';

const filepath = '../image.png'

test.describe('Form_filling_feature', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://demoqa.com/automation-practice-form');
  });

  test('form_submit', async ({ page }) => {
    // Assertions use the expect API.

    //navigation
    expect(page.url()).toBe(Env.url)
    console.log("tools qa  launched");

    //enter first name
    const fname = await page.locator('[placeholder="First Name"]')
    try {
      expect(page.url()).toBe(Env.url)
        ;
      await page.fill('[placeholder="First Name"]', 'bilal');

      expect(fname.getAttribute('input')).not.toBeNull

      await console.log("first_name_entered");
    } catch (error) {
      await page.goBack()  //going back deu to ADS in the web page
      expect(page.url()).toBe(Env.url);

      await page.fill('[placeholder="First Name"]', 'bilal');

      expect(fname.getAttribute('input')).not.toBeNull

      await console.log("first_name_entered");

    }
    //enter last name
    const lname = await page.locator('[placeholder="Last Name"]');
    try {
      expect(page.url()).toBe(Env.url)
        ;
      await page.fill('[placeholder="Last Name"]', 'mohammad');

      expect(lname.getAttribute('input')).not.toBeNull

      await console.log("last_name_entered");

    } catch (error) {
      await page.goBack()  //going back deu to ADS in the web page
      expect(page.url()).toBe(Env.url);

      await page.fill('[placeholder="Last Name"]', 'mohammad');

      expect(lname.getAttribute('input')).not.toBeNull

      await console.log("last_name_entered");

    }

    //enter email id
    try {
      expect(page.url()).toBe(Env.url);
      await page.press('[placeholder="Last Name"]', 'Tab');
      // Fill [placeholder="name@example.com"]
      await page.fill('[placeholder="name@example.com"]', 'bilalroshan5@gmail.com');
      console.log("entered_email");
    } catch (error) {
      await page.goBack()  //going back deu to ADS in the web page
      expect(page.url()).toBe(Env.url);

      await page.press('[placeholder="Last Name"]', 'Tab');
      // Fill [placeholder="name@example.com"]
      await page.fill('[placeholder="name@example.com"]', 'bilalroshan5@gmail.com');
      console.log("entered_email");

    }
    //enter gender
    try {
      expect(page.url()).toBe(Env.url);
      // Fill input[name="gender"]
      await page.click('label:has-text("Male")');
      await console.log("selected_gender");
    } catch (error) {
      await page.goBack()  //going back deu to ADS in the web page
      expect(page.url()).toBe(Env.url);

      // Fill input[name="gender"]
      await page.click('label:has-text("Male")');
      await console.log("selected_gender");

    }
    //enter phone number
    try {
      expect(page.url()).toBe(Env.url);
      // Click [placeholder="Mobile Number"]
      await page.click('[placeholder="Mobile Number"]');
      // Fill [placeholder="Mobile Number"]
      await page.fill('[placeholder="Mobile Number"]', '8008756992');
      await console.log("phone_number_entered");
    } catch (error) {
      await page.goBack()  //going back deu to ADS in the web page
      expect(page.url()).toBe(Env.url);
      // Click [placeholder="Mobile Number"]
      await page.click('[placeholder="Mobile Number"]');
      // Fill [placeholder="Mobile Number"]
      await page.fill('[placeholder="Mobile Number"]', '8008756992');
      await console.log("phone_number_entered");

    }

    try {
      expect(page.url()).toBe(Env.url);

      const [fileChooser] = await Promise.all([

        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('filechooser'),
        // Opens the file chooser.
        await page.locator('input[type="file"]').click(),
        // Upload image
       await console.log('upload click')
      ]);
      await fileChooser.setFiles(filepath);
      await console.log('file uploaded')
    } catch (error) {
      console.log('inside catch')
      await page.goBack()
      expect(page.url()).toBe(Env.url);
      const [fileChooser] = await Promise.all([

        // It is important to call waitForEvent before click to set up waiting.
        page.waitForEvent('filechooser'),
        // Opens the file chooser.
      await page.locator("input[type=\"file\"]").click(),
        // Upload image
       await  console.log('upload click')
      ]);
      await fileChooser.setFiles(filepath);
      await console.log('file uploaded')
    }

    //form submission
    // Click text=Submit
    await page.click('text=Submit');
    await console.log("submit_clicked");
    await page.waitForSelector(('text=Thanks for submitting the form'));

  });
});



