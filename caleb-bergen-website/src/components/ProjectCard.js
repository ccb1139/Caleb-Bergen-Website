import React from 'react'
import { Image } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";


import { CarouselItem } from 'react-bootstrap';
import '../css/project.css'

function ProjectCard({ Name, Description, Link, GithubLink, imgs, TechUsed, c_id }) {
    const [formatedDesciption, setFormatedDesciption] = useState("");

    useEffect(() => {

    }, [Description])

    function openNewLink(e, value) {
        // const value = e.target.value;
        // console.log(e);
        if (value === "progLink") {
            window.open(Link, '_blank');
        } else if (value === "gitLink") {
            window.open(GithubLink, '_blank');
        }
    }

    return (
        <Card className='' id={c_id}>
            <Carousel variant="dark" >
                {imgs?.map((img, index) => {
                    return(
                        <Carousel.Item key={index}>
                            <Image src={img.img} alt={img.caption} className='d-block w-100' style={{maxWidth:"", height:"auto"}}/>
                            <Carousel.Caption className='text-dark project-card-slideshow'>
                                <h3>{img.caption}</h3>
                                <p>{img.desc}</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                    )  
                })}
                {/* {paths?.map((path, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <Image src={imgs(path).default} alt={imgs(path).caption} className='d-block w-100' style={{ maxWidth: "", height: "auto" }} />
                        </Carousel.Item>
                    )
                })} */}
   
            </Carousel>
            <Card.Body style={{border:"none"}}>
                <Card.Title style={{textAlign:"center"}}>{Name}</Card.Title>
                <div className='row'>
                    <div className='col-8'>
                        <div>
                            <h4>Description</h4>
                            <p style={{ whiteSpace: "pre-wrap" }}>{Description}</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        
                        <div className='text-end'>
                            <h4>Technologies Used</h4>
                            {TechUsed?.map((tech, index) => {
                                return (
                                    <Badge pill bg="secondary" className='m-1' key={index}>{tech}</Badge>
                                )
                            })
                            }
                        </div>

                    </div>
                </div>
                <div className='row '>
                    <div className='col-12 text-center'>
                        {GithubLink ?  <div className='px-2 d-inline-block' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'gitLink')}>
                            <AiFillGithub size={"2em"} />
                        </div> : null }
                        {Link ? <div className='px-2 d-inline-block' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'progLink')}>
                            <FaExternalLinkAlt size={"2em"} />
                        </div> : null }
                        
                        {/* <div className='px-2 d-inline-block' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'progLink')}>
                            <FaExternalLinkAlt size={"2em"} />
                        </div> */}
                    </div>
                    
                    
                </div>
                
            </Card.Body>

        </Card>
    )
}

export default ProjectCard