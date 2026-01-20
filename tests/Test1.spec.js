const {test, expect} = require('@playwright/test')
 
test('Get Google page Title', async ({page})=>{
    await page.goto('https://www.google.com/');
    const title = await page.title();
    console.log('Page title is : '+title);
    await expect(page).toHaveTitle('Google');
});