# SauceDemo Playwright Automation

Automated tests for https://www.saucedemo.com, written in JavaScript with Playwright.

## What is tested

- Login: valid users, locked-out user, wrong password
- Data-driven tests: one test run for many users
- Custom fixture: logs in automatically before a test
- Cart: adding an item updates the cart badge
- API tests: GET requests on JSONPlaceholder

## How to run

1. Install the dependencies:
```
npm install
```
2. Run all the tests:
```
npx playwright test
```
3. Open the HTML report:
```
npx playwright show-report
```

## Tech used

JavaScript, Playwright, Git, GitHub