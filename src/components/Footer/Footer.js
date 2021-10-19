import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bicycle, BinocularsFill, CashCoin, CreditCard2Back, Headset } from 'react-bootstrap-icons';
// External CSS Style Added here 
import './Footer.css'

// Here use all are bootstrao component 
const Footer = () => {
    return (
        
        <div className="mt-4">
        <div>
        <section className="container-fluid about-us-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="shop-departments">
                            <ul>
                                <li>
                                    <h5>Shop departments</h5>
                                </li>
                                <li>Medicine</li>
                                <li>Test</li>
                                <li>Inhaler</li>
                                <li>Injection</li>
                                <li>Sapogitor</li>
                                <li>Vacine</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="account-shipping-info">
                            <ul>
                                <li>
                                    <h5>Account & shipping info</h5>
                                </li>
                                <li>Your account</li>
                                <li>Shipping rates & policies</li>
                                <li>Refunds & replacements</li>
                            </ul>
                        </div>
                        <div className="about-us">
                            <ul>
                                <li>
                                    <h5>About us</h5>
                                </li>
                                <li>About company</li>
                                <li>Our team</li>
                                <li>Careers</li>
                                <li>News</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="stay-informed">
                            <h5>Download our app</h5>
                            <div className="app">
                                <div className="ios">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                        alt=""/>
                                    <div className="ios-detail">
                                        <small>Download on the</small>
                                        <h6>App Store</h6>
                                    </div>
                                </div>
                                <div className="android">
                                    <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/google-play-store-logo.png"
                                        alt=""/>
                                    <div className="android-detail">
                                        <small>Download on the</small>
                                        <h6>Google Play</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="container-fluid why-us-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <BinocularsFill/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Fast and free delivery</h5>
                                <p>Free delivery for all orders over $200</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <CashCoin/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Money back guarantee</h5>
                                <p>We return money within 30 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <Headset/>
                            </div>
                            <div className="why-us-detail">
                                <h5>24/7 customer support</h5>
                                <p>Friendly 24/7 customer support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="why-us">
                            <div className="why-us-logo">
                                <CreditCard2Back/>
                            </div>
                            <div className="why-us-detail">
                                <h5>Secure online payment</h5>
                                <p>We possess SSL / Secure сertificate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className="copyright">© All rights reserved. HomePharma.  Prosenjit Chowdhury. 2021</p>
            </div>
        </section>
        </div>



















        {/* <Container  fluid className="footer-total">
            <Container>
            <Row className="">
                <Col xs="12" md="2" lg="4">
                <div className="d-flex justify-content-between">
                    <div>
                        <div className="">
                        <small><b>Address: </b>
                            Kalabagan, West Panthapath, Dhaka.</small>
                        <small>Mobile: 01741362417 </small> 
                        <small>Email: prosenjit.chd@gmail.com </small> 
                        </div>
                    </div>

                    <div>
                        <div className="">
                        <ul>FOR CUSTOMER</ul>
                        </div>
                        <div className="">
                        <li>Request Order</li>
                        <li>Urgent Order</li>
                        <li>Find Store</li>
                        <li>How to Order</li>
                        </div>
                    </div>

                    <div>
                    <div className="">
                      <ul>SUPPORT</ul>
                    </div>
                    <div className="">
                      <li>Contact Us</li>
                      <li>Return Policy</li>
                      <li>Terms & Conditions</li>
                      <li>Privacy Policy</li>
                    </div>
                    </div>

                    <div>
                    <div>
                    <div className="footer-logo">
                          <h5>Download the App</h5>
                          <div>
                            <div className="ios">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"
                                    alt=""/>
                                <div className="ios-detail">
                                    <small>Download on the</small>
                                    <h6>App Store</h6>
                                </div>
                            </div>
                            <div className="android">
                                <img src="https://w7.pngwing.com/pngs/538/1022/png-transparent-playstore-icon-angle-brand-yellow-media-play-2-angle-rectangle-triangle-thumbnail.png"
                                    alt=""/>
                                <div className="android-detail">
                                    <small>Download on the</small>
                                    <h6>Google Play</h6>
                                </div>
                            </div>
                        </div>
                         </div>
                        </div>
                    </div>
                </div>
                </Col>
                <p className="text-light mt-4">© 2021 Home Pharma. All rights reserved</p>
            </Row>
            </Container>
        </Container > */}
        </div>

    );
};

export default Footer;