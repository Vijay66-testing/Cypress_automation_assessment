
# Magento Sign-Up Automation

This repository contains an automation framework for testing the Magento sign-up flow using Cypress, Cucumber (BDD), and Page Object Model (POM). It demonstrates best practices for test automation with Behavior-Driven Development (BDD) and Page Object Model (POM) structures.

## Project Structure

The project is organized as follows:

```
├── /cypress
│   ├── /e2e
│   │   ├── /step-definitions
│   │   │   └── signup.js          # Step definitions for BDD
│   │   ├── /features
│   │   │   └── signup.feature     # Feature file defining the test scenarios
│   ├── /fixtures
│   │   └── signupTestData.js      # Test data used for signup scenarios
│   ├── /page-objects
│   │   └── signupPage.js          # Page Object Model (POM) for the signup page
├── /node_modules                  # Node.js modules (auto-generated)
├── /cypress.config.js             # Cypress configuration file
├── /package.json                  # Node.js project configuration
├── /README.md                     # Project documentation
└── /cypress/support               # Support files for Cypress (optional)
```

## Prerequisites

Before running the tests, make sure you have the following installed:

- **Node.js**: Version 16 or later.
- **Cypress**: Version 14 or later.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Vijay66-testing/Cypress_automation_assessment.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Cypress configuration and ensure the project is ready to run.

## Running Tests

To execute the tests, run the following command:

```bash
npx cypress run
```
