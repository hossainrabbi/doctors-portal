import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import loginImage from '../images/login.png';
import {
    firebaseEmailSignedIn,
    firebaseInitialize,
} from '../components/Firebase/Firebase';
import { UserContext } from '../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

firebaseInitialize();

const SignIn = () => {
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
        const { name, email, password } = data;

        if (name && email && password) {
            firebaseEmailSignedIn(name, email, password)
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
                <h2>SignIn</h2>
            </div>
            <Row className="align-items-center">
                <Col md={6}>
                    {loggendUser.err && (
                        <Alert variant="danger">{loggendUser.err}</Alert>
                    )}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name*"
                                {...register('name', {
                                    required: 'Name is required',
                                    maxLength: {
                                        value: 30,
                                        message:
                                            'The maximum length of the password is 30',
                                    },
                                    minLength: {
                                        value: 3,
                                        message:
                                            'The minimum length of the password is 3',
                                    },
                                })}
                            />
                            {errors.name && (
                                <Form.Text className="text-danger">
                                    {errors.name.message}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email*"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Enter a Valid Email',
                                    },
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
                                    maxLength: {
                                        value: 20,
                                        message:
                                            'The maximum length of the password is 20',
                                    },
                                    minLength: {
                                        value: 6,
                                        message:
                                            'The minimum length of the password is 6',
                                    },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                        message:
                                            'Password must be at least a digit, a capital letter, a lowercase letter and a special letter.',
                                    },
                                })}
                            />
                            {errors.password && (
                                <Form.Text className="text-danger">
                                    {errors.password.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <div>
                            <Link to="/login">already have an account</Link>
                        </div>
                        <button className="btn custom-btn" type="submit">
                            SignIn
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

export default SignIn;
