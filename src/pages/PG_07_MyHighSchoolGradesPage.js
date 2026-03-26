export class PG_07_MyHighSchoolGradesPage {


    constructor(page) {

        this.page = page;
        this.selectors = {

            SelfReportSeniorYearGradesOnly : this.page.getByRole('radio', { name: 'Self-report senior year' }),
            SelfReportAllHighSchoolGrades : this.page.getByRole('radio', { name: 'Self-report all high school' }),

            //Overall academics
            unweightedGPA : this.page.getByRole('textbox', { name: 'Enter your current unweighted' }),
            GPAscale : this.page.getByRole('combobox', { name: 'GPA scale GPA scale' }),
            GradingSystem : this.page.getByRole('combobox', { name: 'Grading system Grading system' }),

            //high school grades - Add a course
            AcademicYear : this.page.getByRole('combobox', { name: 'Academic year Academic year' }),
            CourseName : this.page.getByRole('combobox', { name: 'Course name Course name More' }),
            Duration : this.page.getByRole('combobox', { name: 'Duration Duration More' }),
            CourseLevel : this.page.getByRole('combobox', { name: 'Course level Course level' }),

            //Grades
            FirstSemesterGrade : this.page.getByRole('combobox', { name: '1st Semester grade 1st' }),
            SecondSemesterGrade : this.page.getByRole('combobox', { name: '2nd Semester grade 2nd' }),
            FirstTrimesterGrade : this.page.getByRole('combobox', { name: '1st Trimester grade 1st' }),
            SecondTrimesterGrade : this.page.getByRole('combobox', { name: '2nd Trimester grade 2nd' }),
            ThirdTrimesterGrade : this.page.getByRole('combobox', { name: '3rd Trimester grade 3rd' }),
            FirstQuarterGrade : this.page.getByRole('combobox', { name: '1st quarter grade 1st quarter' }),
            SecondQuarterGrade : this.page.getByRole('combobox', { name: '2nd quarter grade 2nd quarter' }),
            ThirdQuarterGrade : this.page.getByRole('combobox', { name: '3rd quarter grade 3rd quarter' }),
            FourthQuarterGrade : this.page.getByRole('combobox', { name: '4th quarter grade 4th quarter' }),
            GradeDropdown : this.page.getByRole('combobox', { name: 'Grade dropdown' }),

            //save | clear
            SaveCourse : this.page.getByText('Save courseClear course fields'),
            ClearCourseFields : this.page.getByRole('button', { name: 'Clear course fields' })







        }


    }



}