import {test,expect} from '@playwright/test';
import {PG_01_LoginPage} from '../pages/PG_01_LoginPage.page';

test('Registration form',async({page})=>{

const registration = new PG_01_LoginPage(page);


await registration.navigateToJoinReal();
await registration.clickJoinReal();

})