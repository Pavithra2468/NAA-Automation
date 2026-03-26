export class PG_08_ArizonaResidencyPage {

    construtor(page) {

        this.page = page;
        this.selectors = {

            //Residency
            Residency: this.page.getByRole('combobox', { name: 'Residency' }),

            HaveYouBeenlivinginArizonacontinuouslyforthelast12monthsYES: this.page.getByLabel(/Have you been living in Arizona/i).getByRole('radio', { name: 'Yes' }),
            HaveYouBeenlivinginArizonacontinuouslyforthelast12monthsNO: this.page.getByLabel(/Have you been living in Arizona/i).getByRole('radio', { name: 'No' }),
            WhenDidYouBeginLivingInArizonaMonth: this.page.getByRole('combobox', { name: 'When did you begin living in Arizona? select Month' }),
            WhenDidYouBeginLivingInArizonaYear: this.page.getByRole('combobox', { name: 'When did you begin living in Arizona? select Year' }),

            AreYouCurrentlyEnrolledAtAnotherCollegeOrUniversityYES: this.page.getByLabel(/Are you currently enrolled at another college or university?/i).getByRole('radio', { name: 'Yes' }),
            AreYouCurrentlyEnrolledAtAnotherCollegeOrUniversityNO: this.page.getByLabel(/Are you currently enrolled at another college or university?/i).getByRole('radio', { name: 'No' }),
            WhereAreYouCurrentlyEnrolled: this.page.getByRole('textbox', { name: 'Where are you currently' }),
            InWhichStateIsThatSchoolLocated: this.page.getByRole('combobox', { name: 'In which state is that school' }),

            WereYouEnrolledAtAnyArizonaCollegeOrUniversityYES: this.page.getByLabel(/Were you enrolled at any Arizona college or university in 2026 or 2025 calendar year?/i).getByRole('radio', { name: 'Yes' }),
            WereYouEnrolledAtAnyArizonaCollegeOrUniversityNo: this.page.getByLabel(/Were you enrolled at any Arizona college or university in 2026 or 2025 calendar year?/i).getByRole('radio', { name: 'No' }),

            WereYouClaimedAsADependentForIncomeTaxPurposesByAParentorLegalGuardianYES: this.page.getByLabel(/Were you claimed as a dependent for income tax purposes by a parent or legal guardian for 2025 or 2024?/i).getByRole('radio', { name: 'Yes' }),
            WereYouClaimedAsADependentForIncomeTaxPurposesByAParentorLegalGuardianNO: this.page.getByLabel(/Were you claimed as a dependent for income tax purposes by a parent or legal guardian for 2025 or 2024?/i).getByRole('radio', { name: 'No' }),

            DoYouHaveACurrentDriverLicenseOrStateIssuedIDYES: this.page.getByLabel(/Do you have a current driver’s license or state issued ID?/i).getByRole('radio', { name: 'Yes' }),
            DoYouHaveACurrentDriverLicenseOrStateIssuedIDNO: this.page.getByLabel(/Do you have a current driver’s license or state issued ID?/i).getByRole('radio', { name: 'No' }),
            InWhichStateWasYourLicenseIssued: this.page.getByRole('combobox', { name: 'In which state was your' }),
            WhenWasYourLicenseIssuedMonth: this.page.getByRole('combobox', { name: 'When was your license issued? select Month' }),
            WhenWasYourLicenseIssuedYear: this.page.getByRole('combobox', { name: 'When was your license issued? select Year' }),

            DoYouOwnorOperateACarMotorcycleorOtherMotorVehicleYES: this.page.getByLabel(/Do you own or operate a car, motorcycle or other motor vehicle?/i).getByRole('radio', { name: 'Yes' }),
            DoYouOwnorOperateACarMotorcycleorOtherMotorVehicleNO: this.page.getByLabel(/Do you own or operate a car, motorcycle or other motor vehicle?/i).getByRole('radio', { name: 'No' }),
            IsThisVehicleRegisteredInTheStateOfArizonaYES: this.page.getByLabel(/Is this vehicle registered in the state of Arizona?/i).getByRole('radio', { name: 'Yes' }),
            IsThisVehicleRegisteredInTheStateOfArizonaNO: this.page.getByLabel(/Is this vehicle registered in the state of Arizona?/i).getByRole('radio', { name: 'No' }),
            WhenWasYourVehicleRegisteredMonth: this.page.getByRole('combobox', { name: 'When was your vehicle registered? select Month' }),
            WhenWasYourVehicleRegisteredMonth: this.page.getByRole('combobox', { name: 'When was your vehicle registered? select Year' }),

            DidYouorWillYouFileStateTaxesYES: this.page.getByLabel(/Did you, or will you, file state taxes for 2025?/i).getByRole('radio', { name: 'Yes' }),
            DidYouorWillYouFileStateTaxesNO: this.page.getByLabel(/Did you, or will you, file state taxes for 2025?/i).getByRole('radio', { name: 'No' }),
            WhereDidorWhereWillYouFileYourStateTaxesFor: this.page.getByRole('combobox', { name: 'Select state' }),

            //Financial Support
            FinancialSupportParentOrLegalGuardian: this.page.getByRole('textbox', { name: 'enter Parent or legal guardian' }),
            FinancialSupportEmployment: this.page.getByRole('textbox', { name: 'enter Employment' }),
            FinancialSupportFinancialAid: this.page.getByRole('textbox', { name: 'enter Financial aid' }),
            FinancialSupportSpouse: this.page.getByRole('textbox', { name: 'enter Spouse' }),
            FinancialSupportOther: this.page.getByRole('textbox', { name: 'enter Other' }),
            FinancialSupportOtherSavingsTrustFund: this.page.getByRole('checkbox', { name: 'Savings/trust fund' }),
            FinancialSupportOtherRetirement: this.page.getByRole('checkbox', { name: 'Retirement' }),
            FinancialSupportOtherSocialSecurityDisability: this.page.getByRole('checkbox', { name: 'Social Security/Disability' }),
            FinancialSupportOtherVeteranBenefits: this.page.getByRole('checkbox', { name: 'Veteran Benefits' }),
            FinancialSupportOtherStateorFederalBenefits: this.page.getByRole('checkbox', { name: 'State or Federal Benefits' }),
            FinancialSupportOtherUnemployment: this.page.getByRole('checkbox', { name: 'Unemployment' }),
            FinancialSupportOtherNoneOfTheAbove: this.page.getByRole('checkbox', { name: 'Other/none of the above' }),
            PleaseDescribeYourSourceOfSupport: this.page.getByRole('textbox', { name: 'Please describe your source' }),

            AreYouCurrentlyEmployedYES: this.page.getByLabel(/Are you currently employed?/i).getByRole('radio', { name: 'Yes' }),
            AreYouCurrentlyEmployedNO: this.page.getByLabel(/Are you currently employed?/i).getByRole('radio', { name: 'No' }),
            WhereIsYourPrimaryWorkLocation: this.page.getByRole('combobox', { name: 'Where is your primary work' }),
            WhenDidYourEmploymentAtThisLocationBeginMonth: this.page.getByRole('combobox', { name: 'When did your employment at this location begin? select Month' }),
            WhenDidYourEmploymentAtThisLocationBeginYear: this.page.getByRole('combobox', { name: 'When did your employment at this location begin? select Year' }),
            WereYouEmployedInTheLast12MonthsYES: this.page.getByLabel(/Were you employed in the last 12 months?/i).getByRole('radio', { name: 'Yes' }),
            WereYouEmployedInTheLast12MonthsNO: this.page.getByLabel(/Were you employed in the last 12 months?/i).getByRole('radio', { name: 'No' }),
            WhereWasYourPrimaryWorkLocation: this.page.getByRole('combobox', { name: 'Where was your primary work' }),

            InWhichStateDoYourParentorLegalGuardianCurrentlyLive: this.page.getByRole('combobox', { name: 'In which state do your parent' }),
            WhichParentorLegalGuardianLivesInArizona: this.page.getByRole('combobox', { name: 'Which parent or legal' }),
            WhenDidYourParentorLegalGuardianBeginLivingInArizonaContinuouslyMonth: this.page.getByRole('combobox', { name: 'When did your parent(s) or legal guardian(s) begin living in Arizona continuously? select Month', exact: true }),
            WhenDidYourParentorLegalGuardianBeginLivingInArizonaContinuouslyYear: this.page.getByRole('combobox', { name: 'When did your parent(s) or legal guardian(s) begin living in Arizona continuously? select Year', exact: true }),

            DidorWillYourParentorLegalGuardianFileAStateIncomeTaxReturnForThe2025TaxYearYES: this.page.getByLabel(/Did or will your parent(s) or legal guardian(s) file a state income tax return for the 2025 tax year?/i).getByRole('radio', { name: 'Yes' }),
            DidorWillYourParentorLegalGuardianFileAStateIncomeTaxReturnForThe2025TaxYearNO: this.page.getByLabel(/Did or will your parent(s) or legal guardian(s) file a state income tax return for the 2025 tax year?/i).getByRole('radio', { name: 'No' }),
            InWhichStateDidorWillYourParentorLegalGuardianFileStateIncomeTaxes: this.page.getByRole('combobox', { name: 'In which state did, or will,' }),

            DoesEitherParentorLegalGuardianHaveACurrentArizonaDriverLicenseYES: this.page.getByLabel(/Does either parent or legal guardian have a current Arizona driver license?/i).getByRole('radio', { name: 'Yes' }),
            DoesEitherParentorLegalGuardianHaveACurrentArizonaDriverLicenseNO: this.page.getByLabel(/Does either parent or legal guardian have a current Arizona driver license?/i).getByRole('radio', { name: 'No' }),

            IsEitherParentOrLegalGuardianEmployedInArizonaYES: this.page.getByLabel(/Is either parent or legal guardian employed in Arizona?/i).getByRole('radio', { name: 'Yes' }),
            IsEitherParentOrLegalGuardianEmployedInArizonaNO: this.page.getByLabel(/Is either parent or legal guardian employed in Arizona?/i).getByRole('radio', { name: 'No' }),

            InWhichStateDoesYourSpouseCurrentlyLive: this.page.getByRole('combobox', { name: 'In which state does your' }),
            WhenDidYourSpouseBeginLivingInArizonaMonth: this.page.getByRole('combobox', { name: 'When did your spouse begin living in Arizona? select Month' }),
            WhenDidYourSpouseBeginLivingInArizonaYear: this.page.getByRole('combobox', { name: 'When did your spouse begin living in Arizona? select Year' }),
            DoesYourSpouseHaveAValidDriversLicenseOrStateIssuedIDYES: this.page.getByLabel(/Does your spouse have a valid drivers license or state-issued ID?/i).getByRole('radio', { name: 'Yes' }),
            DoesYourSpouseHaveAValidDriversLicenseOrStateIssuedIDNO: this.page.getByLabel(/Does your spouse have a valid drivers license or state-issued ID?/i).getByRole('radio', { name: 'No' }),

            WhatStateIssuedThisDriversLicenseOrStateID: this.page.getByRole('combobox', { name: 'What state issued this' }),

            WhenDidYourSpouseObtainThisDriversLicenseOrStateIDMonth: this.page.getByRole('combobox', { name: 'When did your spouse obtain this drivers license or state ID? select Month' }),
            WhenDidYourSpouseObtainThisDriversLicenseOrStateIDYear: this.page.getByRole('combobox', { name: 'When did your spouse obtain this drivers license or state ID? select Year' }),

            DidOrWillYourSpouseFileAStateIncomeTaxReturnFor2025YES: this.page.getByLabel(/Did or will your spouse file a state income tax return for the 2025 tax year?/i).getByRole('radio', { name: 'Yes' }),
            DidOrWillYourSpouseFileAStateIncomeTaxReturnFor2025NO: this.page.getByLabel(/Did or will your spouse file a state income tax return for the 2025 tax year?/i).getByRole('radio', { name: 'No' }),

            InWhichStateDidOrWillYourSpouseFileStateIncomeTaxes: this.page.getByRole('combobox', { name: 'In which state did, or will, your spouse file state income taxes?' }),

            IsYourSpouseEmployedYES: this.page.getByLabel(/Is your spouse employed?/i).getByRole('radio', { name: 'Yes' }),
            IsYourSpouseEmployedNO: this.page.getByLabel(/Is your spouse employed?/i).getByRole('radio', { name: 'No' }),

            InWhichStateIsYourSpouseEmployed: this.page.getByRole('combobox', { name: 'In which state is your spouse employed?' }),

            WhenDidYourSpousesEmploymentAtThisLocationBeginMonth: this.page.getByRole('combobox', { name: "When did your spouse's employment at this location begin? select Month" }),
            WhenDidYourSpousesEmploymentAtThisLocationBeginYear: this.page.getByRole('combobox', { name: "When did your spouse's employment at this location begin? select Year" }),

            IsYourSpouseCurrentlyEnrolledAtASUOrAnyOtherCollegeOrUniversityYES: this.page.getByLabel(/Is your spouse currently enrolled at ASU or any other college or university?/i).getByRole('radio', { name: 'Yes' }),
            IsYourSpouseCurrentlyEnrolledAtASUOrAnyOtherCollegeOrUniversityNO: this.page.getByLabel(/Is your spouse currently enrolled at ASU or any other college or university?/i).getByRole('radio', { name: 'No' }),

            IsYourSpouseDependentOnSomeoneOtherThanYouForFinancialSupportYES: this.page.getByLabel(/Is your spouse dependent on someone other than you for financial support, e\.g\. parents, guardians, family or financial aid?/i).getByRole('radio', { name: 'Yes' }),
            IsYourSpouseDependentOnSomeoneOtherThanYouForFinancialSupportNO: this.page.getByLabel(/Is your spouse dependent on someone other than you for financial support, e\.g\. parents, guardians, family or financial aid?/i).getByRole('radio', { name: 'No' }),












        }



    }


}