import { 
	Container, Form,  Button, Row, Col
} from 'react-bootstrap'

import Tabel from 'react-bootstrap/Table'

import { useNavigate, useLocation, Link, useParams } from 'react-router-dom'

import { useState, useContext, useEffect  } from 'react'
import axios_api from '../axios_api'

import Footer from '../components/Footer'
import Posts from '../components/Posts' 
import Pagination from '../components/Pagination' 

import {Store} from '../Store'
import Loader from '../components/Loader'


function ProjectFormNewScreen() {
    let navigate = useNavigate()
    let [loading, setLoading] = useState(false)     

    let params = useParams()
    let { id } = params
    
    const { state } = useContext(Store)
    let {_user_info_ } = state     
    let _token_ = "" 
    
    if (_user_info_) { 
        if (_user_info_.data.access_token) { 
            _token_ = _user_info_.data.access_token
        }
    }

    let {_one_product_selected_} = state     
    let ops = _one_product_selected_.data

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [component, setComponent] = useState("")

  

    let submitHandler = async (event) => {        
        event.preventDefault() 
        setLoading(true)

        let _data_ = {
            name,
            description,
            component,
        }

        let _config_token_ = {
            headers: { Authorization: `Bearer ${_token_}` }
        }
        
        let res = ""
        
        res = await axios_api.post('v1/projects/', _data_, _config_token_)        

        if (res.data) {
            setLoading(false)
            navigate('/project')
        }
    }

    let cancelForm = () => {
        document.location = "/project"
    }
    

    return (
		<Container className='large-container mt-5'>  
            <div style={containerFormSty}>
                <h2>Add New Project</h2>
                <Form style={{maxWidth: '97%'}} onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="name">                    
                        <Form.Text className="text-muted" style={{fontSize:'10px'}}>
                            Enter a name of project
                        </Form.Text>
                        <Form.Control type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">        
                        <Form.Text className="text-muted" style={{fontSize:'10px'}}>
                            Enter a description of project
                        </Form.Text>            
                        <Form.Control type="name" placeholder="Description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="component">        
                        <Form.Text className="text-muted" style={{fontSize:'10px'}}>
                            Enter a component name of project
                        </Form.Text>            
                        <Form.Control type="name" placeholder="Component" onChange={(e) => setComponent(e.target.value)} value={component} />
                    </Form.Group>

                    <Row style={{marginTop:'20px'}}>
                        <Col md="6"  className="d-grid gap-2">
                            <Button 
                            type="submit" 
                            variant="outline-primary" 
                            size="sm" 
                            >
                                Save
                            </Button>                        
                        </Col>  

                        <Col md="6"  className="d-grid gap-2">
                            <Button                                 
                                variant="outline-warning" 
                                size="sm"
                                onClick={() => cancelForm()}
                            > 
                                Cancel
                            </Button>
                        </Col>                      

                        <Loader loading={loading}  />
                        
                    </Row>
    
                </Form>    

            </div>
            
			<Footer _designed_by_="Jefri Tambunan" _for_="Tritronik" />
		</Container>
	)
}

export default ProjectFormNewScreen

let addNewBtn = {
    marginTop: '50px',
    marginBottom: '20px',
    borderRadius: '10'
}

let productListTbl = {    
    borderRadius: '10'
}

let containerFormSty = {
    backgroundColor: '#fff',    
    borderRadius: '10px',    
    borderWidth: '3px',
    borderColor:'#f3f3f3',
    
    paddingTop: '20px',
    paddingBottom: '25px',
    paddingLeft: '20px'
}