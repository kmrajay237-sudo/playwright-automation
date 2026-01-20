# Automation Test Suite with Playwright & BDD Cucumber

## Project Setup

This project uses **Playwright** for end-to-end testing and **BDD Cucumber** for behavior-driven development.

### Prerequisites

- Node.js 18+ or 20+
- npm

### Installation

```bash
npm ci
```

### Run Tests Locally

**Playwright Tests (Headed):**
```bash
npm run test:headed
```

**Playwright Tests (Headless):**
```bash
npm run test
```

**BDD Tests:**
```bash
npm run bdd
```

**BDD Tests with Report:**
```bash
npm run bdd:report
```

### CI/CD Pipeline

This project includes GitHub Actions workflows for automated testing.

**Workflows:**
- `playwright-bdd-tests.yml` - Runs both Playwright and BDD tests on Node 18 and 20

**Triggered on:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

**Test Reports:**
- Playwright HTML reports saved as artifacts
- Cucumber HTML reports saved as artifacts
- Reports retained for 30 days

### Project Structure

```
play2/
├── features/              # BDD Feature files (Gherkin)
├── stepDefs/              # Cucumber step definitions
├── pages/                 # Page Object Model classes
├── config/                # Configuration files
├── testdata/              # Test data sets
├── tests/                 # Playwright test files
├── .github/workflows/     # GitHub Actions workflows
├── playwright.config.js   # Playwright configuration
├── cucumber.js            # Cucumber configuration
└── package.json           # Dependencies and scripts
```

### Version Compatibility

| Package | Version | Status |
|---------|---------|--------|
| @playwright/test | ^1.45.0 | ✅ Compatible |
| @cucumber/cucumber | ^10.0.0 | ✅ Compatible |
| @cucumber/pretty | ^1.0.0 | ✅ Compatible |
| Node.js | 18.x, 20.x | ✅ Tested |

### Configuration

**Playwright:**
- Auto-detects CI environment via `process.env.CI`
- In CI: Headless mode, parallel workers, full tracing
- Locally: Headed mode, single worker, minimal tracing

**Cucumber:**
- Auto-detects CI environment via `process.env.CI`
- In CI: Strict mode, timeout 60s, parallel execution
- Locally: Non-strict mode, timeout 60s, single execution

### Continuous Integration

Tests run automatically on GitHub Actions with:
- ✅ Multiple Node.js versions (18.x, 20.x)
- ✅ Automated browser installation
- ✅ Artifact collection and retention
- ✅ Test result summaries

### Debugging

**Local Debugging:**
```bash
# Run with debug mode
DEBUG=pw:api npm test

# Run single test file
npx playwright test tests/Test1.spec.js

# Run single feature
npx cucumber-js features/demoblaze_login.feature
```

### Troubleshooting

**Browser Installation Issues:**
```bash
npx playwright install --with-deps chromium
```

**Clear Cache:**
```bash
rm -rf node_modules package-lock.json
npm ci
```

### Contributing

1. Create a feature branch
2. Run tests locally: `npm run test && npm run bdd`
3. Commit and push changes
4. GitHub Actions will run automated tests
5. Review test results in PR
