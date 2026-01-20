/**
 * Centralized test data for all test cases
 */
const testData = {
  // Test 1: Login and Logout
  loginLogoutTest: {
    credentials: {
      username: 'pavanol',
      password: 'test@123',
    },
    expectedWelcomeMessage: 'Welcome pavanol',
  },

  // Test 2: Navigation
  navigationTest: {
    // Uses URLs from config
  },

  // Test 3: Add to Cart and Place Order
  cartAndOrderTest: {
    credentials: {
      username: 'pavanol',
      password: 'test@123',
    },
    expectedWelcomeMessage: 'Welcome pavanol',
    category: 'Monitors',
    productName: 'Apple monitor 24',
    order: {
      name: 'Pavan Ol',
      country: 'India',
      city: 'Hyderabad',
      cardNumber: '1234567890',
      month: 'June',
      year: '2024',
    },
    expectedConfirmationMessage: 'Thank you for your purchase!',
  },

  // Test 4: Facebook Login and Logout
  facebookLoginLogoutTest: {
    credentials: {
      email: 'your-test-email@example.com',
      password: 'your-test-password',
    },
    note: 'Update with valid Facebook test credentials for actual testing',
  },

  // Additional test data sets for future tests
  users: [
    {
      id: 1,
      username: 'pavanol',
      password: 'test@123',
      name: 'Pavan Ol',
    },
    {
      id: 2,
      email: 'your-test-email@example.com',
      password: 'your-test-password',
      name: 'Test User',
      platform: 'facebook',
    },
  ],

  products: [
    {
      id: 1,
      category: 'Monitors',
      name: 'Apple monitor 24',
      price: 400,
    },
    {
      id: 2,
      category: 'Laptops',
      name: 'MacBook air',
      price: 900,
    },
    {
      id: 3,
      category: 'Phones',
      name: 'Samsung galaxy s6',
      price: 360,
    },
  ],
};

module.exports = testData;
