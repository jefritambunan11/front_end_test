import React from 'react'
import { useState, useContext, useEffect  } from 'react'
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'

import { 
	Container, Form,  Button,
} from 'react-bootstrap'

import axios_api from '../axios_api'
import {Store} from '../Store'

let Posts = ({loading, posts, _current_page_, _rows_per_page_, _go_to_edit_}) => {         
    let navigate = useNavigate()
    let _starter_num_ = ((_current_page_ * _rows_per_page_) - _rows_per_page_) + 1
    
    return (
        posts.map((v, i) => (            
            <tr key={v.id}>
                <td>{i + _starter_num_}</td>
                <td>{v.name}</td>
                <td>{v.description}</td>
                <td>{v.owner}</td> 
                <td style={actionSty}>
                    <Button 
                        variant="outline-primary" 
                        size="sm" 
                        onClick={() => _go_to_edit_(v.id)} 
                    >
                        Edit
                    </Button> 
                    <Button variant="outline-danger" size="sm" style={{marginLeft:'15px'}}>
                        Delete
                    </Button>                    
                </td>
            </tr>
        ))
    )   
}

export default Posts

let actionSty = {    
    display: 'flex', 
    justifyContent: 'center',
}
