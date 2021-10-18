import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
// Custom CSS style import here 
import './Log.css'

const Log = () => {
    return (
        // React Bootstrap component use here 

        <Container fluid className="home d-flex justify-content-center align-items-center">
            <div className="home-detail">
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="title">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="title">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {/* In Active Button  */}
                <Button variant="success" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
    </Container>
    );
};

export default Log;