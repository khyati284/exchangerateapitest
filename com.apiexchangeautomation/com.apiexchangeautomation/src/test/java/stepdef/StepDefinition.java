package stepdef;

import static org.junit.Assert.assertTrue;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;

public class StepDefinition 
{
	//Defining global variables
	String apiurl=null;
	String responsebody= null;
	Response res;
	
	@Given("Rates API for Latest foreign exchange rates")
	public void rates_API_for_Latest_foreign_exchange_rates() {
		
		//Defining link in the variable
		apiurl="https://api.ratesapi.io/api/latest";
		
		//Displaying api link to be worked upon
		System.out.println("Rates api link is: "+apiurl);
		
	}

	@When("api is available")
	public void api_is_available() {
		
		//Fetching response by hitting api
		res= RestAssured.get(apiurl);
		responsebody=res.getBody().asString();
		
		//Printing the response generated
		System.out.println("Response in String: "+responsebody);

	}

	@Then("asserting the success of response")
	public void asserting_the_success_of_response() {
		
		//asserting the response
		assertTrue(responsebody.contains("base"));

	}
	
	@Then("asserting the response")
	public void asserting_the_response() {
	    
		//asserting the failure of response
		assertTrue(responsebody.contains("SAR"));
	}
	
	@When("incomplete link provided")
	public void incomplete_link_provided() {
		
		//Giving incomplete url in the variable
		String incorrect_url="https://api.ratesapi.io/api/";
		
		//Displaying incorrect link being supplied
		System.out.println("Incorrect link supplied: "+incorrect_url);
		
		//Fetching response by hitting api
		res= RestAssured.get(incorrect_url);
		responsebody=res.getBody().asString();
		
		//Printing the response generated
		System.out.println("Response in String: "+responsebody);
		
	}

	@Then("supplied call assertion")
	public void supplied_call_assertion() {
	    
		//asserting success of response
		assertTrue(responsebody.contains("error"));
		
	}
	
	@Given("Rates API for Specific date Foreign Exchange rates")
	public void rates_API_for_Specific_date_Foreign_Exchange_rates() {
		
		//Defining link in the variable
		apiurl="https://api.ratesapi.io/api/2010-01-12";
		
		//Displaying api link to be worked upon
		System.out.println("Rates api link is: "+apiurl);
		
	}

	@When("api for foreign exchange rate is available")
	public void api_for_foreign_exchange_rate_is_available() {
	    
		//Fetching response by hitting api
		res= RestAssured.get(apiurl);
		responsebody=res.getBody().asString();
		
		//Printing the response generated
		System.out.println("Response in String: "+responsebody);
		
	}

	@Then("asserting success of foreign exchange response")
	public void asserting_success_of_foreign_exchange_response() {
	    
		//asserting success of response
		assertTrue(responsebody.contains("2010-01-12"));
	}
	
	@Then("asserting foreign exchange response")
	public void asserting_foreign_exchange_response() {
	    
		//asserting failure of response
		assertTrue(responsebody.contains("2010-01-10"));
	}
	
	@When("future date provided in link")
	public void future_date_provided_in_link() {
	    
		//Storing link with future date in a variable
		String future_date_url="https://api.ratesapi.io/api/2011-02-24";
		
		//Printing future date url used
		System.out.println("Future date given in link: "+future_date_url);
		
		//Hitting api tgo get response
		res= RestAssured.get(future_date_url);
		responsebody=res.getBody().asString();
		
		//Printing response
		System.out.println("Response in String: "+responsebody);
	}

	@Then("asserting for future date response")
	public void asserting_for_future_date_response() {
		
		//asserting success of response
		assertTrue(responsebody.contains("2011-02-24"));
	    
	}

}
