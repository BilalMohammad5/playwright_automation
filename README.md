KN_Playwright\kuehne_nagel_playwright is the root folder for this project . 
In the root folder either using command prompt or any IDE preferably (VS CODE) run below command .

By default the test will run in parallel and headless mode. 
npm i  - to install all the latest npm dependencies 
npx playwright test --project=chromium --reporter=html   -  to executes test in chrome with html report
npx playwright test --project=firefox--reporter=html - to executes test in fireforx  with html report
npx playwright test  --reporter=html                                  - to execute test in both the browser with html report
 npx playwright show-report                                              - this will open latest available report in chrome browser
