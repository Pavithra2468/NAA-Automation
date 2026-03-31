import { PG_01_CreateAccountPage } from '../pages/PG_01_CreateAccountPage.js';
import fs from 'fs';
import path from 'path';
export class PG_02_LoginPage {

    constructor(page) {
        this.page = page;
        this.selectors = {

            CreateAnAccount: this.page.getByRole('link', { name: 'Create an account' }),
            LogInWithAsurite: this.page.getByRole('button', { name: 'Log in with ASURITE' }),
            Email: this.page.getByRole('textbox', { name: 'Email' }),
            Password: this.page.getByRole('textbox', { name: 'Password' }),
            LogIn: this.page.getByRole('button', { name: 'Log in', exact: true }),
            ResetPassword: this.page.getByRole('link', { name: 'Reset password' }),

            //validation message
            PasswordEmpty: this.page.getByText('Password is required.'),
            PasswordIncorrect: this.page.getByText('Incorrect email or password.'),

        }
    }

    async validationCheck() {

        // Click on Log In button without entering password
        await this.selectors.LogIn.click();
        await this.page.waitForTimeout(1000);
        if (await this.selectors.PasswordEmpty.isVisible()) {
            console.log('Password empty validation message appears');
        }
        else {
            console.log('Password empty validation message does not appear');
        }

        // Type 'Test' in password and click Log In
        await this.selectors.Password.fill('Test');
        await this.selectors.LogIn.click();
        await this.page.waitForTimeout(500);
        if (await this.selectors.PasswordIncorrect.isVisible()) {
            console.log('Password incorrect validation message appears');
        }
        else {
            console.log('Password incorrect validation message does not appear');
        }
    }


    async login() {

        await this.page.waitForTimeout(1000);
        // Read email and password from utils/data.json
        const dataPath = path.resolve(__dirname, '../utils/data.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const { email, password } = data.validUser;
        await this.selectors.Email.fill(email);
        await this.selectors.Password.fill(password);
        await this.selectors.LogIn.click();
    }

}