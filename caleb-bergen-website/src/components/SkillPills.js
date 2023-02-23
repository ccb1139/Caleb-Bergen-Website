import React from 'react'
import Badge from "react-bootstrap/Badge";
import '../css/project.css'

function SkillPills({skills}) {
  return (
    <>
        {skills?.map((skill, index) => {
            return (
                <Badge key={index} pill bg="secondary" className="skill-pill m-1">
                    {skill}
                </Badge>
            );
        })
        }
    </>
  )
}

export default SkillPills