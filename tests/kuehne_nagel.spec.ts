import { test, expect, Page } from '@playwright/test';
import { helper } from "../helper/helper";
import { testdata } from "../utils/test_data"
declare const reporter: any;
import { Browser } from '@playwright/test';

test.describe('Get_Sea_Freight_Quote @fast', () => {
  
    test.beforeEach(async ({ page }) => {
      // Go to https://home.kuehne-nagel.com/
  await page.goto('https://home.kuehne-nagel.com/');
    });

    test('', async ({ page }) => {
  // Click text=Accept All
  await page.locator('text=Accept All').click();
  // Click nav[role="navigation"] >> text=myKN
  await page.locator('nav[role="navigation"] >> text=myKN').click();
  await expect(page).toHaveURL('https://mykn.kuehne-nagel.com/ac/login');
  // Fill input[type="email"]
  await page.locator('input[type="email"]').fill('bilalroshan5@gmail.com');
  // Press Tab
  await page.locator('input[type="email"]').press('Tab');
  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('Bilal@2595');
  // Click text=Log in
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://mykn.kuehne-nagel.com/cc/' }*/),
    page.locator('text=Log in').click()
  ]);
  // Click a:has-text("Get new quote")
  await page.locator('a:has-text("Get new quote")').click();
  // Click text=Sea Freight Quote
  await page.locator('text=Sea Freight Quote').click();
  // Click #origin-location-country-select input[type="text"]
  await page.locator('#origin-location-country-select input[type="text"]').click();
  // Fill text=CountryALBANIA (AL) ANGOLA (AO) ARGENTINA (AR) ARUBA (AW) AUSTRALIA (AU) AUSTRIA >> input[type="text"]
  await page.locator('text=CountryALBANIA (AL) ANGOLA (AO) ARGENTINA (AR) ARUBA (AW) AUSTRALIA (AU) AUSTRIA >> input[type="text"]').fill('india');
  // Click div[role="option"]:has-text("INDIA (IN)")
  await page.locator('div[role="option"]:has-text("INDIA (IN)")').click();
  // Click #destination-location-country-select div >> nth=1
  await page.locator('#destination-location-country-select div').nth(1).click();
  // Fill text=CountryALBANIA (AL) ANGOLA (AO) ARGENTINA (AR) ARUBA (AW) AUSTRALIA (AU) AUSTRIA >> input[type="text"]
  await page.locator('text=CountryALBANIA (AL) ANGOLA (AO) ARGENTINA (AR) ARUBA (AW) AUSTRALIA (AU) AUSTRIA >> input[type="text"]').fill('estonia');
  // Click text=ESTONIA (EE)
  await page.locator('text=ESTONIA (EE)').click();
  // Click #origin-location-city-select input[type="text"]
  await page.locator('#origin-location-city-select input[type="text"]').click();
  // Fill text=Postal code/City Please enter 4 or more characters >> input[type="text"]
  await page.locator('text=Postal code/City Please enter 4 or more characters >> input[type="text"]').fill('delhi');
  // Click div[role="option"]:has-text("110001 New Delhi")
  await page.locator('div[role="option"]:has-text("110001 New Delhi")').click();
  // Click #destination-location-city-select input[type="text"]
  await page.locator('#destination-location-city-select input[type="text"]').click();
  // Fill text=Postal code/City Please enter 4 or more characters >> input[type="text"]
  await page.locator('text=Postal code/City Please enter 4 or more characters >> input[type="text"]').fill('talli');
  // Click text=10001 Tallinn
  await page.locator('text=10001 Tallinn').click();
  // Click text=Quantity Please enter the number of containers >> input[type="text"]
  await page.locator('text=Quantity Please enter the number of containers >> input[type="text"]').click();
  // Fill text=Quantity Please enter the number of containers >> input[type="text"]
  await page.locator('text=Quantity Please enter the number of containers >> input[type="text"]').fill('1');
  // Click text=QuantityContainer typeWeight restrictions: 16 t per 20' container, 19.9 t per 40 >> div[role="combobox"] input[type="text"]
  await page.locator('text=QuantityContainer typeWeight restrictions: 16 t per 20\' container, 19.9 t per 40 >> div[role="combobox"] input[type="text"]').click();
  // Click text=40ft high cube container (40' HC)
  await page.locator('text=40ft high cube container (40\' HC)').click();
  // Click text=Please wait ...Get a quote
  await page.locator('text=Please wait ...Get a quote').click();
  // Click [data-testid="user-action-menu-button"]
  await page.locator('[data-testid="user-action-menu-button"]').click();
  // Click [data-testid="logout-button"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://mykn.kuehne-nagel.com/ac/login' }*/),
    page.locator('[data-testid="logout-button"]').click()
  ]);



        
    });

});