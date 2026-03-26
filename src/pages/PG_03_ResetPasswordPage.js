export class PG_03_ResetPasswordPage {

    constructor(page) {

        this.page = page;
        this.selectors = {

            Email : this.page.getByRole('textbox', { name: 'Email' }),
            SendCode : this.page.locator('div').filter({ hasText: /^Send code$/ }),
            ReturnToLoginScreen : this.page.getByRole('button', { name: 'Return to login screen' })

        }




    }




}