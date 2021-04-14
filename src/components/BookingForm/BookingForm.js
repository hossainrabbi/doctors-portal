import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const BookingForm = ({ title, selectedDate, closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // data.service = title;
        // data.date = selectedDate;
        // data.created = new Date();

        // fetch('http://localhost:8000/addapoitment', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        // });

        closeModal();
    };

    return (
        <section className="booking-form">
            <h5>{title}</h5>
            <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        {...register('name', { required: true })}
                        placeholder="Your Name*"
                    />
                    {errors.name && (
                        <Form.Text className="text-danger">
                            Name is required!
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="number"
                        {...register('phone', { required: true })}
                        placeholder="Your Phone Number*"
                    />
                    {errors.phone && (
                        <Form.Text className="text-danger">
                            Phone Number is required!
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Your Email*"
                    />
                    {errors.email && (
                        <Form.Text className="text-danger">
                            Email is required!
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control
                            as="select"
                            {...register('gender', { required: true })}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </Form.Control>
                        {errors.gender && (
                            <Form.Text className="text-danger">
                                Gender is required!
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control
                            type="number"
                            {...register('age', { required: true })}
                            placeholder="Your Age*"
                        />
                        {errors.age && (
                            <Form.Text className="text-danger">
                                Age is required!
                            </Form.Text>
                        )}
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control
                            type="number"
                            {...register('weight', { required: true })}
                            placeholder="Your Weight*"
                        />
                        {errors.weight && (
                            <Form.Text className="text-danger">
                                Weight is required!
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form.Row>

                <div className="text-right">
                    <button className="btn custom-btn" type="submit">
                        Submit
                    </button>
                </div>
            </Form>
        </section>
    );
};

export default BookingForm;
