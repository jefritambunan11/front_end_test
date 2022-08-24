import React from 'react'
import {  
    Row,
} from 'react-bootstrap'

function Footer(props) {
    return (
        <Row className='mb-3' >
            <div style={style}>Front End Test by 
            <a style={linkedinSty} 
                href="https://www.linkedin.com/in/jefri-ari-aquila-tambunan-805334173/"
                target="_blank"
            > 
                {` ${props._designed_by_}  `}
            </a>
            for {props._for_}</div>
        </Row>
    )
}


export default Footer

let style = {
    fontSize: '11px',
    display: 'flex', 
    justifyContent: 'center',
}

let linkedinSty = {
    marginLeft: '3px',
    marginRight: '3px'
}