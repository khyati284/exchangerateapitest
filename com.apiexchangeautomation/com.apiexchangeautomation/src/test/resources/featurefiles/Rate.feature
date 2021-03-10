Feature: Exchange Rate

  @scene1
  Scenario: Foreign Exchange Rate
    Given Rates API for Latest foreign exchange rates
    When api is available
    Then asserting the success of response
    
  @scene2
  Scenario: Foreign Exchange Rate Two
    Given Rates API for Latest foreign exchange rates
    When api is available
    Then asserting the response
    
  @scene3
  Scenario: Foreign Exchange Rate Three
    Given Rates API for Latest foreign exchange rates
    When incomplete link provided
    Then supplied call assertion
    
  @scene4
  Scenario: Foreign Exchange Rate Four
    Given Rates API for Specific date Foreign Exchange rates
    When api for foreign exchange rate is available
    Then asserting success of foreign exchange response
    
  @scene5
  Scenario: Foreign Exchange Rate Five
    Given Rates API for Specific date Foreign Exchange rates
    When api for foreign exchange rate is available
    Then asserting foreign exchange response
    
  @scene6
  Scenario: Foreign Exchange Rate Six
    Given Rates API for Specific date Foreign Exchange rates
    When future date provided in link
    Then asserting for future date response
