import React from 'react'
import { useState, useContext, useEffect  } from 'react'



let Posts = ({loading, posts}) => {     
    
    return (

        posts.map((v, i) => (
            
            <tr key={v.id}>
                <td>{i+1}</td>
                <td>{v.name}</td>
                <td>{v.description}</td>
                <td>{v.owner}</td>            
            </tr>
        ))

    )   
}

export default Posts