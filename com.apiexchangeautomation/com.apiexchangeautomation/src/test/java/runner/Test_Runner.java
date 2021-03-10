package runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:\\Users\\hp\\Desktop\\com.apiexchangeautomation\\com.apiexchangeautomation\\src\\test\\resources\\featurefiles",
		glue="stepdef",
		strict=true,
		monochrome=true,
		plugin= {"json:target/cucumber.json","html:target/site/cucumber-pretty"}
			
		
		)
public class Test_Runner {

}
