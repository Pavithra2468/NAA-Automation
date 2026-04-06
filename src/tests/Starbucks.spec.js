import { test, expect } from '@playwright/test';
import { PG_04_DashboardPage } from '../pages/PG_04_DashboardPage.js';
import { PG_04_MyInformationPage } from '../pages/PG_04_MyInformationPage.js'
import * as XLSX from 'xlsx';
import path from 'path';

test('Starbucks flow', async ({ page }) => {
    // Path to the Excel file
    const excelPath = path.resolve(__dirname, '../utils/NAA 14.0 Release - Starbucks Data.xlsx');
    // Read the workbook
    const workbook = XLSX.readFile(excelPath);
    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];
    // Convert sheet to JSON
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    // Pick a random row
    const randomRow = data[Math.floor(Math.random() * data.length)];
    // Extract fields (adjust keys as per actual column names)
    const partnerId = randomRow['Partner ID'] || randomRow['PartnerID'] || randomRow['Partner Id'];
    const firstname = randomRow['First Name'] || randomRow['Firstname'] || randomRow['FirstName'];
    const lastname = randomRow['Last'] || randomRow['Last Name'] || randomRow['Lastname'] || randomRow['LastName'];

    const dashboard = new PG_04_DashboardPage(page);
    const myinfo = new PG_04_MyInformationPage(page);


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








    await page.waitForTimeout(30000);
    // Wait until the URL is /my-information
    await page.waitForURL('**/my-information');







    await myinfo.legalSexRandom();
    await myinfo.PrimaryLanguageSpokenAtHome();
    await myinfo.HomeAddressUnitedStates();
    await myinfo.IamAUScitizen();
    await myinfo.selectors.PreviousASUAffiliationOption4.click();
    await myinfo.selectors.AffiliationToUSUniformedServices.click();
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'None of these options apply' }).click();
    await myinfo.selectors.EducationBenefitsYES.click();
    await myinfo.selectors.SelectYourBenefitprovider.click();
    await myinfo.selectors.SelectYourBenefitprovider.fill("Starbucks");
    await page.waitForTimeout(500);
    await page.getByRole('option', { name: 'Starbucks' }).click();
    await myinfo.selectors.HaveYouEarnedBachelorDegreeOrhigherNO.click();
    await myinfo.selectors.StarbucksPartner.click();
    await myinfo.selectors.EnterYourStarbucksPartnerNumber.fill(String(partnerId));
    await myinfo.selectors.EnterYourStarbucksPartnerNumberEnter.nth(1).click();
    await page.waitForTimeout(1000);
    await myinfo.selectors.StarbucksAccept.click();
    await myinfo.selectors.StarbucksManagerDisclosureAccept.click();
    await page.pause();




})