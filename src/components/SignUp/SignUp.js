import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { Link, NavLink } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    // const redirect_uri = location.state?.from || '/services';
    // console.log(location.state.from);

    const handleGoogleSignup = () => {
     signInUsingGoogle()
    //  .then(result => {
    //      history.push(redirect_uri)
    //  } )
    }
    
    return (
                // React Bootstrap component use here         
            <Container fluid className="home d-flex justify-content-center align-items-center">
                <div className="home-detai">
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="title" style={{color: "#e6520e"}}>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="title" style={{color: "#e6520e"}}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="title" style={{color: "#e6520e"}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    {/* In Active Button  */}
                    <Button variant="info" type="submit" >
                        Submit
                    </Button>
                    </Form>
                    <Link to="/signin">Already Have A Account?</Link>

                    <p className="text-success"> ......OR........</p>
                    <Button onClick={handleGoogleSignup} variant="success" type="submit" className="" > 
                    <Google/> SignIn With Google
                    </Button>
                </div>
        </Container>
    );
};

export default SignUp;