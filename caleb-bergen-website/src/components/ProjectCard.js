import React from 'react'
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { CarouselItem } from 'react-bootstrap';

function ProjectCard({ children, Name, Description, Image, Link, GithubLink, imgs }) {
    function openNewLink(e) {
        const value = e.target.value;
        if (value === "progLink") {
            window.open(Link, '_blank');
        } else if (value === "gitLink") {
            window.open(GithubLink, '_blank');
        }

    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{Name}</Card.Title>
                <Card.Text className='container'>
                    <div className='col-6'>
                        <Carousel>
                            {/* <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item> */}
                            {imgs?.map((img, index) => {
                                <Carousel.Item>
                                    <img className="d-block w-100" src={img.img} alt={img.caption} />
                                    <Carousel.Caption>
                                        <h3>{img.caption}</h3>
                                        <p>{img.desc}</p>
                                    </Carousel.Caption>

                                </Carousel.Item>
                            })}
                        </Carousel>
                    </div>
                    <div className='col-6'>
                        {children}
                    </div>
                </Card.Text>
                <Button variant="primary" value="progLink" onClick={openNewLink}>Go to Project</Button>
                <Button variant="primary" value="gitLink" onClick={openNewLink}>Go to Github</Button>
            </Card.Body>

        </Card>
    )
}

export default ProjectCard