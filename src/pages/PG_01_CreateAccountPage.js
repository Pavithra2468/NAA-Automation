export class PG_01_CreateAccountPage {

    constructor(page) {
        this.page = page;
        this.selectors = {

            ViewApplicationDetails: this.page.getByRole('button', { name: /view application details/i }),
            ApplyHereLink : this.page.getByRole('link', { name: 'Apply here' }),
            LogIn : this.page.getByRole('link', { name: 'Log in' }),
            InPerson : this.page.getByRole('radio', { name: 'In-person' }),
            Online : this.page.getByRole('radio', { name: 'Online' }),
            Degree : this.page.getByRole('radio', { name: 'Yes, I want to pursue' }),
            NonDegree : this.page.getByRole('radio', { name: 'No, I want to take individual' }),
            EnterYourEmail : this.page.getByRole('textbox', { name: 'Enter your email' }),
            ConfirmYourEmail : this.page.getByRole('textbox', { name: 'Confirm your email' }),
            CreatePassword : this.page.getByRole('textbox', { name: 'Create a password' }),
            ConfirmPassword : this.page.getByRole('textbox', { name: 'Confirm your password' }),
            CreateAccount : this.page.getByRole('button', { name: 'Create account' }),
            HaveYouAlreadyEarnedBachelorsDegreeYES : this.page.getByRole('radio', { name: 'Yes', exact: true }),
            HaveYouAlreadyEarnedBachelorsDegreeNO : this.page.getByRole('radio', { name: 'No', exact: true })

        }
    }




}