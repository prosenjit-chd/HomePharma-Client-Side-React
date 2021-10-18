import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArrowBarLeft } from 'react-bootstrap-icons';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    // Use UseParam here 
    const { id } = useParams();
    // Use UseState Here 
    const [service, setService] = useState({});
    const history = useHistory();

    // Data fetch here 
    useEffect(() => {
        fetch('../medicine.json')
            .then(res => res.json())
            .then(data => handleSingleData(data))
    }, []);

    // Find single data using function 
    const handleSingleData = (data) => {
        setService(data.find(d => d.id === id))
    }

    // Single button back function 
    const seeMealHandler = () => {
        history.push('/services');
    }
    
    return (
        <div>
            <Container className="text-center alert alert-danger" style={{ "marginTop": "80px" }}>
                <div>
                    <img className="img-fluid mb-3" style={{ "height": "400px", "width": "500px" }} src={service.img} alt="" />
                    <h3 style={{color: "#e6520e"}}>Medicine Name: {service.title}</h3>
                    <h5>Unit Price: {service.price} BDT</h5>
                    <h5>Medicine Type: {service.type}</h5>
                    <p className="w-75 mx-auto text-dark">{service.deatails}</p>
                    <h6 className="w-75 mx-auto">Dosages: {service.dosage}</h6>
                    <h6 className="w-75 mx-auto text-danger"><b>Side Effect: </b>{service.sideeffect}</h6>
                    <Button variant="warning" onClick={seeMealHandler}><ArrowBarLeft size={30} /> See All Medicine</Button>
                </div>
   
        </Container>
        </div>
    );
};

export default ServiceDetails;