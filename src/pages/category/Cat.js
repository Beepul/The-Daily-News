import React, { useState } from 'react';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { clickedNews } from '../../redux/slice/newsSlice';
import { LinkContainer } from 'react-router-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';




const Cat = ({news}) => {
    const [currentPage,setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = news.slice(firstIndex, lastIndex);
    const nPages = Math.ceil(news.length / recordsPerPage);
    const numberOfPages = [...Array(nPages + 1).keys()].slice(1);

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.news.isLoading);
    // const isLoading = true
   

    const formatDate = (dateString) => {
        const dateObject = moment(dateString);
        const formattedDate = dateObject.format('ddd, DD MMMM YYYY HH:mm');
        return formattedDate;
    }
    const handleClick = (article) =>{
        dispatch(clickedNews(article))
    }

    const prePage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
    }
    const nextPage = () => {
        if(currentPage !== nPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const changeCurrentPage = (id) => {
        setCurrentPage(id)
    }

  return (
    <>
    {records.length === 0 || isLoading ? 
    <div className='custom-container'>
      <div className="custom-loader"></div>
    </div>
    : records.map((item, index) => (
      
        <LinkContainer to={'/details'} key={index} onClick={()=>handleClick(item)}>
    <div className='cat__con mb-4 d-flex gap-4' >
        <div className='cat__img'>
          <LazyLoadImage 
           key={item.title}
           src={item.urlToImage ? item.urlToImage : '/assets/placeholder.jpg'}
           height={200}
           width={333}
           effect='blur'
          
          />
        </div>
        <div className='cat__text'>
        <div className='cat__details'>
            <h4>{item.title}</h4>
            <div className='d-flex gap-3 mb-3'>
            <p>{formatDate(item.publishedAt)}</p>
            <p>By</p>
            <p>{item.source.name}</p>
            </div>
        </div>
        <div className='cat__desc d-none d-md-block'>
            <p>{item.description}</p>
        </div>
        </div>
    </div>
        </LinkContainer> 
    ))}
    {
      records.length === 0 ? '' :
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous" onclick="{prePage}">
        <span aria-hidden="true">«</span>
      </a>
    </li>

    { numberOfPages && numberOfPages.map((number,index) => (
        <li className={`page-item ${currentPage === number ? 'active' : '' }`} key={index}>
            <a className="page-link" href="#" onClick={()=>changeCurrentPage(number)}>{number}</a>
        </li>
    ))}
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onClick={nextPage}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

    }
    </>
  )
}

export default Cat