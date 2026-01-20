Feature: DemoBlazeStore Login and Logout
  As a user
  I want to be able to login and logout from DemoBlazeStore
  So that I can access my account and logout securely

  Background:
    Given I navigate to DemoBlazeStore website

  Scenario: User successfully logs in to DemoBlazeStore
    When I enter username "pavanol"
    And I enter password "test@123"
    And I click the login button
    Then I should see the welcome message "Welcome pavanol"

  Scenario: User successfully logs out from DemoBlazeStore
    Given I am logged in to DemoBlazeStore with username "pavanol" and password "test@123"
    When I click the logout button
    Then I should see the login button
