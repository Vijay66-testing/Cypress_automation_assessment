import testData from '../fixtures/signupTestData';

class SignupPage {
  constructor() {
    this.baseUrl = '/customer/account/create/';
    this.selectors = {
      firstName: '#firstname',
      lastName: '#lastname',
      email: '#email_address',
      password: '#password',
      passwordConfirmation: '#password-confirmation',
      createAccountButton: 'button[title="Create an Account"]'
    };
  }
  visitSignupPage() {
    cy.visit(this.baseUrl);
  }

  enterUserDetails(userData) {
    cy.get(this.selectors.firstName).clear().type(userData.firstName);
    cy.get(this.selectors.lastName).clear().type(userData.lastName);
    cy.get(this.selectors.email).clear().type(userData.email);
    cy.get(this.selectors.password).clear().type(userData.password);
    cy.get(this.selectors.passwordConfirmation).clear().type(userData.password);
  }

  clickCreateAccount() {
    cy.get(this.selectors.createAccountButton).click();
  }

  verifyRegistrationSuccess() {
    cy.contains(testData.messages.successMessage).should('be.visible');
  }

  verifyDuplicateEmailError() {
    cy.contains(testData.messages.duplicateEmailError).should('be.visible');
  }

}

export default SignupPage;
