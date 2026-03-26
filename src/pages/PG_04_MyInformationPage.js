export class PG_04_MyInformationPage {

    constructor(page) {

        this.page = page;
        this.selectors = {

            //Add a former Name
            AddFormerName: this.page.getByRole('button', { name: 'Add a former name' }),
            FirstName: this.page.getByPlaceholder('Enter your former or alternate first name'),
            LastName: this.page.getByPlaceholder('Enter your former or alternate last name'),
            Cancel: this.page.getByRole('button', { name: 'Cancel editing former name' }),
            SaveName: this.page.getByRole('button', { name: 'save name' }),

            //Legal Sex
            LegalSexMale: this.page.getByRole('radio', { name: 'Male', exact: true }),
            LegalSexFemale: this.page.getByRole('radio', { name: 'Female' }),
            LegalSexXorAnotherLegalSex: this.page.getByRole('radio', { name: 'X or another legal sex' }),
            LegalSexProfile: this.page.locator('#legal_sex').getByRole('link', { name: 'profile' }),

            //Primary Language spoken at home
            PrimaryLanguage: this.page.getByRole('combobox', { name: 'Primary language' }),

            //HomeAddress
            HomeAddress: this.page.getByRole('combobox', { name: 'Home address Home address' }),
            AddressLine1: this.page.getByRole('textbox', { name: 'Address line 1' }),
            AddressLine2: this.page.getByRole('textbox', { name: 'Address line 2' }),
            City: this.page.getByRole('textbox', { name: 'City' }),
            StateProvinceRegion: this.page.getByRole('combobox', { name: 'State / Province / Region' }),
            ZipPostalCode: this.page.getByRole('textbox', { name: 'ZIP / Postal code' }),
            HomeAddressProfile: this.page.locator('#home_address').getByRole('link', { name: 'profile' }),

            //Ehtnic/racial background
            AreYouHispanicLatinoYES: this.page.getByLabel('Are you Hispanic/Latino?Optional').getByRole('radio', { name: 'Yes' }),
            AreYouHispanicLatinoNO: this.page.getByLabel('Are you Hispanic/Latino?Optional').getByRole('radio', { name: 'No' }),
            SelectHispanicLatinoOrigin: this.page.getByRole('combobox', { name: 'Select Hispanic/Latino origin' }),
            WhatIsYourRace: this.page.getByRole('combobox', { name: 'What is your race?' }),
            SelectAmericanIndianAlaskaNativeOrigin: this.page.getByRole('combobox', { name: 'Select American Indian/Alaska' }),
            SelectAsianOrigin: this.page.getByRole('combobox', { name: 'Select Asian origin Select' }),
            SelectNativeHawaiianPacificIslanderOrigin: this.page.getByRole('combobox', { name: 'Select Native Hawaiian/' }),
            SelectPrimaryRace: this.page.getByPlaceholder('Select primary race'),

            //US Citizenship
            IamUSCitizen: this.page.getByRole('radio', { name: 'I am a U.S. citizen' }),
            IamNotUSCitizen: this.page.getByRole('radio', { name: 'I am not a U.S. citizen' }),
            CountryRegionTerritoryOfBirth: this.page.getByRole('combobox', { name: 'Country, region, or territory' }),
            SocialSecurityNumber: this.page.getByRole('textbox', { name: 'Social Security Number' }),
            ConfirmYourSocialSecurityNumber: this.page.getByRole('textbox', { name: 'XXX-XX-XXXX' }),
            ChooseVisaType: this.page.getByRole('combobox', { name: 'What type of visa' }),

            //Parent or legal guardian
            ParentOrLegalGuardianFirstName: this.page.getByRole('textbox', { name: 'First name' }),
            ParentOrLegalGuardianLastName: this.page.getByRole('textbox', { name: 'Last name' }),
            IsThisPersonLivingYES: this.page.locator('#headlessui-radiogroup-option-50'),
            IsThisPersonLivingNO: this.page.locator('#headlessui-radiogroup-option-51'),
            ParentOrLegalGuardianSAVE: this.page.getByRole('button', { name: 'Save', exact: true }),
            ParentOrLegalGuardianCANCEL: this.page.getByRole('button', { name: 'Cancel' }),

            //Previous ASU affiliation
            PreviousASUAffiliationOption1: this.page.getByRole('checkbox', { name: 'I previously attended ASU as' }),
            PreviousASUAffiliationOption2: this.page.getByRole('checkbox', { name: 'I attended ASU as a nondegree' }),
            PreviousASUAffiliationOption3: this.page.getByRole('checkbox', { name: 'I attended ASU\'s Global launch' }),
            PreviousASUAffiliationOption4: this.page.getByRole('checkbox', { name: 'I attended a transfer pathway' }),
            PreviousASUAffiliationOption5: this.page.getByRole('checkbox', { name: 'I am currently or previously' }),
            PreviousASUAffiliationOption6: this.page.getByRole('checkbox', { name: 'I attended ASU as part of a' }),
            PreviousASUAffiliationOption7: this.page.getByRole('checkbox', { name: 'Other (i.e., applied but' }),
            PreviousASUAffiliationOption8: this.page.getByRole('checkbox', { name: 'I have never been affiliated' }),
            WhatIsYourASUAffiliateID: this.page.getByRole('textbox', { name: 'What is your ASU Affiliate ID' }),

            //Affiliation to US Uniformed Services
            AffiliationToUSUniformedServices: this.page.getByRole('combobox', { name: 'Affiliation to U.S. Uniformed' }),
            ActiveDuty: this.page.getByRole('radio', { name: 'Active Duty' }),
            ArmedForcesReserve: this.page.getByRole('radio', { name: 'Armed Forces Reserve' }),
            NationalGuard: this.page.getByRole('radio', { name: 'National Guard' }),
            Veteran: this.page.getByRole('radio', { name: 'Veteran' }),
            SelectYourBranchOfService: this.page.getByRole('combobox', { name: 'Select your branch of service' }),
            IHaveAppliedOrPlanToApplyForDepartmentOfVeteransAffairsYES: this.page.locator('#headlessui-radiogroup-option-122'),
            IHaveAppliedOrPlanToApplyForDepartmentOfVeteransAffairsNO: this.page.locator('#headlessui-radiogroup-option-123'),
            IAuthorizeArizonaStateUniversityYES: this.page.locator('#headlessui-radiogroup-option-126'),
            IAuthorizeArizonaStateUniversityNO: this.page.locator('#headlessui-radiogroup-option-127'),

            //Education benefits
            EducationBenefitsYES: this.page.getByLabel('Education benefitsDo you plan').getByRole('radio', { name: 'Yes' }),
            EducationBenefitsNO: this.page.getByLabel('Education benefitsDo you plan').getByRole('radio', { name: 'No', exact: true }),
            SelectYourBenefitprovider: this.page.getByRole('combobox', { name: 'Select your benefit provider' }),

            //Bright Verify
            BrightVerifyDialog: this.page.getByRole('alertdialog'),
            BrightverifyClose: this.page.getByRole('button', { name: 'Close' }),
            BrightverifyGoBackAndChange: this.page.getByRole('button', { name: 'Go back and change' }),
            BrightverifySubmit: this.page.getByRole('button', { name: 'Submit' })
        }
    }


    async CheckBrightVerify() {
        if (await this.selectors.BrightVerifyDialog.isVisible()) {
            await this.selectors.BrightverifySubmit.click();
        }
    }


}