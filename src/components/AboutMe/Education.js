import React from 'react'
import Card from 'react-bootstrap/Card';


function Education() {
  return (
    <div className='container'>
        <div className='row'>
        <Card>
            <Card.Body>
                <Card.Title style={{textAlign:"center"}}>Education</Card.Title>
                <hr></hr>
                <Card.Title>University of Massachusetts Lowell</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Lowell, MA</Card.Subtitle>
                <Card.Text>
                    <h4>Bachelor of Science in Computer Science</h4>
                    <h5>May 2021</h5>
                    <p>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Architecture, Operating Systems, Computer Networks, Artificial Intelligence, Machine Learning, Computer Graphics, Computer Vision, Web Development, Mobile Development, Software Testing, Software Design, Software Project Management, Software Quality Assurance, Software Security, Software Engineering Capstone</p>
                </Card.Text>

            </Card.Body>
        </Card>
        </div>
    </div>
    

  )
}

export default Education