import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { blog } from '../../data/blog';
import BlogCard from './BlogCard';
import '../../styles/blog.css';

const Blog = () => {
    return (
        <section className="container py-5">
            <div className="title mb-5">
                <h6>Our Blog</h6>
                <h2>From our Blog News</h2>
            </div>
            <Row>
                {blog.map((data) => (
                    <Col md={4} key={data.id}>
                        <BlogCard {...data} />
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Blog;
