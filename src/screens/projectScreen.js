import { 
	Container, Form,  Button
} from 'react-bootstrap'


import Tabel from 'react-bootstrap/Table'

import { useNavigate, useLocation, Link } from 'react-router-dom'

import { useState, useContext, useEffect  } from 'react'
import axios_api from '../axios_api'

import Footer from '../components/Footer'
import Posts from '../components/Posts' 
import Pagination from '../components/Pagination' 

import {Store} from '../Store'

function ProjectScreen() {
    let navigate = useNavigate()

    let [posts, setPosts] = useState([])
    let [loading, setLoading] = useState(false)
    let [currentPage, setCurrentPage] = useState(1)
    let [postPerPage, setPostPerPage] = useState(5)

    
    const {state, dispatch: cxtDispatch} = useContext(Store)
    let { _user_info_ } = state     
    let _token_ = "" 

    if (_user_info_) { 
        if (_user_info_.data.access_token) { 
            _token_ = _user_info_.data.access_token
        }
    } 

    useEffect(() => {
        let fetchPosts = async () => {
            setLoading(true) 
            
            let _config_token_ = {
                headers: { Authorization: `Bearer ${_token_}` }
            }
            
            let res = await axios_api.get('v1/projects/', _config_token_)

            setPosts(res.data.content)
            setLoading(false)
        }

        fetchPosts()
    }, [])

    let paginate = (pageNumber) => setCurrentPage(pageNumber)

    let getParticularProject = async(_id_) => {
        let _config_token_ = {
            headers: { Authorization: `Bearer ${_token_}` }
        }
        
        let res = await axios_api.get(`v1/projects/${_id_}`, _config_token_)

        cxtDispatch({
            type: 'ONE_PRODUCT_SELECTED',
            payload: {                
                data: res.data
            }
        })

        localStorage.setItem('_one_product_selected_', JSON.stringify({
            data: res.data 
        }))

        navigate(`/project_form/${_id_}`)
    }


    let indexOfLastPost = currentPage * postPerPage
    let indexOfFirstPost = indexOfLastPost - postPerPage
    let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)  

    return (
		<Container className='large-container'>
            <a href="/project_form/0">            
                <Button variant="outline-primary"  style={addNewBtn}>
                    Add New
                </Button>
            </a>
            
            <Tabel hover style={productListTbl} >
                <thead>
                    <tr>
                        <th>#</th> 
                        <th>Name</th> 
                        <th>Description</th> 
                        <th>Owner</th>                     
                        <th>Action</th>                     
                    </tr> 
                </thead>
                <tbody> 
                    <Posts loading={loading} posts={currentPosts} _current_page_={currentPage} _rows_per_page_={postPerPage} _go_to_edit_={getParticularProject} /> 
                </tbody>
            </Tabel>
            <Pagination _post_per_page_={postPerPage} _total_posts_={posts.length} _paginate_={paginate}  />
			<Footer _designed_by_="Jefri Tambunan" _for_="Tritronik" />
		</Container>
	)
}

export default ProjectScreen

let addNewBtn = {
    marginTop: '30px',
    marginBottom: '20px',
    borderRadius: '10'
}

let productListTbl = {    
    backgroundColor: '#fff',    
    borderRadius: '10px',    
    borderWidth: '3px',
    borderColor:'#f3f3f3' 

}