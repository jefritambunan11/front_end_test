import logo from './images/logo.png'
import './App.css'
import { BrowserRouter, Route, Routes, Link, Navigate  } from 'react-router-dom'

import PrivateRouteCheck from './privateRouteCheck'

import LoginScreen from './screens/loginScreen'
import ProjectScreen from './screens/projectScreen'





function App() {	
	return (
		<BrowserRouter>
			<Routes>							
				<Route path="/" element={ 
					<PrivateRouteCheck original_url="main"></PrivateRouteCheck> 
				} 
				/>

				<Route path="/project" element={ 
					<PrivateRouteCheck>
						<ProjectScreen />
					</PrivateRouteCheck>
					
				} />

				<Route path="/login" element={<LoginScreen />} />			
								
			</Routes>   
		</BrowserRouter>
	)
}

export default App

 