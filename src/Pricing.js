import './App.css';
import { Card } from 'react-bootstrap';
import imgraddi from './raddi.jpg';
import imgbottle from './plastics.jpg';
import imgmetal from './metal.jpg';
import React, { useRef } from 'react';
import { useWindowScroll } from "react-use";
function Pricing() {
    const pricingSection = useRef(null);

    const gotopricingSection = () => window.scrollTo(
        {
            top: pricingSection.current.offsetTop,
            behavior: "smooth"
        });
    return (
        <div>
            <div>
                <h1 className="pricingtitle" ref={pricingSection} id="pricing" style={{ position: 'absolute', top: '1700px', left: '700px' }}>Pricing</h1>
            </div >
            <div className="col d-flex justify-content-between" > <PricingCards />
                <PricingCards2 />
                <PricingCards3 />
            </div>
        </div>
    )
}

function PricingCards() {


    return (
        <div className='card ' style={{ height: '500px', width: '400px', position: 'relative', top: '1800px' }}>
            <Card.Img variant="top" src={imgraddi} />
            <Card.Body>
                <Card.Title ><h2>Paper Waste</h2></Card.Title>
                <Card.Text>
                    <h3 style={{ align: 'center' }}>Rates/Kg</h3>
                    <li>
                        NewPaper = Rs 11/Kg
                    </li>
                    <li>
                        Carton = Rs 12/Kg
                    </li>
                    <li>
                        Corrugated Box = Rs 6/Kg
                    </li>
                </Card.Text>
            </Card.Body>
        </div>
    )
}

function PricingCards2() {


    return (
        <div className='card ' style={{ height: '500px', width: '400px', position: 'relative', top: '1800px' }}>
            <Card.Img variant="top" src={imgbottle} height="300px" />
            <Card.Body>
                <Card.Title ><h2>Plastic Waste</h2></Card.Title>
                <Card.Text>
                    <h3>Rates/Kg</h3>
                    <li>
                        ABS = Rs 120/Kg
                    </li>
                    <li>
                        HDPE = Rs 45/Kg
                    </li> <li>
                        LDPE = Rs 20/Kg
                    </li>

                </Card.Text>
            </Card.Body>
        </div>
    )
}
function PricingCards3() {


    return (
        <div className='card ' style={{ height: '510px', width: '400px', position: 'relative', top: '1800px' }}>
            <Card.Img variant="top" src={imgmetal} width="1000" height="300px" />
            <Card.Body>
                <Card.Title ><h2>Metal Waste</h2></Card.Title>
                <Card.Text>
                    <h3>Rates/Kg</h3>
                    <li>
                        Aluminium = 125Rs/Kg
                    </li>
                    <li>
                        Cast Iron = 125Rs/Kg
                    </li> <li>
                        Steel = 125Rs/Kg
                    </li> <li>
                        Copper = 125Rs/Kg
                    </li>
                </Card.Text>
            </Card.Body>
        </div>
    )
}

export default Pricing;