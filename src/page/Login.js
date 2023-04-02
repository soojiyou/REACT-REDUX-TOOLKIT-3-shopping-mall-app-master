import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({ authenticate, setAuthenticate }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(authenticateAction.login(authenticate, id, password));
        setAuthenticate(true);
        navigate("/");
    }

    return (
        <div>
            <Container className='login-form-box'>

                <Form className='login-form' onSubmit={(e) => loginUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setId(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="danger" type="submit">
                        Login
                    </Button>
                </Form>

            </Container>
        </div>
    )
}

export default Login