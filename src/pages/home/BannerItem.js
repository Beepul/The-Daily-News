import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { clickedNews } from '../../redux/slice/newsSlice'
import { LinkContainer } from 'react-router-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const BannerItem = ({ban}) => {
    // const [firstSlide, setFirstSlide] = useState([]);
    // const [secondSlide, setSecondSlide] = useState([]);
    // const [lastSlide, setLastSlide] = useState([]);

    // useEffect(()=>{
        // const firstTwo = ban.slice(0,2);
        // setFirstSlide(firstTwo);
        // const midOne = ban.slice(2,3);
        // setSecondSlide(midOne);
        // const lastTwo = ban.slice(3,5);
        // setLastSlide(lastTwo);
    // },[ban])

        const firstTwo = ban.slice(0,2);
        const midOne = ban.slice(2,3);
        const lastTwo = ban.slice(3,5);



    const dispatch = useDispatch();

    const handleClick = (article) =>{
        dispatch(clickedNews(article))
    }
   
  return (
    <>
        <Row className='banner__grid d-flex'>
                            <Col lg="3" className='h-100 d-flex flex-column gap-3'>
                                {firstTwo.map((item,index)=>(
                                     <LinkContainer key={index} to={'/details'} onClick={()=>handleClick(item)}>
                            <div className='item h-50'>
                                <img
                                src={item.urlToImage ? item.urlToImage : '/assets/placeholder.jpg'}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                </Carousel.Caption>
                                <div className='overlay'></div>

                            </div>
                            </LinkContainer>
                                ))}
                            </Col>
                            <Col lg="6" className='h-100 '>
                            <LinkContainer to={'/details'} onClick={()=>handleClick(midOne[0])}>
                            <div className='item h-100'>
                                <img
                                src={midOne[0].urlToImage ? midOne[0].urlToImage : '/assets/placeholder.jpg' }
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>{midOne[0].title}</h3>
                                <p>{midOne[0].description}</p>
                                </Carousel.Caption>
                                <div className='overlay'></div>
                            </div>
                            </LinkContainer>
                            </Col>
                            <Col lg="3" className='h-100 d-flex flex-column  gap-3'>
                                {lastTwo.map((item,index)=>(
                                     <LinkContainer key={index} to={'/details'} onClick={()=>handleClick(item)}>
                            <div  className='item h-50'>
                         
                                <img
                        
                                src={item.urlToImage ? item.urlToImage : '/assets/placeholder.jpg'}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                </Carousel.Caption>
                                <div className='overlay'></div>

                            </div>
                            </LinkContainer>
                                ))}
                            </Col>
                        </Row>
    </>
  )
}

export default BannerItem