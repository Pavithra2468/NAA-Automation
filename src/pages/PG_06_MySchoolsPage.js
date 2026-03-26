export class PG_06_MySchoolsPage{

constructor(page){
    this.page=page;
    this.selectors = {

        //Current or most recent high school
        Country : this.page.getByRole('combobox', { name: 'Country' }),
        StateProvinceRegion : this.page.getByRole('combobox', { name: 'State / Province / Region' }),
        City : this.page.getByRole('combobox', { name: 'City' }),
        HighSchool : this.page.getByRole('combobox', { name: 'High schools' }),
        GraduationMonth : this.page.getByRole('combobox', { name: 'Graduation Date' }),
        GraduationYear : this.page.getByRole('combobox', { name: 'Select year' }),
        NamePrintedOnTranscipt : this.page.getByRole('combobox', { name: 'Name printed on the' }),

        //Colleges and Universities
        HaveYouPreviouslyAttendedCollegeYES : this.page.getByLabel('Have you previously attended or are you currently attending a college or university? (This includes dual enrollment and other college or university courses taken during or after high school.)', { exact: true }).getByRole('radio', { name: 'Yes' }),
        HaveYouPreviouslyAttendedCollegeNO : this.page.getByLabel('Have you previously attended or are you currently attending a college or university? (This includes dual enrollment and other college or university courses taken during or after high school.)', { exact: true }).getByRole('radio', { name: 'No' }),
        TotalNumberOfCollege : this.page.getByPlaceholder('Enter your text'),
        TransferCreditGuide : this.page.getByPlaceholder('Enter your text'),
        PleaseEnterEachIndividualInstitutionCountry : this.page.locator('#institute_country_select'),
        PleaseEnterEachIndividualInstitutionStateProvinceRegion : this.page.locator('#institute_state_select'),
        PleaseEnterEachIndividualInstitutionCity : this.page.locator('#institute_city'),
        PleaseEnterEachIndividualInstitution : this.page.getByRole('combobox', { name: 'Institution Institution' }),
        PleaseEnterEachIndividualInstitutionName : this.page.getByRole('textbox', { name: 'Institution name' }),
        IamCurrentStudentCheckbox : this.page.getByRole('checkbox', { name: 'I am a current student.' }),
        DateFirstAttendedMonth : this.page.getByRole('combobox', { name: 'Date first attended' }),
        DateFirstAttendedYear : this.page.locator('#institute_first_date_year'),
        DateLastAttendedMonth : this.page.getByRole('combobox', { name: '{{' }),
        DateLastAttendedYear : this.page.locator('#institute_last_date_year'),
        DegreeAwarded : this.page.getByRole('combobox', { name: 'Degree awarded' }),
        DegreeConcentration : this.page.getByRole('textbox', { name: 'Degree concentration' }),
        NamePrintedOnTranscript : this.page.locator('#institute_name_on_transcript_transcript_name'),
        SaveInstitution : this.page.getByRole('button', { name: 'Save institution' }),

        //Previous post-secondary (college/university) eligibility
        PreviousOostSecondaryYES : this.page.locator('#headlessui-radiogroup-option-30'),
        PreviousOostSecondaryNO : this.page.locator('#headlessui-radiogroup-option-31'),

        //Transcript Policy
        WhichTranscriptDoINeedToSend : this.page.getByRole('link', { name: 'Which transcripts do I need' }),
        Acknowledge : this.page.getByRole('checkbox', { name: 'I acknowledge that I will' }),

        //Save and Continue
        SaveAndContinue : this.page.getByRole('button', { name: 'save and continue' })
        


    }
}


}