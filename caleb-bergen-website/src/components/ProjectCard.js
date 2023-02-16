import React from 'react'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { CarouselItem } from 'react-bootstrap';
import '../css/project.css'

function ProjectCard({ Name, Description, Image, Link, GithubLink, imgs, TechUsed }) {
    function openNewLink(e) {
        const value = e.target.value;
        if (value === "progLink") {
            window.open(Link, '_blank');
        } else if (value === "gitLink") {
            window.open(GithubLink, '_blank');
        }

    }
    // console.log(imgs);
    return (
        <Card>
            <Card.Body>
                <Card.Title>{Name}</Card.Title>
                <div className='row'>
                    <div className='col-6'>
                        <Carousel>
                            {imgs?.map((img, index) => {
                                return(
                                    <Carousel.Item>
                                        <img className="d-block w-100 " src={img.img} alt={img.caption} />
                                        <Carousel.Caption className='text-dark project-card-slideshow'>
                                            <h3>{img.caption}</h3>
                                            <p>{img.desc}</p>
                                        </Carousel.Caption>

                                    </Carousel.Item>
                                )  
                            })}
                        </Carousel>
                    </div>
                    <div className='col-6'>
                        <div>
                            <h4>Description:</h4>
                            {Description}
                        </div>
                        <div>
                            <h4>Technologies Used:</h4>
                            {TechUsed?.map((tech, index) => {
                                return (
                                    <Badge pill bg="secondary" className='m-1'>{tech}</Badge>
                                )
                            })
                            }
                        </div>

                    </div>
                </div>
                <Button variant="primary" value="progLink" onClick={openNewLink}>Go to Project</Button>
                <Button variant="primary" value="gitLink" onClick={openNewLink}>Go to Github</Button>
            </Card.Body>

        </Card>
    )
}

export default ProjectCard