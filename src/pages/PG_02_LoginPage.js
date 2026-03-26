export class PG_02_LoginPage{

constructor(page){
    this.page = page;
    this.selectors = {

        CreateAnAccount : this.page.getByRole('link', { name: 'Create an account' }),
        LogInWithAsurite : this.page.getByRole('button', { name: 'Log in with ASURITE' }),
        Email : this.page.getByRole('textbox', { name: 'Email' }),
        Password : this.page.getByRole('textbox', { name: 'Password' }),
        LogIn : this.page.getByRole('button', { name: 'Log in', exact: true }),
        ResetPassword : this.page.getByRole('link', { name: 'Reset password' })

    }




}



}