import { faker } from '@faker-js/faker';

export class PG_01_CreateAccountPage {

    constructor(page) {
        this.page = page;
        this.selectors = {

            ViewApplicationDetails: this.page.getByRole('button', { name: /view application details/i }),
            ApplyHereLink: this.page.getByRole('link', { name: 'Apply here' }),
            LogIn: this.page.getByRole('link', { name: 'Log in' }),

            //Inperson or Online radio buttons
            InPerson: this.page.getByRole('radio', { name: 'In-person' }),
            Online: this.page.getByRole('radio', { name: 'Online' }),

            //Degree or Non degree
            Degree: this.page.getByRole('radio', { name: 'Yes, I want to pursue' }),
            NonDegree: this.page.getByRole('radio', { name: 'No, I want to take individual' }),

            //email and password
            EnterYourEmail: this.page.getByRole('textbox', { name: 'Enter your email' }),
            ConfirmYourEmail: this.page.getByRole('textbox', { name: 'Confirm your email' }),
            CreatePassword: this.page.getByRole('textbox', { name: 'Create a password' }),
            ConfirmPassword: this.page.getByRole('textbox', { name: 'Confirm your password' }),
            CreateAccount: this.page.getByRole('button', { name: 'Create account' }),

            HaveYouAlreadyEarnedBachelorsDegreeYES: this.page.getByRole('radio', { name: 'Yes', exact: true }),
            HaveYouAlreadyEarnedBachelorsDegreeNO: this.page.getByRole('radio', { name: 'No', exact: true }),

            //validation mail and password
            EnterYourEmailEmpty: this.page.getByText('Email is required.'),
            ConfirmYourEmailEmpty: this.page.getByText('Email confirmation is required'),
            CreatePasswordEmpty: this.page.getByText('Password is required.'),
            ConfirmPasswordEmpty: this.page.getByText('Password confirmation is required'),
            EnterYourEmailInvalid: this.page.getByText('Invalid email'),
            CreatePasswordNumberOfCharacters: this.page.getByText('Password must be at least 10 characters long.'),
            CreatePasswordAtleast1Number: this.page.getByText('The password must contain at least 1 number'),
            CreatePasswordAtleast1LowercaseLetter: this.page.getByText('The password must contain at least 1 lowercase letter'),


            //verify email page
            VerifyEmailLogin: this.page.getByRole('button', { name: 'Log in' }),

        }
    }





    async createAccountValidationCheck() {
        await this.page.goto('https://apply-qa.apps.asu.edu/');


        await this.selectors.InPerson.click();
        await this.selectors.Degree.click();

        // Click Create Account without filling any input
        await this.selectors.CreateAccount.click();
        await this.page.waitForTimeout(500);

        // Check for empty field validation messages using selectors
        if (await this.selectors.EnterYourEmailEmpty.isVisible()) {
            console.log('empty field validation message appears for email');
        } else {
            console.log('Validation message did not appear for email');
        }
        if (await this.selectors.CreatePasswordEmpty.isVisible()) {
            console.log('empty field validation message appears for password');
        } else {
            console.log('Validation message did not appear for password');
        }
        if (await this.selectors.ConfirmYourEmailEmpty.isVisible()) {
            console.log('empty field validation message appears for email');
        } else {
            console.log('Validation message did not appear for confirm email');
        }
        if (await this.selectors.ConfirmPasswordEmpty.isVisible()) {
            console.log('empty field validation message appears for password');
        } else {
            console.log('Validation message did not appear for confirm password');
        }

        // Enter invalid email and check for validation
        await this.selectors.EnterYourEmail.fill('test');
        await this.page.waitForTimeout(500);
        if (await this.selectors.EnterYourEmailInvalid.isVisible()) {
            console.log('invalid email validation message appears');
        } else {
            console.log('Validation message did not appear for invalid email');
        }

        // Enter short password and check for number of characters validation
        await this.selectors.CreatePassword.fill('Test');
        await this.page.waitForTimeout(500);
        if (await this.selectors.CreatePasswordNumberOfCharacters.isVisible()) {
            console.log('password number of characters validation message appears');
        } else {
            console.log('Validation message did not appear for password number of characters');
        }

        // Check for at least 1 number validation
        await this.selectors.CreatePassword.fill('TestTestTest');
        await this.page.waitForTimeout(500);
        if (await this.selectors.CreatePasswordAtleast1Number.isVisible()) {
            console.log('password at least 1 number validation message appears');
        } else {
            console.log('Validation message did not appear for password at least 1 number');
        }

        // Check for at least 1 lowercase validation
        await this.selectors.CreatePassword.fill('TESTTEST1234');
        await this.page.waitForTimeout(500);
        if (await this.selectors.CreatePasswordAtleast1LowercaseLetter.isVisible()) {
            console.log('password at least 1 lowercase validation message appears');
        } else {
            console.log('Validation message did not appear for password at least 1 lowercase letter');
        }
    }




    async createAccount() {
        const { EnterYourEmail, ConfirmYourEmail, CreatePassword, ConfirmPassword, CreateAccount } = this.selectors;

        const username = faker.internet.username().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const email = `${username}${Date.now()}@test.asu.edu`;
        const password = 'Tester@123';
        console.log(email);
        await EnterYourEmail.fill(email);
        await ConfirmYourEmail.fill(email);
        await CreatePassword.fill(password);
        await ConfirmPassword.fill(password);
        await CreateAccount.click();

        await this.page.waitForURL('**/user/verify-email', { timeout: 10000 });

        this.page.on('dialog', async dialog => {
            await dialog.dismiss();
        });
        await this.page.waitForTimeout(500);

        // Write email and password to utils/data.json
        const fs = require('fs');
        const path = require('path');
        const dataPath = path.resolve(__dirname, '../utils/data.json');
        let data = {};
        try {
            data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        } catch (e) {}
        data.validUser = { email, password };
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

        return { email, password };
    }


    async verifyEmail() {

        this.page.on('dialog', async dialog => {
            await dialog.dismiss();
        });

        await this.selectors.VerifyEmailLogin.click();
    }

}