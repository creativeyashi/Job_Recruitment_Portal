/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jest/no-identical-title */
/* eslint-disable max-nested-callbacks */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line eslint-comments/no-duplicate-disable
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-duplicate-disable */
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
import { RobotEyes, RobotHands, Dependencies, Dependency,SavedJobs } from '../Robot';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

context('Search Test', () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies()
const dependency = new Dependency();
const savejobs = new SavedJobs();

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


describe('Application to Save And Unsave The Job',()=>{
  it('save Job',()=>{
  robotHands.clickOnDomElement(':nth-child(1) > .MuiPaper-root').wait(2000);
  robotHands.clickOnDomElement('.css-m69qwo-MuiStack-root > :nth-child(3) > .MuiButtonBase-root').wait(2000);
})

it('navigate to Saved job', () => {
  savejobs.visitWikipedia();
  robotEyes.seesMainPage;
})


});



});