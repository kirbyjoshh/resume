import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//SIDE BAR PROFILE SECTION

function ProfileImage() {
  return <img src="https://i.ibb.co/LzmGsYV4/Profile.jpg" alt="Profile Picture" />
}
function FL_Name(props) {
  return <h2 className="name">{props.name}</h2>
}

function Profile() {
  return <div className="Profile">
    <ProfileImage />
    <FL_Name name="Kirby" />
    <FL_Name name="Bondoc" />
  </div>
}

//SIDE BAR CONTACT SECTION

function Contact() {
  return <div className="SideContact">
    <h1>Contact</h1>
  </div>
}
function InfoTitle(props) {
  return <h3>{props.title}</h3>
}
function InfoDescription(props) {
  return <p>{props.Description}</p>
}
function ContactInfo() {
  return <div className="Infocontacts">
    <InfoTitle title="Address" />
    <InfoDescription Description="Poblacion, Sto. Tomas, Pampanga" />
    <InfoTitle title="Phone" />
    <InfoDescription Description="+639294666869" />
    <InfoTitle title="E-mail" />
    <InfoDescription Description="kjmbondoc.student@ua.edu.ph" />
  </div>
}
//SIDE BAR SKILL SECTION
function SkillSection() {
  return <div className="SideSkills">
    <h1>Skills</h1>
  </div>
}

function SkillList(props) {
  return <ul>
    <li>{props.info}</li>
  </ul>

}

function DivSkill() {
  return <div className="Infoskills">
    <SkillList info="Certified IT Specialist in Database Administration" />
    <SkillList info="Proficient in creating and designing user-friendly front-end web experiences." />
    <SkillList info="Experienced in business analysis, including project planning and requirements gathering." />
    <SkillList info="Expertise in developing and executing digital media strategies from concept to completion." />
    <SkillList info="Demonstrated ability to complete projects on time and adapt quickly to new tools and changing requirements." />

  </div>
}
//MAIN CONTENT SECTION

function Heading() {
  return <div className="Heading">
    <h1>
      A multidisciplinary professional skilled in building and optimizing both technical systems and engaging digital content. I leverage a unique blend of expertise in web development, database management, and business analysis to deliver efficient solutions, complemented by a creative talent for digital media and graphic design.
    </h1>
  </div>
}
//EDUCATION SECTION
function Course(props) {
  return <h1>{props.Course}</h1>
}
function SchoolAdd(props) {
  return <p>{props.Add}</p>
}

function EducationContent() {
  return <div className="EducationContent">
    <Course Course="Bachelor of Science in Information Technology" />
    <SchoolAdd Add="University of The Assumption - Unisite Subdivision, Barangay Del
                Pilar City of San Fernando, Pampanga, Philippines"/>

    <Course Course="Senior High School" />
    <SchoolAdd Add="University of The Assumption - Unisite Subdivision, Barangay Del
                Pilar City of San Fernando, Pampanga, Philippines"/>
  </div>
}

function EducationTitle() {
  return <div className="MainEducation">
    <hr />
    <h1>Education</h1>
    <hr />
  </div>
}
function Leftside() {
  return <div className="leftside"></div>
}
function Education() {
  return <div className="Education">
    <Leftside />
    <EducationContent />
  </div>
}
function EducInfo() {
  return <div className="EducationInfo">
    <Education />
  </div>
}
// EXPERIENCE SECTION

function ExperienceTitle() {
  return <div className="MainExperience">
    <hr />
    <h1>Experience</h1>
    <hr />
  </div>
}
function YearDate(props) {
  return <div className="leftDate">
    <p>{props.Year}</p>
  </div>
}



//REUSABLE COMPONENT FOR JOBENTRY
function JobList() {
  return <div className="ExperienceInfo">
    <div className="Exp">
      <YearDate Year="2033 - Current" />
      <ExperienceContent
        JobTitle="Senior Database Administrator"
        Company="Oracle Corporation."
        Desc1="Managed database performance, availability, and security, implementing robust backup and disaster recovery plans."
        Desc2="Architected and deployed database solutions for new applications, optimizing schemas and data models to meet business needs."
        Desc3="Provided expert-level support and mentorship to a team of database administrators, resolving complex issues and fostering professional growth." />
    </div>

    <div className="Exp">
      <YearDate Year="2028 - 2033" />
      <ExperienceContent
        JobTitle="Software Developer (Front-End)"
        Company="Sprout Solutions, Inc."
        Desc1="Developed and maintained user-facing web applications, ensuring high performance, responsiveness, and seamless user experience across devices."
        Desc2="Collaborated closely with back-end developers and UI/UX designers to integrate new features and enhance existing functionalities."
        Desc3="Led the implementation of reusable components and libraries, standardizing the codebase and accelerating development for the entire team." />
    </div>

    <div className="Exp">
      <YearDate Year="2027 - 2028" />
      <ExperienceContent
        JobTitle="Junior Developer"
        Company="Cloudstaff Inc."
        Desc1="Contributed to the development and maintenance of software applications, working as part of a team to deliver high-quality code under the guidance of senior developers."
        Desc2="Assisted in the testing, debugging, and deployment of software solutions, gaining hands-on experience with the full software development lifecycle."
        Desc3="Participated in professional development programs, attending training sessions and workshops to expand skills in new programming languages, frameworks, and tools." />

    </div>

  </div>
}

function ExperienceContent(props) {
  return <div className="ExpContent">
    <h1>{props.JobTitle}</h1>
    <p>{props.Company}</p>
    <ul>
      <li>{props.Desc1}</li>
      <li>{props.Desc2}</li>
      <li>{props.Desc3}</li>
    </ul>

  </div>
}

//MAIN DISPLAY
function SideBar() {
  return <div className="side-content">
    <Profile />
    <Contact />
    <ContactInfo />
    <SkillSection />
    <DivSkill />
  </div>

}

// MAIN FUNCTION
function App() {
  return (

    <div className="container">
      {/*LEFT SIDE BAR CONTENT */}
      <SideBar />
      {/*END OF LEFT SIDE BAR*/}

      {/*RIGHT SIDE MAIN CONTENT */}
      <div className="main-content">
        <Heading />
        {/*EDUCATION CONTENT */}
        <EducationTitle />
        <EducInfo />

        {/*EXPERIENCE CONTENT */}
        <ExperienceTitle />

        {/*JOB ENTRIES */}
        <JobList />
      </div>
    </div >
  )
}

export default App
