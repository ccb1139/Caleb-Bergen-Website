import React from 'react'
import WorkExperienceCard from './WorkExperienceCard'
import Card from 'react-bootstrap/Card';

function Work() {
  const CodeWizBullets = [
    "•	Educated k-12 students based off the CodeWizHQ curriculum and the S.P.I.C.E (Storytelling, Positivity, Interactivity, Control, Excitement) teaching model.",
    "•	Subjects taught include Intro to programming, Python, Java, Scratch, HTML, CSS, JavaScript, Roblox Studio, and Minecraft among other subjects.",
    "•	Promoted a positive and productive learning environment for students to learn and grow in.",
  ];
  const UMLBullets = [
    "•	Responsible for setting up and installing computer systems in preparation for an upcoming semester.",
    "•	Assisted in securing computer infrastructure after significant computer security breaches.",
    "•	Experience working with computer podiums in a classroom setting, including setting up and troubleshooting hardware and software issues, and providing technical support to students and teachers."
  ];

  return (
    <div className='container'>
        <div className='row'>
          <Card.Title style={{textAlign:"center"}}>Work Experience</Card.Title>
          <hr style={{marginTop:"16px"}}></hr>
            <WorkExperienceCard 
            JobTitle={"Instructor"} 
            Company={"CodeWizardsHQ"}
            StartDate={"May 2022"}
            EndDate={"Present"}
            Description={CodeWizBullets}
            >

            </WorkExperienceCard>
            <WorkExperienceCard 
            JobTitle={"Information Technology Intern"} 
            Company={"University of Massachusetts Lowell"}
            StartDate={"May 2021"}
            EndDate={"August 2021"}
            Description={UMLBullets}
            >

            </WorkExperienceCard>
        </div>
    </div>
  )
}

export default Work