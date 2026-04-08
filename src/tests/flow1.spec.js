import { test, expect } from '@playwright/test';
import { PG_04_DashboardPage } from '../pages/PG_04_DashboardPage.js';
import { PG_04_MyInformationPage } from '../pages/PG_04_MyInformationPage.js';
import { PG_05_MyProgramPage } from '../pages/PG_05_MyProgramPage.js';


test('Flow 1', async ({ page }) => {
   // const dashboard = new PG_04_DashboardPage(page);
    //const myinfo = new PG_04_MyInformationPage(page);
    const myprogram = new PG_05_MyProgramPage(page);
    //dashboard
    await page.goto('https://apply-qa.apps.asu.edu/');
    // await dashboard.dashboardValidationCheck();
    // await dashboard.dashboard();


//     //my info
//     await myinfo.legalSexRandom();
//     await page.waitForTimeout(500);
//     await myinfo.PrimaryLanguageSpokenAtHome();
//     await myinfo.HomeAddressUnitedStates();
//     await myinfo.IamAUScitizen();
//     await myinfo.selectors.PreviousASUAffiliationOption8.click();
//     await myinfo.selectors.WhatIsYourASUAffiliateID.click();
//     await myinfo.selectors.WhatIsYourASUAffiliateID.fill('1234567890');
//     await myinfo.selectors.AffiliationToUSUniformedServices.click();
//      await page.waitForTimeout(500);
//     await page.getByRole('option', { name: 'None of these options apply' }).click();
//     await myinfo.selectors.EducationBenefitsNO.click();
//         await page.waitForTimeout(500);
// await page.getByRole('button',{name:'Save and Continue'}).click();
// await page.waitForTimeout(500);
// await page.getByRole('alertdialog').waitFor({ state: 'visible' });
// await page.getByRole('button',{name:'Submit'}).click();
// await expect(page.getByRole('heading', { name: 'My ASU program' })
// ).toBeVisible();


//my program
await myprogram.chooseaprogram();
await myprogram.selectyear();
});