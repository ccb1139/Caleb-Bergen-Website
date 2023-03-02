import React, { useState } from "react";
import { Image } from "react-bootstrap";

const ResumeImage = ({ src, alt, height }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: hover ? "1" : "0",
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "24px",
  };

  return (
    <div style={{ position: "relative" }}>
      <Image
        className="ResumeIMG"
        fluid
        src={src}
        alt={alt}
        style={{ height: `${height}px` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div style={overlayStyle}>
        <p style={textStyle}>Click to open</p>
      </div>
    </div>
  );
};

export default ResumeImage;
