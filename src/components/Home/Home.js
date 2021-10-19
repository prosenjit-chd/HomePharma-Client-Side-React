import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    // Use State declear here 
    const [service, setService] = useState([]);

    // sorting feature type course using function 
    const handleFeatured = (data) => {
        setService(data.filter(d => d.type === "home"))
    }

    // Data fetching
    useEffect(() => {
        fetch('./medicine.json')
            .then(res => res.json())
            .then(data => handleFeatured(data))
    }, []);

    return (
        <div>
            {/* Home page Carousel use here  */}
             <Carousel className="carousel-custom">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://pbs.twimg.com/media/FB9XS_TUcAQtc1m?format=jpg&name=4096x4096"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Fast Home Devivery</h3>
                    <p>Home Devivery vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://pbs.twimg.com/media/FB9XGxqVUAg0bOa?format=jpg&name=4096x4096"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Best Online Pharmecy</h3>
                    <p>Online Pharmecy dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-custom"
                    src="https://pbs.twimg.com/media/FB9WHhQVQAAGF8l?format=jpg&name=4096x4096"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Home Pharma always with you</h3>
                    <p>Our service commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            {/* Data fetching  */}
            <Container style={{ "marginTop": "80px" }}>
                <h2 className="t-color">Mostly Used Medicines</h2>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        service.map(course => <Service key={course.id} course={course} />)
                    }
                </Row>
            </Container>
        </div>

    );
};

export default Home;