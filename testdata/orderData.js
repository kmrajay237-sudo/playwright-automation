/**
 * Test data for various order scenarios
 */
const orderTestData = {
  validOrder: {
    name: 'Pavan Ol',
    country: 'India',
    city: 'Hyderabad',
    cardNumber: '1234567890',
    month: 'June',
    year: '2024',
  },

  alternateOrder: {
    name: 'John Doe',
    country: 'United States',
    city: 'New York',
    cardNumber: '9876543210',
    month: 'December',
    year: '2025',
  },

  validationTestCases: [
    {
      name: 'Empty Name',
      data: {
        name: '',
        country: 'India',
        city: 'Hyderabad',
        cardNumber: '1234567890',
        month: 'June',
        year: '2024',
      },
      shouldFail: true,
    },
    {
      name: 'Invalid Card Number',
      data: {
        name: 'Pavan Ol',
        country: 'India',
        city: 'Hyderabad',
        cardNumber: 'abcd',
        month: 'June',
        year: '2024',
      },
      shouldFail: true,
    },
  ],
};

module.exports = orderTestData;
