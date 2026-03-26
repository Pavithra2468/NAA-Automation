export class examplePage {


    constructor(page) {

        this.page = page;
        this.selectors = {

            joinReal: this.page.locator('text=Join Real'),
            firstname: this.page.locator('input[data-testid="text-input-First Name"]'),
            lastname: this.page.locator('input[data-testid="text-input-Last Name"]'),
            username: this.page.locator('input[data-testid="text-input-Username"]'),
            email: this.page.locator('input[data-testid="email-input-Email"]'),
            password: this.page.locator('input[data-testid="password-input-Password"]'),
            confirmPassword: this.page.locator('input[data-testid="password-input-Password Confirmation"]'),
            checkbox: this.page.locator('input[data-testid="consentedToTerms"]'),
            checkboxtwo: this.page.locator('input[data-testid="consentedToCallMessage"]'),
            chooseThisProgram: this.page.getByRole('button', { name: 'Choose this program' }),
            modal: this.page.locator('[data-cy="my-programs-confirm-program-modal-content"]'),
            radiobutton: this.page.locator('input[name="flexRadioDefault"]'),
            next: this.page.getByRole('button', { name: "Next " }),
            backupProgram: this.page.getByText('Backup program required'),
            saveChoice: this.page.getByRole('button', { name: "Save choice" })
        }

    }

    //methods

    async viewProgram() {
        const count = await this.selectors.chooseThisProgram.count();
        for (let i = 0; i < count; i++) {
            await this.selectors.chooseThisProgram.nth(i).click();
            if (await this.selectors.modal.isVisible()) {
                await this.modall();
            }

        }
    }

    async modall() {
        const count1 = await this.selectors.radiobutton.count();
        for (let i = 0; i < count1; i++) {
            if (await this.selectors.radiobutton.nth(i).isEnabled()) {
                await this.selectors.radiobutton.nth(i).click();
                await this.selectors.next.click();
                if (await this.selectors.backupProgram.isVisible()) {
                    await this.selectors.saveChoice.click();
                    await this.page.viewProgram();
                }
                else
                    await this.selectors.saveChoice.click();
            }
            else{
                //close the modal
            }
            
        }
    }






    async navigateToJoinReal() {

        await this.page.goto('https://bolt.playrealbrokerage.com/login');

    }

    async clickJoinReal() {

        await this.selectors.joinReal.click();
    }


}