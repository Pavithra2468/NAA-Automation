import {test,expect} from '@playwright/test';
import {examplePage} from '../pages/examplePage';
import {PG_01_CreateAccountPage} from '../pages/PG_01_CreateAccountPage.js'

//test


// test('@sanity Registration form',async({page})=>{

// const registration = new examplePage(page);
// await registration.navigateToJoinReal();
// })



// test('testing',async({page})=>{
// const registration = new PG_01_LoginPage(page);
// await registration.clickJoinReal();

// })


test('test',async({page})=>{
    const createaccount = new PG_01_CreateAccountPage(page);

await page.goto('https://apply-qa.apps.asu.edu/');
//await createaccount.selectors.ViewApplicationDetails.click();


})

