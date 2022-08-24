import { Helmet } from 'react-helmet-async'
import { useState, useContext, useEffect  } from 'react'
import { 
	BrowserRouter, Route, Routes, Link, useNavigate 
} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { 
	Container, Form,  Button, Col
} from 'react-bootstrap'
import axios from 'axios'

import {Store} from '../Store'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

import logo from '../images/logo.png'


function LoginScreen() {
    let navigate = useNavigate()
    let [loading, setLoading] = useState(false) 
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const {state, dispatch: cxtDispatch} = useContext(Store)

	let submitHandler = async (event) => {
		event.preventDefault()
		setLoading(true)

		let result = await axios.post('Auth/login', {username, password})

		let _user_info_ = {
			username: username,
			access_token: result.data.access_token,
			token_type: result.data.token_type,
		}

        cxtDispatch({
            type: 'USER_SIGNIN',
            payload: {                
                data: _user_info_
            }
        })

        localStorage.setItem('_user_info_', JSON.stringify({
            data: _user_info_ 
        }))

		setLoading(false)
        navigate('/project')		
	}

	let clearTxtbox = () => {
		setUsername('')
		setPassword('')
	}

	return (
		<Container className='small-container'>
			<Helmet>
				<title>Login Page</title>
			</Helmet>		

			<Form style={loginFormSty}>
				
				<Form.Group className='mb-3' controlId='username' >
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" required onChange={(e) => setUsername(e.target.value)} value={username} />
				</Form.Group>
				<Form.Group className='mb-3' controlId="password" >
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
				</Form.Group>

				<div  className='mb-4'>
					<div >
						<Button type="submit" variant="outline-primary" size="sm" onClick={submitHandler}>Sign In</Button>
					
						<Button variant="outline-danger" size="sm" onClick={clearTxtbox} style={{marginLeft:'5px'}}>Clear</Button>
					</div>

					<Loader loading={loading}  />
				</div>
				
			</Form>

			<Footer _designed_by_="Jefri Tambunan" _for_="Tritronik"></Footer>
		</Container>
	)


}

export default LoginScreen


let loginFormSty = {
	backgroundColor: '#fff',
    borderRadius: '10px',    
    borderWidth: '3px',
    borderColor:'#f3f3f3',

	marginTop: '70px',
	paddingTop: '30px',
    paddingBottom: '5px',
    paddingLeft: '50px',
    paddingRight: '50px'

}



