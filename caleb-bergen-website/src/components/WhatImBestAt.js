import React from 'react'
import { Image } from 'react-bootstrap';

function WhatImBestAt({title, img}) {
  return (
    <div className='col-2 p-3'>
        <h5>{title}</h5>
        <Image fluid src={img} rounded className="hover-shadow m-auto" style={{maxHeight:"60px", margin:"auto"}}/>

    </div>
  )
}

export default WhatImBestAt