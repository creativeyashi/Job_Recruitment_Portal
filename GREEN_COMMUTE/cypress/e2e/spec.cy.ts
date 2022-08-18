import { RobotEyes, RobotHands, Dependencies, Dependency } from '../Robot';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()
const dependency = new Dependency();

describe('Application functionality testing', () => {
  it('navigate to greencommute landing page', () => {
    dependencies.visitWikipedia();
  })

  it('search for the elements',()=>{
    robotEyes.seesMainPage;
    robotEyes.seesDomContainText(':nth-child(1) > .MuiStepLabel-root > .MuiStepLabel-labelContainer > .MuiStepLabel-label > .MuiTypography-root',
    'Your Location');
  })



  it('search landingpage Autocompelte',()=>{
    robotHands.clickOnDomElement('#custom-input-demo').wait(2000);
    robotHands.clickOnId('custom-input-demo-option-0').wait(3000);
    robotHands.clickOnDomElement('[data-testid="handleNextStepper"]').wait(2000);

    //location-on landing Page

    // robotHands.clickOnDomElement('#custom-input-demo').wait(2000);
    // robotHands.clickOnId('custom-input-demo-option-0').wait(1000);

    robotHands.clickOnDomElement('#autoCompleteInput').wait(1000);
    cy.get("li[role='option']").each(function($ele,index,$list){
      if($ele.text().includes("Hyderabad")){
        cy.wrap($ele).click().wait(3000);
      }
    })
     robotHands.clickOnDomElement('[data-testid="handleNextStepper"] > .MuiTypography-root').wait(3000);



     robotHands.clickOnDomElement('[data-testid="autocompleteInput"]').wait(3000);
     robotHands.clickOnDomElement('.makeStyles-skipbutton-12 > .MuiButtonBase-root > .MuiTypography-root').wait(3000);
})

});



describe('Application FInd Job Page', () => {
  it('navigate to greencommute Find Job page', () => {
    dependency.visitWikipedia();
  })

  it('search for the elements',()=>{
    robotHands.clickOnDomElement(':nth-child(1) > .MuiPaper-root').wait(3000);
  })


  it('search for the elements',()=>{
    robotHands.clickOnDomElement(':nth-child(1) > .MuiInputBase-root > #location').wait(3000);
    robotHands.clickOnDomElement('#location-option-1').wait(1500);
    robotHands.clickOnDomElement('[data-testid="SearchIcon"]').wait(1500);

    //-------------------Search By Location------------

    robotHands.clickOnDomElement(':nth-child(1) > .MuiInputBase-root > #location').wait(3000);
    robotHands.clickOnDomElement('#location-option-0').wait(1500);

    robotHands.clickOnDomElement(':nth-child(2) > .MuiInputBase-root > #location').wait(3000);
    robotHands.clickOnDomElement('#location-option-0').wait(1500);

    robotHands.clickOnDomElement('[data-testid="SearchIcon"]').wait(1500);


  })

})

});