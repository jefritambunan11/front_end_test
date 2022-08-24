import React from 'react'

let Pagination = ({_post_per_page_, _total_posts_, _paginate_}) => {
      
    let pageNumbers = []
    let _max_ = Math.ceil(_total_posts_  / _post_per_page_)

    for (let i=1; i <= _max_; i++) {
        pageNumbers.push(i)
    }
  
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li 
                            key={number}
                            className="page-item"
                        > 
                            <a 
                                onClick={() => _paginate_(number) }
                                href="#" 
                                className="page-link"
                            >
                                {number}
                            </a>
                        </li>                        
                    ))
                }
             
            </ul>
        </nav>
        
    )
}

export default Pagination


