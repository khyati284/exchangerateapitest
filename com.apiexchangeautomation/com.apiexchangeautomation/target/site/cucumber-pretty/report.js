$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/Rate.feature");
formatter.feature({
  "name": "Exchange Rate",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Foreign Exchange Rate",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene1"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting the success of response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_the_success_of_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Two",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene2"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting the response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_the_response()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdef.Step_definition.asserting_the_response(Step_definition.java:53)\r\n\tat ✽.asserting the response(file:///C:/Users/hp/Desktop/com.apiexchangeautomation/com.apiexchangeautomation/src/test/resources/featurefiles/Rate.feature:13)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Three",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene3"
    }
  ]
});
formatter.step({
  "name": "Rates API for Latest foreign exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Latest_foreign_exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "incomplete link provided",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.incomplete_link_provided()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "supplied call assertion",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.supplied_call_assertion()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Four",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene4"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api for foreign exchange rate is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_for_foreign_exchange_rate_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting success of foreign exchange response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_success_of_foreign_exchange_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Five",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene5"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "api for foreign exchange rate is available",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.api_for_foreign_exchange_rate_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting foreign exchange response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_foreign_exchange_response()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdef.Step_definition.asserting_foreign_exchange_response(Step_definition.java:116)\r\n\tat ✽.asserting foreign exchange response(file:///C:/Users/hp/Desktop/com.apiexchangeautomation/com.apiexchangeautomation/src/test/resources/featurefiles/Rate.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Foreign Exchange Rate Six",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@scene6"
    }
  ]
});
formatter.step({
  "name": "Rates API for Specific date Foreign Exchange rates",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.Step_definition.rates_API_for_Specific_date_Foreign_Exchange_rates()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "future date provided in link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.Step_definition.future_date_provided_in_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "asserting for future date response",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.Step_definition.asserting_for_future_date_response()"
});
formatter.result({
  "status": "passed"
});
});