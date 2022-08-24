import React from 'react'
import { useState, useContext, useEffect  } from 'react'

import { 
	Container, Form,  Button, Row, Col
} from 'react-bootstrap'

import loader from '../images/loader.gif'

let Loader = (props) => {     

    if (props.loading) {
        return (             
            <Row style={containerLoaderSty}>
                <Col md="1" >
                    <img src={loader} width="20" />
                </Col>
                <Col style={txtLoadingSty}>Please Wait...</Col>
            </Row>
            
        ) 
    } 
}

export default Loader


let containerLoaderSty = {    
    paddingTop: '10px',
}

let txtLoadingSty = {
    fontSize: '10px', 
    paddingTop: '7px',
    marginLeft: '0px'
}