export class PG_01_LoginPage{


constructor(page){

this.page=page;
this.selectors = {

joinReal : this.page.locator('text=Join Real'),
firstname : this.page.locator('input[data-testid="text-input-First Name"]'),
lastname : this.page.locator('input[data-testid="text-input-Last Name"]'),
username : this.page.locator('input[data-testid="text-input-Username"]'),
email : this.page.locator('input[data-testid="email-input-Email"]'),
password : this.page.locator('input[data-testid="password-input-Password"]'),
confirmPassword : this.page.locator('input[data-testid="password-input-Password Confirmation"]'),
checkbox : this.page.locator('input[data-testid="consentedToTerms"]'),
checkboxtwo : this.page.locator('input[data-testid="consentedToCallMessage"]'),

}

}

//methods

async navigateToJoinReal(){

    await this.page.goto('https://bolt.playrealbrokerage.com/login');
   
}

async clickJoinReal(){

    await this.selectors.joinReal.click();
}

}