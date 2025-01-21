import './experienceSection.css';
import '../section.css';
import ExperienceWidget from '../../widget/experienceWidget/ExperienceWidget';
import resume from '../../../assets/files/resume.pdf';

export default function ExperienceSection({title}) {

    return <>
    <div className='section'>
        <h1 className='sectionTitle'>{title}</h1>
    
        <p>Alternatively, <a href={resume}>here is my resume</a></p>

        <ExperienceWidget
            title = 'Course Assistant'
            employer = 'Rochester Institute of Technology'
            description = {`I've been a course assistant for two classes: Software
                Development and Problem Solving (Java), and Introduction to Software 
                Engineering, which teaches software process, design, and full-stack
                web dev (JS, Angular JS).`}
            descriptionPoints = {[
                `Assist students and answer their questions in class`,
                `Grade assignments and provide personalized feedback`
            ]}
            location = 'Rochester, NY'
            startDate = 'September 2022'
            endDate = 'Present'
        />

        <ExperienceWidget
            title = 'Software Engineer Intern'
            employer = 'L3 Harris Technologies'
            description = {`A 7 month internship at L3Harris Technologies doing radio things`}
            descriptionPoints = {[
                `Ported a non-networked desktop application to a full-stack Flask web application to allow multiple users to connect to a sqlite3 database`,
                `Automated the software packaging process for product releases using a Makefile script, reducing manual
 workload from an hour to a few seconds. This encouraged faster corrections based on feedback`,
                `Developed a tool to systematically capture relevant client-side information to aid remote troubleshooting`,
                `Troubleshot configuration issues by communicating directly with vendor`
            ]}
            location = 'Rochester, NY'
            startDate = 'May 2023'
            endDate = 'December 2023'
        />

        <ExperienceWidget
            title = 'Web Developer'
            employer = 'Rochester Institute of Technology'
            description = {`Revamped a part of RIT's Software Engineering department's
                senior project website for RIT.`}
            descriptionPoints = {[
                `Designed and implemented a gantt chart feature to university Reactjs website to assist students and faculty in viewing their tasks in a calendar-type view`
            ]}
            location = 'Rochester, NY'
            startDate = 'June 2024'
            endDate = 'August 2024'
        />

        <ExperienceWidget
            title = 'Grader'
            employer = 'Rochester Institute of Technology'
            description = {`I helped grade for a one month JavaScript summer
                course for incoming students. Course Name: Code Zero.`}
            descriptionPoints = {[
                `Graded student assignments and provided personalized feedback`
            ]}
            location = 'Rochester, NY'
            startDate = 'August 2022'
            endDate = 'August 2022'
        />

        <ExperienceWidget
            title = 'Food Service Worker'
            employer = 'Rochester Institute of Technology'
            description = 'I prepared and served food to customers'
            location = 'Rochester, NY'
            startDate = 'September 2021'
            endDate = 'May 2022'
        />




        {/* <ExperienceWidget
            title = ''
            employer = 'Rochester Institute of Technology'
            description = ''
            location = 'Rochester, NY'
            startDate = ''
            endDate = ''
        /> */}

    </div>

    </>
}


