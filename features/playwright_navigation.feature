Feature: Playwright Documentation Navigation
  As a user
  I want to navigate through Playwright documentation
  So that I can learn about Playwright features

  Scenario: User navigates between Playwright pages
    Given I navigate to Playwright home page
    Then the page title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
    When I navigate to Playwright docs page
    Then the page title should be "Installation | Playwright"
    When I go back to previous page
    Then the page title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"
    When I go forward to next page
    Then the page title should be "Installation | Playwright"
    When I reload the page
    Then the page title should be "Installation | Playwright"
