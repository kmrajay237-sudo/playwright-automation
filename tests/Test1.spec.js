const {test, expect} = require('@playwright/test')
 
test('Verify that user is able to login and logout from the website demoblaze official website', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    const title1 = await page.title();
    console.log('Page title is : '+title1);
    await expect(page).toHaveTitle('STORE');
    await page.click('#login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('button:has-text("Log in")');
    await expect(page.locator('a:has-text("Welcome pavanol")')).toBeVisible();
    await page.click('#logout2');
    await expect(page.locator('#login2')).toBeVisible();
});