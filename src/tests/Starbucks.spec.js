import { test, expect } from '@playwright/test';
import { PG_04_DashboardPage } from '../pages/PG_04_DashboardPage.js';
import { PG_04_MyInformationPage } from '../pages/PG_04_MyInformationPage.js'
import { PG_10_ProfilePage } from '../pages/PG_10_ProfilePage.js'
import { BasePage } from '../pages/BasePage.js'
import * as XLSX from 'xlsx';
import path from 'path';

test('Starbucks flow', async ({ page }) => {
    const excelPath = path.resolve(__dirname, '../utils/NAA 14.0 Release - Starbucks Data.xlsx');
    const workbook = XLSX.readFile(excelPath);
    const sheetName = workbook.SheetNames[0];
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    const randomRow = data[Math.floor(Math.random() * data.length)];
    const partnerId = randomRow['Partner ID'] || randomRow['PartnerID'] || randomRow['Partner Id'];
    const firstname = randomRow['First Name'] || randomRow['Firstname'] || randomRow['FirstName'];
    const lastname = randomRow['Last'] || randomRow['Last Name'] || randomRow['Lastname'] || randomRow['LastName'];

    const dashboard = new PG_04_DashboardPage(page);
    const myinfo = new PG_04_MyInformationPage(page);
    const profile = new PG_10_ProfilePage(page);
    const base = new BasePage(page);

    await page.goto('https://apply-qa.apps.asu.edu/');
    console.log('Random Starbucks Data:', { partnerId, firstname, lastname });

    // await dashboard.selectors.FirstName.fill(firstname);
    // await dashboard.selectors.LastName.fill(lastname);

    //  await page.waitForTimeout(1000);
    //     await dashboard.selectors.BirthdayMonth.click();
    //     await page.getByRole('option', { name: 'March' }).click();

    //     await page.waitForTimeout(1000);
    //     await dashboard.selectors.BirthdayDay.click();
    //     await page.getByRole('option', { name: '1' }).nth(0).click();

    //     await page.waitForTimeout(1000);
    //     await dashboard.selectors.BirthdayYear.click();
    //     await page.getByRole('option', { name: '2000' }).click();

    //     // Fill phone number
    //     await dashboard.selectors.PhoneNumber.fill('5008878780');
    //     await page.waitForTimeout(500);

    //     // Select 'No' for Is This Mobile Number
    //    // await dashboard.selectors.IsThisMobileNumberNO.click();

    //     // Click Start New Application button again to submit
    //     await dashboard.selectors.StartNewApplication.click();

    
    //My information page
    await base.waitForAnyLoaderToDisappear()
    await page.waitForURL('**/my-information');
    await base.waitForAnyLoaderToDisappear()
    await profile.selectors.ProfileIcon.click();
    await profile.selectors.EditProfile.click();
    await base.waitForAnyLoaderToDisappear()
    await page.waitForURL('**/profile');
    await base.waitForAnyLoaderToDisappear()
    await profile.selectors.EditLegalName.click();
    await page.waitForURL('**/edit-name');
    await base.waitForAnyLoaderToDisappear()
    await page.waitForTimeout(2000);
    await profile.selectors.FirstName.fill(firstname);
    await page.waitForTimeout(1000);
    await profile.selectors.LastName.fill(lastname);
    await profile.selectors.Save.click();
    await page.waitForURL('**/profile');
    await base.waitForAnyLoaderToDisappear()
    await profile.selectors.ReturnToDashboard.click();
    await base.waitForAnyLoaderToDisappear()
    await page.getByRole('button', { name: 'Continue' }).click();
    await base.waitForAnyLoaderToDisappear()
    await page.waitForURL('**/my-information');
    await myinfo.legalSexRandom();
    await myinfo.PrimaryLanguageSpokenAtHome();
    await myinfo.HomeAddressUnitedStates();
    await myinfo.IamAUScitizen();
    await page.waitForTimeout(2000);
    await myinfo.selectors.PreviousASUAffiliationOption4.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await myinfo.selectors.PreviousASUAffiliationOption4.click();
    await myinfo.selectors.AffiliationToUSUniformedServices.click();
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: 'None of these options apply' }).click();
    await myinfo.selectors.EducationBenefitsYES.click();
    await myinfo.selectors.SelectYourBenefitprovider.click();
    await myinfo.selectors.SelectYourBenefitprovider.fill("Starbucks");
    await page.waitForTimeout(1000);
    await page.getByRole('option', { name: 'Starbucks' }).click();
    await myinfo.selectors.HaveYouEarnedBachelorDegreeOrhigherNO.click();
    await myinfo.selectors.StarbucksPartner.click();
    await myinfo.selectors.EnterYourStarbucksPartnerNumber.fill(String(partnerId));
    await myinfo.selectors.EnterYourStarbucksPartnerNumberEnter.nth(1).click();
    await page.waitForTimeout(3000);
    await myinfo.selectors.StarbucksAccept.click();
    await myinfo.selectors.StarbucksManagerDisclosureAccept.click();
    await base.selectors.SaveAndContinue.click();
    await base.brightVerify();
    await base.waitForAnyLoaderToDisappear();

    //My Programs page
    await page.waitForURL('**/my-program');
    await page.pause();




})