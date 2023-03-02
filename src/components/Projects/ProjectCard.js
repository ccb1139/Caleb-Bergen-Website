import React from 'react'
import { Image } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tilt from 'react-parallax-tilt';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { CarouselItem } from 'react-bootstrap';
import '../../css/project.css'


function ProjectCard({ Name, Description, Link, GithubLink, imgs, TechUsed, c_id, dark }) {
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
        <Card className='project-card container' id={c_id}>
            {imgs?.length > 1 ?
            <PhotoProvider>
                <Carousel variant={dark ? "dark ": "light"} className='drop-shadow-filter' interval={5000}>
                    {imgs?.map((img, index) => {
                        return (
                            
                            <Carousel.Item key={index}>
                                <PhotoView index={index} src={img.img}>
                                <Image src={img.img} alt={img.caption} className='d-block w-100 box-shadow-filter' style={{ maxWidth: "", height: "auto", borderRadius: "6px", cursor:"zoom-in" }} />
                                </PhotoView>
                                <div className='text-dark project-card-slideshow carosel-captiom-custom'>
                                    {/* <h3>{img.caption}</h3> */}
                                    <p>{img.desc}</p>
                                </div>
                            </Carousel.Item>
                            
                        )
                    })}
                    

                </Carousel>
                </PhotoProvider>
            : null}
            
            <Card.Body style={{ border: "none" }}>
                <Card.Title style={{ textAlign: "center" }}>{Name}</Card.Title>
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
                                    <Badge pill bg="dark" className='m-1 skill-badge' key={index}>{tech}</Badge>
                                )
                            })
                            }
                        </div>

                    </div>
                </div>
                <div className='row '>
                    <div className='col-12 text-center d-flex justify-content-center'>
                        {GithubLink ? <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">View Project</Tooltip>}>
                            <div className='px-2 ' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'gitLink')}>
                                <Tilt tiltEnable={false} scale={1.1} className="">

                                    <AiFillGithub size={"2em"} />
                                </Tilt>

                            </div>
                        </OverlayTrigger>
                            : null}
                        {Link ? <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">Live Website</Tooltip>}>
                            <div className='px-2 ' style={{ width: 'fit-content', cursor: 'pointer' }} onClick={(e) => openNewLink(e, 'progLink')}>

                                <Tilt tiltEnable={false} scale={1.1} className="">

                                    <FaExternalLinkAlt size={"2em"} />
                                </Tilt>
                            </div>
                        </OverlayTrigger>
                            : null}
                    </div>


                </div>

            </Card.Body>

        </Card>
    )
}

export default ProjectCard