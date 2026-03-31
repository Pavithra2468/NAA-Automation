import {test,expect} from '@playwright/test';
import {examplePage} from '../pages/examplePage';
import {PG_01_CreateAccountPage} from '../pages/PG_01_CreateAccountPage.js'
import {PG_02_LoginPage} from '../pages/PG_02_LoginPage.js'
import {PG_04_DashboardPage} from '../pages/PG_04_DashboardPage.js'


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
    const loginpage = new PG_02_LoginPage(page);
const dashboardpage = new PG_04_DashboardPage(page);
await page.goto('https://apply-qa.apps.asu.edu/');
await createaccount.selectors.ViewApplicationDetails.click();

await createaccount.createAccountValidationCheck();
await createaccount.createAccount();
await createaccount.verifyEmail();

await loginpage.validationCheck();
await loginpage.login();

await dashboardpage.dashboardValidationCheck();
await dashboardpage.dashboard();
})

