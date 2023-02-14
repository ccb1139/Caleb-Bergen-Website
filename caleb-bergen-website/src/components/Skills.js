import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function Skills() {
  return (
    <div className='container'>
        <div className='row'>
            <h1>Skills</h1>
        </div>
        <div className='row'>
            <div className='col-4'>
                <h3>Front-End</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>HTML</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>React</ListGroup.Item>
                    <ListGroup.Item>Bootstrap</ListGroup.Item>
                    <ListGroup.Item>Node.js</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='col-4'>
                <h3>Back-End</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>Python</ListGroup.Item>
                    <ListGroup.Item>Java</ListGroup.Item>
                    <ListGroup.Item>SQL</ListGroup.Item>
                    <ListGroup.Item>PHP</ListGroup.Item>
                    <ListGroup.Item>MySQL</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='col-4'>
                <h3>Tools</h3>
                <ListGroup variant="flush">
                    <ListGroup.Item>Git</ListGroup.Item>
                    <ListGroup.Item>GitHub</ListGroup.Item>
                    <ListGroup.Item>Visual Studio Code</ListGroup.Item>
                    <ListGroup.Item>Android Studio</ListGroup.Item>
                    <ListGroup.Item>IntelliJ</ListGroup.Item>
                </ListGroup>
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Skills