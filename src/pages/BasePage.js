export class BasePage{
    constructor(page){
        this.page = page;
        this.selectors = {
            SaveAndContinue : this.page.getByRole('button', { name: 'Save and Continue' }),

             //Bright Verify
            BrightVerifyModal: this.page.getByRole('alertdialog'),
            BrightVerifyClose: this.page.getByRole('button', { name: 'Close' }),
            BrightVerifyGoBackAndChange: this.page.getByRole('button', { name: 'Go back and change' }),
            BrightVerifySubmit: this.page.getByRole('button', { name: 'Submit' }),
        }

    }

async waitForAnyLoaderToDisappear() {
  await Promise.race([
    this.page.waitForSelector('.progress.border.border-light-5.bg-white.layout-progress-bar', { state: 'detached' }),
    this.page.waitForSelector('[data-cy="base-loader"]', { state: 'detached' })
  ]);
}

 async brightVerify() {
  try {
    if (await this.selectors.BrightVerifyModal.isVisible()) {
      console.log("Bright Verify Modal Appeared");
      await this.selectors.BrightVerifySubmit.click();
    }
  } catch (error) {
    console.log("Bright Verify Modal not present");
  }
}

}