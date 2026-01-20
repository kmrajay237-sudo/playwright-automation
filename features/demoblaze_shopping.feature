Feature: DemoBlazeStore Shopping Cart and Order
  As a customer
  I want to be able to add products to cart and place orders
  So that I can purchase products from DemoBlazeStore

  Background:
    Given I navigate to DemoBlazeStore website
    And I am logged in to DemoBlazeStore with username "pavanol" and password "test@123"

  Scenario: User adds product to cart and completes purchase
    When I navigate to category "Monitors"
    And I select product "Apple monitor 24"
    And I click add to cart button
    And I navigate to cart
    Then I should see product "Apple monitor 24" in cart
    When I click place order button
    And I fill order details with:
      | name      | Pavan Ol   |
      | country   | India      |
      | city      | Hyderabad  |
      | card      | 1234567890 |
      | month     | June       |
      | year      | 2024       |
    And I click purchase button
    Then I should see confirmation message "Thank you for your purchase!"
