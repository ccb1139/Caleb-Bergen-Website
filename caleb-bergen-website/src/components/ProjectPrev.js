import React, { useState, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import Collapse from "react-bootstrap/Collapse";
import { AiOutlineDown } from "react-icons/ai";

function ProjectPrev({ title, img, description, link }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const target = useRef(null);

  return (
    <div className="col-4 prog-prev cursor-change" style={{cursor:"pointer"}}>
        <Link to="/projects" className="reset-a col-4 cursor-change">
            <h5>{title}</h5>
            <Image
            fluid
            src={img}
            rounded
            className="hover-shadow m-auto m-1"
            style={{ height: "150px", margin: "auto" }}
            />
        </Link>
    
    </div>
  );
}

export default ProjectPrev;
