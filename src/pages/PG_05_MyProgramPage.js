export class program {
    constructor(page) {
        this.page = page;
        this.selectors = {
            email: this.page.getByPlaceholder('Enter your email'),
            password: this.page.getByPlaceholder('Enter password'),
            login: this.page.locator('[data-cy="user-login-submit"]'),
            dashboardbutton: this.page.locator('[data-cy="dashboard-continue-application-button"]'),

            //i want to
            i_want_to: this.page.getByRole('combobox', { name: 'I want to..' }),
            nonDegreeStudentOption: this.page.getByText('take classes as a nondegree-seeking student'),
            degreeStudentOption: this.page.getByRole('option', { name: 'pursue a degree' }),

            //choose program
            chooseprogram: this.page.getByRole('button', { name: 'Choose this program' }),

            //popupstep1of1:this.page.locator('[aria-describedby="modal-description"]'),
            step1of2: this.page.getByText('Step 1 of 2'),
            radiobutton: this.page.locator('[name="flexRadioDefault"]'),
            nextbutton: this.page.getByRole('button', { name: 'Next ' }),

            //backup
            backuprequired: this.page.getByText('Backup program required'),
            savechoice: this.page.getByRole('button', { name: 'Save choice ' }),

            //nursing flow
            searchcourse: this.page.getByPlaceholder('Enter keywords'),
        }
    }

    async chooseaprogram() {
        const count = await this.selectors.chooseprogram.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            await this.selectors.chooseprogram.nth(i).click();
            await this.selectors.step1of2.waitFor({ state: 'visible' });
            await this.selectyear();
        }
    }

    async selectyear() {
        const count = await this.selectors.radiobutton.count();
        for (let i = 0; i < count; i++) {
            if (await this.selectors.radiobutton.nth(i).isEnabled()) {
                await this.selectors.radiobutton.nth(i).click();
                await this.selectors.nextbutton.click();
                if (await this.selectors.backuprequired.isVisible()) {
                    await this.selectors.savechoice.click();
                    this.chooseaprogram();
                }
                else {
                    await this.selectors.savechoice.click();
                    break;
                }
            }
        }
    }

    //Method for nursingflow
    async nursingflow() {
        await this.selectors.searchcourse.click();
        await this.selectors.searchcourse.fill('bsn');
        //await this.selectors.searchcourse.click();
        await this.chooseaprogram();
        //this.selectyear();
    }

    async nursingbackup() {
        const count = await this.selectors.chooseprogram.count();
        console.log(count);
        for (let i = 0; i < count; i++) {
            await this.selectors.chooseprogram.nth(i).click();
            await this.selectors.step1of2.isVisible();
            await this.selectyear();
        }
    }

}

