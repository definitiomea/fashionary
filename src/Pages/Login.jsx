import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from '../Modules/ManageAccount';

import { useNavigate } from 'react-router-dom';

const Login = (/* {setAuthenticate} */) => {
    const accountlist = useSelector((state) => state.ManageAccount.accountlist);

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loginUser = useCallback((e) => {
        e.preventDefault();
        dispatch(login({id: id, password: password}))
        navigate("/");
    });

    return (
        <Container>
            <div className='loginarea'>
                <Form onSubmit={(e) => loginUser(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={(e) => {setId(e.target.value)}} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
}
 
export default Login;