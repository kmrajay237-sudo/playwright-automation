Feature: Facebook Login and Logout
  As a Facebook user
  I want to be able to login and logout from Facebook
  So that I can access my account securely

  Scenario: User successfully logs in and logs out from Facebook
    Given I navigate to Facebook
    When I enter email "your-test-email@example.com"
    And I enter password "your-test-password"
    And I click the Facebook login button
    Then I should be logged in to Facebook
    When I click the Facebook logout option
    Then I should be logged out from Facebook
