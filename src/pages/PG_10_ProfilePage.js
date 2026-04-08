export class PG_10_ProfilePage{
    constructor(page){
        this.page = page;
        this.selectors = {

            //profile icon locators
            ProfileIcon : this.page.getByRole('button', { name: 'Profile menu' }),
            EditProfile : this.page.getByRole('menuitem', { name: 'Edit profile' }),

            //profile page locators
            EditLegalName : this.page.getByRole('link', { name: 'Edit legal name, current' }),
            FirstName : this.page.getByRole('textbox', { name: 'First name' }),
            LastName : this.page.getByRole('textbox', { name: 'Last name' }),
            Save : this.page.getByRole('button', { name: 'Save' }),
            ReturnToDashboard : this.page.getByRole('link', { name: 'Return to dashboard' }),
        }
    }
}