import React from "react";
import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from "react-bootstrap/Card";
import SkillPills from "../SkillPills";
import '../../css/project.css'

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([...languages, ...frameworks, ...databases, ...tools]);
  }, []);
  const skillCategories = ["All", "Languages", "Frameworks", "Databases", "Tools"];
  const languages = [ "HTML5", "CSS", "JavaScript", "Python", "C++", "Java", "Haskell", "TypeScript"];
  const frameworks = ["React", "Bootstrap", "Tailwind CSS", "Node.js", "JQuery", "Bootstrap"];
  const databases = ["MongoDB", "MySQL", "PostgreSQL", "SQLite"];
  const tools = ["Git", "GitHub", "VS Code", "Visual Studio", "Jupyter Notebook", "Heroku", "Firebase", "Linux", "Windows", "MacOS"];

  // {skills?.map((skill, index) => {
  //   return (
  //     <Badge pill bg="secondary" className="m-1">
  //       {skill}
  //     </Badge>
  //   );
  // })}

  return (
    <div className="container">
      <div className="row">
        <Card>
          <Card.Body>
            <Card.Title style={{textAlign:"center"}}>
              Skills
              
            </Card.Title>
            <hr></hr>
            <Tab.Container id="left-tabs-example" defaultActiveKey="All">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    {skillCategories?.map((category, index) => {
                      return (
                        <Nav.Item>
                          <Nav.Link eventKey={category}>{category}</Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    
                    <Tab.Pane eventKey="All">
                      <SkillPills skills={skills} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Languages">
                      <SkillPills skills={languages} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Frameworks">
                      <SkillPills skills={frameworks} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Databases">
                      <SkillPills skills={databases} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Tools">
                      <SkillPills skills={tools} />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Skills;
