const {test, expect} = require('@playwright/test');
const { DemoBlazePage } = require('../pages/DemoBlazePage');
const config = require('../config/config');
const testData = require('../testdata/testdata');

test('Verify that user is able to login and logout from the website demoblaze official website', async ({page})=>{
    const demoBlazePage = new DemoBlazePage(page);
    const { username, password } = testData.loginLogoutTest.credentials;
    
    await demoBlazePage.navigateToDemoBlazeStore();
    const title1 = await demoBlazePage.getTitle();
    console.log('Page title is : '+title1);
    await expect(page).toHaveTitle(config.titles.demoBlaze);
    
    await demoBlazePage.login(username, password);
    const isLoggedIn = await demoBlazePage.verifyLoginSuccess();
    await expect(page.locator(`a:has-text("${testData.loginLogoutTest.expectedWelcomeMessage}")`)).toBeVisible();
    
    await demoBlazePage.logout();
    const isLoggedOut = await demoBlazePage.verifyLogoutSuccess();
    await expect(page.locator('#login2')).toBeVisible();
});