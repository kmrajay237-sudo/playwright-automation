# Project Structure Guide

## 📁 Directory Overview

```
play2/
├── 📂 features/                    # BDD Feature files (Gherkin)
│   ├── demoblaze_login.feature
│   ├── demoblaze_shopping.feature
│   ├── playwright_navigation.feature
│   └── facebook_login.feature
│
├── 📂 stepDefs/                    # Cucumber step definitions
│   ├── demoblaze_steps.js
│   ├── playwright_navigation_steps.js
│   └── facebook_steps.js
│
├── 📂 hooks/                       # Cucumber hooks for setup/teardown
│   └── hooks.js                    # Browser initialization & cleanup
│
├── 📂 pages/                       # Page Object Model classes
│   ├── BasePage.js                 # Base class with common methods
│   ├── DemoBlazePage.js            # DemoBlazeStore page object
│   ├── PlaywrightDocsPage.js       # Playwright docs page object
│   └── FacebookPage.js             # Facebook page object
│
├── 📂 config/                      # Configuration files
│   └── config.js                   # URLs, credentials, timeouts
│
├── 📂 testdata/                    # Test data files
│   ├── testdata.js                 # Main test data
│   └── orderData.js                # Order-specific test data
│
├── 📂 tests/                       # Playwright test files (not BDD)
│   ├── Test1.spec.js               # DemoBlazeStore login/logout
│   ├── Test2.spec.js               # Playwright navigation
│   ├── Test3.spec.js               # DemoBlazeStore shopping
│   └── Test4.spec.js               # Facebook login/logout
│
├── 📂 utils/                       # Utility functions
│   └── logger.js                   # Centralized logging utility
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── playwright-bdd-tests.yml # GitHub Actions CI/CD pipeline
│
├── cucumber.js                     # Cucumber configuration
├── playwright.config.js            # Playwright configuration
├── package.json                    # Dependencies and scripts
├── .npmrc                          # NPM configuration
├── .gitignore                      # Git ignore rules
└── README.md                       # Documentation
```

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Run Tests

**Playwright Tests:**
```bash
npm run test              # Headless mode
npm run test:headed      # Headed mode (see browser)
```

**BDD Tests:**
```bash
npm run bdd              # Run all features
npx cucumber-js features/demoblaze_login.feature  # Run specific feature
```

**Test Logger:**
```bash
npm run test:logger      # Verify logger is working
```

## 📋 Key Files

### Configuration
- **playwright.config.js** - Playwright configuration (auto-detects CI environment)
- **cucumber.js** - Cucumber configuration (loads hooks and step defs)
- **config/config.js** - URLs, credentials, page titles, timeouts

### Page Objects
- **pages/BasePage.js** - Base class with common browser operations
- **pages/DemoBlazePage.js** - DemoBlazeStore operations
- **pages/PlaywrightDocsPage.js** - Playwright docs navigation
- **pages/FacebookPage.js** - Facebook authentication

### Step Definitions
- **stepDefs/demoblaze_steps.js** - DemoBlazeStore steps
- **stepDefs/playwright_navigation_steps.js** - Navigation steps
- **stepDefs/facebook_steps.js** - Facebook steps

### Hooks & Utilities
- **hooks/hooks.js** - Browser setup/teardown for all tests
- **utils/logger.js** - Comprehensive logging (console + file)

### Test Data
- **testdata/testdata.js** - Login credentials, products, orders
- **testdata/orderData.js** - Order validation test cases

## 📊 Features

✅ **Page Object Model** - Centralized selectors and methods
✅ **BDD with Cucumber** - Feature files in plain English
✅ **Reusable Hooks** - Single Before/After for all tests
✅ **Comprehensive Logging** - Console + file logging with timestamps
✅ **CI/CD Pipeline** - GitHub Actions workflow included
✅ **Test Data Management** - Centralized test data files
✅ **Configuration Management** - Environment-specific settings
✅ **Multi-version Testing** - Node 18.x and 20.x support

## 📝 Logging

Logs are automatically generated in:
```
logs/test-YYYY-MM-DD.log
```

Log levels available:
- `logger.info()` - General information
- `logger.debug()` - Debugging details
- `logger.warn()` - Warnings
- `logger.error()` - Errors
- `logger.success()` - Success messages
- `logger.section()` - Section headers

## 🔄 CI/CD

GitHub Actions workflow automatically runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

Tests run on Node 18.x and 20.x with:
- Automated browser installation
- HTML report generation
- Artifact collection (30-day retention)

## 📦 Dependencies

- **@playwright/test** ^1.45.0 - E2E testing framework
- **@cucumber/cucumber** ^10.0.0 - BDD framework
- **@types/node** ^20.10.0 - Node.js types

## 🎯 Best Practices

1. **Add new features** in `features/` folder
2. **Create step definitions** in `stepDefs/` folder
3. **Create page objects** in `pages/` folder for new sites
4. **Use logger** for debugging: `const logger = require('../utils/logger')`
5. **Store credentials** in `testdata/testdata.js`
6. **Keep hooks minimal** - only browser operations
7. **Follow POM pattern** - selectors in page objects, not in steps

## 📚 Resources

- [Playwright Docs](https://playwright.dev)
- [Cucumber Docs](https://cucumber.io)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)

