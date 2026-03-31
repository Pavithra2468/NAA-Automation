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

            //Validation Locators
            legalsex: this.page.locator('[data-cy="my-info-legal-sex-group"]').getByText('This is a required field.'),
            primarylanguage: this.page.locator('#base_select_group_primary_language_select').getByText('This is a required field.'),
            homeaddress: this.page.locator('#base_select_group_home_country').getByText('This is a required field.'),
            addressline1: this.page.locator('#group_address_line_1-error').getByText('This is a required field.'),
            city: this.page.locator('#group_city-error').getByText('This is a required field.'),
            state: this.page.locator('#base_select_group_state_code .invalid-feedback'),
            zipcode: this.page.locator('#group_zip_code-error').getByText('This is a required field.'),

            //citizenship
            uscitizenship: this.page.getByLabel('U.S. citizenshipBegin by').getByText('This is a required field.'),

            //iam us citizen
            countryofbirth: this.page.locator('#base_select_group_birth_country .invalid-feedback').getByText('This is a required field.'),
            socialsecuritynumber: this.page.locator('#social_security_number-error').getByText('This is a required field.'),
            socialsecuritynumberconformation: this.page.locator('[data-cy="my-info-us-citizenship-ssn-group"]').locator('.invalid-feedback'),

            //iam not us citizen
            choosevisatype: this.page.locator('[data-cy="my-info-us-citizenship-visa-type-group"]').locator('.invalid-feedback'),

            //ASU Affiliate
            previousasuaffiliation: this.page.locator('#group_asu_affiliation-error').getByText('This is a required field.'),
            shouldcontain10number: this.page.locator('#group_asu_affiliate_id-error').getByText('Should contain 10 numbers.'),
            shouldcontainonlynumber: this.page.locator('#group_asu_affiliate_id-error').toHaveText('This should contain only numbers.'),

            usuniformedservice: this.page.locator('#base_select_group_us_uniformed_services').getByText('This is a required field.'),
            educationbenefits: this.page.locator('[data-cy="my-info-partner-benefits-education-benefit-group"]').locator('.radio-card-error'),

        }
    }





}