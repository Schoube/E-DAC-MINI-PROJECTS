import './App.css'
import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import image from './services.jpg';
import plastics from './Plastic.jpg';
import iron from './Iron.jpg';
import image1 from "./carousel_img2.jpg";
import image2 from "./carousel_img1.jpg";
import image3 from "./carousel_img3.jpg";
import fpup from "./freepick.jpeg";
import Imgwieghing from './weighing.jpg';
import Pricing from './Pricing.js';
import ImgMoney from './money.jpg'
// import Form from './Form';
import Form from "./FormNew";
import "react-scroll";
import { useState } from 'react';
import Signup from "./Signup";
import { useWindowScroll } from "react-use"
// import Formfinal from "../src/Formvalidation/App";







function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Navbar />
          <Contactus />
          <MyCarousel />
          <Howwework />
          <InfoCards />
          <Pricing />
        </Route>
        <Route path="/Services">
          <Navbar />
          <Services />
          <FreePickupService />
          <AccurateWieght />
          <RightValue />
          {/* <Form /> */}
          <Form />
          {/* <Formfinal/> */}
        </Route>
        <Route path="/Signup">
        <Navbar />
          <Signup />
        </Route>
      </Router>
    </div>

  );
}


function Navbar() {
  
  return (
    <div className="container-fluid">
      <nav class="navbar a.navbar-brand navbar-expand-sm navbar-trans navbar-light bg-light shadow p-1  bg-white rounded fixed-top">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style={{
          justifyContent: "left", alignItems: "left",
          height: "4rem"
          , fontSize: "1.5rem", fontFamily: "serif"
        }}>
          <ul class="navbar-nav" >
            <li class="nav-item active">
              <a class="nav-link" href="/" className='navbartags' style={{ color: 'green',textDecoration: "none"}}>Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">    {/*onClick='Services.js'*/}
              <a class="nav-link" href="Services" className='navbartags' style={{ color: 'green', textDecoration: "none" }}>Services</a>
            </li>
            {/* <li class="nav-item" >
              < a class="nav-link" className='navbartags' ></a>
            </li> */}
          </ul>
        </div>

        <a class="navbar-brand" href="#" style={{
          fontFamily: "cursive",
          padding: "15px", fontSize: "3.5rem", color: "green", justifyContent: "center", alignItems: "center", position: 'absolute', right: '600px'
        }}>EGOS</a>
        {/* <button type="button" className='btn btn-danger' style={{ position: 'absolute', right: '100px' }}>Log In</button> */}
        <a href="Signup"><button type='button' className='btn btn-success'>Register</button>
        </a> </nav>
    </div>
  );
}

function Contactus() {
  return (
    <div>
      <h5 className="bg-success col-12  d-flex fixed-top" style={{ position: 'absolute', top: '75px', color: 'white' }} >Contact Us : 123456789 </h5>
    </div>
  )
}

function Howwework() {
  return (
    <div>

      <h3 className='hwwrk'> What We Do  </h3>
      <div className='d-flex justify-content-center, align-item-center, content'>
        <p className="content" style={{ position: 'relative', top: '150px' }}>
          We intend to help out busy people to collect their recyclables by offering free pickup service.
          We work as a ‘Recyclable Material Collector’ by offering doorstep collection service for individual houses, societies, organizations and industries.
          Initially we started our services by collecting the old newspapers, milk packets and plastic bottles by raising awareness about the importance of recycling.
          We collect the recyclable material from consumer then send to respective manufacturing plant to make the new products.
          We offer free pickup service, accurate weight and right value for the recyclable materials with complimentary gift conveying social message to plant the trees and save the environment.
          It’s simple to being eco-friendly; give your recyclables old newspapers, milk packets and plastic bottles in a most environment friendly manner.
          We invite you to join our hands and try to help us in recycling management.
        </p>
      </div>
    </div>
  )
}


function InfoCards() {
  return (
    <div className="" style={{ position: 'absolute', top: '1100px', marginLeft: '100px',flexWrap:"wrap" }}>
      <div className="row justify-content-between cardstyle">
        <div>
          <NewsPaper />
        </div>
        <div>
          <Plastics />
        </div>
        <div>
          <Iron />
        </div>
      </div>
    </div>
  )
}

function NewsPaper() {

  return (
    <div className='card ' style={{ height: '470px', width: '450px',flexWrap:"wrap"}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title >NewsPaper</Card.Title>
        <Card.Text>
          The paper you read today is waste for you tomorrow,
       <br /> on the off chance that you are intending to throw away, at that point stop and think…
    </Card.Text>
      </Card.Body>
    </div>
  )
}


function Plastics() {

  return (
    <div className='card' style={{ height: '470px', width: '450px' }}>
      <Card.Img variant="top" src={plastics} stlye={{ width: '100px', height: '100px',flexWrap:"wrap" }} />
      <Card.Body>
        <Card.Title>Plastics</Card.Title>
        <Card.Text>
        Plastic recycling is the process of recovering scrap or waste plastic and reprocessing the material into useful products.
    </Card.Text>
      </Card.Body>
    </div>
  )
}

function Iron() {

  return (
    <div className='card' style={{ height: '470px', width: '450px' }}>
      <Card.Img variant="top" src={iron} stlye={{ width: '100px', height: '38px',flexWrap:"wrap" }} />
      <Card.Body>
        <Card.Title>Iron</Card.Title>
        <Card.Text>
        Recycling metal substitutes the need to produce virgin metal.
         Recycling metals also requires less energy than producing new metals.
    </Card.Text>
      </Card.Body>
    </div>
  )
}

function MyCarousel() {
  return (
    <div className="fixed-top shadow p-1 " style={{ position: 'absolute', top: '100px' }}>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img style={{filter:'brightness(50%)'}} width={846} height={600} fluid
            className="d-block w-100"
            src={image1}
            alt="First slide" 
          />
          <Carousel.Caption>
            <h3 style={{color:'#FFFE33',fontSize:"4rem",fontFamily:"cursive"}}>WE ARE ECOGREEN OPTIMUM SOLUTION</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img style={{filter:'brightness(50%)'}} width={846} height={600} fluid
            className="d-block w-100"
            src={image2}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3 style={{color:'ROYALBLUE',fontSize:"4rem",fontFamily:"cursive"}}>WE TURN YOUR WASTE TO...</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img style={{filter:'brightness(50%)'}} width={846} height={600} fluid
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <h3 style={{color:'lightgreen',fontSize:"4rem",fontFamily:"cursive"}}> NEW PRODUCTS</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}



function Services() {
  return (
    <div className='services col-12 '>
      <h2 style={{fontSize:"3rem"}}>Services</h2>
    </div>

  );
}

// function TeamMember(){
//   return(
//     <div className="row bg-primary" style={{height:"350px"}}>
//        <div className="col-3"></div>
//        <div 
//        className="col-6 d-flex flex-column align-items-center justify-content-center">
          
//           </div>
//        <div className="col-3"></div>
//     </div>
//   );
// }

function FreePickupService() {
  return (
    <div className='row'>
      <div className='col-4' style={{ position: 'relative', top: '100px' }}>
        <img src={fpup} />  
        </div>
      <div className='col-4' style={{ position: 'relative', top: '150px', left: '300px' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'cursive' }}> Free Pick Up</h1>
      </div>

      <div style={{ position: 'relative', top: '200px', right: '350px', fontSize: '1.4rem', fontFamily: 'cursive' }}>
        <br /> We offer free pickup service at your doorstep.

    <Link to="/form2.js" ><button type="submit" className='btn btn-success' style={{ position: 'absolute', top: '80px', right: '280px', fontSize: '1.4rem', fontFamily: 'cursive' }}>
          PickUp Request</button></Link>
      </div>
    </div>
  )
}

function AccurateWieght() {
  return (
    <div>
      <div className="col-4" style={{ position: 'absolute', top: '550px', left: '1150px' }} >
        <img src={Imgwieghing} />
      </div>
      <div> <h1 style={{ fontSize: '2rem', fontFamily: 'cursive', position: 'absolute', top: '650px', left: '300px' }}>Accurate Weight
</h1> </div>
      <div className="col fontservice" style={{ position: 'absolute', top: '700px', left: '200px' }}>
        We use certified calibrated weighing scales that gives
        <br />  complete assurance on accurate weight.
      </div>
      <div>
        {/* <button type="submit" className='btn btn-success' style={{ position: 'absolute', top: '790px', right: '1200px', fontSize: '1.4rem', fontFamily: 'cursive' }}>
          PickUp Request</button> */}
      </div>
    </div>
  );
}


function RightValue() {
  return (
    <div>
      <div className="col-4" style={{ position: 'absolute', top: '950px', left: '10px' }} >
        <img src={ImgMoney} width="500" height="400" />
      </div>
      <div> <h1 style={{ fontSize: '2rem', fontFamily: 'cursive', position: 'absolute', top: '1050px', left: '900px' }}>
        Right Value
</h1> </div>
      <div className="col fontservice" style={{ position: 'absolute', top: '1100px', left: '690px' }}>
        We pay the right value to customers considering minimal
<br /> operational cost towards doorstep service.
      </div>
      <div>
        {/* <button type="submit" className='btn btn-success' style={{ position: 'absolute', top: '1200px', right: '650px', fontSize: '1.4rem', fontFamily: 'cursive' }}>
          PickUp Request</button> */}
      </div>
    </div>
  );
}


export default App;