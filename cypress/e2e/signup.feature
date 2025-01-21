Feature: Magento Sign-Up Flow

  Scenario: Successful account creation
    Given I am on the Magento signup page
    When I fill in valid account details
    And I submit the registration form
    Then I should see an account creation success message

  Scenario: Attempt signup with an already registered email
    Given I am on the Magento signup page
    When I fill in an already registered email
    And I submit the registration form
    Then I should see an error message for existing account
