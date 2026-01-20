const {test, expect} = require('@playwright/test')
test('Verify that user is able to add product in the cart and place order in demoblaze', async ({page})=>{
    await page.goto('https://www.demoblaze.com/');
    const title = await page.title();
    console.log('Page title is : '+title);
    await expect(page).toHaveTitle('STORE');
    await page.click('#login2');
    await page.fill('#loginusername','pavanol');
    await page.fill('#loginpassword','test@123');
    await page.click('button:has-text("Log in")');
    await expect(page.locator('a:has-text("Welcome pavanol")')).toBeVisible();

    await page.click('a:has-text("Monitors")');
    await page.click('a:has-text("Apple monitor 24")');
    await page.click('a:has-text("Add to cart")');
    await page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#cartur');
    await expect(page.locator('td:has-text("Apple monitor 24")')).toBeVisible();
    await page.click("button:has-text('Place Order')");
    await page.fill('#name','Pavan Ol');
    await page.fill('#country','India');
    await page.fill('#city','Hyderabad');
    await page.fill('#card','1234567890');
    await page.fill('#month','June');
    await page.fill('#year','2024');
    await page.click("button:has-text('Purchase')");
    const confirmation = await page.locator('.sweet-alert > h2').textContent();
    console.log('Confirmation message: '+confirmation);
    await expect(page.locator('.sweet-alert > h2')).toHaveText('Thank you for your purchase!');
});