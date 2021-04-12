import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../styles/contact.css';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <section className="contact py-5">
            <Container>
                <div className="title mb-5">
                    <h6>Contact Us</h6>
                    <h2>always connect with us</h2>
                </div>
                <Form
                    className="contact-form w-75 mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Form.Group>
                        <Form.Control
                            type="email"
                            {...register('email', { required: true })}
                            placeholder="Email*"
                        />
                        {errors.email && (
                            <Form.Text className="text-danger">
                                Email is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            {...register('subject', { required: true })}
                            placeholder="Subject*"
                        />
                        {errors.subject && (
                            <Form.Text className="text-danger">
                                Subject is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            {...register('message', { required: true })}
                            placeholder="Message*"
                            as="textarea"
                            rows={3}
                        />
                        {errors.message && (
                            <Form.Text className="text-danger">
                                Message is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                    <div className="text-center">
                        <button className="btn custom-btn" type="submit">
                            Submit
                        </button>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Contact;
