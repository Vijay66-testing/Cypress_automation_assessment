import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../../page-objects/SignupPage';
import testData from '../../fixtures/signupTestData';

// Instantiate the SignupPage class
const signupPage = new SignupPage();

Given('I am on the Magento signup page', () => {
  signupPage.visitSignupPage();
});

When('I fill in valid account details', () => {
  signupPage.enterUserDetails(testData.validUser);
});

When('I fill in an already registered email', () => {
  signupPage.enterUserDetails(testData.ExistingUser);
});

When('I submit the registration form', () => {
  signupPage.clickCreateAccount();
});

Then('I should see an account creation success message', () => {
  signupPage.verifyRegistrationSuccess();
});

Then('I should see an error message for existing account', () => {
  signupPage.verifyDuplicateEmailError();
});
