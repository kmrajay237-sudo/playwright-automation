const {test, expect} = require('@playwright/test');
const { DemoBlazePage } = require('../pages/DemoBlazePage');
const config = require('../config/config');
const testData = require('../testdata/testdata');

test.skip('Verify that user is able to add product in the cart and place order in demoblaze', async ({page})=>{
    const demoBlazePage = new DemoBlazePage(page);
    const testCase = testData.cartAndOrderTest;
    const { username, password } = testCase.credentials;
    const { category, productName, order, expectedConfirmationMessage } = testCase;
    
    await demoBlazePage.navigateToDemoBlazeStore();
    const title = await demoBlazePage.getTitle();
    console.log('Page title is : '+title);
    await expect(page).toHaveTitle(config.titles.demoBlaze);
    
    await demoBlazePage.login(username, password);
    await expect(page.locator(`a:has-text("${testCase.expectedWelcomeMessage}")`)).toBeVisible();

    await demoBlazePage.navigateToCategory(category);
    await demoBlazePage.selectProduct(productName);
    await demoBlazePage.addProductToCart();
    
    await demoBlazePage.goToCart();
    await expect(page.locator(`td:has-text("${productName}")`)).toBeVisible();
    
    await demoBlazePage.clickPlaceOrder();
    await demoBlazePage.fillOrderDetails(order.name, order.country, order.city, order.cardNumber, order.month, order.year);
    await demoBlazePage.completePurchase();
    
    const confirmation = await demoBlazePage.getConfirmationMessage();
    console.log('Confirmation message: '+confirmation);
    await expect(page.locator('.sweet-alert > h2')).toHaveText(expectedConfirmationMessage);
});