const {test, expect} = require('@playwright/test');
const { FacebookPage } = require('../pages/FacebookPage');
const testData = require('../testdata/testdata');

test.skip('Verify that user is able to login and logout from Facebook', async ({page})=>{
    const facebookPage = new FacebookPage(page);
    const { email, password } = testData.facebookLoginLogoutTest.credentials;
    
    // Navigate to Facebook
    await facebookPage.navigateToFacebook();
    
    // Login to Facebook
    console.log('Attempting to login to Facebook...');
    await facebookPage.loginWithEmailPassword(email, password);
    
    // Verify user is logged in
    const isLoggedIn = await facebookPage.isLoggedIn();
    console.log('Login successful:', isLoggedIn);
    expect(isLoggedIn).toBeTruthy();
    
    // Logout from Facebook
    console.log('Attempting to logout from Facebook...');
    await facebookPage.logout();
    
    // Verify user is logged out
    const isLoggedOut = await facebookPage.isLoggedOut();
    console.log('Logout successful:', isLoggedOut);
    expect(isLoggedOut).toBeTruthy();
    
    console.log('Test completed successfully!');
});