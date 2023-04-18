import React, { useRef, useState } from 'react'
import { Button, Col, Container, Form, InputGroup, Modal, Nav, NavDropdown, Offcanvas, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import "../sass/logSign.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay} from "swiper";
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/actions/newsAction';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function Header() {
    const [modalShow, setModalShow] = useState(false);
    const [modalSignShow, setModalSignShow] = useState(false);
    const [show, setShow] = useState(false);
    const [visible,setVisible] = useState(false);


    const dispatch = useDispatch();

    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let key = inputRef.current.value;
        // console.log(key);
        dispatch(fetchSearch(key));
        inputRef.current.value ="";
        setVisible(false);
        navigate('/search')
    }

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleVisible = () => setVisible(true);
  const handleInvisible = () => setVisible(false);
  return (
    <>
    <Container fluid className='header__top'>
        <Container fluid='md' >
        <Row>
            <Col xxl='2' xl='2' className='d-none d-xl-block'>
                <div className='top__breaking'>
                    <p>BREAKING NEW</p>
                </div>
            </Col>
            <Col xxl='7' xl='7' className='d-none d-xl-block'>
                <div className='item h-100 d-flex align-items-center'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide><p>Elon Musk says he's cut about 80% of Twitter's staff - CNN</p></SwiperSlide>
                        <SwiperSlide><p>Bitcoin Slips Under $30K, Ether Staking Tokens Take a Beating Ahead of Shapella Upgradev - CoinDesk</p></SwiperSlide>
                        <SwiperSlide><p>Elon Musk says Twitter will finally remove legacy checkmarks on 4/20 - TechCrunch</p></SwiperSlide>
                        <SwiperSlide><p>US spending $5 billion to increase new COVID vaccines' speed of development - Fox Business</p></SwiperSlide>
                        <SwiperSlide><p>China's 'Credit Impulse' Is Picking Up. Here's Why It Matters to Bitcoin - CoinDesk</p></SwiperSlide>
                    </Swiper>
                </div>
            </Col>
            <Col xxl='1' xl='1' md='9' sm="8" className='col-6 drop d-flex align-items-center justify-content-start justify-content-xl-center'>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="English"
                menuVariant="dark"
                >
                <NavDropdown.Item href="#action/3.1">Coming Soon</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Coming Soon
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
                </NavDropdown>
            </Col>
            <Col xxl='2' xl='2' md='3' sm='4' className='col-6 d-flex justify-content-end align-items-end gap-3'>
                <Button className='btn login__btn' onClick={() => setModalShow(true)}>Login</Button>
                <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
                <Button className='btn signup__btn' onClick={() => setModalSignShow(true)}>Sign up</Button>
                <SignUp
        show={modalSignShow}
        onHide={() => setModalSignShow(false)}
      />
            </Col>
        </Row>
        </Container>
    </Container>
   <Container fluid className='header__mid'>
    <Container fluid='md'>
    <Row className='py-5'>
        <Col sm="6" className='col-10 d-flex align-items-center'>
            <div>
                <LinkContainer to={'/'}>
                <img src='https://demo.smartaddons.com/templates/joomla3/sj-thedaily/templates/sj_thedaily/images/styling/red/logo.png' alt=''/>
                </LinkContainer>
            </div>
        </Col>
        <Col sm="6" className='d-none d-sm-flex align-items-center justify-content-end'>
            <form onSubmit={handleSubmit}>
            <InputGroup className='w-100' >
                <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Search"
                ref={inputRef}
                // onSubmit={handleSubmit}
                />
                <Button variant="outline-secondary" id="button-addon1">
                <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
            </form>
        </Col>
        <Col className='small-search d-sm-none col-2 d-flex align-items-center justify-content-end'>
            <i className="bi bi-search" onClick={handleVisible}></i>
        </Col>
        {visible && (
            <div className='fix-search p-3'>
                <div className='fix-close' >
                    <p>SEARCH</p>
                    <i class="bi bi-x-lg" onClick={handleInvisible}></i>
                </div>
                <form onSubmit={handleSubmit} className='mt-3'>
            <InputGroup className='w-100' >
                <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Search"
                ref={inputRef}
                // onSubmit={handleSubmit}
                />
                <Button variant="outline-secondary" id="button-addon1">
                <i className="bi bi-search"></i>
                </Button>
            </InputGroup>
            </form>
            </div>
        )}
    </Row>
    </Container>
   <Container fluid='sm' className="header__menu">
    <Row>
        <Col xl="9" className='d-none d-xl-block'>
            <ul className='menu d-flex justify-content-between align-items-center h-100'>
                <li>
                    <LinkContainer to={'/'}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </li>
                <li><LinkContainer to={`/category/business`}>
                        <Nav.Link>Business</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/entertainment`}>
                        <Nav.Link>Entertainment</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/general`}>
                        <Nav.Link>General</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/health`}>
                        <Nav.Link>Health</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/science`}>
                        <Nav.Link>Science</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/sports`}>
                        <Nav.Link>Sports</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/technology`}>
                        <Nav.Link>Technology</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={'/about'}>
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={'/contact'}>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer></li>
            </ul>
        </Col>
        <Col xl="3" className='col-11'>
        <ul className='links d-flex gap-3 justify-content-xl-end align-items-center h-100 pe-4'>
                <li><a><i className="bi bi-youtube"></i></a></li>
                <li><a><i className="bi bi-facebook"></i></a></li>
                <li><a><i className="bi bi-twitter"></i></a></li>
                <li><a><i className="bi bi-instagram"></i></a></li>
                <li><a><i className="bi bi-linkedin"></i></a></li>
            </ul>
        </Col>
        <Col className='col-1 burger d-xl-none d-block' onClick={handleShow}><i class="bi bi-list"></i></Col>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='menu'>
                <li>
                    <LinkContainer to={'/'}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                </li>
                <li><LinkContainer to={`/category/business`}>
                        <Nav.Link>Business</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/entertainment`}>
                        <Nav.Link>Entertainment</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/general`}>
                        <Nav.Link>General</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/health`}>
                        <Nav.Link>Health</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/science`}>
                        <Nav.Link>Science</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/sports`}>
                        <Nav.Link>Sports</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={`/category/technology`}>
                        <Nav.Link>Technology</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={'/about'}>
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer></li>
                <li><LinkContainer to={'/contact'}>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer></li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Row>
   </Container>
   </Container>
    </>
  )
}

export default Header