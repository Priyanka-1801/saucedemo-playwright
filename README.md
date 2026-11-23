# SauceDemo Playwright Automation

Automated UI and API tests for the [SauceDemo](https://www.saucedemo.com) online shop, written in **JavaScript with Playwright**.

[![Playwright Tests](https://github.com/Priyanka-1801/saucedemo-playwright/actions/workflows/playwright.yml/badge.svg)](https://github.com/Priyanka-1801/saucedemo-playwright/actions/workflows/playwright.yml)

## What is tested

- **Login:** valid users, locked-out user, wrong password
- **Products:** the inventory shows 6 products
- **Cart:** adding and removing an item updates the cart and the cart badge
- **API:** GET requests with Playwright's `request`, checking status codes and response data

## Key features

- **Page Object Model:** `LoginPage`, `InventoryPage` and `CartPage` extend a shared `BasePage`. Locators live in page classes, and assertions stay in the tests.
- **Data-driven tests:** one test body runs for many users.
- **Custom fixture:** logs in automatically before a test.
- **CI on every push and pull request** with GitHub Actions. The HTML report is uploaded as an artifact.
- **Failure debugging:** screenshot on failure, trace on first retry.

## Project structure

```
pages/      Page Object classes (BasePage, LoginPage, InventoryPage, CartPage)
tests/      Test files
fixtures.js Custom login fixture
.github/workflows/playwright.yml   CI pipeline
```

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

JavaScript, Playwright, Node.js, Git, GitHub Actions
