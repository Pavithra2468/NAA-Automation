
import { faker } from '@faker-js/faker';
import * as allure from "allure-js-commons";
export class PG_04_DashboardPage {

    constructor(page) {
        this.page = page;
        this.selectors = {
            FirstName: this.page.locator("input[id='first-name-group']"),
            PreferredFirstName: this.page.locator("input[id='preferred-first-name-group']"),
            MiddleName: this.page.locator("input[id='middle-name-group']"),
            LastName: this.page.locator("input[id='last-name-group']"),
            Suffix: this.page.getByRole('combobox', { name: 'Suffix' }),
            BirthdayMonth: this.page.getByRole('combobox', { name: 'Month' }),
            BirthdayDay: this.page.getByRole('combobox', { name: 'Day' }),
            BirthdayYear: this.page.getByRole('combobox', { name: 'Year' }),
            CountryCode: this.page.getByRole('textbox', { name: 'Country code' }),
            PhoneNumber: this.page.locator("input[id='main_phone']"),
            IsThisMobileNumberYES: this.page.getByLabel('Is this a mobile number?').getByRole('radio', { name: 'Yes' }),
            IsThisMobileNumberNO: this.page.getByLabel('Is this a mobile number?').getByRole('radio', { name: 'No' }),
            StartNewApplication: this.page.getByRole('button', { name: 'Start new application' }),

            //Validation locators

            FirstNameEmpty: this.page.locator('#first-name-group-error').getByText('This is a required field.'),
            FirstNameOnlyLetters: this.page.getByText('The first name can only contain letters, spaces and hyphens (-)'),
            LastNameEmpty: this.page.locator('#last-name-group-error'),
            LastNameOnlyLetters: this.page.getByText('The last name can only contain letters, spaces and hyphens (-)'),
            BirthdayEmpty: this.page.getByRole('group').getByText('This is a required field.'),
            IsThisMobileNumberEmpty: this.page.getByText('Please select an option'),
            PhoneNumberEmpty: this.page.getByText('Phone number is required'),

            //Bright Verify

        }
    }




    async dashboardValidationCheck() {
        // Click Start New Application
        await this.selectors.StartNewApplication.click();

        // Check for required field validation messages
        // First Name
        if (await this.selectors.FirstNameEmpty.isVisible()) {
            console.log('First name required validation message appears');
        } else {
            console.log('First name required validation message did not appear');
        }

        // Last Name
        await this.page.waitForTimeout(1000);
        if (await this.selectors.LastNameEmpty.isVisible()) {
            console.log('Last name required validation message appears');
        } else {
            console.log('Last name required validation message did not appear');
        }

        // Birthday
        if (await this.selectors.BirthdayEmpty.isVisible()) {
            console.log('Birthday required validation message appears');
        } else {
            console.log('Birthday required validation message did not appear');
        }

        // Phone Number
        if (await this.selectors.PhoneNumberEmpty.isVisible()) {
            console.log('Phone number required validation message appears');
        } else {
            console.log('Phone number required validation message did not appear');
        }

        // Is This Mobile Number
        await this.selectors.PhoneNumber.fill('5008878780');
        if (await this.selectors.IsThisMobileNumberEmpty.isVisible()) {
            console.log('Is this a mobile number required validation message appears');
        } else {
            console.log('Is this a mobile number required validation message did not appear');
        }

        // First Name: Only letters validation
        await this.selectors.FirstName.fill('Test1');
        if (await this.selectors.FirstNameOnlyLetters.isVisible()) {
            console.log('First name only letters validation message appears');
        } else {
            console.log('First name only letters validation message did not appear');
        }

        // Last Name: Only letters validation
        await this.selectors.LastName.fill('Test1');
        if (await this.selectors.LastNameOnlyLetters.isVisible()) {
            console.log('Last name only letters validation message appears');
        } else {
            console.log('Last name only letters validation message did not appear');
        }
    }




    async dashboard() {
        // Fill first name and last name with faker
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        await this.selectors.FirstName.fill(firstName);
        await this.selectors.LastName.fill(lastName);


        await this.page.waitForTimeout(1000);
        await this.selectors.BirthdayMonth.click();
        await this.page.getByRole('option', { name: 'March' }).click();

                await this.page.waitForTimeout(1000);
        await this.selectors.BirthdayDay.click();
        await this.page.getByRole('option', { name: '1' }).nth(0).click();

                await this.page.waitForTimeout(1000);
        await this.selectors.BirthdayYear.click();
        await this.page.getByRole('option', { name: '2000' }).click();




        // Fill phone number
        await this.selectors.PhoneNumber.fill('5008878780');
                await this.page.waitForTimeout(1000);


        // Wait for 500ms
        await this.page.waitForTimeout(500);

        // Select 'No' for Is This Mobile Number
        await this.selectors.IsThisMobileNumberNO.click();

        // Click Start New Application button again to submit
        await this.selectors.StartNewApplication.click();
    }

}