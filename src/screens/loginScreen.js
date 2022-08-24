import { Helmet } from 'react-helmet-async'
import { useState, useContext, useEffect  } from 'react'
import { 
	BrowserRouter, Route, Routes, Link, useNavigate 
} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { 
	Container, Form,  Button,
} from 'react-bootstrap'
import axios from 'axios'

import {Store} from '../Store'
import Footer from '../components/Footer'

function LoginScreen() {
    let navigate = useNavigate()
    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')

    const {state, dispatch: cxtDispatch} = useContext(Store)

	let submitHandler = async (event) => {
		event.preventDefault()

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

        navigate('/project')

		console.log("hasil api login")
		console.log(result)
		console.log("Token")
		console.log(result.data.access_token)
		return 
		
	}

	let clearTxtbox = () => {
		setUsername('')
		setPassword('')
	}

	return (
		<Container className='small-container mb-5'>
			<Helmet>
				<title>Login Page</title>
			</Helmet>
		

			<Form style={fromSty}>
				<Form.Group className='mb-3' controlId='username' >
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" required onChange={(e) => setUsername(e.target.value)} value={username} />
				</Form.Group>
				<Form.Group className='mb-3' controlId="password" >
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
				</Form.Group>
			</Form>

			<div  className='mb-5'>
				<Button type="submit" onClick={submitHandler}>Sign In</Button>
				<Button variant='danger' onClick={clearTxtbox} style={{marginLeft:'5px'}}>Clear</Button>
			</div>



			<Footer designedby="Jefri Tambunan" _for_="Tritronik"></Footer>
		</Container>
	)


}

export default LoginScreen


let fromSty = {
	marginTop: '70px'
}

let containerBtnSty = {
	display: 'flex',
	justifyContent: 'space-between',
}