import React from "react";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([...languages, ...frameworks, ...databases, ...tools]);
  }, []);
  const languages = [ "HTML5", "CSS", "JavaScript", "Python", "C++", "Java", "Haskell", "TypeScript"];
  const frameworks = ["React", "Bootstrap", "Tailwind CSS", "Node.js", "JQuery", "Bootstrap"];
  const databases = ["MongoDB", "MySQL", "PostgreSQL", "SQLite"];
  const tools = ["Git", "GitHub", "VS Code", "Visual Studio", "Jupyter Notebook", "Heroku", "Firebase", "Linux", "Windows", "MacOS"];

  

  return (
    <div className="container">
      <div className="row">
        <Card>
          <Card.Body>
            <Card.Title>
              Skills
              <Dropdown as={ButtonGroup}>
                <Button variant="success">Split Button</Button>

                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>  
            </Card.Title>
            <Card.Text>
              
              {skills?.map((skill, index) => {
                return (
                  <Badge pill bg="secondary" className="m-1">
                    {skill}
                  </Badge>
                );
              })}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
