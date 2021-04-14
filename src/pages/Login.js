import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import loginImage from '../images/login.png';
import {
    firebaseInitialize,
    signInUserWithEmail,
} from '../components/Firebase/Firebase';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

firebaseInitialize();

const Login = () => {
    const [loggendUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: '/' } };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const onSubmit = (data) => {
        const { email, password } = data;

        if (email && password) {
            signInUserWithEmail(email, password)
                .then((res) => {
                    setLoggedInUser(res);
                    history.replace(from);
                })
                .catch((err) => {
                    setLoggedInUser(err);
                });
        }
    };

    return (
        <Container>
            <div className="title mt-3">
                <h2>Login</h2>
            </div>
            <Row className="align-items-center">
                <Col md={6}>
                    {loggendUser.err && (
                        <Alert variant="danger">{loggendUser.err}</Alert>
                    )}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email*"
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                            />
                            {errors.email && (
                                <Form.Text className="text-danger">
                                    {errors.email.message}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password*"
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                            />
                            {errors.password && (
                                <Form.Text className="text-danger">
                                    {errors.password.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <div>
                            <Link to="/signin">Create an account</Link>
                        </div>
                        <button className="btn custom-btn" type="submit">
                            Login
                        </button>
                    </Form>
                </Col>
                <Col md={6}>
                    <img src={loginImage} alt="loginImage" />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
