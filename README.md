# Playwright OrangeHRM Test Automation

A Playwright test automation project for validating the OrangeHRM demo application. The suite covers login scenarios and Admin module workflows such as job titles, job categories, pay grades, employment statuses, work shifts, and user management.

## Tech Stack

- Node.js
- Playwright Test
- JavaScript
- GitHub Actions
- HTML test reports

## Supported Browsers

The Playwright configuration runs tests in:

- Chromium
- Firefox
- WebKit
- Google Chrome

## Project Structure

```text
Playwright4/
|-- .github/
|   `-- workflows/
|       `-- playwright.yml       # GitHub Actions CI workflow
|-- Test data/
|   |-- Admin-user-management.json
|   |-- BlankCredentials.json
|   |-- InvalidPassword.json
|   |-- InvalidUsername.json
|   |-- Invalidcredentials.json
|   |-- admin-add-user.json
|   `-- validlogin.json
|-- e2e/
|   |-- Test-data/
|   |   `-- login creds
|   `-- example.spec.js
|-- tests/
|   |-- Admin/
|   |   `-- *.spec.js           # Admin module test cases
|   |-- Login/
|   |   `-- *.spec.js           # Login test cases
|   |-- example.spec.js
|   |-- leave.spec.js
|   |-- pim.spec.js
|   `-- practice.spec.js
|-- .gitignore
|-- package.json
|-- package-lock.json
|-- playwright.config.js
`-- README.md
```

## Prerequisites

- Node.js 18 or later
- npm
- Internet access to the OrangeHRM demo application

## Installation

From the project root, install dependencies:

```powershell
npm ci
```

Install the Playwright browsers:

```powershell
npx playwright install
```

For Linux CI environments, install browser system dependencies with:

```powershell
npx playwright install --with-deps
```

## Running Tests

Run the complete test suite:

```powershell
npx playwright test
```

Run tests in a specific browser project:

```powershell
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
npx playwright test --project="Google Chrome"
```

Run a specific test file:

```powershell
npx playwright test tests/Login/validLogin.spec.js
npx playwright test tests/Admin/workshift.spec.js
```

Run tests in Playwright UI mode:

```powershell
npx playwright test --ui
```

Run tests with a headed browser:

```powershell
npx playwright test --headed
```

## Test Configuration

Configuration is maintained in `playwright.config.js`.

- Test directory: `./tests`
- Per-test timeout: 60 seconds
- Workers: 1
- Retries locally: 1
- Retries in CI: 2
- Screenshot: On
- Video: On
- Trace: On
- Reporter: HTML

The HTML report is written to `playwright-report/`.

## Reports and Test Artifacts

After a test run, open the HTML report:

```powershell
npx playwright show-report
```

Screenshots, videos, and traces are stored in `test-results/` when generated. These folders and `playwright-report/` are excluded from Git through `.gitignore`.

## Test Data

Reusable test data is stored in the `Test data/` directory as JSON files. The valid login test, for example, imports `validlogin.json` and uses its username and password values.

Test credentials are for the public OrangeHRM demo application. Do not add real or sensitive credentials to this repository.

## Continuous Integration

The GitHub Actions workflow at `.github/workflows/playwright.yml` runs on pushes and pull requests to the `main` or `master` branches. It:

1. Checks out the repository
2. Installs Node.js
3. Runs `npm ci`
4. Installs Playwright and system dependencies
5. Executes the test suite
6. Uploads the HTML report as a workflow artifact
