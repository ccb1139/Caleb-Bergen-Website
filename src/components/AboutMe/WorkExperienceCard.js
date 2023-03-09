import React from 'react'
import Card from 'react-bootstrap/Card';

function WorkExperienceCard({JobTitle, Company, StartDate, EndDate, Description, TechUsed}) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='row'>
            <div className='col-auto'>
                <h3>{JobTitle}</h3>
                <h5 className="mb-2 text-muted">{Company}</h5>
            </div>
            <div className='col-auto ms-auto'>
                <h5>{StartDate} - {EndDate}</h5>
            </div>
            </Card.Title>
            <div>
                    <h4>Description:</h4>
                    {Description.map((desc, index) => {
                        return (
                            <p>{desc}</p>
                        )
                    })}
                </div>

        </Card.Body>
    </Card>
  )
}

export default WorkExperienceCard